import { NextRequest, NextResponse } from "next/server";

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
  const userId = request.nextUrl.pathname.split("/").pop(); // Extract the ID from the URL
  const user = userList.find((user) => user.id === Number(userId));

  if (user) {
    return NextResponse.json({ success: true, data: user });
  } else {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 }
    );
  }
}
