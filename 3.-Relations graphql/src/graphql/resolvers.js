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
        },
       
        productos(){
            return productos;
        },
        provedores(){
            return proovedores;
        }
    },
  
    Provedores:{
        productos: ( parent ) =>{
            return productos.filter( m =>{
                return m.provedores === parent.id;
            });
        }
}
    
}