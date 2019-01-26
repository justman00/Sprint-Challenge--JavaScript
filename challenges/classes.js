// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.width * this.height * this.length;
  }

  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}
// Test your volume and surfaceArea methods by uncommenting the logs below:
const test = new CuboidMaker2(4, 5, 5);
console.log(test.volume()); // 100
console.log(test.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2 {
  constructor(width, length, height) {
    super(width, length, height);
  }

  surfaceArea2() {
    return 6 * this.width * this.width;
  }
}

const cube = new CubeMaker(5, 5, 5);
console.log(cube.volume()); // 125
console.log(cube.surfaceArea2()); // 150
// I think it is not right that the cube should extend a cuboid since they are totally different figures and we actually need just one number for the cube, since width, height and length are equal in case of a cube
