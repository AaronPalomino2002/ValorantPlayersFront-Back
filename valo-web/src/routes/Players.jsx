// import React, { useState } from 'react';
// import "../css/main.css";
// import "../css/homeBar.css";
// import "../css/secondBar.css";
// import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../assets/img/valorant-seeklogo.svg';
// import TablePlayers from '../components/TablePlayers';

// const Players = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault(); // Prevenir la recarga de la página al enviar el formulario
//   };

//   return (
//     <div className='container'>
//       <div className='min-h-screen flex flex-col'>
//         <div id='header' className='accounts-header-container h-20 border-b border-b-gray-200 dark:border-b-gray-700 flex-none flex items-center lg:h-[100px] lg:border-none'>
//           <div className='flex-1 flex h-8'>
//             <Link to='/' className='flex-none flex items-center'>
//               <Logo style={{width:'25%'}} />
//             </Link>
//             <div className='grow'></div>
//             <div className="flex-none">
//               <div className="block">
//                 <button className="language-selector-button relative button-reg h-8 p-1 inline-flex space-x-2 items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
//                     <path stroke="currentColor" stroke-miterlimit="10" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"></path>
//                     <path stroke="currentColor" stroke-miterlimit="10" d="M12 3c-2.513 0-4.875 4.03-4.875 9S9.487 21 12 21c2.512 0 4.875-4.03 4.875-9S14.512 3 12 3Z"></path>
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 6c1.654 1.175 3.737 1.875 6 1.875 2.262 0 4.345-.7 6-1.875m0 12c-1.655-1.175-3.738-1.875-6-1.875-2.263 0-4.346.7-6 1.875"></path>
//                     <path stroke="currentColor" stroke-miterlimit="10" d="M12 3v18m9-9H3"></path>
//                   </svg>
//                   <div className="pr-4 hidden lg:block">español</div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div id='body' className='grow'>
//           <div className='gnb--home css-nxrucq'>
//             <div className="gnb-home-logo">
//               <div className='home-logo'>
//                 <img src="https://s-valorant-web.op.gg/images/svg/icon-valorant.svg?image=q_auto:good,f_webp,w_224&amp;v=6567719936" width="112" alt="valorant" />
//                 <img src="https://s-valorant-web.op.gg/images/svg/icon-reckoning.svg?image=q_auto:good,f_webp,w_400&amp;v=6567719936" width="200" alt="reckoning" />
//                 <strong className="css-ei3sjf">EPISODE 8 : ACT 3</strong>
//               </div>
//             </div>
//             <div className='css-13j09rg'>
//               <div className='gnb-search'>
//                 <div className='search-player__wrapper search-player__wrapper-home css-1onjx9p'>
//                   <div className='search-player__input-wrapper'>
//                     <form className='search search--type-compact css-sc5yy' onSubmit={handleSearchSubmit}>
//                       <div className='css-1419eyu'>
//                         <label htmlFor='search-player-compact' className='custom-placeholder css-142ju5j'> 
//                           <span className="custom-placeholder__name">Player Name  +</span>
//                           <span className="custom-placeholder__tagline">#Tagline</span>
//                         </label>
//                         <input
//                           id="search-player-compact"
//                           aria-label="Search Valorant Match History"
//                           autoComplete="off"
//                           name="Search"
//                           className="css-1p8rj07"
//                           value={searchTerm}
//                           onChange={handleSearchChange}
//                         />
//                       </div>
//                       <button type='submit' className='css-j90qw0'>Search</button>
//                     </form>
//                   </div>
//                   <button className="riot-btn riot-btn--big riot-btn--sign-in css-efgy3u" type="button">
//                     <span className="svg-icon css-1ffm4eu" draggable="false" style={{color:'#fff',width:24,height:24}}>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M3 8.21078L12.6596 3.73999L20.2193 5.62314V15.5402L17.0898 15.9195L15.8434 8.83398L15.2472 9.10494L15.8569 16.0685L12.6867 16.4614L11.5487 9.98554L10.9526 10.2565L11.508 16.6104L8.37849 16.9898L7.33531 11.11L6.7392 11.381L7.24047 17.1388L5.41152 17.3691L3 8.21078ZM13.0525 18.5478L12.8899 17.6401L20.2329 16.7324V19.74L13.0525 18.5478Z" fill="currentColor"></path>
//                       </svg>
//                     </span>
//                     Riot Sign in
//                   </button>
//                 </div>
//               </div>
//               <ul className='css-151lzeb'>
//                 <li className="navigation-item css-ap5w9a">
//                   <a data-key="lnb_menu_tab" data-value="stay_home" target="_self" href="/">
//                     <span className="navigation-item__title">Home</span>
//                   </a>
//                 </li>
//                 <li className="navigation-item css-ap5w9a">
//                   <Link data-key="lnb_menu_tab" data-value="leaderboards" target="_self" to="/leaderboard">
//                     <span className="navigation-item__title">Leaderboards</span>
//                   </Link>
//                 </li>
//                 <li className="navigation-item navigation-item--selected  css-ap5w9a">
//                   <Link data-key="lnb_menu_tab" data-value="leaderboards" target="_self" to="/players">
//                     <span className="navigation-item__title">Players</span>
//                   </Link>
//                 </li>
//                 <li className="navigation-item css-ap5w9a">
//                   <Link data-key="lnb_menu_tab" data-value="weapons" target="_self" to="/weapons">
//                     <span className="navigation-item__title">Weapons</span>
//                   </Link>
//                 </li>
//                 <li className="navigation-item css-ap5w9a">
//                   <a data-key="lnb_menu_tab" data-value="agents" target="_self" href="/agents"><span className="navigation-item__title">Agents</span></a></li>
//                 <li className="navigation-item css-ap5w9a">
//                   <a data-key="lnb_menu_tab" data-value="weapons" target="_self" href="/weapons"><span className="navigation-item__title">Weapons</span></a></li>
//                 <li className="navigation-item css-ap5w9a">
//                   <a data-key="lnb_menu_tab" data-value="maps" target="_self" href="/maps"><span className="navigation-item__title">Maps</span></a></li>
                
