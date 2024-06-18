import { auth } from '../conf/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { MdOutlineWarning } from 'react-icons/md'
import { useSetRecoilState } from 'recoil'
import { userAtom } from '../atom/userAtom'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)
  const setUserEmail = useSetRecoilState(userAtom)
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault()
    setErrorMsg(null)
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user
        setUserEmail(user.email)
        navigate('/')
      })
      .catch(error => {
        console.log(`${error.code} : ${error.message}`)
        setErrorMsg(error.message)
      })
  }

  return (
    <div className='container'>
      <h2>로그인</h2>
      <div className='loginbox'>
        <form onSubmit={login}>
          <input type='text' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit'>로그인</button>
        </form>
        {errorMsg && (
          <div className='error_msg'>
            <MdOutlineWarning /> <span>아이디와 비번을 확인하세요!</span>
          </div>
        )}
      </div>
    </div>
  )
}
