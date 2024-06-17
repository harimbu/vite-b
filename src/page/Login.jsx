import { auth } from '../conf/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user
        console.log(user.email)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  return (
    <div className='container'>
      <h2>로그인</h2>
      <div className='loginbox'>
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={login}>로그인</button>
        <p className='error_msg'>아이디와 비번을 확인하세요!</p>
      </div>
    </div>
  )
}
