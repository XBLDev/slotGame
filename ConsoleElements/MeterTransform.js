function MeterTransform()
{
    this.winTopWidth = window.innerWidth/4;
    this.winTopHeight = window.innerHeight/10;
    this.winTopX = window.innerWidth/2 - this.winTopWidth/2;
    this.winTopY = 0;

    this.winBottomWidth = window.innerWidth/4;
    this.winBottomHeight = window.innerHeight/10;
    this.winBottomX = window.innerWidth/2 - this.winTopWidth/2;
    this.winBottomY = this.winTopHeight;  


    this.balanceTopWidth = window.innerWidth/4;
    this.balanceTopHeight = window.innerHeight/10;
    this.balanceTopX = window.innerWidth/2 - this.balanceTopWidth/2;
    this.balanceTopY = window.innerHeight - 2 * window.innerHeight/10;

    this.balanceBottomWidth = window.innerWidth/4;
    this.balanceBottomHeight = window.innerHeight/10;
    this.balanceBottomX = window.innerWidth/2 - this.balanceBottomWidth/2;
    this.balanceBottomY = window.innerHeight -  this.balanceBottomHeight;      



    this.betTopHeight = window.innerHeight/10;  
    this.betTopWidth = window.innerWidth/5;
    this.betTopX = 0;
    this.betTopY = window.innerHeight - 2 * window.innerHeight/10;
    
    this.betBottomHeight =  window.innerHeight/10;   
    this.betBottomWidth = window.innerWidth/5;
    this.betBottomX = 0;
    this.betBottomY = window.innerHeight - window.innerHeight/10;






}