import { useState } from "react"
import type { OrderItem } from "../types"  //tipado

export default function useOder() {

    //states
    const [order, setOrde] = useState([])
    
    //furnciones
    const addItem = () =>{
        console.log('agregando...')
    }

    return{
        addItem
    }
  
}
