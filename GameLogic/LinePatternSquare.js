function LinePatternSquare(texturePath, texturex, texturey, texturewidth, textureheight) {

  var rectangle = new PIXI.Graphics();

  PIXI.Sprite.call(this, rectangle);


  this.spinBtnrectangle.beginFill(0xD3D3D3);
  this.spinBtnrectangle.lineStyle(2, 0x000000, 1);
  this.spinBtnrectangle.drawRect(
                            x,
                            y,
                            width,
                            height,
                            );
  this.spinBtnrectangle.endFill();



};


LinePatternSquare.prototype = Object.create(PIXI.Graphics.prototype);
