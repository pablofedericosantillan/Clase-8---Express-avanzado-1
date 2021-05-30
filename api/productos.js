class Productos {
    constructor(){
        this.item = [];
        }
    listarTodos(){
            try{
                return this.item.length!=0 ? this.item : {error : 'no hay productos cargados'}
                
               }catch(err){
                console.log('Hubo un error en la funcion leer todo'); 
               }
    }
    BuscarId(id){
        try{
            return id <= this.item.length ? this.item[id-1] : {error: "producto no encontrado'" }
            
           }catch(err){
            console.log('Hubo un error en la funcion Buscar por ID'); 
           }
    }
    guardar(newProduct){
        try{
            newProduct.id=this.item.length+1;
            this.item.push(newProduct);
            return this.item;

           }catch(err){
            console.log('Hubo un error en la funcion guardar'); 
           }
    }
 }

// exporto una instancia de la clase
module.exports = new Productos();
