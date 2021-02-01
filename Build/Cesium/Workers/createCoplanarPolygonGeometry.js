define(["./arrayRemoveDuplicates-b5ccac6b","./BoundingRectangle-9d91ffef","./Transforms-c00dcfdd","./Cartesian2-15709417","./Check-6c0211bc","./ComponentDatatype-a26dd044","./CoplanarPolygonGeometryLibrary-8ac176c8","./when-54c2dc71","./GeometryAttribute-c2f3a6a0","./GeometryAttributes-4fcfcf40","./GeometryInstance-2f94f67c","./GeometryPipeline-31fd0b9c","./IndexDatatype-eaebd63b","./Math-fbfbe3b1","./PolygonGeometryLibrary-6a01edff","./PolygonPipeline-5326ae1a","./VertexFormat-4d8b817a","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./OrientedBoundingBox-c277851a","./EllipsoidTangentPlane-989039a6","./IntersectionTests-9d9af9db","./Plane-ff99a7c3","./AttributeCompression-42df7d39","./EncodedCartesian3-8590615c","./ArcType-dc1c5aee","./EllipsoidRhumbLine-281c49be"],function(w,e,V,R,l,I,A,c,M,H,F,G,B,O,L,z,p,t,a,n,r,o,i,s,y,u,m){"use strict";var S=new R.Cartesian3,E=new e.BoundingRectangle,N=new R.Cartesian2,Q=new R.Cartesian2,k=new R.Cartesian3,T=new R.Cartesian3,D=new R.Cartesian3,_=new R.Cartesian3,j=new R.Cartesian3,U=new R.Cartesian3,Y=new V.Quaternion,q=new V.Matrix3,J=new V.Matrix3,W=new R.Cartesian3;function Z(e,t,a,n,r,o,i,s){var l=e.positions,c=z.PolygonPipeline.triangulate(e.positions2D,e.holes);c.length<3&&(c=[0,1,2]);var p=B.IndexDatatype.createTypedArray(l.length,c.length);p.set(c);var y=q;if(0!==n){var u=V.Quaternion.fromAxisAngle(o,n,Y);if(y=V.Matrix3.fromQuaternion(u,y),t.tangent||t.bitangent){u=V.Quaternion.fromAxisAngle(o,-n,Y);var m=V.Matrix3.fromQuaternion(u,J);i=R.Cartesian3.normalize(V.Matrix3.multiplyByVector(m,i,i),i),t.bitangent&&(s=R.Cartesian3.normalize(R.Cartesian3.cross(o,i,s),s))}}else y=V.Matrix3.clone(V.Matrix3.IDENTITY,y);var d=Q;t.st&&(d.x=a.x,d.y=a.y);for(var g=l.length,f=3*g,b=new Float64Array(f),h=t.normal?new Float32Array(f):void 0,v=t.tangent?new Float32Array(f):void 0,C=t.bitangent?new Float32Array(f):void 0,x=t.st?new Float32Array(2*g):void 0,P=0,w=0,A=0,F=0,G=0,L=0;L<g;L++){var E=l[L];if(b[P++]=E.x,b[P++]=E.y,b[P++]=E.z,t.st){var k=r(V.Matrix3.multiplyByVector(y,E,S),N);R.Cartesian2.subtract(k,d,k);var T=O.CesiumMath.clamp(k.x/a.width,0,1),D=O.CesiumMath.clamp(k.y/a.height,0,1);x[G++]=T,x[G++]=D}t.normal&&(h[w++]=o.x,h[w++]=o.y,h[w++]=o.z),t.tangent&&(v[F++]=i.x,v[F++]=i.y,v[F++]=i.z),t.bitangent&&(C[A++]=s.x,C[A++]=s.y,C[A++]=s.z)}var _=new H.GeometryAttributes;return t.position&&(_.position=new M.GeometryAttribute({componentDatatype:I.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:b})),t.normal&&(_.normal=new M.GeometryAttribute({componentDatatype:I.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h})),t.tangent&&(_.tangent=new M.GeometryAttribute({componentDatatype:I.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:v})),t.bitangent&&(_.bitangent=new M.GeometryAttribute({componentDatatype:I.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C})),t.st&&(_.st=new M.GeometryAttribute({componentDatatype:I.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:x})),new M.Geometry({attributes:_,indices:p,primitiveType:M.PrimitiveType.TRIANGLES})}function d(e){var t=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).polygonHierarchy;l.Check.defined("options.polygonHierarchy",t);var a=c.defaultValue(e.vertexFormat,p.VertexFormat.DEFAULT);this._vertexFormat=p.VertexFormat.clone(a),this._polygonHierarchy=t,this._stRotation=c.defaultValue(e.stRotation,0),this._ellipsoid=R.Ellipsoid.clone(c.defaultValue(e.ellipsoid,R.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=L.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+p.VertexFormat.packedLength+R.Ellipsoid.packedLength+2}d.fromPositions=function(e){return e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT),l.Check.defined("options.positions",e.positions),new d({polygonHierarchy:{positions:e.positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},d.pack=function(e,t,a){return l.Check.typeOf.object("value",e),l.Check.defined("array",t),a=c.defaultValue(a,0),a=L.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,a),R.Ellipsoid.pack(e._ellipsoid,t,a),a+=R.Ellipsoid.packedLength,p.VertexFormat.pack(e._vertexFormat,t,a),a+=p.VertexFormat.packedLength,t[a++]=e._stRotation,t[a]=e.packedLength,t};var g=R.Ellipsoid.clone(R.Ellipsoid.UNIT_SPHERE),f=new p.VertexFormat,b={polygonHierarchy:{}};return d.unpack=function(e,t,a){l.Check.defined("array",e),t=c.defaultValue(t,0);var n=L.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=n.startingIndex,delete n.startingIndex;var r=R.Ellipsoid.unpack(e,t,g);t+=R.Ellipsoid.packedLength;var o=p.VertexFormat.unpack(e,t,f);t+=p.VertexFormat.packedLength;var i=e[t++],s=e[t];return c.defined(a)||(a=new d(b)),a._polygonHierarchy=n,a._ellipsoid=R.Ellipsoid.clone(r,a._ellipsoid),a._vertexFormat=p.VertexFormat.clone(o,a._vertexFormat),a._stRotation=i,a.packedLength=s,a},d.createGeometry=function(e){var t=e._vertexFormat,a=e._polygonHierarchy,n=e._stRotation,r=a.positions;if(!((r=w.arrayRemoveDuplicates(r,R.Cartesian3.equalsEpsilon,!0)).length<3)){var o=k,i=T,s=D,l=j,c=U;if(A.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(r,_,l,c)){if(o=R.Cartesian3.cross(l,c,o),o=R.Cartesian3.normalize(o,o),!R.Cartesian3.equalsEpsilon(_,R.Cartesian3.ZERO,O.CesiumMath.EPSILON6)){var p=e._ellipsoid.geodeticSurfaceNormal(_,W);R.Cartesian3.dot(o,p)<0&&(o=R.Cartesian3.negate(o,o),l=R.Cartesian3.negate(l,l))}var y=A.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(_,l,c),u=A.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(_,l,c);t.tangent&&(i=R.Cartesian3.clone(l,i)),t.bitangent&&(s=R.Cartesian3.clone(c,s));var m=L.PolygonGeometryLibrary.polygonsFromHierarchy(a,y,!1),d=m.hierarchy,g=m.polygons;if(0!==d.length){r=d[0].outerRing;for(var f=V.BoundingSphere.fromPoints(r),b=L.PolygonGeometryLibrary.computeBoundingRectangle(o,u,r,n,E),h=[],v=0;v<g.length;v++){var C=new F.GeometryInstance({geometry:Z(g[v],t,b,n,u,o,i,s)});h.push(C)}var x=G.GeometryPipeline.combineInstances(h)[0];x.attributes.position.values=new Float64Array(x.attributes.position.values),x.indices=B.IndexDatatype.createTypedArray(x.attributes.position.values.length/3,x.indices);var P=x.attributes;return t.position||delete P.position,new M.Geometry({attributes:P,indices:x.indices,primitiveType:x.primitiveType,boundingSphere:f})}}}},function(e,t){return c.defined(t)&&(e=d.unpack(e,t)),d.createGeometry(e)}});
//# sourceMappingURL=createCoplanarPolygonGeometry.js.map
