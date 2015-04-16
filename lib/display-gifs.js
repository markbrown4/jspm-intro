export default (urls) => {
  var el = document.querySelector('#gifs');
  el.innerHTML = urls.map(url => `<img src="${url}" />`).join('')
}
