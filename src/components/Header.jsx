import { auth } from '../conf/firebase'
import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { MdPerson } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { userAtom } from '../atom/userAtom'

export default function Header() {
  const [email, setEmail] = useRecoilState(userAtom)
  const navigate = useNavigate()

  function logout() {
    signOut(auth).then(() => {
      navigate('/')
      setEmail(null)
    })
  }

  return (
    <div className='header'>
      <Link to={'/'}>
        <h1>
          🎨 <span>note</span>
        </h1>
      </Link>

      {email ? (
        <div className='login_btn'>
          <span>{email}</span>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div className='login_btn'>
          <Link to={'/login'}>
            <button>login</button>
          </Link>
        </div>
      )}
    </div>
  )
}
