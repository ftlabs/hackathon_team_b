"use strict";
var AWS = require("aws-sdk");
var comprehend = new AWS.Comprehend();

module.exports.main = async event => {
  var params = {
    LanguageCode: "en",
    Text:
      "words words words hello world greggs Boris Johnson. Going to the park. I like Pizza."
  };

  const keyPhrases = await comprehend.detectKeyPhrases(params).promise();
  const entities = await comprehend.detectEntities(params).promise();

  console.log(entities);
  return {
    statusCode: 200,
    body: JSON.stringify({ keyPhrases, entities })
  };
};
