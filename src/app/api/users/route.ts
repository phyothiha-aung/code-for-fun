import { NextResponse, NextRequest } from "next/server";
import { parseQueryParam, createPaginatedResponse } from "@/utils/pagination";

const userList = [
  {
    id: 1,
    name: "Phyo Thiha Aung",
    age: 25,
  },
  {
    id: 2,
    name: "Nick Wilde",
    age: 25,
  },
  {
    id: 3,
    name: "Ko Teemo",
    age: 25,
  },
  {
    id: 4,
    name: "Teemo",
    age: 25,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = parseQueryParam(searchParams.get("page"), 1);
  const limit = parseQueryParam(searchParams.get("limit"), 12);

  const response = createPaginatedResponse(userList, { page, limit });

  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  const req = await request.json();

  return NextResponse.json({ success: true, data: req }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  try {
    const req = await request.json();

    console.log(req);

    return NextResponse.json(
      { success: true, message: "Deleted" },
      { status: 202 }
    );
  } catch (error) {
    console.error("Error processing DELETE request:", error);

    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
