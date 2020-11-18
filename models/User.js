const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
          }
      ],
    
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
          }
      ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
  
  );

  // get total count of comments and replies on retrieval

  UserSchema.virtual('totalFriends').get(function() {
    return this.comments.length;
  });



  // create the Pizza model using the PizzaSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;