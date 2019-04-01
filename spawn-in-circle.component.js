AFRAME.registerComponent('spawn-in-circle', {
  schema: {
    radius: {type: 'number', default: 1}
  },

  init: function() {
    var el = this.el;
    var center = el.getAttribute('position');

    var angleRad = this.getRandomAngleInRadians();
    // var circlePoint = this.randomPointOnCircle(center, angleRad);
    
    //instead of setting position when spawing, set to the camera postion & rotation
    var worldPoint = {x: center.x, y: center.y, z: + center.z};
    el.setAttribute('position', worldPoint);

    var angleDeg = angleRad * 180 / Math.PI;
    var angleToCenter = -1 * angleDeg + 90;
    el.object3D.rotation.set(0, THREE.Math.degToRad(angleToCenter), 0);
  },

  getRandomAngleInRadians: function() {
    return Math.random()*Math.PI*2;
  },

  randomPointOnCircle: function (radius, angleRad) {
    var x = Math.cos(angleRad)*radius;
    var y = Math.sin(angleRad)*radius;
    return {x: x, y: y};
  }
});