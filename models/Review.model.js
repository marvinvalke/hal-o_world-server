const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const reviewSchema = new Schema(
    {
        rate: {
            type: Number, 
            required: true
        },               
        missionId: {
            type: Schema.Types.ObjectId, 
            ref: 'Mission'
        },
        userId: {
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }
      }
);

const Review = model("Review", reviewSchema);

module.exports = Review;