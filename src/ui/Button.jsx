import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

Button.propTypes = {
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'small']),
  children: PropTypes.node
}

export default function Button({ disabled, to, type, children }) {
  const base =
    'inline-block rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'

  const styles = {
    primary: `${base} px-4 py-3 md:px-6 md:py-8`,
    small: `${base} px-4 py-2 md:py-2.5 md:px-5 text-xs`,
    secondary: `inline-block text-sm border-2 border-stone-300 rounded-full bg-transparent font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5`
  }

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    )
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}
