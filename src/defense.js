class Defense {
  constructor(x, y, sprite, type, position, tile) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.sprite = sprite;
    this.type = type;
    this.price = 100;
    this.hp = 1;
    this.position = position;
    this.width = 43;
    this.height = 43;
    this.tile = tile;
    this.damage = 2;
    switch (type) {
      case "antivirus":
        this.price = 100;
        this.hp = 10;
        break;
      case "firewall":
        this.price = 150;
        this.hp = 15;
        break;
      case "ids":
        this.price = 200;
        this.hp = 10;
        break;
      case "backup":
        this.price = 300;
        this.hp = 15;
        break;
      case "encryption":
        this.price = 200;
        this.hp = 10;
        break;
      case "netSeg":
        this.price = 250;
        this.hp = 15;
      default:
        this.price = 100;
        this.hp = 10;
        break;
    }

    console.log("type: " + type);
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
