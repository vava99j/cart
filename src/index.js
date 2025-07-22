import createItem from "./services/item.js"   
import * as cartService from "./services/cart.js"
const myCart = []
const myWishList = []
//cria item
const item1 = await createItem("pao", 2.50, 2);
const item2 = await createItem("leite", 3.50, 3);


//add item
await cartService.addItem(myCart , item1)
await cartService.addItem(myCart , item2)
// deletar item \\
//await cartService.deleteItem(myCart , item2.name)
//remover item
//await cartService.removeItem(myCart , item1)



//dysplay
await cartService.dysplayCart(myCart)
//total
await cartService.calcuteTotal(myCart)