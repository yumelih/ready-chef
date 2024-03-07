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
  signatureDish: string;
  profilePhoto: string;
  imageCover: string;
  images: string[];
}

export interface ReviewType {
  id: number;
  review: string;
  avatar: string;
  name: string;
  job: string;
}

// export interface ChefTypeCity extends ChefType {
//   city: string;
// }
