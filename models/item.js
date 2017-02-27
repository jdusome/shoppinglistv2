/*       Name: Joshua Dusome
         Date: 27/02/2017
         Website:
         File: item.js
         Purpose: Stores our item schema
 */

var mongoose = require('mongoose');

//define a schema for the item model
//this model inherits from the mongoose.Schema
var itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please enter a name'
    },
    type: {
        type: String
    },
    department: {
        type: String,
        required: "Please choose a department"
    }
});

// make the itemSchema class public, under the name Item
module.exports = mongoose.model('Item', itemSchema);