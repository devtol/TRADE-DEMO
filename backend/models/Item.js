const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    _id: { type: Object },
    name: { type: String, required: true, unique: true},
    itemName: { type: String, required: true},
    category: { type: String, required: true},
    type: { type: String, required: true},
    itemClass: { type: String },
    grade: { type: String },
    options: [
      { 
        default: {
          type: Array
        }
      },
      { 
        inherence: {
          type: Array
        },
      },
    ]
  }
)

module.exports = mongoose.model("Item", itemSchema);