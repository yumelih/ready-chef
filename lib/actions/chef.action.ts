import { connectToDB } from "../database/mongoose";
import Chef from "@/lib/database/chef.model";

export async function getAllChefs() {
  try {
    connectToDB();

    const chefs = await Chef.find({});

    console.log(chefs);
  } catch (err) {
    throw err;
  }
}
