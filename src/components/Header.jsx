import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdPerson } from 'react-icons/md'

export default function Header() {
  const [user, setUser] = useState(null)

  return (
    <div className='header'>
      <Link to={'/'}>
        <h1>
          🎨 <span>note</span>
        </h1>
      </Link>

      <Link to={'/login'} className='login_btn'>
        <MdPerson />
      </Link>
    </div>
  )
}
