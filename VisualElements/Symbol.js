function Symbol(generatedTexture, texturex, texturey, texturewidth, textureheight) {
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
};

// Symbol.prototype = Object.create(PIXI.Sprite.prototype);
// Symbol.prototype.constructor = Symbol;

// Symbol.prototype.getX = function() {
//   console.log("x:",this.x);
// 	// this.viewportX = viewportX;
// 	// this.far.setViewportX(viewportX);
// 	// this.mid.setViewportX(viewportX);
// };

SlotSymbol.prototype.getY = function() {
  console.log("y:",this.y);
	// this.viewportX = viewportX;
	// this.far.setViewportX(viewportX);
	// this.mid.setViewportX(viewportX);
};


// Symbol.prototype.getWidth = function() {
//   console.log("width:",this.width);
// 	// this.viewportX = viewportX;
// 	// this.far.setViewportX(viewportX);
// 	// this.mid.setViewportX(viewportX);
// };

// Symbol.prototype.getHeight = function() {
//   console.log("height:",this.height);
// 	// this.viewportX = viewportX;
// 	// this.far.setViewportX(viewportX);
// 	// this.mid.setViewportX(viewportX);
// };

// Symbol.prototype.getTexture = function() {
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
