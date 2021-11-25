const Item = require("../models/Item");
const router = require("express").Router();

router.get("/", async(req, res) => {
  console.log("asdsa", req.params);
  const items = await Item.find();
  res.status(200).json(items);
});

router.get("/:id", async(req, res) => {
  console.log(req);
  const item = await Item.findById(req.params.id);
  console.log(item);
  res.status(200).json(item);
});
module.exports = router;