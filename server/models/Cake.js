import mongoose from 'mongoose';

const Cake = mongoose.model('Cake', {
  name: String,
  image: String
});

export default Cake;