const helpers = require('./helpers');

module.exports = {
	async getAll(req, res) {
		try {
      const users = await helpers.getAll({});

      return res.send({
        status: 'success',
        body: users && users.length ? users : []
      });
    } catch (error) {
      return res.status(400).send({
        status: 'failure'
      });
    }
  },
  async addNew(req, res) {
    try {
      await helpers.addNew(req.body);

      return res.send({
        status: 'success'
      });
    } catch (error) {
      return res.status(400).send({
        status: 'failure'
      });
    }
  }
};
