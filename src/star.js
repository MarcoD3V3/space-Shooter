export default class Star {
  constructor(isTop, gameWidth, gameHeight) {
    this.height = 5;

    this.width = 2;

    this.position = {
      x: Math.floor(Math.random() * gameWidth),
    };

    this.speed = Math.floor(Math.random() * 3) + 6;

    if (isTop) {
      this.position.y = -0;
    } else {
      this.position.y = Math.floor(Math.random() * gameHeight);
    }
  }

  draw(ctx) {
    ctx.fillStyle = "#666";

    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.y += this.speed / deltaTime;
  }
}