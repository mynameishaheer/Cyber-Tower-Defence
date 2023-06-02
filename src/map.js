GRID_SIZE = 15;
TILE_WIDTH = 100;
TILE_HEIGHT = 50;
MAX_HEIGHT = 80;

class Map {
  constructor() {
    this.grid = [
      [14, 13, 14, 13, 14, 13, 34, 34, 34, 23, 23, 23, 23, 23, 13],
      [11, 12, 11, 12, 11, 12, 34, 34, 34, 23, 23, 23, 13, 35, 20],
      [14, 13, 35, 14, 23, 23, 34, 34, 34, 23, 23, 13, 20, 35, 20],
      [11, 12, 35, 21, 39, 39, 34, 34, 34, 39, 39, 20, 20, 35, 20],
      [14, 13, 35, 21, 39, 39, 34, 34, 34, 39, 39, 20, 20, 35, 20],
      [11, 12, 35, 21, 39, 9, 34, 34, 34, 39, 39, 20, 20, 35, 20],
      [33, 33, 33, 33, 33, 33, 0, 0, 0, 33, 33, 33, 33, 33, 33],
      [33, 33, 33, 33, 33, 33, 0, 0, 0, 33, 33, 33, 33, 33, 33],
      [33, 33, 33, 33, 33, 33, 0, 0, 0, 33, 33, 33, 33, 33, 33],
      [35, 20, 20, 21, 39, 39, 34, 34, 34, 39, 39, 20, 38, 38, 38],
      [35, 20, 20, 21, 39, 39, 34, 34, 34, 39, 39, 20, 38, 38, 38],
      [35, 20, 20, 21, 39, 39, 34, 34, 34, 39, 39, 20, 38, 38, 38],
      [2, 3, 4, 11, 22, 22, 34, 34, 34, 22, 22, 12, 38, 38, 38],
      [9, 35, 6, 22, 22, 22, 34, 34, 34, 38, 38, 38, 38, 38, 38],
      [1, 6, 8, 22, 22, 22, 34, 34, 34, 38, 38, 38, 38, 38, 38],
    ];

    this.tile_images = [];

    this.x_start = 0;
    this.y_start = 0;
    this.selectedTileImageX = null;
    this.selectedTileImageY = null;
  }

  draw_grid() {
    this.x_start = wWidth / 2 - TILE_WIDTH / 2;
    this.y_start = 50;
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        this.draw_tile(this.tile_images[this.grid[j][i]], i, j);
      }
    }
  }

  draw_tile(img, x, y) {
    let x_screen = this.x_start + ((x - y) * TILE_WIDTH) / 2;
    let y_screen = this.y_start + ((x + y) * TILE_HEIGHT) / 2;
    let z_offset = MAX_HEIGHT - img.height;
    image(img, x_screen, y_screen + z_offset);
  }

  setup() {
    for (let i = 0; i <= 39; i++) {
      this.tile_images.push(loadImage("./assets/tiles/tile-" + i + ".png"));
      this.selectedTileImageX = loadImage("./assets/tiles/tile-x-red.png");
      this.selectedTileImageY = loadImage("./assets/tiles/tile-y-red.png");
    }
  }
}
