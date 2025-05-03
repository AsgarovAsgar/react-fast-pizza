import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

export default function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch()

  const handleIncrement = () => dispatch(increaseItemQuantity(id))
  const handleDecrement = () => dispatch(decreaseItemQuantity(id))

  return (
    <div className="flex items-center gap-2 md:gap-2">
      <Button type="round" onClick={handleDecrement}>
        -
      </Button>

      <span className="text-sm font-medium">{currentQuantity}</span>

      <Button type="round" onClick={handleIncrement}>
        +
      </Button>
    </div>
  )
}
