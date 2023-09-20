import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/SongsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/MoviesSlice';
import { reset } from './actions';

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
});

export { store, addSong, removeSong, addMovie, removeMovie, reset };
// console.log(songsSlice.actions.addSong('test'));

// const startingState = store.getState();
// console.log(JSON.stringify(startingState)); 

// // store.dispatch({
// //     type: 'song/addSong',
// //     payload: 'New song'
// // });

// store.dispatch(
//     songsSlice.actions.addSong('Some song')
// )

// const finalState = store.getState();
// console.log(JSON.stringify(finalState)); 