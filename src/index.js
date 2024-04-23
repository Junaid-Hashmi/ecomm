import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/index.js";

(async () => {
  try {
    mongoose.connect(config.MONGODB_URL);
    console.log("DB Connected!");

    app.on("error", (err) => {
      console.error(err);
      throw err;
    });

    const onListening = () => {
      console.log(`Listening on port ${config.PORT}`);
    };

    app.listen(config.PORT, onListening);
  } catch (error) {
    console.error("MONGODB CONN err: ", error);
    throw error;
  }
})();
