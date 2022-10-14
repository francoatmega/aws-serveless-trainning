'use strict';
const aws = require('aws-sdk');
const apiGateway = new aws.APIGateway();

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  }; 
};

module.exports.getUsage = async (event) => {
  const usage = await apiGateway.getUsagePlans().promise()
  return {
    statusCode: 200,
    body: JSON.stringify(
      usage,
      null,
      2
    ),
  };
};

module.exports.getUsagePlans = async (event) => {
  const {
    from,
    to,
    planId,
    apiKey
  } = event.queryStringParameters
  const usage = await apiGateway.getUsage({
    startDate: from,
    endDate: to,
    usagePlanId: planId,
    keyId: apiKey
  }).promise()
  return {
    statusCode: 200,
    body: JSON.stringify(
      usage,
      null,
      2
    ),
  };
};

module.exports.createAPIKey = async (event) => {
  const {
    name,
    planId
  } = event.queryStringParameters
  const apiKey = await apiGateway.createApiKey({
    name: name,
    enabled: true
  }).promise();
  await apiGateway.createUsagePlanKey({
    keyId: apiKey.id,
    usagePlanId: planId,
    keyType: 'API_KEY'
  }).promise()
  return {
    statusCode: 200,
    body: JSON.stringify(
      apiKey,
      null,
      2
    ),
  };
};