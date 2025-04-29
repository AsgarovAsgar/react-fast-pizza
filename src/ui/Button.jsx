import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node
}

export default function Button({ disabled, to, children }) {
  const className =
    'md:py- inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-8'

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  )
}
