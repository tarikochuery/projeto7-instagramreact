import {
  IoLogoInstagram,
  IoPaperPlaneOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoPersonOutline
} from 'react-icons/io5';

function NavBar() {
  return (
    <div class="header-container">
      <header class="header">
        <div class="logo-container">
          <div class="icon">
            <IoLogoInstagram size='2rem' />
          </div>
          <div class="logo">
            <img src="assets/logo.png" alt="Instagram Logo" />
          </div>
        </div>
        <div class="search-bar">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <nav class="nav-menu">
          <ul class="nav-icons">
            <li class="icon">
              <IoPaperPlaneOutline size='2rem'/>
            </li>
            <li class="icon">
              <IoCompassOutline size='2rem' />
            </li>
            <li class="icon">
              <IoHeartOutline size='2rem' />
            </li>
            <li class="icon">
              <IoPersonOutline size='2rem' />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export { NavBar };