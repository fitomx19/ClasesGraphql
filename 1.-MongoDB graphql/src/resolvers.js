import { task } from "./sample";
import Mascota from './Models/Mascotas'
import Mascotas from "./Models/Mascotas";

export const resolvers = {
    Query:{
        hello: () => {
            return 'Hola mundo con GraphQL'
        },
        tasks() {
            return task
        },
        search(root,args){
            var result = task.filter(v => {
                return v._id == args._id
            });
            return result;
        },
        async QueryMascotas(){
            return await Mascotas.find(); //nos arroje todos
        }
    },
    Mutation:{
        createTask(_, {input}){
            //console.log(input)
            input._id = task.length
            task.push(input)
            console.log(task)
            return input;

        },
        async createMascotas(_, {input}){
            const nuevaMascota = Mascota(input)
            await nuevaMascota.save();
            console.log(nuevaMascota)
            return nuevaMascota
        }
    }
}