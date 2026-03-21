import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"  //tipado

export default function useOder() {
    //states
    const [order, setOrde] = useState<OrderItem[]>([])
    
    //furnciones
    //--para agregar item
    const addItem = (item : MenuItem) =>{
        const itemExist = order.find(orderItem => orderItem.id === item.id)
       if(itemExist){
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1}: 
                orderItem)
                setOrde(updateOrder)
       }else{
            const newItem = {...item, quantity: 1}
            setOrde ([...order, newItem])
       }
        
    }
    //--para eliminar item
    const removeItem = (id: MenuItem['id']) => {
        setOrde(order.filter(item =>item.id !== id))
    }

    return{
        order,
        addItem,
        removeItem
    }
  
}
