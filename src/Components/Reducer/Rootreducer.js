            //       state   ,  action
const Rootreducer = (cart = [], action)=>{
    if(action.type == "addtocart"){
       let tempCart =  cart.filter((items)=> items.id === action.payload.id);
       if(tempCart < 1){
            return [...cart, action.payload]
       }else{
            return cart;
       }
    }

    if(action.type == 'removefromcart'){
        return cart.filter((items)=> items.id !== action.payload.id);
    }


    if(action.type == "INCREMENT"){
      let tempIncrement =  cart.map((items)=>{
            if(items.id === action.payload.id){
                return { ...items, quantity: items.quantity + 1}
            }
            return items;
        })

        return tempIncrement;
    }

    if(action.type == "DECREMENT"){
      let tempIncrement =  cart.map((items)=>{
            if(items.id === action.payload.id){
                return { ...items, quantity: items.quantity - 1}
            }
            return items;
        })

        return tempIncrement;
    }
    return cart;
}

export default Rootreducer;