require('./model');

const mongoose = require('mongoose');
const Users = mongoose.model('Users');

module.exports = {
  async getAll() {
    return await Users.find({});
  },
  async addNew({ name }) {
    return await new Users({ name }).save();
  }
};
