"use client";

import React from "react";
import DataTable from "@/components/datatable";
import type { ColumnDef } from "@tanstack/react-table";
import type { PaginationState, SortingState } from "@tanstack/react-table";
import { Avatar, IconButton } from "@material-tailwind/react";
import { MoreHorizontal } from "lucide-react";
import Typography from "@/components/ui/typography";
import FormModal from "./components/FormModal";
import Input from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/button";
import Select from "@/components/ui/select";
import BriefCaseCircle from "../../../assets/svgs/briefcase-circle.svg";
import Plus from "../../../assets/svgs/plus.svg";
import Search from "../../../assets/svgs/search.svg";

import Image from "next/image";

interface School {
  id: string;
  name: string;
  admin: string;
  creationDate: string;
  endDate: string;
  numberOfAdmins: number;
  activeStudents: number;
  status: string;
}

const columns: ColumnDef<School>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar
          src={`https://ui-avatars.com/api/?name=${row.original.name}`}
          alt={row.original.name}
          size="sm"
          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
          placeholder={null}
        />
        <Typography variant="small" color="blue-gray" className="font-normal ">
          {row.original.name}
        </Typography>
      </div>
    ),
  },
  {
    accessorKey: "admin",
    header: "Admin",
    cell: ({ getValue }) => (
      <Typography variant="small" color="blue-gray" className="font-normal">
        {getValue<string>()}
      </Typography>
    ),
  },
  {
    accessorKey: "creationDate",
    header: "Creation date",
    cell: ({ getValue }) => (
      <Typography variant="small" color="blue-gray" className="font-normal">
        {getValue<string>()}
      </Typography>
    ),
  },
  {
    accessorKey: "endDate",
    header: "End date",
    cell: ({ getValue }) => (
      <Typography variant="small" color="blue-gray" className="font-normal">
        {getValue<string>()}
      </Typography>
    ),
  },
  {
    accessorKey: "numberOfAdmins",
    header: "Number of admins",
    cell: ({ getValue }) => (
      <Typography variant="small" color="blue-gray" className="font-normal">
        {getValue<number>()}
      </Typography>
    ),
  },
  {
    accessorKey: "activeStudents",
    header: "Active students",
    cell: ({ getValue }) => (
      <Typography variant="small" color="blue-gray" className="font-normal">
        {getValue<number>()}
      </Typography>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return (
        <div className="w-max">
          <Typography
            variant="small"
            className={`font-medium ${
              status === "Active" ? "text-green-600" : "text-blue-gray-600"
            }`}
          >
            {status}
          </Typography>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <IconButton variant="text" color="blue-gray" placeholder={null}>
        <MoreHorizontal className="h-5 w-5" />
      </IconButton>
    ),
  },
];

export default function SchoolsPage() {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 5,
    });
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [data, setData] = React.useState<School[]>([]);
  const [pageCount, setPageCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [isFormModalVisible, setIsFormModalVisible] = React.useState(false);

  const { control } = useForm();

  // Fetch data from your API
  const fetchData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      // Replace with your API endpoint
      const response = await fetch(
        `/api/schools?page=${pageIndex + 1}&limit=${pageSize}&sort=${
          sorting.length
            ? `${sorting[0].id},${sorting[0].desc ? "desc" : "asc"}`
            : ""
        }`
      );
      const result = await response.json();

      setData(result.data);
      setPageCount(Math.ceil(result.total / pageSize));
      setTotal(result.total);
    } catch (error) {
      console.error("Failed to fetch schools:", error);
    } finally {
      setIsLoading(false);
    }
  }, [pageIndex, pageSize, sorting]);

  // Fetch data when pagination or sorting changes
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={BriefCaseCircle}
            alt="briefcase-circle h-[35px] w-[35px]"
          />
          <Typography className="text-light-dim-gray font-medium">
            Schools (100)
          </Typography>
        </div>
        <Button outline size="md" onClick={() => setIsFormModalVisible(true)}>
          Create New{" "}
          <Image src={Plus} alt="plus" className="h-[12px] w-[12px]" />
        </Button>
      </div>
      <div className="mb-4 flex items-center gap-4">
        <Input
          name="search"
          placeholder="Search"
          type="search"
          control={control}
          leftIcon={
            <Image src={Search} alt="search" className="h-[24px] w-[24px]" />
          }
        />
        <Select
          name="status"
          label="All Status"
          options={[{ label: "UAE", value: "UAE" }]}
          control={control}
          className="w-[25%]"
          variant="outlined"
        />
      </div>
      <DataTable
        data={data}
        columns={columns}
        pageCount={pageCount}
        pageSize={pageSize}
        pageIndex={pageIndex}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        isLoading={isLoading}
        total={total}
      />
      <FormModal
        open={isFormModalVisible}
        handleOpen={() => setIsFormModalVisible(!isFormModalVisible)}
      />
    </div>
  );
}
