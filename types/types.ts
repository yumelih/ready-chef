export interface ChefType {
  _doc: any;
  name: string;
  desc: string;
  email: string;
  phoneNumber: string;
  experienceYear: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  lookingForWork: boolean;
  speciality: string;
  joinedIn: Date;
  chefLocation: {
    type: string;
    coordinates: number[];
    address: string | undefined;
  };
  signutareDish: string;
  profilePhoto: string;
  imageCover: string;
  images: string[];
}

export interface ChefTypeCity extends ChefType {
  city: string;
}
