import mongoose from "mongoose";
import { randomUUID } from "crypto";
const budgetSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID(),
    },
    data: {
        type: Object,
        strick: false
    }
    // eatout: {
    //   type: String,
    //   required: true,
    // },
    // rent: {
    //   type: String,
    //   required: true,
    // },
    // grocery: {
    //   type: String,
    //   required: true,
    // },
    // movies: {
    //   type: String,
    //   required: true,
    // },
    // electricity: {
    //   type: String,
    //   required: true,
    // },
    // gas: {
    //   type: String,
    //   required: true,
    // },
    // misc: {
    //   type: String,
    //   required: true,
    // },
});
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    budget: [budgetSchema],
});
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map