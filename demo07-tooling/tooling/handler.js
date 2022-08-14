'use strict';

const AWS = require('aws-sdk')

const s3Config = {
  endpoint: new AWS.Endpoint('http://localhost:4566')
}

const s3 = new AWS.S3(s3Config)

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
