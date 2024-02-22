export const heroes = [
  {
    id: 84,
    roles: [
      {
        role_id: 3,
        name: "Assassin",
        role_icon: "/images/roles/assassin_icon.png",
      },
      {
        role_id: 2,
        name: "Fighter",
        role_icon: "/images/roles/fighter_icon.png",
      },
    ],
    positions: [
      {
        position_id: 2,
        name: "Jungler",
        position_icon: "/images/positions/jungler_icon.png",
      },
      {
        position_id: 4,
        name: "EXP Lane",
        position_icon: "/images/positions/explane_icon.png",
      },
    ],
    specialities: ["Chase", "Burst"],
    name: "Ling",
    skin_name: "Cyan Finch",
    ability_resource: "Energy",
    ability_resource_color: "#d9d9d9",
    ratings: [
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
    potrait: "/images/heroes/84/skins/potraits/Hero841-portrait.png",
    splash_art: "/images/heroes/84/skins/splash_arts/Ling_(Cyan_Finch).jpg",
    skins: [
      {
        name: "Fiery Dance",
        potrait: "/images/heroes/84/skins/potraits/Hero842-portrait.png",
        splash_art:
          "/images/heroes/84/skins/splash_arts/Ling_(Fiery_Dance).jpg",
      },
      {
        name: "Street Punk",
        potrait: "/images/heroes/84/skins/potraits/Hero843-portrait.png",
        splash_art:
          "/images/heroes/84/skins/splash_arts/Ling_(Street_Punk).jpg",
      },
      {
        name: "Night Shade",
        potrait: "/images/heroes/84/skins/potraits/Hero844-portrait.png",
        splash_art:
          "/images/heroes/84/skins/splash_arts/Ling_(Night_Shade).jpg",
      },
      {
        name: "Cosmo Guard",
        potrait: "/images/heroes/84/skins/potraits/Hero845-portrait.png",
        splash_art:
          "/images/heroes/84/skins/splash_arts/Ling_(Cosmo_Guard).jpg",
      },
      {
        name: "Serene Plume",
        potrait: "/images/heroes/84/skins/potraits/Hero846-portrait.png",
        splash_art:
          "/images/heroes/84/skins/splash_arts/Ling_(Serene_Plume).jpg",
      },
      {
        name: "M-World",
        potrait: "/images/heroes/84/skins/potraits/Hero847-portrait.png",
        splash_art:
          "/images/heroes/84/skins/splash_arts/Ling_(M-World_Ling).jpg",
      },
      {
        name: "Lord Shen",
        potrait: "/images/heroes/84/skins/potraits/Hero848-portrait.png",
        splash_art: "/images/heroes/84/skins/splash_arts/Ling_(Lord_Shen).jpg",
      },
    ],
    abilities: [
      {
        type: "Passive",
        name: "Cloud Walker",
        ability_cost: [],
        ability_cooldown: [],
        icon: "/images/heroes/84/abilities/Cloud_Walker.png",
        ability_tag: [
          {
            name: "Buff",
            rgb: "79,156,184",
          },
        ],
        description:
          "Ling's superb Lightness Skill allows him to leap among walls and assassinate his enemies from above.",
        damage_type: "",
        special_terms: [],
        special_values: [
          {
            name: "energy_on_wall",
            values_float: [4],
            is_percentage: false,
            heading: "Gains Energy on wall : ",
          },
          {
            name: "energy_on_damage",
            values_float: [5],
            is_percentage: false,
            heading: "Gains Energy on attack : ",
          },
          {
            name: "multiply_cr",
            values_float: [1.5],
            is_percentage: false,
            heading: "Gains multiply Crit Rate : ",
          },
          {
            name: "init_cdm",
            values_float: [150],
            is_percentage: true,
            heading: "Initial Crit Damage : ",
          },
        ],
      },
      {
        type: "Skill 1",
        name: "Finch Poise",
        ability_cost: [30],
        ability_cooldown: [20.0],
        icon: "/images/heroes/84/abilities/Finch_Poise.png",
        ability_tag: [
          {
            name: "Mobility",
            rgb: "162,105,198",
          },
          {
            name: "Buff",
            rgb: "79,156,184",
          },
        ],
        description:
          "Ling casts his Qinggong (Lightness SKill), leaping to the wall and entering %half_stealth% state. He can jump among walls freely with no Cooldown.",
        damage_type: "",
        special_terms: [
          {
            name: "half_stealth",
            value: "half-stealth",
            color: "#fb1f1f",
          },
        ],
        special_values: [
          {
            name: "basic_attack_range",
            values_float: [6.2],
            is_percentage: false,
            heading: "Basic Attack Range : ",
          },
          {
            name: "gain_crit_rate",
            values_float: [2.5, 4, 5.5, 7, 8.5, 10],
            is_percentage: true,
            heading: "Gain Crit Rate : ",
          },
          {
            name: "move_boost",
            values_float: [30],
            is_percentage: true,
            heading: "Gain Movement Boost : ",
          },
          {
            name: "move_slow_if_controlled",
            values_float: [30],
            is_percentage: true,
            heading: "Being controlled will slowed by : ",
          },
        ],
      },
      {
        type: "Skill 2",
        name: "Defiant Sword",
        ability_cost: [40],
        ability_cooldown: [2.5],
        icon: "/images/heroes/84/abilities/Defiant_Sword.png",
        ability_tag: [
          {
            name: "Mobility",
            rgb: "162,105,198",
          },
          {
            name: "Damage",
            rgb: "199,121,85",
          },
        ],
        description:
          "Ling charges in designated direction and stabs nearby enemies. The stabbing attack will be identified as a Basic Attack with extra Crit Rate and can trigger attack effects. Casting this skill from wall will slow enemies when dealing Crit Damage.",
        damage_type: "Physical",
        special_terms: [],
        special_values: [
          {
            name: "attack_effects",
            values_float: [100],
            is_percentage: true,
            heading: "Attack Effects : ",
          },
          {
            name: "base_damage",
            values_float: [250, 270, 290, 310, 330, 350],
            is_percentage: false,
            heading: "Base Damage : ",
          },
          {
            name: "bonus_attack",
            values_float: [33],
            is_percentage: true,
            heading: "Bonus Total Physical Attack : ",
          },
          {
            name: "regen_hit",
            values_float: [35, 40, 45, 50, 55, 60],
            is_percentage: false,
            heading: "HP Regen per Hit : ",
          },
          {
            name: "move_speed_slow",
            values_float: [45],
            is_percentage: true,
            heading: "Move Speed Slow : ",
          },
          {
            name: "slow_duration",
            values_float: [0.75],
            is_percentage: false,
            heading: "Slow Duration : ",
          },
        ],
      },
      {
        type: "Skill 3",
        name: "Tempest of Blades",
        ability_cost: [],
        ability_cooldown: [52.0, 49.0, 46.0],
        icon: "/images/heroes/84/abilities/Tempest_of_Blades.png",
        ability_tag: [
          {
            name: "Burst",
            rgb: "199,121,85",
          },
          {
            name: "CC",
            rgb: "205,93,109",
          },
        ],
        description:
          "Ling leaps into the air, becomming %invicible%, then lands on the ground, knocking enemies in the center of the area %airborne%. Four %tempest_of_blades% will also appear around him. Ling can touch them to reduce the cooldown of %finch_poise% and reset the cooldown of %defiant_sword%.",
        damage_type: "Physical",
        special_terms: [
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
        special_values: [
          {
            name: "base_damage",
            values_float: [250, 350, 450],
            is_percentage: false,
            heading: "Base Damage : ",
          },
          {
            name: "bonus_attack",
            values_float: [100],
            is_percentage: true,
            heading: "Bonus Total Physical Attack : ",
          },
          {
            name: "area_cooldown",
            values_float: [8],
            is_percentage: false,
            heading: "Sword Field Duration : ",
          },
          {
            name: "move_boost",
            values_float: [10],
            is_percentage: true,
            heading: "Gain Extra Movement Boost : ",
          },
          {
            name: "move_boost_duration",
            values_float: [1.5],
            is_percentage: false,
            heading: "Extra Movement Boost Duration : ",
          },
          {
            name: "airborne_duration",
            values_float: [1],
            is_percentage: false,
            heading: "Airborne Duration : ",
          },
          {
            name: "gain_energy_per_touch",
            values_float: [25],
            is_percentage: false,
            heading: "Gain Energy Per Blade : ",
          },
          {
            name: "reduce_skill_1",
            values_float: [4],
            is_percentage: false,
            heading: "Reduce Cooldown : ",
          },
        ],
      },
    ],
  },
];
