
document.getElementById('upload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.onload = () => URL.revokeObjectURL(img.src); // メモリ解放
    document.getElementById('output').innerHTML = '';
    document.getElementById('output').appendChild(img);
  }
});
