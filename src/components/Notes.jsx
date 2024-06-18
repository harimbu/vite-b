import { MdOutlineAdd } from 'react-icons/md'
import Note from './Note'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../atom/userAtom'

export default function Notes({ notes }) {
  const userEmail = useRecoilValue(userAtom)
  return (
    <>
      <ul className='notes'>
        {notes.map(note => (
          <Note note={note} key={note.title} />
        ))}
      </ul>
      {userEmail && (
        <div className='write_btn'>
          <Link to={'/write'}>
            <MdOutlineAdd />
          </Link>
        </div>
      )}
    </>
  )
}
