import * as paintjobIcons from 'assets/pickaxes/paintjobs';
import * as skinIcons from 'assets/pickaxes/skins';
import * as uniquePartIcons from 'assets/pickaxes/uniqueParts';
import { ItemSource } from 'types/itemSource';

// Unpacked DRG source file name suffixes included in comment
// Company Standard set deliberately excluded
export const PickaxeSets = [
  // 'Company Standard', // 001
  'Pneumatic', // 002
  'Bug Hide', // 003
  'Hammerblow', // 004
  'Incorruptible', // 005
  'Jagged Son', // 006
  'Carven Pride', // 007
  'Chasm-Borne Cliffhanger', // Chasmborne
  'Drift Crusher', // Drift
  "Gadgeteer's Favorite", // Gadgeteer
  "Reaper's Claw", // ReapersClaw
  "Arc Welder's Delight", // S01
  'Core Hound', // S02
  'Blight Guard', // S03
] as const;

// NOTE: DLC Paintjobs disabled until GUIDs can be found
export const PickaxePaintjobNames = [
  ...PickaxeSets,
  // 'Dawn of the Dread',
  // 'MegaCorp',
  // 'Roughneck',
  // 'The Supporter',
] as const;

// Unpacked DRG source file name suffixes included in comment
export const PickaxeUniquePartNames = [
  'Hole Digger', // 001
  'Skull Buster', // 002
  'Obsidian Mallet', // 003
  'Chop-Chop', // 004
] as const;

export const PickaxeIcons: Record<typeof PickaxeSets[number], ImgSrc> = {
  'Bug Hide': skinIcons.BugHide,
  'Carven Pride': skinIcons.CarvenPride,
  'Chasm-Borne Cliffhanger': skinIcons.ChasmBorneCliffhanger,
  'Drift Crusher': skinIcons.DriftCrusher,
  "Gadgeteer's Favorite": skinIcons.GadgeteersFavorite,
  Hammerblow: skinIcons.Hammerblow,
  Incorruptible: skinIcons.Incorruptible,
  'Jagged Son': skinIcons.JaggedSon,
  Pneumatic: skinIcons.Pneumatic,
  "Reaper's Claw": skinIcons.ReapersClaw,
  "Arc Welder's Delight": skinIcons.ArcWeldersDelight,
  'Core Hound': skinIcons.CoreHound,
  'Blight Guard': skinIcons.BlightGuard,
};

// NOTE: DLC Paintjobs disabled until GUIDs can be found
export const PickaxePaintjobIcons: Record<PickaxePaintjobName, ImgSrc> = {
  'Bug Hide': paintjobIcons.BugHide,
  'Carven Pride': paintjobIcons.CarvenPride,
  'Chasm-Borne Cliffhanger': paintjobIcons.ChasmBorneCliffhanger,
  'Drift Crusher': paintjobIcons.DriftCrusher,
  "Gadgeteer's Favorite": paintjobIcons.GadgeteersFavorite,
  Hammerblow: paintjobIcons.Hammerblow,
  Incorruptible: paintjobIcons.Incorruptible,
  'Jagged Son': paintjobIcons.JaggedSon,
  Pneumatic: paintjobIcons.Pneumatic,
  "Reaper's Claw": paintjobIcons.ReapersClaw,
  // 'Dawn of the Dread': paintjobIcons.DawnOfTheDread,
  // MegaCorp: paintjobIcons.MegaCorp,
  // Roughneck: paintjobIcons.Roughneck,
  // 'The Supporter': paintjobIcons.TheSupporter,
  "Arc Welder's Delight": paintjobIcons.ArcWeldersDelight,
  'Core Hound': paintjobIcons.CoreHound,
  'Blight Guard': paintjobIcons.BlightGuard,
};

export const PickaxeUniquePartIcons: Record<
  typeof PickaxeUniquePartNames[number],
  ImgSrc
