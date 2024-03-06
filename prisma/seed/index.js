const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Ling = require("./data/ling");
const Lunox = require("./data/lunox");

async function main() {
  const roles = await prisma.role.createMany({
    data: [
      {
        name: "Tank",
        icon: "/images/roles/tank_icon.png",
      },
      {
        name: "Fighter",
        icon: "/images/roles/fighter_icon.png",
      },
      {
        name: "Assassin",
        icon: "/images/roles/assassin_icon.png",
      },
      {
        name: "Mage",
        icon: "/images/roles/mage_icon.png",
      },
      {
        name: "Marksman",
        icon: "/images/roles/marksman_icon.png",
      },
      {
        name: "Support",
        icon: "/images/roles/support_icon.png",
      },
    ],
  });

  const positions = await prisma.position.createMany({
    data: [
      {
        name: "Roam",
        icon: "/images/positions/roam_icon.png",
      },
      {
        name: "Jungler",
        icon: "/images/positions/jungler_icon.png",
      },
      {
        name: "Mid Lane",
        icon: "/images/positions/midlane_icon.png",
      },
      {
        name: "EXP Lane",
        icon: "/images/positions/explane_icon.png",
      },
      {
        name: "Gold Lane",
        icon: "/images/positions/goldlane_icon.png",
      },
    ],
  });

  const specialities = await prisma.speciality.createMany({
    data: [
      { name: "Regen" },
      { name: "Crowd Control" },
      { name: "Finisher" },
      { name: "Charge" },
      { name: "Push" },
      { name: "Damage" },
      { name: "Burst" },
      { name: "Poke" },
      { name: "Initiator" },
      { name: "Magic Damage" },
      { name: "Mixed Damage" },
      { name: "Guard" },
      { name: "Chase" },
      { name: "Control" },
      { name: "Support" },
    ],
  });

  const tags = await prisma.tag.createMany({
    data: [
      {
        name: "Buff", // 1
        rgb: "79,156,184",
      },
      {
        name: "Mobility", // 2
        rgb: "162,105,198",
      },
      {
        name: "Damage", // 3
        rgb: "199,121,85",
      },
      {
        name: "Burst", // 4
        rgb: "199,121,85",
      },
      {
        name: "CC", // 5
        rgb: "205,93,109",
      },
      {
        name: "AOE", // 6
        rgb: "199,121,85",
      },
      {
        name: "Heal", // 7
        rgb: "89,168,111",
      },
      {
        name: "Slow", // 8
        rgb: "205,93,109",
      },
      {
        name: "Invicible", // 9
        rgb: "177,157,96",
      },
    ],
  });

  const ling = await prisma.hero.upsert(Ling);
  const lunox = await prisma.hero.upsert(Lunox);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
