# How to add redux-toolkit to the app

-   add the dependencie
    -   npm install @reduxjs/toolkit react-redux
-   make a store for all the reducers

    -   make a directory in the src/redux/store.ts
    -   add the following to that file

            import { configureStore } from '@reduxjs/toolkit'

            export const store = configureStore({
              reducer: {},
            })

            // Infer the `RootState` and `AppDispatch` types from the store itself
            export type RootState = ReturnType<typeof store.getState>
            // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
            export type AppDispatch = typeof store.dispatch

-   provide redux store to react

    -   now have to wrap the entire app with the redux coverings
    -   add the following to index.tsx file

            // redux imports
            import { Provider } from 'react-redux';
            import { store } from './redux/store';

            // change in the wrapper
            <React.StrictMode>
              <Provider store={store}>
                <App />
              </Provider>
            </React.StrictMode>

-   add the slicer [state, reducer, actions]

    -   make a file named counter.ts in the src/redux/features/counter.ts

            import { createSlice } from '@reduxjs/toolkit'
            import type { PayloadAction } from '@reduxjs/toolkit'

            export interface CounterState {
              count: number
            }

            const initialState: CounterState = {
              count: 0,
            }

            export const counterSlice = createSlice({
              name: 'counter',
              initialState,
              reducers: {
                increment: (state) => {
                  state.count += 1
                },
                decrement: (state) => {
                  state.count -= 1
                },
                incrementByAmount: (state, action: PayloadAction<number>) => {
                  state.count += action.payload
                },
              },
            })

            // Action creators are generated for each case reducer function
            export const { increment, decrement, incrementByAmount } = counterSlice.actions

            export default counterSlice.reducer

-   Add slice reducer to store

    -   in the src/redux/store.ts we have to add the slicer reducer
    -   importing the reducer from the correct dir and adding the reducer in the proper naming and object

            import { configureStore } from '@reduxjs/toolkit'
            import counterReducer from './features/counter'

            export const store = configureStore({
              reducer: {
                counter: counterReducer,
              },
            })

            // Infer the `RootState` and `AppDispatch` types from the store itself
            export type RootState = ReturnType<typeof store.getState>
            // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
            export type AppDispatch = typeof store.dispatch

-   Modifying to the the App.tsx

    -   importing the useSelector and useDispathc hooks
    -   importing the actions and the type def for the state
    -   initiating the state (count) by the useSelector
    -   initiate the dispatch function as well
    -   the state value is seen at **{count}**
    -   to access the actions of the dispatch functions are done as bellow

        [onClick={()=>dispatch(increment())}]

            import { Button, Container, Typography } from '@mui/material';
            import { useDispatch, useSelector } from 'react-redux';
            import { decrement, increment, incrementByAmount } from './redux/features/counter';
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

---

---

---
