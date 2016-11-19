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
    "frames": 4,
    "fps": 4,
    "startx": 160,
    "starty": 500
  },
  "a": {
  "file": "anxiety.png",
  "width": 50,
  "height": 65,
  "frames": 4,
  "fps": 10,
  "startx": 160,
  "starty": 32
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
      this.load.spritesheet("dodger",C.p.file,C.p.width, C.p.height,C.p.frames);
      this.load.spritesheet("anxiety",C.a.file,C.a.width,C.a.height,C.a.frames);
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
      this.bg = this.add.tileSprite(0,0,C.bg.width,C.bg.height,"bg");
      this.bg.autoScroll(C.bg.xspeed,C.bg.yspeed);
      this.dodger = this.add.sprite(C.p.startx,C.p.starty,"dodger");
      this.dodger.anchor.set(0.5,0.5);
      this.dodger.smoothed = false;
      this.dodger.scale.set(1);
      this.dodger.animations.add("anim");
      this.dodger.animations.play("anim",C.p.fps,true);

      this.anxiety = this.add.sprite(C.a.startx,C.a.starty,"anxiety");
      this.anxiety.anchor.set(0.5,0.5);
      this.anxiety.smoothed = false;
      this.anxiety.scale.set(1);
      this.anxiety.animations.add("anim");
      this.anxiety.animations.play("anim",C.a.fps,true);
    }
  }
  update(){
  console.log("Play.update() called.");
  }
  function restart() {
  game.state.start("Boot")
  }

var game = new Phaser.Game(C.game.width,C.game.height);
game.state.add("Boot",Boot);
game.state.add("Generate",Generate);
game.state.add("Begin",Begin);
game.state.start("Boot");
