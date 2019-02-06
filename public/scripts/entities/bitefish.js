class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0;
    this.imageUri = '/images/bitefish.gif';
    this.isTasty = false;
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult));
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);
  }


  onClick(event) {
    const tank = window.fishtank;
    const denizens = Object.values(window.fishtank.denizens);
    const biteFishPosition = this.position;
    let closeFish;
    closeFish = tank.getProximateDenizens(biteFishPosition, 100);
    closeFish.forEach(function(fish) {
      if (fish.isTasty) {
        fish.kill();
      }
    });
    
  }
}
