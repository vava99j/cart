async function addItem(userCart , item) {
    userCart.push(item)
}

async function deleteItem(userCart , name ) {
    const index = userCart.findIndex((item)=> item.name === name)

    if(index !== -1){
        userCart.splice(index , 1)
    }}

async function removeItem(userCart , item) {
   const indexFound = userCart.findIndex((p) => p.name === item.name)

   console.log(indexFound)

    if(indexFound < 0){
        console.log("item nao encontrado")
        return
    }
    
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
    }
    else{
        userCart.splice(indexFound , 1)
    }

}

async function calcuteTotal(userCart) {
    const result = userCart.reduce((total , item)=> total + item.subtotal() , 0)
    console.log(`preço total: R$${result}`)
}



async function dysplayCart(userCart){
 console.log(`  🛒carrinho de compras🛒 `)
await userCart.forEach((item ,index) => {
      console.log
(`   
    item: ${item.name} 
    valor unidade: R$${item.price}
    ${item.quantity}x  
    subtotal: R$${item.subtotal()}
  
`)

});
 
}


export {addItem , deleteItem , removeItem ,
     calcuteTotal, dysplayCart }