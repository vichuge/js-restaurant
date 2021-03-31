import _ from 'lodash';
import './style.css';
import banner from './tt.jpg';

function component() {
  const img = new Image();
  img.classList.add('img-fluid');
  img.classList.add('rounded');
  img.id = 'first-img';
  img.src = banner;
  addRowCol(img);

  const title = document.createElement('h1');
  title.innerHTML = 'Italian restaurant';
  addRowCol(title);

  const copy = document.createElement('p');
  copy.innerHTML = 'All kind of Italian food dishes and more...';
  addRowCol(copy);
}

function addRowCol(obj) {
  const content = document.getElementById('content');  
  const row = document.createElement('div');
  row.classList.add('row');
  row.classList.add('text-center');
  const col = document.createElement('div');
  col.classList.add('col-12');
  row.appendChild(col);
  col.appendChild(obj);
  content.appendChild(row);
}

component();