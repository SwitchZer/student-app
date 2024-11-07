import React from "react";
import type {
  ColumnDef,
  HeaderGroup,
  Header,
  Row,
  Cell,
} from "@tanstack/react-table";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  SortingState,
  PaginationState,
} from "@tanstack/react-table";
import { IconButton } from "@material-tailwind/react";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "../ui/typography";

interface DataTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  pageCount: number;
  pageSize: number;
  pageIndex: number;
  onPaginationChange: (pagination: PaginationState) => void;
  onSortingChange?: (sorting: SortingState) => void;
  isLoading?: boolean;
  total?: number;
}

const DataTable = <T extends object>({
  data,
  columns,
  pageCount,
  pageSize,
  pageIndex,
  onPaginationChange,
  onSortingChange,
  isLoading = false,
  total,
}: DataTableProps<T>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [active, setActive] = React.useState(pageIndex + 1);

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data,
    columns,
    pageCount,
    state: {
      sorting,
      pagination,
    },
    onPaginationChange: (
      updater: PaginationState | ((prev: PaginationState) => PaginationState)
    ) => {
      if (typeof updater === "function") {
        onPaginationChange(updater(pagination));
      } else {
        onPaginationChange(updater);
      }
    },
    onSortingChange: (
      updater: SortingState | ((prev: SortingState) => SortingState)
    ) => {
      if (typeof updater === "function") {
        const newSorting = updater(sorting);
        setSorting(newSorting);
        onSortingChange?.(newSorting);
      } else {
        setSorting(updater);
        onSortingChange?.(updater);
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
  });

  const next = () => {
    if (active === pageCount) return;
    setActive(active + 1);
    onPaginationChange({ pageIndex: active, pageSize });
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    onPaginationChange({ pageIndex: active - 2, pageSize });
  };

  const jumpPrev = () => {
    const newPage = Math.max(1, active - 5);
    setActive(newPage);
    onPaginationChange({ pageIndex: newPage - 1, pageSize });
  };

  const jumpNext = () => {
    const newPage = Math.min(pageCount, active + 5);
    setActive(newPage);
    onPaginationChange({ pageIndex: newPage - 1, pageSize });
  };

  // Updated getVisiblePages function
  const getVisiblePages = () => {
    const range = [];
    const maxVisible = 5;

    if (pageCount <= maxVisible) {
      for (let i = 1; i <= pageCount; i++) {
        range.push(i);
      }
    } else {
      // Always show first page
      range.push(1);

      if (active > 3) {
        range.push("prev");
      }

      // Show 3 pages around the active page (1 before, active, 1 after)
      const start = Math.max(2, Math.min(active - 1, pageCount - 3));
      const end = Math.min(pageCount - 1, start + 2);

      for (let i = start; i <= end; i++) {
        range.push(i);
      }

      if (active < pageCount - 2) {
        range.push("next");
      }

      // Always show last page
      range.push(pageCount);
    }

    return range;
  };

  return (
    <div className="h-full w-full">
      <div className="overflow-scroll px-0 relative">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header: Header<T, unknown>) => (
                  <th
                    key={header.id}
                    className="border-b border-light-gray bg-white py-3 cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium leading-sm text-xs text-secondary"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Typography>
                      <ArrowUpDown className="h-3 w-3 text-secondary mr-5" />
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row: Row<T>, index: number) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "py-[7px]"
                : "py-[7px] border-b border-blue-gray-50";

              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell: Cell<T, unknown>) => (
                    <td key={cell.id} className={classes}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50">
            <Typography color="blue-gray">Loading...</Typography>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between border-t border-blue-gray-50 pt-6">
        {/* Pagination Info - Left Side */}
        <Typography color="gray" className="font-normal text-xs">
          {total
            ? `Showing ${pageIndex * pageSize + 1}-${Math.min(
                (pageIndex + 1) * pageSize,
                total
              )} of ${total} items`
            : "No items to display"}
        </Typography>

        {/* Pagination Controls - Right Side */}
        <div className="flex items-center gap-4">
          <IconButton
            variant="text"
            color="gray"
            onClick={prev}
            disabled={active === 1}
            className="rounded-sm h-8 w-8"
            placeholder={null}
          >
            <ChevronLeft strokeWidth={2} className="h-4 w-4 text-black" />
          </IconButton>
          <div className="flex items-center gap-2">
            {getVisiblePages().map((page, idx) => {
              if (page === "prev") {
                return (
                  <IconButton
                    key={idx}
                    variant="text"
                    color="gray"
                    onClick={jumpPrev}
                    className="rounded-sm h-8 w-8"
                    placeholder={null}
                  >
                    •••
                  </IconButton>
                );
              }
              if (page === "next") {
                return (
                  <IconButton
                    key={idx}
                    variant="text"
                    color="gray"
                    onClick={jumpNext}
                    className="rounded-sm h-8 w-8 text-secondary"
                    placeholder={null}
                  >
                    •••
                  </IconButton>
                );
              }
              return typeof page === "number" ? (
                <IconButton
                  key={idx}
                  variant={active === page ? "filled" : "text"}
                  color="gray"
                  onClick={() => {
                    setActive(page);
                    onPaginationChange({ pageIndex: page - 1, pageSize });
                  }}
                  className={`text-[16px] rounded-[4px] h-8 w-8 ${
                    active === page
                      ? "bg-dim-gray text-black font-medium"
                      : "font-normal text-secondary"
                  }`}
                  placeholder={null}
                >
                  {page}
                </IconButton>
              ) : (
                <Typography key={idx} color="gray" className="font-normal">
                  {page}
                </Typography>
              );
            })}
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={next}
            disabled={active === pageCount}
            className="rounded-sm"
            placeholder={null}
          >
            <ChevronRight strokeWidth={2} className="h-4 w-4 text-black" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
