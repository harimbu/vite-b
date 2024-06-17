import { MdOutlineAdd } from 'react-icons/md'
import Note from './Note'
import { Link } from 'react-router-dom'

export default function Notes({ notes }) {
  return (
    <>
      <ul className='notes'>
        {notes.map(note => (
          <Note note={note} key={note.title} />
        ))}
      </ul>
      <div className='write_btn'>
        <Link to={'/write'}>
          <MdOutlineAdd />
        </Link>
      </div>
    </>
  )
}
