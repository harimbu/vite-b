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

      <button className='login_btn'>로그인</button>
    </div>
  )
}
