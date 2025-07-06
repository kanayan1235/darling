document.getElementById('upload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.style.maxWidth = '300px';
    document.getElementById('output').innerHTML = '';
    document.getElementById('output').appendChild(img);
  }
});
