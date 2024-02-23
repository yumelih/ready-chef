import Chef from "../lib/database/chef.model";
import { connectToDB } from "../lib/database/mongoose";
import { locations } from "./data";
import fs from "fs";

const chefData = JSON.parse(
  fs.readFileSync(`${__dirname}/chef-data.json`, "utf-8"),
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
      doc.chefLocation = { type: "Point", coordinates: locations[index] };
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
