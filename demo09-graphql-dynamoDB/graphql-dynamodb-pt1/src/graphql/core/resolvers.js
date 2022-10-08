const resolvers = {
    Query: {
        async getSkill(root, args, context, info) {
            return 'getSkill'
        },
        async getHero(root, args, context, info) {
            return 'getHero'
        }
    },
    Mutation: {
        async createSkill(root, args, context, info) {
            return 'createSkill'
        },
        async createHero(root, args, context, info) {
            return 'createHero'
        }
    }
}

module.exports = resolvers