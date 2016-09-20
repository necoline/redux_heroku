'use strict'; //allows use of let and const

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let User = new Schema({
  username: { type : String, unique : true, required : true, dropDups: true }, //method to remove duplicated items
  password: { type : String },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model( 'User', User );
