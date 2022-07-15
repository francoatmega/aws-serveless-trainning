mkdir -p logs

# Create AWS role
aws iam create-role \
   --role-name role \
   --assume-role-policy-document file://policies.json \
   | tee logs/role.log

# Zip content
zip function.zip index.js

# Create function and upload function
aws lambda create-function \
    --function-name hello-cli \
    --zip fileb://function.zip \
    --handler index.handler \
    --runtime nodejs16.x \
    --role arn:aws:iam::236821216822:role/role \
    | tee logs/lambda-create.log

# Call lambda function
aws lambda invoke \
    --function-name hello-cli \
    --log-type Tail \
    | tee logs/lambda-execution.log

# Update lambda function
aws lambda update-function-code \
    --zip fileb://function.zip \
    --function-name hello-cli \
    --publish \
    | tee logs/update-lambda.log

# Delete lambda function
aws lambda delete-function \
    --function-name hello-cli

# Delete role
aws iam delete-role \
    --role-name role