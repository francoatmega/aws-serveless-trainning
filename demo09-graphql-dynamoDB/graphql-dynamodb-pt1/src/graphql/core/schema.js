  
  const typeDefition = `
    type Hero {
      id: String
      name: String
      skillId: String
    }

    type Skill {
      id: String
      name: String
      value: Int
    }

    type Query {
        getSkill(
          id: String
          name: String
          value: Int
        ): [Skill],
        getHero(
          id: String
          name: String
        ): [Hero] 
    }

    type Mutation {
        createSkill(
          name: String!,
          value: Int!
        ): String,
        createHero(
          name: String!,
          skillId: String!
        ): String
    }
  `

  module.exports = typeDefition
