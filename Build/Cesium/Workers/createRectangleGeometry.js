define(["./when-54c2dc71","./Cartesian2-15709417","./GeometryOffsetAttribute-b31a3ff4","./Transforms-c00dcfdd","./Check-6c0211bc","./ComponentDatatype-a26dd044","./GeometryAttribute-c2f3a6a0","./GeometryAttributes-4fcfcf40","./GeometryInstance-2f94f67c","./GeometryPipeline-31fd0b9c","./IndexDatatype-eaebd63b","./Math-fbfbe3b1","./PolygonPipeline-5326ae1a","./RectangleGeometryLibrary-af7be5c2","./VertexFormat-4d8b817a","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./AttributeCompression-42df7d39","./EncodedCartesian3-8590615c","./IntersectionTests-9d9af9db","./Plane-ff99a7c3","./EllipsoidRhumbLine-281c49be"],function(mt,pt,dt,H,d,gt,yt,r,ft,ht,vt,bt,_t,z,At,t,e,a,n,o,i,s){"use strict";var wt=new pt.Cartesian3,xt=new pt.Cartesian3,Ct=new pt.Cartesian3,Rt=new pt.Cartesian3,_=new pt.Rectangle,B=new pt.Cartesian2,A=new H.BoundingSphere,w=new H.BoundingSphere;function Et(t,e){var a=new yt.Geometry({attributes:new r.GeometryAttributes,primitiveType:yt.PrimitiveType.TRIANGLES});return a.attributes.position=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(a.attributes.normal=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(a.attributes.tangent=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(a.attributes.bitangent=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.bitangents})),a}var Ft=new pt.Cartesian3,Gt=new pt.Cartesian3;function Pt(t,e){var a=t._vertexFormat,r=t._ellipsoid,n=e.height,o=e.width,i=e.northCap,s=e.southCap,l=0,u=n,c=n,m=0;i&&(c-=l=1,m+=1),s&&(u-=1,c-=1,m+=1),m+=o*c;for(var p=a.position?new Float64Array(3*m):void 0,d=a.st?new Float32Array(2*m):void 0,g=0,y=0,f=wt,h=B,v=Number.MAX_VALUE,b=Number.MAX_VALUE,_=-Number.MAX_VALUE,A=-Number.MAX_VALUE,w=l;w<u;++w)for(var x=0;x<o;++x)z.RectangleGeometryLibrary.computePosition(e,r,a.st,w,x,f,h),p[g++]=f.x,p[g++]=f.y,p[g++]=f.z,a.st&&(d[y++]=h.x,d[y++]=h.y,v=Math.min(v,h.x),b=Math.min(b,h.y),_=Math.max(_,h.x),A=Math.max(A,h.y));if(i&&(z.RectangleGeometryLibrary.computePosition(e,r,a.st,0,0,f,h),p[g++]=f.x,p[g++]=f.y,p[g++]=f.z,a.st&&(d[y++]=h.x,d[y++]=h.y,v=h.x,b=h.y,_=h.x,A=h.y)),s&&(z.RectangleGeometryLibrary.computePosition(e,r,a.st,n-1,0,f,h),p[g++]=f.x,p[g++]=f.y,p[g]=f.z,a.st&&(d[y++]=h.x,d[y]=h.y,v=Math.min(v,h.x),b=Math.min(b,h.y),_=Math.max(_,h.x),A=Math.max(A,h.y))),a.st&&(v<0||b<0||1<_||1<A))for(var C=0;C<d.length;C+=2)d[C]=(d[C]-v)/(_-v),d[C+1]=(d[C+1]-b)/(A-b);var R=function(t,e,a,r){var n=t.length,o=e.normal?new Float32Array(n):void 0,i=e.tangent?new Float32Array(n):void 0,s=e.bitangent?new Float32Array(n):void 0,l=0,u=Rt,c=Ct,m=xt;if(e.normal||e.tangent||e.bitangent)for(var p=0;p<n;p+=3){var d=pt.Cartesian3.fromArray(t,p,wt),g=l+1,y=l+2;m=a.geodeticSurfaceNormal(d,m),(e.tangent||e.bitangent)&&(pt.Cartesian3.cross(pt.Cartesian3.UNIT_Z,m,c),H.Matrix3.multiplyByVector(r,c,c),pt.Cartesian3.normalize(c,c),e.bitangent&&pt.Cartesian3.normalize(pt.Cartesian3.cross(m,c,u),u)),e.normal&&(o[l]=m.x,o[g]=m.y,o[y]=m.z),e.tangent&&(i[l]=c.x,i[g]=c.y,i[y]=c.z),e.bitangent&&(s[l]=u.x,s[g]=u.y,s[y]=u.z),l+=3}return Et(e,{positions:t,normals:o,tangents:i,bitangents:s})}(p,a,r,e.tangentRotationMatrix),E=6*(o-1)*(c-1);i&&(E+=3*(o-1)),s&&(E+=3*(o-1));var F,G=vt.IndexDatatype.createTypedArray(m,E),P=0,V=0;for(F=0;F<c-1;++F){for(var D=0;D<o-1;++D){var L=P,M=L+o,O=M+1,T=L+1;G[V++]=L,G[V++]=M,G[V++]=T,G[V++]=T,G[V++]=M,G[V++]=O,++P}++P}if(i||s){var N,k,S=m-1,I=m-1;if(i&&s&&(S=m-2),P=0,i)for(F=0;F<o-1;F++)k=(N=P)+1,G[V++]=S,G[V++]=N,G[V++]=k,++P;if(s)for(P=(c-1)*o,F=0;F<o-1;F++)k=(N=P)+1,G[V++]=N,G[V++]=I,G[V++]=k,++P}return R.indices=G,a.st&&(R.attributes.st=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:d})),R}function Vt(t,e,a,r,n){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a+2],t[e++]=n[a],t[e++]=n[a+1],t[e]=n[a+2],t}function Dt(t,e,a,r){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a],t[e]=r[a+1],t}var Lt=new At.VertexFormat;function x(t,e){var a,r=t._shadowVolume,n=t._offsetAttribute,o=t._vertexFormat,i=t._extrudedHeight,s=t._surfaceHeight,l=t._ellipsoid,u=e.height,c=e.width;if(r){var m=At.VertexFormat.clone(o,Lt);m.normal=!0,t._vertexFormat=m}var p=Pt(t,e);r&&(t._vertexFormat=o);var d=_t.PolygonPipeline.scaleToGeodeticHeight(p.attributes.position.values,s,l,!1),g=(d=new Float64Array(d)).length,y=2*g,f=new Float64Array(y);f.set(d);var h=_t.PolygonPipeline.scaleToGeodeticHeight(p.attributes.position.values,i,l);f.set(h,g),p.attributes.position.values=f;var v,b,_,A=o.normal?new Float32Array(y):void 0,w=o.tangent?new Float32Array(y):void 0,x=o.bitangent?new Float32Array(y):void 0,C=o.st?new Float32Array(y/3*2):void 0;if(o.normal){for(b=p.attributes.normal.values,A.set(b),a=0;a<g;a++)b[a]=-b[a];A.set(b,g),p.attributes.normal.values=A}if(r){b=p.attributes.normal.values,o.normal||(p.attributes.normal=void 0);var R=new Float32Array(y);for(a=0;a<g;a++)b[a]=-b[a];R.set(b,g),p.attributes.extrudeDirection=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R})}var E=mt.defined(n);if(E){var F=g/3*2,G=new Uint8Array(F);G=n===dt.GeometryOffsetAttribute.TOP?dt.arrayFill(G,1,0,F/2):(_=n===dt.GeometryOffsetAttribute.NONE?0:1,dt.arrayFill(G,_)),p.attributes.applyOffset=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:G})}if(o.tangent){var P=p.attributes.tangent.values;for(w.set(P),a=0;a<g;a++)P[a]=-P[a];w.set(P,g),p.attributes.tangent.values=w}if(o.bitangent){var V=p.attributes.bitangent.values;x.set(V),x.set(V,g),p.attributes.bitangent.values=x}o.st&&(v=p.attributes.st.values,C.set(v),C.set(v,g/3*2),p.attributes.st.values=C);var D=p.indices,L=D.length,M=g/3,O=vt.IndexDatatype.createTypedArray(y/3,2*L);for(O.set(D),a=0;a<L;a+=3)O[a+L]=D[a+2]+M,O[a+1+L]=D[a+1]+M,O[a+2+L]=D[a]+M;p.indices=O;var T=e.northCap,N=e.southCap,k=u,S=2,I=0,H=4,z=4;T&&(S-=1,k-=1,I+=1,H-=2,z-=1),N&&(S-=1,k-=1,I+=1,H-=2,z-=1);var B=2*((I+=S*c+2*k-H)+z),U=new Float64Array(3*B),q=r?new Float32Array(3*B):void 0,Y=E?new Uint8Array(B):void 0,j=o.st?new Float32Array(2*B):void 0,X=n===dt.GeometryOffsetAttribute.TOP;E&&!X&&(_=n===dt.GeometryOffsetAttribute.ALL?1:0,Y=dt.arrayFill(Y,_));var Q,W=0,J=0,Z=0,K=0,$=c*k;for(a=0;a<$;a+=c)U=Vt(U,W,Q=3*a,d,h),W+=6,o.st&&(j=Dt(j,J,2*a,v),J+=4),r&&(Z+=3,q[Z++]=b[Q],q[Z++]=b[Q+1],q[Z++]=b[Q+2]),X&&(Y[K++]=1,K+=1);if(N){var tt=T?$+1:$;for(Q=3*tt,a=0;a<2;a++)U=Vt(U,W,Q,d,h),W+=6,o.st&&(j=Dt(j,J,2*tt,v),J+=4),r&&(Z+=3,q[Z++]=b[Q],q[Z++]=b[Q+1],q[Z++]=b[Q+2]),X&&(Y[K++]=1,K+=1)}else for(a=$-c;a<$;a++)U=Vt(U,W,Q=3*a,d,h),W+=6,o.st&&(j=Dt(j,J,2*a,v),J+=4),r&&(Z+=3,q[Z++]=b[Q],q[Z++]=b[Q+1],q[Z++]=b[Q+2]),X&&(Y[K++]=1,K+=1);for(a=$-1;0<a;a-=c)U=Vt(U,W,Q=3*a,d,h),W+=6,o.st&&(j=Dt(j,J,2*a,v),J+=4),r&&(Z+=3,q[Z++]=b[Q],q[Z++]=b[Q+1],q[Z++]=b[Q+2]),X&&(Y[K++]=1,K+=1);if(T){var et=$;for(Q=3*et,a=0;a<2;a++)U=Vt(U,W,Q,d,h),W+=6,o.st&&(j=Dt(j,J,2*et,v),J+=4),r&&(Z+=3,q[Z++]=b[Q],q[Z++]=b[Q+1],q[Z++]=b[Q+2]),X&&(Y[K++]=1,K+=1)}else for(a=c-1;0<=a;a--)U=Vt(U,W,Q=3*a,d,h),W+=6,o.st&&(j=Dt(j,J,2*a,v),J+=4),r&&(Z+=3,q[Z++]=b[Q],q[Z++]=b[Q+1],q[Z++]=b[Q+2]),X&&(Y[K++]=1,K+=1);var at=function(t,e,a){var r=t.length,n=e.normal?new Float32Array(r):void 0,o=e.tangent?new Float32Array(r):void 0,i=e.bitangent?new Float32Array(r):void 0,s=0,l=0,u=0,c=!0,m=Rt,p=Ct,d=xt;if(e.normal||e.tangent||e.bitangent)for(var g=0;g<r;g+=6){var y=pt.Cartesian3.fromArray(t,g,wt),f=pt.Cartesian3.fromArray(t,(g+6)%r,Ft);if(c){var h=pt.Cartesian3.fromArray(t,(g+3)%r,Gt);pt.Cartesian3.subtract(f,y,f),pt.Cartesian3.subtract(h,y,h),d=pt.Cartesian3.normalize(pt.Cartesian3.cross(h,f,d),d),c=!1}pt.Cartesian3.equalsEpsilon(f,y,bt.CesiumMath.EPSILON10)&&(c=!0),(e.tangent||e.bitangent)&&(m=a.geodeticSurfaceNormal(y,m),e.tangent&&(p=pt.Cartesian3.normalize(pt.Cartesian3.cross(m,d,p),p))),e.normal&&(n[s++]=d.x,n[s++]=d.y,n[s++]=d.z,n[s++]=d.x,n[s++]=d.y,n[s++]=d.z),e.tangent&&(o[l++]=p.x,o[l++]=p.y,o[l++]=p.z,o[l++]=p.x,o[l++]=p.y,o[l++]=p.z),e.bitangent&&(i[u++]=m.x,i[u++]=m.y,i[u++]=m.z,i[u++]=m.x,i[u++]=m.y,i[u++]=m.z)}return Et(e,{positions:t,normals:n,tangents:o,bitangents:i})}(U,o,l);o.st&&(at.attributes.st=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:j})),r&&(at.attributes.extrudeDirection=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:q})),E&&(at.attributes.applyOffset=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:Y}));var rt,nt,ot,it,st=vt.IndexDatatype.createTypedArray(B,6*I);g=U.length/3;var lt=0;for(a=0;a<g-1;a+=2){it=((rt=a)+2)%g;var ut=pt.Cartesian3.fromArray(U,3*rt,Ft),ct=pt.Cartesian3.fromArray(U,3*it,Gt);pt.Cartesian3.equalsEpsilon(ut,ct,bt.CesiumMath.EPSILON10)||(ot=((nt=(rt+1)%g)+2)%g,st[lt++]=rt,st[lt++]=nt,st[lt++]=it,st[lt++]=it,st[lt++]=nt,st[lt++]=ot)}return at.indices=st,(at=ht.GeometryPipeline.combineInstances([new ft.GeometryInstance({geometry:p}),new ft.GeometryInstance({geometry:at})]))[0]}var u=[new pt.Cartesian3,new pt.Cartesian3,new pt.Cartesian3,new pt.Cartesian3],C=new pt.Cartographic,R=new pt.Cartographic;function y(t,e,a,r,n){if(0===a)return pt.Rectangle.clone(t,n);var o=z.RectangleGeometryLibrary.computeOptions(t,e,a,0,_,C),i=o.height,s=o.width,l=u;return z.RectangleGeometryLibrary.computePosition(o,r,!1,0,0,l[0]),z.RectangleGeometryLibrary.computePosition(o,r,!1,0,s-1,l[1]),z.RectangleGeometryLibrary.computePosition(o,r,!1,i-1,0,l[2]),z.RectangleGeometryLibrary.computePosition(o,r,!1,i-1,s-1,l[3]),pt.Rectangle.fromCartesianArray(l,r,n)}function g(t){var e=(t=mt.defaultValue(t,mt.defaultValue.EMPTY_OBJECT)).rectangle;if(d.Check.typeOf.object("rectangle",e),pt.Rectangle.validate(e),e.north<e.south)throw new d.DeveloperError("options.rectangle.north must be greater than or equal to options.rectangle.south");var a=mt.defaultValue(t.height,0),r=mt.defaultValue(t.extrudedHeight,a);this._rectangle=pt.Rectangle.clone(e),this._granularity=mt.defaultValue(t.granularity,bt.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=pt.Ellipsoid.clone(mt.defaultValue(t.ellipsoid,pt.Ellipsoid.WGS84)),this._surfaceHeight=Math.max(a,r),this._rotation=mt.defaultValue(t.rotation,0),this._stRotation=mt.defaultValue(t.stRotation,0),this._vertexFormat=At.VertexFormat.clone(mt.defaultValue(t.vertexFormat,At.VertexFormat.DEFAULT)),this._extrudedHeight=Math.min(a,r),this._shadowVolume=mt.defaultValue(t.shadowVolume,!1),this._workerName="createRectangleGeometry",this._offsetAttribute=t.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}g.packedLength=pt.Rectangle.packedLength+pt.Ellipsoid.packedLength+At.VertexFormat.packedLength+7,g.pack=function(t,e,a){return d.Check.typeOf.object("value",t),d.Check.defined("array",e),a=mt.defaultValue(a,0),pt.Rectangle.pack(t._rectangle,e,a),a+=pt.Rectangle.packedLength,pt.Ellipsoid.pack(t._ellipsoid,e,a),a+=pt.Ellipsoid.packedLength,At.VertexFormat.pack(t._vertexFormat,e,a),a+=At.VertexFormat.packedLength,e[a++]=t._granularity,e[a++]=t._surfaceHeight,e[a++]=t._rotation,e[a++]=t._stRotation,e[a++]=t._extrudedHeight,e[a++]=t._shadowVolume?1:0,e[a]=mt.defaultValue(t._offsetAttribute,-1),e};var f=new pt.Rectangle,h=pt.Ellipsoid.clone(pt.Ellipsoid.UNIT_SPHERE),v={rectangle:f,ellipsoid:h,vertexFormat:Lt,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};g.unpack=function(t,e,a){d.Check.defined("array",t),e=mt.defaultValue(e,0);var r=pt.Rectangle.unpack(t,e,f);e+=pt.Rectangle.packedLength;var n=pt.Ellipsoid.unpack(t,e,h);e+=pt.Ellipsoid.packedLength;var o=At.VertexFormat.unpack(t,e,Lt);e+=At.VertexFormat.packedLength;var i=t[e++],s=t[e++],l=t[e++],u=t[e++],c=t[e++],m=1===t[e++],p=t[e];return mt.defined(a)?(a._rectangle=pt.Rectangle.clone(r,a._rectangle),a._ellipsoid=pt.Ellipsoid.clone(n,a._ellipsoid),a._vertexFormat=At.VertexFormat.clone(o,a._vertexFormat),a._granularity=i,a._surfaceHeight=s,a._rotation=l,a._stRotation=u,a._extrudedHeight=c,a._shadowVolume=m,a._offsetAttribute=-1===p?void 0:p,a):(v.granularity=i,v.height=s,v.rotation=l,v.stRotation=u,v.extrudedHeight=c,v.shadowVolume=m,v.offsetAttribute=-1===p?void 0:p,new g(v))},g.computeRectangle=function(t,e){var a=(t=mt.defaultValue(t,mt.defaultValue.EMPTY_OBJECT)).rectangle;if(d.Check.typeOf.object("rectangle",a),pt.Rectangle.validate(a),a.north<a.south)throw new d.DeveloperError("options.rectangle.north must be greater than or equal to options.rectangle.south");var r=mt.defaultValue(t.granularity,bt.CesiumMath.RADIANS_PER_DEGREE),n=mt.defaultValue(t.ellipsoid,pt.Ellipsoid.WGS84);return y(a,r,mt.defaultValue(t.rotation,0),n,e)};var E=new H.Matrix3,F=new H.Quaternion,G=new pt.Cartographic;g.createGeometry=function(t){if(!bt.CesiumMath.equalsEpsilon(t._rectangle.north,t._rectangle.south,bt.CesiumMath.EPSILON10)&&!bt.CesiumMath.equalsEpsilon(t._rectangle.east,t._rectangle.west,bt.CesiumMath.EPSILON10)){var e=t._rectangle,a=t._ellipsoid,r=t._rotation,n=t._stRotation,o=t._vertexFormat,i=z.RectangleGeometryLibrary.computeOptions(e,t._granularity,r,n,_,C,R),s=E;if(0!==n||0!==r){var l=pt.Rectangle.center(e,G),u=a.geodeticSurfaceNormalCartographic(l,Ft);H.Quaternion.fromAxisAngle(u,-n,F),H.Matrix3.fromQuaternion(F,s)}else H.Matrix3.clone(H.Matrix3.IDENTITY,s);var c,m,p=t._surfaceHeight,d=t._extrudedHeight,g=!bt.CesiumMath.equalsEpsilon(p,d,0,bt.CesiumMath.EPSILON2);if(i.lonScalar=1/t._rectangle.width,i.latScalar=1/t._rectangle.height,i.tangentRotationMatrix=s,e=t._rectangle,g){c=x(t,i);var y=H.BoundingSphere.fromRectangle3D(e,a,p,w),f=H.BoundingSphere.fromRectangle3D(e,a,d,A);m=H.BoundingSphere.union(y,f)}else{if((c=Pt(t,i)).attributes.position.values=_t.PolygonPipeline.scaleToGeodeticHeight(c.attributes.position.values,p,a,!1),mt.defined(t._offsetAttribute)){var h=c.attributes.position.values.length,v=new Uint8Array(h/3),b=t._offsetAttribute===dt.GeometryOffsetAttribute.NONE?0:1;dt.arrayFill(v,b),c.attributes.applyOffset=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:v})}m=H.BoundingSphere.fromRectangle3D(e,a,p)}return o.position||delete c.attributes.position,new yt.Geometry({attributes:c.attributes,indices:c.indices,primitiveType:c.primitiveType,boundingSphere:m,offsetAttribute:t._offsetAttribute})}},g.createShadowVolume=function(t,e,a){var r=t._granularity,n=t._ellipsoid,o=e(r,n),i=a(r,n);return new g({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:n,stRotation:t._stRotation,granularity:r,extrudedHeight:i,height:o,vertexFormat:At.VertexFormat.POSITION_ONLY,shadowVolume:!0})};var b=new pt.Rectangle,P=[new pt.Cartesian2,new pt.Cartesian2,new pt.Cartesian2],V=new yt.Matrix2,D=new pt.Cartographic;return Object.defineProperties(g.prototype,{rectangle:{get:function(){return mt.defined(this._rotatedRectangle)||(this._rotatedRectangle=y(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return mt.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){if(0===t._stRotation)return[0,0,0,1,1,0];var e=pt.Rectangle.clone(t._rectangle,b),a=t._granularity,r=t._ellipsoid,n=y(e,a,t._rotation-t._stRotation,r,b),o=P;o[0].x=n.west,o[0].y=n.south,o[1].x=n.west,o[1].y=n.north,o[2].x=n.east,o[2].y=n.south;for(var i=t.rectangle,s=yt.Matrix2.fromRotation(t._stRotation,V),l=pt.Rectangle.center(i,D),u=0;u<3;++u){var c=o[u];c.x-=l.longitude,c.y-=l.latitude,yt.Matrix2.multiplyByVector(s,c,c),c.x+=l.longitude,c.y+=l.latitude,c.x=(c.x-i.west)/i.width,c.y=(c.y-i.south)/i.height}var m=o[0],p=o[1],d=o[2],g=new Array(6);return pt.Cartesian2.pack(m,g),pt.Cartesian2.pack(p,g,2),pt.Cartesian2.pack(d,g,4),g}(this)),this._textureCoordinateRotationPoints}}}),function(t,e){return mt.defined(e)&&(t=g.unpack(t,e)),t._ellipsoid=pt.Ellipsoid.clone(t._ellipsoid),t._rectangle=pt.Rectangle.clone(t._rectangle),g.createGeometry(t)}});
//# sourceMappingURL=createRectangleGeometry.js.map
