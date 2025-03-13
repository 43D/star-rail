type constelacao = {
  "Id": number;
  "Name": string;
  "Desc":   string;
  "ParamList": number[]
}

type lvlCHar = {
  "AttackBase": number;
  "AttackAdd": number;
  "DefenceBase": number;
  "DefenceAdd":  number;
  "HPBase": number;
  "HPAdd":  number;
  "SpeedBase":  number;
  "CriticalChance": number;
  "CriticalDamage": number;
  "BaseAggro": number;
}

type hak = {
  "Name": string;
  "Desc":  string;
  "CharaInfo": {
    "Camp": null | string;
    "VA": {
      "Chinese": null | string;
      "Japanese": null | string;
      "Korean": null | string;
      "English": null | string;
    },
    "Stories": {
      "0": null | string;
      "1": null | string;
      "2": null | string;
      "3": null | string;
      "4": null | string;
    },
  },
  "Rarity": "CombatPowerAvatarRarityType5" | 'CombatPowerAvatarRarityType5';
  "AvatarVOTag": string;
  "SPNeed": number;
  "BaseType": "Memory"; //
  "DamageType": "Thunder"; //
  "Ranks": {
    "1": constelacao;
    "2": constelacao;
    "3": constelacao;
    "4": constelacao;
    "5": constelacao;
    "6": constelacao;
  },
  "Skills": {
    "140201": {
      "Id": 140201,
      "Name": "Thorned Nectar",
      "Desc": "Deals Lightning DMG equal to \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#1[i]%\u003C/unbreak\u003E\u003C/color\u003E of Aglaea's ATK to one designated enemy.",
      "Type": "Normal",
      "Tag": "SingleAttack",
      "SPBase": 20,
      "BPNeed": -0.999999999767169,
      "BPAdd": 1,
      "ShowStanceList": [30, 0, 0],
      "SkillComboValueDelta": null,
      "Level": {
        "1": {
          "Level": 1,
          "ParamList": [0.500000000465661, 1]
        },
        "2": {
          "Level": 2,
          "ParamList": [0.600000000558794, 1]
        },
        "3": {
          "Level": 3,
          "ParamList": [0.700000000651926, 1]
        },
        "4": {
          "Level": 4,
          "ParamList": [0.800000000745058, 1]
        },
        "5": {
          "Level": 5,
          "ParamList": [0.90000000083819, 1]
        },
        "6": {
          "Level": 6,
          "ParamList": [1, 1]
        },
        "7": {
          "Level": 7,
          "ParamList": [1.10000000009313, 1]
        },
        "8": {
          "Level": 8,
          "ParamList": [1.20000000018626, 1]
        },
        "9": {
          "Level": 9,
          "ParamList": [1.3000000002794, 1]
        },
        "10": {
          "Level": 10,
          "ParamList": [1.40000000037253, 1]
        }
      }
    },
    "140202": {
      "Id": 140202,
      "Name": "Rise, Exalted Renown",
      "Desc": "Restores HP to Garmentmaker by \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#1[i]%\u003C/unbreak\u003E\u003C/color\u003E of its Max HP. If Garmentmaker is absent, then \u003Cu\u003Esummons the memosprite\u003C/u\u003E Garmentmaker and makes this unit immediately take action.",
      "Type": "BPSkill",
      "Tag": "Summon",
      "SPBase": 20,
      "BPNeed": 1,
      "BPAdd": null,
      "ShowStanceList": [0, 0, 0],
      "SkillComboValueDelta": null,
      "Level": {
        "1": {
          "Level": 1,
          "ParamList": [0.250000000232831, 0, 5]
        },
        "2": {
          "Level": 2,
          "ParamList": [0.274999999906868, 0, 5]
        },
        "3": {
          "Level": 3,
          "ParamList": [0.300000000279397, 0, 5]
        },
        "4": {
          "Level": 4,
          "ParamList": [0.324999999953434, 0, 5]
        },
        "5": {
          "Level": 5,
          "ParamList": [0.350000000325963, 0, 5]
        },
        "6": {
          "Level": 6,
          "ParamList": [0.375, 0, 5]
        },
        "7": {
          "Level": 7,
          "ParamList": [0.406250000465661, 0, 5]
        },
        "8": {
          "Level": 8,
          "ParamList": [0.437500000232831, 0, 5]
        },
        "9": {
          "Level": 9,
          "ParamList": [0.468750000698492, 0, 5]
        },
        "10": {
          "Level": 10,
          "ParamList": [0.500000000465661, 0, 5]
        },
        "11": {
          "Level": 11,
          "ParamList": [0.525000000139698, 0, 5]
        },
        "12": {
          "Level": 12,
          "ParamList": [0.550000000512227, 0, 5]
        },
        "13": {
          "Level": 13,
          "ParamList": [0.575000000186265, 0, 5]
        },
        "14": {
          "Level": 14,
          "ParamList": [0.600000000558794, 0, 5]
        },
        "15": {
          "Level": 15,
          "ParamList": [0.625000000232831, 0, 5]
        }
      }
    },
    "140203": {
      "Id": 140203,
      "Name": "Dance, \u003Cunbreak\u003EDestined Weaveress\u003C/unbreak\u003E",
      "Desc": "\u003Cu\u003ESummons the memosprite\u003C/u\u003E Garmentmaker. If Garmentmaker is already on the field, then restores its HP to max. Aglaea enters the \"Supreme Stance\" state and immediately takes action.\\nWhile in \"Supreme Stance,\" Aglaea gains the SPD Boost stacks from Garmentmaker's Memosprite Talent, with each stack increasing this unit's SPD by \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#1[f1]%\u003C/unbreak\u003E\u003C/color\u003E. Enhances Basic ATK to \"Slash by a Thousandfold Kiss,\" and cannot use Skill. Garmentmaker is immune to \u003Cu\u003ECrowd Control debuffs\u003C/u\u003E.\\nA countdown appears on the Action Order, with its own SPD set at \u003Cunbreak\u003E#4[i]\u003C/unbreak\u003E. While the countdown exists, using Ultimate again will reset the countdown. When the countdown's turn starts, Garmentmaker self-destructs. When Garmentmaker disappears, Aglaea dispels the \"Supreme Stance\" state.",
      "Type": "Ultra",
      "Tag": "Enhance",
      "SPBase": 5,
      "BPNeed": -0.999999999767169,
      "BPAdd": null,
      "ShowStanceList": [0, 0, 0],
      "SkillComboValueDelta": null,
      "Level": {
        "1": {
          "Level": 1,
          "ParamList": [0.100000000093132, 0, 0, 100, 0, 0]
        },
        "2": {
          "Level": 2,
          "ParamList": [0.104999999748543, 0, 0, 100, 0, 0]
        },
        "3": {
          "Level": 3,
          "ParamList": [0.110000000102445, 0, 0, 100, 0, 0]
        },
        "4": {
          "Level": 4,
          "ParamList": [0.114999999757856, 0, 0, 100, 0, 0]
        },
        "5": {
          "Level": 5,
          "ParamList": [0.120000000111759, 0, 0, 100, 0, 0]
        },
        "6": {
          "Level": 6,
          "ParamList": [0.124999999767169, 0, 0, 100, 0, 0]
        },
        "7": {
          "Level": 7,
          "ParamList": [0.131250000558794, 0, 0, 100, 0, 0]
        },
        "8": {
          "Level": 8,
          "ParamList": [0.137499999953434, 0, 0, 100, 0, 0]
        },
        "9": {
          "Level": 9,
          "ParamList": [0.143750000745058, 0, 0, 100, 0, 0]
        },
        "10": {
          "Level": 10,
          "ParamList": [0.150000000139698, 0, 0, 100, 0, 0]
        },
        "11": {
          "Level": 11,
          "ParamList": [0.154999999795109, 0, 0, 100, 0, 0]
        },
        "12": {
          "Level": 12,
          "ParamList": [0.160000000149012, 0, 0, 100, 0, 0]
        },
        "13": {
          "Level": 13,
          "ParamList": [0.164999999804422, 0, 0, 100, 0, 0]
        },
        "14": {
          "Level": 14,
          "ParamList": [0.170000000158325, 0, 0, 100, 0, 0]
        },
        "15": {
          "Level": 15,
          "ParamList": [0.174999999813735, 0, 0, 100, 0, 0]
        }
      }
    },
    "140204": {
      "Id": 140204,
      "Name": "Rosy-Fingered",
      "Desc": "The memosprite Garmentmaker has an initial SPD equal to \u003Cunbreak\u003E#4[i]%\u003C/unbreak\u003E of Aglaea's SPD and a Max HP equal to \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#5[i]%\u003C/unbreak\u003E\u003C/color\u003E of Aglaea's Max HP plus \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#6[i]\u003C/unbreak\u003E\u003C/color\u003E. While Garmentmaker is on the field, Aglaea's attacks inflict the target with the \"Seam Stitch\" state. After attacking enemies in the \"Seam Stitch\" state, further deals Lightning \u003Cu\u003EAdditional DMG\u003C/u\u003E equal to \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#1[i]%\u003C/unbreak\u003E\u003C/color\u003E of Aglaea's ATK. \"Seam Stitch\" only takes effect on the most recently inflicted target.",
      "Type": null,
      "Tag": "Enhance",
      "SPBase": 10,
      "BPNeed": -0.999999999767169,
      "BPAdd": null,
      "ShowStanceList": [0, 0, 0],
      "SkillComboValueDelta": null,
      "Level": {
        "1": {
          "Level": 1,
          "ParamList": [0.120000000111759, 0, 0, 0.350000000325963, 0.440000000409782, 180]
        },
        "2": {
          "Level": 2,
          "ParamList": [0.137999999569729, 0, 0, 0.350000000325963, 0.46750000026077, 247.500000000466]
        },
        "3": {
          "Level": 3,
          "ParamList": [0.155999999726191, 0, 0, 0.350000000325963, 0.495000000111759, 315]
        },
        "4": {
          "Level": 4,
          "ParamList": [0.173999999882653, 0, 0, 0.350000000325963, 0.522500000661239, 382.500000000466]
        },
        "5": {
          "Level": 5,
          "ParamList": [0.192000000039116, 0, 0, 0.350000000325963, 0.550000000512227, 450]
        },
        "6": {
          "Level": 6,
          "ParamList": [0.210000000195578, 0, 0, 0.350000000325963, 0.572000000393018, 504]
        },
        "7": {
          "Level": 7,
          "ParamList": [0.232500000391155, 0, 0, 0.350000000325963, 0.594000000273809, 558]
        },
        "8": {
          "Level": 8,
          "ParamList": [0.254999999888241, 0, 0, 0.350000000325963, 0.6160000001546, 612]
        },
        "9": {
          "Level": 9,
          "ParamList": [0.277500000083819, 0, 0, 0.350000000325963, 0.63800000003539, 666]
        },
        "10": {
          "Level": 10,
          "ParamList": [0.300000000279397, 0, 0, 0.350000000325963, 0.660000000614673, 720]
        },
        "11": {
          "Level": 11,
          "ParamList": [0.317999999737367, 0, 0, 0.350000000325963, 0.682000000495464, 774]
        },
        "12": {
          "Level": 12,
          "ParamList": [0.335999999893829, 0, 0, 0.350000000325963, 0.704000000376254, 828]
        },
        "13": {
          "Level": 13,
          "ParamList": [0.354000000050291, 0, 0, 0.350000000325963, 0.726000000257045, 882]
        },
        "14": {
          "Level": 14,
          "ParamList": [0.372000000206754, 0, 0, 0.350000000325963, 0.748000000137836, 936]
        },
        "15": {
          "Level": 15,
          "ParamList": [0.390000000363216, 0, 0, 0.350000000325963, 0.770000000717118, 990]
        }
      }
    },
    "140206": {
      "Id": 140206,
      "Name": "Attack",
      "Desc": "Attacks an enemy, and when the battle starts, reduces their Toughness of the corresponding Type.",
      "Type": "MazeNormal",
      "Tag": "MazeAttack",
      "SPBase": null,
      "BPNeed": -0.999999999767169,
      "BPAdd": null,
      "ShowStanceList": [30, 0, 0],
      "SkillComboValueDelta": null,
      "Level": {
        "1": {
          "Level": 1,
          "ParamList": []
        }
      }
    },
    "140207": {
      "Id": 140207,
      "Name": "Meteoric Sunder",
      "Desc": "\u003Cu\u003ESummons the memosprite\u003C/u\u003E Garmentmaker and launches a forward joint attack. After entering battle, regenerates \u003Cunbreak\u003E#2[i]\u003C/unbreak\u003E Energy and deals Lightning DMG equal to \u003Cunbreak\u003E#1[i]%\u003C/unbreak\u003E of Aglaea's ATK to all enemy targets. Then, randomly inflicts the \"Seam Stitch\" state on a random enemy target.",
      "Type": "Maze",
      "Tag": "MazeAttack",
      "SPBase": null,
      "BPNeed": -0.999999999767169,
      "BPAdd": null,
      "ShowStanceList": [60, 0, 0],
      "SkillComboValueDelta": null,
      "Level": {
        "1": {
          "Level": 1,
          "ParamList": [1, 30]
        }
      }
    },
    "140208": {
      "Id": 140208,
      "Name": "Slash by a Thousandfold Kiss",
      "Desc": "Aglaea and Garmentmaker launch a \u003Cu\u003EJoint ATK\u003C/u\u003E on the target, respectively dealing Lightning DMG equal to \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#1[f1]%\u003C/unbreak\u003E\u003C/color\u003E of Aglaea's ATK and \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#3[f1]%\u003C/unbreak\u003E\u003C/color\u003E of Garmentmaker's ATK to the target. Also, respectively deals Lightning DMG equal to \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#2[i]%\u003C/unbreak\u003E\u003C/color\u003E of Aglaea's ATK and \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#4[i]%\u003C/unbreak\u003E\u003C/color\u003E of Garmentmaker's ATK to adjacent targets.\\n\"Slash by a Thousandfold Kiss\" cannot recover Skill Points.",
      "Type": "Normal",
      "Tag": "Blast",
      "SPBase": 20,
      "BPNeed": -0.999999999767169,
      "BPAdd": null,
      "ShowStanceList": [60, 0, 30],
      "SkillComboValueDelta": null,
      "Level": {
        "1": {
          "Level": 1,
          "ParamList": [1, 0.450000000419095, 1, 0.450000000419095]
        },
        "2": {
          "Level": 2,
          "ParamList": [1.20000000018626, 0.540000000502914, 1.20000000018626, 0.540000000502914]
        },
        "3": {
          "Level": 3,
          "ParamList": [1.40000000037253, 0.630000000586733, 1.40000000037253, 0.630000000586733]
        },
        "4": {
          "Level": 4,
          "ParamList": [1.60000000055879, 0.720000000670552, 1.60000000055879, 0.720000000670552]
        },
        "5": {
          "Level": 5,
          "ParamList": [1.80000000074506, 0.810000000754371, 1.80000000074506, 0.810000000754371]
        },
        "6": {
          "Level": 6,
          "ParamList": [2, 0.90000000083819, 2, 0.90000000083819]
        },
        "7": {
          "Level": 7,
          "ParamList": [2.20000000018626, 0.990000000922009, 2.20000000018626, 0.990000000922009]
        },
        "8": {
          "Level": 8,
          "ParamList": [2.40000000037253, 1.08000000007451, 2.40000000037253, 1.08000000007451]
        },
        "9": {
          "Level": 9,
          "ParamList": [2.60000000055879, 1.17000000015832, 2.60000000055879, 1.17000000015832]
        },
        "10": {
          "Level": 10,
          "ParamList": [2.80000000074506, 1.26000000024214, 2.80000000074506, 1.26000000024214]
        }
      }
    },
    "140209": {
      "Id": 140209,
      "Name": "Rise, Exalted Renown",
      "Desc": null,
      "Type": "BPSkill",
      "Tag": "Restore",
      "SPBase": 20,
      "BPNeed": 1,
      "BPAdd": null,
      "ShowStanceList": [0, 0, 0],
      "SkillComboValueDelta": null,
      "Level": {
        "1": {
          "Level": 1,
          "ParamList": [0.250000000232831]
        },
        "2": {
          "Level": 2,
          "ParamList": [0.274999999906868]
        },
        "3": {
          "Level": 3,
          "ParamList": [0.300000000279397]
        },
        "4": {
          "Level": 4,
          "ParamList": [0.324999999953434]
        },
        "5": {
          "Level": 5,
          "ParamList": [0.350000000325963]
        },
        "6": {
          "Level": 6,
          "ParamList": [0.375]
        },
        "7": {
          "Level": 7,
          "ParamList": [0.406250000465661]
        },
        "8": {
          "Level": 8,
          "ParamList": [0.437500000232831]
        },
        "9": {
          "Level": 9,
          "ParamList": [0.468750000698492]
        },
        "10": {
          "Level": 10,
          "ParamList": [0.500000000465661]
        },
        "11": {
          "Level": 11,
          "ParamList": [0.525000000139698]
        },
        "12": {
          "Level": 12,
          "ParamList": [0.550000000512227]
        },
        "13": {
          "Level": 13,
          "ParamList": [0.575000000186265]
        },
        "14": {
          "Level": 14,
          "ParamList": [0.600000000558794]
        },
        "15": {
          "Level": 15,
          "ParamList": [0.625000000232831]
        }
      }
    }
  },
  "SkillTrees": {
    "Point01": {
      "1": {
        "Anchor": "Point01",
        "AvatarPromotionLimit": null,
        "AvatarLevelLimit": null,
        "DefaultUnlock": true,
        "Icon": "SkillIcon_1402_Normal.png",
        "LevelUpSkillID": [140201, 140208],
        "MaterialList": [],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402001,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 1,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "2": {
        "Anchor": "Point01",
        "AvatarPromotionLimit": 2,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Normal.png",
        "LevelUpSkillID": [140201, 140208],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 3500,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110251,
            "ItemNum": 2,
            "Rarity": "NotNormal"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 4,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402001,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 1,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "3": {
        "Anchor": "Point01",
        "AvatarPromotionLimit": 3,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Normal.png",
        "LevelUpSkillID": [140201, 140208],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 7000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 2,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 2,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402001,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 1,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "4": {
        "Anchor": "Point01",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Normal.png",
        "LevelUpSkillID": [140201, 140208],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 16000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 4,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 3,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402001,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 1,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "5": {
        "Anchor": "Point01",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Normal.png",
        "LevelUpSkillID": [140201, 140208],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 35000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402001,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 1,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "6": {
        "Anchor": "Point01",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Normal.png",
        "LevelUpSkillID": [140201, 140208],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 140000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 6,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402001,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 1,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      }
    },
    "Point02": {
      "1": {
        "Anchor": "Point02",
        "AvatarPromotionLimit": null,
        "AvatarLevelLimit": null,
        "DefaultUnlock": true,
        "Icon": "SkillIcon_1402_BP.png",
        "LevelUpSkillID": [140202, 140209],
        "MaterialList": [],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402002,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 2,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "2": {
        "Anchor": "Point02",
        "AvatarPromotionLimit": 1,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_BP.png",
        "LevelUpSkillID": [140202, 140209],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 2500,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 3,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402002,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 2,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "3": {
        "Anchor": "Point02",
        "AvatarPromotionLimit": 2,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_BP.png",
        "LevelUpSkillID": [140202, 140209],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 3500,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110251,
            "ItemNum": 2,
            "Rarity": "NotNormal"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 4,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402002,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 2,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "4": {
        "Anchor": "Point02",
        "AvatarPromotionLimit": 3,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_BP.png",
        "LevelUpSkillID": [140202, 140209],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 7000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 2,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 2,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402002,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 2,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "5": {
        "Anchor": "Point02",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_BP.png",
        "LevelUpSkillID": [140202, 140209],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 16000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 4,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 3,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402002,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 2,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "6": {
        "Anchor": "Point02",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_BP.png",
        "LevelUpSkillID": [140202, 140209],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 25000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 6,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 6,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402002,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 2,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "7": {
        "Anchor": "Point02",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_BP.png",
        "LevelUpSkillID": [140202, 140209],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 35000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402002,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 2,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "8": {
        "Anchor": "Point02",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_BP.png",
        "LevelUpSkillID": [140202, 140209],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 70000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 5,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 4,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402002,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 2,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "9": {
        "Anchor": "Point02",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_BP.png",
        "LevelUpSkillID": [140202, 140209],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 140000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 6,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 241,
            "ItemNum": 1,
            "Rarity": "SuperRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402002,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 2,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "10": {
        "Anchor": "Point02",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_BP.png",
        "LevelUpSkillID": [140202, 140209],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 240000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 13,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 241,
            "ItemNum": 1,
            "Rarity": "SuperRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402002,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 2,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      }
    },
    "Point03": {
      "1": {
        "Anchor": "Point03",
        "AvatarPromotionLimit": null,
        "AvatarLevelLimit": null,
        "DefaultUnlock": true,
        "Icon": "SkillIcon_1402_Ultra.png",
        "LevelUpSkillID": [140203],
        "MaterialList": [],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402003,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 3,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "2": {
        "Anchor": "Point03",
        "AvatarPromotionLimit": 1,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Ultra.png",
        "LevelUpSkillID": [140203],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 2500,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 3,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402003,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 3,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "3": {
        "Anchor": "Point03",
        "AvatarPromotionLimit": 2,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Ultra.png",
        "LevelUpSkillID": [140203],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 3500,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110251,
            "ItemNum": 2,
            "Rarity": "NotNormal"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 4,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402003,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 3,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "4": {
        "Anchor": "Point03",
        "AvatarPromotionLimit": 3,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Ultra.png",
        "LevelUpSkillID": [140203],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 7000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 2,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 2,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402003,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 3,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "5": {
        "Anchor": "Point03",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Ultra.png",
        "LevelUpSkillID": [140203],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 16000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 4,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 3,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402003,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 3,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "6": {
        "Anchor": "Point03",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Ultra.png",
        "LevelUpSkillID": [140203],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 25000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 6,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 6,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402003,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 3,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "7": {
        "Anchor": "Point03",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Ultra.png",
        "LevelUpSkillID": [140203],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 35000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402003,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 3,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "8": {
        "Anchor": "Point03",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Ultra.png",
        "LevelUpSkillID": [140203],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 70000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 5,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 4,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402003,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 3,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "9": {
        "Anchor": "Point03",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Ultra.png",
        "LevelUpSkillID": [140203],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 140000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 6,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 241,
            "ItemNum": 1,
            "Rarity": "SuperRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402003,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 3,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "10": {
        "Anchor": "Point03",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Ultra.png",
        "LevelUpSkillID": [140203],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 240000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 13,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 241,
            "ItemNum": 1,
            "Rarity": "SuperRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402003,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 3,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      }
    },
    "Point04": {
      "1": {
        "Anchor": "Point04",
        "AvatarPromotionLimit": null,
        "AvatarLevelLimit": null,
        "DefaultUnlock": true,
        "Icon": "SkillIcon_1402_Passive.png",
        "LevelUpSkillID": [140204],
        "MaterialList": [],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402004,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 4,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "2": {
        "Anchor": "Point04",
        "AvatarPromotionLimit": 1,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Passive.png",
        "LevelUpSkillID": [140204],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 2500,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 3,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402004,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 4,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "3": {
        "Anchor": "Point04",
        "AvatarPromotionLimit": 2,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Passive.png",
        "LevelUpSkillID": [140204],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 3500,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110251,
            "ItemNum": 2,
            "Rarity": "NotNormal"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 4,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402004,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 4,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "4": {
        "Anchor": "Point04",
        "AvatarPromotionLimit": 3,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Passive.png",
        "LevelUpSkillID": [140204],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 7000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 2,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 2,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402004,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 4,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "5": {
        "Anchor": "Point04",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Passive.png",
        "LevelUpSkillID": [140204],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 16000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 4,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 3,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402004,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 4,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "6": {
        "Anchor": "Point04",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Passive.png",
        "LevelUpSkillID": [140204],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 25000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 6,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 6,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402004,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 4,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "7": {
        "Anchor": "Point04",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Passive.png",
        "LevelUpSkillID": [140204],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 35000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402004,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 4,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "8": {
        "Anchor": "Point04",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Passive.png",
        "LevelUpSkillID": [140204],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 70000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 5,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 4,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402004,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 4,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "9": {
        "Anchor": "Point04",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Passive.png",
        "LevelUpSkillID": [140204],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 140000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 6,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 241,
            "ItemNum": 1,
            "Rarity": "SuperRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402004,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 4,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      },
      "10": {
        "Anchor": "Point04",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_Passive.png",
        "LevelUpSkillID": [140204],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 240000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 13,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 241,
            "ItemNum": 1,
            "Rarity": "SuperRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 10,
        "ParamList": [],
        "PointID": 1402004,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 4,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      }
    },
    "Point05": {
      "1": {
        "Anchor": "Point05",
        "AvatarPromotionLimit": null,
        "AvatarLevelLimit": null,
        "DefaultUnlock": true,
        "Icon": "SkillIcon_1402_Maze.png",
        "LevelUpSkillID": [140207],
        "MaterialList": [],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402007,
        "PointName": null,
        "PointDesc": null,
        "PointTriggerKey": 5,
        "PointType": 2,
        "PrePoint": [],
        "StatusAddList": []
      }
    },
    "Point06": {
      "1": {
        "Anchor": "Point06",
        "AvatarPromotionLimit": 2,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_SkillTree1.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 5000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110251,
            "ItemNum": 3,
            "Rarity": "NotNormal"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [7.20000000018626, 3.60000000055879],
        "PointID": 1402101,
        "PointName": "The Myopic's Doom",
        "PointDesc": "While in \"Supreme Stance,\" increases Aglaea's and Garmentmaker's ATK by an amount equal to \u003Cunbreak\u003E#1[i]%\u003C/unbreak\u003E of Aglaea's SPD plus \u003Cunbreak\u003E#2[i]%\u003C/unbreak\u003E of Garmentmaker's SPD.",
        "PointTriggerKey": 6,
        "PointType": 3,
        "PrePoint": [],
        "StatusAddList": []
      }
    },
    "Point07": {
      "1": {
        "Anchor": "Point07",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_SkillTree2.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 20000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 5,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 241,
            "ItemNum": 1,
            "Rarity": "SuperRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [1],
        "PointID": 1402102,
        "PointName": "Last Thread of Fate",
        "PointDesc": "When Garmentmaker disappears, up to \u003Cunbreak\u003E#1[i]\u003C/unbreak\u003E stack(s) of the SPD Boost from the Memosprite Talent can be retained. When Garmentmaker is summoned again, gains the corresponding number of SPD Boost stacks.",
        "PointTriggerKey": 7,
        "PointType": 3,
        "PrePoint": [],
        "StatusAddList": []
      }
    },
    "Point08": {
      "1": {
        "Anchor": "Point08",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_1402_SkillTree3.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 160000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 8,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 241,
            "ItemNum": 1,
            "Rarity": "SuperRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110506,
            "ItemNum": 1,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [0.500000000465661, 0.500000000465661],
        "PointID": 1402103,
        "PointName": "The Speeding Sol",
        "PointDesc": "At the start of battle, if this unit's Energy is lower than \u003Cunbreak\u003E#1[i]%\u003C/unbreak\u003E, regenerates this unit's Energy to \u003Cunbreak\u003E#2[i]%\u003C/unbreak\u003E.",
        "PointTriggerKey": 8,
        "PointType": 3,
        "PrePoint": [],
        "StatusAddList": []
      }
    },
    "Point09": {
      "1": {
        "Anchor": "Point09",
        "AvatarPromotionLimit": null,
        "AvatarLevelLimit": 1,
        "DefaultUnlock": false,
        "Icon": "IconThunderAddedRatio.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 2500,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 2,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402201,
        "PointName": "DMG Boost: Lightning",
        "PointDesc": null,
        "PointTriggerKey": 9,
        "PointType": 1,
        "PrePoint": [],
        "StatusAddList": [
          {
            "$type": "AvatarPropertyValue",
            "PropertyType": "ThunderAddedRatio",
            "Value": 0.0319999998901039,
            "Name": "Lightning DMG Boost"
          }
        ]
      }
    },
    "Point10": {
      "1": {
        "Anchor": "Point10",
        "AvatarPromotionLimit": 2,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "IconCriticalChance.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 4000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110251,
            "ItemNum": 3,
            "Rarity": "NotNormal"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 6,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402202,
        "PointName": "CRIT Rate Boost",
        "PointDesc": null,
        "PointTriggerKey": 10,
        "PointType": 1,
        "PrePoint": [1402201],
        "StatusAddList": [
          {
            "$type": "AvatarPropertyValue",
            "PropertyType": "CriticalChanceBase",
            "Value": 0.0269999995362014,
            "Name": "CRIT Rate"
          }
        ]
      }
    },
    "Point11": {
      "1": {
        "Anchor": "Point11",
        "AvatarPromotionLimit": 3,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "IconThunderAddedRatio.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 9000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 3,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 2,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402203,
        "PointName": "DMG Boost: Lightning",
        "PointDesc": null,
        "PointTriggerKey": 11,
        "PointType": 1,
        "PrePoint": [1402201],
        "StatusAddList": [
          {
            "$type": "AvatarPropertyValue",
            "PropertyType": "ThunderAddedRatio",
            "Value": 0.0319999998901039,
            "Name": "Lightning DMG Boost"
          }
        ]
      }
    },
    "Point12": {
      "1": {
        "Anchor": "Point12",
        "AvatarPromotionLimit": 3,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "IconDefence.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 9000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 3,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 2,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402204,
        "PointName": "DEF Boost",
        "PointDesc": null,
        "PointTriggerKey": 12,
        "PointType": 1,
        "PrePoint": [1402101],
        "StatusAddList": [
          {
            "$type": "AvatarPropertyValue",
            "PropertyType": "DefenceAddedRatio",
            "Value": 0.0500000000465661,
            "Name": "DEF"
          }
        ]
      }
    },
    "Point13": {
      "1": {
        "Anchor": "Point13",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "IconThunderAddedRatio.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 19000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 4,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 4,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402205,
        "PointName": "DMG Boost: Lightning",
        "PointDesc": null,
        "PointTriggerKey": 13,
        "PointType": 1,
        "PrePoint": [1402101],
        "StatusAddList": [
          {
            "$type": "AvatarPropertyValue",
            "PropertyType": "ThunderAddedRatio",
            "Value": 0.0479999994859099,
            "Name": "Lightning DMG Boost"
          }
        ]
      }
    },
    "Point14": {
      "1": {
        "Anchor": "Point14",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "IconCriticalChance.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 45000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 3,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 3,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402206,
        "PointName": "CRIT Rate Boost",
        "PointDesc": null,
        "PointTriggerKey": 14,
        "PointType": 1,
        "PrePoint": [1402102],
        "StatusAddList": [
          {
            "$type": "AvatarPropertyValue",
            "PropertyType": "CriticalChanceBase",
            "Value": 0.0400000000372529,
            "Name": "CRIT Rate"
          }
        ]
      }
    },
    "Point15": {
      "1": {
        "Anchor": "Point15",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "IconThunderAddedRatio.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 45000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 3,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 3,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402207,
        "PointName": "DMG Boost: Lightning",
        "PointDesc": null,
        "PointTriggerKey": 15,
        "PointType": 1,
        "PrePoint": [1402102],
        "StatusAddList": [
          {
            "$type": "AvatarPropertyValue",
            "PropertyType": "ThunderAddedRatio",
            "Value": 0.0479999994859099,
            "Name": "Lightning DMG Boost"
          }
        ]
      }
    },
    "Point16": {
      "1": {
        "Anchor": "Point16",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "IconDefence.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 140000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 7,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 6,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402208,
        "PointName": "DEF Boost",
        "PointDesc": null,
        "PointTriggerKey": 16,
        "PointType": 1,
        "PrePoint": [1402103],
        "StatusAddList": [
          {
            "$type": "AvatarPropertyValue",
            "PropertyType": "DefenceAddedRatio",
            "Value": 0.0749999997206032,
            "Name": "DEF"
          }
        ]
      }
    },
    "Point17": {
      "1": {
        "Anchor": "Point17",
        "AvatarPromotionLimit": null,
        "AvatarLevelLimit": 75,
        "DefaultUnlock": false,
        "Icon": "IconCriticalChance.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 160000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 8,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 8,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402209,
        "PointName": "CRIT Rate Boost",
        "PointDesc": null,
        "PointTriggerKey": 17,
        "PointType": 1,
        "PrePoint": [1402208],
        "StatusAddList": [
          {
            "$type": "AvatarPropertyValue",
            "PropertyType": "CriticalChanceBase",
            "Value": 0.0529999998398125,
            "Name": "CRIT Rate"
          }
        ]
      }
    },
    "Point18": {
      "1": {
        "Anchor": "Point18",
        "AvatarPromotionLimit": null,
        "AvatarLevelLimit": 80,
        "DefaultUnlock": false,
        "Icon": "IconThunderAddedRatio.png",
        "LevelUpSkillID": [],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 160000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 8,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 8,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 1,
        "ParamList": [],
        "PointID": 1402210,
        "PointName": "DMG Boost: Lightning",
        "PointDesc": null,
        "PointTriggerKey": 18,
        "PointType": 1,
        "PrePoint": [1402209],
        "StatusAddList": [
          {
            "$type": "AvatarPropertyValue",
            "PropertyType": "ThunderAddedRatio",
            "Value": 0.0639999997802079,
            "Name": "Lightning DMG Boost"
          }
        ]
      }
    },
    "Point19": {
      "1": {
        "Anchor": "Point19",
        "AvatarPromotionLimit": null,
        "AvatarLevelLimit": null,
        "DefaultUnlock": true,
        "Icon": "SkillIcon_11402_Servant01.png",
        "LevelUpSkillID": [1140201],
        "MaterialList": [],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402301,
        "PointName": "Thorned Snare",
        "PointDesc": null,
        "PointTriggerKey": 19,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      },
      "2": {
        "Anchor": "Point19",
        "AvatarPromotionLimit": 2,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_11402_Servant01.png",
        "LevelUpSkillID": [1140201],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 3500,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110251,
            "ItemNum": 2,
            "Rarity": "NotNormal"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 4,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402301,
        "PointName": "Thorned Snare",
        "PointDesc": null,
        "PointTriggerKey": 19,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      },
      "3": {
        "Anchor": "Point19",
        "AvatarPromotionLimit": 3,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_11402_Servant01.png",
        "LevelUpSkillID": [1140201],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 7000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 2,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 2,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402301,
        "PointName": "Thorned Snare",
        "PointDesc": null,
        "PointTriggerKey": 19,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      },
      "4": {
        "Anchor": "Point19",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_11402_Servant01.png",
        "LevelUpSkillID": [1140201],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 16000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 4,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 3,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402301,
        "PointName": "Thorned Snare",
        "PointDesc": null,
        "PointTriggerKey": 19,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      },
      "5": {
        "Anchor": "Point19",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_11402_Servant01.png",
        "LevelUpSkillID": [1140201],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 35000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402301,
        "PointName": "Thorned Snare",
        "PointDesc": null,
        "PointTriggerKey": 19,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      },
      "6": {
        "Anchor": "Point19",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_11402_Servant01.png",
        "LevelUpSkillID": [1140201],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 140000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 6,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402301,
        "PointName": "Thorned Snare",
        "PointDesc": null,
        "PointTriggerKey": 19,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      }
    },
    "Point20": {
      "1": {
        "Anchor": "Point20",
        "AvatarPromotionLimit": null,
        "AvatarLevelLimit": null,
        "DefaultUnlock": true,
        "Icon": "SkillIcon_11402_ServantPassive.png",
        "LevelUpSkillID": [1140203, 1140205, 1140206],
        "MaterialList": [],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402302,
        "PointName": "A Body Brewed by Tears",
        "PointDesc": null,
        "PointTriggerKey": 20,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      },
      "2": {
        "Anchor": "Point20",
        "AvatarPromotionLimit": 2,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_11402_ServantPassive.png",
        "LevelUpSkillID": [1140203, 1140205, 1140206],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 3500,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110251,
            "ItemNum": 2,
            "Rarity": "NotNormal"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115001,
            "ItemNum": 4,
            "Rarity": "NotNormal"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402302,
        "PointName": "A Body Brewed by Tears",
        "PointDesc": null,
        "PointTriggerKey": 20,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      },
      "3": {
        "Anchor": "Point20",
        "AvatarPromotionLimit": 3,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_11402_ServantPassive.png",
        "LevelUpSkillID": [1140203, 1140205, 1140206],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 7000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 2,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 2,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402302,
        "PointName": "A Body Brewed by Tears",
        "PointDesc": null,
        "PointTriggerKey": 20,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      },
      "4": {
        "Anchor": "Point20",
        "AvatarPromotionLimit": 4,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_11402_ServantPassive.png",
        "LevelUpSkillID": [1140203, 1140205, 1140206],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 16000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110252,
            "ItemNum": 4,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115002,
            "ItemNum": 3,
            "Rarity": "Rare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402302,
        "PointName": "A Body Brewed by Tears",
        "PointDesc": null,
        "PointTriggerKey": 20,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      },
      "5": {
        "Anchor": "Point20",
        "AvatarPromotionLimit": 5,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_11402_ServantPassive.png",
        "LevelUpSkillID": [1140203, 1140205, 1140206],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 35000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402302,
        "PointName": "A Body Brewed by Tears",
        "PointDesc": null,
        "PointTriggerKey": 20,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      },
      "6": {
        "Anchor": "Point20",
        "AvatarPromotionLimit": 6,
        "AvatarLevelLimit": null,
        "DefaultUnlock": false,
        "Icon": "SkillIcon_11402_ServantPassive.png",
        "LevelUpSkillID": [1140203, 1140205, 1140206],
        "MaterialList": [
          {
            "$type": "ItemConfigRow",
            "ItemID": 2,
            "ItemNum": 140000,
            "Rarity": "Rare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 110253,
            "ItemNum": 6,
            "Rarity": "VeryRare"
          },
          {
            "$type": "ItemConfigRow",
            "ItemID": 115003,
            "ItemNum": 2,
            "Rarity": "VeryRare"
          }
        ],
        "MaxLevel": 6,
        "ParamList": [],
        "PointID": 1402302,
        "PointName": "A Body Brewed by Tears",
        "PointDesc": null,
        "PointTriggerKey": 20,
        "PointType": 4,
        "PrePoint": [],
        "StatusAddList": []
      }
    }
  },
  "Memosprite": {
    "Name": "Garmentmaker",
    "Icon": "SpriteOutput/ServantIconTeam/11402B.png",
    "HPBase": "#6",
    "HPInherit": "#5",
    "HPSkill": 140204,
    "SpeedBase": "0",
    "SpeedInherit": "#4",
    "SpeedSkill": 140204,
    "Aggro": 125,
    "Skills": {
      "1140201": {
        "Name": "Thorned Snare",
        "Desc": "Deals Lightning DMG equal to \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#1[i]%\u003C/unbreak\u003E\u003C/color\u003E of ATK to one enemy and Lightning DMG equal to \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#2[i]%\u003C/unbreak\u003E\u003C/color\u003E of ATK to adjacent targets.",
        "Type": "Servant",
        "Tag": "Blast",
        "SPBase": 10,
        "BPNeed": -0.999999999767169,
        "BPAdd": null,
        "ShowStanceList": [30, 0, 15],
        "SkillComboValueDelta": null,
        "Level": {
          "1": {
            "Level": 1,
            "ParamList": [0.550000000512227, 0.330000000307336, 1]
          },
          "2": {
            "Level": 2,
            "ParamList": [0.660000000614673, 0.395999999949709, 1]
          },
          "3": {
            "Level": 3,
            "ParamList": [0.770000000717118, 0.462000000290573, 1]
          },
          "4": {
            "Level": 4,
            "ParamList": [0.880000000819564, 0.527999999932945, 1]
          },
          "5": {
            "Level": 5,
            "ParamList": [0.990000000922009, 0.594000000273809, 1]
          },
          "6": {
            "Level": 6,
            "ParamList": [1.10000000009313, 0.660000000614673, 1]
          },
          "7": {
            "Level": 7,
            "ParamList": [1.21000000019558, 0.726000000257045, 1]
          },
          "8": {
            "Level": 8,
            "ParamList": [1.32000000029802, 0.792000000597909, 1]
          },
          "9": {
            "Level": 9,
            "ParamList": [1.43000000040047, 0.858000000240281, 1]
          },
          "10": {
            "Level": 10,
            "ParamList": [1.54000000050291, 0.924000000581145, 1]
          }
        }
      },
      "1140203": {
        "Name": "A Body Brewed by Tears",
        "Desc": "After attacking an enemy afflicted with \"Seam Stitch,\" increases this unit's SPD by \u003Ccolor=#f29e38ff\u003E\u003Cunbreak\u003E#1[i]\u003C/unbreak\u003E\u003C/color\u003E, stacking up to \u003Cunbreak\u003E#3[i]\u003C/unbreak\u003E time(s). When Garmentmaker takes action, automatically uses \"Thorned Snare,\" prioritizing enemies under the \"Seam Stitch\" state.",
        "Type": null,
        "Tag": "Enhance",
        "SPBase": null,
        "BPNeed": -0.999999999767169,
        "BPAdd": null,
        "ShowStanceList": [0, 0, 0],
        "SkillComboValueDelta": null,
        "Level": {
          "1": {
            "Level": 1,
            "ParamList": [44, 3, 6]
          },
          "2": {
            "Level": 2,
            "ParamList": [46.2000000001863, 3, 6]
          },
          "3": {
            "Level": 3,
            "ParamList": [48.4000000003725, 3, 6]
          },
          "4": {
            "Level": 4,
            "ParamList": [50.6000000005588, 3, 6]
          },
          "5": {
            "Level": 5,
            "ParamList": [52.8000000007451, 3, 6]
          },
          "6": {
            "Level": 6,
            "ParamList": [55, 3, 6]
          },
          "7": {
            "Level": 7,
            "ParamList": [57.2000000001863, 3, 6]
          },
          "8": {
            "Level": 8,
            "ParamList": [59.4000000003725, 3, 6]
          },
          "9": {
            "Level": 9,
            "ParamList": [61.6000000005588, 3, 6]
          },
          "10": {
            "Level": 10,
            "ParamList": [63.8000000007451, 3, 6]
          }
        }
      },
      "1140205": {
        "Name": "The Speeding Summer",
        "Desc": "When Garmentmaker is summoned, this unit's \u003Cu\u003Eaction advances\u003C/u\u003E by \u003Cunbreak\u003E#1[i]%\u003C/unbreak\u003E.",
        "Type": null,
        "Tag": "Enhance",
        "SPBase": null,
        "BPNeed": -0.999999999767169,
        "BPAdd": null,
        "ShowStanceList": [0, 0, 0],
        "SkillComboValueDelta": null,
        "Level": {
          "1": {
            "Level": 1,
            "ParamList": [1]
          },
          "2": {
            "Level": 2,
            "ParamList": [1]
          },
          "3": {
            "Level": 3,
            "ParamList": [1]
          },
          "4": {
            "Level": 4,
            "ParamList": [1]
          },
          "5": {
            "Level": 5,
            "ParamList": [1]
          },
          "6": {
            "Level": 6,
            "ParamList": [1]
          },
          "7": {
            "Level": 7,
            "ParamList": [1]
          },
          "8": {
            "Level": 8,
            "ParamList": [1]
          },
          "9": {
            "Level": 9,
            "ParamList": [1]
          },
          "10": {
            "Level": 10,
            "ParamList": [1]
          }
        }
      },
      "1140206": {
        "Name": "Bloom of Drying Grass",
        "Desc": "When Garmentmaker disappears, regenerates \u003Cunbreak\u003E#1[i]\u003C/unbreak\u003E Energy for Aglaea.",
        "Type": null,
        "Tag": "Enhance",
        "SPBase": null,
        "BPNeed": -0.999999999767169,
        "BPAdd": null,
        "ShowStanceList": [0, 0, 0],
        "SkillComboValueDelta": null,
        "Level": {
          "1": {
            "Level": 1,
            "ParamList": [20]
          },
          "2": {
            "Level": 2,
            "ParamList": [20]
          },
          "3": {
            "Level": 3,
            "ParamList": [20]
          },
          "4": {
            "Level": 4,
            "ParamList": [20]
          },
          "5": {
            "Level": 5,
            "ParamList": [20]
          },
          "6": {
            "Level": 6,
            "ParamList": [20]
          },
          "7": {
            "Level": 7,
            "ParamList": [20]
          },
          "8": {
            "Level": 8,
            "ParamList": [20]
          },
          "9": {
            "Level": 9,
            "ParamList": [20]
          },
          "10": {
            "Level": 10,
            "ParamList": [20]
          }
        }
      }
    },
    "Talent": {

    }
  },
  "Unique": {

  },
  "Stats": {
    "0": lvlCHar;
    "1": lvlCHar;
    "2": lvlCHar;
    "3": lvlCHar;
    "4": lvlCHar;
    "5": lvlCHar;
    "6": lvlCHar;
  }
}