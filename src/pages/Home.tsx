import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home(){
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Illustration symbolizing questions and answers" />
        <strong>Create rooms of Q&amp;A on-line </strong>
        <p>Get your audience's questions answered in real-time</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={googleIconImg} alt="Google logo" />
            Create your room with Google
          </button>
          <div>
            or join a room
          </div>
          <form>
            <input
              type="text"
              placeholder="Enter the room code" 
            />
            <button type="submit">
              Join the room
            </button>
          </form>
        </div>

      </main>

    </div>
  )
}