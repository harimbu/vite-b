import { useState } from "react";
import { MdPerson , MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { auth } from "../conf/firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const [email, setEmail] = useState(null)
  const [modal, setModal] = useState(false)

  function handleModal() {
    setModal(!modal)
  }

  function handleLogin() {

  }

  function logout() {
    signOut(auth).then(() => {
      setEmail(null)
    })
  }

  return (
    <div className="header">
      <Link to={'/'}><h1>🧶🎨💋</h1></Link>
      { email
        ? 
        <div className="email">{email}<MdLogout onClick={logout} /></div>
        : 
        <MdPerson onClick={handleModal} />
      }

      { modal && 
        (
          <div className="modal">
            <form onSubmit={handleLogin}>
              <h2>로그인</h2>
              <input type="text" placeholder="이메일" />
              <input type="text" placeholder="비빌번호" />
              <div className="btns">
                <button type="button" onClick={handleModal}>취소</button>
                <button type="submit">로그인</button>
              </div>
            </form>
          </div>
        )
      }
    </div>
  )
}