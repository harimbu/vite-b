import { useRef } from 'react'
import { db } from '../conf/firebase'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Write() {
  const titleRef = useRef()
  const textRef = useRef()
  const navigate = useNavigate()

  async function writeNote(e) {
    e.preventDefault()

    const noteRef = doc(collection(db, 'notes'))
    const data = {
      id: noteRef.id,
      title: titleRef.current.value,
      text: textRef.current.value,
      date: serverTimestamp(),
    }
    await setDoc(noteRef, data)
    navigate('/')
  }

  return (
    <div className='container'>
      <h2>쓰기</h2>
      <div className='inputbox'>
        <input type='text' placeholder='제목' ref={titleRef} />
        <textarea rows='10' placeholder='내용' ref={textRef}></textarea>
      </div>

      <div className='btns'>
        <button type='button' onClick={() => navigate('/')}>
          취소
        </button>
        <button type='button' onClick={writeNote}>
          확인
        </button>
      </div>
    </div>
  )
}
