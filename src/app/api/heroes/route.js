import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

// Get All
export async function GET() {
  const heroes = await prisma.hero.findMany({
    orderBy: {
      main_id: "desc",
    },
    include: {
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
