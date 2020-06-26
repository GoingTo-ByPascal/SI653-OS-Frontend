import {User} from "./user";
import {Country} from "./country";

export class Profile {
  id: number;
  name: string;
  surname: string;
  birthdate: string;
  gender: number;
  user:User;
  country:Country;

}
