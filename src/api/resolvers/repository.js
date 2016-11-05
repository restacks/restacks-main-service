import Repository from './../models/repository';

const resolvers = {
    Query: {
       repositories: async () => {
           const result = await Repository.fetchAll();
           return result;
       } 
    },
    Repository: {
       
    }
}


export default resolvers;