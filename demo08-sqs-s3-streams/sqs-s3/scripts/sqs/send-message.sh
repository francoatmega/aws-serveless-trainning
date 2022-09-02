QUEUE_URL=$1

echo 'Sending message... to ' $QUEUE_URL

awslocal sqs send-message --queue-url $QUEUE_URL --message-body 'Message'
awslocal sqs receive-message --queue-url $QUEUE_URL