let addFzc = document.getElementById('addFzc');

let fontsizeText = ['拡大', '標準'];

let fontsizeFlag = 0;

let darkmodeChanger = document.getElementsByClassName('darkmodeChanger')[0];

let mainElement = document.getElementsByTagName('main')[0];

let fontsizeChanger = () => {
  fontsizeFlag += 1;
  addFzc.innerText = fontsizeText[fontsizeFlag % 2];
  mainElement.classList.toggle('fontsizeLarge');
}

let humburgerBtn = document.getElementsByClassName('hamburgerBtn')[0];

addFzc.innerText = fontsizeText[fontsizeFlag];
darkmodeChanger.addEventListener('click', () => {
  mainElement.dataset.theme = mainElement.dataset.theme === "dark" ? "light" : "dark";
}
);

document.getElementsByClassName('fontsizeChanger')[0].addEventListener('click', fontsizeChanger); 

humburgerBtn.addEventListener('click', () => {
  humburgerBtn.classList.toggle('active');
});
