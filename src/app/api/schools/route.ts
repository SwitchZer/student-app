import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  // Replace this with your actual database query
  // This is just a mock implementation
  const mockData = Array.from({ length: limit }).map((_, index) => ({
    id: `${(page - 1) * limit + index + 1}`,
    name: `School ${(page - 1) * limit + index + 1} Testing Satu Dua Tiga`,
    admin: `Admin ${(page - 1) * limit + index + 1}`,
    creationDate: "12 Jan 2024",
    endDate: "12 Jan 2025",
    numberOfAdmins: Math.floor(Math.random() * 50) + 1,
    activeStudents: Math.floor(Math.random() * 200) + 1,
    status: "Active",
  }));

  // Mock total count
  const total = 100;

  return NextResponse.json({
    data: mockData,
    total,
    page,
    limit,
  });
}
