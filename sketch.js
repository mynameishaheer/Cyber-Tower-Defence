const wWidth = 1648;
const wHeight = 961;

let tick = 0;

let virusSprite;
let trojanSprite;
let wormSprite;
let spywareSprite;
let ransomwareSprite;
let ddosSprite;

let antivirusSpriteRight;
let antivirusSpriteLeft;

let aVSprites = [];

let map;
let network;

let interface;
let interfaceLargeFont;
let interfaceSmallFont;

let enemies = [];
let enemiesKilled = 0;
let defenses = [];
// let enemiesEscaped = 0;

function setup() {
  createCanvas(windowWidth, wHeight);
  loadAssets();
  createMap();
  interface = new Interface();
}

function draw() {
  //* Update the ticker
  updateTicker();

  background("white");

  //* Draw the map
  map.draw_grid();

  //* Create the enemy
  if (tick % 200 == 0) {
    createVirus();
  }

  //* Draw the enemies
  for (e in enemies) {
    enemies[e].draw();
  }

  for (d in defenses) {
    defenses[d].draw();
  }

  interface.draw();

  for (towerIndex in interface.towers) {
    const tower = interface.towers[towerIndex];
    if (tower !== null) {
      tower.draw();
    }
  }

  network.draw_grid();

  frameRate(60);
}

/* Game Engine */
function updateTicker() {
  tick++;

  if (tick == 1000) {
    tick = 0;
  }
}
function loadAssets() {
  virusSprite = loadImage("./assets/sprites/enemy/virusSprite.png");
  trojanSprite = loadImage("./assets/sprites/enemy/trojanSprite.png");
  wormSprite = loadImage("./assets/sprites/enemy/wormSprite.png");
  spywareSprite = loadImage("./assets/sprites/enemy/spywareSprite.png");
  ransomwareSprite = loadImage("./assets/sprites/enemy/ransomwareSprite.png");
  ddosSprite = loadImage("./assets/sprites/enemy/ddosSprite.png");

  interfaceLargeFont = loadFont("assets/fonts/JLSSpaceGothicR_NC.otf");
  interfaceSmallFont = loadFont("assets/fonts/JLSDataGothicC_NC.otf");

  for (let i = 1; i < 7; i++) {
    aVSprites.push(loadImage(`./assets/sprites/tools/antivirusSprite${i}.png`));
  }

  // antivirusSpriteRight = loadImage(
  //   "./assets/sprites/tools/antivirusSpriteRight.png"
  // );
  // antivirusSpriteLeft = loadImage(
  //   "./assets/sprites/tools/antivirusSpriteLeft.png"
  // );
}
function createMap() {
  map = new Map();
  map.setup();
  network = new Network();
  network.center_setup();
}

/* Enemy Functions */
function createVirus() {
  let whichSprite = "";
  let type = "";
  let spriteRand = floor(random(0, 6));
  if (spriteRand == 0) {
    whichSprite = virusSprite;
    type = "virus";
  } else if (spriteRand == 1) {
    whichSprite = trojanSprite;
    type = "trojan";
  } else if (spriteRand == 2) {
    whichSprite = wormSprite;
    type = "worm";
  } else if (spriteRand == 3) {
    whichSprite = spywareSprite;
    type = "spyware";
  } else if (spriteRand == 4) {
    whichSprite = ransomwareSprite;
    type = "ransomware";
  } else if (spriteRand == 5) {
    whichSprite = ddosSprite;
    type = "ddos";
  }

  rand = floor(random(0, 12));
  //left
  if (rand == 0) {
    enemies.push(new Enemy(15, 7, 400, 550, "left", 1, 1, whichSprite, type));
  }
  if (rand == 1) {
    enemies.push(new Enemy(16, 7, 450, 575, "left", 2, 1, whichSprite, type));
  }
  if (rand == 2) {
    enemies.push(new Enemy(17, 7, 500, 600, "left", 3, 1, whichSprite, type));
  }
  //top
  if (rand == 3) {
    enemies.push(new Enemy(9, -1, 500, 200, "top", 1, 1, whichSprite, type));
  }
  if (rand == 4) {
    enemies.push(new Enemy(9, 0, 450, 225, "top", 2, 1, whichSprite, type));
  }
  if (rand == 5) {
    enemies.push(new Enemy(9, 1, 400, 250, "top", 3, 1, whichSprite, type));
  }
  //bottom
  if (rand == 6) {
    enemies.push(
      new Enemy(23, 1, 1100, 600, "bottom", 1, 1, whichSprite, type)
    );
  }
  if (rand == 7) {
    enemies.push(
      new Enemy(23, 0, 1150, 575, "bottom", 2, 1, whichSprite, type)
    );
  }
  if (rand == 8) {
    enemies.push(
      new Enemy(23, -1, 1200, 550, "bottom", 3, 1, whichSprite, type)
    );
  }
  //right
  if (rand == 9) {
    enemies.push(
      new Enemy(17, -7, 1200, 250, "right", 1, 1, whichSprite, type)
    );
  }
  if (rand == 10) {
    enemies.push(
      new Enemy(16, -7, 1150, 225, "right", 2, 1, whichSprite, type)
    );
  }
  if (rand == 11) {
    enemies.push(
      new Enemy(15, -7, 1100, 200, "right", 3, 1, whichSprite, type)
    );
  }
}
