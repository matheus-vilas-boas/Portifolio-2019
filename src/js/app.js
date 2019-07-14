if (module.hot) {
  module.hot.accept()
}

document.getElementById('spaceship').addEventListener('click', (evt) => {

  // if(evt.currentTarget.classList.contains('flying')) {
  //   document.getElementById('header').classList.add('away');
  //   evt.currentTarget.classList.remove('flying');
  //   evt.currentTarget.classList.add('arrive');
  //   return;
  // }
  // evt.currentTarget.classList.add('flying');
})
