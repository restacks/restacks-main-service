//@flow
import { bookshelf } from '../connection';



export default class Repository extends bookshelf.Model {
    /* ### Schema
     * 
     * - id: number
     * - name: string
     * - star: number
     * - fork: number
     * - pull_request: number
     * - watch: number
     */
    
    get tableName(): string {
        return 'repositories';
    }


    async getById(id: number) {
        const result = await this.query({
                where: { id }
            })
            .fetch();
        return result.toJSON();
    }

    async queryAtPageAmount(page: number, pageSize: number) {
        const query = await this.fetchPage({ page, pageSize });
        return query.toJSON();
    }
}


// export default bookshelf.Model.extend({
//     tableName: 'repositories',
//     /** 
//      *
//      * ### Schema
//      * 
//      * - id: number
//      * - name: string
//      * - start: number
//      * - fork: number
//      * - pull_request: number
//      * - watch: number
//      */
//     async getById(id: number) {
//         const result = await this.query({
//                 where: { id }
//             })
//             .fetch();
//         return result.toJSON();
//     },

//     async queryAtPageAmount(page: number, pageSize: number) {
//         const query = await this.fetchPage({ page, pageSize });
//         return query.toJSON();
//     }
// });