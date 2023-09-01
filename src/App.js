import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './App.css';
import { PlayerControls } from './components/PlayerControls';
import TrackList from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';
import music from './assets/music.wav';
import music2 from './assets/music2.wav';
import music3 from './assets/music3.wav';


function App() {

  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Itty bitty 8 bit",
        file: music,
      },
      {
        name: "Pixelland",
        file: music2,
      },
      {
        name: "Pinball spring",
        file: music3,
      }
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  })

  return (
    <MusicContext.Provider value={[state, setState]}>
    <div className="App">
      <PlayerControls/>
      <TrackList />
    </div>
    </MusicContext.Provider>
  );
}

export default App;
