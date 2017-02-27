/*       Name: Joshua Dusome
         Date: 27/02/2017
         Website:
         File: item-list.js
         Purpose: Stores our item-list schema
 */

var mongoose = require('mongoose');

//Creating an itemProperties Schema which will be a subdoc of arrays within itemListSchema
var itemPropertiesSchema = new mongoose.Schema({
        id: {
            type: String,
            required: 'Invalid product ID'
        },
        quantity: {
            type: Number,
            required: 'Please enter a quantity'
        },
        purchased: {
            type: Boolean,
            default: false
        }
});


//define a schema for the item-list model
//this model inherits from the mongoose.Schema
var itemListSchema = new mongoose.Schema({
    date: {
        type: String,
        required: 'Invalid Date'
    },
    items: [itemPropertiesSchema]
});

// make the itemSchema class public, under the name Item
module.exports = mongoose.model('Item-List', itemListSchema);