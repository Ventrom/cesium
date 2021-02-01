define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fbfbe3b1","./WebGLConstants-76bb35d1"],function(e,i,a,E,r){"use strict";var t={UNSIGNED_BYTE:r.WebGLConstants.UNSIGNED_BYTE,UNSIGNED_SHORT:r.WebGLConstants.UNSIGNED_SHORT,UNSIGNED_INT:r.WebGLConstants.UNSIGNED_INT,getSizeInBytes:function(e){switch(e){case t.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case t.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case t.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT}throw new a.DeveloperError("indexDatatype is required and must be a valid IndexDatatype constant.")},fromSizeInBytes:function(e){switch(e){case 2:return t.UNSIGNED_SHORT;case 4:return t.UNSIGNED_INT;case 1:return t.UNSIGNED_BYTE;default:throw new a.DeveloperError("Size in bytes cannot be mapped to an IndexDatatype")}},validate:function(e){return i.defined(e)&&(e===t.UNSIGNED_BYTE||e===t.UNSIGNED_SHORT||e===t.UNSIGNED_INT)},createTypedArray:function(e,r){if(!i.defined(e))throw new a.DeveloperError("numberOfVertices is required.");return e>=E.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(r):new Uint16Array(r)},createTypedArrayFromArrayBuffer:function(e,r,t,n){if(!i.defined(e))throw new a.DeveloperError("numberOfVertices is required.");if(!i.defined(r))throw new a.DeveloperError("sourceArray is required.");if(!i.defined(t))throw new a.DeveloperError("byteOffset is required.");return e>=E.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(r,t,n):new Uint16Array(r,t,n)}},n=Object.freeze(t);e.IndexDatatype=n});
//# sourceMappingURL=IndexDatatype-eaebd63b.js.map
