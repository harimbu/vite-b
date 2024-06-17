export default function Login() {
  return (
    <div className='container'>
      <h2>로그인</h2>
      <div className='loginbox'>
        <input type='text' placeholder='email' />
        <input type='text' placeholder='password' />
        <button>로그인</button>
        <p className='error_msg'>아이디와 비번을 확인하세요!</p>
      </div>
    </div>
  )
}
