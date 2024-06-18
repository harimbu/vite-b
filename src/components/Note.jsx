import { db } from '../conf/firebase'
import { MdNoteAlt, MdDelete } from 'react-icons/md'
import { doc, deleteDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../atom/userAtom'

export default function Note({ note }) {
  const email = useRecoilValue(userAtom)
  const navigate = useNavigate()

  async function removeNote() {
    if (confirm('정말 삭제하시겠습니까?')) {
      await deleteDoc(doc(db, 'notes', note.id))
    }
  }

  function editTodo() {
    navigate('/edit', { state: note })
  }

  return (
    <li className='note'>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      <div className='note_bottom'>
        <div className='date'>{note.date?.toDate().toLocaleString()}</div>
        {email && (
          <div className='btns'>
            <span onClick={editTodo}>edit</span>
            <span onClick={removeNote}>delete</span>
          </div>
        )}
      </div>
    </li>
  )
}
