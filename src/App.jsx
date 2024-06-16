import { db } from './conf/firebase'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Notes from './components/Notes'
import Write from './page/Write'
import Edit from './page/Edit'

export default function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'notes'), orderBy('date', 'desc'))
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const notes = []
      querySnapshot.forEach(doc => {
        notes.push(doc.data())
      })

      setNotes(notes)
    })

    return () => unsubscribe
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Notes notes={notes} />} />
        <Route path='/write' element={<Write />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}
