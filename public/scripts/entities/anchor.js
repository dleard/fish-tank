class Anchor extends Fish {

  constructor(options) {
    super(options);
    this.surgeSecondsLeft = 0;
    this.maxSurge = 2.0;
    this.surgMult = 3.0;
    this.imageUri = '/images/anchor.png';
    this.isTasty = false;
  }

  updateOneTick() {
    let delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (10 + this.surgeSecondsLeft * this.surgMult));
    delta.x = 0;
    delta.y = -5
    this.position.addMut(delta);

    this.makeNewVelocity();
  }
}
