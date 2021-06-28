import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import '../styles/room.scss';

type RoomParams = {
  id: string;
}
export function Room() {
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const roomId = params.id;

  async function handleSendQuestions() {
    if (newQuestion.trim() === '')
    return;

  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Room React</h1>
          <span>4 questions</span>
        </div>
        <form>
          <textarea
            placeholder="What do you like ask?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            <span>For send a question, 
              <button>Make your login</button>
            </span>
            <Button type="submit">Send question</Button>
          </div>
        </form>
      </main>
    </div>
  )
}