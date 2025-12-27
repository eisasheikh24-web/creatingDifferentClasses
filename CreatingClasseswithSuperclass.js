class train {
  constructor(color,lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
toggleLights() {
  this.lightsOn = !this.lightsOn;
}
lightsStatus() {
  console.log("Lights on?", this.lightsOn)
}
getSelf() {
  console.log(this);
}
getPrototype() {
  var proto = Object.getPrototypeOf(this);
  console.log(proto)
}
}

let train1 = new train("red", false)
let train2 = new train("blue", true)
train2.toggleLights()
train2.toggleLights()
train2.lightsStatus()
train2.getSelf()
train2.getPrototype()

class highspeedtrain extends train {
  constructor(passengers, highspeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highspeedOn = highspeedOn;
  }
  togglehighspeed() {
    this.highspeedOn = !this.highspeedOn;
    console.log("High speed status:", this.highspeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational");
  }
}

let highspeed1 = new highspeedtrain(200, true, "green", false);
highspeed1.togglehighspeed()
highspeed1.togglehighspeed()