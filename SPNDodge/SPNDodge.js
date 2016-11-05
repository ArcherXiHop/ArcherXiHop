var C = {
  "game": {
    "width": 320,
    "height": 568
  },
  "bg": {
    "width": 320,
    "height": 568,
    "xspeed": 0,
    "yspeed": 300,
    "file": "backgroundpotato.png"
  },
  "p": {
    "file":"dodgesprite.png",
    "width": 60,
    "height": 75,
    "frames": 4
  }
}
class Boot {
  preload(){
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create(){
    this.state.start("Generate")
  }
}
  class Generate {
    preload(){
      console.log("Generating...");
      this.load.image("bg",C.bg.file);
      this.load.spritesheet("p",C.p.file,C.p.width, C.p.height,C.p.frames)
    }
    create() {
      console.log("All Done.");
      this.state.start("Begin")
    }
  }
  class Begin {
    create() {
      console.log("Entered Beginning Stage");
      this.background = this.add.tileSprite(0,0,C.bg.width,C.bg.height,"bg");
      this.background.autoScroll(C.bg.xspeed,C.bg.yspeed);
    }
  }
  function restart() {
  game.state.start("Boot")
  }

var game = new Phaser.Game(C.game.width,C.game.height);
game.state.add("Boot",Boot);
game.state.add("Generate",Generate);
game.state.add("Begin",Begin);
game.state.start("Boot");
