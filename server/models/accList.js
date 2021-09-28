const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  openid: String,
  createAt: Number,
  recordYear: Number,
  recordMonth: Number,
  recordDay: Number,
  photoUrl: String,
  Name:String,
  phoneNum:String,
  city: String,
  date:String,
  province: String,
  country: String,
  IDcard:String,
  Sex:Number,
  remark: String,
  time:String,
  reason:String,
  checked:Boolean,
  isPassed:Boolean,
  failedReason:String,
  interviewees:String,
  enddate:String,
  endtime:String
});

  

mongoose.model('AccList', UserSchema);