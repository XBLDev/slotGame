function SlotSymbol(generatedTexture, texturex, texturey, texturewidth, textureheight, stage) {
  // this.texture = texture;
  // var texture = PIXI.Texture.fromImage(texturePath);
  // texture.x = texturex;
  // texture.y = texturey;
  // texture.width = texturewidth;
  // texture.height = textureheight;
  this.texture = generatedTexture;
  this.x = texturex;
  this.y = texturey;
  this.width = texturewidth;
  this.height = textureheight;
  // this.rootstage = stage;


  this.texture.x = this.x;
  this.texture.y = this.y;
  this.texture.width = this.width;
  this.texture.height = this.height;

  stage.addChild(generatedTexture);
  // console.log("x:",this.x);
  // console.log("y:",this.y);
  // console.log("width:",this.width);
  // console.log("height:",this.height);
  // console.log("texture:",this.texture);

  // PIXI.Sprite.call(this, texture);


  // this.x = x;
  // this.y = y;
  // this.width = width;
  // this.height = height;
}

// Symbol.prototype = Object.create(PIXI.Sprite.prototype);
// Symbol.prototype.constructor = Symbol;

// SlotSymbol.prototype.getPosX = function(nextX) {
//   this.x = nextX;
// 	// this.viewportX = viewportX;
// 	// this.far.setViewportX(viewportX);
// 	// this.mid.setViewportX(viewportX);
// };

// SlotSymbol.prototype.getPosY = function() {
//   console.log("y:",this.y);
// 	// this.viewportX = viewportX;
// 	// this.far.setViewportX(viewportX);
// 	// this.mid.setViewportX(viewportX);
// };


// SlotSymbol.prototype.getWidth = function() {
//   console.log("width:",this.width);
// 	// this.viewportX = viewportX;
// 	// this.far.setViewportX(viewportX);
// 	// this.mid.setViewportX(viewportX);
// };

// SlotSymbol.prototype.getHeight = function() {
//   console.log("height:",this.height);
// 	// this.viewportX = viewportX;
// 	// this.far.setViewportX(viewportX);
// 	// this.mid.setViewportX(viewportX);
// };

// SlotSymbol.prototype.getTexture = function() {
//   console.log("Texture:",this.texture);
// 	// this.viewportX = viewportX;
// 	// this.far.setViewportX(viewportX);
// 	// this.mid.setViewportX(viewportX);
// };























// import { Sprite } from 'pixi.min.js';

// export class Symbol extends Sprite {

//     constructor(){
//         super();
//     }




// }
