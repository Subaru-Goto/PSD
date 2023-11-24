class Hamburger{
  constructor(){
    this.$hamburger = document.querySelector('.hamburger');
    this.$navRight = document.querySelector('.nav__right');
    this.$closeBtn = document.querySelector('.close-btn');
    this.addEventListners();
}
  // Trigger function
  addEventListners() {
    document.body.addEventListener("click", event => {
      this._displayNav(event);
      this._closeNav(event);
    });
  };
  _displayNav(event) {
    if (event.target.className === "hamburger") {
      this.$navRight.style.display = "flex";
      this.$hamburger.style.display = "none";
    }
  }
  _closeNav(event) {
    if (event.target.className === "close-btn") {
      this.$navRight.style.display = "none";
      this.$hamburger.style.display = "block";
    }
  }
}

new Hamburger();