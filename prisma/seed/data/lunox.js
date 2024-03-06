module.exports = {
  where: { main_id: 68 },
  update: {},
  create: {
    main_id: 68,
    roles: {
      connect: { id: 4 },
    },
    positions: {
      connect: { id: 3 },
    },
    specialities: {
      connect: [{ id: 7 }, { id: 6 }],
    },
    name: "Lunox",
    skins: {
      create: [
        {
          skinTag: "Default",
          name: "Twilight Goddess",
          portrait:
            "public/images/heroes/68/skins/portraits/Hero681-portrait.png",
          splashArt:
            "public/images/heroes/68/skins/splash_arts/Lunox_(Twilight_Goddess).jpg",
        },
        {
          skinTag: "Normal",
          name: "Bloody Mary",
          portrait:
            "public/images/heroes/68/skins/portraits/Hero682-portrait.png",
          splashArt:
            "public/images/heroes/68/skins/splash_arts/Lunox_(Bloody_Mary).jpg",
        },
        {
          skinTag: "Elite",
          skinTagIcon: "public/images/skin-tag/Elite_Skin_Tag.png",
          name: "Cosmic Harmony",
          portrait:
            "public/images/heroes/68/skins/portraits/Hero683-portrait.png",
          splashArt:
            "public/images/heroes/68/skins/splash_arts/Lunox_(Cosmic_Harmony).jpg",
        },
        {
          skinTag: "Starlight",
          skinTagIcon: "public/images/skin-tag/Starlight_Skin_Tag.png",
          name: "Ash Blossom",
          portrait:
            "public/images/heroes/68/skins/portraits/Hero684-portrait.png",
          splashArt:
            "public/images/heroes/68/skins/splash_arts/Lunox_(Ash_Blossom).jpg",
        },
        {
          skinTag: "Zodiac",
          skinTagIcon: "public/images/skin-tag/Zodiac_Skin_Tag.png",
          name: "Libra",
          portrait:
            "public/images/heroes/68/skins/portraits/Hero685-portrait.png",
          splashArt:
            "public/images/heroes/68/skins/splash_arts/Lunox_(Libra).jpg",
        },
        {
          skinTag: "Epic",
          skinTagIcon: "public/images/skin-tag/Epic_Skin_Tag.png",
          name: "Butterfly Seraphim",
          portrait:
            "public/images/heroes/68/skins/portraits/Hero686-portrait.png",
          splashArt:
            "public/images/heroes/68/skins/splash_arts/Lunox_(Butterfly_Seraphim).jpg",
        },
        {
          skinTag: "Epic",
          skinTagIcon: "public/images/skin-tag/Epic_Skin_Tag.png",
          name: "Eyes of Eternity",
          portrait:
            "public/images/heroes/68/skins/portraits/Hero687-portrait.png",
          splashArt:
            "public/images/heroes/68/skins/splash_arts/Lunox_(Eyes_of_Eternity).jpg",
        },
        {
          skinTag: "Epic",
          skinTagIcon: "public/images/skin-tag/Epic_Skin_Tag.png",
          name: "Dawn Revelation",
          portrait:
            "public/images/heroes/68/skins/portraits/Hero688-portrait.png",
          splashArt:
            "public/images/heroes/68/skins/splash_arts/Lunox_(Dawn_Revelation).jpg",
        },
        {
          skinTag: "Legend",
          skinTagIcon: "public/images/skin-tag/Legend_Skin_Tag.png",
          name: "Divine Goddess",
          portrait:
            "public/images/heroes/68/skins/portraits/Hero689-portrait.png",
          splashArt:
            "public/images/heroes/68/skins/splash_arts/Lunox_(Divine_Goddess).jpg",
        },
      ],
    },
    ratings: {
      create: [
        {
          name: "Durability",
          value: 30,
        },
        {
          name: "Offense",
          value: 90,
        },
        {
          name: "Control Effects",
          value: 20,
        },
        {
          name: "Difficulty",
          value: 90,
        },
      ],
    },
    skillsResources: "Mana",
    skillsResourcesColor: "#2c80f6",
    skills: {
      create: [
        {
          type: "Passive",
          name: "Dreamland Twist",
          icon: "/images/heroes/68/abilities/Dreamland_Twist.png",
          tags: {
            connect: { id: 1 },
          },
          description:
            "When Lunox uses the %power_of_order%, her Magic Penetration is converted to Spell Vamp. When she uses the %power_of_chaos%, her Spell Vamp is converted to Magic Penetration",
          specialTerms: {
            create: [
              {
                name: "power_of_order",
                value: "Power of Order",
                color: "#a6aafb",
              },
              {
                name: "power_of_chaos",
                value: "Power of Chaos",
                color: "#a6aafb",
              },
            ],
          },
          specialValue: {
            create: [
              {
                name: "convert_ratio_spell_vamp",
                valuesFloat: [1],
                isPercentage: true,
                heading: "Convert Ratio Spell Vamp: ",
              },
              {
                name: "convert_ratio_magic_penetration",
                valuesFloat: [1],
                isPercentage: true,
                heading: "Convert Ratio Magic penetration: ",
              },
            ],
          },
          video: "/videos/heroes/84/84-cloud_walker.mp4",
        },
        {
          type: "Skill 1",
          name: "Starlight Pulse",
          damageType: "Magical",
          skillCosts: {
            create: [
              {
                value: 60,
              },
              {
                value: 65,
              },
              {
                value: 70,
              },
              {
                value: 75,
              },
              {
                value: 80,
              },
              {
                value: 85,
              },
            ],
          },
          skillCooldown: {
            create: {
              value: 2.0,
            },
          },
          icon: "public/images/heroes/68/abilities/Starlight_Pulse.png",
          tags: {
            connect: [{ id: 6 }, { id: 7 }],
          },
          description:
            "Lunox summons a rain of starlight upon nearby enemies, dealing damage and recovering HP when the starlight returns her. Gain one Stack of %power_of_order% after use.",
          specialTerms: {
            create: {
              name: "power_of_order",
              value: "Power of Order",
              color: "#a6aafb",
            },
          },
          specialValue: {
            create: [
              {
                name: "spell_vamp_ratio",
                valuesFloat: [50],
                isPercentage: true,
                heading: "Spell Vamp Ratio : ",
              },
              {
                name: "base_damage",
                valuesFloat: [250, 230, 260, 290, 320, 350],
                isPercentage: false,
                heading: "Base Damage : ",
              },
              {
                name: "bonus_magic_power",
                valuesFloat: [110],
                isPercentage: true,
                heading: "Bonus Total Magic Power : ",
              },
              {
                name: "hp_regen",
                valuesFloat: [75, 80, 85, 90, 95, 100],
                isPercentage: false,
                heading: "HP Regen : ",
              },
              {
                name: "bonus_magic_power",
                valuesFloat: [30],
                isPercentage: true,
                heading: "Bonus Total Magic Power : ",
              },
            ],
          },
          video: "/videos/heroes/84/84-finch_poise.mp4",
        },
        {
          type: "Skill 2",
          name: "Chaos Assault",
          damageType: "Magical",
          skillCosts: {
            create: [
              {
                value: 50,
              },
              {
                value: 58,
              },
              {
                value: 66,
              },
              {
                value: 74,
              },
              {
                value: 82,
              },
              {
                value: 90,
              },
            ],
          },
          skillCooldown: {
            create: {
              value: 2.0,
            },
          },
          icon: "public/images/heroes/68/abilities/Chaos_Assault.png",
          tags: {
            connect: { id: 3 },
          },
          description:
            "Lunox deals high damage to a target enemy and gains a stack of %power_of_chaos%.",
          specialTerms: {
            create: {
              name: "power_of_chaos",
              value: "Power of Chaos",
              color: "#a6aafb",
            },
          },
          specialValue: {
            create: [
              {
                name: "base_damage",
                valuesFloat: [200, 273, 260, 290, 320, 350],
                isPercentage: false,
                heading: "Base Damage : ",
              },
              {
                name: "bonus_magic_power",
                valuesFloat: [120],
                isPercentage: true,
                heading: "Bonus Total Magic Power : ",
              },
              {
                name: "target_max_hp",
                valuesFloat: [2.5, 3, 3.5, 4, 4.5, 5],
                isPercentage: true,
                heading: "Plus Percetage of Target Max HP : ",
              },
              {
                name: "creep_max_hp",
                valuesFloat: [1.5, 1.8, 2.1, 2.4, 2.7, 3.0],
                isPercentage: true,
                heading: "Plus Percetage of Creep Max HP : ",
              },
            ],
          },
          video: "/videos/heroes/84/84-defiant_sword.mp4",
        },
        {
          type: "Skill 3",
          name: "Cosmic Fission",
          damageType: "Magical",
          skillCosts: {
            create: [
              {
                value: 70,
              },
              {
                value: 80,
              },
              {
                value: 90,
              },
              {
                value: 100,
              },
              {
                value: 110,
              },
              {
                value: 120,
              },
            ],
          },
          skillCooldown: {
            create: [
              {
                value: 10.0,
              },
              {
                value: 9.5,
              },
              {
                value: 9.0,
              },
              {
                value: 8.5,
              },
              {
                value: 8.0,
              },
              {
                value: 7.5,
              },
            ],
          },
          icon: "public/images/heroes/68/abilities/Cosmic_Fission.png",
          tags: {
            connect: [{ id: 6 }, { id: 8 }],
          },
          description: "Lunox deals damage and slow enemies in front of her.",
          specialValue: {
            create: [
              {
                name: "base_damage",
                valuesFloat: [300, 340, 380, 420, 460, 500],
                isPercentage: false,
                heading: "Base Damage : ",
              },
              {
                name: "bonus_magic_power",
                valuesFloat: [150],
                isPercentage: true,
                heading: "Bonus Total Magic Power : ",
              },
              {
                name: "move_slow",
                valuesFloat: [40],
                isPercentage: true,
                heading: "Slow Movement by : ",
              },
              {
                name: "move_slow_duration",
                valuesFloat: [2],
                isPercentage: false,
                heading: "Slow Movement Duration : ",
              },
            ],
          },
          video: "/videos/heroes/84/84-tempest_of_blades.mp4",
        },
        {
          type: "Skill 4",
          name: "Order & Chaos",
          skillCooldown: {
            create: [
              {
                value: 30.0,
              },
              {
                value: 26.0,
              },
              {
                value: 22.0,
              },
            ],
          },
          skillCosts: {
            create: [
              {
                value: 120,
              },
              {
                value: 160,
              },
              {
                value: 200,
              },
            ],
          },
          icon: "public/images/heroes/68/abilities/Order_&_Chaos.png",
          tags: {
            connect: [{ id: 9 }, { id: 2 }],
          },
          description:
            "When Lunox uses the %power_of_order%, she gain %briliance% and become invicible. When Lunox uses the %power_of_chaos%, she gains %darkening% and can blink in a target direction, and greatly reduces the cooldown of %chaos_assault% for a brief period.",
          specialTerms: {
            create: [
              {
                name: "power_of_order",
                value: "Power of Order",
                color: "#a6aafb",
              },
              {
                name: "power_of_chaos",
                value: "Power of Chaos",
                color: "#a6aafb",
              },
              {
                name: "briliance",
                value: "Brilliance",
                color: "#a6aafb",
              },
              {
                name: "darkening",
                value: "Darkening",
                color: "#a6aafb",
              },
              {
                name: "chaos_assault",
                value: "Chaos Assault",
                color: "#a6aafb",
              },
            ],
          },
          video: "/videos/heroes/84/84-tempest_of_blades.mp4",
        },
      ],
    },
  },
};
