const printLocation = () => {
  const text = document.getElementById('text');
  text.innerHTML = '';
  const p = document.createElement('p');
  p.innerHTML = 'We\'re on Bakersfield street, number 221b';
  const row = document.createElement('div');
  row.classList.add('row');
  row.classList.add('text-center');
  const col = document.createElement('div');
  col.classList.add('col-12');
  row.appendChild(col);
  col.appendChild(p);
  text.appendChild(row);
};

export default printLocation;