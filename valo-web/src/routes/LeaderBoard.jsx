import React, { useState } from 'react';
import "../css/main.css";
import "../css/homeBar.css";
import "../css/secondBar.css";
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/img/valorant-seeklogo.svg';
import TableLeader from '../components/TableLeader';
import { usePlayer } from '../hooks/usePlayer';

const Leaderboards = (props) => {
  // console.log(props)
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate();
  const { handleSetProfile } = usePlayer();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();


    try {
      // Realiza la solicitud GET al servidor con el nombre del jugador usando fetch
      const response = await fetch(`http://localhost:5001/api/v1/player/profile/${searchTerm.trim()}`);
      if (!response.ok) {
        return
      }
      const { profile } = await response.json();

      handleSetProfile(profile);
      navigate('/profile');

      // Actualiza el estado con los datos del jugador recibidos del servidor
      setSearchResult(profile);
    } catch (error) {
      console.error('Error fetching player data:', error);
    }
  };


  return (
    <div className='container'>
      <div className='min-h-screen flex flex-col'>
        <div id='header' className='accounts-header-container h-20 border-b border-red-58 dark:border-b-gray-700 flex-none flex items-center lg:h-[100px] lg:border-none'>
          <div className='flex-1 flex h-8'>
            <Link to='/' className='flex-none flex items-center'>
              <Logo style={{width:'25%'}} />
            </Link>
            <div className='grow'></div>
            <div className="flex-none">
              <div className="block">
                <button className="language-selector-button relative button-reg h-8 p-1 inline-flex space-x-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" style={{color:'#fff'}}>
                    <path stroke="currentColor" stroke-miterlimit="10" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"></path>
                    <path stroke="currentColor" stroke-miterlimit="10" d="M12 3c-2.513 0-4.875 4.03-4.875 9S9.487 21 12 21c2.512 0 4.875-4.03 4.875-9S14.512 3 12 3Z"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 6c1.654 1.175 3.737 1.875 6 1.875 2.262 0 4.345-.7 6-1.875m0 12c-1.655-1.175-3.738-1.875-6-1.875-2.263 0-4.346.7-6 1.875"></path>
                    <path stroke="currentColor" stroke-miterlimit="10" d="M12 3v18m9-9H3"></path>
                  </svg>
                  <div className="pr-4 hidden lg:block">español</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id='body' className='grow'>
          <div className='gnb--home css-nxrucq'>
            <div className="gnb-home-logo">
              <div className='home-logo'>
                <img src="https://s-valorant-web.op.gg/images/svg/icon-valorant.svg?image=q_auto:good,f_webp,w_224&amp;v=6567719936" width="112" alt="valorant" />
                <img src="https://s-valorant-web.op.gg/images/svg/icon-reckoning.svg?image=q_auto:good,f_webp,w_400&amp;v=6567719936" width="200" alt="reckoning" />
                <strong className="css-ei3sjf">EPISODE 8 : ACT 3</strong>
              </div>
            </div>
            <div className='css-13j09rg'>
              <div className='gnb-search'>
                <div className='search-player__wrapper search-player__wrapper-home css-1onjx9p'>
                  <div className='search-player__input-wrapper'>
                  <form className='search search--type-compact css-sc5yy' onSubmit={handleSearchSubmit}>
                      <div className='css-1419eyu'>
                        <input
                          placeholder="Enter player nickname"
                          id="search-player-compact"
                          aria-label="Search Valorant Match History"
                          autoComplete="off"
                          name="Search"
                          className="css-1p8rj07"
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                      </div>
                      <button type='submit' className='css-j90qw0'>Search</button>
                    </form>
                  </div>
                </div>
              </div>
              <ul className='css-151lzeb'>
              <li className="navigation-item css-ap5w9a">
                  <a data-key="lnb_menu_tab" data-value="stay_home" target="_self" href="/">
                    <span className="navigation-item__title">Home</span>
                  </a>
                </li>
                <li className="navigation-item navigation-item--selected css-ap5w9a">
                  <Link data-key="lnb_menu_tab" data-value="leaderboards" target="_self" to="/leaderboard">
                    <span className="navigation-item__title">Leaderboards</span>
                  </Link>
                </li>
                <li className="navigation-item css-ap5w9a">
                  <Link data-key="lnb_menu_tab" data-value="weapons" target="_self" to="/weapons">
                    <span className="navigation-item__title">Weapons</span>
                  </Link>
                </li>
                <li className="navigation-item css-ap5w9a">
                  <Link to='/agents' data-key="lnb_menu_tab" data-value="agents" target="_self" ><span className="navigation-item__title">Agents</span>
                  </Link>
                  </li>
              </ul>
            </div>
            <div className='css-a2zqi5'>
              <div className='header'>
                <div className="title-wrapper">
                  <h1>Leaderboards</h1>
                  <div className="desc">Find the highest ranked Valorant players from around the world.
                    Compare your skills to the best with the latest leaderboards.
                  </div>
                </div>
              </div>
              <div className='tab-wrapper'>
                <main className='css-q1xd7m'>
                  <div className='css-kpb0s1'>
                    <div className='css-1337qr9'>
                      <TableLeader searchTerm={searchTerm} />
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
        
      </div>
        
      <footer class="bg-custom text-white py-8">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div class="footer-section">
                    <h3 class="text-lg font-semibold mb-2">Sobre Valorant</h3>
                    <p class="text-sm">Valorant es un juego de disparos táctico en primera persona desarrollado por Riot Games.</p>
                </div>
                <div class="footer-section">
                    <h3 class="text-lg font-semibold mb-2">Enlaces Útiles</h3>
                    <ul>
                        <li class="mb-1"><a href="https://playvalorant.com/" target="_blank" class="text-sm hover:underline">Sitio Oficial</a></li>
                        <li class="mb-1"><a href="https://playvalorant.com/news" target="_blank" class="text-sm hover:underline">Noticias</a></li>
                        <li class="mb-1"><a href="https://playvalorant.com/support" target="_blank" class="text-sm hover:underline">Soporte</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3 class="text-lg font-semibold mb-2">Redes Sociales</h3>
                    <ul class="flex justify-center md:justify-start space-x-4">
                        <li><a href="https://twitter.com/opgg_official" target="_blank" rel="noreferrer"><img src="https://s-valorant-web.op.gg/images/svg/icon-logo-x.svg?image=q_auto:good,f_webp,w_48,h_48&amp;v=956837888" width="24" height="24" alt="Twitter" /></a></li>
                        <li><a href="https://www.facebook.com/opgg.official/" target="_blank" rel="noreferrer"><img src="https://s-valorant-web.op.gg/images/svg/icon-logo-facebook.svg?image=q_auto:good,f_webp,w_48,h_48&amp;v=956837888" width="24" height="24" alt="Facebook" /></a></li>
                        <li><a href="https://www.instagram.com/opgg_official" target="_blank" rel="noreferrer"><img src="https://s-valorant-web.op.gg/images/svg/icon-logo-instagram.svg?image=q_auto:good,f_webp,w_48,h_48&amp;v=956837888" width="24" height="24" alt="Instagram" /></a></li>
                        <li><a href="https://www.youtube.com/@opgg_official" target="_blank" rel="noreferrer"><img src="https://s-valorant-web.op.gg/images/svg/icon-logo-youtube.svg?image=q_auto:good,f_webp,w_48,h_48&amp;v=956837888" width="24" height="24" alt="Youtube" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
    
  );
};

export default Leaderboards;
