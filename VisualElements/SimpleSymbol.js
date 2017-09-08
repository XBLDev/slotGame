function SimpleSymbol(texturePath, texturex, texturey, texturewidth, textureheight) {
  var texture = PIXI.Texture.fromImage(texturePath);
  PIXI.Sprite.call(this, texture);
  this.x = texturex;
  this.y = texturey;
  this.width = texturewidth;
  this.height = textureheight;  
  

};

SimpleSymbol.prototype = Object.create(PIXI.Sprite.prototype);

SimpleSymbol.prototype.getX = function() {
  console.log("x:",this.x);

};

























