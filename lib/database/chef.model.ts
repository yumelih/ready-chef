// export interface

import { Schema, model, models } from "mongoose";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import { getLocation } from "../utils/reverseGeocoding";
import { ChefType } from "@/types/types";
import Review from "./review.model";

const chefSchema = new Schema<ChefType>(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    email: {
      type: String,
      validate: {
        validator: function (val: string) {
          return isEmail(val);
        },
        message: (props: { value: string }) =>
          `${props.value} is not a valid email!`,
      },
      select: false,
    },
    phoneNumber: {
      type: String,
      unique: true,
      validate: {
        validator: function (val: string) {
          isMobilePhone(val);
        },
        message: (props: { value: any }) =>
          `${props.value} is not a valid phone number!`,
      },
      select: false,
    },
    experienceYear: Number,
    ratingsAverage: {
      type: Number,
      min: 1,
      max: 5,
      default: 4.5,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    lookingForWork: {
      type: Boolean,
      default: true,
    },
    speciality: {
      type: String,
    },
    joinedIn: {
      type: Date,
      default: Date.now,
    },
    chefLocation: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
      // select: false,
    },
    signatureDish: {
      type: String,
    },
    profilePhoto: {
      type: String,
    },
    imageCover: String,
    images: [String],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

chefSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "chef",
  localField: "_id",
});

// chefSchema.pre("save", async function (next) {
//   console.log(this.name);
//   if (this.chefLocation && !this.chefLocation.address) {
//     this.chefLocation.address = await getLocation(
//       this.chefLocation.coordinates[1],
//       this.chefLocation.coordinates[0],
//     );
//   }
//   next();
// });

const Chef = models.Chef || model("Chef", chefSchema);

export default Chef;
