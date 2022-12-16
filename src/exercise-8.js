/**
 * Shape
 */
export class Shape {
  /**
   * Constructor
   * @param {string} color
   */
  constructor(color) {
    this.color = color;
  }
}

/**
 * Circle
 *
 * TODO Create a Circle class that extends the Shape class.
 *
 * TODO The Circle class must override the Shape constructor
 * that accepts `color` and  `radius` parameters.
 *
 * TODO Also, add an method `area` on the Circle class that
 * computes the Cirlce's area, given the radius.
 */
export class Circle extends Shape {
  /**
   * Constructor
   * @param {string} color
   * @param {number} radius
   */
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  /**
   * Calculates the area of the circle from the radius
   * @return {number}
   */
  area = function() {
    return Math.PI * this.radius * this.radius;
  };
}
