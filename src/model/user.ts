import { Footballers } from './footballers';
import { ImgData } from './img.data';

export type LoginUser = {
  userName: string;
  password: string;
};

export type User = LoginUser & {
  id: string;
  name: string;
  surname: string;
  age: number;
  avatar: ImgData;
  footballers: Footballers[];
  role: 'Admin';
  Users;
};
