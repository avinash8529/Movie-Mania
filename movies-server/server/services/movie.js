const axios = require('axios');

const getList = async () => {
  const { data: { results } } = await axios.get('https://api.themoviedb.org/4/list/1?page=1&api_key=10b763150af9d56527cde04729884086');

  if (results.length) {
    return { doc: results };
  }

  return { errors: [ { name: 'key-name', messages: 'Something went wrong!' } ] };
};

module.exports = {
  getList,
};
