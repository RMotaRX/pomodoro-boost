import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Hello World!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed
        itaque, quo numquam magnam illum officiis libero distinctio sit, et
        consequuntur quisquam porro eaque. Veniam, deleniti voluptatem.
        Similique, doloribus quisquam.
      </p>
    </>
  );
}
