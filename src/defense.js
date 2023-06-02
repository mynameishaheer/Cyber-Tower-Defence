class Defense {
  constructor(x, y, isoX, isoY, lane, hp, sprite, type) {
    this.x = x;
    this.y = y;
    this.isometric_x = isoX;
    this.isometric_y = isoY;
    this.hp = hp;
    this.lane = lane;
    this.size = 64;
    this.sprite = sprite;
    this.type = type;
    this.price = 0;
  }

  updateIsometricPosition() {
    this.isometric_x = ((this.x - this.y) * TILE_WIDTH) / 2;
    this.isometric_y = ((this.x + this.y) * TILE_HEIGHT) / 2;
  }

  update() {
    this.updateIsometricPosition();
    this.destroy();
  }

  draw() {
    this.update();
    image(
      this.sprite,
      this.isometric_x,
      this.isometric_y,
      this.size,
      this.size
    );
    fill("black");
  }
}
