class player{
    constructor(x,y){
        this.width = 40;
        this.height = 40;
        
        this.scale = 4;
        this.posX = x;
        this.posY = y;
    }
    display(){
    
  
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        image(player_image,this.posX,this.posY,this.width, this.height);
        if (keyDown(UP_ARROW)) {
      
            this.posY += 10;
            
          }
      
          if (keyDown(LEFT_ARROW)){
            this.posX -= 5;
      
          }
      
          if (keyDown(RIGHT_ARROW)) {
            this.posX += 5;
          }
          if (keyDown(DOWN_ARROW)) {
            this.posY -= 5;
          }
        pop();
          
      
    }
}