//NEWS API ---> - >
require('dotenv').config();
var request = require('request');
var bluebird = require('Promise');

//establish date range for news lookup (one week ago)
  const getBeginDate = (days) => {
  const today = new Date();
  const beginDate = new Date(today.setDate(today.getDate()-days));
  const month = beginDate.getMonth().toString().length === 1 
  ? '0' + beginDate.getMonth().toString()
  : beginDate.getMonth().toString()
  
  const day = beginDate.getDay().toString().length === 1
  ? '0' + beginDate.getDay().toString()
  : beginDate.getDay().toString();

  console.log(month, day);
  console.log('begin date,', beginDate.getFullYear().toString() + month + day);
  //need format date in YYYYMMDD string
  return beginDate.getFullYear().toString() + month + day;
};

function getNewsArticlesByKeyword(keyword) {
  const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  return new Promise(function(resolve, reject) {
    request.get({
      url: url,
      qs: {
        'api-key': process.env.NYT_API_KEY,
        'q': keyword,
        'begin_date': getBeginDate(7)
      },
    }, function (err, response, body) {
        if (err) reject(err);
        var articles = JSON.parse(body).response.docs.map(article => {
          return { 'web_url': article.web_url, headline: article.headline.main }
        });
      // console.log('articles ------->', articles);
        resolve(articles);
      }
    );
  });
}

module.exports = getNewsArticlesByKeyword;
