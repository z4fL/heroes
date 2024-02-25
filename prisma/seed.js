const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
        name: "Buff",
        rgb: "79,156,184",
      },
      {
        name: "Mobility",
        rgb: "162,105,198",
      },
      {
        name: "Damage",
        rgb: "199,121,85",
      },
      {
        name: "Burst",
        rgb: "199,121,85",
      },
      {
        name: "CC",
        rgb: "205,93,109",
      },
    ],
  });

  const ling = await prisma.hero.upsert({
    where: { main_id: 84 },
    update: {},
    create: {
      main_id: 84,
      roles: {
        connect: { id: 3 },
      },
      positions: {
        connect: { id: 2 },
      },
      specialities: {
        connect: [{ id: 13 }, { id: 7 }],
      },
      name: "Ling",
      skins: {
        create: [
          {
            name: "Fiery Dance",
            potrait: "/images/heroes/84/skins/potraits/Hero842-portrait.png",
            splashArt:
              "/images/heroes/84/skins/splash_arts/Ling_(Fiery_Dance).jpg",
          },
          {
            name: "Street Punk",
            potrait: "/images/heroes/84/skins/potraits/Hero843-portrait.png",
            splashArt:
              "/images/heroes/84/skins/splash_arts/Ling_(Street_Punk).jpg",
          },
          {
            name: "Night Shade",
            potrait: "/images/heroes/84/skins/potraits/Hero844-portrait.png",
            splashArt:
              "/images/heroes/84/skins/splash_arts/Ling_(Night_Shade).jpg",
          },
          {
            name: "Cosmo Guard",
            potrait: "/images/heroes/84/skins/potraits/Hero845-portrait.png",
            splashArt:
              "/images/heroes/84/skins/splash_arts/Ling_(Cosmo_Guard).jpg",
          },
          {
            name: "Serene Plume",
            potrait: "/images/heroes/84/skins/potraits/Hero846-portrait.png",
            splashArt:
              "/images/heroes/84/skins/splash_arts/Ling_(Serene_Plume).jpg",
          },
          {
            name: "M-World",
            potrait: "/images/heroes/84/skins/potraits/Hero847-portrait.png",
            splashArt:
              "/images/heroes/84/skins/splash_arts/Ling_(M-World_Ling).jpg",
          },
          {
            name: "Lord Shen",
            potrait: "/images/heroes/84/skins/potraits/Hero848-portrait.png",
            splashArt:
              "/images/heroes/84/skins/splash_arts/Ling_(Lord_Shen).jpg",
          },
        ],
      },
      ratings: {
        create: [
          {
            name: "Durability",
            value: 50,
          },
          {
            name: "Offense",
            value: 60,
          },
          {
            name: "Control Effects",
            value: 30,
          },
          {
            name: "Difficulty",
            value: 70,
          },
        ],
      },
      skills: {
        create: [
          {
            type: "Passive",
            name: "Cloud Walker",
            icon: "/images/heroes/84/abilities/Cloud_Walker.png",
            tags: {
              connect: { id: 1 },
            },
            description:
              "Ling's superb Lightness Skill allows him to leap among walls and assassinate his enemies from above.",
            specialValue: {
              create: [
                {
                  name: "energy_on_wall",
                  valuesFloat: [4],
                  isPercentage: false,
                  heading: "Gains Energy on wall : ",
                },
                {
                  name: "energy_on_damage",
                  valuesFloat: [5],
                  isPercentage: false,
                  heading: "Gains Energy on attack : ",
                },
                {
                  name: "multiply_cr",
                  valuesFloat: [1.5],
                  isPercentage: false,
                  heading: "Gains multiply Crit Rate : ",
                },
                {
                  name: "init_cdm",
                  valuesFloat: [150],
                  isPercentage: true,
                  heading: "Initial Crit Damage : ",
                },
              ],
            },
          },
          {
            type: "Skill 1",
            name: "Finch Poise",
            skillCosts: {
              create: {
                value: 30.0,
              },
            },
            skillCooldown: {
              create: {
                value: 20.0,
              },
            },
            icon: "/images/heroes/84/abilities/Finch_Poise.png",
            tags: {
              connect: [{ id: 2 }, { id: 1 }],
            },
            description:
              "Ling casts his Qinggong (Lightness SKill), leaping to the wall and entering %half_stealth% state. He can jump among walls freely with no Cooldown.",
            specialTerms: {
              create: {
                name: "half_stealth",
                value: "half-stealth",
                color: "#fb1f1f",
              },
            },
            specialValue: {
              create: [
                {
                  name: "basic_attack_range",
                  valuesFloat: [6.2],
                  isPercentage: false,
                  heading: "Basic Attack Range : ",
                },
                {
                  name: "gain_crit_rate",
                  valuesFloat: [2.5, 4, 5.5, 7, 8.5, 10],
                  isPercentage: true,
                  heading: "Gain Crit Rate : ",
                },
                {
                  name: "move_boost",
                  valuesFloat: [30],
                  isPercentage: true,
                  heading: "Gain Movement Boost : ",
                },
                {
                  name: "move_slow_if_controlled",
                  valuesFloat: [30],
                  isPercentage: true,
                  heading: "Being controlled will slowed by : ",
                },
              ],
            },
          },
          {
            type: "Skill 2",
            name: "Defiant Sword",
            damageType: "Physical",
            skillCosts: {
              create: {
                value: 40,
              },
            },
            skillCooldown: {
              create: {
                value: 2.5,
              },
            },
            icon: "/images/heroes/84/abilities/Defiant_Sword.png",
            tags: {
              connect: [{ id: 2 }, { id: 3 }],
            },
            description:
              "Ling charges in designated direction and stabs nearby enemies. The stabbing attack will be identified as a Basic Attack with extra Crit Rate and can trigger attack effects. Casting this skill from wall will slow enemies when dealing Crit Damage.",
            specialValue: {
              create: [
                {
                  name: "attack_effects",
                  valuesFloat: [100],
                  isPercentage: true,
                  heading: "Attack Effects : ",
                },
                {
                  name: "base_damage",
                  valuesFloat: [250, 270, 290, 310, 330, 350],
                  isPercentage: false,
                  heading: "Base Damage : ",
                },
                {
                  name: "bonus_attack",
                  valuesFloat: [33],
                  isPercentage: true,
                  heading: "Bonus Total Physical Attack : ",
                },
                {
                  name: "regen_hit",
                  valuesFloat: [35, 40, 45, 50, 55, 60],
                  isPercentage: false,
                  heading: "HP Regen per Hit : ",
                },
                {
                  name: "move_speed_slow",
                  valuesFloat: [45],
                  isPercentage: true,
                  heading: "Move Speed Slow : ",
                },
                {
                  name: "slow_duration",
                  valuesFloat: [0.75],
                  isPercentage: false,
                  heading: "Slow Duration : ",
                },
              ],
            },
          },
          {
            type: "Skill 3",
            name: "Tempest of Blades",
            damageType: "Physical",
            skillCooldown: {
              create: [
                {
                  value: 52.0,
                },
                {
                  value: 49.0,
                },
                {
                  value: 46.0,
                },
              ],
            },
            icon: "/images/heroes/84/abilities/Tempest_of_Blades.png",
            tags: {
              connect: [{ id: 4 }, { id: 5 }],
            },
            description:
              "Ling leaps into the air, becomming %invicible%, then lands on the ground, knocking enemies in the center of the area %airborne%. Four %tempest_of_blades% will also appear around him. Ling can touch them to reduce the cooldown of %finch_poise% and reset the cooldown of %defiant_sword%.",
            damageType: "Physical",
            specialTerms: {
              create: [
                {
                  name: "invicible",
                  value: "invicible",
                  color: "#fb1f1f",
                },
                {
                  name: "airborne",
                  value: "airborne",
                  color: "#fb1f1f",
                },
                {
                  name: "tempest_of_blades",
                  value: "Tempest of Blades",
                  color: "#a6aafb",
                },
                {
                  name: "finch_poise",
                  value: "Finch Poise",
                  color: "#a6aafb",
                },
                {
                  name: "defiant_sword",
                  value: "Defiant Sword",
                  color: "#a6aafb",
                },
                {
                  name: "seconds",
                  value: "Defiant Sword",
                  color: "#a6aafb",
                },
              ],
            },
            specialValue: {
              create: [
                {
                  name: "base_damage",
                  valuesFloat: [250, 350, 450],
                  isPercentage: false,
                  heading: "Base Damage : ",
                },
                {
                  name: "bonus_attack",
                  valuesFloat: [100],
                  isPercentage: true,
                  heading: "Bonus Total Physical Attack : ",
                },
                {
                  name: "area_cooldown",
                  valuesFloat: [8],
                  isPercentage: false,
                  heading: "Sword Field Duration : ",
                },
                {
                  name: "move_boost",
                  valuesFloat: [10],
                  isPercentage: true,
                  heading: "Gain Extra Movement Boost : ",
                },
                {
                  name: "move_boost_duration",
                  valuesFloat: [1.5],
                  isPercentage: false,
                  heading: "Extra Movement Boost Duration : ",
                },
                {
                  name: "airborne_duration",
                  valuesFloat: [1],
                  isPercentage: false,
                  heading: "Airborne Duration : ",
                },
                {
                  name: "gain_energy_per_touch",
                  valuesFloat: [25],
                  isPercentage: false,
                  heading: "Gain Energy Per Blade : ",
                },
                {
                  name: "reduce_skill_1",
                  valuesFloat: [4],
                  isPercentage: false,
                  heading: "Reduce Cooldown : ",
                },
              ],
            },
          },
        ],
      },
    },
  });
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
