
// var allreels;

function Button(rootStage, x, y, width, height, text, imagePath, onClickFunc)
{
  // allreels = reels.allReels.length;

  // console.log(this.allreels.allReels.length);
  this.spinBtnrectangle = new PIXI.Graphics();
  this.spinBtnrectangle.beginFill(0xD3D3D3);
  this.spinBtnrectangle.lineStyle(2, 0x000000, 1);
  this.spinBtnrectangle.drawRect(
                            x,
                            y,
                            width,
                            height,
                            );
  this.spinBtnrectangle.endFill();
  this.spinBtnrectangle.interactive = true;
  this.spinBtnrectangle.buttonMode = true;
  // this.btnFunc = clickFunction;
  this.spinBtnrectangle.on('click', onClickFunc); // mouse-only
  this.spinBtnrectangle.on('pointerdown', onClickFunc);



//   spinBtnrectangle.on('click', onClickSpin); // mouse-only  

  
  this.Btntext = new PIXI.Text(text,{fontFamily: "Arial", fontSize: 32, fill: "black"});
  this.Btntext.style = {wordWrap: true, wordWrapWidth: width/3, wordWrapHeight: height/3};
  this.Btntext.position.set(x + width/2 - width/6, y + height/2 - height/6);

  this.buttonImgPath = imagePath;



  if(this.buttonImgPath == "")
  {
    rootStage.addChild(this.spinBtnrectangle);
    rootStage.addChild(this.Btntext);
  }
  else
  {
    // console.log("button is image");  
    var currentSymbol = new SimpleSymbol(this.buttonImgPath,
                                            x,
                                            y,
                                            width,
                                            height
                                            );

    currentSymbol.interactive = true;
    currentSymbol.buttonMode = true;
    currentSymbol.on('click', onClickFunc); // mouse-only
    currentSymbol.on('pointerdown', onClickFunc);
                         
    rootStage.addChild(currentSymbol);
    
  }

};

// Button.prototype.testFunc2 = function()
// {

// };


// Button.prototype.testFunc = function()
// {
//     // console.log("testFunc");
//     // console.log(this.allreels);
// };
