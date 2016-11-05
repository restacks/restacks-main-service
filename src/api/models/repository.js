import { bookshelf } from '../connection';


export default bookshelf.Model.extend({
    tableName: 'repositories',
    /** 
     * id: number
     * name: string
     * start: number
     * fork: number
     * pull_request: number
     * watch: number
     */
});