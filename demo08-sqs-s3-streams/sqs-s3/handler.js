'use strict';

const s3 = require('./src/AWSFactory')('S3')

module.exports.hello = async (event) => {
  const allBuckets = await s3.listBuckets().promise()
  if(allBuckets.Buckets.length === 0) {
    return {
      statusCode: 204
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(allBuckets, null, 2),
  };
};
