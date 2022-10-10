const { ExpressHandlebars } = require('express-handlebars');

module.exports = {
    format_date: (date) => {
      return date.toLocaleTimeString();
    },
    // format_date: (date) => {
    //   return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
    //     new Date(date).getFullYear() + 5
    //   }`;
    // },
  };
  
  // module.exports = helpers;