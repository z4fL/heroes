import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

// Get All
export async function GET() {
  const heroes = await prisma.hero.findMany({
    select: {
      main_id: true,
      name: true,
      roles: {
        select: {
          id: true,
        },
      },
      ratings: {
        select: {
          value: true,
        },
        where: {
          name: "Difficulty",
        },
      },
      skins: {
        select: {
          name: true,
          portrait: true,
        },
        where: {
          skinTag: "Default",
        },
      },
    },
    orderBy: {
      main_id: "desc",
    },
  });

  return NextResponse.json(
    {
      sucess: true,
      data: heroes,
    },
    {
      status: 200,
    }
  );
}

// Insert one
export async function POST(request) {}
