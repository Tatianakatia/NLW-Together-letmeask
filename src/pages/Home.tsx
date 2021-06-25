import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';



export function Home(){
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  //function fo navigation
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }


    history.push('/rooms/new')
     
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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google logo" />
            Create your room with Google
          </button>
          <div className="separator">
            or join a room
          </div>
          <form>
            <input
              type="text"
              placeholder="Enter the room code" 
            />
            <Button type="submit">
              Join the room
            </Button>
          </form>
        </div>

      </main>

    </div>
  )
}