import { Link, useHistory } from 'react-router-dom';
import { FormEvent , useState} from 'react';
import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';
import { database } from '../services/firebase';

export function NewRoom(){
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration symbolizing questions and answers" />
        <strong>Create rooms of Q&amp;A on-line </strong>
        <p>Get your audience's questions answered in real-time</p>
      </aside>
      <main>
          <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Create a new room</h2>          
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Room name" 
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Create the room
            </Button>
          </form>
          <p>
            Would you like to join a room? <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}