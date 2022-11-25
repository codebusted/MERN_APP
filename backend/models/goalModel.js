const mongoose = require('mongoose')

// schema
const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value'],
    },
},
{
    timestamps: true,
}
)

// mongoose.model(modelName, schema)
module.exports = mongoose.model('Goal', goalSchema)