const axios = require('axios')
const AWS = require('aws-sdk')

module.exports = async (imageURL) => {
    const { data } = await downloadImage(imageURL)
    const labels = await imageRecognition(data)
    const mostRelevantLabels = getMostRelevant(labels)
    const parsedTextResult = parseTextResult(mostRelevantLabels)
    return parsedTextResult.join('\n')
}

const downloadImage = (imageURL) => {
    return axios.get(
        imageURL,
        {
            responseType: 'arraybuffer'
        }
    )
}

const imageRecognition = (data) => {
    var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});
    return rekognition.detectLabels({
        Image: {
            Bytes: data
        }
    }).promise()
}

const getMostRelevant = (labels) => {
    return labels.Labels.slice(0, 3).map(item => ({
        name: item.Name,
        confidence: item.Confidence.toFixed(2)
    }))
}

const parseTextResult = (labels) => {
    return labels.map(item => {
        return `This image has ${item.confidence} chance to be an ${item.name.toLowerCase()}`
    })
}