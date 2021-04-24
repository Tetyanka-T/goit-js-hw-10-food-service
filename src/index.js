import './sass/main.scss';
import templateMenu from './templates.hbs';
import dishes from './menu.json';
import './changeTheme';

const list = document.querySelector('.js-menu');
const tagList = document.querySelector('.tag-list');

function createMarkup(dishes) {
  return templateMenu(dishes);
}
list.insertAdjacentHTML('afterbegin', createMarkup(dishes));
