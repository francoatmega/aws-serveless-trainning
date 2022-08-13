const envVar = require('env-var')

const settings = {
    NODE_ENV: envVar.get('NODE_ENV').required().asEnum(['LOCAL', 'DEVELOPMENT', 'HOMOLOG', 'PRODUCTION']),
    BASE_URL: envVar.get('BASE_URL').required().asUrlString(),
    TABLE_NAME: envVar.get('TABLE_NAME').required().asString(),
    WRITE_CAPACITY: envVar.get('WRITE_CAPACITY').required().asInt(),
    READ_CAPATICY: envVar.get('READ_CAPATICY').required().asInt()
}

module.exports = settings