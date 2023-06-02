class Defense {
  constructor(x, y, sprite, type, price) {
    this.x = x;
    this.y = y;
    // this.isometric_x = isoX;
    // this.isometric_y = isoY;
    this.size = 100;
    this.sprite = sprite;
    this.type = type;
    this.price = 50;
    text("I AM BEING CALLED", this.x, this.y, 20, "black");
    console.log("I AM BEING CALLED");
    console.log(this.x);
    console.log(this.y);
  }

  update() {
    //this.updateIsometricPosition();
  }

  draw() {
    this.update();
    image(this.sprite, this.x, this.y);
    fill("black");
  }
}
