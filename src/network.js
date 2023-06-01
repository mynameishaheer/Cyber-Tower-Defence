class Network {
  constructor() {
    this.grid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 37, 37, 37, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 37, 0, 37, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 37, 37, 37, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.images = [];

    this.x_start = 0;
    this.y_start = 0;

    this.hp = 100;
  }

  draw_grid() {
    this.x_start = wWidth / 2 - TILE_WIDTH / 2;
    this.y_start = 50;
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        this.draw_tile(this.images[this.grid[j][i]], i, j);
      }
    }
  }

  draw_tile(img, x, y) {
    let x_screen = this.x_start + ((x - y) * TILE_WIDTH) / 2;
    let y_screen = this.y_start + ((x + y) * TILE_HEIGHT) / 2;
    let z_offset = MAX_HEIGHT - img.height;
    image(img, x_screen, y_screen + z_offset);
  }

  center_setup() {
    for (let i = 0; i <= 37; i++) {
      this.images.push(loadImage("./assets/tiles/tile-" + i + ".png"));
    }
  }
}
