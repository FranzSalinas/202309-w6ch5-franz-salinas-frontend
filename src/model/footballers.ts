import { ImgData } from './img.data';

export type Footballers = {
  id: number;
  name: string;
  team: string;
  position: string;
  preferredFoot: string;
  image: string;
  nationality: string;
  imageFootballer: ImgData;
  age: number;
};
