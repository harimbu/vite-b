import { db } from "../conf/firebase";
import { MdNoteAlt, MdDelete} from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Note({note}) {
  const navigate = useNavigate()
  
  async function removeNote() {
    if(confirm('정말 삭제하시겠습니까?')) {
      await deleteDoc(doc(db, "notes", note.id));
    }
  }

  function editTodo() {
    navigate("/edit", { state: note });
  }

  return (
    <li className="note">
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      <div className="note_bottom">
        <div className="date">{note.date?.toDate().toLocaleString()}</div>
        <div className="btns">
            <MdNoteAlt onClick={editTodo} />
            <MdDelete onClick={removeNote} />
        </div>
      </div>
    </li>
  )
  
}