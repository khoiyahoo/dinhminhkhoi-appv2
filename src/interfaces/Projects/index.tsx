export interface IProjects {
  id: number;
  name: string;
  icon?: string;
  src?: string;
  colorCircle: string;
  colorOverlay: string;
  description: string;
  responsibility: string;
  openSource: boolean;
  live: boolean;
  techs: string[];
  link: string;
  imagePreview?: string[];
}
