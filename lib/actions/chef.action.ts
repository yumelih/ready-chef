import { connectToDB } from "../database/mongoose";
import Chef from "@/lib/database/chef.model";
import { getLocation } from "../utils/reverseGeocoding";
import { ChefType } from "@/types/types";

export async function getAllChefs() {
  try {
    connectToDB();

    let chefs: ChefType[] = await Chef.find();

    // let newChefsPromises = chefs.map(async (chef) => {
    //   const city = await getLocation(
    //     chef.chefLocation.coordinates[0],
    //     chef.chefLocation.coordinates[1],
    //   );
    //   return {
    //     ...chef,
    //     _doc: {
    //       ...chef._doc,
    //       city,
    //     },
    //   };
    // });

    // const newChefs = await Promise.all(newChefsPromises);

    return chefs;
  } catch (err) {
    throw err;
  }
}
