export class Point {
 
    constructor(private x?: number, public y?: number, public z?: number) {
      
    }
  
    private draw = (): any => {
      console.log("X:" + this.x + " y:" + this.y + " z:" + this.z);
    };
  
    drawRectangle = ():any => {
      console.log(`drawing rectangle`);
      this.draw();
    };
  
    get X() {
      return this.x;
    }
  
    set X(value) {
      this.x = value;
    }
  
  }

export class Point2 {
 
    constructor(private x?: number, public y?: number, public z?: number) {
      
    }
  
    private draw = (): any => {
      console.log("X:" + this.x + " y:" + this.y + " z:" + this.z);
    };
  
    drawRectangle = ():any => {
      console.log(`drawing rectangle`);
      this.draw();
    };
  
    get X() {
      return this.x;
    }
  
    set X(value) {
      this.x = value;
    }
  
  }