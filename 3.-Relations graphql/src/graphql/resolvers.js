import { productos } from '../data/productos';
import { proovedores } from '../data/proovedores';
import { tienda } from '../data/tienda';

export const resolvers = {
    Query: {
        ping(){
            return null;
        },
        tienda(){
            return tienda;
        }
    }
}