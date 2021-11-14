const mongoose = require("mongoose");
const dbUrl = process.env.DATABASE;
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log(`connection is successful`);
  })
  .catch((err) => console.log(`no connection`));

// const middleware = (req, res, next) => {
//   console.log(`this is middleware`);
//   next();
// };
