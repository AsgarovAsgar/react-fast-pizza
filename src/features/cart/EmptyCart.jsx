import LinkButton from '../../ui/LinkButton'

export default function EmptyCart() {
  return (
    <div className="mt-7 px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="font-semibold">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  )
}
