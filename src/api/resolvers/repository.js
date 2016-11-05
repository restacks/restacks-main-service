//@flow

declare type pagination = {page: number, pageSize: number}

const RepositoryResolver = {

    Query: {
        getRepositoriesByPage: async (_: any, args: {page: number, pageSize: number} ) => {
            return args;
        },
        getRepositoryById: async(_: any, { id } : Object, { Repository }: Object) => {
            return await Repository.getById(id)
        }
    },

    Mutation: {
        createRepository: async(_: any, args : any, { Repository }: Object) => {
            const repo = new Repository(args);
            await repo.save();
            return repo.toJSON();
        }
    },

    Repository: {
        /** 
         * Calculate score base on 
         * very complexity equation
         */
        score(repository: any) {
            return repository.star + repository.watch
        }
    },

    Repositories: {
        async data({ page, pageSize }: any, args: any, { Repository }: any) {
            return await Repository
                .queryAtPageAmount(page, pageSize);
        },
        paging({ page, pageSize }: any) {
            return {
                page,
                pageSize,

            }
        }
    }
}



export default RepositoryResolver;