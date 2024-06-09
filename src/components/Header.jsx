import { useState } from "react";
import { MdInfo  } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  const [modal, setModal] = useState(false)
  return (
    <div className="header">
      <Link to={'/'}>
        <h1>🧶🎨💋</h1>
      </Link>
      <MdInfo onClick={()=>setModal(!modal)} />

      {modal && (
          <div className="modal">
            <div className="info">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non veritatis quam doloremque quisquam, dignissimos quod cupiditate molestiae vero iure iste labore atque. Similique, aliquid quidem ullam culpa est minus a nisi ab quo modi facilis blanditiis maxime reprehenderit eos perspiciatis quae quam beatae! A commodi dolor voluptatem at nesciunt!</p>
              <button onClick={()=>setModal(!modal)}>확인</button>
            </div>
          </div>
        )
      }
    </div>
  )
}