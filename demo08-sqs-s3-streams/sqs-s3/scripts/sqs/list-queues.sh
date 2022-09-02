QUEUE_NAME=$1

awslocal s3api create-bucket --bucket $QUEUE_NAME
awslocal s3 ls