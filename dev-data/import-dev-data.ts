import Chef from "../lib/database/chef.model";
import { connectToDB } from "../lib/database/mongoose";
import { locations } from "./data";

connectToDB();

const updateLocationsChefs = async () => {
  try {
    let index = 0;
    for await (const doc of Chef.find()) {
      doc.chefLocation = { type: "Point", coordinates: locations[index] };
      await doc.save();
      index += 1;
    }
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import-locations") {
  updateLocationsChefs();
}
