class Product {
    constructor(n,p)

    {
        //constructor function to create new real life instances called as product
        //when we create an object this constructor is the first function that gets called
        
   this.name=n;
   this.price=p;


    }
    //memeber function
    displayProduct() {
             
    }
    buyProduct(){

    }
       
}
let iphone=new Product("iphone",10000)
let macbook=new Product("macbook",5000)

console.log(iphone,macbook);