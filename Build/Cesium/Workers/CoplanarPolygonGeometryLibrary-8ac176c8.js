define(["exports","./Cartesian2-15709417","./Check-6c0211bc","./Transforms-c00dcfdd","./OrientedBoundingBox-c277851a"],function(n,g,x,h,B){"use strict";var e={},s=new g.Cartesian3,P=new g.Cartesian3,p=new g.Cartesian3,M=new g.Cartesian3,k=new B.OrientedBoundingBox;function o(n,e,t,r,i){var a=g.Cartesian3.subtract(n,e,s),o=g.Cartesian3.dot(t,a),u=g.Cartesian3.dot(r,a);return g.Cartesian2.fromElements(o,u,i)}e.validOutline=function(n){x.Check.defined("positions",n);var e=B.OrientedBoundingBox.fromPoints(n,k).halfAxes,t=h.Matrix3.getColumn(e,0,P),r=h.Matrix3.getColumn(e,1,p),i=h.Matrix3.getColumn(e,2,M),a=g.Cartesian3.magnitude(t),o=g.Cartesian3.magnitude(r),u=g.Cartesian3.magnitude(i);return!(0===a&&(0===o||0===u)||0===o&&0===u)},e.computeProjectTo2DArguments=function(n,e,t,r){x.Check.defined("positions",n),x.Check.defined("centerResult",e),x.Check.defined("planeAxis1Result",t),x.Check.defined("planeAxis2Result",r);var i,a,o=B.OrientedBoundingBox.fromPoints(n,k),u=o.halfAxes,s=h.Matrix3.getColumn(u,0,P),c=h.Matrix3.getColumn(u,1,p),d=h.Matrix3.getColumn(u,2,M),C=g.Cartesian3.magnitude(s),l=g.Cartesian3.magnitude(c),m=g.Cartesian3.magnitude(d),f=Math.min(C,l,m);return(0!==C||0!==l&&0!==m)&&(0!==l||0!==m)&&(f!==l&&f!==m||(i=s),f===C?i=c:f===m&&(a=c),f!==C&&f!==l||(a=d),g.Cartesian3.normalize(i,t),g.Cartesian3.normalize(a,r),g.Cartesian3.clone(o.center,e),!0)},e.createProjectPointsTo2DFunction=function(r,i,a){return function(n){for(var e=new Array(n.length),t=0;t<n.length;t++)e[t]=o(n[t],r,i,a);return e}},e.createProjectPointTo2DFunction=function(t,r,i){return function(n,e){return o(n,t,r,i,e)}},n.CoplanarPolygonGeometryLibrary=e});
//# sourceMappingURL=CoplanarPolygonGeometryLibrary-8ac176c8.js.map
