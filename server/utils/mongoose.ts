import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    //@ts-ignore
    await mongoose.connect(process.env.MONGODB_URL, { dbName: "auth" });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};
