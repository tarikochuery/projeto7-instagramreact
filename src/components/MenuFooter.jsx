import {
  IoHome,
  IoSearchOutline,
  IoAddCircleOutline,
  IoHeartOutline,
  IoPersonOutline
} from 'react-icons/io5';

function MenuFooter() {
  return (
    <nav class="menu-footer">
      <ul class="menu-footer-icons">
        <li class="menu-footer-icon">
          <IoHome />
        </li>
        <li class="menu-footer-icon">
          <IoSearchOutline />
        </li>
        <li class="menu-footer-icon">
          <IoAddCircleOutline />
        </li>
        <li class="menu-footer-icon">
          <IoHeartOutline />
        </li>
        <li class="menu-footer-icon">
          <IoPersonOutline />
        </li>
      </ul>
    </nav>
  );
}

export { MenuFooter };