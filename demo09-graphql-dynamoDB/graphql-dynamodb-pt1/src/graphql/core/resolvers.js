const resolvers = {
    Query: {
        async getSkill(root, args, context, info) {
            return context.Skill.findAll(args)
        },
        async getHero(root, args, context, info) {
            return context.Hero.findAll(args)
        }
    },
    Mutation: {
        async createSkill(root, args, context, info) {
            const { id } = await context.Skill.create(args)
            return id
        },
        async createHero(root, args, context, info) {
            const { id } = await context.Hero.create(args)
            return id
        }
    }
}

module.exports = resolvers