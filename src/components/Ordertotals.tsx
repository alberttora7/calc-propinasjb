import { useMemo } from "react"
import type{ OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order : OrderItem[],
    tip:number,
    placeOrder: () => void;
    
}

export default function Ordertotals({order, tip, placeOrder} : OrderTotalsProps) {

    const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0),[order])
    const tipAumount = useMemo(() => subTotalAmount * tip, [tip, order])
    const totalAmount = useMemo(()=> subTotalAmount + tipAumount, [tip, order])
  return (
    <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina:</h2>
                <p className=""> Subtotal a pagar: {''}
                    <span className="font-bold">{ formatCurrency(subTotalAmount)}</span>
                </p>
                <p className=""> Propina: {''}
                    <span className="font-bold">{ formatCurrency(tipAumount)}</span>
                </p>
                <p className=""> Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

        <button className=" w-full bg-emerald-950 p-3 uppercase text-white font-bold mt-10 hover:bg-emerald-700  "
        onClick={placeOrder}
        >
            Guardar Orden

        </button>
    </>
    
  )
}
