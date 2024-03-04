import { getLocation } from "@/lib/utils/reverseGeocoding";
import Chef from "../lib/database/chef.model";
import { connectToDB } from "../lib/database/mongoose";
import { locations } from "./data";
import fs from "fs";

const chefData = JSON.parse(
  fs.readFileSync(`${__dirname}/chef-data2.json`, "utf-8"),
);
connectToDB();

const importChefData = async function () {
  try {
    await Chef.create(chefData);
    await updateLocationsChefs();
  } catch (err) {
    console.log(err);
  }
};

const updateLocationsChefs = async () => {
  try {
    let index = 0;
    for await (const doc of Chef.find()) {
      console.log(locations[index][1], locations[index][0]);
      const address = await getLocation(
        locations[index][0],
        locations[index][1],
      );
      doc.chefLocation = {
        type: "Point",
        coordinates: locations[index],
        address,
      };
      await doc.save();
      index += 1;
    }
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteAllChefs = async () => {
  try {
    await Chef.deleteMany();
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

if (process.argv[2] === "--import") {
  importChefData();
}

if (process.argv[2] === "--delete") {
  deleteAllChefs();
}