//               </ul>
//             </div>
//             <div className='css-a2zqi5'>
//               <div className='header'>
//                 <div className="title-wrapper">
//                   <h1>Players</h1>
//                   <div className="desc">Find tall Valorant players from around the world.
//                   </div>
//                 </div>
//               </div>
//               <div className='tab-wrapper'>
//                 <main className='css-q1xd7m'>
//                   <div className="css-689mq1">
//                     <div className="filter">
//                       <section className="dropdown css-152yhh1">
//                         <select>
//                           <option value="ap">Asia Pacific (AP)</option>
//                           <option value="br">Brazil (BR)</option>
//                           <option value="eu">Europe (EU)</option>
//                           <option value="kr">Korea (KR)</option>
//                           <option value="latam">Latin America (LATAM)</option>
//                           <option value="na">North America (NA)</option>
//                         </select>
//                         <label className="dropdown__label dropdown__label--medium dropdown__label--icon css-mtnbe1">
//                           <span className="dropdown__label-content css-sm6uaa">Select</span>
//                           <span className="svg-icon dropdown__label-icon css-1ffm4eu" draggable="false" style={{width:24, height:24}}>
//                           </span>
//                         </label>
//                       </section>
//                     </div>
//                   </div>
//                   <div className='css-kpb0s1'>
//                     <div className='css-1337qr9'>
//                     <TablePlayers searchTerm={searchTerm} />
//                     </div>
//                   </div>
//                 </main>
//               </div>
//             </div>
//           </div>
//         </div>
        
//       </div>
//         <footer className='css-5w7wlt'>
//           <div className='css-17efis4'>
//             <ul className='css-vrl8it'>
//               <li><h3 className='css-wysar7'>Valorant</h3></li>
//               <li><div class="css-0"><a href="https://op.gg/about" class="css-mfs9k0">About Us</a></div></li>
//               <li><div class="css-0"><a href="https://op.gg/about" class="css-mfs9k0">Compañy</a></div></li>
//               </ul>
//           </div>
//           <div class="css-19ps7hg">
//             <div class="css-11qxc6b">
//               <section class="dropdown css-152yhh1">
//                 <select>
//                   <option value="en_US" selected="">English</option><option value="ko_KR">한국어</option><option value="ja_JP">日本語</option><option value="pl_PL">język polski</option><option value="fr_FR">français</option><option value="de_DE">Deutsch</option><option value="es_ES">español</option><option value="nl_NL">Nederlands</option><option value="da_DK">dansk</option><option value="sv_SE">Svenska</option><option value="no_NO">Norsk</option><option value="ru_RU">русский язык</option><option value="hu_HU">magyar</option><option value="fi_FI">suomi</option><option value="tr_TR">Türkçe</option><option value="ro_RO">limba română</option><option value="pt_BR">português</option><option value="zh_CN">简体中文</option><option value="zh_TW">繁體中文</option><option value="sr_CS">српски језик</option><option value="it_IT">italiano</option><option value="th_TH">ไทย</option><option value="vi_VN">Tiếng Việt</option></select><label class="dropdown__label dropdown__label--medium css-mtnbe1"><span class="dropdown__label-content css-sm6uaa">English</span><span class="svg-icon dropdown__label-icon css-1ffm4eu" draggable="false" style={{width:24, height:24}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M7 9L12 15L17 9H7Z" fill="currentColor"></path>
//                 </svg></span></label>
//                 </section>
//                 </div>
//                 </div>

//     <div class="css-x5orfu"><p class="css-17fbqu4">© 2024 OP.GG. OP.GG is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Valorant. Valorant and Riot Games are trademarks or registered trademarks of Riot Games, Inc. Valorant © Riot Games, Inc.</p><ul class="css-g8d6t5"><li><a href="https://www.instagram.com/opgg_official" target="_blank" rel="noreferrer"><img src="https://s-valorant-web.op.gg/images/svg/icon-logo-instagram.svg?image=q_auto:good,f_webp,w_48,h_48&amp;v=956837888" width="24" height="24" alt="Instagram"/></a></li><li><a href="https://www.youtube.com/@opgg_official" target="_blank" rel="noreferrer"><img src="https://s-valorant-web.op.gg/images/svg/icon-logo-youtube.svg?image=q_auto:good,f_webp,w_48,h_48&amp;v=956837888" width="24" height="24" alt="Youtube"/></a></li><li><a href="https://twitter.com/opgg_official" target="_blank" rel="noreferrer"><img src="https://s-valorant-web.op.gg/images/svg/icon-logo-x.svg?image=q_auto:good,f_webp,w_48,h_48&amp;v=956837888" width="24" height="24" alt="Twitter"/></a></li><li><a href="https://www.facebook.com/opgg.official/" target="_blank" rel="noreferrer"><img src="https://s-valorant-web.op.gg/images/svg/icon-logo-facebook.svg?image=q_auto:good,f_webp,w_48,h_48&amp;v=956837888" width="24" height="24" alt="Facebook"/></a></li></ul></div>
//         </footer>
//     </div>
    
//   );
// };

// export default Players;
