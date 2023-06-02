class Menu {
  constructor() {}
  setup() {}

  drawTitle() {
    noStroke();
    textFont(interfaceLargeFont);
    textSize(48);
    fill(147, 186, 86, 255);
    text("Cyber Tower Defence", windowWidth / 2 - 220, wHeight / 2 - 180);
    fill("black");
    textFont(interfaceSmallFont);
    textSize(24);
    text(
      "Defend the network against the cyber attacks",
      windowWidth / 2 - 185,
      wHeight / 2 - 140
    );
  }

  async drawButtons() {
    noStroke();
    if (
      mouseX > windowWidth / 2 - 200 &&
      mouseX < windowWidth / 2 + 200 &&
      mouseY > wHeight / 2 - 100 &&
      mouseY < wHeight / 2 - 30
    ) {
      if (mouseIsPressed) {
        fill("green");
        gameState = "play";
      }
      fill(147, 200, 86, 255);
    } else {
      fill(147, 186, 86, 255);
    }
    rect(windowWidth / 2 - 200, wHeight / 2 - 100, 400, 70, 18);
    fill("white");
    textFont(interfaceLargeFont);
    textSize(32);
    text("Play", windowWidth / 2 - 30, wHeight / 2 - 55);
  }
  draw() {
    this.drawTitle();
    this.drawButtons();
  }
}

const sleep = (millis) => {
  return new Promise((resolve) => setTimeout(resolve, millis));
};
