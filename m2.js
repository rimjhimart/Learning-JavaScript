class Robot {
    constructor() {
      this.position = { x: 0, y: 0 };
      this.direction = 'north'; // Assume starting direction is north
    }
  
    moveForward() {
      switch (this.direction) {
        case 'north':
          this.position.y++;
          break;
        case 'south':
          this.position.y--;
          break;
        case 'east':
          this.position.x++;
          break;
        case 'west':
          this.position.x--;
          break;
      }
    }
  
    moveBackward() {
      switch (this.direction) {
        case 'north':
          this.position.y--;
          break;
        case 'south':
          this.position.y++;
          break;
        case 'east':
          this.position.x--;
          break;
        case 'west':
          this.position.x++;
          break;
      }
    }
  
    turnLeft() {
      switch (this.direction) {
        case 'north':
          this.direction = 'west';
          break;
        case 'south':
          this.direction = 'east';
          break;
        case 'east':
          this.direction = 'north';
          break;
        case 'west':
          this.direction = 'south';
          break;
      }
    }
  
    turnRight() {
      switch (this.direction) {
        case 'north':
          this.direction = 'east';
          break;
        case 'south':
          this.direction = 'west';
          break;
        case 'east':
          this.direction = 'south';
          break;
        case 'west':
          this.direction = 'north';
          break;
      }
    }
  }
  
  // Example usage:
  const myRobot = new Robot();
  myRobot.moveForward();
  myRobot.turnRight();
  myRobot.moveForward();
  console.log('Robot Position:', myRobot.position); // Output: { x: 1, y: 1 }