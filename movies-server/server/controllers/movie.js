const { Movie: MovieService } = require('../services');

const getList = async (req, res) => {
  const { doc } = await MovieService.getList();

  return res.send(doc);
};

module.exports = { getList };
