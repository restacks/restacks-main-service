import RepositoryResolvers from './repository';
import { merge } from 'lodash';


const rootResolvers = merge(RepositoryResolvers, {
    Paging: () => {
        
    }
})

export default rootResolvers;