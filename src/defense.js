class Defense {
  constructor(x, y, sprite, type, position) {
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
    switch (type) {
      case "antivirus":
        this.price = 100;
        this.hp = 3;
        break;
      case "firewall":
        this.price = 150;
        this.hp = 5;
        break;
      case "ids":
        this.price = 200;
        this.hp = 4;
        break;
      case "backup":
        this.price = 300;
        this.hp = 3;
        break;
      case "encryption":
        this.price = 200;
        this.hp = 2;
        break;
      case "netSeg":
        this.price = 250;
        this.hp = 4;
      default:
        this.price = 100;
        this.hp = 1;
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
