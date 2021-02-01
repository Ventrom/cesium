define(["./EllipsoidTangentPlane-989039a6","./Transforms-c00dcfdd","./Cartesian2-15709417","./when-54c2dc71","./TerrainEncoding-e4132b66","./Math-fbfbe3b1","./OrientedBoundingBox-c277851a","./RuntimeError-2109023a","./WebMercatorProjection-0e9a0efb","./createTaskProcessorWorker","./Check-6c0211bc","./IntersectionTests-9d9af9db","./Plane-ff99a7c3","./AttributeCompression-42df7d39","./ComponentDatatype-a26dd044","./WebGLConstants-76bb35d1"],function(Ft,Ot,Yt,kt,Ut,Vt,Ht,Lt,Dt,t,e,i,a,n,r,o){"use strict";var Gt=Uint16Array.BYTES_PER_ELEMENT,jt=Int32Array.BYTES_PER_ELEMENT,zt=Uint32Array.BYTES_PER_ELEMENT,qt=Float32Array.BYTES_PER_ELEMENT,Jt=Float64Array.BYTES_PER_ELEMENT;function Kt(t,e,i){i=kt.defaultValue(i,Vt.CesiumMath);for(var a=t.length,n=0;n<a;++n)if(i.equalsEpsilon(t[n],e,Vt.CesiumMath.EPSILON12))return n;return-1}var Qt=new Yt.Cartographic,Xt=new Yt.Cartesian3,Zt=new Yt.Cartesian3,$t=new Yt.Cartesian3,te=new Ot.Matrix4;function ee(t,e,i,a,n,r,o,s,u,h){for(var c=o.length,d=0;d<c;++d){var g=o[d],l=g.cartographic,m=g.index,p=t.length,v=l.longitude,I=l.latitude;I=Vt.CesiumMath.clamp(I,-Vt.CesiumMath.PI_OVER_TWO,Vt.CesiumMath.PI_OVER_TWO);var E=l.height-r.skirtHeight;r.hMin=Math.min(r.hMin,E),Yt.Cartographic.fromRadians(v,I,E,Qt),u&&(Qt.longitude+=s),u?d===c-1?Qt.latitude+=h:0===d&&(Qt.latitude-=h):Qt.latitude+=s;var f=r.ellipsoid.cartographicToCartesian(Qt);t.push(f),e.push(E),i.push(Yt.Cartesian2.clone(i[m])),0<a.length&&a.push(a[m]),Ot.Matrix4.multiplyByPoint(r.toENU,f,Xt);var T=r.minimum,C=r.maximum;Yt.Cartesian3.minimumByComponent(Xt,T,T),Yt.Cartesian3.maximumByComponent(Xt,C,C);var M=r.lastBorderPoint;if(kt.defined(M)){var N=M.index;n.push(N,p-1,p,p,m,N)}r.lastBorderPoint=g}}return t(function(t,e){t.ellipsoid=Yt.Ellipsoid.clone(t.ellipsoid),t.rectangle=Yt.Rectangle.clone(t.rectangle);var i=function(t,e,i,a,n,r,o,s,u,h){var c,d,g,l,m,p;p=kt.defined(a)?(c=a.west,d=a.south,g=a.east,l=a.north,m=a.width,a.height):(c=Vt.CesiumMath.toRadians(n.west),d=Vt.CesiumMath.toRadians(n.south),g=Vt.CesiumMath.toRadians(n.east),l=Vt.CesiumMath.toRadians(n.north),m=Vt.CesiumMath.toRadians(a.width),Vt.CesiumMath.toRadians(a.height));var v,I,E=[d,l],f=[c,g],T=Ot.Transforms.eastNorthUpToFixedFrame(e,i),C=Ot.Matrix4.inverseTransformation(T,te);s&&(v=Dt.WebMercatorProjection.geodeticLatitudeToMercatorAngle(d),I=1/(Dt.WebMercatorProjection.geodeticLatitudeToMercatorAngle(l)-v));var M=new DataView(t),N=Number.POSITIVE_INFINITY,x=Number.NEGATIVE_INFINITY,b=Zt;b.x=Number.POSITIVE_INFINITY,b.y=Number.POSITIVE_INFINITY,b.z=Number.POSITIVE_INFINITY;var S=$t;S.x=Number.NEGATIVE_INFINITY,S.y=Number.NEGATIVE_INFINITY,S.z=Number.NEGATIVE_INFINITY;var w,P,B=0,y=0,A=0;for(P=0;P<4;++P){var R=B;w=M.getUint32(R,!0),R+=zt;var _=Vt.CesiumMath.toRadians(180*M.getFloat64(R,!0));R+=Jt,-1===Kt(f,_)&&f.push(_);var W=Vt.CesiumMath.toRadians(180*M.getFloat64(R,!0));R+=Jt,-1===Kt(E,W)&&E.push(W),R+=2*Jt;var F=M.getInt32(R,!0);R+=jt,y+=F,F=M.getInt32(R,!0),A+=3*F,B+=w+zt}var O=[],Y=[],k=new Array(y),U=new Array(y),V=new Array(y),H=s?new Array(y):[],L=new Array(A),D=[],G=[],j=[],z=[],q=0,J=0;for(P=B=0;P<4;++P){w=M.getUint32(B,!0);var K=B+=zt,Q=Vt.CesiumMath.toRadians(180*M.getFloat64(B,!0));B+=Jt;var X=Vt.CesiumMath.toRadians(180*M.getFloat64(B,!0));B+=Jt;var Z=Vt.CesiumMath.toRadians(180*M.getFloat64(B,!0)),$=.5*Z;B+=Jt;var tt=Vt.CesiumMath.toRadians(180*M.getFloat64(B,!0)),et=.5*tt;B+=Jt;var it=M.getInt32(B,!0);B+=jt;var at=M.getInt32(B,!0);B+=jt,B+=jt;for(var nt=new Array(it),rt=0;rt<it;++rt){var ot=Q+M.getUint8(B++)*Z;Qt.longitude=ot;var st=X+M.getUint8(B++)*tt;Qt.latitude=st;var ut=M.getFloat32(B,!0);if(B+=qt,0!==ut&&ut<h&&(ut*=-Math.pow(2,u)),ut*=6371010*r,Qt.height=ut,-1!==Kt(f,ot)||-1!==Kt(E,st)){var ht=Kt(O,Qt,Yt.Cartographic);if(-1!==ht){nt[rt]=Y[ht];continue}O.push(Yt.Cartographic.clone(Qt)),Y.push(q)}nt[rt]=q,Math.abs(ot-c)<$?D.push({index:q,cartographic:Yt.Cartographic.clone(Qt)}):Math.abs(ot-g)<$?j.push({index:q,cartographic:Yt.Cartographic.clone(Qt)}):Math.abs(st-d)<et?G.push({index:q,cartographic:Yt.Cartographic.clone(Qt)}):Math.abs(st-l)<et&&z.push({index:q,cartographic:Yt.Cartographic.clone(Qt)}),N=Math.min(ut,N),x=Math.max(ut,x),V[q]=ut;var ct=i.cartographicToCartesian(Qt);k[q]=ct,s&&(H[q]=(Dt.WebMercatorProjection.geodeticLatitudeToMercatorAngle(st)-v)*I),Ot.Matrix4.multiplyByPoint(C,ct,Xt),Yt.Cartesian3.minimumByComponent(Xt,b,b),Yt.Cartesian3.maximumByComponent(Xt,S,S);var dt=(ot-c)/(g-c);dt=Vt.CesiumMath.clamp(dt,0,1);var gt=(st-d)/(l-d);gt=Vt.CesiumMath.clamp(gt,0,1),U[q]=new Yt.Cartesian2(dt,gt),++q}for(var lt=3*at,mt=0;mt<lt;++mt,++J)L[J]=nt[M.getUint16(B,!0)],B+=Gt;if(w!==B-K)throw new Lt.RuntimeError("Invalid terrain tile.")}k.length=q,U.length=q,V.length=q,s&&(H.length=q);var pt=q,vt=J,It={hMin:N,lastBorderPoint:void 0,skirtHeight:o,toENU:C,ellipsoid:i,minimum:b,maximum:S};D.sort(function(t,e){return e.cartographic.latitude-t.cartographic.latitude}),G.sort(function(t,e){return t.cartographic.longitude-e.cartographic.longitude}),j.sort(function(t,e){return t.cartographic.latitude-e.cartographic.latitude}),z.sort(function(t,e){return e.cartographic.longitude-t.cartographic.longitude});var Et=1e-5;if(ee(k,V,U,H,L,It,D,-Et*m,!0,-Et*p),ee(k,V,U,H,L,It,G,-Et*p,!1),ee(k,V,U,H,L,It,j,Et*m,!0,Et*p),ee(k,V,U,H,L,It,z,Et*p,!1),0<D.length&&0<z.length){var ft=D[0].index,Tt=pt,Ct=z[z.length-1].index,Mt=k.length-1;L.push(Ct,Mt,Tt,Tt,ft,Ct)}y=k.length;var Nt,xt=Ot.BoundingSphere.fromPoints(k);kt.defined(a)&&(Nt=Ht.OrientedBoundingBox.fromRectangle(a,N,x,i));for(var bt=new Ut.EllipsoidalOccluder(i).computeHorizonCullingPointPossiblyUnderEllipsoid(e,k,N),St=new Ft.AxisAlignedBoundingBox(b,S,e),wt=new Ut.TerrainEncoding(St,It.hMin,x,T,!1,s),Pt=new Float32Array(y*wt.getStride()),Bt=0,yt=0;yt<y;++yt)Bt=wt.encode(Pt,Bt,k[yt],U[yt],V[yt],void 0,H[yt]);var At=D.map(function(t){return t.index}).reverse(),Rt=G.map(function(t){return t.index}).reverse(),_t=j.map(function(t){return t.index}).reverse(),Wt=z.map(function(t){return t.index}).reverse();return Rt.unshift(_t[_t.length-1]),Rt.push(At[0]),Wt.unshift(At[At.length-1]),Wt.push(_t[0]),{vertices:Pt,indices:new Uint16Array(L),maximumHeight:x,minimumHeight:N,encoding:wt,boundingSphere3D:xt,orientedBoundingBox:Nt,occludeePointInScaledSpace:bt,vertexCountWithoutSkirts:pt,indexCountWithoutSkirts:vt,westIndicesSouthToNorth:At,southIndicesEastToWest:Rt,eastIndicesNorthToSouth:_t,northIndicesWestToEast:Wt}}(t.buffer,t.relativeToCenter,t.ellipsoid,t.rectangle,t.nativeRectangle,t.exaggeration,t.skirtHeight,t.includeWebMercatorT,t.negativeAltitudeExponentBias,t.negativeElevationThreshold),a=i.vertices;e.push(a.buffer);var n=i.indices;return e.push(n.buffer),{vertices:a.buffer,indices:n.buffer,numberOfAttributes:i.encoding.getStride(),minimumHeight:i.minimumHeight,maximumHeight:i.maximumHeight,boundingSphere3D:i.boundingSphere3D,orientedBoundingBox:i.orientedBoundingBox,occludeePointInScaledSpace:i.occludeePointInScaledSpace,encoding:i.encoding,vertexCountWithoutSkirts:i.vertexCountWithoutSkirts,indexCountWithoutSkirts:i.indexCountWithoutSkirts,westIndicesSouthToNorth:i.westIndicesSouthToNorth,southIndicesEastToWest:i.southIndicesEastToWest,eastIndicesNorthToSouth:i.eastIndicesNorthToSouth,northIndicesWestToEast:i.northIndicesWestToEast}})});
//# sourceMappingURL=createVerticesFromGoogleEarthEnterpriseBuffer.js.map
