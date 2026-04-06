export interface Users {
  id?: number;
  username: string;
  email: string;
  password: string;
  name: Name;
  phone:string;
  __v:number;
  address:Address;
}
export interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Geolocation {
  lat: string;
  long: string;
}
export interface Name {
  firstName: string;
  secondName: string;
}
