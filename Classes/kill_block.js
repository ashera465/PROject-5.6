class killB{
    constructor(x,y){
        this.width = 20;
        this.height = 20;
        //this.image = "images/tiles/spike.png";
        this.scale = 4;
        this.posX = x;
        this.posY = y;
        
  }
    


  display(){
    
  
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    image(spike_image, this.posX,this.posY, this.width, this.height);
    pop();
      
  }
}