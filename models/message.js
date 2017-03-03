/**
 * Created by Blagojce on 27.12.2016.
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var User=require('../models/user');

var schema=new Schema({
    content : {type: String, required: true},
    user : {type:Schema.Types.ObjectId, ref: 'User'},
});

//Sekogas koga e izbrisana nekoja poraka, istata se brisi i od listata na poraki koi gi kreiral korisnikot
schema.post('remove', function (message) {
   User.findById(message.user, function (err, user) {
      user.messages.pull(message);
      user.save();
   });
});

module.exports=mongoose.model('Message', schema);