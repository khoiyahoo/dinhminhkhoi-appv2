export interface Tech {
  title: string;
  logo: string;
}

export interface ISkill {
  id: number | undefined;
  name: string;
  techs: Tech[];
}
