class ProductManager{
  constructor(){
    this.product = [];
  }
  static correlativoId = 0;
   addProduct = (id,title, description, price, thumbnail, code, stock) => {
    if(
      title == undefined ||
      description == undefined ||
      price == undefined ||
      thumbnail == undefined ||
      code == undefined ||
      stock == undefined
    ){
        throw new Error ("Todos los Campos deben estar completos!")
    }

    let codeExists = this.product.some((dato) => dato.code == code);

    if (codeExists) {
      throw new Error("El codigo ya existe por favor verifique");
    }
    else{
      ProductManager.correlativoId++;
      const newProduct = {
      id: ProductManager.correlativoId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    }
    this.product.push(newProduct)}
    
  }
  getProduct = () => {
    console.log(this.product)
  }
  getProductById(id) {
    let product = this.product.find((dato) => dato.id === id);

    if (product !== undefined) {
      return product;
    } else {
      return "El producto no existe,verifique el ID";
    }
  }

}

let zanahoria = new ProductManager()
zanahoria.addProduct(
  0,
  "Zanahoria",
  "Verdula para ensaladas",
  200,
  "sin imagen",
  "777329100",
  146
)
zanahoria.getProduct()