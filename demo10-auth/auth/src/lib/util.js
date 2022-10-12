const ROLES = {
    'heroes:list': 'private'
}

const buildIAMPolicy = (userId, effect, resource, context) => {
    const policy = {
        principalId: userId,
        policyDocument: {
            Statement: [{
                Action: 'execute-api:Invoke',
                Effect: effect,
                Resource: resource
            }]
        },
        context
    }
    console.log('policy', policy)
    return policy
}

const isAllowedScope = (scope, methodArn) => {
    return scope.find(scope => methodArn.indexOf(ROLES[scope] > -1))
}

module.exports = {
    buildIAMPolicy,
    isAllowedScope
}