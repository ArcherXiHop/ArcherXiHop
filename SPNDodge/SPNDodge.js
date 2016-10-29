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
      this.load.image("bg", "backgroundpotato.png");
    }
    create() {
      console.log("All Done.");
      this.state.start("Begin")
    }
  }
  class Begin {
    create() {
      console.log("Entered Beginning Stage");
    }
  }

var game = new Phaser.Game(320,568);
game.state.add("Boot",Boot);
game.state.add("Generate",Generate);
game.state.add("Begin",Begin);
game.state.start("Boot");
