const envVar = require('env-var')

envVar.get('ENVIROMENT').required().asEnum(['local', 'development']),
envVar.get('LOCALSTACK_URL').asString(),
envVar.get('BUCKET_NAME').required().asString(),
envVar.get('QUEUE_NAME').required().asString()