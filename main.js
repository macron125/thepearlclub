class Hamburger {
  constructor(container, button) {
    this.container = document.querySelector(container);
    this.button = document.querySelector(button);
  }

  launch() {
    this.container.addEventListener('click', () => {
      document.body.classList.toggle('ham-open');
    })
  }
}


let hamburger = new Hamburger('.tpc-hamburger', '.tpc-hamburger-btn');
hamburger.launch();