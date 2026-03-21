import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipForm from "./components/TipForm"
import { menuItems} from "./data/db"
import useOrder from "./hooks/useOrder"




function App() {
//hooks
const { order, addItem, removeItem, tip, setTip} = useOrder()

  return (
    <>
      <header className="bg-teal-800 py-5">
       <h1 className="text-center text-4xl text-amber-50 font-black">Calculadora de propina y consumo</h1>
       <p className="text-2xl font-serif  pt-1.5 text-center font-bold">Hazlo facil</p>
      </header>
     
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black"> Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item =>(
                  <MenuItem
                      key={item.id}
                      item={item}
                      addItem={addItem}
                    />
                ))}
          </div>
          
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
         <OrderContents
          order = {order}
          removeItem={removeItem}
         />

        <TipForm
        setTip={setTip}
        />

        <OrderTotals
          order={order}
          tip={tip}
        />
        </div>
      </main>
    </>
  )
}

export default App
