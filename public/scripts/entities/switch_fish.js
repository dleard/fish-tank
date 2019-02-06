class SwitchFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/clownfish.png';
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
