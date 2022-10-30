import './App.css';
import { useEffect, useState } from 'react';
import { db } from './firebaseconfig';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { Button, Container, Form, Table } from 'react-bootstrap';

function App() {
  const [user, setUser] = useState([])
  const userCollection = collection(db, 'user')

  const [nama, setNama] = useState("")
  const [umur, setUmur] = useState(0)

  // console.log(nama);
  // console.log(alamat);

  const createUser = async () => {
    addDoc(userCollection, { nama: nama, umur: Number(umur) })
  }

  const updateUser = async (id, umur) => {
    const userDoc = doc(db, 'user', id)
    const newUmur = { umur: umur + 1 }
    await updateDoc(userDoc, newUmur)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'user', id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollection)
      setUser(data.docs.map((value) => ({ ...value.data(), id: value.id })))
    }

    getUser()
  })

  return (
    <div className="App">
      <Container>

        <Form className='mt-3'>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Masukkan Nama" onChange={(e) => { setNama(e.target.value) }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="number" placeholder="Masukkan Umur" onChange={(e) => { setUmur(e.target.value) }} />
          </Form.Group>
          <Button variant='primary' onClick={createUser}>Tambah data</Button>
        </Form>

        <Table striped bordered hover className='mt-3'>
          <thead>
            <tr>
              <th width='300px'>Nama</th>
              <th width='200px'>Umur</th>
              <th width='200px'>action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id}>
                <td>{user.nama}</td>
                <td>{user.umur}</td>
                <td>
                  <Button variant='warning' className='me-3' onClick={() => { updateUser(user.id, user.umur) }}>Tambah Umur</Button>

                  <Button variant='danger' onClick={() => { deleteUser(user.id) }}>Hapus Data</Button>
                </td>
              </tr>
            ))}

          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
