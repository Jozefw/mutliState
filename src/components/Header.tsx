import {useContext} from 'react';
import Button from './UI/Button.tsx';
import TimersContext from './store/timers-context'


export default function Header() {
const timerContext = useContext(TimersContext);

  return (
    <header>
      <h1>ReactTimer</h1>
      <Button>Stop Timers</Button>
    </header>
  );
}
