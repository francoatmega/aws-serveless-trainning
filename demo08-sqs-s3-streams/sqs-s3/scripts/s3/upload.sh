FILE_PATH=$1
BUCKET_NAME=$2

awslocal s3 cp $FILE_PATH s3://$BUCKET_NAME