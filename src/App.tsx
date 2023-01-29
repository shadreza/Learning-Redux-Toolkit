import { Container } from '@mui/material';

function App() {
  return (
    <Container sx={styles.container}>
      Hello
    </Container>
  );
}

const styles = {
  container: {
    bgcolor: 'tomato',
    height: '100vh',
  },
}

export default App;
