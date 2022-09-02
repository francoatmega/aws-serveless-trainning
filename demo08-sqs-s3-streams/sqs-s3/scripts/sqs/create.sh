QUEUE_NAME=$1

awslocal sqs create-queue --queue-name $QUEUE_NAME
awslocal sqs list-queues