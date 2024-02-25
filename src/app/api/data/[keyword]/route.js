import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

// Get one
export async function GET(request, { params: { keyword } }) {
  const model = prisma[keyword];
  if (model) {
    const data = await model.findMany();
    return NextResponse.json(
      {
        sucess: true,
        data: data,
      },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      {
        sucess: false,
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
