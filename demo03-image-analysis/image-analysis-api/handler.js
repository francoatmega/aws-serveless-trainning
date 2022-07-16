"use strict";
const imageAnalyse = require('./imageHandler')

module.exports.analyse = async (event) => {
  try { 

    const imageURL = event?.queryStringParameters?.imageURL

    if(!imageURL) {
      return {
        statusCode: 200,
        body: 'No image analysed',
      };
    }
  
    const analysedData = await imageAnalyse(imageURL)

    return {
      statusCode: 200,
      body: analysedData
    }

  } catch (err) {
    console.log('*** Error ***', err)
    return {
      statusCode: 500,
      body: 'Internal server error'
    }
  }
}
