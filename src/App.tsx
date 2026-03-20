import './styles/global.css';
import './styles/theme.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
      <Heading>
        Hello, React with TypeScript!
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}

export default App;
