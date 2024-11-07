"use client";

import { useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Typography from "@/components/ui/typography";
import Select from "@/components/ui/select";

const loginSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  avatar: z.any(),
  schoolName: z.string(),
  class: z.string(),
  newPassword: z.string().min(6),
  newPasswordConfirm: z.string().min(6),
  country: z.string(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const InboxPage = () => {
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { control, handleSubmit, setValue } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      avatar: "",
      schoolName: "",
      class: "",
      newPassword: "",
      newPasswordConfirm: "",
      country: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
    } catch (error) {
      setError("An error occurred during login");
    }
  };

  const image = useWatch({ control, name: "avatar" });

  return (
    <div className="relative z-10 w-full max-w-[1064px] px-6 py-10 bg-white rounded-[30px]">
      <Typography className="text-center  text-2xl font-bold mb-6">
        Set up your account
      </Typography>

      <Typography className="text-center text-sm  mb-6 text-secondary">
        Fill out the details for your account.
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col w-full border-[#DEDEDEE5] border p-6 mb-10 rounded-[30px] items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-light-secondary flex items-center justify-center">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Avatar"
                className="w-24 h-24 rounded-full"
              />
            ) : (
              <Typography className="text-2xl font-extralight text-light-gray text-[50px] ">
                A
              </Typography>
            )}
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              setError(null);
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                const img = new window.Image();
                img.src = URL.createObjectURL(file);

                img.onload = () => {
                  if (file.size > 1024 * 1024) {
                    setError("File size must be less than 1MB");
                    return;
                  }
                  if (img.width < 200 || img.height < 200) {
                    setError("Minimum dimensions are 200x200 pixels");
                    return;
                  }
                  setValue("avatar", file);
                };
              }
            }}
            className="hidden"
            id="avatar-upload"
          />
          <label htmlFor="avatar-upload">
            <Button
              type="button"
              size="sm"
              outline
              onClick={() => {
                inputRef.current?.click();
              }}
            >
              Add profile picture
            </Button>
          </label>

          <Typography className="text-center text-[10px] text-light-gray">
            Maximum file size: 1 MB; minimum dimensions: 200x200 pixels in JPG
            or PNG format
          </Typography>
          {error && (
            <Typography className="text-center font-bold text-[10px] text-red-500">
              {error}
            </Typography>
          )}
        </div>

        <div className="flex gap-6 max-w-[704px] w-full">
          <div className="w-full">
            <Input
              name="name"
              label="Your Name"
              placeholder="Enter Your Name"
              control={control}
            />

            <div className="mb-10" />

            <Input
              name="email"
              label="Your Email"
              placeholder="Enter Your Email"
              type="email"
              control={control}
            />

            <div className="mb-10" />

            <Input
              name="newPassword"
              label="New Password"
              placeholder="Enter New Password"
              type="password"
              control={control}
            />

            <div className="mb-10" />
          </div>

          <div className="w-full">
            <Input
              name="schoolName"
              label="School's Name"
              placeholder="Enter School's Name"
              control={control}
            />

            <div className="mb-10" />

            <Input
              name="class"
              label="Class"
              placeholder="Enter Class"
              control={control}
            />

            <div className="mb-10" />

            <Input
              name="newPasswordConfirm"
              label="Confirm Password"
              placeholder="Enter Confirm Password"
              type="password"
              control={control}
            />

            <div className="mb-10" />
          </div>
        </div>

        <div className="flex gap-6 max-w-[704px] w-full">
          <Select
            name="country"
            label="Country"
            options={[{ label: "UAE", value: "UAE" }]}
            control={control}
            placeholder="Select Country"
          />
        </div>

        <div className="flex justify-end mt-8 w-full">
          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default InboxPage;
