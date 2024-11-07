"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Typography from "@/components/ui/typography";
import Select from "@/components/ui/select";
import { Dialog } from "@material-tailwind/react";

const schoolSchema = z.object({
  adminName: z.string().min(1, "Admin name is required"),
  adminEmail: z.string().email("Invalid email address"),
  schoolName: z.string().min(1, "School name is required"),
  schoolEmail: z.string().email("Invalid email address"),
  planEndDate: z.string(),
  country: z.string().min(1, "Country is required"),
  numberOfAdmins: z.number().min(0),
  numberOfStudents: z.number().min(0),
});

type SchoolFormValues = z.infer<typeof schoolSchema>;

interface FormModalProps {
  open: boolean;
  handleOpen: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ open, handleOpen }) => {
  const { control, handleSubmit } = useForm<SchoolFormValues>({
    resolver: zodResolver(schoolSchema),
    defaultValues: {
      adminName: "",
      adminEmail: "",
      schoolName: "",
      schoolEmail: "",
      planEndDate: "",
      country: "",
      numberOfAdmins: 0,
      numberOfStudents: 0,
    },
  });

  const onSubmit = async (values: SchoolFormValues) => {
    console.log(values);
    // Handle form submission
    handleOpen();
  };

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="lg"
      className="p-16 "
      placeholder={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography className="text-[26px] mb-10 text-center font-medium text-black">
          Add a new school
        </Typography>

        <div className="flex flex-col justify-between gap-10">
          <div className="flex gap-10">
            <Input
              name="adminName"
              label="School's admin"
              placeholder="School's admin"
              control={control}
            />
            <Input
              name="schoolName"
              label="School's name"
              placeholder="School's name"
              control={control}
            />
          </div>

          <div className="flex gap-10">
            <Input
              name="adminEmail"
              label="Admin's email"
              placeholder="email@mail.com"
              control={control}
            />
            <Input
              name="schoolEmail"
              label="School's email"
              placeholder="email@mail.com"
              control={control}
            />
          </div>

          <Input
            name="planEndDate"
            label="Plan end date"
            type="date"
            control={control}
          />

          <Select
            name="country"
            label="Country"
            options={[{ label: "UAE", value: "UAE" }]}
            control={control}
            placeholder="Select country"
          />

          <Input
            name="schoolName"
            label="School's name"
            placeholder="School's name"
            control={control}
          />

          <Input
            name="numberOfAdmins"
            label="Number of admins"
            type="number"
            control={control}
          />

          <Input
            name="numberOfStudents"
            label="Number of students"
            type="number"
            control={control}
          />
        </div>

        <div className="flex justify-center pt-10">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Dialog>
  );
};

export default FormModal;
