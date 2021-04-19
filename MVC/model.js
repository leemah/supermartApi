const mongoose = require("mongoose")

const schemaStructure = mongoose.Schema({
    ItemName:{
        type: String,
        required: true,
    },
    StockLevel:{
        type: Number,
        required: true,
    },
    ReOrderLevel:{
        type: Number,
        required: true,
    },
    OrderQuantity:{
        type: Number,
        required: true,
    },
    Price:{
        type: Number,
        required: true,
    },
    Category:{
        type: String,
        required: true,
    },
    SupplierCode:{
        type: String,
        required: true,
    },
    Date:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("supermarts", schemaStructure)