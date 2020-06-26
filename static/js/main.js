let image = document.getElementById('img-btn');

const listen = (htlement, event, callback) => {
  if (document.querySelector(htlement) !== null) {
    document.querySelector(htlement).addEventListener(event, callback);
  }
}
const showImg = () => {
  document.querySelector('.bg-img').classList.add('show-bg-img');
}

const hideImg = () => {
  document.querySelector('.bg-img').classList.remove('show-bg-img');
}

if (image !== null) {
  listen('#img-btn', "click", showImg);
  listen('.bg-img', "click", hideImg);
}
