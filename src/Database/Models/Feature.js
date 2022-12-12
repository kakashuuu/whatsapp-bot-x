const { Schema, model } = require('mongoose')

const schema = new Schema({
    feature: {
        type: String,
        required: true,
        unique: true
    },

    state: {
        type: Boolean,
        required: false,
        default: true,
    }
})

module.exports = model('feature', schema)
