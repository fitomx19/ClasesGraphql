import { task } from "./sample";

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

        }
    }
}