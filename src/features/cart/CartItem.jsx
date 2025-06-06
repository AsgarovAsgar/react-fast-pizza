import { useSelector } from 'react-redux'
import { formatCurrency } from '../../utils/helpers'
import DeleteItem from './DeleteItem'
import UpdateItemQuantity from './UpdateItemQuantity'
import { getCurrentQuantityById } from './cartSlice'

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))

  return (
    <li className="flex items-center justify-between py-3">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-4 sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem type="small" id={pizzaId} />
      </div>
    </li>
  )
}

export default CartItem
