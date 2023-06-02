let nearestTileX, nearestTileY;
TILE_WIDTH = 100;
TILE_HEIGHT = 50;
GRID_SIZE = 15;

let selectedTile = null;
let isDragging = false;

var dir = "none";

class Interface {
  constructor() {
    this.selected = "none";
    this.towers = [];
    this.isDragging = false;
    this.passToTowerX = null;
    this.passToTowerY = null;
  }

  drawTitle() {
    textFont(interfaceLargeFont);
    textSize(48);
    fill(147, 186, 86, 255);
    text("Cyber Tower Defence", 25, 79);
    fill("black");
    textFont(interfaceSmallFont);
    textSize(24);
    text("Defend the network against the cyber attacks", 25, 120);
  }

  drawStats() {
    textFont(interfaceSmallFont);
    textSize(18);
    fill("red ");
    text("Enemies Killed: " + enemiesKilled, 25, 160);
    fill("black");
  }

  drawVirusInfo() {
    image(virusSprite, 25, 630, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Virus", 30, 710);
    fill("black");

    if (mouseX >= 25 && mouseX <= 81 && mouseY >= 630 && mouseY <= 736) {
      fill(0, 0, 0, 100);
      rect(25 - 5, 400 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(25, 400, 400, 200, 20);
      fill("black");

      textSize(18);
      text("Virus.", 30, 425);
    }
  }

  drawTrojanInfo() {
    image(trojanSprite, 25, 730, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Trojan", 28, 810);
    fill("black");

    if (mouseX >= 25 && mouseX <= 81 && mouseY >= 730 && mouseY <= 836) {
      fill(0, 0, 0, 100);
      rect(25 - 5, 500 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(25, 500, 400, 200, 20);
      fill("black");

      textSize(18);
      text("Trojan", 30, 525);
    }
  }

  drawWormInfo() {
    image(wormSprite, 25, 830, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Worm", 28, 910);
    fill("black");

    if (mouseX >= 25 && mouseX <= 81 && mouseY >= 830 && mouseY <= 936) {
      fill(0, 0, 0, 100);
      rect(25 - 5, 600 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(25, 600, 400, 200, 20);
      fill("black");

      textSize(18);
      text("Worms.", 30, 625);
    }
  }

  drawRansomewareInfo() {
    image(ransomwareSprite, 125, 630, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Ransomware", 108, 710);
    fill("black");

    if (mouseX >= 125 && mouseX <= 181 && mouseY >= 630 && mouseY <= 736) {
      fill(0, 0, 0, 100);
      rect(125 - 5, 400 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(125, 400, 400, 200, 20);
      fill("black");

      textSize(18);
      text("Ransomware", 130, 425);
    }
  }

  drawDDoSInfo() {
    image(ddosSprite, 125, 730, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("DDoS", 133, 810);
    fill("black");

    if (mouseX >= 125 && mouseX <= 181 && mouseY >= 730 && mouseY <= 836) {
      fill(0, 0, 0, 100);
      rect(125 - 5, 500 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(125, 500, 400, 200, 20);
      fill("black");

      textSize(18);
      text("DDOS", 130, 525);
    }
  }

  drawSpywareInfo() {
    image(spywareSprite, 125, 830, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Spyware", 118, 910);
    fill("black");

    if (mouseX >= 125 && mouseX <= 181 && mouseY >= 830 && mouseY <= 936) {
      fill(0, 0, 0, 100);
      rect(125 - 5, 600 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(125, 600, 400, 200, 20);
      fill("black");

      textSize(18);
      text("SpyWare", 130, 625);
    }
  }

  snap_to_nearest_road() {
    let minDistance = Infinity;
    let nearestTile = null;

    let mouseGridX = (mouseX - map.x_start) / TILE_WIDTH;
    let mouseGridY = (mouseY - map.y_start - TILE_HEIGHT / 2) / TILE_HEIGHT;

    let mouseIsoX = mouseGridY + mouseGridX;
    let mouseIsoY = mouseGridY - mouseGridX;

    text("mouseX: " + mouseX, 200, 300);
    text("mouseY: " + mouseY, 200, 320);
    text("mouseIsoX: " + mouseIsoX, 200, 340);
    text("mouseIsoY: " + mouseIsoY, 200, 360);

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        let dist = Math.hypot(i - mouseIsoX, j - mouseIsoY);
        if (
          dist < minDistance &&
          (map.grid[j][i] === 33 || map.grid[j][i] === 34)
        ) {
          minDistance = dist;
          nearestTile = { i: i, j: j };
        }
      }
    }

    if (
      nearestTile &&
      (map.grid[nearestTile.j][nearestTile.i] === 33 ||
        map.grid[nearestTile.j][nearestTile.i] === 34)
    ) {
      nearestTileX =
        map.x_start + (nearestTile.i - nearestTile.j) * (TILE_WIDTH / 2);
      nearestTileY =
        map.y_start + (nearestTile.i + nearestTile.j) * (TILE_HEIGHT / 2);

      text("nearestTileX: " + nearestTileX, 200, 380);
      text("nearestTileY: " + nearestTileY, 200, 400);

      selectedTile = map.tiles.find(
        (tile) => tile.x === nearestTile.i && tile.y === nearestTile.j
      );

      text("isOccupied: " + selectedTile.isOccupied, 200, 420);

      text(
        "nearestTile X isometric Val: " + selectedTile.isometric_x,
        200,
        480
      );
      text(
        "nearestTile Y isometric Val: " + selectedTile.isometric_y,
        200,
        500
      );

      text("nearestTile X: " + nearestTile.i, 200, 520);
      text("nearestTile Y: " + nearestTile.j, 200, 540);

      if (map.grid[nearestTile.j][nearestTile.i] === 33) {
        //top and bttom
        if (selectedTile.isOccupied === false) {
          image(aVSprites[4], nearestTileX - 25, nearestTileY - 12);
        } else {
          image(aVSprites[5], nearestTileX - 25, nearestTileY - 12);
        }
      } else if (map.grid[nearestTile.j][nearestTile.i] === 34) {
        //left and right
        if (selectedTile.isOccupied === false) {
          image(aVSprites[1], nearestTileX + 25, nearestTileY - 12);
        } else {
          image(aVSprites[2], nearestTileX + 25, nearestTileY - 12);
        }
      }

      if (
        nearestTileX >= 374 &&
        nearestTileX <= 724 &&
        nearestTileY >= 425 &&
        nearestTileY <= 600
      ) {
        dir = "left";
      } else if (
        nearestTileX >= 374 &&
        nearestTileX <= 724 &&
        nearestTileY >= 200 &&
        nearestTileY <= 375
      ) {
        dir = "top";
      } else if (
        nearestTileX > 874 &&
        nearestTileX <= 1174 &&
        nearestTileY >= 200 &&
        nearestTileY <= 375
      ) {
        dir = "right";
      } else if (
        nearestTileX >= 824 &&
        nearestTileX <= 1174 &&
        nearestTileY >= 425 &&
        nearestTileY <= 600
      ) {
        dir = "bottom";
      } else {
        dir = "none";
      }

      text("Direction is: " + dir, 200, 440);
    }
  }

  drawBuyStation() {
    noStroke();
    fill(30, 30, 30);
    rect(windowWidth - 320, 0, 390, height, 20);
    fill("black");
    noStroke();
    // text(this.selected, 200, 200);
    fill("white");
    textFont(interfaceLargeFont);
    textSize(30);
    text("Buy Station", width - 250, 60);
    fill("black");
    textFont(interfaceSmallFont);
    textSize(18);
    if (this.selected === "antivirus") {
      cursor("grabbing");
    } else {
      cursor("grab");
    }
  }

  drawAntiVirus() {
    image(aVSprites[0], width - 200, 100);

    if (
      mouseX >= width - 200 &&
      mouseX <= width - 172 &&
      mouseY >= 100 &&
      mouseY <= 157
    ) {
      fill(0, 0, 0, 0);
      stroke("white");
      rect(width - 214, 57 + 28, 60, 80);
      noStroke();
      fill("black");
      cursor("grab");

      if (mouseIsPressed) {
        cursor("grabbing");
        this.selected = "antivirus";
      } else {
        cursor("grab");
        this.selected = "none";
      }
    } else {
      cursor("default");
    }
  }

  drawAntivirusOnMouse() {
    if (this.selected === "antivirus") {
      cursor("grabbing");
      image(aVSprites[0], mouseX - 14, mouseY - 28);
      this.isDragging = true;
    } else {
      this.isDragging = false;
    }
  }

  update() {
    if (mouseIsPressed != true) {
      this.selected = "none";
    }
    if (this.selected == "antivirus") {
      cursor("grabbing");
      this.drawAntivirusOnMouse();
    }
  }

  draw() {
    this.drawTitle();
    this.drawStats();
    this.drawRansomewareInfo();
    this.drawDDoSInfo();
    this.drawSpywareInfo();
    this.drawVirusInfo();
    this.drawTrojanInfo();
    this.drawWormInfo();
    this.drawBuyStation();
    this.drawAntiVirus();

    this.snap_to_nearest_road();
    text(this.selected, 200, 200);
    text(this.isDragging, 200, 220);

    this.update();
  }
}

function mouseReleased() {
  console.log("mouse released");
  if (
    interface.selected === "antivirus" &&
    selectedTile != null &&
    selectedTile.isOccupied === false
  ) {
    if (selectedTile.isOccupied === false) {
      let spriteIndex = 3;
      if (dir === "left" || dir === "right") {
        spriteIndex = 0;
        interface.towers.push(
          new Defense(
            nearestTileX + 25,
            nearestTileY - 12,
            aVSprites[spriteIndex],
            "antivirus",
            50
          )
        );
      } else {
        spriteIndex = 3;
        interface.towers.push(
          new Defense(
            nearestTileX - 25,
            nearestTileY - 12,
            aVSprites[spriteIndex],
            "antivirus",
            50
          )
        );
      }

      selectedTile.isOccupied = true;
    }
  }
}
