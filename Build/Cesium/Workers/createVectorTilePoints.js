define(["./AttributeCompression-42df7d39","./Cartesian2-15709417","./Math-fbfbe3b1","./createTaskProcessorWorker","./Check-6c0211bc","./when-54c2dc71"],function(v,y,A,a,e,r){"use strict";var M=32767,R=new y.Cartographic,x=new y.Cartesian3,D=new y.Rectangle,E=new y.Ellipsoid,F={min:void 0,max:void 0};return a(function(a,e){var r=new Uint16Array(a.positions);!function(a){a=new Float64Array(a);var e=0;F.min=a[e++],F.max=a[e++],y.Rectangle.unpack(a,e,D),e+=y.Rectangle.packedLength,y.Ellipsoid.unpack(a,e,E)}(a.packedBuffer);var t=D,n=E,i=F.min,s=F.max,o=r.length/3,c=r.subarray(0,o),u=r.subarray(o,2*o),p=r.subarray(2*o,3*o);v.AttributeCompression.zigZagDeltaDecode(c,u,p);for(var f=new Float64Array(r.length),h=0;h<o;++h){var l=c[h],d=u[h],m=p[h],C=A.CesiumMath.lerp(t.west,t.east,l/M),b=A.CesiumMath.lerp(t.south,t.north,d/M),g=A.CesiumMath.lerp(i,s,m/M),w=y.Cartographic.fromRadians(C,b,g,R),k=n.cartographicToCartesian(w,x);y.Cartesian3.pack(k,f,3*h)}return e.push(f.buffer),{positions:f.buffer}})});
//# sourceMappingURL=createVectorTilePoints.js.map
