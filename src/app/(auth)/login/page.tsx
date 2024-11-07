"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import ArrowRight from "../../../assets/svgs/arrow-right.svg";

import Image from "next/image";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      setError("An error occurred during login");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-[400px] p-16 bg-white rounded-[30px] -mt-[74px]">
      <Typography className="text-center  text-2xl font-bold mb-14">
        Student’s Web-App
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <Input
          name="email"
          label="Email"
          placeholder="Enter email"
          type="email"
          control={control}
        />

        <div className="mb-10" />

        <Input
          name="password"
          label="Password"
          placeholder="Enter Password"
          type="password"
          control={control}
        />

        <div className="mb-6" />

        <Link href="/forgot-password">
          <Typography className="text-xs font-medium text-right">
            Forgot Password
          </Typography>
        </Link>

        <div className="mb-10" />

        <div className="flex justify-center">
          <Button type="submit">
            Continue{" "}
            <Image src={ArrowRight} alt="Arrow Right" width={16} height={16} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
