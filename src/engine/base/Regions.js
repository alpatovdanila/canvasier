class Rectangle {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  checkPoint(x, y) {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    )
  }

  checkIntersection(other) {
    if (other instanceof Rectangle) {
      const xCollision =
        (this.x >= other.x && this.x <= other.x + other.width) ||
        (this.x + this.width > other.x &&
          this.x + this.width < other.x + other.width)

      const yCollision =
        (this.y >= other.y && this.y <= other.y + other.height) ||
        (this.y + this.height > other.y &&
          this.y + this.height < other.y + other.height)
      return xCollision && yCollision
    }
    return false
  }
}

export const Regions = {
  Rectangle
}
