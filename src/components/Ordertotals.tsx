import { useMemo } from "react"
import type{ OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order : OrderItem[]
}

export default function Ordertotals({order} : OrderTotalsProps) {

    const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0),[order])
  return (
    <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina:</h2>
                <p className=""> Subtotal a pagar: {''}
                    <span className="font-bold">{ formatCurrency(subTotalAmount)}</span>
                </p>
                <p className=""> Propina: {''}
                    <span className="font-bold">$0</span>
                </p>
                <p className=""> Total a pagar: {''}
                    <span className="font-bold">$0</span>
                </p>
            </div>

        <button className=""></button>
    </>
    
  )
}
