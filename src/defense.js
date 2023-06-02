class Defense {
  constructor(x, y, sprite, type, price, position) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.sprite = sprite;
    this.type = type;
    this.price = 50;
    this.position = position;
    this.width = 43;
    this.height = 43;
    console.log(this.position);
    console.log(this.x, this.y);
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
