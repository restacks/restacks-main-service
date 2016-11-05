import Repository from './repository';


const Query = `
    type Query { 
        repositories: [Repository]
    }
`

const Mutation = `
    type Mutation {
        createRepository (
            name: String!
        ): Repository
    }
`

const Schema = `
    schema {
        query: Query
        mutation: Mutation
    }
`

export default [Schema, Repository, Query, Mutation];