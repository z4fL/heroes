import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

// Get one
export async function GET(request, { params: { id } }) {
  const hero = await prisma.hero.findUnique({
    where: {
      main_id: parseInt(id),
    },
    include: {
      roles: true,
      positions: true,
      specialities: true,
      skins: true,
      ratings: true,
      skills: {
        include: {
          skillCosts: true,
          skillCooldown: true,
          tags: true,
          specialTerms: true,
          specialValue: true,
        },
      },
    },
  });

  if (!hero)
    return NextResponse.json(
      {
        success: false,
        message: "Data Hero not found!",
        data: null,
      },
      {
        status: 404,
      }
    );
  else
    return NextResponse.json(
      {
        success: true,
        message: "Data Hero found!",
        data: hero,
      },
      {
        status: 200,
      }
    );
}

// Edit one
export async function PATCH(request, { params: { id } }) {}

// Delete one
export async function DELETE(request, { params: { id } }) {}
