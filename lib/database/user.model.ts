import { Schema, model, models } from "mongoose";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: [true, "User name is required"],
    validate: {
      validator: function (val: string) {
        return isEmail(val);
      },
      message: (props: { value: string }) =>
        `${props.value} is not a valid email!`,
    },
  },
  photo: String,
  phoneNumber: {
    type: String,
    validate: {
      validator: function (val: string) {
        return isMobilePhone(val);
      },
      message: (props: { value: string }) =>
        `${props.value} is not a valid phone number!`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (val: string) {
        return val === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  role: {
    type: String,
    enum: ["chef", "user", "admin"],
    required: [true, "A role value is required"],
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const User = models.User || model("User", UserSchema);
