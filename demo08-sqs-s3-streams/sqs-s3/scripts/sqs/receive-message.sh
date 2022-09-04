QUEUE_URL=$1

echo 'Receiving message from... ' $QUEUE_URL

awslocal sqs receive-message --queue-url $QUEUE_URL