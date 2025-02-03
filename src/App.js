import logo from './logo_blanco_1.avif';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='video-background'>
        <iframe
          className='video-background'
          src={"https://player.vimeo.com/video/1051374286?autopause=1&background=1&autoplay=1&loop=1&muted=1&transparent=0&responsive=1&portrait=0&title=0&byline=0&color=1a1a1a"}
          allow="autoplay; encrypted-media;"
          allowFullScreen
          data-ready="true"
        />
      </div>
      <div className='header__wrapper'>
        <h1 className='header__logo'>
          <a href='/'>
            <img src={logo} className="header__logo-image" alt="logo"/>
          </a>
        </h1>
      </div>
      <div className='section   section-blends section-full text-custom'>
        <div className="place-self-center text-center">
          <div className="prose"><p class="h1">JUST MOVE BETTER</p></div>
          <div className="message"><p class="h1">Choose your location:</p></div>
          <div className='buttons'>
            <a class="button button--xl" href="https://the-paraball.eu">Europe and UK</a>
            <a class="button button--xl" href="https://the-paraball.com">USA and rest of the world</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
