import { useRef } from 'react'
import { db } from '../conf/firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Write() {
  const titleRef = useRef()
  const textRef = useRef()
  const navigate = useNavigate()
  const note = useLocation().state

  async function editNote(e) {
    e.preventDefault()

    const noteRef = doc(db, 'notes', note.id)
    const data = {
      title: titleRef.current.value,
      text: textRef.current.value,
    }
    await updateDoc(noteRef, data)
    navigate('/')
  }

  return (
    <div className='container'>
      <h2>수정</h2>
      <div className='inputbox'>
        <input type='text' placeholder='제목' ref={titleRef} defaultValue={note.title} />
        <textarea rows='10' placeholder='내용' ref={textRef} defaultValue={note.text}></textarea>
      </div>

      <div className='btns'>
        <button type='button' onClick={() => navigate('/')}>
          취소
        </button>
        <button type='button' onClick={editNote}>
          확인
        </button>
      </div>
    </div>
  )
}
