import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchOrder() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return
    navigate(`/order/${query}`)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search order #"
        className="w-28 rounded-full px-4 py-2 text-sm text-yellow-400 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  )
}
