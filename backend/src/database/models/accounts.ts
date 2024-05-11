import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    name: String,
    accountType: String,
    initialBalance: Number,
    currentBalance: Number,
    forecastBalance: Number,

})