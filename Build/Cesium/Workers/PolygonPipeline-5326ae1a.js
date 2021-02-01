define(["exports","./Cartesian2-15709417","./Check-6c0211bc","./ComponentDatatype-a26dd044","./when-54c2dc71","./EllipsoidRhumbLine-281c49be","./GeometryAttribute-c2f3a6a0","./Math-fbfbe3b1","./WebGLConstants-76bb35d1"],function(e,D,G,W,P,I,B,q,t){"use strict";function n(e,t,n){n=n||2;var r,i,a,u,x,o,s,h=t&&t.length,p=h?t[0]*n:e.length,f=v(e,0,p,n,!0),l=[];if(!f||f.next===f.prev)return l;if(h&&(f=function(e,t,n,r){var i,a,u,x,o,s=[];for(i=0,a=t.length;i<a;i++)u=t[i]*r,x=i<a-1?t[i+1]*r:e.length,(o=v(e,u,x,r,!1))===o.next&&(o.steiner=!0),s.push(b(o));for(s.sort(C),i=0;i<s.length;i++)m(s[i],n),n=c(n,n.next);return n}(e,t,f,n)),e.length>80*n){r=a=e[0],i=u=e[1];for(var y=n;y<p;y+=n)(x=e[y])<r&&(r=x),(o=e[y+1])<i&&(i=o),a<x&&(a=x),u<o&&(u=o);s=0!==(s=Math.max(a-r,u-i))?1/s:0}return d(f,l,n,r,i,s),l}function v(e,t,n,r,i){var a,u;if(i===0<A(e,t,n,r))for(a=t;a<n;a+=r)u=x(a,e[a],e[a+1],u);else for(a=n-r;t<=a;a-=r)u=x(a,e[a],e[a+1],u);return u&&y(u,u.next)&&(S(u),u=u.next),u}function c(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!y(r,r.next)&&0!==E(r.prev,r,r.next))r=r.next;else{if(S(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function d(e,t,n,r,i,a,u){if(e){!u&&a&&function(e,t,n,r){var i=e;for(;null===i.z&&(i.z=g(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next,i!==e;);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,n,r,i,a,u,x,o,s=1;do{for(n=e,a=e=null,u=0;n;){for(u++,r=n,t=x=0;t<s&&(x++,r=r.nextZ);t++);for(o=s;0<x||0<o&&r;)0!==x&&(0===o||!r||n.z<=r.z)?(n=(i=n).nextZ,x--):(r=(i=r).nextZ,o--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,s*=2}while(1<u)}(i)}(e,r,i,a);for(var x,o,s=e;e.prev!==e.next;)if(x=e.prev,o=e.next,a?p(e,r,i,a):h(e))t.push(x.i/n),t.push(e.i/n),t.push(o.i/n),S(e),e=o.next,s=o.next;else if((e=o)===s){u?1===u?d(e=f(c(e),t,n),t,n,r,i,a,2):2===u&&l(e,t,n,r,i,a):d(c(e),t,n,r,i,a,1);break}}}function h(e){var t=e.prev,n=e,r=e.next;if(0<=E(t,n,r))return!1;for(var i=e.next.next;i!==e.prev;){if(w(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&0<=E(i.prev,i,i.next))return!1;i=i.next}return!0}function p(e,t,n,r){var i=e.prev,a=e,u=e.next;if(0<=E(i,a,u))return!1;for(var x=i.x<a.x?i.x<u.x?i.x:u.x:a.x<u.x?a.x:u.x,o=i.y<a.y?i.y<u.y?i.y:u.y:a.y<u.y?a.y:u.y,s=i.x>a.x?i.x>u.x?i.x:u.x:a.x>u.x?a.x:u.x,h=i.y>a.y?i.y>u.y?i.y:u.y:a.y>u.y?a.y:u.y,p=g(x,o,t,n,r),f=g(s,h,t,n,r),l=e.prevZ,y=e.nextZ;l&&l.z>=p&&y&&y.z<=f;){if(l!==e.prev&&l!==e.next&&w(i.x,i.y,a.x,a.y,u.x,u.y,l.x,l.y)&&0<=E(l.prev,l,l.next))return!1;if(l=l.prevZ,y!==e.prev&&y!==e.next&&w(i.x,i.y,a.x,a.y,u.x,u.y,y.x,y.y)&&0<=E(y.prev,y,y.next))return!1;y=y.nextZ}for(;l&&l.z>=p;){if(l!==e.prev&&l!==e.next&&w(i.x,i.y,a.x,a.y,u.x,u.y,l.x,l.y)&&0<=E(l.prev,l,l.next))return!1;l=l.prevZ}for(;y&&y.z<=f;){if(y!==e.prev&&y!==e.next&&w(i.x,i.y,a.x,a.y,u.x,u.y,y.x,y.y)&&0<=E(y.prev,y,y.next))return!1;y=y.nextZ}return!0}function f(e,t,n){var r=e;do{var i=r.prev,a=r.next.next;!y(i,a)&&M(i,r,r.next,a)&&Z(i,a)&&Z(a,i)&&(t.push(i.i/n),t.push(r.i/n),t.push(a.i/n),S(r),S(r.next),r=e=a),r=r.next}while(r!==e);return c(r)}function l(e,t,n,r,i,a){var u,x,o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&(x=s,(u=o).next.i!==x.i&&u.prev.i!==x.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&M(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(u,x)&&(Z(u,x)&&Z(x,u)&&function(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;for(;n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next,n!==e;);return r}(u,x)&&(E(u.prev,u,x.prev)||E(u,x.prev,x))||y(u,x)&&0<E(u.prev,u,u.next)&&0<E(x.prev,x,x.next)))){var h=O(o,s);return o=c(o,o.next),h=c(h,h.next),d(o,t,n,r,i,a),void d(h,t,n,r,i,a)}s=s.next}o=o.next}while(o!==e)}function C(e,t){return e.x-t.x}function m(e,t){if(t=function(e,t){var n,r=t,i=e.x,a=e.y,u=-1/0;do{if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){var x=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(x<=i&&u<x){if((u=x)===i){if(a===r.y)return r;if(a===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!n)return null;if(i===u)return n;var o,s=n,h=n.x,p=n.y,f=1/0;r=n;for(;i>=r.x&&r.x>=h&&i!==r.x&&w(a<p?i:u,a,h,p,a<p?u:i,a,r.x,r.y)&&(o=Math.abs(a-r.y)/(i-r.x),Z(r,e)&&(o<f||o===f&&(r.x>n.x||r.x===n.x&&(y=r,E((l=n).prev,l,y.prev)<0&&E(y.next,l,l.next)<0)))&&(n=r,f=o)),r=r.next,r!==s;);var l,y;return n}(e,t)){var n=O(t,e);c(n,n.next)}}function g(e,t,n,r,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function b(e){for(var t=e,n=e;(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),(t=t.next)!==e;);return n}function w(e,t,n,r,i,a,u,x){return 0<=(i-u)*(t-x)-(e-u)*(a-x)&&0<=(e-u)*(r-x)-(n-u)*(t-x)&&0<=(n-u)*(a-x)-(i-u)*(r-x)}function E(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function y(e,t){return e.x===t.x&&e.y===t.y}function M(e,t,n,r){var i=s(E(e,t,n)),a=s(E(e,t,r)),u=s(E(n,r,e)),x=s(E(n,r,t));return i!==a&&u!==x||(!(0!==i||!o(e,n,t))||(!(0!==a||!o(e,r,t))||(!(0!==u||!o(n,e,r))||!(0!==x||!o(n,t,r)))))}function o(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function s(e){return 0<e?1:e<0?-1:0}function Z(e,t){return E(e.prev,e,e.next)<0?0<=E(e,t,e.next)&&0<=E(e,e.prev,t):E(e,t,e.prev)<0||E(e,e.next,t)<0}function O(e,t){var n=new u(e.i,e.x,e.y),r=new u(t.i,t.x,t.y),i=e.next,a=t.prev;return(e.next=t).prev=e,(n.next=i).prev=n,(r.next=n).prev=r,(a.next=r).prev=a,r}function x(e,t,n,r){var i=new u(e,t,n);return r?(i.next=r.next,(i.prev=r).next.prev=i,r.next=i):(i.prev=i).next=i,i}function S(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function u(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A(e,t,n,r){for(var i=0,a=t,u=n-r;a<n;a+=r)i+=(e[u]-e[a])*(e[a+1]+e[u+1]),u=a;return i}n.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,u=Math.abs(A(e,0,a,n));if(i)for(var x=0,o=t.length;x<o;x++){var s=t[x]*n,h=x<o-1?t[x+1]*n:e.length;u-=Math.abs(A(e,s,h,n))}var p=0;for(x=0;x<r.length;x+=3){var f=r[x]*n,l=r[x+1]*n,y=r[x+2]*n;p+=Math.abs((e[f]-e[y])*(e[l+1]-e[f+1])-(e[f]-e[l])*(e[y+1]-e[f+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},n.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var u=0;u<t;u++)n.vertices.push(e[i][a][u]);0<i&&(r+=e[i-1].length,n.holes.push(r))}return n};var r={CLOCKWISE:t.WebGLConstants.CW,COUNTER_CLOCKWISE:t.WebGLConstants.CCW,validate:function(e){return e===r.CLOCKWISE||e===r.COUNTER_CLOCKWISE}},i=Object.freeze(r),z=new D.Cartesian3,R=new D.Cartesian3,a={computeArea2D:function(e){G.Check.defined("positions",e),G.Check.typeOf.number.greaterThanOrEquals("positions.length",e.length,3);for(var t=e.length,n=0,r=t-1,i=0;i<t;r=i++){var a=e[r],u=e[i];n+=a.x*u.y-u.x*a.y}return.5*n},computeWindingOrder2D:function(e){return 0<a.computeArea2D(e)?i.COUNTER_CLOCKWISE:i.CLOCKWISE},triangulate:function(e,t){return G.Check.defined("positions",e),n(D.Cartesian2.packArray(e),t,2)}},N=new D.Cartesian3,U=new D.Cartesian3,_=new D.Cartesian3,L=new D.Cartesian3,k=new D.Cartesian3,T=new D.Cartesian3,K=new D.Cartesian3;a.computeSubdivision=function(e,t,n,r){r=P.defaultValue(r,q.CesiumMath.RADIANS_PER_DEGREE),G.Check.typeOf.object("ellipsoid",e),G.Check.defined("positions",t),G.Check.defined("indices",n),G.Check.typeOf.number.greaterThanOrEquals("indices.length",n.length,3),G.Check.typeOf.number.equals("indices.length % 3","0",n.length%3,0),G.Check.typeOf.number.greaterThan("granularity",r,0);var i,a=n.slice(0),u=t.length,x=new Array(3*u),o=0;for(i=0;i<u;i++){var s=t[i];x[o++]=s.x,x[o++]=s.y,x[o++]=s.z}for(var h=[],p={},f=e.maximumRadius,l=q.CesiumMath.chordLength(r,f),y=l*l;0<a.length;){var v,c,d=a.pop(),C=a.pop(),m=a.pop(),g=D.Cartesian3.fromArray(x,3*m,N),b=D.Cartesian3.fromArray(x,3*C,U),w=D.Cartesian3.fromArray(x,3*d,_),E=D.Cartesian3.multiplyByScalar(D.Cartesian3.normalize(g,L),f,L),M=D.Cartesian3.multiplyByScalar(D.Cartesian3.normalize(b,k),f,k),Z=D.Cartesian3.multiplyByScalar(D.Cartesian3.normalize(w,T),f,T),O=D.Cartesian3.magnitudeSquared(D.Cartesian3.subtract(E,M,K)),S=D.Cartesian3.magnitudeSquared(D.Cartesian3.subtract(M,Z,K)),A=D.Cartesian3.magnitudeSquared(D.Cartesian3.subtract(Z,E,K)),z=Math.max(O,S,A);y<z?O===z?(i=p[v=Math.min(m,C)+" "+Math.max(m,C)],P.defined(i)||(c=D.Cartesian3.add(g,b,K),D.Cartesian3.multiplyByScalar(c,.5,c),x.push(c.x,c.y,c.z),i=x.length/3-1,p[v]=i),a.push(m,i,d),a.push(i,C,d)):S===z?(i=p[v=Math.min(C,d)+" "+Math.max(C,d)],P.defined(i)||(c=D.Cartesian3.add(b,w,K),D.Cartesian3.multiplyByScalar(c,.5,c),x.push(c.x,c.y,c.z),i=x.length/3-1,p[v]=i),a.push(C,i,m),a.push(i,d,m)):A===z&&(i=p[v=Math.min(d,m)+" "+Math.max(d,m)],P.defined(i)||(c=D.Cartesian3.add(w,g,K),D.Cartesian3.multiplyByScalar(c,.5,c),x.push(c.x,c.y,c.z),i=x.length/3-1,p[v]=i),a.push(d,i,C),a.push(i,m,C)):(h.push(m),h.push(C),h.push(d))}return new B.Geometry({attributes:{position:new B.GeometryAttribute({componentDatatype:W.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:x})},indices:h,primitiveType:B.PrimitiveType.TRIANGLES})};var V=new D.Cartographic,j=new D.Cartographic,F=new D.Cartographic,H=new D.Cartographic;a.computeRhumbLineSubdivision=function(e,t,n,r){r=P.defaultValue(r,q.CesiumMath.RADIANS_PER_DEGREE),G.Check.typeOf.object("ellipsoid",e),G.Check.defined("positions",t),G.Check.defined("indices",n),G.Check.typeOf.number.greaterThanOrEquals("indices.length",n.length,3),G.Check.typeOf.number.equals("indices.length % 3","0",n.length%3,0),G.Check.typeOf.number.greaterThan("granularity",r,0);var i,a=n.slice(0),u=t.length,x=new Array(3*u),o=0;for(i=0;i<u;i++){var s=t[i];x[o++]=s.x,x[o++]=s.y,x[o++]=s.z}for(var h=[],p={},f=e.maximumRadius,l=q.CesiumMath.chordLength(r,f),y=new I.EllipsoidRhumbLine(void 0,void 0,e),v=new I.EllipsoidRhumbLine(void 0,void 0,e),c=new I.EllipsoidRhumbLine(void 0,void 0,e);0<a.length;){var d=a.pop(),C=a.pop(),m=a.pop(),g=D.Cartesian3.fromArray(x,3*m,N),b=D.Cartesian3.fromArray(x,3*C,U),w=D.Cartesian3.fromArray(x,3*d,_),E=e.cartesianToCartographic(g,V),M=e.cartesianToCartographic(b,j),Z=e.cartesianToCartographic(w,F);y.setEndPoints(E,M);var O=y.surfaceDistance;v.setEndPoints(M,Z);var S=v.surfaceDistance;c.setEndPoints(Z,E);var A,z,R,L,k=c.surfaceDistance,T=Math.max(O,S,k);l<T?O===T?(i=p[A=Math.min(m,C)+" "+Math.max(m,C)],P.defined(i)||(z=y.interpolateUsingFraction(.5,H),R=.5*(E.height+M.height),L=D.Cartesian3.fromRadians(z.longitude,z.latitude,R,e,K),x.push(L.x,L.y,L.z),i=x.length/3-1,p[A]=i),a.push(m,i,d),a.push(i,C,d)):S===T?(i=p[A=Math.min(C,d)+" "+Math.max(C,d)],P.defined(i)||(z=v.interpolateUsingFraction(.5,H),R=.5*(M.height+Z.height),L=D.Cartesian3.fromRadians(z.longitude,z.latitude,R,e,K),x.push(L.x,L.y,L.z),i=x.length/3-1,p[A]=i),a.push(C,i,m),a.push(i,d,m)):k===T&&(i=p[A=Math.min(d,m)+" "+Math.max(d,m)],P.defined(i)||(z=c.interpolateUsingFraction(.5,H),R=.5*(Z.height+E.height),L=D.Cartesian3.fromRadians(z.longitude,z.latitude,R,e,K),x.push(L.x,L.y,L.z),i=x.length/3-1,p[A]=i),a.push(d,i,C),a.push(i,m,C)):(h.push(m),h.push(C),h.push(d))}return new B.Geometry({attributes:{position:new B.GeometryAttribute({componentDatatype:W.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:x})},indices:h,primitiveType:B.PrimitiveType.TRIANGLES})},a.scaleToGeodeticHeight=function(e,t,n,r){n=P.defaultValue(n,D.Ellipsoid.WGS84);var i=z,a=R;if(t=P.defaultValue(t,0),r=P.defaultValue(r,!0),P.defined(e))for(var u=e.length,x=0;x<u;x+=3)D.Cartesian3.fromArray(e,x,a),r&&(a=n.scaleToGeodeticSurface(a,a)),0!==t&&(i=n.geodeticSurfaceNormal(a,i),D.Cartesian3.multiplyByScalar(i,t,i),D.Cartesian3.add(a,i,a)),e[x]=a.x,e[x+1]=a.y,e[x+2]=a.z;return e},e.PolygonPipeline=a,e.WindingOrder=i});
//# sourceMappingURL=PolygonPipeline-5326ae1a.js.map
