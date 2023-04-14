const { getList } = require('../controllers/movie');

module.exports = (router) => {
  router.get('/movies', getList);
};
