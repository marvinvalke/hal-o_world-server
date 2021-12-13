const { Schema, model } = require("mongoose");

const missionSchema = new Schema(
    {
        name: {
            type: String, 
            required: true, 
            unique: true
        },
        description: {
            type: String, 
            required: true
        },
        image: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
            required: true
        },
        difficulty: {
            type: String, 
            required: true
        },
        reviews: [{ 
            type: Schema.Types.ObjectId, 
            ref: "Review" 
        }],
      }
);

const Missions = model("Missions", missionSchema);

module.exports = Missions;
