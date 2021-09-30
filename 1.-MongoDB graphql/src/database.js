import  mongoose  from "mongoose";
export async function connect(){
    try {
        await mongoose.connect("mongodb+srv://root:tool@cluster0.kmxmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser: true, useUnifiedTopology: true 
        })
        console.log("Base de datos funcionando =>")
        console.log(process.env.DB_URL)
    } catch (error) {
        console.log(error)
        console.log("No conecta ala base de datos :c")
        
    }
}