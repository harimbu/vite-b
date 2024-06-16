import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useState } from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Header() {
  const [user, setUser] = useState(null)

  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  function login() {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        const uesrData = {
          email: user.email,
          photo: user.photoURL,
        }
        console.log(user)
        setUser(uesrData)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }

  function logout() {
    signOut(auth).then(() => {
      setUser(null)
    })
  }

  return (
    <div className='header'>
      <Link to={'/'}>
        <h1>🧶🎨💋</h1>
      </Link>
      {user ? (
        <div className='user'>
          <div className='photo'>
            <img src={user.photo} alt='' />
          </div>
          <div className='user_box'>
            <p>{user.email}</p>
            <span onClick={logout}>로그아웃</span>
          </div>
        </div>
      ) : (
        <AiFillGoogleCircle onClick={login} />
      )}
    </div>
  )
}
