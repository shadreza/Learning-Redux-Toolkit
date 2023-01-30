import { Button, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from './redux/features/counter';
import { decremenT, incremenT } from './redux/features/name';
import { RootState } from './redux/store';

function App() {

  const { count } = useSelector((state: RootState) => state.counter);
  const { name } = useSelector((state: RootState) => state.name);
  const dispatch = useDispatch();

  return (
    <Container sx={styles.container}>
      <Typography variant='h1'>Store</Typography>
      <Typography variant='h4'>Counter : {name}</Typography>
      <Container style={{marginTop: 20, display: 'flex', justifyContent: 'space-evenly'}}>
        <Button variant="contained" onClick={()=>dispatch(incremenT())}>Increment</Button>
        <Button variant="outlined" onClick={()=>dispatch(decremenT())}>Decrement</Button>
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
