import { Button, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';
import { RootState } from './redux/store';

function App() {

  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <Container sx={styles.container}>
      <Typography variant='h1'>Store</Typography>
      <Typography variant='h4'>Counter : {count}</Typography>
      <Container style={{marginTop: 20, display: 'flex', justifyContent: 'space-evenly'}}>
        <Button variant="contained" onClick={()=>dispatch(increment())}>Increment</Button>
        <Button variant="outlined" onClick={()=>dispatch(decrement())}>Decrement</Button>
        <Button variant="text" onClick={()=>dispatch(incrementByAmount(33))}>Increment by 33</Button>
      </Container>
    </Container>
  );
}

const styles = {
  container: {
    bgcolor: 'tomato',
    height: '100vh',
    textAlign: 'center',
    p: 1,
  },
}

export default App;
