import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: () => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
  < button 
    className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    onClick={() => addItem()}
  >
    <h3>{item.name}</h3>
    <p className="font-black">US${item.price}</p>
  </button>
      
      
   
  )
}
