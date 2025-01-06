import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: { type: String, required: true, minlength: 6 },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

export default User;