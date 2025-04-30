import { Container } from './components/container';
import { Logo } from './components/logo';
import { Menu } from './components/menu';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}
