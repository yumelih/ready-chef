// export interface

import { Schema, model, models } from "mongoose";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

export interface ChefType {
  name: string;
  email: string;
  phoneNumber: string;
  experience: string;
}

const ChefSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator: function (val: string) {
        return isEmail(val);
      },
      message: (props: { value: any }) => `${props.value} is not a valid email`,
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
        `${props.value} is not a valid phone number`,
    },
    select: false,
  },
  experience: String,
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
  tags: {
    type: [String],
  },
  joinedIn: {
    type: Date,
    default: Date.now(),
  },
});

const Chef = models.Chef || model("Chef", ChefSchema);

export default Chef;
