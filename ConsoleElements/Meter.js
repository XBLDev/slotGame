// var meterValueManger;
function Meter(rootStage, topx, topy, topwidth, topheight, bottomx, bottomy, bottomwidth, bottomheight, value, valueName, name, gameValueManager)
{
//   meterValueManager = gameValueManager;
  this.metervaluemanager = gameValueManager;
//   console.log(meterValueManger);
  this.toprectangle = new PIXI.Graphics();
  this.toprectangle.beginFill(0xD3D3D3);
  this.toprectangle.lineStyle(2, 0x000000, 1);
  this.toprectangle.drawRect(topx,topy,topwidth,topheight);
  this.toprectangle.endFill();
  
  this.bottomrectangle = new PIXI.Graphics();
  this.bottomrectangle.beginFill(0xFFFFFF);
  this.bottomrectangle.lineStyle(2, 0x000000, 1);
  this.bottomrectangle.drawRect(bottomx, bottomy, bottomwidth, bottomheight);
  this.bottomrectangle.endFill();

  this.metervalue = value;
  this.meterValueName = valueName;
  this.metervalueText = new PIXI.Text("$"+value+".00",{fontFamily: "Arial", fontSize: 32, fill: "black"});
  this.metervalueText.style = {wordWrap: true, wordWrapWidth: bottomwidth/3, wordWrapHeight: bottomheight/3};
  this.metervalueText.position.set(bottomx + bottomwidth/2 - bottomwidth/6, bottomy + bottomheight/2 - bottomheight/6);

  this.meternameText = new PIXI.Text(name,{fontFamily: "Arial", fontSize: 32, fill: "black"});
  this.meternameText.style = {wordWrap: true, wordWrapWidth: topwidth/3, wordWrapHeight: topheight/3};
  this.meternameText.position.set(topx + topwidth/2 - topwidth/6, topy + topheight/2 - topheight/6);

//   this.testNum = 0;

  rootStage.addChild(this.toprectangle);
  rootStage.addChild(this.bottomrectangle);
  rootStage.addChild(this.metervalueText);
  rootStage.addChild(this.meternameText);

  requestAnimationFrame(this.update.bind(this));

}


Meter.prototype.getMeterValue = function(){
    // console.log(this.metervalue);
    return this.metervalue;
};

Meter.prototype.changeMeterValue = function(newvalue){

    this.metervalue = this.metervalue + newvalue;
    console.log("new value: ", this.metervalue);

};



Meter.prototype.update = function()
{

    var currentText = this.metervaluemanager.getUIValue(this.meterValueName);
    // console.log(currentText);
    this.metervalueText.text = "$"+currentText+".00";
    
    // console.log(this.metervalueText.text);
    requestAnimationFrame(this.update.bind(this));
    
};