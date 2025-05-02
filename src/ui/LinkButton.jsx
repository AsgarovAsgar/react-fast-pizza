import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

LinkButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
}

export default function LinkButton({ to, children }) {
  const navigate = useNavigate()

  const className = 'text-sm text-blue-500 hover:text-blue-600'

  if (to === '-1') {
    return (
      <button type="button" className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    )
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}
