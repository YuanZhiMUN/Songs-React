import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Bad romance', duration: '4:05' },
        {title: 'Baby baby, one more time', duration: '3:45' },
        {title: 'My heart will go on', duration: '5:05' },
        {title: 'Want it that way', duration: '3:57' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});