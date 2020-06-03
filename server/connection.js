import mongoose from "mongoose";
import * as _debug from "debug";
import config from "../utils/config";

const debug = _debug("db");

export default async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose
    .connect(config.dbUrl, {
      dbName: config.dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .catch((error) => {
      debug("Database connection failed. ↓");
      debug(` > ${error}`);
      throw error;
    });
};
