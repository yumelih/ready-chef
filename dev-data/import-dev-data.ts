import bcrypt from "bcrypt";
import fs from "fs";
import { getLocation } from "@/lib/utils/reverseGeocoding";
import Chef from "../lib/database/chef.model";
import User from "../lib/database/user.model";
import Review from "@/lib/database/review.model";
import { connectToDB } from "../lib/database/mongoose";
import { description, locations } from "./data";

const chefData = JSON.parse(
  fs.readFileSync(`${__dirname}/chef-data2.json`, "utf-8"),
);
const userData = JSON.parse(
  fs.readFileSync(`${__dirname}/user-data.json`, "utf-8"),
);
const reviewData = JSON.parse(
  fs.readFileSync(`${__dirname}/review-data.json`, "utf-8"),
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

const importReviewData = async function () {
  try {
    await Review.create(reviewData);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const importUserData = async function () {
  try {
    const promisedData = userData.map(
      async (elm: { password: string | Buffer }) => {
        const newPassword = await bcrypt.hash(elm.password, 12);
        return { ...elm, password: newPassword };
      },
    );

    const data = await Promise.all(promisedData);

    await User.create(data, { runValidators: false });
  } catch (err) {
    console.log(err);
  }

  process.exit();
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

const updateDescChefs = async () => {
  try {
    await Chef.updateMany({}, { desc: description });
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const getUserIds = async () => {
  try {
    const ids = await User.find({}).select("id");
    console.log(
      ids
        .map((elm) => {
          return elm._id.toString();
        })
        .join(","),
    );
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

const deleteAllChefs = async () => {
  try {
    // await Chef.deleteMany();
    await Review.deleteMany();
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

if (process.argv[2] === "--import") {
  // importChefData();
  // updateDescChefs();
  // importUserData();
  importReviewData();
}

if (process.argv[2] === "--getData") {
  // importChefData();
  getUserIds();
}

if (process.argv[2] === "--delete") {
  deleteAllChefs();
}