> = {
  'Chop-Chop': uniquePartIcons.ChopChop,
  'Hole Digger': uniquePartIcons.HoleDigger,
  'Obsidian Mallet': uniquePartIcons.ObsidianMallet,
  'Skull Buster': uniquePartIcons.SkullBuster,
};

export type PickaxeParts =
  | 'Blades'
  | 'Head'
  | 'Shaft'
  | 'Handle'
  | 'Pommel'
  | 'Paintjob';

export type PickaxePaintjobName = typeof PickaxePaintjobNames[number];

export type Pickaxe = {
  name: typeof PickaxeSets[number];
  source: ItemSource;
  assignmentRank?: number;
  icon: typeof PickaxeIcons[typeof PickaxeSets[number]];
  paintjobIcon: typeof PickaxePaintjobIcons[PickaxePaintjobName];
  partIDs: Record<PickaxeParts, string>;
};

export type PickaxeUniquePart = {
  name: typeof PickaxeUniquePartNames[number];
  source: ItemSource;
  id: string;
  icon: typeof PickaxeUniquePartIcons[typeof PickaxeUniquePartNames[number]];
};

export const Pickaxes: Pickaxe[] = [
  {
    name: 'Chasm-Borne Cliffhanger',
    source: ItemSource.Assignment,
    assignmentRank: 20,
    icon: PickaxeIcons['Chasm-Borne Cliffhanger'],
    paintjobIcon: PickaxePaintjobIcons['Chasm-Borne Cliffhanger'],
    partIDs: {
      Blades: '1529DDEDA12D25438EBDB93A82077BBE',
      Head: '06B9800893F1CD4783A3D2815278CEA7',
      Shaft: '0EE2D4D65CD8B3448D3F1E449891775B',
      Handle: '1A3A10EAF963804B8A302C26D7682A81',
      Pommel: '3B5A2EF0CE4AA5458635D6E2C1002183',
      Paintjob: '3C52EC0BF9676A4193AC78F14C120C07',
    },
  },
  {
    name: "Gadgeteer's Favorite",
    source: ItemSource.Assignment,
    assignmentRank: 30,
    icon: PickaxeIcons["Gadgeteer's Favorite"],
    paintjobIcon: PickaxePaintjobIcons["Gadgeteer's Favorite"],
    partIDs: {
      Blades: '065A19A34B5AF246A7E9F367C17C763B',
      Head: '08953F60C6E1BA479B73D0FECF3DCF8E',
      Shaft: '36E95EEE6BB62548A57BACA25B4CBB0B',
      Handle: 'D15F294024E6D14EBDD4E071F71D2321',
      Pommel: '616A7917C386B94BBDDE281FF50F8CF7',
      Paintjob: '644559A45F6B0D4882FA8A51F5CFC1F6',
    },
  },
  {
    name: "Reaper's Claw",
    source: ItemSource.Assignment,
    assignmentRank: 50,
    icon: PickaxeIcons["Reaper's Claw"],
    paintjobIcon: PickaxePaintjobIcons["Reaper's Claw"],
    partIDs: {
      Blades: 'B3DE542E75C0B346904639A91A6E58A6',
      Head: '2A1404DDC143634B90BA34AA412E3338',
      Shaft: '5F29D2025E11424A8B0F3495890AAFCB',
      Handle: 'A3DD9B3EC775E94DA8FFCBCC51582923',
      Pommel: '3E236AEB74022345B805D7F6E193AC67',
      Paintjob: '76541AA666147B4EBC8DEF6EADE80EAC',
    },
  },
  {
    name: 'Drift Crusher',
    source: ItemSource.Assignment,
    assignmentRank: 75,
    icon: PickaxeIcons['Drift Crusher'],
    paintjobIcon: PickaxePaintjobIcons['Drift Crusher'],
    partIDs: {
      Blades: '50A8E7414FBABD41AA31191DEBA25EAC',
      Head: 'E0CD8E02333000449F74D69DBBFA1801',
      Shaft: 'B70578A2A27C5E488489039CEA0A0734',
      Handle: 'EF72D2C6579C0B4C9088A28E518BA8BE',
      Pommel: '44CB48E9B424EA4B9F11E846150696FF',
      Paintjob: 'E13FCC3DB7B2284EAA2179BBBE126056',
    },
  },

  {
    name: 'Bug Hide',
    source: ItemSource.LostPack,
    icon: PickaxeIcons['Bug Hide'],
    paintjobIcon: PickaxePaintjobIcons['Bug Hide'],
    partIDs: {
      Blades: '11129BCC1440CC4BBD270B01BB76A434',
      Head: '214CAF1B13E89F488B7056E7E2BDB2F1',
      Shaft: 'DD7F748058F10344921A304E4C496E8E',
      Handle: '3FB724D568D8044D8513AF29FB9A161E',
      Pommel: '8B71D8B815565F45898818A4C2C506FF',
      Paintjob: 'CCDC11AC1243E843BFC6EDFDC0AB0699',
    },
  },
  {
    name: 'Carven Pride',
    source: ItemSource.LostPack,
    icon: PickaxeIcons['Carven Pride'],
    paintjobIcon: PickaxePaintjobIcons['Carven Pride'],
    partIDs: {
      Blades: '7CDC163F8EBF2642A8D0172D8E87FF53',
      Head: 'F78A37C70104B64C841E1F06E5AF6ADD',
      Shaft: '987E2E445D343D4BA6D9B168BD8AB5C8',
      Handle: '8BBC447292EF0F4087317F3950FFCE0D',
      Pommel: '7634AC0FC1CE7642BC150E6E0D9C0362',
      Paintjob: '0D3638ADF7118B4D8D1FCDF12620DED7',
    },
  },

  {
    name: 'Hammerblow',
    source: ItemSource.LostPack,
    icon: PickaxeIcons['Hammerblow'],
    paintjobIcon: PickaxePaintjobIcons['Hammerblow'],
    partIDs: {
      Blades: 'C09B5D23948B9046BAF2B8F282CB37D9',
      Head: '2D5A0AB9AE60F14190377871BBB6C0CA',
      Shaft: 'B57F9E19C920384D9B837CEFF6E09EE8',
      Handle: '52BDC18CD12A984297D74BC3CDBACF75',
      Pommel: '3042C85617169945894FA8F6C712BDA2',
      Paintjob: '33E56142313FF441BB88C00876FA159E',
    },
  },
  {
    name: 'Incorruptible',
    source: ItemSource.LostPack,
    icon: PickaxeIcons['Incorruptible'],
    paintjobIcon: PickaxePaintjobIcons['Incorruptible'],
    partIDs: {
      Blades: '39BAF3AA0741DF4CB2AF8ABEACD8F9F8',
      Head: '18BB51E3D9B0FC4AA1C6A78C8780C303',
      Shaft: 'A39554E88BF3E44DBA9F0A69480FCE0A',
      Handle: 'CBBEAD7E7688FE4FA4309366D91B9F59',
      Pommel: '46E002453BB3BE46A9DC68D78405DD6E',
      Paintjob: 'B1390531560E924B8EB5706A70EB1D1F',
    },
  },
  {
    name: 'Jagged Son',
    source: ItemSource.LostPack,
    icon: PickaxeIcons['Jagged Son'],
    paintjobIcon: PickaxePaintjobIcons['Jagged Son'],
    partIDs: {
      Blades: 'BA28CF3CCACC4946964C17338B1D76F6',
      Head: '3E4A9B983E99564394198EC8967D731C',
      Shaft: '9A416D7B561C3D45A23B4E26B71C5F6D',
      Handle: '4646EAA877EEE34CA58CFF7BC63BCA2B',
      Pommel: '9EC1E4BC3B601947876A8791B650C490',
      Paintjob: '3EE95E54BE7B8043B387113F33295689',
    },
  },
  {
    name: 'Pneumatic',
    source: ItemSource.LostPack,
    icon: PickaxeIcons['Pneumatic'],
    paintjobIcon: PickaxePaintjobIcons['Pneumatic'],
    partIDs: {
      Blades: '2392C10A134F6B4CB958ABD47EA37883',
      Head: '72401E7E9F0AFD4E94809A47A1D2749E',
      Shaft: '476C27E847052145BA9314C612D1BF55',
      Handle: '10DF45BBD71BF24E85883F409979C02C',
      Pommel: '521C31964D6B574DA8EFF58E483E5265',
      Paintjob: 'A06DE30648D152448FA21E94CA0D2280',
    },
  },
  {
    name: "Arc Welder's Delight",
    source: ItemSource.LostPack,
    icon: PickaxeIcons["Arc Welder's Delight"],
    paintjobIcon: PickaxePaintjobIcons["Arc Welder's Delight"],
    partIDs: {
      Blades: '0105CEFE8571BD49B9EE4B5DA1A7F84D',
      Head: 'DA7E89D43A213E4AB19C0DA558C630BA',
      Shaft: 'FAE6460EDEE71649A784AB1DF44C2E72',
      Handle: 'CB7B940374103346A9419B07714F075A',
      Pommel: '54F6BB7EDE7FC844B14642B0C5043639',
      Paintjob: 'F351FF534374ED4DB25E169C2EBF72B7',
    },
  },
  {
    name: 'Core Hound',
    source: ItemSource.LostPack,
    icon: PickaxeIcons['Core Hound'],
    paintjobIcon: PickaxePaintjobIcons['Core Hound'],
    partIDs: {
      Blades: '5AD15B8156B02B4B91A8928A5C0ECF1E',
      Head: '2A5D87C84E08634EBDFD9B0852726C7C',
      Shaft: '9879B0049FEACD43B1080F4E5A14E581',
      Handle: '238C216EBBAFEC4A8CCB3F1CA7B7BB99',
      Pommel: '878FF8A9135C5E4C942D466DFE9EDEF1',
      Paintjob: '78F324F4C7C3A5408A89D95E00887D3A',
    },
  },
  {
    name: 'Blight Guard',
    source: ItemSource.PerformancePass,
    icon: PickaxeIcons['Blight Guard'],
    paintjobIcon: PickaxePaintjobIcons['Blight Guard'],
    partIDs: {
      Blades: 'BFCBDF0BF786804EA542B6737BEF7961',
      Head: 'BA9BB49B1696C64BAD9196DDA5CD08FC',
      Shaft: 'E4E1393576458E4EAF2D627275E5D391',
      Handle: '86AC107EAA647A488A24610E04AB3F6D',
      Pommel: '4F18C80C72999844A218FFE6B4A20987',
      Paintjob: 'F7867A472AF10349A5A57E9302E6D0B3',
    },
  },
];

export const UniqueParts: PickaxeUniquePart[] = [
  {
    name: 'Chop-Chop',
    source: ItemSource.LostPack,
    id: '9774CBA37662094096FA79D07F194CE1',
    icon: PickaxeUniquePartIcons['Chop-Chop'],
  },
  {
    name: 'Hole Digger',
    source: ItemSource.LostPack,
    id: 'AEB7BB4FDCDEEF4B94B7BE90D007F67F',
    icon: PickaxeUniquePartIcons['Hole Digger'],
  },
  {
    name: 'Obsidian Mallet',
    source: ItemSource.LostPack,
    id: '1C5EB767A9693C4BAFCB6C57D0FADB14',
    icon: PickaxeUniquePartIcons['Obsidian Mallet'],
  },
  {
    name: 'Skull Buster',
    source: ItemSource.LostPack,
    id: '0F5EA557E5B4514EB370303E5D5471EA',
    icon: PickaxeUniquePartIcons['Skull Buster'],
  },
];
