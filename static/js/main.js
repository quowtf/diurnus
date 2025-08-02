function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";" + "expires=;path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

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


var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
toggle.addEventListener("click", () => {
    if (toggle.className === "fal fa-moon-o site-tittle") {
        setTheme("dark");
    } else if (toggle.className === "fal fa-sun-o site-tittle") {
        setTheme("light");
    }
});

if (getCookie("theme").length>1) {
  setTheme(getCookie("theme"));
}else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme("dark");
} else {
  setTheme("light");
}

function setTheme(mode) {
  if (mode === "dark") {
      darkTheme.disabled = false;
      toggle.className = "fal fa-sun-o site-tittle";
      setCookie("theme", "dark");
    } else if (mode === "light") {
      darkTheme.disabled = true;
      toggle.className = "fal fa-moon-o site-tittle";
      setCookie("theme", "light");
  }
}
