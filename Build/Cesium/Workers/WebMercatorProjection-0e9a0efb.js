define(["exports","./Cartesian2-15709417","./when-54c2dc71","./Check-6c0211bc","./Math-fbfbe3b1"],function(e,n,u,d,t){"use strict";function s(e){this._ellipsoid=u.defaultValue(e,n.Ellipsoid.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(s.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),s.mercatorAngleToGeodeticLatitude=function(e){return t.CesiumMath.PI_OVER_TWO-2*Math.atan(Math.exp(-e))},s.geodeticLatitudeToMercatorAngle=function(e){s.MaximumLatitude<e?e=s.MaximumLatitude:e<-s.MaximumLatitude&&(e=-s.MaximumLatitude);var t=Math.sin(e);return.5*Math.log((1+t)/(1-t))},s.MaximumLatitude=s.mercatorAngleToGeodeticLatitude(Math.PI),s.prototype.project=function(e,t){var i=this._semimajorAxis,o=e.longitude*i,r=s.geodeticLatitudeToMercatorAngle(e.latitude)*i,a=e.height;return u.defined(t)?(t.x=o,t.y=r,t.z=a,t):new n.Cartesian3(o,r,a)},s.prototype.unproject=function(e,t){if(!u.defined(e))throw new d.DeveloperError("cartesian is required");var i=this._oneOverSemimajorAxis,o=e.x*i,r=s.mercatorAngleToGeodeticLatitude(e.y*i),a=e.z;return u.defined(t)?(t.longitude=o,t.latitude=r,t.height=a,t):new n.Cartographic(o,r,a)},e.WebMercatorProjection=s});
//# sourceMappingURL=WebMercatorProjection-0e9a0efb.js.map
