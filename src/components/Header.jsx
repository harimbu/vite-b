import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [user, setUser] = useState(null)

  return (
    <div className='header'>
      <Link to={'/'}>
        <h1>
          🎨 <span>note</span>
        </h1>
      </Link>

      <Link to={'/login'}>
        <button>로그인</button>
      </Link>
    </div>
  )
}
