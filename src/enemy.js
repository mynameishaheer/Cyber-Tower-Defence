class Enemy {
  constructor(x, y, isoX, isoY, side, lane, hp, sprite, type) {
    this.x = x;
    this.y = y;
    this.isometric_x = isoX;
    this.isometric_y = isoY;
    this.hp = 500;
    this.side = side;
    this.lane = lane;
    this.speed = 0.01;
    this.size = 64;
    this.tick = 0;
    this.sprite = sprite;
    this.type = type;
  }

  updateIsometricPosition() {
    this.isometric_x = ((this.x - this.y) * TILE_WIDTH) / 2;
    this.isometric_y = ((this.x + this.y) * TILE_HEIGHT) / 2;
  }

  moveUp() {
    this.y -= this.speed;
    this.updateIsometricPosition();
  }

  moveDown() {
    this.y += this.speed;
    this.updateIsometricPosition();
  }

  moveLeft() {
    this.x -= this.speed;
    this.updateIsometricPosition();
  }

  moveRight() {
    this.x += this.speed;
    this.updateIsometricPosition();
  }

  update() {
    if (this.tick == 1000) {
      this.tick = 0;
    }
    this.tick++;
    this.destroy();
  }

  move() {
    if (this.side == "left") {
      this.moveUp();
    }
    if (this.side == "top") {
      this.moveRight();
    }
    if (this.side == "right") {
      this.moveDown();
    }
    if (this.side == "bottom") {
      this.moveLeft();
    }
  }

  destroy() {
    if (this.side == "left") {
      switch (this.lane) {
        case 1:
          if (this.isometric_x >= 650 && this.isometric_y <= 425) {
            this.moveDown();
            network.hp--;
            this.hp--;
          }
          break;
        case 2:
          if (this.isometric_x >= 700 && this.isometric_y <= 450) {
            this.moveDown();
            network.hp--;
            this.hp--;
          }
          break;
        case 3:
          if (this.isometric_x >= 750 && this.isometric_y <= 475) {
            this.moveDown();
            network.hp--;
            this.hp--;
          }
          break;
      }
    }
    if (this.side == "top") {
      switch (this.lane) {
        case 1:
          if (this.isometric_x >= 750 && this.isometric_y >= 325) {
            this.moveLeft();
            network.hp--;
            this.hp--;
          }
          break;
        case 2:
          if (this.isometric_x >= 700 && this.isometric_y >= 350) {
            this.moveLeft();
            network.hp--;
            this.hp--;
          }
          break;
        case 3:
          if (this.isometric_x >= 650 && this.isometric_y >= 375) {
            this.moveLeft();
            network.hp--;
            this.hp--;
          }
          break;
      }
    }
    if (this.side == "right") {
      switch (this.lane) {
        case 1:
          if (this.isometric_x <= 950 && this.isometric_y >= 375) {
            this.moveUp();
            network.hp--;
            this.hp--;
          }
          break;
        case 2:
          if (this.isometric_x <= 900 && this.isometric_y >= 350) {
            this.moveUp();
            network.hp--;
            this.hp--;
          }
          break;
        case 3:
          if (this.isometric_x <= 850 && this.isometric_y >= 325) {
            this.moveUp();
            network.hp--;
            this.hp--;
          }
          break;
      }
    }
    if (this.side == "bottom") {
      switch (this.lane) {
        case 1:
          if (this.isometric_x <= 850 && this.isometric_y <= 475) {
            this.moveRight();
            network.hp--;
            this.hp--;
          }
          break;
        case 2:
          if (this.isometric_x <= 900 && this.isometric_y <= 450) {
            this.moveRight();
            network.hp--;
            this.hp--;
          }
          break;
        case 3:
          if (this.isometric_x <= 950 && this.isometric_y <= 425) {
            this.moveRight();
            network.hp--;
            this.hp--;
          }
          break;
      }
    }

    if (this.hp <= 0) {
      enemies.splice(enemies.indexOf(this), 1);
      enemiesKilled = enemiesKilled + 1;
    }
  }

  draw() {
    this.update();
    if (this.tick % 2 == 0) {
      this.move();
    }
    image(this.sprite, this.isometric_x, this.isometric_y, 56, 56);
    fill("black");
  }
}
