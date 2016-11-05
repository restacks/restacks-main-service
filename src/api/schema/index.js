import Repository from './repository';


const Query = `
    type Query { 
        getRepositoriesByPage(
            page: Int
            pageSize: Int
        ): Repositories

        getRepositoryById(
            id: Int!
        ): Repository
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

const Common = `
    type Paging {
        page: Int
        pageSize: Int
    }
`

export default [Schema, Query, Mutation, Common, Repository];