module.exports = async(ctx)=>{

  const {GSStatus} = require('@godspeedsystems/core');
  const {inputs, childLogger, datasources} = ctx;
  const prismaClient = datasources.mongo.client;

  try {

    inputs.body = inputs.data.body;
    childLogger.info('inputs: %o', inputs.body);
    const responseData = await prismaClient.Restaurant.create({
      data: inputs.body
    })
    return new GSStatus(true, 200, undefined, responseData, undefined);

  } catch (error) {

    return new GSStatus(false, 500, undefined, error, undefined);

  }
}