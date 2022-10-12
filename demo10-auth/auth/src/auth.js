const jwt = require('jsonwebtoken')
const db = require('../db/users.json')
JWT_SECRET = '12312321-302190-21940'

exports.login = async (event) => {
    try {
        const { username, password } = JSON.parse(event.body)

        const user = db.find(item => {
           return item.username === username && item.password === password
        })
    
        if(!user) {
            return {
                statusCode: 401,
                body: JSON.stringify({
                    'message': 'Nao autorizado'
                })
            }
        }
    
        const signedUser = {
             scopes: user.scopes,
             username: user.username
        }
    
        const token = await jwt.sign({
            user: signedUser
        }, JWT_SECRET, {
            expiresIn: '5m'
        })
    
        return {
            statusCode: 200,
            body: JSON.stringify({
                'token': token
            })
        }
    } catch (e) {
        console.log(e)
        return {
            statusCode: 500,
            body: JSON.stringify({
                'message': 'Ocorreu um erro'
            })
        }
    }
}