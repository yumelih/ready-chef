import mongoose from "mongoose";

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
  _id: mongoose.Types.ObjectId;
  review: string;
  rating: string;
  user: mongoose.Types.ObjectId;
  chef: mongoose.Types.ObjectId;
  madeAt: Date;
}

export interface PopulatedChefType extends ChefType {
  reviews: ReviewType[];
}

// export interface ChefTypeCity extends ChefType {
//   city: string;
// }
