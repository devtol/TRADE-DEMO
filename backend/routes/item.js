const Item = require("../models/Item");
const router = require("express").Router();

router.get("/", async(req, res) => {
  const items = await Item.find();
  res.status(200).json(items);
});

router.get("/:id", async(req, res) => {
  const item = await Item.findById(req.params.id);
  res.status(200).json(item);
});
module.exports = router;