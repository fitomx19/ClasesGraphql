import  mongoose  from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/mascotasdb',{
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log("Base de datos funcionando =>")
    } catch (error) {
        console.log(error)
        console.log("No conecta ala base de datos :c")
        
    }
}