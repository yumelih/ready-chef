import "@/lib/database/review.model"; // Import review.model first
import "@/lib/database/user.model"; // Import chef.model after
import { connectToDB } from "../database/mongoose";
import Chef from "@/lib/database/chef.model";
import { ChefType, PopulatedChefType } from "@/types/types";

export async function getAllChefs() {
  try {
    await connectToDB(); // Ensure database connection

    let chefs: ChefType[] = await Chef.find();

    return chefs;
  } catch (err) {
    throw err; // Consider throwing the error for better error handling
  }
}

export async function getChef(id: string) {
  try {
    await connectToDB(); // Ensure database connection

    const chef = (await Chef.findById(id).populate(
      "reviews",
    )) as PopulatedChefType | null;

    return chef;
  } catch (err) {
    console.log(err);
    throw err; // Consider throwing the error for better error handling
  }
}
