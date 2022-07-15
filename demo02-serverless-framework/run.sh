
# Installing serverless framework
npm i -g serverless

# Create a new serverless project
sls

# Deploy a serverless project
sls deploy

# Invoke an AWS lambda
sls invoke -f hello

# Invoke an function locally
sls invoke local -f hello

# Seeing functions logs
sls logs -f hello --tail