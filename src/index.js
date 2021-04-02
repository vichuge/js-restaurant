import _ from 'lodash';
import './style.css';
import banner from './tt.jpg';

import printAbout from './about';
import printMenu from './menu';
import printLocation from './location';
import printDefault from './default';

const addRowCol = (obj, c) => {
  const content = document.getElementById(c);
  const row = document.createElement('div');
  row.classList.add('row');
  row.classList.add('text-center');
  const col = document.createElement('div');
  col.classList.add('col-12');
  row.appendChild(col);
  col.appendChild(obj);
  content.appendChild(row);
};

const changeText = (tag) => {
  switch (tag) {
    case 'about':
      printAbout();
      break;
    case 'menu':
      printMenu();
      break;
    case 'location':
      printLocation();
      break;
    default:
      printDefault();
      break;
  }
};

const changeNav = (tag) => {
  const arr = document.getElementsByClassName('nav-link');

  for (let i = 0; i < arr.length; i += 1) {
    arr[i].id = '';
    arr[i].classList.remove('active');
    const clas = `nav-link ${tag}`;
    if (arr[i].className === clas) {
      arr[i].id = 'a-green';
      arr[i].classList.add('active');
      changeText(tag);
    }
  }
};

const addLi = (ul, str, tag, status = false) => {
  const li = document.createElement('li');
  li.classList.add('nav-item');
  const a = document.createElement('a');
  a.classList.add('nav-link');
  a.classList.add(tag);
  const b = (status === true) ? (a.classList.add('active')) : ('');
  const c = (status === true) ? (a.id = 'a-green') : ('');
  a.addEventListener('click', () => { changeNav(tag); });
  a.onclick = 'this()';
  a.innerHTML = str;
  li.appendChild(a);
  ul.appendChild(li);
};

const component = () => {
  const img = new Image();
  img.classList.add('img-fluid');
  img.classList.add('rounded');
  img.id = 'first-img';
  img.src = banner;
  addRowCol(img, 'content');

  const title = document.createElement('h1');
  title.innerHTML = 'Italian restaurant';
  addRowCol(title, 'content');

  const copy = document.createElement('p');
  copy.innerHTML = 'All kind of Italian food dishes and more...';
  addRowCol(copy, 'content');

  const ul = document.createElement('ul');
  ul.classList.add('nav');
  ul.classList.add('nav-pills');
  ul.classList.add('nav-fill');
  addLi(ul, 'About us', 'about', true);
  addLi(ul, 'Our menu', 'menu');
  addLi(ul, 'Location', 'location');
  const navigation = document.createElement('div');
  navigation.id = 'navigation';
  document.body.appendChild(navigation);
  navigation.appendChild(ul);

  const text = document.createElement('div');
  text.id = 'text';
  document.body.appendChild(text);

  changeText('about');
};

component();
