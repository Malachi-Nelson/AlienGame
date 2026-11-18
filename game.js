(()=>{var zf=0,wh=1,Uf=2;var Ru=1,Ec=2,cn=3,Bn=0,Ye=1,un=2,On=0,Vs=1,Xs=2,Sh=3,Th=4,Of=5,ns=100,Nf=101,Ff=102,Bf=103,Hf=104,Vf=200,Gf=201,Wf=202,qf=203,cl=204,hl=205,Xf=206,Yf=207,$f=208,Zf=209,Kf=210,Jf=211,jf=212,Qf=213,td=214,ul=0,fl=1,dl=2,Ys=3,pl=4,ml=5,gl=6,xl=7,Cu=0,ed=1,id=2,Nn=0,nd=1,sd=2,rd=3,od=4,ad=5,ld=6,cd=7;var Iu=300,$s=301,Zs=302,yl=303,vl=304,Xo=306,kr=1e3,rs=1001,_l=1002,xi=1003,hd=1004;var Yr=1005;var Yi=1006,Ia=1007;var os=1008;var Fi=1009,Lu=1010,Pu=1011,Dr=1012,Ac=1013,as=1014,$i=1015,us=1016,Rc=1017,Cc=1018,Ks=1020,ku=35902,Du=1021,zu=1022,Ni=1023,Uu=1024,Ou=1025,Gs=1026,Js=1027,Ic=1028,Lc=1029,Nu=1030,Pc=1031;var kc=1033,_o=33776,Mo=33777,bo=33778,wo=33779,Ml=35840,bl=35841,wl=35842,Sl=35843,Tl=36196,El=37492,Al=37496,Rl=37808,Cl=37809,Il=37810,Ll=37811,Pl=37812,kl=37813,Dl=37814,zl=37815,Ul=37816,Ol=37817,Nl=37818,Fl=37819,Bl=37820,Hl=37821,So=36492,Vl=36494,Gl=36495,Fu=36283,Wl=36284,ql=36285,Xl=36286;var To=2300,Yl=2301,La=2302,Eh=2400,Ah=2401,Rh=2402;var ud=3200,fd=3201;var Bu=0,dd=1,zn="",ze="srgb",rr="srgb-linear",Yo="linear",Me="srgb";var bs=7680;var Ch=519,pd=512,md=513,gd=514,Hu=515,xd=516,yd=517,vd=518,_d=519,$l=35044;var Ih="300 es",fn=2e3,Eo=2001,Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pa=Math.PI/180,Ao=180/Math.PI;function Fn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function ci(r,t,e){return Math.max(t,Math.min(e,r))}function Md(r,t){return(r%t+t)%t}function ka(r,t,e){return(1-e)*r+e*t}function Xi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function be(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var te=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ci(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ne=class r{constructor(t,e,i,n,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=n[0],m=n[3],p=n[6],y=n[1],b=n[4],v=n[7],E=n[2],S=n[5],R=n[8];return s[0]=o*x+a*y+l*E,s[3]=o*m+a*b+l*S,s[6]=o*p+a*v+l*R,s[1]=c*x+h*y+u*E,s[4]=c*m+h*b+u*S,s[7]=c*p+h*v+u*R,s[2]=f*x+d*y+g*E,s[5]=f*m+d*b+g*S,s[8]=f*p+d*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Da=new ne;function Vu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ro(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bd(){let r=Ro("canvas");return r.style.display="block",r}var Lh={};function Ir(r){r in Lh||(Lh[r]=!0,console.warn(r))}function wd(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Sd(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Td(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var fe={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(r.r=dn(r.r),r.g=dn(r.g),r.b=dn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zn?Yo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function dn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ph=[.64,.33,.3,.6,.15,.06],kh=[.2126,.7152,.0722],Dh=[.3127,.329],zh=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);fe.define({[rr]:{primaries:Ph,whitePoint:Dh,transfer:Yo,toXYZ:zh,fromXYZ:Uh,luminanceCoefficients:kh,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:Ph,whitePoint:Dh,transfer:Me,toXYZ:zh,fromXYZ:Uh,luminanceCoefficients:kh,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});var ws,Zl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ws===void 0&&(ws=Ro("canvas")),ws.width=t.width,ws.height=t.height;let i=ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ro("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=dn(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(dn(e[i]/255)*255):e[i]=dn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ed=0,Co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(za(n[o].image)):s.push(za(n[o]))}else s=za(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function za(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ad=0,hi=class r extends Hn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=rs,n=rs,s=Yi,o=os,a=Ni,l=Fi,c=r.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Fn(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kr:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case _l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kr:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case _l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Iu;hi.DEFAULT_ANISOTROPY=1;var pe=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(d+1)/2,E=(p+1)/2,S=(h+f)/4,R=(u+x)/4,T=(g+m)/4;return b>v&&b>E?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=S/i,s=R/i):v>E?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=S/n,s=T/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=R/s,n=T/s),this.set(i,n,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kl=class extends Hn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new hi(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bi=class extends Kl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Io=class extends hi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xi,this.minFilter=xi,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jl=class extends hi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xi,this.minFilter=xi,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let E=Math.sqrt(b),S=Math.atan2(E,p*y);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E}let v=a*y;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),f=l(i/2),d=l(n/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-n)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(s-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-n)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ci(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-s*n),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ci(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ua=new U,Oh=new Ti,pn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zi):zi.fromBufferAttribute(s,o),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),Zr.subVectors(this.max,_r),Ss.subVectors(t.a,_r),Ts.subVectors(t.b,_r),Es.subVectors(t.c,_r),Cn.subVectors(Ts,Ss),In.subVectors(Es,Ts),Kn.subVectors(Ss,Es);let e=[0,-Cn.z,Cn.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Cn.z,0,-Cn.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Cn.y,Cn.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!Oa(e,Ss,Ts,Es,Zr)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,Ss,Ts,Es,Zr))?!1:(Kr.crossVectors(Cn,In),e=[Kr.x,Kr.y,Kr.z],Oa(e,Ss,Ts,Es,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},sn=[new U,new U,new U,new U,new U,new U,new U,new U],zi=new U,$r=new pn,Ss=new U,Ts=new U,Es=new U,Cn=new U,In=new U,Kn=new U,_r=new U,Zr=new U,Kr=new U,Jn=new U;function Oa(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Jn.fromArray(r,s);let a=n.x*Math.abs(Jn.x)+n.y*Math.abs(Jn.y)+n.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=i.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Rd=new pn,Mr=new U,Na=new U,ls=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Rd.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);let e=Mr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Mr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(Na)),this.expandByPoint(Mr.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},rn=new U,Fa=new U,Jr=new U,Ln=new U,Ba=new U,jr=new U,Ha=new U,jl=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Fa.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Fa);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Jr),a=Ln.dot(this.direction),l=-Ln.dot(Jr),c=Ln.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Fa).addScaledVector(Jr,f),d}intersectSphere(t,e){rn.subVectors(t.center,this.origin);let i=rn.dot(this.direction),n=rn.dot(rn)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,i,n,s){Ba.subVectors(e,t),jr.subVectors(i,t),Ha.crossVectors(Ba,jr);let o=this.direction.dot(Ha),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);let l=a*this.direction.dot(jr.crossVectors(Ln,jr));if(l<0)return null;let c=a*this.direction.dot(Ba.cross(Ln));if(c<0||l+c>o)return null;let h=-a*Ln.dot(Ha);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class r{constructor(t,e,i,n,s,o,a,l,c,h,u,f,d,g,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,i,n,s,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/As.setFromMatrixColumn(t,0).length(),s=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cd,t,Id)}lookAt(t,e,i){let n=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Pn.crossVectors(i,mi),Pn.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Pn.crossVectors(i,mi)),Pn.normalize(),Qr.crossVectors(mi,Pn),n[0]=Pn.x,n[4]=Qr.x,n[8]=mi.x,n[1]=Pn.y,n[5]=Qr.y,n[9]=mi.y,n[2]=Pn.z,n[6]=Qr.z,n[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],b=i[7],v=i[11],E=i[15],S=n[0],R=n[4],T=n[8],_=n[12],w=n[1],L=n[5],P=n[9],D=n[13],z=n[2],$=n[6],X=n[10],tt=n[14],B=n[3],ut=n[7],mt=n[11],Rt=n[15];return s[0]=o*S+a*w+l*z+c*B,s[4]=o*R+a*L+l*$+c*ut,s[8]=o*T+a*P+l*X+c*mt,s[12]=o*_+a*D+l*tt+c*Rt,s[1]=h*S+u*w+f*z+d*B,s[5]=h*R+u*L+f*$+d*ut,s[9]=h*T+u*P+f*X+d*mt,s[13]=h*_+u*D+f*tt+d*Rt,s[2]=g*S+x*w+m*z+p*B,s[6]=g*R+x*L+m*$+p*ut,s[10]=g*T+x*P+m*X+p*mt,s[14]=g*_+x*D+m*tt+p*Rt,s[3]=y*S+b*w+v*z+E*B,s[7]=y*R+b*L+v*$+E*ut,s[11]=y*T+b*P+v*X+E*mt,s[15]=y*_+b*D+v*tt+E*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+s*l*u-n*c*u-s*a*f+i*c*f+n*a*d-i*l*d)+x*(+e*l*d-e*c*f+s*o*f-n*o*d+n*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+i*o*d+s*a*h-i*c*h)+p*(-n*a*h-e*l*u+e*a*f+n*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,b=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,E=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,S=e*y+i*b+n*v+s*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return t[0]=y*R,t[1]=(x*f*s-u*m*s-x*n*d+i*m*d+u*n*p-i*f*p)*R,t[2]=(a*m*s-x*l*s+x*n*c-i*m*c-a*n*p+i*l*p)*R,t[3]=(u*l*s-a*f*s-u*n*c+i*f*c+a*n*d-i*l*d)*R,t[4]=b*R,t[5]=(h*m*s-g*f*s+g*n*d-e*m*d-h*n*p+e*f*p)*R,t[6]=(g*l*s-o*m*s-g*n*c+e*m*c+o*n*p-e*l*p)*R,t[7]=(o*f*s-h*l*s+h*n*c-e*f*c-o*n*d+e*l*d)*R,t[8]=v*R,t[9]=(g*u*s-h*x*s-g*i*d+e*x*d+h*i*p-e*u*p)*R,t[10]=(o*x*s-g*a*s+g*i*c-e*x*c-o*i*p+e*a*p)*R,t[11]=(h*a*s-o*u*s-h*i*c+e*u*c+o*i*d-e*a*d)*R,t[12]=E*R,t[13]=(h*x*n-g*u*n+g*i*f-e*x*f-h*i*m+e*u*m)*R,t[14]=(g*a*n-o*x*n-g*i*l+e*x*l+o*i*m-e*a*m)*R,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*f+e*a*f)*R,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,x=o*h,m=o*u,p=a*u,y=l*c,b=l*h,v=l*u,E=i.x,S=i.y,R=i.z;return n[0]=(1-(x+p))*E,n[1]=(d+v)*E,n[2]=(g-b)*E,n[3]=0,n[4]=(d-v)*S,n[5]=(1-(f+p))*S,n[6]=(m+y)*S,n[7]=0,n[8]=(g+b)*R,n[9]=(m-y)*R,n[10]=(1-(f+x))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=As.set(n[0],n[1],n[2]).length(),o=As.set(n[4],n[5],n[6]).length(),a=As.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ui.copy(this);let c=1/s,h=1/o,u=1/a;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=h,Ui.elements[5]*=h,Ui.elements[6]*=h,Ui.elements[8]*=u,Ui.elements[9]*=u,Ui.elements[10]*=u,e.setFromRotationMatrix(Ui),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,n,s,o,a=fn){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),d,g;if(a===fn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Eo)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=fn){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-s),f=(e+t)*c,d=(i+n)*h,g,x;if(a===fn)g=(o+s)*u,x=-2*u;else if(a===Eo)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},As=new U,Ui=new we,Cd=new U(0,0,0),Id=new U(1,1,1),Pn=new U,Qr=new U,mi=new U,Nh=new we,Fh=new Ti,Ei=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(ci(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ci(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ci(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ci(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ci(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ci(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var Lo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ld=0,Bh=new U,Rs=new Ti,on=new we,to=new U,br=new U,Pd=new U,kd=new Ti,Hh=new U(1,0,0),Vh=new U(0,1,0),Gh=new U(0,0,1),Wh={type:"added"},Dd={type:"removed"},Cs={type:"childadded",child:null},Va={type:"childremoved",child:null},ri=class r extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new U,e=new Ei,i=new Ti,n=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new we},normalMatrix:{value:new ne}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(Vh,t)}rotateZ(t){return this.rotateOnAxis(Gh,t)}translateOnAxis(t,e){return Bh.copy(t).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(Vh,t)}translateZ(t){return this.translateOnAxis(Gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?to.copy(t):to.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(br,to,this.up):on.lookAt(to,br,this.up),this.quaternion.setFromRotationMatrix(on),n&&(on.extractRotation(n.matrixWorld),Rs.setFromRotationMatrix(on),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};ri.DEFAULT_UP=new U(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oi=new U,an=new U,Ga=new U,ln=new U,Is=new U,Ls=new U,qh=new U,Wa=new U,qa=new U,Xa=new U,Ya=new pe,$a=new pe,Za=new pe,Un=class r{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Oi.subVectors(t,e),n.cross(Oi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Oi.subVectors(n,e),an.subVectors(i,e),Ga.subVectors(t,e);let o=Oi.dot(Oi),a=Oi.dot(an),l=Oi.dot(Ga),c=an.dot(an),h=an.dot(Ga),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ln.x),l.addScaledVector(o,ln.y),l.addScaledVector(a,ln.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return Ya.setScalar(0),$a.setScalar(0),Za.setScalar(0),Ya.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,i),Za.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Ya,s.x),o.addScaledVector($a,s.y),o.addScaledVector(Za,s.z),o}static isFrontFacing(t,e,i,n){return Oi.subVectors(i,e),an.subVectors(t,e),Oi.cross(an).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Oi.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;Is.subVectors(n,i),Ls.subVectors(s,i),Wa.subVectors(t,i);let l=Is.dot(Wa),c=Ls.dot(Wa);if(l<=0&&c<=0)return e.copy(i);qa.subVectors(t,n);let h=Is.dot(qa),u=Ls.dot(qa);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Is,o);Xa.subVectors(t,s);let d=Is.dot(Xa),g=Ls.dot(Xa);if(g>=0&&d<=g)return e.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ls,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return qh.subVectors(s,n),a=(u-h)/(u-h+(d-g)),e.copy(n).addScaledVector(qh,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(i).addScaledVector(Is,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Ka(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=fe.workingColorSpace){if(t=Md(t,1),e=ci(e,0,1),i=ci(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ka(o,s,t+1/3),this.g=Ka(o,s,t),this.b=Ka(o,s,t-1/3)}return fe.toWorkingColorSpace(this,n),this}setStyle(t,e=ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let i=Gu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return fe.fromWorkingColorSpace(ti.copy(this),t),Math.round(ci(ti.r*255,0,255))*65536+Math.round(ci(ti.g*255,0,255))*256+Math.round(ci(ti.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(ti.copy(this),e);let i=ti.r,n=ti.g,s=ti.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(ti.copy(this),e),t.r=ti.r,t.g=ti.g,t.b=ti.b,t}getStyle(t=ze){fe.fromWorkingColorSpace(ti.copy(this),t);let e=ti.r,i=ti.g,n=ti.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(eo);let i=ka(kn.h,eo.h,e),n=ka(kn.s,eo.s,e),s=ka(kn.l,eo.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ti=new Jt;Jt.NAMES=Gu;var zd=0,Vn=class extends Hn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Fn(),this.name="",this.blending=Vs,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==hl&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Se=class extends Vn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new U,io=new te,ei=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$l,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$l&&(t.usage=this.usage),t}};var Po=class extends ei{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ko=class extends ei{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var me=class extends ei{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ud=0,Si=new we,Ja=new ri,Ps=new U,gi=new pn,wr=new pn,He=new U,oi=class r extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vu(t)?ko:Po)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ne().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,i){return Si.makeTranslation(t,e,i),this.applyMatrix4(Si),this}scale(t,e,i){return Si.makeScale(t,e,i),this.applyMatrix4(Si),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(i,3))}else{for(let i=0,n=e.count;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(gi.min,wr.min),gi.expandByPoint(He),He.addVectors(gi.max,wr.max),gi.expandByPoint(He)):(gi.expandByPoint(wr.min),gi.expandByPoint(wr.max))}gi.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)He.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(He));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(t,c),He.add(Ps)),n=Math.max(n,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<i.count;T++)a[T]=new U,l[T]=new U;let c=new U,h=new U,u=new U,f=new te,d=new te,g=new te,x=new U,m=new U;function p(T,_,w){c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),f.fromBufferAttribute(s,T),d.fromBufferAttribute(s,_),g.fromBufferAttribute(s,w),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[T].add(x),a[_].add(x),a[w].add(x),l[T].add(m),l[_].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let T=0,_=y.length;T<_;++T){let w=y[T],L=w.start,P=w.count;for(let D=L,z=L+P;D<z;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let b=new U,v=new U,E=new U,S=new U;function R(T){E.fromBufferAttribute(n,T),S.copy(E);let _=a[T];b.copy(_),b.sub(E.multiplyScalar(E.dot(_))).normalize(),v.crossVectors(S,_);let L=v.dot(l[T])<0?-1:1;o.setXYZW(T,b.x,b.y,b.z,L)}for(let T=0,_=y.length;T<_;++T){let w=y[T],L=w.start,P=w.count;for(let D=L,z=L+P;D<z;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new U,s=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ei(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xh=new we,jn=new jl,no=new ls,Yh=new U,so=new U,ro=new U,oo=new U,ja=new U,ao=new U,$h=new U,lo=new U,qt=class extends ri{constructor(t=new oi,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(ja.fromBufferAttribute(u,t),o?ao.addScaledVector(ja,h):ao.addScaledVector(ja.sub(e),h))}e.add(ao)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(s),jn.copy(t.ray).recast(t.near),!(no.containsPoint(jn.origin)===!1&&(jn.intersectSphere(no,Yh)===null||jn.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(Xh.copy(s).invert(),jn.copy(t.ray).applyMatrix4(Xh),!(i.boundingBox!==null&&jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,E=b;v<E;v+=3){let S=a.getX(v),R=a.getX(v+1),T=a.getX(v+2);n=co(this,p,t,i,c,h,u,S,R,T),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);n=co(this,o,t,i,c,h,u,y,b,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,E=b;v<E;v+=3){let S=v,R=v+1,T=v+2;n=co(this,p,t,i,c,h,u,S,R,T),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,b=m+1,v=m+2;n=co(this,o,t,i,c,h,u,y,b,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Od(r,t,e,i,n,s,o,a){let l;if(t.side===Ye?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===Bn,a),l===null)return null;lo.copy(a),lo.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(lo);return c<e.near||c>e.far?null:{distance:c,point:lo.clone(),object:r}}function co(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,so),r.getVertexPosition(l,ro),r.getVertexPosition(c,oo);let h=Od(r,t,e,i,so,ro,oo,$h);if(h){let u=new U;Un.getBarycoord($h,so,ro,oo,u),n&&(h.uv=Un.getInterpolatedAttribute(n,a,l,c,u,new te)),s&&(h.uv1=Un.getInterpolatedAttribute(s,a,l,c,u,new te)),o&&(h.normal=Un.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};Un.getNormal(so,ro,oo,f.normal),h.face=f,h.barycoord=u}return h}var yi=class r extends oi{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(x,m,p,y,b,v,E,S,R,T,_){let w=v/R,L=E/T,P=v/2,D=E/2,z=S/2,$=R+1,X=T+1,tt=0,B=0,ut=new U;for(let mt=0;mt<X;mt++){let Rt=mt*L-D;for(let q=0;q<$;q++){let Xt=q*w-P;ut[x]=Xt*y,ut[m]=Rt*b,ut[p]=z,c.push(ut.x,ut.y,ut.z),ut[x]=0,ut[m]=0,ut[p]=S>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(q/R),u.push(1-mt/T),tt+=1}}for(let mt=0;mt<T;mt++)for(let Rt=0;Rt<R;Rt++){let q=f+Rt+$*mt,Xt=f+Rt+$*(mt+1),j=f+(Rt+1)+$*(mt+1),W=f+(Rt+1)+$*mt;l.push(q,Xt,W),l.push(Xt,j,W),B+=6}a.addGroup(d,B,_),d+=B,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function js(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function si(r){let t={};for(let e=0;e<r.length;e++){let i=js(r[e]);for(let n in i)t[n]=i[n]}return t}function Nd(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Wu(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var Fd={clone:js,merge:si},Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends Vn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Do=class extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dn=new U,Zh=new te,Kh=new te,Xe=class extends Do{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,Zh,Kh),e.subVectors(Kh,Zh)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ks=-90,Ds=1,Ql=class extends ri{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Xe(ks,Ds,t,e);n.layers=this.layers,this.add(n);let s=new Xe(ks,Ds,t,e);s.layers=this.layers,this.add(s);let o=new Xe(ks,Ds,t,e);o.layers=this.layers,this.add(o);let a=new Xe(ks,Ds,t,e);a.layers=this.layers,this.add(a);let l=new Xe(ks,Ds,t,e);l.layers=this.layers,this.add(l);let c=new Xe(ks,Ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===fn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},zo=class extends hi{constructor(t,e,i,n,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tc=class extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new zo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new yi(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:On});s.uniforms.tEquirect.value=e;let o=new qt(n,s),a=e.minFilter;return e.minFilter===os&&(e.minFilter=Yi),new Ql(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}},Qa=new U,Vd=new U,Gd=new ne,hn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Qa.subVectors(i,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Qa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Gd.getNormalMatrix(t),n=this.coplanarPoint(Qa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qn=new ls,ho=new U,zr=class{constructor(t=new hn,e=new hn,i=new hn,n=new hn,s=new hn,o=new hn){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fn){let i=this.planes,n=t.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],g=n[9],x=n[10],m=n[11],p=n[12],y=n[13],b=n[14],v=n[15];if(i[0].setComponents(l-s,f-c,m-d,v-p).normalize(),i[1].setComponents(l+s,f+c,m+d,v+p).normalize(),i[2].setComponents(l+o,f+h,m+g,v+y).normalize(),i[3].setComponents(l-o,f-h,m-g,v-y).normalize(),i[4].setComponents(l-a,f-u,m-x,v-b).normalize(),e===fn)i[5].setComponents(l+a,f+u,m+x,v+b).normalize();else if(e===Eo)i[5].setComponents(a,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(ho.x=n.normal.x>0?t.max.x:t.min.x,ho.y=n.normal.y>0?t.max.y:t.min.y,ho.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qu(){let r=null,t=!1,e=null,i=null;function n(s,o){e(s,o),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Wd(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var fi=class r extends oi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let b=0;b<c;b++){let v=b*u-s;g.push(v,-y,0),x.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let b=y+c*p,v=y+c*(p+1),E=y+1+c*(p+1),S=y+1+c*p;d.push(b,v,S),d.push(v,E,S)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,um=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:qd,alphahash_pars_fragment:Xd,alphamap_fragment:Yd,alphamap_pars_fragment:$d,alphatest_fragment:Zd,alphatest_pars_fragment:Kd,aomap_fragment:Jd,aomap_pars_fragment:jd,batching_pars_vertex:Qd,batching_vertex:tp,begin_vertex:ep,beginnormal_vertex:ip,bsdfs:np,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:op,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:fp,color_vertex:dp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:xp,displacementmap_vertex:yp,emissivemap_fragment:vp,emissivemap_pars_fragment:_p,colorspace_fragment:Mp,colorspace_pars_fragment:bp,envmap_fragment:wp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:Tp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Op,envmap_vertex:Ap,fog_vertex:Rp,fog_pars_vertex:Cp,fog_fragment:Ip,fog_pars_fragment:Lp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:kp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:zp,lights_pars_begin:Up,lights_toon_fragment:Np,lights_toon_pars_fragment:Fp,lights_phong_fragment:Bp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Wp,lights_fragment_maps:qp,lights_fragment_end:Xp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Kp,map_fragment:Jp,map_pars_fragment:jp,map_particle_fragment:Qp,map_particle_pars_fragment:t0,metalnessmap_fragment:e0,metalnessmap_pars_fragment:i0,morphinstance_vertex:n0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:f0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:x0,opaque_fragment:y0,packing:v0,premultiplied_alpha_fragment:_0,project_vertex:M0,dithering_fragment:b0,dithering_pars_fragment:w0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:I0,skinning_pars_vertex:L0,skinning_vertex:P0,skinnormal_vertex:k0,specularmap_fragment:D0,specularmap_pars_fragment:z0,tonemapping_fragment:U0,tonemapping_pars_fragment:O0,transmission_fragment:N0,transmission_pars_fragment:F0,uv_pars_fragment:B0,uv_pars_vertex:H0,uv_vertex:V0,worldpos_vertex:G0,background_vert:W0,background_frag:q0,backgroundCube_vert:X0,backgroundCube_frag:Y0,cube_vert:$0,cube_frag:Z0,depth_vert:K0,depth_frag:J0,distanceRGBA_vert:j0,distanceRGBA_frag:Q0,equirect_vert:tm,equirect_frag:em,linedashed_vert:im,linedashed_frag:nm,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:fm,meshphong_frag:dm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:xm,points_vert:ym,points_frag:vm,shadow_vert:_m,shadow_frag:Mm,sprite_vert:bm,sprite_frag:wm},St={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},qi={basic:{uniforms:si([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:si([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:si([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:si([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:si([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:si([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:si([St.points,St.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:si([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:si([St.common,St.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:si([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:si([St.sprite,St.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:si([St.common,St.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:si([St.lights,St.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};qi.physical={uniforms:si([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var uo={r:0,b:0,g:0},ts=new Ei,Sm=new we;function Tm(r,t,e,i,n,s,o){let a=new Jt(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?e:t).get(b)),b}function x(y){let b=!1,v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),b=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,b){let v=g(b);v&&(v.isCubeTexture||v.mapping===Xo)?(h===void 0&&(h=new qt(new yi(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:js(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),ts.copy(b.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(ts)),h.material.toneMapped=fe.getTransfer(v.colorSpace)!==Me,(u!==v||f!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new qt(new fi(2,2),new ui({name:"BackgroundMaterial",uniforms:js(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=fe.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(uo,Wu(r)),i.buffers.color.setClear(uo.r,uo.g,uo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m}}function Em(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=f(null),s=n,o=!1;function a(w,L,P,D,z){let $=!1,X=u(D,P,L);s!==X&&(s=X,c(s.object)),$=d(w,D,P,z),$&&g(w,D,P,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(w,L,P,D),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function u(w,L,P){let D=P.wireframe===!0,z=i[w.id];z===void 0&&(z={},i[w.id]=z);let $=z[L.id];$===void 0&&($={},z[L.id]=$);let X=$[D];return X===void 0&&(X=f(l()),$[D]=X),X}function f(w){let L=[],P=[],D=[];for(let z=0;z<e;z++)L[z]=0,P[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:D,object:w,attributes:{},index:null}}function d(w,L,P,D){let z=s.attributes,$=L.attributes,X=0,tt=P.getAttributes();for(let B in tt)if(tt[B].location>=0){let mt=z[B],Rt=$[B];if(Rt===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(Rt=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(Rt=w.instanceColor)),mt===void 0||mt.attribute!==Rt||Rt&&mt.data!==Rt.data)return!0;X++}return s.attributesNum!==X||s.index!==D}function g(w,L,P,D){let z={},$=L.attributes,X=0,tt=P.getAttributes();for(let B in tt)if(tt[B].location>=0){let mt=$[B];mt===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(mt=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(mt=w.instanceColor));let Rt={};Rt.attribute=mt,mt&&mt.data&&(Rt.data=mt.data),z[B]=Rt,X++}s.attributes=z,s.attributesNum=X,s.index=D}function x(){let w=s.newAttributes;for(let L=0,P=w.length;L<P;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){let P=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;P[w]=1,D[w]===0&&(r.enableVertexAttribArray(w),D[w]=1),z[w]!==L&&(r.vertexAttribDivisor(w,L),z[w]=L)}function y(){let w=s.newAttributes,L=s.enabledAttributes;for(let P=0,D=L.length;P<D;P++)L[P]!==w[P]&&(r.disableVertexAttribArray(P),L[P]=0)}function b(w,L,P,D,z,$,X){X===!0?r.vertexAttribIPointer(w,L,P,z,$):r.vertexAttribPointer(w,L,P,D,z,$)}function v(w,L,P,D){x();let z=D.attributes,$=P.getAttributes(),X=L.defaultAttributeValues;for(let tt in $){let B=$[tt];if(B.location>=0){let ut=z[tt];if(ut===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor)),ut!==void 0){let mt=ut.normalized,Rt=ut.itemSize,q=t.get(ut);if(q===void 0)continue;let Xt=q.buffer,j=q.type,W=q.bytesPerElement,ct=j===r.INT||j===r.UNSIGNED_INT||ut.gpuType===Ac;if(ut.isInterleavedBufferAttribute){let ot=ut.data,bt=ot.stride,G=ut.offset;if(ot.isInstancedInterleavedBuffer){for(let Y=0;Y<B.locationSize;Y++)p(B.location+Y,ot.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Y=0;Y<B.locationSize;Y++)m(B.location+Y);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let Y=0;Y<B.locationSize;Y++)b(B.location+Y,Rt/B.locationSize,j,mt,bt*W,(G+Rt/B.locationSize*Y)*W,ct)}else{if(ut.isInstancedBufferAttribute){for(let ot=0;ot<B.locationSize;ot++)p(B.location+ot,ut.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ot=0;ot<B.locationSize;ot++)m(B.location+ot);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let ot=0;ot<B.locationSize;ot++)b(B.location+ot,Rt/B.locationSize,j,mt,Rt*W,Rt/B.locationSize*ot*W,ct)}}else if(X!==void 0){let mt=X[tt];if(mt!==void 0)switch(mt.length){case 2:r.vertexAttrib2fv(B.location,mt);break;case 3:r.vertexAttrib3fv(B.location,mt);break;case 4:r.vertexAttrib4fv(B.location,mt);break;default:r.vertexAttrib1fv(B.location,mt)}}}}y()}function E(){T();for(let w in i){let L=i[w];for(let P in L){let D=L[P];for(let z in D)h(D[z].object),delete D[z];delete L[P]}delete i[w]}}function S(w){if(i[w.id]===void 0)return;let L=i[w.id];for(let P in L){let D=L[P];for(let z in D)h(D[z].object),delete D[z];delete L[P]}delete i[w.id]}function R(w){for(let L in i){let P=i[L];if(P[w.id]===void 0)continue;let D=P[w.id];for(let z in D)h(D[z].object),delete D[z];delete P[w.id]}}function T(){_(),o=!0,s!==n&&(s=n,c(s.object))}function _(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:T,resetDefaultState:_,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Am(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rm(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){return!(R!==Ni&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let T=R===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Fi&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==$i&&!T)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,S=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:E,maxSamples:S}}function Cm(r){let t=this,e=null,i=0,n=!1,s=!1,o=new hn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{let y=s?0:i,b=y*4,v=p.clippingState||null;l.value=v,v=h(g,f,b,d);for(let E=0;E!==b;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=d;b!==x;++b,v+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Im(r){let t=new WeakMap;function e(o,a){return a===yl?o.mapping=$s:a===vl&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===yl||a===vl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new tc(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Ur=class extends Do{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hs=4,Jh=[.125,.215,.35,.446,.526,.582],ss=20,tl=new Ur,jh=new Jt,el=null,il=0,nl=0,sl=!1,is=(1+Math.sqrt(5))/2,zs=1/is,Qh=[new U(-is,zs,0),new U(is,zs,0),new U(-zs,0,is),new U(zs,0,is),new U(0,is,-zs),new U(0,is,zs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Uo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){el=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(el,il,nl),this._renderer.xr.enabled=sl,t.scissorTest=!1,fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),el=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:us,format:Ni,colorSpace:rr,depthBuffer:!1},n=tu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lm(s)),this._blurMaterial=Pm(s,t,e)}return n}_compileMaterial(t){let e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,tl)}_sceneToCubeUV(t,e,i,n){let a=new Xe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(jh),h.toneMapping=Nn,h.autoClear=!1;let d=new Se({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new qt(new yi,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(jh),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;fo(n,y*b,p>2?b:0,b,b),h.setRenderTarget(n),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===$s||t.mapping===Zs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let s=n?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;fo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,tl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qh[(n-s-1)%Qh.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,n,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",s),this._halfBlur(o,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new qt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ss-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):ss;m>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],y=0;for(let R=0;R<ss;++R){let T=R/x,_=Math.exp(-T*T/2);p.push(_),R===0?y+=_:R<m&&(y+=2*_)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let v=this._sizeLods[n],E=3*v*(n>b-Hs?n-b+Hs:0),S=4*(this._cubeSize-v);fo(e,E,S,3*v,2*v),l.setRenderTarget(e),l.render(u,tl)}};function Lm(r){let t=[],e=[],i=[],n=r,s=r-Hs+1+Jh.length;for(let o=0;o<s;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>r-Hs?l=Jh[o-r+Hs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),b=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let S=0;S<d;S++){let R=S%3*2/3-1,T=S>2?0:-1,_=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];y.set(_,x*g*S),b.set(f,m*g*S);let w=[S,S,S,S,S,S];v.set(w,p*g*S)}let E=new oi;E.setAttribute("position",new ei(y,x)),E.setAttribute("uv",new ei(b,m)),E.setAttribute("faceIndex",new ei(v,p)),t.push(E),n>Hs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function tu(r,t,e){let i=new Bi(r,t,e);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fo(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Pm(r,t,e){let i=new Float32Array(ss),n=new U(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function eu(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function iu(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function km(r){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===yl||l===vl,h=l===$s||l===Zs;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Uo(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&n(d)?(e===null&&(e=new Uo(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Dm(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function zm(r,t,e,i){let n={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete n[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],r.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let b=0,v=y.length;b<v;b+=3){let E=y[b+0],S=y[b+1],R=y[b+2];f.push(E,S,S,R,R,E)}}else if(g!==void 0){let y=g.array;x=g.version;for(let b=0,v=y.length/3-1;b<v;b+=3){let E=b+0,S=b+1,R=b+2;f.push(E,S,S,R,R,E)}}else return;let m=new(Vu(f)?ko:Po)(f,1);m.version=x;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Um(r,t,e){let i;function n(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(i,d,s,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(i,d,s,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*x[y];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Om(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Nm(r,t,e){let i=new WeakMap,n=new pe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let _=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let v=a.attributes.position.count*b,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*E*4*u),R=new Io(S,v,E,u);R.type=$i,R.needsUpdate=!0;let T=b*4;for(let w=0;w<u;w++){let L=m[w],P=p[w],D=y[w],z=v*E*4*w;for(let $=0;$<L.count;$++){let X=$*T;d===!0&&(n.fromBufferAttribute(L,$),S[z+X+0]=n.x,S[z+X+1]=n.y,S[z+X+2]=n.z,S[z+X+3]=0),g===!0&&(n.fromBufferAttribute(P,$),S[z+X+4]=n.x,S[z+X+5]=n.y,S[z+X+6]=n.z,S[z+X+7]=0),x===!0&&(n.fromBufferAttribute(D,$),S[z+X+8]=n.x,S[z+X+9]=n.y,S[z+X+10]=n.z,S[z+X+11]=D.itemSize===4?n.w:1)}}f={count:u,texture:R,size:new te(v,E)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Fm(r,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Oo=class extends hi{constructor(t,e,i,n,s,o,a,l,c,h=Gs){if(h!==Gs&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Gs&&(i=as),i===void 0&&h===Js&&(i=Ks),super(null,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xi,this.minFilter=l!==void 0?l:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xu=new hi,nu=new Oo(1,1),Yu=new Io,$u=new Jl,Zu=new zo,su=[],ru=[],ou=new Float32Array(16),au=new Float32Array(9),lu=new Float32Array(4);function or(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=su[n];if(s===void 0&&(s=new Float32Array(n),su[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Fe(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Be(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function $o(r,t){let e=ru[t];e===void 0&&(e=new Int32Array(t),ru[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Bm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Hm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2fv(this.addr,t),Be(e,t)}}function Vm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;r.uniform3fv(this.addr,t),Be(e,t)}}function Gm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4fv(this.addr,t),Be(e,t)}}function Wm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;lu.set(i),r.uniformMatrix2fv(this.addr,!1,lu),Be(e,i)}}function qm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;au.set(i),r.uniformMatrix3fv(this.addr,!1,au),Be(e,i)}}function Xm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;ou.set(i),r.uniformMatrix4fv(this.addr,!1,ou),Be(e,i)}}function Ym(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function $m(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2iv(this.addr,t),Be(e,t)}}function Zm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;r.uniform3iv(this.addr,t),Be(e,t)}}function Km(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4iv(this.addr,t),Be(e,t)}}function Jm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function jm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2uiv(this.addr,t),Be(e,t)}}function Qm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;r.uniform3uiv(this.addr,t),Be(e,t)}}function tg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4uiv(this.addr,t),Be(e,t)}}function eg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(nu.compareFunction=Hu,s=nu):s=Xu,e.setTexture2D(t||s,n)}function ig(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||$u,n)}function ng(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Zu,n)}function sg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Yu,n)}function rg(r){switch(r){case 5126:return Bm;case 35664:return Hm;case 35665:return Vm;case 35666:return Gm;case 35674:return Wm;case 35675:return qm;case 35676:return Xm;case 5124:case 35670:return Ym;case 35667:case 35671:return $m;case 35668:case 35672:return Zm;case 35669:case 35673:return Km;case 5125:return Jm;case 36294:return jm;case 36295:return Qm;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return sg}}function og(r,t){r.uniform1fv(this.addr,t)}function ag(r,t){let e=or(t,this.size,2);r.uniform2fv(this.addr,e)}function lg(r,t){let e=or(t,this.size,3);r.uniform3fv(this.addr,e)}function cg(r,t){let e=or(t,this.size,4);r.uniform4fv(this.addr,e)}function hg(r,t){let e=or(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ug(r,t){let e=or(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function fg(r,t){let e=or(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function dg(r,t){r.uniform1iv(this.addr,t)}function pg(r,t){r.uniform2iv(this.addr,t)}function mg(r,t){r.uniform3iv(this.addr,t)}function gg(r,t){r.uniform4iv(this.addr,t)}function xg(r,t){r.uniform1uiv(this.addr,t)}function yg(r,t){r.uniform2uiv(this.addr,t)}function vg(r,t){r.uniform3uiv(this.addr,t)}function _g(r,t){r.uniform4uiv(this.addr,t)}function Mg(r,t,e){let i=this.cache,n=t.length,s=$o(e,n);Fe(i,s)||(r.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Xu,s[o])}function bg(r,t,e){let i=this.cache,n=t.length,s=$o(e,n);Fe(i,s)||(r.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||$u,s[o])}function wg(r,t,e){let i=this.cache,n=t.length,s=$o(e,n);Fe(i,s)||(r.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Zu,s[o])}function Sg(r,t,e){let i=this.cache,n=t.length,s=$o(e,n);Fe(i,s)||(r.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Yu,s[o])}function Tg(r){switch(r){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return fg;case 5124:case 35670:return dg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return xg;case 36294:return yg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Sg}}var ec=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rg(e.type)}},ic=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}},nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},rl=/(\w+)(\])?(\[|\.)?/g;function cu(r,t){r.seq.push(t),r.map[t.id]=t}function Eg(r,t,e){let i=r.name,n=i.length;for(rl.lastIndex=0;;){let s=rl.exec(i),o=rl.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){cu(e,c===void 0?new ec(a,r,t):new ic(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new nc(a),cu(e,u)),e=u}}}var qs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),o=t.getUniformLocation(e,s.name);Eg(s,o,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function hu(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Ag=37297,Rg=0;function Cg(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var uu=new ne;function Ig(r){fe._getMatrix(uu,fe.workingColorSpace,r);let t=`mat3( ${uu.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(r)){case Yo:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function fu(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Cg(r.getShaderSource(t),o)}else return n}function Lg(r,t){let e=Ig(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pg(r,t){let e;switch(t){case nd:e="Linear";break;case sd:e="Reinhard";break;case rd:e="Cineon";break;case od:e="ACESFilmic";break;case ld:e="AgX";break;case cd:e="Neutral";break;case ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var po=new U;function kg(){fe.getLuminanceCoefficients(po);let r=po.x.toFixed(4),t=po.y.toFixed(4),e=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function zg(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ug(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Lr(r){return r!==""}function du(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(r){return r.replace(Og,Fg)}var Ng=new Map;function Fg(r,t){let e=oe[t];if(e===void 0){let i=Ng.get(t);if(i!==void 0)e=oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return sc(e)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(r){return r.replace(Bg,Hg)}function Hg(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function gu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $s:case Zs:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wg(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Zs&&(t="ENVMAP_MODE_REFRACTION"),t}function qg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Cu:t="ENVMAP_BLENDING_MULTIPLY";break;case ed:t="ENVMAP_BLENDING_MIX";break;case id:t="ENVMAP_BLENDING_ADD";break}return t}function Xg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Yg(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Vg(e),c=Gg(e),h=Wg(e),u=qg(e),f=Xg(e),d=Dg(e),g=zg(s),x=n.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Lg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=sc(o),o=du(o,e),o=pu(o,e),a=sc(a),a=du(a,e),a=pu(a,e),o=mu(o),a=mu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+o,v=y+p+a,E=hu(n,n.VERTEX_SHADER,b),S=hu(n,n.FRAGMENT_SHADER,v);n.attachShader(x,E),n.attachShader(x,S),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function R(L){if(r.debug.checkShaderErrors){let P=n.getProgramInfoLog(x).trim(),D=n.getShaderInfoLog(E).trim(),z=n.getShaderInfoLog(S).trim(),$=!0,X=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,E,S);else{let tt=fu(n,E,"vertex"),B=fu(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+tt+`
`+B)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||z==="")&&(X=!1);X&&(L.diagnostics={runnable:$,programLog:P,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:p}})}n.deleteShader(E),n.deleteShader(S),T=new qs(n,x),_=Ug(n,x)}let T;this.getUniforms=function(){return T===void 0&&R(this),T};let _;this.getAttributes=function(){return _===void 0&&R(this),_};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(x,Ag)),w},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=S,this}var $g=0,rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new oc(t),e.set(t,i)),i}},oc=class{constructor(t){this.id=$g++,this.code=t,this.usedTimes=0}};function Zg(r,t,e,i,n,s,o){let a=new Lo,l=new rc,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,w,L,P,D){let z=P.fog,$=D.geometry,X=_.isMeshStandardMaterial?P.environment:null,tt=(_.isMeshStandardMaterial?e:t).get(_.envMap||X),B=tt&&tt.mapping===Xo?tt.image.height:null,ut=g[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Rt=mt!==void 0?mt.length:0,q=0;$.morphAttributes.position!==void 0&&(q=1),$.morphAttributes.normal!==void 0&&(q=2),$.morphAttributes.color!==void 0&&(q=3);let Xt,j,W,ct;if(ut){let _e=qi[ut];Xt=_e.vertexShader,j=_e.fragmentShader}else Xt=_.vertexShader,j=_.fragmentShader,l.update(_),W=l.getVertexShaderID(_),ct=l.getFragmentShaderID(_);let ot=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),G=D.isInstancedMesh===!0,Y=D.isBatchedMesh===!0,ft=!!_.map,vt=!!_.matcap,xt=!!tt,M=!!_.aoMap,k=!!_.lightMap,K=!!_.bumpMap,rt=!!_.normalMap,et=!!_.displacementMap,Tt=!!_.emissiveMap,wt=!!_.metalnessMap,I=!!_.roughnessMap,A=_.anisotropy>0,H=_.clearcoat>0,st=_.dispersion>0,lt=_.iridescence>0,nt=_.sheen>0,zt=_.transmission>0,At=A&&!!_.anisotropyMap,kt=H&&!!_.clearcoatMap,ue=H&&!!_.clearcoatNormalMap,yt=H&&!!_.clearcoatRoughnessMap,Ut=lt&&!!_.iridescenceMap,Zt=lt&&!!_.iridescenceThicknessMap,Kt=nt&&!!_.sheenColorMap,Ot=nt&&!!_.sheenRoughnessMap,he=!!_.specularMap,re=!!_.specularColorMap,Ee=!!_.specularIntensityMap,O=zt&&!!_.transmissionMap,Et=zt&&!!_.thicknessMap,it=!!_.gradientMap,ht=!!_.alphaMap,Lt=_.alphaTest>0,Ct=!!_.alphaHash,ee=!!_.extensions,Pe=Nn;_.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Pe=r.toneMapping);let je={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:Xt,fragmentShader:j,defines:_.defines,customVertexShaderID:W,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Y,batchingColor:Y&&D._colorsTexture!==null,instancing:G,instancingColor:G&&D.instanceColor!==null,instancingMorph:G&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:rr,alphaToCoverage:!!_.alphaToCoverage,map:ft,matcap:vt,envMap:xt,envMapMode:xt&&tt.mapping,envMapCubeUVHeight:B,aoMap:M,lightMap:k,bumpMap:K,normalMap:rt,displacementMap:f&&et,emissiveMap:Tt,normalMapObjectSpace:rt&&_.normalMapType===dd,normalMapTangentSpace:rt&&_.normalMapType===Bu,metalnessMap:wt,roughnessMap:I,anisotropy:A,anisotropyMap:At,clearcoat:H,clearcoatMap:kt,clearcoatNormalMap:ue,clearcoatRoughnessMap:yt,dispersion:st,iridescence:lt,iridescenceMap:Ut,iridescenceThicknessMap:Zt,sheen:nt,sheenColorMap:Kt,sheenRoughnessMap:Ot,specularMap:he,specularColorMap:re,specularIntensityMap:Ee,transmission:zt,transmissionMap:O,thicknessMap:Et,gradientMap:it,opaque:_.transparent===!1&&_.blending===Vs&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:Lt,alphaHash:Ct,combine:_.combine,mapUv:ft&&x(_.map.channel),aoMapUv:M&&x(_.aoMap.channel),lightMapUv:k&&x(_.lightMap.channel),bumpMapUv:K&&x(_.bumpMap.channel),normalMapUv:rt&&x(_.normalMap.channel),displacementMapUv:et&&x(_.displacementMap.channel),emissiveMapUv:Tt&&x(_.emissiveMap.channel),metalnessMapUv:wt&&x(_.metalnessMap.channel),roughnessMapUv:I&&x(_.roughnessMap.channel),anisotropyMapUv:At&&x(_.anisotropyMap.channel),clearcoatMapUv:kt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(_.sheenRoughnessMap.channel),specularMapUv:he&&x(_.specularMap.channel),specularColorMapUv:re&&x(_.specularColorMap.channel),specularIntensityMapUv:Ee&&x(_.specularIntensityMap.channel),transmissionMapUv:O&&x(_.transmissionMap.channel),thicknessMapUv:Et&&x(_.thicknessMap.channel),alphaMapUv:ht&&x(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(rt||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!$.attributes.uv&&(ft||ht),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:D.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ft&&_.map.isVideoTexture===!0&&fe.getTransfer(_.map.colorSpace)===Me,decodeVideoTextureEmissive:Tt&&_.emissiveMap.isVideoTexture===!0&&fe.getTransfer(_.emissiveMap.colorSpace)===Me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===un,flipSided:_.side===Ye,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||Y)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function p(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)w.push(L),w.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(y(w,_),b(w,_),w.push(r.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function y(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function b(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),_.push(a.mask)}function v(_){let w=g[_.type],L;if(w){let P=qi[w];L=Fd.clone(P.uniforms)}else L=_.uniforms;return L}function E(_,w){let L;for(let P=0,D=h.length;P<D;P++){let z=h[P];if(z.cacheKey===w){L=z,++L.usedTimes;break}}return L===void 0&&(L=new Yg(r,w,_,s),h.push(L)),L}function S(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function R(_){l.remove(_)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:T}}function Kg(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Jg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function xu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function yu(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,d,g,x,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Jg),i.length>1&&i.sort(f||xu),n.length>1&&n.sort(f||xu)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function jg(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new yu,r.set(i,[o])):n>=s.length?(o=new yu,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Qg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Jt};break;case"SpotLight":e={position:new U,direction:new U,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function tx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var ex=0;function ix(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function nx(r){let t=new Qg,e=tx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let n=new U,s=new we,o=new we;function a(c){let h=0,u=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,b=0,v=0,E=0,S=0,R=0;c.sort(ix);for(let _=0,w=c.length;_<w;_++){let L=c[_],P=L.color,D=L.intensity,z=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=P.r*D,u+=P.g*D,f+=P.b*D;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],D);R++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,B=e.get(L);B.shadowIntensity=tt.intensity,B.shadowBias=tt.bias,B.shadowNormalBias=tt.normalBias,B.shadowRadius=tt.radius,B.shadowMapSize=tt.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=L.shadow.matrix,y++}i.directional[d]=X,d++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(P).multiplyScalar(D),X.distance=z,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[x]=X;let tt=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,tt.updateMatrices(L),L.castShadow&&S++),i.spotLightMatrix[x]=tt.matrix,L.castShadow){let B=e.get(L);B.shadowIntensity=tt.intensity,B.shadowBias=tt.bias,B.shadowNormalBias=tt.normalBias,B.shadowRadius=tt.radius,B.shadowMapSize=tt.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=$,v++}x++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(P).multiplyScalar(D),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let tt=L.shadow,B=e.get(L);B.shadowIntensity=tt.intensity,B.shadowBias=tt.bias,B.shadowNormalBias=tt.normalBias,B.shadowRadius=tt.radius,B.shadowMapSize=tt.mapSize,B.shadowCameraNear=tt.camera.near,B.shadowCameraFar=tt.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=L.shadow.matrix,b++}i.point[g]=X,g++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(D),X.groundColor.copy(L.groundColor).multiplyScalar(D),i.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let T=i.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==y||T.numPointShadows!==b||T.numSpotShadows!==v||T.numSpotMaps!==E||T.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=v+E-S,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=R,T.directionalLength=d,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=y,T.numPointShadows=b,T.numSpotShadows=v,T.numSpotMaps=E,T.numLightProbes=R,i.version=ex++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let b=c[p];if(b.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),u++}else if(b.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function vu(r){let t=new nx(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sx(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new vu(r),t.set(n,[a])):s>=o.length?(a=new vu(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ac=class extends Vn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lc=class extends Vn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ax(r,t,e){let i=new zr,n=new te,s=new te,o=new pe,a=new ac({depthPacking:fd}),l=new lc,c={},h=e.maxTextureSize,u={[Bn]:Ye,[Ye]:Bn,[un]:un},f=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new oi;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let p=this.type;this.render=function(S,R,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let _=r.getRenderTarget(),w=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),P=r.state;P.setBlending(On),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let D=p!==cn&&this.type===cn,z=p===cn&&this.type!==cn;for(let $=0,X=S.length;$<X;$++){let tt=S[$],B=tt.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let ut=B.getFrameExtents();if(n.multiply(ut),s.copy(B.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ut.x),n.x=s.x*ut.x,B.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ut.y),n.y=s.y*ut.y,B.mapSize.y=s.y)),B.map===null||D===!0||z===!0){let Rt=this.type!==cn?{minFilter:xi,magFilter:xi}:{};B.map!==null&&B.map.dispose(),B.map=new Bi(n.x,n.y,Rt),B.map.texture.name=tt.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();let mt=B.getViewportCount();for(let Rt=0;Rt<mt;Rt++){let q=B.getViewport(Rt);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),P.viewport(o),B.updateMatrices(tt,Rt),i=B.getFrustum(),v(R,T,B.camera,tt,this.type)}B.isPointLightShadow!==!0&&this.type===cn&&y(B,T),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(_,w,L)};function y(S,R){let T=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Bi(n.x,n.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(R,null,T,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(R,null,T,d,x,null)}function b(S,R,T,_){let w=null,L=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)w=L;else if(w=T.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let P=w.uuid,D=R.uuid,z=c[P];z===void 0&&(z={},c[P]=z);let $=z[D];$===void 0&&($=w.clone(),z[D]=$,R.addEventListener("dispose",E)),w=$}if(w.visible=R.visible,w.wireframe=R.wireframe,_===cn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let P=r.properties.get(w);P.light=T}return w}function v(S,R,T,_,w){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===cn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let D=t.update(S),z=S.material;if(Array.isArray(z)){let $=D.groups;for(let X=0,tt=$.length;X<tt;X++){let B=$[X],ut=z[B.materialIndex];if(ut&&ut.visible){let mt=b(S,ut,_,w);S.onBeforeShadow(r,S,R,T,D,mt,B),r.renderBufferDirect(T,null,D,mt,S,B),S.onAfterShadow(r,S,R,T,D,mt,B)}}}else if(z.visible){let $=b(S,z,_,w);S.onBeforeShadow(r,S,R,T,D,$,null),r.renderBufferDirect(T,null,D,$,S,null),S.onAfterShadow(r,S,R,T,D,$,null)}}let P=S.children;for(let D=0,z=P.length;D<z;D++)v(P[D],R,T,_,w)}function E(S){S.target.removeEventListener("dispose",E);for(let T in c){let _=c[T],w=S.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}}var lx={[ul]:fl,[dl]:gl,[pl]:xl,[Ys]:ml,[fl]:ul,[gl]:dl,[xl]:pl,[ml]:Ys};function cx(r,t){function e(){let O=!1,Et=new pe,it=null,ht=new pe(0,0,0,0);return{setMask:function(Lt){it!==Lt&&!O&&(r.colorMask(Lt,Lt,Lt,Lt),it=Lt)},setLocked:function(Lt){O=Lt},setClear:function(Lt,Ct,ee,Pe,je){je===!0&&(Lt*=Pe,Ct*=Pe,ee*=Pe),Et.set(Lt,Ct,ee,Pe),ht.equals(Et)===!1&&(r.clearColor(Lt,Ct,ee,Pe),ht.copy(Et))},reset:function(){O=!1,it=null,ht.set(-1,0,0,0)}}}function i(){let O=!1,Et=!1,it=null,ht=null,Lt=null;return{setReversed:function(Ct){if(Et!==Ct){let ee=t.get("EXT_clip_control");Et?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let Pe=Lt;Lt=null,this.setClear(Pe)}Et=Ct},getReversed:function(){return Et},setTest:function(Ct){Ct?ot(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(Ct){it!==Ct&&!O&&(r.depthMask(Ct),it=Ct)},setFunc:function(Ct){if(Et&&(Ct=lx[Ct]),ht!==Ct){switch(Ct){case ul:r.depthFunc(r.NEVER);break;case fl:r.depthFunc(r.ALWAYS);break;case dl:r.depthFunc(r.LESS);break;case Ys:r.depthFunc(r.LEQUAL);break;case pl:r.depthFunc(r.EQUAL);break;case ml:r.depthFunc(r.GEQUAL);break;case gl:r.depthFunc(r.GREATER);break;case xl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ht=Ct}},setLocked:function(Ct){O=Ct},setClear:function(Ct){Lt!==Ct&&(Et&&(Ct=1-Ct),r.clearDepth(Ct),Lt=Ct)},reset:function(){O=!1,it=null,ht=null,Lt=null,Et=!1}}}function n(){let O=!1,Et=null,it=null,ht=null,Lt=null,Ct=null,ee=null,Pe=null,je=null;return{setTest:function(_e){O||(_e?ot(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(_e){Et!==_e&&!O&&(r.stencilMask(_e),Et=_e)},setFunc:function(_e,ki,en){(it!==_e||ht!==ki||Lt!==en)&&(r.stencilFunc(_e,ki,en),it=_e,ht=ki,Lt=en)},setOp:function(_e,ki,en){(Ct!==_e||ee!==ki||Pe!==en)&&(r.stencilOp(_e,ki,en),Ct=_e,ee=ki,Pe=en)},setLocked:function(_e){O=_e},setClear:function(_e){je!==_e&&(r.clearStencil(_e),je=_e)},reset:function(){O=!1,Et=null,it=null,ht=null,Lt=null,Ct=null,ee=null,Pe=null,je=null}}}let s=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,b=null,v=null,E=null,S=null,R=new Jt(0,0,0),T=0,_=!1,w=null,L=null,P=null,D=null,z=null,$=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=tt>=1):B.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=tt>=2);let ut=null,mt={},Rt=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),Xt=new pe().fromArray(Rt),j=new pe().fromArray(q);function W(O,Et,it,ht){let Lt=new Uint8Array(4),Ct=r.createTexture();r.bindTexture(O,Ct),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ee=0;ee<it;ee++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(Et,0,r.RGBA,1,1,ht,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(Et+ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return Ct}let ct={};ct[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),ct[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ct[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(r.DEPTH_TEST),o.setFunc(Ys),K(!1),rt(wh),ot(r.CULL_FACE),M(On);function ot(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function bt(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function G(O,Et){return u[O]!==Et?(r.bindFramebuffer(O,Et),u[O]=Et,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Et),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Et),!0):!1}function Y(O,Et){let it=d,ht=!1;if(O){it=f.get(Et),it===void 0&&(it=[],f.set(Et,it));let Lt=O.textures;if(it.length!==Lt.length||it[0]!==r.COLOR_ATTACHMENT0){for(let Ct=0,ee=Lt.length;Ct<ee;Ct++)it[Ct]=r.COLOR_ATTACHMENT0+Ct;it.length=Lt.length,ht=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,ht=!0);ht&&r.drawBuffers(it)}function ft(O){return g!==O?(r.useProgram(O),g=O,!0):!1}let vt={[ns]:r.FUNC_ADD,[Nf]:r.FUNC_SUBTRACT,[Ff]:r.FUNC_REVERSE_SUBTRACT};vt[Bf]=r.MIN,vt[Hf]=r.MAX;let xt={[Vf]:r.ZERO,[Gf]:r.ONE,[Wf]:r.SRC_COLOR,[cl]:r.SRC_ALPHA,[Kf]:r.SRC_ALPHA_SATURATE,[$f]:r.DST_COLOR,[Xf]:r.DST_ALPHA,[qf]:r.ONE_MINUS_SRC_COLOR,[hl]:r.ONE_MINUS_SRC_ALPHA,[Zf]:r.ONE_MINUS_DST_COLOR,[Yf]:r.ONE_MINUS_DST_ALPHA,[Jf]:r.CONSTANT_COLOR,[jf]:r.ONE_MINUS_CONSTANT_COLOR,[Qf]:r.CONSTANT_ALPHA,[td]:r.ONE_MINUS_CONSTANT_ALPHA};function M(O,Et,it,ht,Lt,Ct,ee,Pe,je,_e){if(O===On){x===!0&&(bt(r.BLEND),x=!1);return}if(x===!1&&(ot(r.BLEND),x=!0),O!==Of){if(O!==m||_e!==_){if((p!==ns||v!==ns)&&(r.blendEquation(r.FUNC_ADD),p=ns,v=ns),_e)switch(O){case Vs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xs:r.blendFunc(r.ONE,r.ONE);break;case Sh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Th:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xs:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Sh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Th:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,b=null,E=null,S=null,R.set(0,0,0),T=0,m=O,_=_e}return}Lt=Lt||Et,Ct=Ct||it,ee=ee||ht,(Et!==p||Lt!==v)&&(r.blendEquationSeparate(vt[Et],vt[Lt]),p=Et,v=Lt),(it!==y||ht!==b||Ct!==E||ee!==S)&&(r.blendFuncSeparate(xt[it],xt[ht],xt[Ct],xt[ee]),y=it,b=ht,E=Ct,S=ee),(Pe.equals(R)===!1||je!==T)&&(r.blendColor(Pe.r,Pe.g,Pe.b,je),R.copy(Pe),T=je),m=O,_=!1}function k(O,Et){O.side===un?bt(r.CULL_FACE):ot(r.CULL_FACE);let it=O.side===Ye;Et&&(it=!it),K(it),O.blending===Vs&&O.transparent===!1?M(On):M(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let ht=O.stencilWrite;a.setTest(ht),ht&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Tt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function K(O){w!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),w=O)}function rt(O){O!==zf?(ot(r.CULL_FACE),O!==L&&(O===wh?r.cullFace(r.BACK):O===Uf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),L=O}function et(O){O!==P&&(X&&r.lineWidth(O),P=O)}function Tt(O,Et,it){O?(ot(r.POLYGON_OFFSET_FILL),(D!==Et||z!==it)&&(r.polygonOffset(Et,it),D=Et,z=it)):bt(r.POLYGON_OFFSET_FILL)}function wt(O){O?ot(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function I(O){O===void 0&&(O=r.TEXTURE0+$-1),ut!==O&&(r.activeTexture(O),ut=O)}function A(O,Et,it){it===void 0&&(ut===null?it=r.TEXTURE0+$-1:it=ut);let ht=mt[it];ht===void 0&&(ht={type:void 0,texture:void 0},mt[it]=ht),(ht.type!==O||ht.texture!==Et)&&(ut!==it&&(r.activeTexture(it),ut=it),r.bindTexture(O,Et||ct[O]),ht.type=O,ht.texture=Et)}function H(){let O=mt[ut];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function st(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Zt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Kt(O){Xt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Xt.copy(O))}function Ot(O){j.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function he(O,Et){let it=c.get(Et);it===void 0&&(it=new WeakMap,c.set(Et,it));let ht=it.get(O);ht===void 0&&(ht=r.getUniformBlockIndex(Et,O.name),it.set(O,ht))}function re(O,Et){let ht=c.get(Et).get(O);l.get(Et)!==ht&&(r.uniformBlockBinding(Et,ht,O.__bindingPointIndex),l.set(Et,ht))}function Ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ut=null,mt={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,b=null,v=null,E=null,S=null,R=new Jt(0,0,0),T=0,_=!1,w=null,L=null,P=null,D=null,z=null,Xt.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:G,drawBuffers:Y,useProgram:ft,setBlending:M,setMaterial:k,setFlipSided:K,setCullFace:rt,setLineWidth:et,setPolygonOffset:Tt,setScissorTest:wt,activeTexture:I,bindTexture:A,unbindTexture:H,compressedTexImage2D:st,compressedTexImage3D:lt,texImage2D:Ut,texImage3D:Zt,updateUBOMapping:he,uniformBlockBinding:re,texStorage2D:ue,texStorage3D:yt,texSubImage2D:nt,texSubImage3D:zt,compressedTexSubImage2D:At,compressedTexSubImage3D:kt,scissor:Kt,viewport:Ot,reset:Ee}}function _u(r,t,e,i){let n=hx(i);switch(e){case Du:return r*t;case Uu:return r*t;case Ou:return r*t*2;case Ic:return r*t/n.components*n.byteLength;case Lc:return r*t/n.components*n.byteLength;case Nu:return r*t*2/n.components*n.byteLength;case Pc:return r*t*2/n.components*n.byteLength;case zu:return r*t*3/n.components*n.byteLength;case Ni:return r*t*4/n.components*n.byteLength;case kc:return r*t*4/n.components*n.byteLength;case _o:case Mo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bo:case wo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bl:case Sl:return Math.max(r,16)*Math.max(t,8)/4;case Ml:case wl:return Math.max(r,8)*Math.max(t,8)/2;case Tl:case El:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Al:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case So:case Vl:case Gl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Fu:case Wl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ql:case Xl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hx(r){switch(r){case Fi:case Lu:return{byteLength:1,components:1};case Dr:case Pu:case us:return{byteLength:2,components:1};case Rc:case Cc:return{byteLength:2,components:4};case as:case Ac:case $i:return{byteLength:4,components:1};case ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ux(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return d?new OffscreenCanvas(I,A):Ro("canvas")}function x(I,A,H){let st=1,lt=wt(I);if((lt.width>H||lt.height>H)&&(st=H/Math.max(lt.width,lt.height)),st<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let nt=Math.floor(st*lt.width),zt=Math.floor(st*lt.height);u===void 0&&(u=g(nt,zt));let At=A?g(nt,zt):u;return At.width=nt,At.height=zt,At.getContext("2d").drawImage(I,0,0,nt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+nt+"x"+zt+")."),At}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){r.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(I,A,H,st,lt=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let nt=A;if(A===r.RED&&(H===r.FLOAT&&(nt=r.R32F),H===r.HALF_FLOAT&&(nt=r.R16F),H===r.UNSIGNED_BYTE&&(nt=r.R8)),A===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(nt=r.R8UI),H===r.UNSIGNED_SHORT&&(nt=r.R16UI),H===r.UNSIGNED_INT&&(nt=r.R32UI),H===r.BYTE&&(nt=r.R8I),H===r.SHORT&&(nt=r.R16I),H===r.INT&&(nt=r.R32I)),A===r.RG&&(H===r.FLOAT&&(nt=r.RG32F),H===r.HALF_FLOAT&&(nt=r.RG16F),H===r.UNSIGNED_BYTE&&(nt=r.RG8)),A===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(nt=r.RG8UI),H===r.UNSIGNED_SHORT&&(nt=r.RG16UI),H===r.UNSIGNED_INT&&(nt=r.RG32UI),H===r.BYTE&&(nt=r.RG8I),H===r.SHORT&&(nt=r.RG16I),H===r.INT&&(nt=r.RG32I)),A===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(nt=r.RGB8UI),H===r.UNSIGNED_SHORT&&(nt=r.RGB16UI),H===r.UNSIGNED_INT&&(nt=r.RGB32UI),H===r.BYTE&&(nt=r.RGB8I),H===r.SHORT&&(nt=r.RGB16I),H===r.INT&&(nt=r.RGB32I)),A===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(nt=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(nt=r.RGBA16UI),H===r.UNSIGNED_INT&&(nt=r.RGBA32UI),H===r.BYTE&&(nt=r.RGBA8I),H===r.SHORT&&(nt=r.RGBA16I),H===r.INT&&(nt=r.RGBA32I)),A===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(nt=r.RGB9_E5),A===r.RGBA){let zt=lt?Yo:fe.getTransfer(st);H===r.FLOAT&&(nt=r.RGBA32F),H===r.HALF_FLOAT&&(nt=r.RGBA16F),H===r.UNSIGNED_BYTE&&(nt=zt===Me?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(I,A){let H;return I?A===null||A===as||A===Ks?H=r.DEPTH24_STENCIL8:A===$i?H=r.DEPTH32F_STENCIL8:A===Dr&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===as||A===Ks?H=r.DEPTH_COMPONENT24:A===$i?H=r.DEPTH_COMPONENT32F:A===Dr&&(H=r.DEPTH_COMPONENT16),H}function E(I,A){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==xi&&I.minFilter!==Yi?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function S(I){let A=I.target;A.removeEventListener("dispose",S),T(A),A.isVideoTexture&&h.delete(A)}function R(I){let A=I.target;A.removeEventListener("dispose",R),w(A)}function T(I){let A=i.get(I);if(A.__webglInit===void 0)return;let H=I.source,st=f.get(H);if(st){let lt=st[A.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&_(I),Object.keys(st).length===0&&f.delete(H)}i.remove(I)}function _(I){let A=i.get(I);r.deleteTexture(A.__webglTexture);let H=I.source,st=f.get(H);delete st[A.__cacheKey],o.memory.textures--}function w(I){let A=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(A.__webglFramebuffer[st]))for(let lt=0;lt<A.__webglFramebuffer[st].length;lt++)r.deleteFramebuffer(A.__webglFramebuffer[st][lt]);else r.deleteFramebuffer(A.__webglFramebuffer[st]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[st])}else{if(Array.isArray(A.__webglFramebuffer))for(let st=0;st<A.__webglFramebuffer.length;st++)r.deleteFramebuffer(A.__webglFramebuffer[st]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let st=0;st<A.__webglColorRenderbuffer.length;st++)A.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[st]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let H=I.textures;for(let st=0,lt=H.length;st<lt;st++){let nt=i.get(H[st]);nt.__webglTexture&&(r.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove(H[st])}i.remove(I)}let L=0;function P(){L=0}function D(){let I=L;return I>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),L+=1,I}function z(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function $(I,A){let H=i.get(I);if(I.isVideoTexture&&et(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){let st=I.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,I,A);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+A)}function X(I,A){let H=i.get(I);if(I.version>0&&H.__version!==I.version){j(H,I,A);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+A)}function tt(I,A){let H=i.get(I);if(I.version>0&&H.__version!==I.version){j(H,I,A);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+A)}function B(I,A){let H=i.get(I);if(I.version>0&&H.__version!==I.version){W(H,I,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+A)}let ut={[kr]:r.REPEAT,[rs]:r.CLAMP_TO_EDGE,[_l]:r.MIRRORED_REPEAT},mt={[xi]:r.NEAREST,[hd]:r.NEAREST_MIPMAP_NEAREST,[Yr]:r.NEAREST_MIPMAP_LINEAR,[Yi]:r.LINEAR,[Ia]:r.LINEAR_MIPMAP_NEAREST,[os]:r.LINEAR_MIPMAP_LINEAR},Rt={[pd]:r.NEVER,[_d]:r.ALWAYS,[md]:r.LESS,[Hu]:r.LEQUAL,[gd]:r.EQUAL,[vd]:r.GEQUAL,[xd]:r.GREATER,[yd]:r.NOTEQUAL};function q(I,A){if(A.type===$i&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Yi||A.magFilter===Ia||A.magFilter===Yr||A.magFilter===os||A.minFilter===Yi||A.minFilter===Ia||A.minFilter===Yr||A.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,ut[A.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,ut[A.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,ut[A.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,mt[A.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,mt[A.minFilter]),A.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Rt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xi||A.minFilter!==Yr&&A.minFilter!==os||A.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Xt(I,A){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",S));let st=A.source,lt=f.get(st);lt===void 0&&(lt={},f.set(st,lt));let nt=z(A);if(nt!==I.__cacheKey){lt[nt]===void 0&&(lt[nt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),lt[nt].usedTimes++;let zt=lt[I.__cacheKey];zt!==void 0&&(lt[I.__cacheKey].usedTimes--,zt.usedTimes===0&&_(A)),I.__cacheKey=nt,I.__webglTexture=lt[nt].texture}return H}function j(I,A,H){let st=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(st=r.TEXTURE_3D);let lt=Xt(I,A),nt=A.source;e.bindTexture(st,I.__webglTexture,r.TEXTURE0+H);let zt=i.get(nt);if(nt.version!==zt.__version||lt===!0){e.activeTexture(r.TEXTURE0+H);let At=fe.getPrimaries(fe.workingColorSpace),kt=A.colorSpace===zn?null:fe.getPrimaries(A.colorSpace),ue=A.colorSpace===zn||At===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let yt=x(A.image,!1,n.maxTextureSize);yt=Tt(A,yt);let Ut=s.convert(A.format,A.colorSpace),Zt=s.convert(A.type),Kt=b(A.internalFormat,Ut,Zt,A.colorSpace,A.isVideoTexture);q(st,A);let Ot,he=A.mipmaps,re=A.isVideoTexture!==!0,Ee=zt.__version===void 0||lt===!0,O=nt.dataReady,Et=E(A,yt);if(A.isDepthTexture)Kt=v(A.format===Js,A.type),Ee&&(re?e.texStorage2D(r.TEXTURE_2D,1,Kt,yt.width,yt.height):e.texImage2D(r.TEXTURE_2D,0,Kt,yt.width,yt.height,0,Ut,Zt,null));else if(A.isDataTexture)if(he.length>0){re&&Ee&&e.texStorage2D(r.TEXTURE_2D,Et,Kt,he[0].width,he[0].height);for(let it=0,ht=he.length;it<ht;it++)Ot=he[it],re?O&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,Ot.width,Ot.height,Ut,Zt,Ot.data):e.texImage2D(r.TEXTURE_2D,it,Kt,Ot.width,Ot.height,0,Ut,Zt,Ot.data);A.generateMipmaps=!1}else re?(Ee&&e.texStorage2D(r.TEXTURE_2D,Et,Kt,yt.width,yt.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,yt.width,yt.height,Ut,Zt,yt.data)):e.texImage2D(r.TEXTURE_2D,0,Kt,yt.width,yt.height,0,Ut,Zt,yt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){re&&Ee&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,Kt,he[0].width,he[0].height,yt.depth);for(let it=0,ht=he.length;it<ht;it++)if(Ot=he[it],A.format!==Ni)if(Ut!==null)if(re){if(O)if(A.layerUpdates.size>0){let Lt=_u(Ot.width,Ot.height,A.format,A.type);for(let Ct of A.layerUpdates){let ee=Ot.data.subarray(Ct*Lt/Ot.data.BYTES_PER_ELEMENT,(Ct+1)*Lt/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,Ct,Ot.width,Ot.height,1,Ut,ee)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,Ot.width,Ot.height,yt.depth,Ut,Ot.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,it,Kt,Ot.width,Ot.height,yt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,Ot.width,Ot.height,yt.depth,Ut,Zt,Ot.data):e.texImage3D(r.TEXTURE_2D_ARRAY,it,Kt,Ot.width,Ot.height,yt.depth,0,Ut,Zt,Ot.data)}else{re&&Ee&&e.texStorage2D(r.TEXTURE_2D,Et,Kt,he[0].width,he[0].height);for(let it=0,ht=he.length;it<ht;it++)Ot=he[it],A.format!==Ni?Ut!==null?re?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,it,0,0,Ot.width,Ot.height,Ut,Ot.data):e.compressedTexImage2D(r.TEXTURE_2D,it,Kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?O&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,Ot.width,Ot.height,Ut,Zt,Ot.data):e.texImage2D(r.TEXTURE_2D,it,Kt,Ot.width,Ot.height,0,Ut,Zt,Ot.data)}else if(A.isDataArrayTexture)if(re){if(Ee&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,Kt,yt.width,yt.height,yt.depth),O)if(A.layerUpdates.size>0){let it=_u(yt.width,yt.height,A.format,A.type);for(let ht of A.layerUpdates){let Lt=yt.data.subarray(ht*it/yt.data.BYTES_PER_ELEMENT,(ht+1)*it/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ht,yt.width,yt.height,1,Ut,Zt,Lt)}A.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Ut,Zt,yt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Kt,yt.width,yt.height,yt.depth,0,Ut,Zt,yt.data);else if(A.isData3DTexture)re?(Ee&&e.texStorage3D(r.TEXTURE_3D,Et,Kt,yt.width,yt.height,yt.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Ut,Zt,yt.data)):e.texImage3D(r.TEXTURE_3D,0,Kt,yt.width,yt.height,yt.depth,0,Ut,Zt,yt.data);else if(A.isFramebufferTexture){if(Ee)if(re)e.texStorage2D(r.TEXTURE_2D,Et,Kt,yt.width,yt.height);else{let it=yt.width,ht=yt.height;for(let Lt=0;Lt<Et;Lt++)e.texImage2D(r.TEXTURE_2D,Lt,Kt,it,ht,0,Ut,Zt,null),it>>=1,ht>>=1}}else if(he.length>0){if(re&&Ee){let it=wt(he[0]);e.texStorage2D(r.TEXTURE_2D,Et,Kt,it.width,it.height)}for(let it=0,ht=he.length;it<ht;it++)Ot=he[it],re?O&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,Ut,Zt,Ot):e.texImage2D(r.TEXTURE_2D,it,Kt,Ut,Zt,Ot);A.generateMipmaps=!1}else if(re){if(Ee){let it=wt(yt);e.texStorage2D(r.TEXTURE_2D,Et,Kt,it.width,it.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ut,Zt,yt)}else e.texImage2D(r.TEXTURE_2D,0,Kt,Ut,Zt,yt);m(A)&&p(st),zt.__version=nt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function W(I,A,H){if(A.image.length!==6)return;let st=Xt(I,A),lt=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+H);let nt=i.get(lt);if(lt.version!==nt.__version||st===!0){e.activeTexture(r.TEXTURE0+H);let zt=fe.getPrimaries(fe.workingColorSpace),At=A.colorSpace===zn?null:fe.getPrimaries(A.colorSpace),kt=A.colorSpace===zn||zt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let ue=A.isCompressedTexture||A.image[0].isCompressedTexture,yt=A.image[0]&&A.image[0].isDataTexture,Ut=[];for(let ht=0;ht<6;ht++)!ue&&!yt?Ut[ht]=x(A.image[ht],!0,n.maxCubemapSize):Ut[ht]=yt?A.image[ht].image:A.image[ht],Ut[ht]=Tt(A,Ut[ht]);let Zt=Ut[0],Kt=s.convert(A.format,A.colorSpace),Ot=s.convert(A.type),he=b(A.internalFormat,Kt,Ot,A.colorSpace),re=A.isVideoTexture!==!0,Ee=nt.__version===void 0||st===!0,O=lt.dataReady,Et=E(A,Zt);q(r.TEXTURE_CUBE_MAP,A);let it;if(ue){re&&Ee&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,he,Zt.width,Zt.height);for(let ht=0;ht<6;ht++){it=Ut[ht].mipmaps;for(let Lt=0;Lt<it.length;Lt++){let Ct=it[Lt];A.format!==Ni?Kt!==null?re?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Lt,0,0,Ct.width,Ct.height,Kt,Ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Lt,he,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Lt,0,0,Ct.width,Ct.height,Kt,Ot,Ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Lt,he,Ct.width,Ct.height,0,Kt,Ot,Ct.data)}}}else{if(it=A.mipmaps,re&&Ee){it.length>0&&Et++;let ht=wt(Ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,he,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(yt){re?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ut[ht].width,Ut[ht].height,Kt,Ot,Ut[ht].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,he,Ut[ht].width,Ut[ht].height,0,Kt,Ot,Ut[ht].data);for(let Lt=0;Lt<it.length;Lt++){let ee=it[Lt].image[ht].image;re?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Lt+1,0,0,ee.width,ee.height,Kt,Ot,ee.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Lt+1,he,ee.width,ee.height,0,Kt,Ot,ee.data)}}else{re?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Kt,Ot,Ut[ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,he,Kt,Ot,Ut[ht]);for(let Lt=0;Lt<it.length;Lt++){let Ct=it[Lt];re?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Lt+1,0,0,Kt,Ot,Ct.image[ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Lt+1,he,Kt,Ot,Ct.image[ht])}}}m(A)&&p(r.TEXTURE_CUBE_MAP),nt.__version=lt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ct(I,A,H,st,lt,nt){let zt=s.convert(H.format,H.colorSpace),At=s.convert(H.type),kt=b(H.internalFormat,zt,At,H.colorSpace),ue=i.get(A),yt=i.get(H);if(yt.__renderTarget=A,!ue.__hasExternalTextures){let Ut=Math.max(1,A.width>>nt),Zt=Math.max(1,A.height>>nt);lt===r.TEXTURE_3D||lt===r.TEXTURE_2D_ARRAY?e.texImage3D(lt,nt,kt,Ut,Zt,A.depth,0,zt,At,null):e.texImage2D(lt,nt,kt,Ut,Zt,0,zt,At,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),rt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,lt,yt.__webglTexture,0,K(A)):(lt===r.TEXTURE_2D||lt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,lt,yt.__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(I,A,H){if(r.bindRenderbuffer(r.RENDERBUFFER,I),A.depthBuffer){let st=A.depthTexture,lt=st&&st.isDepthTexture?st.type:null,nt=v(A.stencilBuffer,lt),zt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=K(A);rt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,nt,A.width,A.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,nt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,nt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,I)}else{let st=A.textures;for(let lt=0;lt<st.length;lt++){let nt=st[lt],zt=s.convert(nt.format,nt.colorSpace),At=s.convert(nt.type),kt=b(nt.internalFormat,zt,At,nt.colorSpace),ue=K(A);H&&rt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,kt,A.width,A.height):rt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,kt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,kt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=i.get(A.depthTexture);st.__renderTarget=A,(!st.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$(A.depthTexture,0);let lt=st.__webglTexture,nt=K(A);if(A.depthTexture.format===Gs)rt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,lt,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,lt,0);else if(A.depthTexture.format===Js)rt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,lt,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function G(I){let A=i.get(I),H=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let st=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),st){let lt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,st.removeEventListener("dispose",lt)};st.addEventListener("dispose",lt),A.__depthDisposeCallback=lt}A.__boundDepthTexture=st}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");bt(A.__webglFramebuffer,I)}else if(H){A.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[st]),A.__webglDepthbuffer[st]===void 0)A.__webglDepthbuffer[st]=r.createRenderbuffer(),ot(A.__webglDepthbuffer[st],I,!1);else{let lt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=A.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,lt,r.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),ot(A.__webglDepthbuffer,I,!1);else{let st=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,lt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(I,A,H){let st=i.get(I);A!==void 0&&ct(st.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&G(I)}function ft(I){let A=I.texture,H=i.get(I),st=i.get(A);I.addEventListener("dispose",R);let lt=I.textures,nt=I.isWebGLCubeRenderTarget===!0,zt=lt.length>1;if(zt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=A.version,o.memory.textures++),nt){H.__webglFramebuffer=[];for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[At]=[];for(let kt=0;kt<A.mipmaps.length;kt++)H.__webglFramebuffer[At][kt]=r.createFramebuffer()}else H.__webglFramebuffer[At]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let At=0;At<A.mipmaps.length;At++)H.__webglFramebuffer[At]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(zt)for(let At=0,kt=lt.length;At<kt;At++){let ue=i.get(lt[At]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&rt(I)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let At=0;At<lt.length;At++){let kt=lt[At];H.__webglColorRenderbuffer[At]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[At]);let ue=s.convert(kt.format,kt.colorSpace),yt=s.convert(kt.type),Ut=b(kt.internalFormat,ue,yt,kt.colorSpace,I.isXRRenderTarget===!0),Zt=K(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Ut,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,H.__webglColorRenderbuffer[At])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),ot(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),q(r.TEXTURE_CUBE_MAP,A);for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0)for(let kt=0;kt<A.mipmaps.length;kt++)ct(H.__webglFramebuffer[At][kt],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,kt);else ct(H.__webglFramebuffer[At],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);m(A)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let At=0,kt=lt.length;At<kt;At++){let ue=lt[At],yt=i.get(ue);e.bindTexture(r.TEXTURE_2D,yt.__webglTexture),q(r.TEXTURE_2D,ue),ct(H.__webglFramebuffer,I,ue,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,0),m(ue)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let At=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(At=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(At,st.__webglTexture),q(At,A),A.mipmaps&&A.mipmaps.length>0)for(let kt=0;kt<A.mipmaps.length;kt++)ct(H.__webglFramebuffer[kt],I,A,r.COLOR_ATTACHMENT0,At,kt);else ct(H.__webglFramebuffer,I,A,r.COLOR_ATTACHMENT0,At,0);m(A)&&p(At),e.unbindTexture()}I.depthBuffer&&G(I)}function vt(I){let A=I.textures;for(let H=0,st=A.length;H<st;H++){let lt=A[H];if(m(lt)){let nt=y(I),zt=i.get(lt).__webglTexture;e.bindTexture(nt,zt),p(nt),e.unbindTexture()}}}let xt=[],M=[];function k(I){if(I.samples>0){if(rt(I)===!1){let A=I.textures,H=I.width,st=I.height,lt=r.COLOR_BUFFER_BIT,nt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=i.get(I),At=A.length>1;if(At)for(let kt=0;kt<A.length;kt++)e.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let kt=0;kt<A.length;kt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(lt|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(lt|=r.STENCIL_BUFFER_BIT)),At){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[kt]);let ue=i.get(A[kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ue,0)}r.blitFramebuffer(0,0,H,st,0,0,H,st,lt,r.NEAREST),l===!0&&(xt.length=0,M.length=0,xt.push(r.COLOR_ATTACHMENT0+kt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(xt.push(nt),M.push(nt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,M)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),At)for(let kt=0;kt<A.length;kt++){e.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[kt]);let ue=i.get(A[kt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,ue,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let A=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function K(I){return Math.min(n.maxSamples,I.samples)}function rt(I){let A=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function et(I){let A=o.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function Tt(I,A){let H=I.colorSpace,st=I.format,lt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==rr&&H!==zn&&(fe.getTransfer(H)===Me?(st!==Ni||lt!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}function wt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=B,this.rebindTextures=Y,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=rt}function fx(r,t){function e(i,n=zn){let s,o=fe.getTransfer(n);if(i===Fi)return r.UNSIGNED_BYTE;if(i===Rc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Cc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===ku)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Lu)return r.BYTE;if(i===Pu)return r.SHORT;if(i===Dr)return r.UNSIGNED_SHORT;if(i===Ac)return r.INT;if(i===as)return r.UNSIGNED_INT;if(i===$i)return r.FLOAT;if(i===us)return r.HALF_FLOAT;if(i===Du)return r.ALPHA;if(i===zu)return r.RGB;if(i===Ni)return r.RGBA;if(i===Uu)return r.LUMINANCE;if(i===Ou)return r.LUMINANCE_ALPHA;if(i===Gs)return r.DEPTH_COMPONENT;if(i===Js)return r.DEPTH_STENCIL;if(i===Ic)return r.RED;if(i===Lc)return r.RED_INTEGER;if(i===Nu)return r.RG;if(i===Pc)return r.RG_INTEGER;if(i===kc)return r.RGBA_INTEGER;if(i===_o||i===Mo||i===bo||i===wo)if(o===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===bl||i===wl||i===Sl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===El||i===Al)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tl||i===El)return o===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Al)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rl||i===Cl||i===Il||i===Ll||i===Pl||i===kl||i===Dl||i===zl||i===Ul||i===Ol||i===Nl||i===Fl||i===Bl||i===Hl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===So||i===Vl||i===Gl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===So)return o===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fu||i===Wl||i===ql||i===Xl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===So)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var cc=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ve=class extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}},dx={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ve;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new hi,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ui({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uc=class extends Hn{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new hc,m=e.getContextAttributes(),p=null,y=null,b=[],v=[],E=new te,S=null,R=new Xe;R.viewport=new pe;let T=new Xe;T.viewport=new pe;let _=[R,T],w=new cc,L=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let W=b[j];return W===void 0&&(W=new Pr,b[j]=W),W.getTargetRaySpace()},this.getControllerGrip=function(j){let W=b[j];return W===void 0&&(W=new Pr,b[j]=W),W.getGripSpace()},this.getHand=function(j){let W=b[j];return W===void 0&&(W=new Pr,b[j]=W),W.getHandSpace()};function D(j){let W=v.indexOf(j.inputSource);if(W===-1)return;let ct=b[W];ct!==void 0&&(ct.update(j.inputSource,j.frame,c||o),ct.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",$);for(let j=0;j<b.length;j++){let W=v[j];W!==null&&(v[j]=null,b[j].disconnect(W))}L=null,P=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,n=null,y=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",z),n.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(E),n.renderState.layers===void 0){let W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,W),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Bi(d.framebufferWidth,d.framebufferHeight,{format:Ni,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,ct=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=m.stencil?Js:Gs,ct=m.stencil?Ks:as);let bt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(bt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Bi(f.textureWidth,f.textureHeight,{format:Ni,type:Fi,depthTexture:new Oo(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Xt.setContext(n),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(j){for(let W=0;W<j.removed.length;W++){let ct=j.removed[W],ot=v.indexOf(ct);ot>=0&&(v[ot]=null,b[ot].disconnect(ct))}for(let W=0;W<j.added.length;W++){let ct=j.added[W],ot=v.indexOf(ct);if(ot===-1){for(let G=0;G<b.length;G++)if(G>=v.length){v.push(ct),ot=G;break}else if(v[G]===null){v[G]=ct,ot=G;break}if(ot===-1)break}let bt=b[ot];bt&&bt.connect(ct)}}let X=new U,tt=new U;function B(j,W,ct){X.setFromMatrixPosition(W.matrixWorld),tt.setFromMatrixPosition(ct.matrixWorld);let ot=X.distanceTo(tt),bt=W.projectionMatrix.elements,G=ct.projectionMatrix.elements,Y=bt[14]/(bt[10]-1),ft=bt[14]/(bt[10]+1),vt=(bt[9]+1)/bt[5],xt=(bt[9]-1)/bt[5],M=(bt[8]-1)/bt[0],k=(G[8]+1)/G[0],K=Y*M,rt=Y*k,et=ot/(-M+k),Tt=et*-M;if(W.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Tt),j.translateZ(et),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),bt[10]===-1)j.projectionMatrix.copy(W.projectionMatrix),j.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let wt=Y+et,I=ft+et,A=K-Tt,H=rt+(ot-Tt),st=vt*ft/I*wt,lt=xt*ft/I*wt;j.projectionMatrix.makePerspective(A,H,st,lt,wt,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ut(j,W){W===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(W.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let W=j.near,ct=j.far;x.texture!==null&&(x.depthNear>0&&(W=x.depthNear),x.depthFar>0&&(ct=x.depthFar)),w.near=T.near=R.near=W,w.far=T.far=R.far=ct,(L!==w.near||P!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,P=w.far),R.layers.mask=j.layers.mask|2,T.layers.mask=j.layers.mask|4,w.layers.mask=R.layers.mask|T.layers.mask;let ot=j.parent,bt=w.cameras;ut(w,ot);for(let G=0;G<bt.length;G++)ut(bt[G],ot);bt.length===2?B(w,R,T):w.projectionMatrix.copy(R.projectionMatrix),mt(j,w,ot)};function mt(j,W,ct){ct===null?j.matrix.copy(W.matrixWorld):(j.matrix.copy(ct.matrixWorld),j.matrix.invert(),j.matrix.multiply(W.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(W.projectionMatrix),j.projectionMatrixInverse.copy(W.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ao*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let Rt=null;function q(j,W){if(h=W.getViewerPose(c||o),g=W,h!==null){let ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ot=!1;ct.length!==w.cameras.length&&(w.cameras.length=0,ot=!0);for(let G=0;G<ct.length;G++){let Y=ct[G],ft=null;if(d!==null)ft=d.getViewport(Y);else{let xt=u.getViewSubImage(f,Y);ft=xt.viewport,G===0&&(t.setRenderTargetTextures(y,xt.colorTexture,f.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(y))}let vt=_[G];vt===void 0&&(vt=new Xe,vt.layers.enable(G),vt.viewport=new pe,_[G]=vt),vt.matrix.fromArray(Y.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Y.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(ft.x,ft.y,ft.width,ft.height),G===0&&(w.matrix.copy(vt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ot===!0&&w.cameras.push(vt)}let bt=n.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let G=u.getDepthInformation(ct[0]);G&&G.isValid&&G.texture&&x.init(t,G,n.renderState)}}for(let ct=0;ct<b.length;ct++){let ot=v[ct],bt=b[ct];ot!==null&&bt!==void 0&&bt.update(ot,W,c||o)}Rt&&Rt(j,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}let Xt=new qu;Xt.setAnimationLoop(q),this.setAnimationLoop=function(j){Rt=j},this.dispose=function(){}}},es=new Ei,gx=new we;function xx(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Wu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,es.copy(v),es.x*=-1,es.y*=-1,es.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(es)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function yx(r,t,e,i){let n={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let v=b.program;i.uniformBlockBinding(y,v)}function c(y,b){let v=n[y.id];v===void 0&&(g(y),v=h(y),n[y.id]=v,y.addEventListener("dispose",m));let E=b.program;i.updateUBOMapping(y,E);let S=t.render.frame;s[y.id]!==S&&(f(y),s[y.id]=S)}function h(y){let b=u();y.__bindingPointIndex=b;let v=r.createBuffer(),E=y.__size,S=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let b=n[y.id],v=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let S=0,R=v.length;S<R;S++){let T=Array.isArray(v[S])?v[S]:[v[S]];for(let _=0,w=T.length;_<w;_++){let L=T[_];if(d(L,S,_,E)===!0){let P=L.__offset,D=Array.isArray(L.value)?L.value:[L.value],z=0;for(let $=0;$<D.length;$++){let X=D[$],tt=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,P+z,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,z),z+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,b,v,E){let S=y.value,R=b+"_"+v;if(E[R]===void 0)return typeof S=="number"||typeof S=="boolean"?E[R]=S:E[R]=S.clone(),!0;{let T=E[R];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return E[R]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function g(y){let b=y.uniforms,v=0,E=16;for(let R=0,T=b.length;R<T;R++){let _=Array.isArray(b[R])?b[R]:[b[R]];for(let w=0,L=_.length;w<L;w++){let P=_[w],D=Array.isArray(P.value)?P.value:[P.value];for(let z=0,$=D.length;z<$;z++){let X=D[z],tt=x(X),B=v%E,ut=B%tt.boundary,mt=B+ut;v+=ut,mt!==0&&E-mt<tt.storage&&(v+=E-mt),P.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=tt.storage}}}let S=v%E;return S>0&&(v+=E-S),y.__size=v,y.__cache={},this}function x(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function p(){for(let y in n)r.deleteBuffer(n[y]);o=[],n={},s={}}return{bind:l,update:c,dispose:p}}var No=class{constructor(t={}){let{canvas:e=bd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Nn,this.toneMappingExposure=1;let v=this,E=!1,S=0,R=0,T=null,_=-1,w=null,L=new pe,P=new pe,D=null,z=new Jt(0),$=0,X=e.width,tt=e.height,B=1,ut=null,mt=null,Rt=new pe(0,0,X,tt),q=new pe(0,0,X,tt),Xt=!1,j=new zr,W=!1,ct=!1,ot=new we,bt=new we,G=new U,Y=new pe,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function xt(){return T===null?B:1}let M=i;function k(C,N){return e.getContext(C,N)}try{let C={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),M===null){let N="webgl2";if(M=k(N,C),M===null)throw k(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let K,rt,et,Tt,wt,I,A,H,st,lt,nt,zt,At,kt,ue,yt,Ut,Zt,Kt,Ot,he,re,Ee,O;function Et(){K=new Dm(M),K.init(),re=new fx(M,K),rt=new Rm(M,K,t,re),et=new cx(M,K),rt.reverseDepthBuffer&&f&&et.buffers.depth.setReversed(!0),Tt=new Om(M),wt=new Kg,I=new ux(M,K,et,wt,rt,re,Tt),A=new Im(v),H=new km(v),st=new Wd(M),Ee=new Em(M,st),lt=new zm(M,st,Tt,Ee),nt=new Fm(M,lt,st,Tt),Kt=new Nm(M,rt,I),yt=new Cm(wt),zt=new Zg(v,A,H,K,rt,Ee,yt),At=new xx(v,wt),kt=new jg,ue=new sx(K),Zt=new Tm(v,A,H,et,nt,d,l),Ut=new ax(v,nt,rt),O=new yx(M,Tt,rt,et),Ot=new Am(M,K,Tt),he=new Um(M,K,Tt),Tt.programs=zt.programs,v.capabilities=rt,v.extensions=K,v.properties=wt,v.renderLists=kt,v.shadowMap=Ut,v.state=et,v.info=Tt}Et();let it=new uc(v,M);this.xr=it,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let C=K.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=K.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(X,tt,!1))},this.getSize=function(C){return C.set(X,tt)},this.setSize=function(C,N,Z=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,tt=N,e.width=Math.floor(C*B),e.height=Math.floor(N*B),Z===!0&&(e.style.width=C+"px",e.style.height=N+"px"),this.setViewport(0,0,C,N)},this.getDrawingBufferSize=function(C){return C.set(X*B,tt*B).floor()},this.setDrawingBufferSize=function(C,N,Z){X=C,tt=N,B=Z,e.width=Math.floor(C*Z),e.height=Math.floor(N*Z),this.setViewport(0,0,C,N)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(Rt)},this.setViewport=function(C,N,Z,J){C.isVector4?Rt.set(C.x,C.y,C.z,C.w):Rt.set(C,N,Z,J),et.viewport(L.copy(Rt).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,N,Z,J){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,N,Z,J),et.scissor(P.copy(q).multiplyScalar(B).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(C){et.setScissorTest(Xt=C)},this.setOpaqueSort=function(C){ut=C},this.setTransparentSort=function(C){mt=C},this.getClearColor=function(C){return C.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(C=!0,N=!0,Z=!0){let J=0;if(C){let F=!1;if(T!==null){let _t=T.texture.format;F=_t===kc||_t===Pc||_t===Lc}if(F){let _t=T.texture.type,It=_t===Fi||_t===as||_t===Dr||_t===Ks||_t===Rc||_t===Cc,Ht=Zt.getClearColor(),Vt=Zt.getClearAlpha(),Qt=Ht.r,ie=Ht.g,Gt=Ht.b;It?(g[0]=Qt,g[1]=ie,g[2]=Gt,g[3]=Vt,M.clearBufferuiv(M.COLOR,0,g)):(x[0]=Qt,x[1]=ie,x[2]=Gt,x[3]=Vt,M.clearBufferiv(M.COLOR,0,x))}else J|=M.COLOR_BUFFER_BIT}N&&(J|=M.DEPTH_BUFFER_BIT),Z&&(J|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),kt.dispose(),ue.dispose(),wt.dispose(),A.dispose(),H.dispose(),nt.dispose(),Ee.dispose(),O.dispose(),zt.dispose(),it.dispose(),it.removeEventListener("sessionstart",mh),it.removeEventListener("sessionend",gh),Zn.stop()};function ht(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let C=Tt.autoReset,N=Ut.enabled,Z=Ut.autoUpdate,J=Ut.needsUpdate,F=Ut.type;Et(),Tt.autoReset=C,Ut.enabled=N,Ut.autoUpdate=Z,Ut.needsUpdate=J,Ut.type=F}function Ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ee(C){let N=C.target;N.removeEventListener("dispose",ee),Pe(N)}function Pe(C){je(C),wt.remove(C)}function je(C){let N=wt.get(C).programs;N!==void 0&&(N.forEach(function(Z){zt.releaseProgram(Z)}),C.isShaderMaterial&&zt.releaseShaderCache(C))}this.renderBufferDirect=function(C,N,Z,J,F,_t){N===null&&(N=ft);let It=F.isMesh&&F.matrixWorld.determinant()<0,Ht=Pf(C,N,Z,J,F);et.setMaterial(J,It);let Vt=Z.index,Qt=1;if(J.wireframe===!0){if(Vt=lt.getWireframeAttribute(Z),Vt===void 0)return;Qt=2}let ie=Z.drawRange,Gt=Z.attributes.position,de=ie.start*Qt,Ae=(ie.start+ie.count)*Qt;_t!==null&&(de=Math.max(de,_t.start*Qt),Ae=Math.min(Ae,(_t.start+_t.count)*Qt)),Vt!==null?(de=Math.max(de,0),Ae=Math.min(Ae,Vt.count)):Gt!=null&&(de=Math.max(de,0),Ae=Math.min(Ae,Gt.count));let Re=Ae-de;if(Re<0||Re===1/0)return;Ee.setup(F,J,Ht,Z,Vt);let li,xe=Ot;if(Vt!==null&&(li=st.get(Vt),xe=he,xe.setIndex(li)),F.isMesh)J.wireframe===!0?(et.setLineWidth(J.wireframeLinewidth*xt()),xe.setMode(M.LINES)):xe.setMode(M.TRIANGLES);else if(F.isLine){let Wt=J.linewidth;Wt===void 0&&(Wt=1),et.setLineWidth(Wt*xt()),F.isLineSegments?xe.setMode(M.LINES):F.isLineLoop?xe.setMode(M.LINE_LOOP):xe.setMode(M.LINE_STRIP)}else F.isPoints?xe.setMode(M.POINTS):F.isSprite&&xe.setMode(M.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)xe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))xe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Wt=F._multiDrawStarts,nn=F._multiDrawCounts,ye=F._multiDrawCount,Di=Vt?st.get(Vt).bytesPerElement:1,Ms=wt.get(J).currentProgram.getUniforms();for(let pi=0;pi<ye;pi++)Ms.setValue(M,"_gl_DrawID",pi),xe.render(Wt[pi]/Di,nn[pi])}else if(F.isInstancedMesh)xe.renderInstances(de,Re,F.count);else if(Z.isInstancedBufferGeometry){let Wt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,nn=Math.min(Z.instanceCount,Wt);xe.renderInstances(de,Re,nn)}else xe.render(de,Re)};function _e(C,N,Z){C.transparent===!0&&C.side===un&&C.forceSinglePass===!1?(C.side=Ye,C.needsUpdate=!0,Xr(C,N,Z),C.side=Bn,C.needsUpdate=!0,Xr(C,N,Z),C.side=un):Xr(C,N,Z)}this.compile=function(C,N,Z=null){Z===null&&(Z=C),p=ue.get(Z),p.init(N),b.push(p),Z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),C!==Z&&C.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let J=new Set;return C.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let _t=F.material;if(_t)if(Array.isArray(_t))for(let It=0;It<_t.length;It++){let Ht=_t[It];_e(Ht,Z,F),J.add(Ht)}else _e(_t,Z,F),J.add(_t)}),b.pop(),p=null,J},this.compileAsync=function(C,N,Z=null){let J=this.compile(C,N,Z);return new Promise(F=>{function _t(){if(J.forEach(function(It){wt.get(It).currentProgram.isReady()&&J.delete(It)}),J.size===0){F(C);return}setTimeout(_t,10)}K.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ki=null;function en(C){ki&&ki(C)}function mh(){Zn.stop()}function gh(){Zn.start()}let Zn=new qu;Zn.setAnimationLoop(en),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(C){ki=C,it.setAnimationLoop(C),C===null?Zn.stop():Zn.start()},it.addEventListener("sessionstart",mh),it.addEventListener("sessionend",gh),this.render=function(C,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(N),N=it.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,N,T),p=ue.get(C,b.length),p.init(N),b.push(p),bt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(bt),ct=this.localClippingEnabled,W=yt.init(this.clippingPlanes,ct),m=kt.get(C,y.length),m.init(),y.push(m),it.enabled===!0&&it.isPresenting===!0){let _t=v.xr.getDepthSensingMesh();_t!==null&&Ca(_t,N,-1/0,v.sortObjects)}Ca(C,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ut,mt),vt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,vt&&Zt.addToRenderList(m,C),this.info.render.frame++,W===!0&&yt.beginShadows();let Z=p.state.shadowsArray;Ut.render(Z,C,N),W===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){let _t=N.cameras;if(F.length>0)for(let It=0,Ht=_t.length;It<Ht;It++){let Vt=_t[It];yh(J,F,C,Vt)}vt&&Zt.render(C);for(let It=0,Ht=_t.length;It<Ht;It++){let Vt=_t[It];xh(m,C,Vt,Vt.viewport)}}else F.length>0&&yh(J,F,C,N),vt&&Zt.render(C),xh(m,C,N);T!==null&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,N),Ee.resetDefaultState(),_=-1,w=null,b.pop(),b.length>0?(p=b[b.length-1],W===!0&&yt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ca(C,N,Z,J){if(C.visible===!1)return;if(C.layers.test(N.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(N);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){J&&Y.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);let It=nt.update(C),Ht=C.material;Ht.visible&&m.push(C,It,Ht,Z,Y.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){let It=nt.update(C),Ht=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Y.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Y.copy(It.boundingSphere.center)),Y.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(Ht)){let Vt=It.groups;for(let Qt=0,ie=Vt.length;Qt<ie;Qt++){let Gt=Vt[Qt],de=Ht[Gt.materialIndex];de&&de.visible&&m.push(C,It,de,Z,Y.z,Gt)}}else Ht.visible&&m.push(C,It,Ht,Z,Y.z,null)}}let _t=C.children;for(let It=0,Ht=_t.length;It<Ht;It++)Ca(_t[It],N,Z,J)}function xh(C,N,Z,J){let F=C.opaque,_t=C.transmissive,It=C.transparent;p.setupLightsView(Z),W===!0&&yt.setGlobalState(v.clippingPlanes,Z),J&&et.viewport(L.copy(J)),F.length>0&&qr(F,N,Z),_t.length>0&&qr(_t,N,Z),It.length>0&&qr(It,N,Z),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function yh(C,N,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Bi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?us:Fi,minFilter:os,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));let _t=p.state.transmissionRenderTarget[J.id],It=J.viewport||L;_t.setSize(It.z,It.w);let Ht=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(z),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),vt&&Zt.render(Z);let Vt=v.toneMapping;v.toneMapping=Nn;let Qt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),W===!0&&yt.setGlobalState(v.clippingPlanes,J),qr(C,Z,J),I.updateMultisampleRenderTarget(_t),I.updateRenderTargetMipmap(_t),K.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Gt=0,de=N.length;Gt<de;Gt++){let Ae=N[Gt],Re=Ae.object,li=Ae.geometry,xe=Ae.material,Wt=Ae.group;if(xe.side===un&&Re.layers.test(J.layers)){let nn=xe.side;xe.side=Ye,xe.needsUpdate=!0,vh(Re,Z,J,li,xe,Wt),xe.side=nn,xe.needsUpdate=!0,ie=!0}}ie===!0&&(I.updateMultisampleRenderTarget(_t),I.updateRenderTargetMipmap(_t))}v.setRenderTarget(Ht),v.setClearColor(z,$),Qt!==void 0&&(J.viewport=Qt),v.toneMapping=Vt}function qr(C,N,Z){let J=N.isScene===!0?N.overrideMaterial:null;for(let F=0,_t=C.length;F<_t;F++){let It=C[F],Ht=It.object,Vt=It.geometry,Qt=J===null?It.material:J,ie=It.group;Ht.layers.test(Z.layers)&&vh(Ht,N,Z,Vt,Qt,ie)}}function vh(C,N,Z,J,F,_t){C.onBeforeRender(v,N,Z,J,F,_t),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),F.onBeforeRender(v,N,Z,J,C,_t),F.transparent===!0&&F.side===un&&F.forceSinglePass===!1?(F.side=Ye,F.needsUpdate=!0,v.renderBufferDirect(Z,N,J,F,C,_t),F.side=Bn,F.needsUpdate=!0,v.renderBufferDirect(Z,N,J,F,C,_t),F.side=un):v.renderBufferDirect(Z,N,J,F,C,_t),C.onAfterRender(v,N,Z,J,F,_t)}function Xr(C,N,Z){N.isScene!==!0&&(N=ft);let J=wt.get(C),F=p.state.lights,_t=p.state.shadowsArray,It=F.state.version,Ht=zt.getParameters(C,F.state,_t,N,Z),Vt=zt.getProgramCacheKey(Ht),Qt=J.programs;J.environment=C.isMeshStandardMaterial?N.environment:null,J.fog=N.fog,J.envMap=(C.isMeshStandardMaterial?H:A).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?N.environmentRotation:C.envMapRotation,Qt===void 0&&(C.addEventListener("dispose",ee),Qt=new Map,J.programs=Qt);let ie=Qt.get(Vt);if(ie!==void 0){if(J.currentProgram===ie&&J.lightsStateVersion===It)return Mh(C,Ht),ie}else Ht.uniforms=zt.getUniforms(C),C.onBeforeCompile(Ht,v),ie=zt.acquireProgram(Ht,Vt),Qt.set(Vt,ie),J.uniforms=Ht.uniforms;let Gt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=yt.uniform),Mh(C,Ht),J.needsLights=Df(C),J.lightsStateVersion=It,J.needsLights&&(Gt.ambientLightColor.value=F.state.ambient,Gt.lightProbe.value=F.state.probe,Gt.directionalLights.value=F.state.directional,Gt.directionalLightShadows.value=F.state.directionalShadow,Gt.spotLights.value=F.state.spot,Gt.spotLightShadows.value=F.state.spotShadow,Gt.rectAreaLights.value=F.state.rectArea,Gt.ltc_1.value=F.state.rectAreaLTC1,Gt.ltc_2.value=F.state.rectAreaLTC2,Gt.pointLights.value=F.state.point,Gt.pointLightShadows.value=F.state.pointShadow,Gt.hemisphereLights.value=F.state.hemi,Gt.directionalShadowMap.value=F.state.directionalShadowMap,Gt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Gt.spotShadowMap.value=F.state.spotShadowMap,Gt.spotLightMatrix.value=F.state.spotLightMatrix,Gt.spotLightMap.value=F.state.spotLightMap,Gt.pointShadowMap.value=F.state.pointShadowMap,Gt.pointShadowMatrix.value=F.state.pointShadowMatrix),J.currentProgram=ie,J.uniformsList=null,ie}function _h(C){if(C.uniformsList===null){let N=C.currentProgram.getUniforms();C.uniformsList=qs.seqWithValue(N.seq,C.uniforms)}return C.uniformsList}function Mh(C,N){let Z=wt.get(C);Z.outputColorSpace=N.outputColorSpace,Z.batching=N.batching,Z.batchingColor=N.batchingColor,Z.instancing=N.instancing,Z.instancingColor=N.instancingColor,Z.instancingMorph=N.instancingMorph,Z.skinning=N.skinning,Z.morphTargets=N.morphTargets,Z.morphNormals=N.morphNormals,Z.morphColors=N.morphColors,Z.morphTargetsCount=N.morphTargetsCount,Z.numClippingPlanes=N.numClippingPlanes,Z.numIntersection=N.numClipIntersection,Z.vertexAlphas=N.vertexAlphas,Z.vertexTangents=N.vertexTangents,Z.toneMapping=N.toneMapping}function Pf(C,N,Z,J,F){N.isScene!==!0&&(N=ft),I.resetTextureUnits();let _t=N.fog,It=J.isMeshStandardMaterial?N.environment:null,Ht=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:rr,Vt=(J.isMeshStandardMaterial?H:A).get(J.envMap||It),Qt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ie=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Gt=!!Z.morphAttributes.position,de=!!Z.morphAttributes.normal,Ae=!!Z.morphAttributes.color,Re=Nn;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Re=v.toneMapping);let li=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=li!==void 0?li.length:0,Wt=wt.get(J),nn=p.state.lights;if(W===!0&&(ct===!0||C!==w)){let wi=C===w&&J.id===_;yt.setState(J,C,wi)}let ye=!1;J.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==nn.state.version||Wt.outputColorSpace!==Ht||F.isBatchedMesh&&Wt.batching===!1||!F.isBatchedMesh&&Wt.batching===!0||F.isBatchedMesh&&Wt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Wt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Wt.instancing===!1||!F.isInstancedMesh&&Wt.instancing===!0||F.isSkinnedMesh&&Wt.skinning===!1||!F.isSkinnedMesh&&Wt.skinning===!0||F.isInstancedMesh&&Wt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Wt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Wt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Wt.instancingMorph===!1&&F.morphTexture!==null||Wt.envMap!==Vt||J.fog===!0&&Wt.fog!==_t||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==yt.numPlanes||Wt.numIntersection!==yt.numIntersection)||Wt.vertexAlphas!==Qt||Wt.vertexTangents!==ie||Wt.morphTargets!==Gt||Wt.morphNormals!==de||Wt.morphColors!==Ae||Wt.toneMapping!==Re||Wt.morphTargetsCount!==xe)&&(ye=!0):(ye=!0,Wt.__version=J.version);let Di=Wt.currentProgram;ye===!0&&(Di=Xr(J,N,F));let Ms=!1,pi=!1,yr=!1,Ce=Di.getUniforms(),Wi=Wt.uniforms;if(et.useProgram(Di.program)&&(Ms=!0,pi=!0,yr=!0),J.id!==_&&(_=J.id,pi=!0),Ms||w!==C){et.buffers.depth.getReversed()?(ot.copy(C.projectionMatrix),Sd(ot),Td(ot),Ce.setValue(M,"projectionMatrix",ot)):Ce.setValue(M,"projectionMatrix",C.projectionMatrix),Ce.setValue(M,"viewMatrix",C.matrixWorldInverse);let An=Ce.map.cameraPosition;An!==void 0&&An.setValue(M,G.setFromMatrixPosition(C.matrixWorld)),rt.logarithmicDepthBuffer&&Ce.setValue(M,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ce.setValue(M,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,pi=!0,yr=!0)}if(F.isSkinnedMesh){Ce.setOptional(M,F,"bindMatrix"),Ce.setOptional(M,F,"bindMatrixInverse");let wi=F.skeleton;wi&&(wi.boneTexture===null&&wi.computeBoneTexture(),Ce.setValue(M,"boneTexture",wi.boneTexture,I))}F.isBatchedMesh&&(Ce.setOptional(M,F,"batchingTexture"),Ce.setValue(M,"batchingTexture",F._matricesTexture,I),Ce.setOptional(M,F,"batchingIdTexture"),Ce.setValue(M,"batchingIdTexture",F._indirectTexture,I),Ce.setOptional(M,F,"batchingColorTexture"),F._colorsTexture!==null&&Ce.setValue(M,"batchingColorTexture",F._colorsTexture,I));let vr=Z.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Kt.update(F,Z,Di),(pi||Wt.receiveShadow!==F.receiveShadow)&&(Wt.receiveShadow=F.receiveShadow,Ce.setValue(M,"receiveShadow",F.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Wi.envMap.value=Vt,Wi.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&N.environment!==null&&(Wi.envMapIntensity.value=N.environmentIntensity),pi&&(Ce.setValue(M,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&kf(Wi,yr),_t&&J.fog===!0&&At.refreshFogUniforms(Wi,_t),At.refreshMaterialUniforms(Wi,J,B,tt,p.state.transmissionRenderTarget[C.id]),qs.upload(M,_h(Wt),Wi,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(qs.upload(M,_h(Wt),Wi,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ce.setValue(M,"center",F.center),Ce.setValue(M,"modelViewMatrix",F.modelViewMatrix),Ce.setValue(M,"normalMatrix",F.normalMatrix),Ce.setValue(M,"modelMatrix",F.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let wi=J.uniformsGroups;for(let An=0,Rn=wi.length;An<Rn;An++){let bh=wi[An];O.update(bh,Di),O.bind(bh,Di)}}return Di}function kf(C,N){C.ambientLightColor.needsUpdate=N,C.lightProbe.needsUpdate=N,C.directionalLights.needsUpdate=N,C.directionalLightShadows.needsUpdate=N,C.pointLights.needsUpdate=N,C.pointLightShadows.needsUpdate=N,C.spotLights.needsUpdate=N,C.spotLightShadows.needsUpdate=N,C.rectAreaLights.needsUpdate=N,C.hemisphereLights.needsUpdate=N}function Df(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,N,Z){wt.get(C.texture).__webglTexture=N,wt.get(C.depthTexture).__webglTexture=Z;let J=wt.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,N){let Z=wt.get(C);Z.__webglFramebuffer=N,Z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(C,N=0,Z=0){T=C,S=N,R=Z;let J=!0,F=null,_t=!1,It=!1;if(C){let Vt=wt.get(C);if(Vt.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(M.FRAMEBUFFER,null),J=!1;else if(Vt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Vt.__hasExternalTextures)I.rebindTextures(C,wt.get(C.texture).__webglTexture,wt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Gt=C.depthTexture;if(Vt.__boundDepthTexture!==Gt){if(Gt!==null&&wt.has(Gt)&&(C.width!==Gt.image.width||C.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}let Qt=C.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(It=!0);let ie=wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ie[N])?F=ie[N][Z]:F=ie[N],_t=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?F=wt.get(C).__webglMultisampledFramebuffer:Array.isArray(ie)?F=ie[Z]:F=ie,L.copy(C.viewport),P.copy(C.scissor),D=C.scissorTest}else L.copy(Rt).multiplyScalar(B).floor(),P.copy(q).multiplyScalar(B).floor(),D=Xt;if(et.bindFramebuffer(M.FRAMEBUFFER,F)&&J&&et.drawBuffers(C,F),et.viewport(L),et.scissor(P),et.setScissorTest(D),_t){let Vt=wt.get(C.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+N,Vt.__webglTexture,Z)}else if(It){let Vt=wt.get(C.texture),Qt=N||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Vt.__webglTexture,Z||0,Qt)}_=-1},this.readRenderTargetPixels=function(C,N,Z,J,F,_t,It){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Ht=Ht[It]),Ht){et.bindFramebuffer(M.FRAMEBUFFER,Ht);try{let Vt=C.texture,Qt=Vt.format,ie=Vt.type;if(!rt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=C.width-J&&Z>=0&&Z<=C.height-F&&M.readPixels(N,Z,J,F,re.convert(Qt),re.convert(ie),_t)}finally{let Vt=T!==null?wt.get(T).__webglFramebuffer:null;et.bindFramebuffer(M.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(C,N,Z,J,F,_t,It){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Ht=Ht[It]),Ht){let Vt=C.texture,Qt=Vt.format,ie=Vt.type;if(!rt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=C.width-J&&Z>=0&&Z<=C.height-F){et.bindFramebuffer(M.FRAMEBUFFER,Ht);let Gt=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Gt),M.bufferData(M.PIXEL_PACK_BUFFER,_t.byteLength,M.STREAM_READ),M.readPixels(N,Z,J,F,re.convert(Qt),re.convert(ie),0);let de=T!==null?wt.get(T).__webglFramebuffer:null;et.bindFramebuffer(M.FRAMEBUFFER,de);let Ae=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await wd(M,Ae,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Gt),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,_t),M.deleteBuffer(Gt),M.deleteSync(Ae),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,N=null,Z=0){C.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,C=arguments[1]);let J=Math.pow(2,-Z),F=Math.floor(C.image.width*J),_t=Math.floor(C.image.height*J),It=N!==null?N.x:0,Ht=N!==null?N.y:0;I.setTexture2D(C,0),M.copyTexSubImage2D(M.TEXTURE_2D,Z,0,0,It,Ht,F,_t),et.unbindTexture()},this.copyTextureToTexture=function(C,N,Z=null,J=null,F=0){C.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],N=arguments[2],F=arguments[3]||0,Z=null);let _t,It,Ht,Vt,Qt,ie,Gt,de,Ae,Re=C.isCompressedTexture?C.mipmaps[F]:C.image;Z!==null?(_t=Z.max.x-Z.min.x,It=Z.max.y-Z.min.y,Ht=Z.isBox3?Z.max.z-Z.min.z:1,Vt=Z.min.x,Qt=Z.min.y,ie=Z.isBox3?Z.min.z:0):(_t=Re.width,It=Re.height,Ht=Re.depth||1,Vt=0,Qt=0,ie=0),J!==null?(Gt=J.x,de=J.y,Ae=J.z):(Gt=0,de=0,Ae=0);let li=re.convert(N.format),xe=re.convert(N.type),Wt;N.isData3DTexture?(I.setTexture3D(N,0),Wt=M.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(I.setTexture2DArray(N,0),Wt=M.TEXTURE_2D_ARRAY):(I.setTexture2D(N,0),Wt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,N.unpackAlignment);let nn=M.getParameter(M.UNPACK_ROW_LENGTH),ye=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Di=M.getParameter(M.UNPACK_SKIP_PIXELS),Ms=M.getParameter(M.UNPACK_SKIP_ROWS),pi=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Re.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Re.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Vt),M.pixelStorei(M.UNPACK_SKIP_ROWS,Qt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ie);let yr=C.isDataArrayTexture||C.isData3DTexture,Ce=N.isDataArrayTexture||N.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let Wi=wt.get(C),vr=wt.get(N),wi=wt.get(Wi.__renderTarget),An=wt.get(vr.__renderTarget);et.bindFramebuffer(M.READ_FRAMEBUFFER,wi.__webglFramebuffer),et.bindFramebuffer(M.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Rn=0;Rn<Ht;Rn++)yr&&M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,wt.get(C).__webglTexture,F,ie+Rn),C.isDepthTexture?(Ce&&M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,wt.get(N).__webglTexture,F,Ae+Rn),M.blitFramebuffer(Vt,Qt,_t,It,Gt,de,_t,It,M.DEPTH_BUFFER_BIT,M.NEAREST)):Ce?M.copyTexSubImage3D(Wt,F,Gt,de,Ae+Rn,Vt,Qt,_t,It):M.copyTexSubImage2D(Wt,F,Gt,de,Ae+Rn,Vt,Qt,_t,It);et.bindFramebuffer(M.READ_FRAMEBUFFER,null),et.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Ce?C.isDataTexture||C.isData3DTexture?M.texSubImage3D(Wt,F,Gt,de,Ae,_t,It,Ht,li,xe,Re.data):N.isCompressedArrayTexture?M.compressedTexSubImage3D(Wt,F,Gt,de,Ae,_t,It,Ht,li,Re.data):M.texSubImage3D(Wt,F,Gt,de,Ae,_t,It,Ht,li,xe,Re):C.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,F,Gt,de,_t,It,li,xe,Re.data):C.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,F,Gt,de,Re.width,Re.height,li,Re.data):M.texSubImage2D(M.TEXTURE_2D,F,Gt,de,_t,It,li,xe,Re);M.pixelStorei(M.UNPACK_ROW_LENGTH,nn),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ye),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Di),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ms),M.pixelStorei(M.UNPACK_SKIP_IMAGES,pi),F===0&&N.generateMipmaps&&M.generateMipmap(Wt),et.unbindTexture()},this.copyTextureToTexture3D=function(C,N,Z=null,J=null,F=0){return C.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,C=arguments[2],N=arguments[3],F=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,N,Z,J,F)},this.initRenderTarget=function(C){wt.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),et.unbindTexture()},this.resetState=function(){S=0,R=0,T=null,et.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}},Fo=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Qs=class extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},fc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$l,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ni=new U,Bo=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new ei(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mn=class extends Vn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Us,Sr=new U,Os=new U,Ns=new U,Fs=new te,Tr=new te,Ku=new we,mo=new U,Er=new U,go=new U,Mu=new te,ol=new te,bu=new te,tr=class extends ri{constructor(t=new mn){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new oi;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fc(e,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Bo(i,3,0,!1)),Us.setAttribute("uv",new Bo(i,2,3,!1))}this.geometry=Us,this.material=t,this.center=new te(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),Ku.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Ns.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let o=this.center;xo(mo.set(-.5,-.5,0),Ns,o,Os,n,s),xo(Er.set(.5,-.5,0),Ns,o,Os,n,s),xo(go.set(.5,.5,0),Ns,o,Os,n,s),Mu.set(0,0),ol.set(1,0),bu.set(1,1);let a=t.ray.intersectTriangle(mo,Er,go,!1,Sr);if(a===null&&(xo(Er.set(-.5,.5,0),Ns,o,Os,n,s),ol.set(0,1),a=t.ray.intersectTriangle(mo,go,Er,!1,Sr),a===null))return;let l=t.ray.origin.distanceTo(Sr);l<t.near||l>t.far||e.push({distance:l,point:Sr.clone(),uv:Un.getInterpolation(Sr,mo,Er,go,Mu,ol,bu,new te),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function xo(r,t,e,i,n,s){Fs.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(Tr.x=s*Fs.x-n*Fs.y,Tr.y=n*Fs.x+s*Fs.y):Tr.copy(Fs),r.copy(t),r.x+=Tr.x,r.y+=Tr.y,r.applyMatrix4(Ku)}var dc=class extends hi{constructor(t=null,e=1,i=1,n,s,o,a,l,c=xi,h=xi,u,f){super(null,o,a,l,c,h,n,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ho=class extends ei{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bs=new we,wu=new we,yo=[],Su=new pn,vx=new we,Ar=new qt,Rr=new ls,Vo=class extends qt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,vx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bs),Su.copy(t.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bs),Rr.copy(t.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(i),t.ray.intersectsSphere(Rr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Bs),wu.multiplyMatrices(i,Bs),Ar.matrixWorld=wu,Ar.raycast(t,yo);for(let o=0,a=yo.length;o<a;o++){let l=yo[o];l.instanceId=s,l.object=this,e.push(l)}yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new dc(new Float32Array(n*this.count),n,this.count,Ic,$i));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gn=class extends hi{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class r extends oi{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;y(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(d,2));function y(){let v=new U,E=new U,S=0,R=(e-t)/i;for(let T=0;T<=s;T++){let _=[],w=T/s,L=w*(e-t)+t;for(let P=0;P<=n;P++){let D=P/n,z=D*l+a,$=Math.sin(z),X=Math.cos(z);E.x=L*$,E.y=-w*i+m,E.z=L*X,u.push(E.x,E.y,E.z),v.set($,R,X).normalize(),f.push(v.x,v.y,v.z),d.push(D,1-w),_.push(g++)}x.push(_)}for(let T=0;T<n;T++)for(let _=0;_<s;_++){let w=x[_][T],L=x[_+1][T],P=x[_+1][T+1],D=x[_][T+1];(t>0||_!==0)&&(h.push(w,L,D),S+=3),(e>0||_!==s-1)&&(h.push(L,P,D),S+=3)}c.addGroup(p,S,0),p+=S}function b(v){let E=g,S=new te,R=new U,T=0,_=v===!0?t:e,w=v===!0?1:-1;for(let P=1;P<=n;P++)u.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;let L=g;for(let P=0;P<=n;P++){let z=P/n*l+a,$=Math.cos(z),X=Math.sin(z);R.x=_*X,R.y=m*w,R.z=_*$,u.push(R.x,R.y,R.z),f.push(0,w,0),S.x=$*.5+.5,S.y=X*.5*w+.5,d.push(S.x,S.y),g++}for(let P=0;P<n;P++){let D=E+P,z=L+P;v===!0?h.push(z,z+1,D):h.push(z+1,z,D),T+=3}c.addGroup(p,T,v===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},er=class r extends ii{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ai=class r extends oi{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,f=new U,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],b=p/i,v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){let S=E/e;u.x=-t*Math.cos(n+S*s)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(n+S*s)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(S+v,1-b),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let b=h[p][y+1],v=h[p][y],E=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&d.push(b,v,S),(p!==i-1||l<Math.PI)&&d.push(v,E,S)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Or=class r extends oi{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new U,u=new U,f=new U;for(let d=0;d<=i;d++)for(let g=0;g<=n;g++){let x=g/n*s,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=n;g++){let x=(n+1)*d+g-1,m=(n+1)*(d-1)+g-1,p=(n+1)*(d-1)+g,y=(n+1)*d+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ir=class extends Vn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bu,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function vo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function _x(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var nr=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pc=class extends nr{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ah:s=t,a=2*e-i;break;case Rh:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ah:o=t,l=2*i-e;break;case Rh:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(n-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let E=0;E!==a;++E)s[E]=p*o[h+E]+y*o[c+E]+b*o[l+E]+v*o[u+E];return s}},mc=class extends nr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},gc=class extends nr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Hi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vo(e,this.TimeBufferType),this.values=vo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:vo(t.times,Array),values:vo(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case To:e=this.InterpolantFactoryMethodDiscrete;break;case Yl:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return To;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&_x(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===La,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=Yl;var cs=class extends Hi{constructor(t,e,i){super(t,e,i)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=To;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends Hi{};xc.prototype.ValueTypeName="color";var yc=class extends Hi{};yc.prototype.ValueTypeName="number";var vc=class extends nr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ti.slerpFlat(s,0,o,c-a,o,c,l);return s}},Go=class extends Hi{InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}};Go.prototype.ValueTypeName="quaternion";Go.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Hi{constructor(t,e,i){super(t,e,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=To;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends Hi{};_c.prototype.ValueTypeName="vector";var Mc=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Mx=new Mc,bc=class{constructor(t){this.manager=t!==void 0?t:Mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends ri{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var al=new we,Tu=new U,Eu=new U,Wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),Eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eu),e.updateMatrixWorld(),al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wc=class extends Wo{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Ao*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},sr=class extends Nr{constructor(t,e,i=0,n=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ri.DEFAULT_UP),this.updateMatrix(),this.target=new ri,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new wc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Au=new we,Cr=new U,ll=new U,Sc=class extends Wo{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Cr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Cr),ll.copy(i.position),ll.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ll),i.updateMatrixWorld(),n.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Au.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au)}},xn=class extends Nr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Sc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var qo=class extends Nr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var zc="\\[\\]\\.:\\/",bx=new RegExp("["+zc+"]","g"),Uc="[^"+zc+"]",wx="[^"+zc.replace("\\.","")+"]",Sx=/((?:WC+[\/:])*)/.source.replace("WC",Uc),Tx=/(WCOD+)?/.source.replace("WCOD",wx),Ex=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),Ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),Rx=new RegExp("^"+Sx+Tx+Ex+Ax+"$"),Cx=["material","materials","bones","map"],Tc=class{constructor(t,e,i){let n=i||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ie=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bx,"")}static parseTrackName(t){let e=Rx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Cx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Tc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var pt={SOLID:0,FLOOR:1,DUCT:2,PIT:3,TALL:4,LOW:5,LOCKER:6,LIFT:7},Le=1.05,Ix=1.2,Nc=3.2,Zi={N:[0,-1],S:[0,1],W:[-1,0],E:[1,0]},Oc={white:[.82,.9,1],amber:[1,.6,.24],teal:[.25,.9,.78],red:[1,.14,.08],violet:[.72,.32,1],cyan:[.35,.78,1],warm:[1,.84,.62]},Ue=["engineering","cargo deck","crew deck","command deck","pod bay"],Ju=[{name:"Engineering",x0:1,x1:30,task:"reactor",zones:[0]},{name:"Cargo Deck",x0:31,x1:60,task:"tags",zones:[1]},{name:"Crew Deck",x0:61,x1:90,task:"terminals",zones:[2]},{name:"Command Deck",x0:91,x1:119,task:"launch",zones:[3,4]}],Fr=r=>r<=30?0:r<=60?1:r<=90?2:3,Zo=[["T. Halvorsen","Captain","We cut into the asteroid at the third seam. The ore came up warm."],["M. Adeyemi","Cargo master","Something came aboard with the ore. We logged it as mineral. Then it unfolded."],["S. Kowalczyk","Science officer","It has no eyes. Those lights in its chest are how it tastes the air."],["J. Brandt","Comms","Every time it comes close the radios drown in static. That is the only warning you get."],["R. Imani","Medic","It heard the centrifuge in the medbay from two decks away. Walk. Only run once it has already seen you."],["D. Castellanos","Engineer","It cannot fit in the crawlspaces. It lives in the air vents, though. Listen to the ceiling."],["A. Lindqvist","Biology","The third time I hid in a locker it did not walk past. It learns."],["E. Okonkwo","Logistics","I threw a sounder to pull it off the door. Worked twice. The third time it came looking for whoever threw it."],["K. Varga","Cook","It waits. It stood in the dark by the galley door for an hour with its lights out."],["N. Petrov","Engineering","A lamp makes you easy to find. Switch yours off when you hear the tapping."],["H. Nakamura","Pilot","When one of us goes down it does not always finish the job. It watches to see who comes."],["T. Halvorsen","Captain","I have locked the bulkheads. Restart the reactor, open the decks, get to the pod. I am sorry."],["P. Osei","Stores","It stood outside my locker and listened. I held my breath until my ears rang, and it moved on."],["L. Ferreira","Electrical","Every deck has its own breaker. Throw it and you get light for a minute or so. It hears the breaker, mind."],["V. Moreau","Navigator","It goes through the vents. It came down out of the ceiling in the mess, right in front of me."]];function Qu(){let r=new Uint8Array(4080),t=new Float32Array(4080).fill(Nc),e=new Uint8Array(4080),i=new Int16Array(4080).fill(-1),n=new Array(4080).fill(""),s=[],o=[],a=[],l=[],c=[],h=[],u=[],f=[],d=[],g=[],x=[],m=Ju.map(()=>[]),p=(M,k)=>k*120+M;function y(M,k,K,rt,et,Tt={}){let wt=s.length;s.push({id:wt,name:M,x0:k,z0:K,x1:rt,z1:et,kind:Tt.kind||"room",ice:!!Tt.ice,zone:Tt.zone!==void 0?Tt.zone:Fr(k),sec:Fr(k)});for(let I=K;I<=et;I++)for(let A=k;A<=rt;A++){let H=p(A,I);r[H]===pt.SOLID&&(r[H]=pt.FLOOR),i[H]=wt,Tt.ceil&&(t[H]=Tt.ceil),Tt.ice&&(e[H]=1)}return wt}let b=(M,k,K,rt,et,Tt="")=>{for(let wt=k;wt<=rt;wt++)for(let I=M;I<=K;I++)r[p(I,wt)]=et,n[p(I,wt)]=Tt},v=(M,k,K,rt,et)=>b(M,k,K,rt,pt.TALL,et),E=(M,k,K,rt,et)=>b(M,k,K,rt,pt.LOW,et);function S(M,k={}){let K=M.map(([rt,et])=>{let Tt=p(rt,et);return r[Tt]=pt.FLOOR,Tt});o.push({id:o.length,cells:K,gate:!!k.gate,bulk:k.bulk!==void 0?k.bulk:-1,open0:k.open?1:0,room:k.room||""})}let R=(...M)=>M.forEach(([k,K])=>{r[p(k,K)]=pt.DUCT,t[p(k,K)]=Ix}),T=(M,k,K)=>{r[p(M,k)]=pt.LOCKER,a.push({id:a.length,cx:M,cz:k,dir:K,ax:M+Zi[K][0],az:k+Zi[K][1]})},_=(M,k,K,rt,et={})=>l.push({x:(M+.5)*2,z:(k+.5)*2,y:et.y!==void 0?et.y:-1,r:Oc[K][0],g:Oc[K][1],b:Oc[K][2],I:rt,flicker:et.flicker?1:0,kind:et.kind||"ceil",cx:M,cz:k}),w=(M,k,K)=>d.push({cx:M,cz:k,dir:K,dx:Zi[K][0],dz:Zi[K][1],x:(M+.5+Zi[K][0]*.5)*2,z:(k+.5+Zi[K][1]*.5)*2,ax:(M+.5)*2,az:(k+.5)*2}),L=(M,k,K,rt)=>g.push({kind:M,cx:k,cz:K,dir:rt,dx:Zi[rt][0],dz:Zi[rt][1],x:(k+.5+Zi[rt][0]*.5)*2,z:(K+.5+Zi[rt][1]*.5)*2,ax:(k+.5)*2,az:(K+.5)*2,sec:Fr(k)}),P=(M,k)=>x.push({cx:M,cz:k,x:(M+.5)*2,z:(k+.5)*2,sec:Fr(M)}),D=(M,k)=>c.push({cx:M,cz:k}),z=(M,k)=>h.push({cx:M,cz:k});y("Aft Airlock",2,13,6,20,{ceil:3.6}),S([[7,16],[7,17]]),y("Engineering Spine",8,16,29,17,{kind:"hall"}),y("Reactor Room",9,4,20,14,{ceil:6}),S([[14,15],[15,15]]),y("Coolant Plant",22,4,28,14),S([[25,15]]),S([[21,8]]),y("Upper Walkway",2,2,28,2,{kind:"hall"}),S([[11,3]]),S([[26,3]]),y("Stern Passage",2,3,3,11,{kind:"hall"}),S([[3,12]]),y("Engine Bay",9,19,22,29,{ceil:5}),S([[12,18],[13,18]]),S([[20,18]]),S([[15,30]]),y("Machine Shop",24,19,28,23),S([[26,18]]),y("Reactor Control",24,25,28,29),S([[26,24]]),S([[23,27]]),S([[26,30]]),y("Lower Walkway",2,31,28,31,{kind:"hall"}),y("Stern Passage",2,22,3,30,{kind:"hall"}),S([[3,21]]),S([[30,16],[30,17]],{bulk:0}),v(13,7,16,11,"reactor"),E(10,12,11,12,"console"),v(19,4,20,5,"tank"),E(10,4,10,4,"crate"),E(19,13,19,13,"crate"),v(27,5,28,6,"tank"),v(23,10,24,11,"tank"),E(27,9,28,9,"pipes"),E(22,13,22,13,"crate"),v(10,21,12,23,"engine"),v(10,25,12,27,"engine"),v(16,24,17,26,"machine"),E(19,21,20,21,"crate"),E(21,28,22,28,"crate"),E(25,21,26,21,"bench"),v(28,23,28,23,"shelf"),E(25,27,26,27,"console"),E(2,13,2,14,"crate"),v(6,13,6,13,"rack"),T(4,12,"S"),T(5,21,"N"),T(9,3,"S"),T(18,15,"N"),T(19,15,"S"),T(28,15,"N"),T(22,3,"S"),T(9,30,"N"),T(22,18,"S"),T(28,18,"S"),T(28,30,"N"),T(16,1,"S"),T(20,32,"N"),R([21,12]),R([23,21]),R([4,8],[5,8],[6,8],[7,8],[8,8]),R([4,26],[5,26],[6,26],[7,26],[8,26]);for(let[M,k]of[[3,15],[5,15],[3,17],[5,17],[3,19],[5,19]])u.push({cx:M,cz:k}),m[0].push({cx:M,cz:k});L("pump",20,10,"E"),L("pump",25,4,"N"),L("pump",19,29,"S"),L("lever",28,26,"E"),w(10,17,"S"),z(11,13),z(14,27),z(24,13),z(27,20),f.push({cx:27,cz:8}),f.push({cx:20,cz:24}),P(11,16),P(24,17),P(10,6),P(18,6),P(26,11),P(14,20),P(20,27),P(27,22),P(17,2),P(11,31),_(4,16,"amber",1.6,{kind:"beacon"}),_(4,19,"white",1.2),_(12,16,"white",1.3),_(20,17,"white",1.3),_(27,16,"white",1.1,{flicker:!0}),_(11,7,"white",1.8),_(18,12,"white",1.6),_(12,9,"teal",1.6),_(17,9,"teal",1.6),_(25,7,"white",1.6),_(25,12,"cyan",1,{flicker:!0}),_(14,20,"amber",2),_(19,26,"red",1.8),_(13,28,"amber",1.4,{flicker:!0}),_(26,21,"white",1.3),_(26,27,"cyan",1.1),_(8,2,"white",.9),_(20,2,"white",.9),_(8,31,"white",.9),_(20,31,"white",.9,{flicker:!0}),_(2,7,"teal",.8),_(2,26,"teal",.8),y("Cargo Spine",31,16,34,17,{kind:"hall"}),y("Cargo Spine",56,16,59,17,{kind:"hall"}),y("Cargo Hold",35,6,55,27,{ceil:7}),y("North Gallery",31,3,59,4,{kind:"hall"}),S([[41,5]]),S([[49,5]]),y("South Gallery",31,29,59,30,{kind:"hall"}),S([[41,28]]),S([[49,28]]),y("Cargo Office",31,6,33,14),S([[32,5]]),S([[32,15]]),y("Crew Lockers",31,19,33,27),S([[32,18]]),S([[32,28]]),y("Manifest Office",57,6,59,14),S([[58,5]]),S([[58,15]]),y("Cargo Airlock",57,19,59,27),S([[58,18]]),S([[58,28]]),S([[60,16],[60,17]],{bulk:1});for(let[M,k,K,rt]of[[37,7,38,9],[37,11,38,13],[41,8,43,9],[41,12,43,13],[46,7,47,9],[46,11,47,14],[50,8,52,9],[50,12,52,13],[37,20,38,22],[37,24,38,26],[41,20,43,21],[41,24,43,25],[46,19,47,22],[46,24,47,26],[50,20,52,21],[50,24,52,25]])v(M,k,K,rt,"container");E(44,6,44,6,"crate"),E(54,11,54,11,"crate"),E(39,14,39,14,"crate"),E(54,22,54,23,"crate"),E(44,27,45,27,"crate"),E(35,19,35,19,"crate"),E(31,8,31,9,"desk"),v(33,13,33,14,"shelf"),E(59,8,59,9,"desk"),v(57,13,57,14,"rack"),E(31,23,31,24,"bench"),v(59,21,59,22,"rack"),E(57,26,57,26,"crate"),T(31,5,"S"),T(30,20,"E"),T(30,22,"E"),T(30,26,"E"),T(35,5,"S"),T(55,28,"N"),T(56,10,"W"),T(34,22,"E"),T(45,2,"S"),T(52,31,"N"),T(59,5,"S"),T(59,28,"N"),R([34,10]),R([56,22]);for(let[M,k]of[[32,16],[33,16],[34,16],[32,17],[33,17],[34,17]])m[1].push({cx:M,cz:k});for(let[M,k]of[[36,8],[40,10],[44,12],[48,8],[53,10],[36,25],[40,23],[44,20],[48,26],[53,22],[32,11],[58,24]])D(M,k);w(33,17,"S"),z(33,25),z(58,10),z(39,30),z(44,4),f.push({cx:54,cz:16}),P(38,15),P(49,18),P(44,10),P(44,22),P(36,4),P(54,29),P(32,7),P(58,25),_(33,16,"white",1.2),_(57,17,"white",1.2),_(40,16,"white",2.2,{y:6.2}),_(50,16,"white",2.2,{y:6.2,flicker:!0}),_(39,10,"amber",1.4),_(49,11,"amber",1.4),_(44,23,"amber",1.4),_(53,25,"red",1),_(36,21,"white",1),_(36,3,"white",.9),_(46,4,"white",.9),_(55,3,"white",.9,{flicker:!0}),_(36,30,"white",.9),_(46,29,"white",.9),_(55,30,"white",.9),_(32,9,"warm",1.2),_(32,22,"white",1.1),_(58,9,"warm",1.1),_(58,23,"amber",1.2,{kind:"beacon"}),y("Crew Spine",61,16,89,17,{kind:"hall"}),y("Mess Hall",62,4,72,14),S([[67,15],[68,15]]),S([[65,3]]),y("Galley",74,4,78,9),S([[73,6]]),S([[76,3]]),y("Captain's Office",74,11,78,14),S([[76,10]]),S([[76,15]]),S([[79,12]]),y("Medbay",80,4,88,14),S([[84,15]]),S([[85,3]]),y("Observation Walk",62,2,88,2,{kind:"hall"}),y("Recreation",62,19,70,29),S([[66,18]]),S([[71,25]]),S([[66,30]]),y("Quarters Hall",72,19,73,29,{kind:"hall"}),S([[72,18],[73,18]]),S([[72,30]]),y("Quarters Hall",74,24,88,24,{kind:"hall"}),y("Cabin",75,19,78,22),S([[76,23]]),y("Cabin",80,19,83,22),S([[81,23]]),y("Cabin",85,19,88,22),S([[86,23]]),y("Cabin",75,26,78,29),S([[76,25]]),y("Cabin",80,26,83,29),S([[81,25]]),y("Washroom",85,26,88,29),S([[86,25]]),S([[86,30]]),y("Lower Deck Walk",62,31,88,31,{kind:"hall"}),S([[90,16],[90,17]],{bulk:2}),E(64,7,66,7,"table"),E(69,7,71,7,"table"),E(64,11,66,11,"table"),E(69,11,71,11,"table"),v(62,4,62,5,"fridge"),E(74,4,75,4,"counter"),v(78,4,78,5,"fridge"),E(78,8,78,9,"counter"),E(75,12,76,12,"desk"),v(74,14,74,14,"cabinet"),E(81,6,82,6,"bed"),E(85,6,86,6,"bed"),E(81,12,82,12,"bed"),v(88,4,88,5,"cabinet"),v(88,13,88,14,"cabinet"),E(64,21,65,22,"table"),E(68,21,69,22,"table"),E(64,26,65,27,"table"),v(70,19,70,20,"shelf");for(let M of[75,78,80,83,85,88])E(M,19,M,19,"bunk");for(let M of[75,78,80,83])E(M,29,M,29,"bunk");v(85,29,85,29,"stall"),v(88,29,88,29,"stall"),T(62,15,"N"),T(73,12,"W"),T(77,3,"S"),T(87,15,"N"),T(80,3,"S"),T(77,15,"N"),T(61,22,"E"),T(70,30,"N"),T(77,18,"S"),T(84,27,"W"),T(89,21,"W"),T(74,27,"E"),T(82,18,"S"),T(70,1,"S"),T(80,32,"N"),T(64,18,"N"),R([79,21]),R([79,28]),R([71,21]);for(let[M,k]of[[61,16],[62,16],[63,16],[61,17],[62,17],[63,17]])m[2].push({cx:M,cz:k});L("terminal",88,9,"E"),L("terminal",78,13,"E"),L("terminal",62,27,"W"),L("terminal",62,9,"W"),L("terminal",88,24,"E"),w(80,17,"S"),z(70,9),z(86,9),z(67,24),f.push({cx:84,cz:9}),P(70,16),P(85,17),P(66,9),P(83,8),P(67,25),P(80,24),P(75,2),P(75,31),_(64,16,"white",1.2),_(73,17,"white",1.2),_(82,16,"white",1.2,{flicker:!0}),_(88,17,"white",1),_(65,9,"warm",1.8),_(70,9,"warm",1.6,{flicker:!0}),_(76,6,"warm",1.4),_(76,12,"warm",1.2),_(83,9,"white",2.2),_(86,12,"teal",1,{y:1.4,kind:"glow"}),_(66,24,"warm",1.5),_(68,28,"violet",.9,{y:1.5,kind:"glow"}),_(73,22,"white",1),_(80,24,"white",1),_(86,24,"white",.9,{flicker:!0}),_(77,20,"warm",.8),_(82,21,"warm",.8),_(87,20,"warm",.7),_(77,27,"warm",.8),_(82,28,"warm",.7),_(87,27,"white",1),_(68,2,"white",.9),_(80,2,"white",.9),_(68,31,"white",.9),_(80,31,"white",.9,{flicker:!0}),y("Command Spine",91,16,104,17,{kind:"hall"}),y("Bridge",106,8,117,25,{ceil:4.2}),S([[105,16],[105,17]]),S([[105,10]]),S([[105,22]]),y("Pod Bay",92,6,104,14,{zone:4,ceil:5}),S([[98,15]]),b(97,2,99,4,pt.LIFT);for(let M=2;M<=4;M++)for(let k=97;k<=99;k++)t[p(k,M)]=2.6;S([[97,5],[98,5],[99,5]],{gate:!0}),y("Officers' Quarters",92,19,98,24),S([[95,18]]),S([[95,25]]),y("Comms",100,19,104,24),S([[102,18]]),S([[102,25]]),y("Observation Lounge",92,26,104,31),E(108,10,110,10,"console"),E(113,10,115,10,"console"),E(108,23,110,23,"console"),E(113,23,115,23,"console"),E(116,14,116,19,"console"),E(111,16,112,17,"desk"),v(107,13,107,13,"pillar"),v(107,20,107,20,"pillar"),E(96,6,96,6,"liftconsole"),E(93,8,94,8,"crate"),E(102,12,103,12,"crate"),v(92,13,92,14,"rack"),v(104,7,104,8,"rack"),E(93,20,93,21,"bunk"),E(97,20,97,21,"bunk"),v(98,24,98,24,"cabinet"),E(101,20,103,20,"console"),v(104,23,104,24,"rack"),E(95,28,96,29,"table"),E(100,28,101,29,"table"),E(92,31,93,31,"couch"),E(103,31,104,31,"couch"),T(92,5,"S"),T(104,5,"S"),T(103,15,"N"),T(106,7,"S"),T(118,10,"W"),T(91,21,"E"),T(104,18,"S"),T(91,28,"E"),T(100,32,"N"),T(117,26,"N"),R([99,21]),R([105,13]);for(let[M,k]of[[91,16],[92,16],[93,16],[91,17],[92,17],[94,16]])m[3].push({cx:M,cz:k});L("uplink",112,8,"N"),w(93,17,"S"),w(92,10,"W"),z(114,20),z(93,29),z(103,22),f.push({cx:110,cz:14}),P(96,17),P(110,19),P(114,13),P(100,10),P(95,21),P(102,22),P(98,28),_(94,16,"white",1.2),_(101,17,"white",1.2,{flicker:!0}),_(110,12,"cyan",1.6),_(110,21,"cyan",1.6),_(115,16,"cyan",1.2,{y:1.2,kind:"glow"}),_(112,16,"white",1.4),_(95,10,"white",2),_(102,9,"white",1.6,{flicker:!0}),_(98,7,"amber",1.4,{kind:"beacon"}),_(98,3,"white",.9),_(95,22,"warm",1.2),_(102,22,"cyan",1,{y:1.3,kind:"glow"}),_(98,28,"warm",1.4),_(102,30,"violet",.8);let $=new Int16Array(4080).fill(-1);for(let M of o){for(let wt of M.cells)$[wt]=M.id;let k=M.cells[0]%120,K=M.cells[0]/120|0,rt=r[p(k-1,K)]!==pt.SOLID&&r[p(k+1,K)]!==pt.SOLID&&r[p(k-1,K)]!==pt.LOCKER&&r[p(k+1,K)]!==pt.LOCKER;M.axis=M.cells.length>1?M.cells[1]-M.cells[0]===1?"x":"z":rt?"z":"x";let et=0,Tt=0;for(let wt of M.cells)et+=wt%120+.5,Tt+=(wt/120|0)+.5;M.x=et/M.cells.length*2,M.z=Tt/M.cells.length*2,M.len=M.cells.length*2}let X=new Int16Array(4080).fill(-1);for(let M of a)X[p(M.cx,M.cz)]=M.id,M.access=p(M.ax,M.az),M.x=(M.ax+.5)*2,M.z=(M.az+.5)*2;let tt=new Int16Array(4080).fill(-1),B=[];for(let M=0;M<4080;M++){if(r[M]!==pt.DUCT||tt[M]>=0)continue;let k={id:B.length,cells:[],exits:[]},K=[M];for(tt[M]=k.id;K.length;){let rt=K.pop();k.cells.push(rt);for(let et of[rt-1,rt+1,rt-120,rt+120])r[et]===pt.DUCT&&tt[et]<0?(tt[et]=k.id,K.push(et)):r[et]===pt.FLOOR&&!k.exits.includes(et)&&k.exits.push(et)}B.push(k)}let ut=[];for(let M=0;M<4080;M++)r[M]===pt.LIFT&&ut.push(M);let mt=o.find(M=>M.gate),Rt={cells:ut,gateId:mt.id,x:98.5*2,z:3.5*2,console:{cx:96,cz:6,x:96.5*2,z:6.5*2},alarm:{x:98.5*2,z:20}};for(let M of l)M.y<0&&(M.y=M.y===-1?t[p(M.cx,M.cz)]-.25:M.y);let q=new Uint8Array(4080).fill(255);{let M=[];for(let k=0;k<4080;k++)i[k]>=0&&(q[k]=s[i[k]].zone,M.push(k));for(let k=0;k<M.length;k++){let K=M[k],rt=K%120,et=K/120|0;for(let[Tt,wt]of[[-1,0],[1,0],[0,-1],[0,1]]){let I=rt+Tt,A=et+wt;if(I<0||A<0||I>=120||A>=34)continue;let H=p(I,A);q[H]===255&&(q[H]=q[K],M.push(H))}}}for(let M of l)M.zone=q[p(M.cx,M.cz)];d.forEach((M,k)=>{M.id=k,M.zone=q[p(M.cx,M.cz)]}),g.forEach((M,k)=>{M.id=k,M.zone=q[p(M.cx,M.cz)]});let Xt=new Uint8Array(4080);for(let M=0;M<4080;M++)Xt[M]=Fr(M%120);let j=Ju.map((M,k)=>Object.assign({},M,{id:k,spawns:m[k],bulkIn:-1,bulkOut:-1}));for(let M of o)M.bulk>=0&&(j[M.bulk].bulkOut=M.id,j[M.bulk+1].bulkIn=M.id);x.forEach((M,k)=>{M.id=k,M.cell=p(M.cx,M.cz)});let W=x.length,ct=x.map(()=>new Set),ot=(M,k)=>{M!==k&&(ct[M].add(k),ct[k].add(M))},bt=(M,k)=>Math.hypot(x[M].x-x[k].x,x[M].z-x[k].z);for(let M=0;M<j.length;M++){let k=x.filter(rt=>rt.sec===M).map(rt=>rt.id);if(!k.length)continue;for(let rt of k)k.filter(et=>et!==rt).sort((et,Tt)=>bt(rt,et)-bt(rt,Tt)).slice(0,2).forEach(et=>ot(rt,et));let K=new Set([k[0]]);for(;K.size<k.length;){let rt=null;for(let et of K)for(let Tt of k)!K.has(Tt)&&(!rt||bt(et,Tt)<rt[2])&&(rt=[et,Tt,bt(et,Tt)]);ot(rt[0],rt[1]),K.add(rt[1])}}for(let M of o)if(M.bulk>=0){let k=et=>x.filter(Tt=>Tt.sec===et).sort((Tt,wt)=>Math.hypot(Tt.x-M.x,Tt.z-M.z)-Math.hypot(wt.x-M.x,wt.z-M.z))[0],K=k(M.bulk),rt=k(M.bulk+1);K&&rt&&ot(K.id,rt.id)}let G=new Float32Array(W*W).fill(1e9),Y=new Int16Array(W*W).fill(-1);for(let M=0;M<W;M++){G[M*W+M]=0,Y[M*W+M]=M;for(let k of ct[M])G[M*W+k]=bt(M,k),Y[M*W+k]=k}for(let M=0;M<W;M++)for(let k=0;k<W;k++)for(let K=0;K<W;K++){let rt=G[k*W+M]+G[M*W+K];rt<G[k*W+K]&&(G[k*W+K]=rt,Y[k*W+K]=Y[k*W+M])}let ft=[];for(let M=0;M<W;M++)for(let k of ct[M])M<k&&ft.push([M,k]);let vt=[];for(let M=1;M<33;M++)for(let k=1;k<119;k++){let K=p(k,M);if(!(r[K]!==pt.FLOOR||$[K]>=0||e[K]||(k*7+M*13)%5!==0)){for(let[rt,et]of[[0,-1],[1,0],[0,1],[-1,0]])if(r[p(k+rt,M+et)]===pt.SOLID){vt.push({x:(k+.5+rt*.47)*2,y:.34,z:(M+.5+et*.47)*2,dx:rt,dz:et,zone:q[K]});break}}}let xt={T:2,W:120,H:34,cells:r,ceil:t,ice:e,roomId:i,rooms:s,propKind:n,doors:o,doorAt:$,lockers:a,lockerAt:X,ducts:B,ductOf:tt,lights:l,tagSpots:c,itemSpots:h,spawns:u,creatureSpawns:f,lift:Rt,zoneOf:q,breakers:d,elights:vt,sections:j,secOf:Xt,stations:g,vents:x,ventLinks:ft,ventLen:G,ventNext:Y,ventAdj:ct.map(M=>[...M]),idx:p,cellOf:(M,k)=>Math.floor(k/2)*120+Math.floor(M/2),cx:M=>(M%120+.5)*2,cz:M=>((M/120|0)+.5)*2};xt.walkC=new Uint8Array(4080),xt.walkP=new Uint8Array(4080);for(let M=0;M<4080;M++){let k=r[M],K=$[M]>=0&&o[$[M]].gate;xt.walkC[M]=k===pt.FLOOR&&!K?1:0,xt.walkP[M]=k===pt.FLOOR||k===pt.DUCT||k===pt.LIFT?1:0}xt.lightLevel=new Float32Array(4080);for(let M=0;M<4080;M++){if(!xt.walkP[M])continue;let k=Ko(xt,xt.cx(M),1,xt.cz(M),0,1,0);xt.lightLevel[M]=Math.min(1,(k[0]+k[1]+k[2]+k[3]+k[4]+k[5])/3/1.1)}xt.pois=[];for(let M of s){let k=[],K=Math.max(1,Math.round((M.x1-M.x0+1)/7)),rt=Math.max(1,Math.round((M.z1-M.z0+1)/7));for(let et=0;et<K;et++)for(let Tt=0;Tt<rt;Tt++){let wt=M.x0+(M.x1-M.x0+1)*(et+.5)/K,I=M.z0+(M.z1-M.z0+1)*(Tt+.5)/rt,A=-1,H=1e9;for(let st=M.z0;st<=M.z1;st++)for(let lt=M.x0;lt<=M.x1;lt++){let nt=p(lt,st);if(!xt.walkC[nt])continue;let zt=(lt+.5-wt)**2+(st+.5-I)**2;zt<H&&(H=zt,A=nt)}A>=0&&!k.includes(A)&&k.push(A)}for(let et of k)xt.pois.push({cell:et,room:M.id,x:xt.cx(et),z:xt.cz(et)})}return xt.roomName=(M,k)=>{let K=Math.floor(M/2),rt=Math.floor(k/2);if(K<0||rt<0||K>=120||rt>=34)return"";let et=i[p(K,rt)];return et>=0?s[et].name:""},xt}function ju(r,t,e,i,n){let{cells:s}=r,o=Math.floor(t/2),a=Math.floor(e/2),l=Math.floor(i/2),c=Math.floor(n/2),h=i-t,u=n-e,f=h>0?1:-1,d=u>0?1:-1,g=h!==0?Math.abs(2/h):1/0,x=u!==0?Math.abs(2/u):1/0,m=h!==0?(h>0?(o+1)*2-t:t-o*2)/Math.abs(h):1/0,p=u!==0?(u>0?(a+1)*2-e:e-a*2)/Math.abs(u):1/0;for(let y=0;y<300&&!(o===l&&a===c)&&(m<p?(m+=g,o+=f):(p+=x,a+=d),!(o===l&&a===c));y++){if(o<0||a<0||o>=120||a>=34)return!1;let b=s[a*120+o];if(b===pt.SOLID||b===pt.TALL||b===pt.LOCKER||b===pt.DUCT)return!1}return!0}function Ko(r,t,e,i,n,s,o){let a=[0,0,0,0,0,0,0,0,0,0,0,0,0],l=t+n*.06,c=i+o*.06;for(let u of r.lights){let f=u.x-l,d=u.y-e,g=u.z-c,x=f*f+d*d+g*g;if(x>260)continue;let m=Math.sqrt(x)||.001;if(!ju(r,l,c,u.x,u.z))continue;let p=Math.max(0,(n*f+s*d+o*g)/m),y=u.I*(.28+.72*p)/(1+.25*Math.max(x,.4)),b=u.flicker?3:0;a[b]+=y*u.r,a[b+1]+=y*u.g,a[b+2]+=y*u.b,a[6+u.zone]+=y*(.3*u.r+.6*u.g+.1*u.b)}let h=0;for(let u of r.elights){let f=u.x-l,d=u.y-e,g=u.z-c,x=f*f+d*d+g*g;if(x>90)continue;let m=Math.sqrt(x)||.001;if(!ju(r,l,c,u.x-u.dx*.2,u.z-u.dz*.2))continue;let p=1.25*(.34+.66*Math.max(0,(n*f+s*d+o*g)/m))/(1+.2*Math.max(x,.25));a[11]+=p,p>h&&(h=p,a[12]=u.zone)}return a}var ds=4080;function di(r,t,e,i,n,s,o,a,l=!1){let{cells:c,doorAt:h}=r,u=Math.floor(e/2),f=Math.floor(i/2),d=Math.floor(s/2),g=Math.floor(o/2),x=s-e,m=o-i,p=x>0?1:-1,y=m>0?1:-1,b=x!==0?Math.abs(2/x):1/0,v=m!==0?Math.abs(2/m):1/0,E=x!==0?(x>0?(u+1)*2-e:e-u*2)/Math.abs(x):1/0,S=m!==0?(m>0?(f+1)*2-i:i-f*2)/Math.abs(m):1/0;for(let R=0;R<300&&!(u===d&&f===g);R++){let T;if(E<S?(T=E,E+=b,u+=p):(T=S,S+=v,f+=y),u===d&&f===g)break;if(u<0||f<0||u>=120||f>=34)return!1;let _=f*120+u,w=c[_];if(w===pt.SOLID||w===pt.TALL||w===pt.LOCKER||w===pt.DUCT&&!l)return!1;if(w===pt.LOW){let P=Math.min(1,E,S);if(Math.min(n+(a-n)*T,n+(a-n)*P)<Le)return!1}let L=h[_];if(L>=0&&t&&t[L]<.5)return!1}return!0}var Jo=class{constructor(t,e){this.L=t,this.walk=e,this.g=new Float32Array(ds),this.f=new Float32Array(ds),this.from=new Int32Array(ds),this.mark=new Uint32Array(ds),this.done=new Uint32Array(ds),this.gen=0,this.heap=[]}push(t){let e=this.heap,i=this.f,n=e.length;for(e.push(t);n>0;){let s=n-1>>1;if(i[e[s]]<=i[t])break;e[n]=e[s],n=s}e[n]=t}pop(){let t=this.heap,e=this.f,i=t[0],n=t.pop();if(t.length){let s=0,o=t.length;for(;;){let a=2*s+1;if(a>=o||(a+1<o&&e[t[a+1]]<e[t[a]]&&a++,e[t[a]]>=e[n]))break;t[s]=t[a],s=a}t[s]=n}return i}find(t,e,i,n=3){let{walk:s}=this,{doorAt:o}=this.L;if(!s[t]||!s[e])return null;if(t===e)return[t];let a=++this.gen,l=this.g,c=this.f,h=this.from,u=this.mark,f=this.done,d=e%120,g=e/120|0,x=m=>{let p=Math.abs(m%120-d),y=Math.abs((m/120|0)-g);return Math.max(p,y)+.4142*Math.min(p,y)};for(this.heap.length=0,l[t]=0,c[t]=x(t),h[t]=-1,u[t]=a,this.push(t);this.heap.length;){let m=this.pop();if(f[m]===a)continue;if(f[m]=a,m===e){let y=[];for(let b=m;b!==-1;b=h[b])y.push(b);return y.reverse()}let p=o[m]>=0;for(let y=-1;y<=1;y++)for(let b=-1;b<=1;b++){if(!b&&!y)continue;let v=m+b+y*120;if(!s[v]||f[v]===a)continue;let E=b&&y;if(E&&(p||o[v]>=0||!s[m+b]||!s[m+y*120]||o[m+b]>=0||o[m+y*120]>=0))continue;let S=E?1.4142:1,R=o[v];R>=0&&i&&i[R]<.5&&(S+=n);let T=l[m]+S;(u[v]!==a||T<l[v])&&(u[v]=a,l[v]=T,c[v]=T+x(v),h[v]=m,this.push(v))}}return null}};function ps(r,t,e){let i=e||new Int16Array(ds);if(i.fill(-1),!r[t])return i;let n=new Int32Array(ds),s=0,o=0;for(n[o++]=t,i[t]=0;s<o;){let a=n[s++],l=i[a]+1;for(let c of[a-1,a+1,a-120,a+120])r[c]&&i[c]<0&&(i[c]=l,n[o++]=c)}return i}function jo(r,t,e,i,n,s){let o=i-t,a=n-e,l=Math.hypot(o,a),c=Math.max(1,Math.ceil(l/.4));for(let h=0;h<=c;h++){let u=t+o*h/c,f=e+a*h/c,d=Math.floor((u-s)/2),g=Math.floor((u+s)/2),x=Math.floor((f-s)/2),m=Math.floor((f+s)/2);if(!r[x*120+d]||!r[x*120+g]||!r[m*120+d]||!r[m*120+g])return!1}return!0}function ar(r,t,e,i,n=6){let s=Math.floor(e/2),o=Math.floor(i/2),a=-1,l=1e9;for(let c=-n;c<=n;c++)for(let h=-n;h<=n;h++){let u=s+h,f=o+c;if(u<0||f<0||u>=120||f>=34)continue;let d=f*120+u;if(!t[d])continue;let g=((u+.5)*2-e)**2+((f+.5)*2-i)**2;g<l&&(l=g,a=d)}return a}function tf(r,t,e,i,n,s){for(let o=0;o<3;o++){let a=Math.floor((t-i)/2),l=Math.floor((t+i)/2),c=Math.floor((e-i)/2),h=Math.floor((e+i)/2),u=!1;for(let f=c;f<=h;f++)for(let d=a;d<=l;d++){if(d>=0&&f>=0&&d<120&&f<34&&!n(f*120+d))continue;let g=Math.max(d*2,Math.min(t,(d+1)*2)),x=Math.max(f*2,Math.min(e,(f+1)*2)),m=t-g,p=e-x,y=m*m+p*p;if(!(y>=i*i)){if(y>1e-9){let b=Math.sqrt(y),v=i-b;t+=m/b*v,e+=p/b*v}else{let b=t-d*2,v=(d+1)*2-t,E=e-f*2,S=(f+1)*2-e,R=Math.min(b,v,E,S);R===b?t=d*2-i:R===v?t=(d+1)*2+i:R===E?e=f*2-i:e=(f+1)*2+i}u=!0}}if(!u)break}return s.x=t,s.z=e,s}var Mt={PROTO:"v4",MAX_PLAYERS:6,TAGS:4,ITEMS:7,START_SOUNDERS:1,MAX_SOUNDERS:3,WAKE:18,player:{r:.32,eye:1.62,eyeCrouch:.9,walk:2.6,run:5.1,crouch:1.35,stamina:100,drain:17,regen:12,regenDelay:1.2},noise:{run:15,walk:6.5,crouch:1.6,door:9,locker:5,tag:8,scan:10,decoy:30,revive:11,klaxon:80,breath:3.6,gasp:8,breaker:18,work:9,pump:20,bulkhead:45},breath:{hold:10,recover:5,gasp:2.5},boost:80,down:{bleed:50,revive:4,reach:2.6,invuln:3.5},lift:{call:45,board:15},station:{pump:5,lever:1.5,terminal:7,uplink:5},reach:2.4,creature:{r:.5,eye:2,roam:2,chase:4.7,chaseGain:1.1,sight:18,sightLamp:30,catchDist:1.55,hitDist:2.1,vent:3.6,climb:.8,drop:.75},net:{hz:10,stale:8e3,interp:160}};var dt={ALIVE:0,DOWN:1,DEAD:2,OUT:3},se={LOBBY:0,PLAY:1,END:2},ae={LOCKED:0,READY:1,CALLED:2,ARRIVED:3,LEFT:4},Q={IDLE:0,ROAM:1,SUSPECT:2,INVEST:3,HUNT:4,SEARCH:5,ATTACK:6,AMBUSH:7,BAIT:8,LOCKER:9,VENT:10};var Ne={CROUCH:1,LIGHT:2,RUN:4,SCAN:8,MOVE:16,HOLD:32},Vi=[{key:"prowler",name:"The Prowler",line:"No strong habits this time. It patrolled, listened and looked in equal measure."},{key:"listener",name:"The Listener",hear:1.3,sight:.8,line:"It heard about a third further than usual and saw less. Quiet feet mattered more than dark corners."},{key:"watcher",name:"The Watcher",hear:.78,sight:1.25,cone:.05,line:"Sharp-eyed and hard of hearing. It saw further and wider, and missed sounds it would normally have come for."},{key:"stalker",name:"The Stalker",ambush:2.6,roam:.9,chase:-.3,line:"It spent much of the match standing in the dark with its lights out, waiting to be walked into. It was slower in a chase."},{key:"runner",name:"The Runner",chase:.55,corner:.2,search:.75,line:"Faster in a straight line than usual and clumsier round corners. It gave up a search sooner."},{key:"warden",name:"The Warden",hide0:.5,guard:.6,search:1.25,line:"It opened lockers from the very start, searched for longer, and kept close to whatever you had to work at."}],ge={DEAD:0,FAILING:1,ON:2};var le=(r,t,e)=>r<t?t:r>e?e:r,ce=r=>r<0?0:r>1?1:r,$e=(r,t,e)=>r+(t-r)*e,Ki=(r,t,e)=>r<t?Math.min(t,r+e):Math.max(t,r-e),ef=Math.PI*2,yn=r=>(r=(r+Math.PI)%ef,r<0&&(r+=ef),r-Math.PI),vn=(r,t,e)=>{let i=yn(t-r);return Math.abs(i)<=e?t:r+Math.sign(i)*e},_n=(r,t,e)=>r+yn(t-r)*e,Ze=(r,t)=>Math.atan2(-r,-t);function Ai(r){let t=r>>>0,e=()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+(n-i)*e(),e.int=i=>Math.floor(e()*i),e.pick=i=>i[Math.floor(e()*i.length)],e.shuffle=i=>{let n=i.slice();for(let s=n.length-1;s>0;s--){let o=Math.floor(e()*(s+1));[n[s],n[o]]=[n[o],n[s]]}return n},e}function Ve(r,t){let e=document.createElement("canvas");return e.width=r,e.height=t,e}function lr(r,t){let e=r.width,i=r.height,n=r.getContext("2d").getImageData(0,0,e,i).data,s=Ve(e,i),o=s.getContext("2d"),a=o.createImageData(e,i),l=a.data,c=(h,u)=>n[((u+i)%i*e+(h+e)%e)*4]/255;for(let h=0;h<i;h++)for(let u=0;u<e;u++){let f=(c(u+1,h)-c(u-1,h))*t,d=(c(u,h+1)-c(u,h-1))*t,g=1/Math.hypot(f,d,1),x=(h*e+u)*4;l[x]=(-f*g*.5+.5)*255,l[x+1]=(d*g*.5+.5)*255,l[x+2]=(g*.5+.5)*255,l[x+3]=255}return o.putImageData(a,0,0),s}function Qo(r,t,e){let i=new gn(r);return i.wrapS=i.wrapT=kr,i.anisotropy=e,t&&(i.colorSpace=ze),i}function Gn(r,t,e,i,n,s,o,a,l){for(let c=0;c<e;c++){r.globalAlpha=l*(.3+.7*t()),r.fillStyle=s[Math.floor(t()*s.length)];let h=o+(a-o)*t()*t();r.fillRect(t()*i,t()*n,h,h*(.5+t()))}r.globalAlpha=1}function Lx(r){let e=Ve(512,512),i=e.getContext("2d"),n=Ve(512,512),s=n.getContext("2d"),o=c=>512-c/3.2*512;i.fillStyle="#69757d",i.fillRect(0,0,512,512),s.fillStyle="#808080",s.fillRect(0,0,512,512);let a=i.createLinearGradient(0,0,0,512);a.addColorStop(0,"rgba(0,0,0,0.28)"),a.addColorStop(.3,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,0.12)"),i.fillStyle=a,i.fillRect(0,0,512,512),Gn(i,r,2600,512,512,["#7d8a93","#56616a","#8a969d","#4c565e"],1,5,.22),i.fillStyle="#434c53",i.fillRect(0,o(.85),512,512-o(.85)),Gn(i,r,900,512,512-o(.85),["#59646c","#2f363c"],1,6,.3),s.fillStyle="#909090",s.fillRect(0,o(.85),512,512-o(.85)),i.fillStyle="#2c8a80",i.fillRect(0,o(1.02),512,9);for(let c=0;c<60;c++)i.fillStyle="#69757d",i.globalAlpha=.7,i.fillRect(r()*512,o(1.02)-1+r()*8,4+r()*26,2+r()*3);i.globalAlpha=1;let l=(c,h,u,f)=>{i.fillStyle="#20262b",i.fillRect(c,h,u,f),s.fillStyle="#202020",s.fillRect(c,h,u,f),i.fillStyle="rgba(255,255,255,0.10)",u>f?i.fillRect(c,h+f,u,1):i.fillRect(c+u,h,1,f)};l(0,0,3,512),l(512/2-1,0,3,512),l(0,o(.85),512,3),l(0,o(2.2),512,3);for(let c of[14,512/2-14,512/2+14,498])for(let h of[.15,.7,1.25,2.05,2.35,3.05])i.fillStyle="#8f9aa1",i.beginPath(),i.arc(c,o(h),3,0,7),i.fill(),i.fillStyle="#2a3035",i.beginPath(),i.arc(c+1,o(h)+1.5,3,0,7),i.globalAlpha=.35,i.fill(),i.globalAlpha=1,s.fillStyle="#d0d0d0",s.beginPath(),s.arc(c,o(h),3.5,0,7),s.fill();for(let[c,h,u]of[[2.62,16,"#343b41"],[2.78,9,"#2b3136"],[2.9,9,"#4d3a22"]]){i.fillStyle=u,i.fillRect(0,o(c)-h/2,512,h),i.fillStyle="rgba(255,255,255,0.13)",i.fillRect(0,o(c)-h/2,512,2),i.fillStyle="rgba(0,0,0,0.4)",i.fillRect(0,o(c)+h/2,512,4),s.fillStyle="#e8e8e8",s.fillRect(0,o(c)-h/2,512,h);for(let f of[70,330])i.fillStyle="#1d2226",i.fillRect(f,o(c)-h/2-2,10,h+4)}for(let c=0;c<26;c++){let h=r()*512,u=r()*512*.7,f=30+r()*130,d=i.createLinearGradient(0,u,0,u+f);d.addColorStop(0,"rgba(20,24,26,0.34)"),d.addColorStop(1,"rgba(20,24,26,0)"),i.fillStyle=d,i.fillRect(h,u,2+r()*7,f)}for(let c=0;c<1500;c++){let h=512-Math.pow(r(),2.2)*512*.36;i.globalAlpha=.5*r()*(h/512),i.fillStyle=r()<.5?"#d9ecf5":"#b9d4e2";let u=1+r()*3;i.fillRect(r()*512,h,u,u)}return i.globalAlpha=1,[e,lr(n,2.2)]}function Px(r){let e=Ve(512,512),i=e.getContext("2d"),n=Ve(512,512),s=n.getContext("2d");i.fillStyle="#4b535a",i.fillRect(0,0,512,512),s.fillStyle="#707070",s.fillRect(0,0,512,512),Gn(i,r,4200,512,512,["#5a646c","#3b4248","#646e76","#33393e"],1,6,.25);for(let o=0;o<512;o+=16)for(let a=0;a<512;a+=16){let l=(a+o)/16&1;i.save(),i.translate(a+8,o+8),i.rotate(l?.785:-.785),i.fillStyle="rgba(190,205,214,0.16)",i.fillRect(-5,-1,10,2),i.restore(),s.save(),s.translate(a+8,o+8),s.rotate(l?.785:-.785),s.fillStyle="#c0c0c0",s.fillRect(-5,-1.5,10,3),s.restore()}for(let o of[0,512/2])i.fillStyle="#191d21",i.fillRect(o,0,4,512),i.fillRect(0,o,512,4),s.fillStyle="#101010",s.fillRect(o,0,4,512),s.fillRect(0,o,512,4),i.fillStyle="rgba(255,255,255,0.07)",i.fillRect(o+4,0,1,512),i.fillRect(0,o+4,512,1);for(let o of[16,512/2-12,512/2+16,500])for(let a of[16,512/2-12,512/2+16,500])i.fillStyle="#272c31",i.beginPath(),i.arc(o,a,4,0,7),i.fill(),s.fillStyle="#404040",s.beginPath(),s.arc(o,a,4,0,7),s.fill();for(let o=0;o<40;o++){i.globalAlpha=.08+.1*r(),i.strokeStyle=r()<.5?"#aeb9c0":"#1c2024",i.lineWidth=1+r()*2,i.beginPath();let a=r()*512,l=r()*512;i.moveTo(a,l),i.lineTo(a+(r()-.5)*120,l+(r()-.5)*120),i.stroke()}i.globalAlpha=1;for(let o=0;o<600;o++){i.globalAlpha=.25*r(),i.fillStyle="#cfe4ee";let a=1+r()*3;i.fillRect(r()*512,r()*512,a,a)}return i.globalAlpha=1,[e,lr(n,2.6)]}function kx(r){let e=Ve(256,256),i=e.getContext("2d"),n=Ve(256,256),s=n.getContext("2d");i.fillStyle="#353b41",i.fillRect(0,0,256,256),s.fillStyle="#808080",s.fillRect(0,0,256,256),Gn(i,r,1200,256,256,["#424951","#282d32"],1,5,.3);for(let o=0;o<256;o+=64)i.fillStyle="#1b1f23",i.fillRect(o,0,6,256),s.fillStyle="#e0e0e0",s.fillRect(o,0,6,256),i.fillStyle="rgba(255,255,255,0.08)",i.fillRect(o+6,0,1,256);i.fillStyle="#15181b",i.fillRect(0,120,256,14),s.fillStyle="#f0f0f0",s.fillRect(0,120,256,14);for(let o=10;o<256;o+=40)i.fillStyle="#4a3a24",i.fillRect(o,122,16,10);return[e,lr(n,2)]}function Dx(r){let e=Ve(512,512),i=e.getContext("2d"),n=Ve(512,512),s=n.getContext("2d");i.fillStyle="#9dbccb",i.fillRect(0,0,512,512),s.fillStyle="#808080",s.fillRect(0,0,512,512);for(let o=0;o<420;o++){let a=r()*512,l=r()*512,c=8+r()*30,h=r()<.55,u=i.createRadialGradient(a,l,0,a,l,c);u.addColorStop(0,h?"rgba(226,242,250,0.28)":"rgba(92,128,148,0.26)"),u.addColorStop(1,"rgba(0,0,0,0)");let f=s.createRadialGradient(a,l,0,a,l,c);f.addColorStop(0,h?"rgba(255,255,255,0.45)":"rgba(0,0,0,0.45)"),f.addColorStop(1,"rgba(128,128,128,0)");for(let d of[-512,0,512])for(let g of[-512,0,512])i.save(),i.translate(d,g),i.fillStyle=u,i.fillRect(a-c,l-c,c*2,c*2),i.restore(),s.save(),s.translate(d,g),s.fillStyle=f,s.fillRect(a-c,l-c,c*2,c*2),s.restore()}for(let o=0;o<9;o++){let a=r()*512,l=r()*512,c=r()*6.28;i.strokeStyle="rgba(236,248,255,0.3)",i.lineWidth=.7,s.strokeStyle="#484848",s.lineWidth=1.2,i.beginPath(),s.beginPath(),i.moveTo(a,l),s.moveTo(a,l);for(let h=0;h<6;h++)c+=(r()-.5)*.9,a+=Math.cos(c)*(10+r()*24),l+=Math.sin(c)*(10+r()*24),i.lineTo(a,l),s.lineTo(a,l);i.stroke(),s.stroke()}return Gn(i,r,3200,512,512,["#eaf6fb","#7ea3b6","#c4dde9"],1,3,.22),[e,lr(n,2.6)]}function zx(r){let e=Ve(256,256),i=e.getContext("2d"),n=Ve(256,256),s=n.getContext("2d");i.fillStyle="#c9ccce",i.fillRect(0,0,256,256),s.fillStyle="#808080",s.fillRect(0,0,256,256),Gn(i,r,2200,256,256,["#dfe2e4","#a5aaad","#8d9396"],1,5,.25),i.strokeStyle="#5c6165",i.lineWidth=3,i.strokeRect(5,5,246,246),s.strokeStyle="#303030",s.lineWidth=4,s.strokeRect(5,5,246,246);for(let o=0;o<30;o++){i.globalAlpha=.25,i.strokeStyle="#6f7477",i.lineWidth=1,i.beginPath();let a=r()*256,l=r()*256;i.moveTo(a,l),i.lineTo(a+(r()-.5)*60,l+(r()-.5)*60),i.stroke()}i.globalAlpha=1;for(let[o,a]of[[18,18],[238,18],[18,238],[238,238]])i.fillStyle="#7a8084",i.beginPath(),i.arc(o,a,4,0,7),i.fill(),s.fillStyle="#d0d0d0",s.beginPath(),s.arc(o,a,4,0,7),s.fill();return[e,lr(n,1.6)]}function nf(r=4){let t=Ai(20261117),e={};for(let[i,n]of[["wall",Lx],["floor",Px],["ceil",kx],["ice",Dx],["prop",zx]]){let[s,o]=n(t);e[i]={map:Qo(s,!0,r),normalMap:Qo(o,!1,r)}}return e}function sf(){let t=Ai(61925),e=Ve(256,256),i=e.getContext("2d"),n=Ve(256,256),s=n.getContext("2d");i.fillStyle="#958d7f",i.fillRect(0,0,256,256),s.fillStyle="#808080",s.fillRect(0,0,256,256);for(let a=0;a<80;a++){let l=t()*256,c=t()*256,h=10+t()*38,u=t()<.62;for(let f of[-256,0,256])for(let d of[-256,0,256]){if(l+f+h<0||l+f-h>256||c+d+h<0||c+d-h>256)continue;let g=i.createRadialGradient(l+f,c+d,0,l+f,c+d,h);g.addColorStop(0,u?"rgba(66,52,60,0.55)":"rgba(205,197,178,0.4)"),g.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=g,i.fillRect(l+f-h,c+d-h,h*2,h*2)}}let o=(a,l,c,h,u,f)=>{i.strokeStyle=`rgba(46,38,56,${(.3+.4*t()).toFixed(2)})`,i.lineWidth=u,i.lineCap="round",i.beginPath(),i.moveTo(a,l);let d=[];for(;h>0;)c+=(t()-.5)*.95,a+=Math.cos(c)*5,l+=Math.sin(c)*5,i.lineTo(a,l),h-=5,f<2&&t()<.14&&d.push([a,l,c+(t()<.5?.85:-.85),h*.65]);i.stroke();for(let g of d)o(g[0],g[1],g[2],g[3],u*.6,f+1)};for(let a=0;a<18;a++)o(t()*256,t()*256,t()*6.28,50+t()*130,1.1+t()*1.3,0);Gn(i,t,1100,256,256,["#544c48","#b5ac9a","#6e5a5c"],1,2.6,.4);for(let a=0;a<300;a++){s.strokeStyle=t()<.55?"rgba(16,16,16,0.55)":"rgba(238,238,238,0.35)",s.lineWidth=.6+t()*1.8;let l=t()*256,c=t()*256,h=t()*6.28,u=6+t()*28;s.beginPath(),s.moveTo(l,c),s.quadraticCurveTo(l+Math.cos(h)*u*.5+(t()-.5)*9,c+Math.sin(h)*u*.5+(t()-.5)*9,l+Math.cos(h)*u,c+Math.sin(h)*u),s.stroke()}return Gn(s,t,1600,256,256,["#585858","#a8a8a8"],1,3,.5),{map:Qo(e,!0,4),normalMap:Qo(lr(n,2.4),!1,4)}}function rf(){let r=Ve(64,64),t=r.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let i=new gn(r);return i.colorSpace=ze,i}function of(r){let t=Ve(256,48),e=t.getContext("2d");e.fillStyle="#0d1114",e.fillRect(0,0,256,48),e.strokeStyle="#3d7f78",e.lineWidth=2,e.strokeRect(2,2,252,44),e.fillStyle="#9fe6d8",e.font='600 24px "Arial Narrow", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle";let i=r.toUpperCase();for(e.letterSpacing="2px";e.measureText(i).width>236&&i.length>4;)i=i.slice(0,-1);e.fillText(i,128,26);let n=new gn(t);return n.colorSpace=ze,n.anisotropy=4,n}function af(r,t){let e=Ve(256,64),i=e.getContext("2d");i.font="600 30px Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=6,i.strokeStyle="rgba(0,0,0,0.75)",i.strokeText(r,128,32),i.fillStyle=t,i.fillText(r,128,32);let n=new gn(e);return n.colorSpace=ze,n}function lf(){let t=Ve(1024,1024),e=t.getContext("2d"),i=Ai(7719),n=(l,c,h,u,f)=>(e.save(),e.beginPath(),e.rect(l,c,h,u),e.clip(),e.translate(l,c),f(h,u),e.restore(),[l/1024,1-(c+u)/1024,h/1024,u/1024]),s={stain:[],gouge:[],drag:[],scrawl:[]};for(let l=0;l<4;l++)s.stain.push(n(l*256,0,256,256,(c,h)=>{for(let u=0;u<30;u++){let f=i()*6.283,d=Math.pow(i(),1.5)*78,g=12+i()*44*(1-d/100),x=c/2+Math.cos(f)*d*(l===3?.55:1),m=h/2+Math.sin(f)*d,p=e.createRadialGradient(x,m,0,x,m,g);p.addColorStop(0,"rgba(44,6,4,0.9)"),p.addColorStop(.55,"rgba(36,5,3,0.62)"),p.addColorStop(1,"rgba(26,3,2,0)"),e.fillStyle=p,e.fillRect(x-g,m-g,g*2,g*2)}for(let u=0;u<46;u++){e.fillStyle=`rgba(40,5,3,${.35+i()*.45})`;let f=i()*6.283,d=36+i()*84;e.beginPath(),e.arc(c/2+Math.cos(f)*d,h/2+Math.sin(f)*d,1+i()*4.5,0,7),e.fill()}}));for(let l=0;l<3;l++)s.gouge.push(n(l*256,256,256,256,(c,h)=>{let u=3+l%2,f=(i()-.5)*.5;for(let d=0;d<u;d++){let g=30+d*(c-60)/(u-1||1)*.8+i()*14,x=14+i()*26,m=h-50-i()*60,p=9,y=[[g,x]];for(let b=1;b<=p;b++)y.push([g+f*m*b/p+(i()-.5)*7,x+m*b/p]);for(let[b,v,E]of[[2.2,"rgba(176,188,194,0.75)",2.2],[0,"rgba(6,7,8,0.95)",6],[0,"rgba(0,0,0,1)",2.5]])for(let S=1;S<y.length;S++){let R=S/y.length,T=Math.sin(R*Math.PI)*.85+.15;e.strokeStyle=v,e.lineWidth=E*T,e.lineCap="round",e.beginPath(),e.moveTo(y[S-1][0]+b,y[S-1][1]),e.lineTo(y[S][0]+b,y[S][1]),e.stroke()}}}));s.drag.push(n(768,256,256,256,(l,c)=>{for(let h=0;h<70;h++){let u=60+i()*(c-120),f=i()*70,d=90+i()*(l-150),g=e.createLinearGradient(f,0,f+d,0);g.addColorStop(0,"rgba(40,5,3,0)"),g.addColorStop(.2,`rgba(40,5,3,${.25+i()*.4})`),g.addColorStop(1,"rgba(40,5,3,0)"),e.fillStyle=g,e.fillRect(f,u,d,2+i()*9)}})),["IT LEARNS","LIGHTS OUT","DONT RUN","NOT THE LOCKERS","IT WAITS","LISTEN","SORRY",null].forEach((l,c)=>s.scrawl.push(n(c%2*512,512+Math.floor(c/2)*128,512,128,(h,u)=>{if(e.strokeStyle="rgba(206,214,218,0.82)",e.lineCap="round",e.lineJoin="round",!l){let g=34;for(let x=0;x<19;x++){let m=x%5===4;e.lineWidth=3+i()*2,e.beginPath(),m?(e.moveTo(g-64+i()*6,88+i()*8),e.lineTo(g-6+i()*6,36+i()*8),g+=26):(e.moveTo(g+(i()-.5)*5,30+i()*10),e.lineTo(g+(i()-.5)*7,92+i()*10),g+=15),e.stroke()}return}let f=Math.min(78,(h-50)/l.length*1.5);e.font=`700 ${f}px "Arial Narrow", "Helvetica Neue", Arial, sans-serif`,e.textBaseline="middle";let d=(h-e.measureText(l).width*1.06)/2;for(let g of l){let x=e.measureText(g).width*1.06;for(let m=0;m<3;m++)e.save(),e.translate(d+(i()-.5)*3,u/2+(i()-.5)*9),e.rotate((i()-.5)*.16),e.lineWidth=1.6+i()*1.6,e.strokeText(g,0,0),e.restore();d+=x}})));let a=new gn(t);return a.colorSpace=ze,a.anisotropy=4,{tex:a,...s}}function Fc(r){let t=Ve(256,60),e=t.getContext("2d");e.fillStyle="#100c04",e.fillRect(0,0,256,60),e.strokeStyle="#8a6a1c",e.lineWidth=2,e.strokeRect(2,2,252,56),e.fillStyle="#ffc24a",e.font='700 27px "Arial Narrow", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.letterSpacing="2px",e.fillText("ESCAPE POD",128+r*-17,32);let i=r>0?226:30;e.beginPath(),e.moveTo(i+r*16,30),e.lineTo(i-r*10,14),e.lineTo(i-r*10,46),e.closePath(),e.fill();let n=new gn(t);return n.colorSpace=ze,n.anisotropy=4,n}var cf=12,cr=[[0,-1,(r,t)=>[r,t],[2,0,0],(r,t)=>r,1],[0,1,(r,t)=>[r+2,t+2],[-2,0,0],(r,t)=>r+1,-1],[-1,0,(r,t)=>[r,t+2],[0,0,-2],(r,t)=>t+1,-1],[1,0,(r,t)=>[r+2,t],[0,0,2],(r,t)=>t,1]],ms=2.5,Ri=class{constructor(){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.bk=[],this.bk2=[],this.zw=[],this.em=[],this.idx=[],this.n=0}quad(t,e,i,n,s,o,a,l,c,h,u,f=1){let d=i[1]*n[2]-i[2]*n[1],g=i[2]*n[0]-i[0]*n[2],x=i[0]*n[1]-i[1]*n[0],m=Math.hypot(d,g,x)||1;d/=m,g/=m,x/=m;let p=this.n;for(let b=0;b<=o;b++)for(let v=0;v<=s;v++){let E=v/s,S=b/o,R=e[0]+i[0]*E+n[0]*S,T=e[1]+i[1]*E+n[1]*S,_=e[2]+i[2]*E+n[2]*S,w=Ko(t,R,T,_,d,g,x);if(u&&v>0&&v<s){let P=u(R,T,_);R+=d*P,T+=g*P,_+=x*P}this.pos.push(R,T,_),this.nor.push(d,g,x),this.uv.push(a[0]+l[0]*E+c[0]*S,a[1]+l[1]*E+c[1]*S),this.col.push(h[0],h[1],h[2]),this.bk.push(w[0]*f,w[1]*f,w[2]*f),this.bk2.push(w[3]*f,w[4]*f,w[5]*f);let L=w[6]+w[7]+w[8]+w[9]+w[10];L>1e-9?this.zw.push(w[7]/L,w[8]/L,w[9]/L,w[10]/L):this.zw.push(0,0,0,0),this.em.push(w[11]*f,w[12]),this.n++}let y=s+1;for(let b=0;b<o;b++)for(let v=0;v<s;v++){let E=p+b*y+v;this.idx.push(E,E+1,E+y+1,E,E+y+1,E+y)}}box(t,e,i,n,s,o,a,l,c=!1){let h=s-e,u=o-i,f=a-n,d=.8;this.quad(t,[e,o,n],[0,0,f],[h,0,0],1,1,[0,0],[0,f*d],[h*d,0],l),this.quad(t,[e,i,a],[h,0,0],[0,u,0],1,1,[0,0],[h*d,0],[0,u*d],l),this.quad(t,[s,i,n],[-h,0,0],[0,u,0],1,1,[0,0],[h*d,0],[0,u*d],l),this.quad(t,[s,i,a],[0,0,-f],[0,u,0],1,1,[0,0],[f*d,0],[0,u*d],l),this.quad(t,[e,i,n],[0,0,f],[0,u,0],1,1,[0,0],[f*d,0],[0,u*d],l),c&&this.quad(t,[e,i,n],[h,0,0],[0,0,f],1,1,[0,0],[h*d,0],[0,f*d],l)}prism(t,e,i,n,s,o,a,l,c=!0){let h=[];for(let u=0;u<a;u++){let f=u/a*Math.PI*2;h.push([e+Math.cos(f)*n,i+Math.sin(f)*n])}for(let u=0;u<a;u++){let f=h[u],d=h[(u+1)%a];this.quad(t,[d[0],s,d[1]],[f[0]-d[0],0,f[1]-d[1]],[0,o-s,0],1,Math.max(1,Math.round((o-s)/3)),[u/a*3,s*.5],[3/a,0],[0,(o-s)*.5],l)}if(c)for(let u=0;u<a;u++){let f=h[u],d=h[(u+1)%a];this.quad(t,[e,o,i],[d[0]-e,0,d[1]-i],[f[0]-d[0],0,f[1]-d[1]],1,1,[0,0],[.5,0],[0,.5],l)}}build(){let t=new oi;return t.setAttribute("position",new me(this.pos,3)),t.setAttribute("normal",new me(this.nor,3)),t.setAttribute("uv",new me(this.uv,2)),t.setAttribute("color",new me(this.col,3)),t.setAttribute("bake",new me(this.bk,3)),t.setAttribute("bake2",new me(this.bk2,3)),t.setAttribute("zw",new me(this.zw,4)),t.setAttribute("em",new me(this.em,2)),t.setIndex(this.idx),t.computeBoundingSphere(),t.computeBoundingBox(),t}},Mn=class{constructor(){this.pos=[],this.col=[],this.idx=[],this.n=0}quad(t,e,i,n){let s=this.n;this.pos.push(t[0],t[1],t[2],t[0]+e[0],t[1]+e[1],t[2]+e[2],t[0]+e[0]+i[0],t[1]+e[1]+i[1],t[2]+e[2]+i[2],t[0]+i[0],t[1]+i[1],t[2]+i[2]);for(let o=0;o<4;o++)this.col.push(n[0],n[1],n[2]);this.idx.push(s,s+1,s+2,s,s+2,s+3),this.n+=4}box(t,e,i,n,s,o,a){let l=n-t,c=s-e,h=o-i;this.quad([t,s,i],[0,0,h],[l,0,0],a),this.quad([t,e,i],[l,0,0],[0,0,h],a),this.quad([t,e,o],[l,0,0],[0,c,0],a),this.quad([n,e,i],[-l,0,0],[0,c,0],a),this.quad([n,e,o],[0,0,-h],[0,c,0],a),this.quad([t,e,i],[0,0,h],[0,c,0],a)}build(){let t=new oi;return t.setAttribute("position",new me(this.pos,3)),t.setAttribute("color",new me(this.col,3)),t.setIndex(this.idx),t.computeBoundingSphere(),t}};function Ux(r){let t=[],e=[],i=[],n=0;for(let o of r){let a=o.attributes.position,l=o.attributes.normal,c=o.index;for(let h=0;h<a.count;h++)t.push(a.getX(h),a.getY(h),a.getZ(h)),e.push(l.getX(h),l.getY(h),l.getZ(h));for(let h=0;h<c.count;h++)i.push(c.getX(h)+n);n+=a.count}let s=new oi;return s.setAttribute("position",new me(t,3)),s.setAttribute("normal",new me(e,3)),s.setIndex(i),s}function Wn(r,t,e){let i=Math.imul(r|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function hf(r,t,e){let i=Math.floor(r),n=Math.floor(t),s=Math.floor(e),o=r-i,a=t-n,l=e-s,c=o*o*(3-2*o),h=a*a*(3-2*a),u=l*l*(3-2*l),f=(d,g,x)=>d+(g-d)*x;return f(f(f(Wn(i,n,s),Wn(i+1,n,s),c),f(Wn(i,n+1,s),Wn(i+1,n+1,s),c),h),f(f(Wn(i,n,s+1),Wn(i+1,n,s+1),c),f(Wn(i,n+1,s+1),Wn(i+1,n+1,s+1),c),h),u)}var Ox="varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",Nx=`varying vec3 vW; uniform float uTime;
float hs(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
vec3 stars(vec3 d, float sc, float thr) {
  vec3 p = d * sc, c = floor(p), f = fract(p) - 0.5; float r = hs(c); if (r < thr) return vec3(0.0);
  vec3 o = vec3(hs(c + 1.7), hs(c + 3.1), hs(c + 5.3)) - 0.5; float dd = length(f - o * 0.6);
  float tw = 0.75 + 0.25 * sin(uTime * (1.0 + 3.0 * hs(c + 7.7)) + r * 40.0);
  return vec3(smoothstep(0.09, 0.0, dd) * (r - thr) / (1.0 - thr) * tw) * mix(vec3(1.0, 0.82, 0.68), vec3(0.68, 0.84, 1.0), hs(c + 9.1));
}
void main() {
  vec3 d = normalize(vW - cameraPosition);
  vec3 col = vec3(0.0004, 0.0006, 0.0012) + stars(d, 80.0, 0.955) * 1.6 + stars(d, 210.0, 0.982) * 0.9;
  float band = dot(d, normalize(vec3(0.25, 0.85, 0.45))); col += vec3(0.006, 0.005, 0.009) * exp(-band * band * 9.0);
  vec3 pd = normalize(vec3(0.3, -0.62, 0.72)); float cp = dot(d, pd), R = 0.9;
  if (cp > R - 0.02) {
    vec3 q = (d - pd * cp) / sqrt(1.0 - R * R); float rr = length(q);
    vec3 up = normalize(cross(pd, vec3(1.0, 0.0, 0.0))), side = cross(up, pd);
    float lat = dot(q, up), lon = dot(q, side), z = sqrt(max(0.0, 1.0 - rr * rr));
    vec3 n = normalize(side * lon + up * lat - pd * z);
    float lit = clamp(dot(n, normalize(vec3(-0.75, 0.45, -0.2))), 0.0, 1.0);
    vec3 bands = mix(vec3(0.42, 0.27, 0.16), vec3(0.62, 0.5, 0.36), 0.5 + 0.5 * sin(lat * 15.0 + sin(lon * 4.0 + lat * 6.0) * 1.6));
    vec3 planet = bands * (0.02 + 1.1 * lit) + vec3(0.25, 0.4, 0.6) * pow(rr, 5.0) * (0.15 + lit);
    col = mix(col, planet, smoothstep(R - 0.004, R + 0.002, cp));
  }
  gl_FragColor = vec4(col, 1.0);
}`,ta=class{constructor(t,e={}){this.L=t,this.scene=new Qs,this.scene.fog=new Fo(263946,.03),this.uni={uFlick:{value:1},uBakeGain:{value:6},uZone0:{value:1},uZone:{value:new pe(1,1,1,1)},uOff0:{value:0},uOff:{value:new pe(0,0,0,0)}},this.pow=new Float32Array(Ue.length).fill(1),this.off=new Float32Array(Ue.length),this.tx=nf(e.aniso||4),this.glowTex=rf(),this.time=0,this.flick=1,this.flickT=0,this.flickTo=1,this.mats={floor:this.baked({map:this.tx.floor.map,normalMap:this.tx.floor.normalMap,roughness:.58,metalness:.32}),wall:this.baked({map:this.tx.wall.map,normalMap:this.tx.wall.normalMap,roughness:.68,metalness:.22}),ceil:this.baked({map:this.tx.ceil.map,normalMap:this.tx.ceil.normalMap,roughness:.85,metalness:.1}),ice:this.baked({map:this.tx.ice.map,normalMap:this.tx.ice.normalMap,roughness:.3,metalness:0}),prop:this.baked({map:this.tx.prop.map,normalMap:this.tx.prop.normalMap,roughness:.6,metalness:.25}),glow:new Se({vertexColors:!0})},this.fitMat=Ue.map(()=>new Se({vertexColors:!0})),this.fitMatF=Ue.map(()=>new Se({vertexColors:!0})),this.sealMat=new Se({color:16722450}),this.emMat=Ue.map(()=>new Se({color:3147268})),this.sheet=lf(),this.mats.decal=this.baked({map:this.sheet.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,roughness:.6,metalness:0}),this.dress=null,this.signs=[],this.breakers=[],this.wallFaces=[],this.zones=null,this.stationsActive=null,this.spaceMat=new ui({uniforms:{uTime:{value:0}},vertexShader:Ox,fragmentShader:Nx}),this.pit={x:30,z:19},this.mats.ice.normalScale.set(1.4,1.4),this.doors=[],this.tags=[],this.items=[],this.decoys=new Map,this.sprites=[],this.buildStatic(),this.buildDoors(),this.buildLift(),this.buildBreakers(),this.buildStations(),this.buildVents(),this.buildSigns(),this.scene.add(new qo(9417936,.3))}baked(t){let e=new ir(Object.assign({vertexColors:!0},t)),i=this.uni;return e.onBeforeCompile=n=>{n.uniforms.uFlick=i.uFlick,n.uniforms.uBakeGain=i.uBakeGain,n.uniforms.uZone0=i.uZone0,n.uniforms.uZone=i.uZone,n.uniforms.uOff0=i.uOff0,n.uniforms.uOff=i.uOff,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 bake;
attribute vec3 bake2;
attribute vec4 zw;
attribute vec2 em;
varying vec3 vBake;
uniform float uFlick;
uniform float uBakeGain;
uniform float uZone0;
uniform vec4 uZone;
uniform float uOff0;
uniform vec4 uOff;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float emOn = em.y < 0.5 ? uOff0 : em.y < 1.5 ? uOff.x : em.y < 2.5 ? uOff.y : em.y < 3.5 ? uOff.z : uOff.w;
vBake = ((bake + bake2 * uFlick) * (uZone0 * (1.0 - zw.x - zw.y - zw.z - zw.w) + dot(zw, uZone)) + vec3(1.0, 0.1, 0.045) * (em.x * emOn)) * uBakeGain;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vBake;`).replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
irradiance += vBake;`)},e}ambient(t){let e=new ir(t);return e.userData.amb={value:new Jt(0,0,0)},e.onBeforeCompile=i=>{i.uniforms.uAmb=e.userData.amb,i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uAmb;`).replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
irradiance += uAmb;`)},e}ambientAt(t,e,i,n){let s=Ko(this.L,t,e,i,0,0,0),o=this.uni.uFlick.value,a=this.pow,l=s[6]+s[7]+s[8]+s[9]+s[10],c=this.uni.uBakeGain.value*2,h=c*(l>1e-9?(s[6]*a[0]+s[7]*a[1]+s[8]*a[2]+s[9]*a[3]+s[10]*a[4])/l:1),u=s[11]*this.off[s[12]]*c;return n.setRGB((s[0]+s[3]*o)*h+u,(s[1]+s[4]*o)*h+u*.1,(s[2]+s[5]*o)*h+u*.045)}setPower(t,e=1){let i=this.pow,n=this.off;for(let s=0;s<i.length;s++)i[s]=t[s]*e,n[s]=ce((1-t[s])/.93);this.uni.uZone0.value=i[0],this.uni.uZone.value.set(i[1],i[2],i[3],i[4]),this.uni.uOff0.value=n[0],this.uni.uOff.value.set(n[1],n[2],n[3],n[4])}buildStatic(){let t=this.L,e=new Map,i=new Mn,n=Ue.map(()=>new Mn),s=Ue.map(()=>new Mn),o=Ue.map(()=>new Mn),a=Ai(4471),l=new Mn;this.contCol=new Map;{let y=[[.52,.22,.14],[.2,.32,.42],[.55,.42,.14],[.26,.36,.26],[.42,.44,.46]],b=new Set;for(let v=0;v<4080;v++){if(t.propKind[v]!=="container"||b.has(v))continue;let E=[v],S=y[v*7%y.length];for(b.add(v);E.length;){let R=E.pop();this.contCol.set(R,S);for(let T of[R-1,R+1,R-120,R+120])t.propKind[T]==="container"&&!b.has(T)&&(b.add(T),E.push(T))}}}let c=y=>!x(y),h=[.2,.22,.24],u=[.34,.24,.13],f=[.16,.17,.19],d=y=>{let b=t.cells[y];return(b===pt.FLOOR||b===pt.TALL||b===pt.LOW)&&t.doorAt[y]<0&&!t.ice[y]},g=(y,b,v)=>{let E=y+":"+(b/cf|0)+":"+(v/cf|0),S=e.get(E);return S||(S=new Ri,S.mat=y,e.set(E,S)),S},x=y=>{let b=t.cells[y];return b!==pt.SOLID&&b!==pt.LOCKER},m=(y,b,v)=>.05+.32*hf(y*.9,b*.9,v*.9);for(let y=1;y<33;y++)for(let b=1;b<119;b++){let v=y*120+b,E=t.cells[v];if(!x(v))continue;let S=!!t.ice[v],R=b*2,T=y*2,_=t.ceil[v],w=S?"ice":"floor",L=S?"ice":"wall",P=S?"ice":"ceil",D=t.doorAt[v]>=0&&t.doors[t.doorAt[v]].gate,z=[1,1,1];if(E===pt.LIFT)z=[1.25,1,.35];else if(E===pt.DUCT)z=[.55,.55,.6];else if(D)z=[1.2,1,.45];else if(S)z=[.6,.66,.72];else if(t.doorAt[v]>=0)z=[1.12,.96,.5];else for(let B of[v-1,v+1,v-120,v+120])t.cells[B]===pt.PIT&&(z=[1.25,1.05,.5]);E!==pt.PIT&&g(w,b,y).quad(t,[R,0,T],[0,0,2],[2,0,0],2,2,[b,y],[0,1],[1,0],z);let $=S?[.55,.62,.68]:E===pt.DUCT?[.5,.5,.55]:[1,1,1];_<12&&g(P,b,y).quad(t,[R,_,T],[2,0,0],[0,0,2],S?4:2,S?4:2,[b,y],[1,0],[0,1],$,S?(B,ut,mt)=>.5*hf(B*.8,7,mt*.8)*Math.min(1,Math.min(B-R,R+2-B,mt-T,T+2-mt)*3):null);let X=t.roomId[v]>=0?t.rooms[t.roomId[v]]:null,tt=!!X&&X.kind==="hall"&&E===pt.FLOOR&&_<=3.6&&t.doorAt[v]<0;for(let B=0;B<4;B++){let[ut,mt,Rt,q,Xt,j]=cr[B],W=v+ut+mt*120,ct=t.cells[W],ot=Rt(R,T),bt=(Y,ft,vt,xt=L)=>{ft-Y<.02||g(xt,b,y).quad(t,[ot[0],Y,ot[1]],q,[0,ft-Y,0],S&&xt==="ice"?4:2,Math.max(1,Math.round((ft-Y)/1.07)),[Xt(b,y),Y/3.2],[j,0],[0,(ft-Y)/3.2],vt,S&&xt==="ice"?m:null)},G=S?[.62,.7,.76]:E===pt.DUCT?[.5,.5,.55]:E===pt.LIFT?[.6,.6,.62]:[1,1,1];if(E===pt.PIT){ct!==pt.PIT&&bt(-30,0,[.45,.5,.55]),x(W)?t.ceil[W]<_-.01&&bt(t.ceil[W],_,G):bt(0,_,G);continue}if(x(W))t.ceil[W]<_-.01&&bt(t.ceil[W],_,G);else{let Y=tt?_-.45:_,ft=-ut,vt=-mt,xt=[q[0]/2,0,q[2]/2];if(tt&&(g(L,b,y).quad(t,[ot[0],Y,ot[1]],q,[ft*.45,.45,vt*.45],2,1,[Xt(b,y),Y/3.2],[j,0],[0,.2],[.8,.84,.88]),(B===1||B===3)&&n[t.zoneOf[v]].quad([ot[0]+ft*.2,Y+.2,ot[1]+vt*.2],q,[ft*.05,.05,vt*.05],[.35,.55,.75])),(E===pt.FLOOR||E===pt.LIFT)&&ct===pt.SOLID&&this.outboard(W,ut,mt)&&!this.faceTaken(b,y,B)){let M=X&&X.name==="Bridge",k=M?.75:1.1,K=Math.min(M?Y-.3:2.05,Y-.15),rt=M?.12:.45,et=2-rt,Tt=.3,wt=(st,lt,nt)=>[ot[0]+xt[0]*st-ft*nt,lt,ot[1]+xt[2]*st-vt*nt],I=(st,lt,nt,zt)=>g(L,b,y).quad(t,wt(st,nt,0),[xt[0]*(lt-st),0,xt[2]*(lt-st)],[0,zt-nt,0],1,Math.max(1,Math.round((zt-nt)/1.07)),[Xt(b,y)+j*st/2,nt/3.2],[j*(lt-st)/2,0],[0,(zt-nt)/3.2],G);I(0,2,0,k),I(0,2,K,Y),I(0,rt,k,K),I(et,2,k,K);let A=g("prop",b,y),H=[.24,.26,.28];A.quad(t,wt(rt,k,0),[xt[0]*(et-rt),0,xt[2]*(et-rt)],[-ft*Tt,0,-vt*Tt],1,1,[0,0],[1,0],[0,.2],H),A.quad(t,wt(et,K,0),[-xt[0]*(et-rt),0,-xt[2]*(et-rt)],[-ft*Tt,0,-vt*Tt],1,1,[0,0],[1,0],[0,.2],H),A.quad(t,wt(rt,k,0),[-ft*Tt,0,-vt*Tt],[0,K-k,0],1,1,[0,0],[.2,0],[0,1],H),A.quad(t,wt(et,k,Tt),[ft*Tt,0,vt*Tt],[0,K-k,0],1,1,[0,0],[.2,0],[0,1],H),l.quad(wt(rt,k,Tt),[xt[0]*(et-rt),0,xt[2]*(et-rt)],[0,K-k,0],[1,1,1]),M&&A.box(t,...this.mullion(wt(2/2,k,Tt*.5),xt,K-k),H)}else bt(0,Y,G)}}if(this.buildProp(t,g("prop",b,y),i,b,y,E,t.propKind[v],a),d(v)){let B=g("prop",b,y);b%3===0&&d(v-1)&&(_<=5.2&&B.box(t,R-.09,_-.2,T,R+.09,_,T+2,h,!0),c(v-120)&&c(v-120-1)&&B.box(t,R-.11,0,T,R+.11,_,T+.13,h),c(v+120)&&c(v+120-1)&&B.box(t,R-.11,0,T+2-.13,R+.11,_,T+2,h)),y%3===0&&d(v-120)&&(_<=5.2&&B.box(t,R,_-.2,T-.09,R+2,_,T+.09,h,!0),c(v-1)&&c(v-1-120)&&B.box(t,R,0,T-.11,R+.13,_,T+.11,h),c(v+1)&&c(v+1-120)&&B.box(t,R+2-.13,0,T-.11,R+2,_,T+.11,h));let ut=t.roomId[v]>=0?t.rooms[t.roomId[v]]:null;if(ut&&ut.kind==="hall"&&E===pt.FLOOR&&_<=3.6){let mt=ut.x1-ut.x0>=ut.z1-ut.z0;mt&&y===ut.z0&&c(v-120)&&(B.box(t,R,_-.44,T+.3,R+2,_-.31,T+.43,u,!0),B.box(t,R,_-.37,T+.56,R+2,_-.29,T+.64,f,!0),B.box(t,R,_-.56,T+.14,R+2,_-.5,T+.2,f,!0)),!mt&&b===ut.x0&&c(v-1)&&(B.box(t,R+.3,_-.44,T,R+.43,_-.31,T+2,u,!0),B.box(t,R+.56,_-.37,T,R+.64,_-.29,T+2,f,!0),B.box(t,R+.14,_-.56,T,R+.2,_-.5,T+2,f,!0))}if(E===pt.FLOOR&&ut)for(let mt=0;mt<4;mt++){let Rt=v+cr[mt][0]+cr[mt][1]*120;t.cells[Rt]===pt.SOLID&&this.wallFaces.push({i:v,k:mt,hall:ut.kind==="hall",cx:b,cz:y})}}}for(let y of t.elights){let b=o[y.zone];y.dx?b.box(y.x-.03,y.y-.05,y.z-.11,y.x+.03,y.y+.05,y.z+.11,[1,1,1]):b.box(y.x-.11,y.y-.05,y.z-.03,y.x+.11,y.y+.05,y.z+.03,[1,1,1])}for(let y=0;y<Ue.length;y++){if(!o[y].n)continue;let b=new qt(o[y].build(),this.emMat[y]);b.matrixAutoUpdate=!1,b.frustumCulled=!1,this.scene.add(b)}for(let y of t.breakers){let b=g("prop",y.cx,y.cz),v=[.78,.6,.14],E=y.dx?[0,1]:[1,0],S=-y.dx,R=-y.dz,T=(_,w,L,P,D,z,$)=>{let X=[y.x+E[0]*_+S*D,y.x+E[0]*w+S*z],tt=[y.z+E[1]*_+R*D,y.z+E[1]*w+R*z];b.box(t,Math.min(...X),L,Math.min(...tt),Math.max(...X),P,Math.max(...tt),$,!0)};T(-.3,.3,.95,1.75,0,.14,v),T(-.24,.24,1.02,1.42,.14,.16,[.2,.2,.2]),T(-.05,.05,1.1,1.36,.16,.24,[.75,.12,.08]),T(-.04,.04,1.75,Math.min(t.ceil[t.idx(y.cx,y.cz)],3.2),.02,.1,f)}for(let y of t.lockers){let b=g("prop",y.ax,y.az),v=[.36,.5,.5],E=[.1,.12,.13],S=(y.cx+.5)*2+(y.ax-y.cx)*(2/2),R=(y.cz+.5)*2+(y.az-y.cz)*(2/2),T=y.ax!==y.cx?[0,1]:[1,0],_=[y.ax-y.cx,y.az-y.cz],w=(L,P,D,z,$,X,tt)=>{let B=[S+T[0]*L+_[0]*$,S+T[0]*P+_[0]*X],ut=[R+T[1]*L+_[1]*$,R+T[1]*P+_[1]*X];b.box(t,Math.min(...B),D,Math.min(...ut),Math.max(...B),z,Math.max(...ut),tt)};w(-.56,.56,0,2.12,0,.1,E),w(-.48,.48,.06,2.06,.1,.15,v);for(let L=0;L<4;L++)w(-.3,.3,1.55+L*.1,1.59+L*.1,.15,.165,E);w(.32,.38,.95,1.15,.15,.2,[.7,.72,.74]),y.fx=S,y.fz=R,y.outX=_[0],y.outZ=_[1]}for(let y of t.lights){let b=(y.flicker?s:n)[y.zone],v=[y.r*3.2,y.g*3.2,y.b*3.2];if(y.kind==="ceil"){let E=t.ceil[t.idx(y.cx,y.cz)],S=Math.min(E-.02,y.y+.23);g("prop",y.cx,y.cz).box(t,y.x-.55,S-.1,y.z-.22,y.x+.55,S,y.z+.22,[.12,.13,.14],!0),E-S>.5&&g("prop",y.cx,y.cz).box(t,y.x-.025,S,y.z-.025,y.x+.025,E,y.z+.025,[.1,.1,.1]),b.quad([y.x-.48,S-.105,y.z-.15],[.96,0,0],[0,0,.3],v)}else y.kind==="lamp"&&(g("prop",y.cx,y.cz).box(t,y.x-.12,0,y.z-.12,y.x+.12,.5,y.z+.12,[.5,.42,.1]),b.box(y.x-.2,.5,y.z-.2,y.x+.2,.72,y.z+.2,v))}this.buildReactor(g,n);for(let y of e.values()){if(!y.n)continue;let b=new qt(y.build(),this.mats[y.mat]);b.castShadow=y.mat!=="floor"&&y.mat!=="ceil",b.receiveShadow=!0,b.matrixAutoUpdate=!1,this.scene.add(b)}let p=new qt(i.build(),this.mats.glow);if(p.matrixAutoUpdate=!1,p.frustumCulled=!1,this.scene.add(p),l.n){let y=new qt(l.build(),this.spaceMat);y.matrixAutoUpdate=!1,y.frustumCulled=!1,this.scene.add(y)}for(let y=0;y<Ue.length;y++)for(let[b,v]of[[n[y],this.fitMat[y]],[s[y],this.fitMatF[y]]]){if(!b.n)continue;let E=new qt(b.build(),v);E.matrixAutoUpdate=!1,E.frustumCulled=!1,this.scene.add(E)}}buildProp(t,e,i,n,s,o,a,l){if(o!==pt.TALL&&o!==pt.LOW)return;let c=n*2,h=s*2,u=c+2,f=h+2,d=c+2/2,g=h+2/2,x=(v,E,S,R,T=v)=>e.box(t,c+v,E,h+T,u-v,S,f-T,R),m=[.42,.45,.48],p=[.14,.15,.17],y=[.55,.58,.6],b=(v,E)=>{e.box(t,c+.06,v-.09,h+.06,u-.06,v,f-.06,E,!0);for(let[S,R]of[[.14,.14],[2-.26,.14],[.14,2-.26],[2-.26,2-.26]])e.box(t,c+S,0,h+R,c+S+.12,v-.09,h+R+.12,p)};switch(a){case"crate":{let v=[[.42,.4,.26],[.3,.36,.4],[.5,.33,.2],[.36,.38,.36]],E=v[Math.floor(l()*v.length)];if(o===pt.LOW)x(.1+l()*.12,0,Le,E);else{x(.08,0,1.25,E);let S=v[Math.floor(l()*v.length)];e.box(t,c+.2,1.25,h+.25,u-.3,2.35,f-.2,S)}break}case"console":case"liftconsole":{if(x(.1,0,.82,p),e.box(t,c+.14,.82,h+.14,u-.14,Le-.02,f-.14,m),a==="console"){let v=l()<.5?[.1,.55,.75]:[.1,.6,.5];i.quad([c+.3,Le,h+.3],[0,0,.9],[.7,0,0],v),i.quad([c+1.15,Le,h+.35],[0,0,.25],[.45,0,0],[.9,.5,.1]),i.quad([c+1.15,Le,h+.8],[0,0,.12],[.12,0,0],[.2,1.2,.3])}break}case"desk":case"table":case"bench":b(Le,a==="bench"?[.36,.38,.4]:[.5,.5,.48]),l()<.5&&e.box(t,d-.3,Le,g-.2,d+.1,Le+.12,g+.15,[.25,.27,.3]);break;case"counter":x(.04,0,.95,y),e.box(t,c,.95,h,u,Le,f,[.3,.32,.34]);break;case"bed":case"bunk":{if(e.box(t,c+.12,0,h+.06,u-.12,.42,f-.06,p),e.box(t,c+.16,.42,h+.1,u-.16,.62,f-.1,a==="bed"?[.62,.68,.7]:[.4,.44,.36]),e.box(t,c+.3,.62,h+.14,u-.3,.72,h+.6,[.7,.72,.7]),a==="bunk"){for(let[v,E]of[[.12,.06],[2-.2,.06],[.12,2-.14],[2-.2,2-.14]])e.box(t,c+v,.42,h+E,c+v+.08,Le,h+E+.08,p);e.box(t,c+.12,Le-.08,h+.06,u-.12,Le,f-.06,[.3,.33,.3],!0)}break}case"planter":x(.12,0,.7,[.3,.3,.3]),e.box(t,c+.2,.7,h+.2,u-.2,Le,f-.2,[.12,.34,.14]);break;case"pipes":for(let v=0;v<3;v++)e.box(t,c,.12+v*.32,h+.25+v*.42,u,.36+v*.32,h+.5+v*.42,[.5,.36,.2],!0);break;case"ice":{let v=.1+l()*.25,E=.1+l()*.25;e.box(t,c+v,0,h+E,u-E,Le-.15,f-v,[.72,.86,.94]),e.box(t,c+v+.3,Le-.15,h+E+.25,u-E-.4,Le,f-v-.3,[.8,.92,.98]);break}case"rack":{x(.1,0,2.35,[.09,.1,.11]);for(let v=0;v<9;v++){let E=.5+l()*1.6,S=l()<.7?[.1,.9,.3]:[1,.45,.05],R=.25+l()*1.4;i.quad([c+R,E,f-.095],[.05,0,0],[0,.04,0],S),i.quad([c+R+.05,E,h+.095],[-.05,0,0],[0,.04,0],S),i.quad([u-.095,E,h+R+.05],[0,0,-.05],[0,.04,0],S),i.quad([c+.095,E,h+R],[0,0,.05],[0,.04,0],S)}break}case"growrack":{for(let[v,E]of[[.05,.25],[2-.13,.25],[.05,2-.33],[2-.13,2-.33]])e.box(t,c+v,0,h+E,c+v+.08,2.4,h+E+.08,p);for(let v of[.35,1.1,1.85]){e.box(t,c,v,h+.25,u,v+.08,f-.25,m,!0);for(let E=0;E<3;E++){let S=c+.2+E*.6,R=.2+l()*.3;e.box(t,S,v+.08,h+.45,S+.4,v+.08+R,f-.45,[.1+l()*.08,.3+l()*.2,.1])}i.quad([c+.1,v+.62,h+.4],[2-.2,0,0],[0,0,.08],[1.1,.35,1.6])}e.box(t,c,2.4,h+.2,u,2.5,f-.2,p,!0);break}case"tank":e.prism(t,d,g,.85,0,2.5,10,[.52,.56,.58]),e.prism(t,d,g,.3,2.5,2.8,6,p);break;case"spectank":{e.prism(t,d,g,.95,0,.5,10,p),e.prism(t,d,g,.95,2.3,2.6,10,p);for(let v=0;v<12;v++){let E=v/12*6.283,S=(v+1)/12*6.283;if(v%3===0){e.quad(t,[d+Math.cos(S)*.84,.5,g+Math.sin(S)*.84],[(Math.cos(E)-Math.cos(S))*.84,0,(Math.sin(E)-Math.sin(S))*.84],[0,1.8,0],1,1,[0,0],[.3,0],[0,1],p);continue}for(let R=0;R<3;R++){let T=[.5,.26,.12][R];i.quad([d+Math.cos(S)*.8,.5+R*.6,g+Math.sin(S)*.8],[(Math.cos(E)-Math.cos(S))*.8,0,(Math.sin(E)-Math.sin(S))*.8],[0,.6,0],[.1*T,.9*T,1.1*T])}}break}case"machine":{x(.02,0,2.2,[.26,.3,.28]),e.box(t,c+.3,2.2,h+.3,u-.3,2.7,f-.3,p),e.box(t,c+.7,2.7,h+.7,c+1,4.4,h+1,[.45,.33,.2]),i.quad([c+.5,1.5,f-.015],[.18,0,0],[0,.1,0],[1.6,.25,.05]),i.quad([c+.68,1.5,h+.015],[-.18,0,0],[0,.1,0],[1.6,.25,.05]);break}case"freezer":case"fridge":x(.06,0,2.3,[.7,.74,.76]),i.quad([c+.3,1.9,f-.055],[.16,0,0],[0,.06,0],[.2,.8,1.2]),i.quad([c+.46,1.9,h+.055],[-.16,0,0],[0,.06,0],[.2,.8,1.2]);break;case"cabinet":x(.08,0,2.2,[.5,.52,.5]);break;case"stall":x(.04,0,2.3,[.56,.6,.6]);break;case"shelf":{for(let[v,E]of[[.05,.05],[2-.13,.05],[.05,2-.13],[2-.13,2-.13]])e.box(t,c+v,0,h+E,c+v+.08,2.4,h+E+.08,p);for(let v of[.1,.85,1.6,2.32])e.box(t,c+.05,v,h+.05,u-.05,v+.07,f-.05,m,!0);for(let v of[.17,.92,1.67])for(let E=0;E<3;E++)if(l()<.8){let S=c+.15+E*.6,R=.3+l()*.2;e.box(t,S,v,h+.25+l()*.5,S+R,v+.25+l()*.3,h+.9+l()*.6,[.3+l()*.3,.3+l()*.2,.25+l()*.2])}e.box(t,c+.1,.17,g-.03,u-.1,2.3,g+.03,[.2,.21,.22]);break}case"reactor":break;case"container":{let v=s*120+n,E=this.contCol.get(v)||m,S=E.map(T=>T*.62),R=T=>t.propKind[T]==="container";x(0,0,2.7,E);for(let T=1;T<5;T++){let _=T*2/5;R(v-120)||e.box(t,c+_-.035,.05,h-.025,c+_+.035,2.65,h,S),R(v+120)||e.box(t,c+_-.035,.05,f,c+_+.035,2.65,f+.025,S),R(v-1)||e.box(t,c-.025,.05,h+_-.035,c,2.65,h+_+.035,S),R(v+1)||e.box(t,u,.05,h+_-.035,u+.025,2.65,h+_+.035,S)}break}case"engine":{x(.02,0,3.1,[.15,.16,.18]);for(let v of[.55,1.45,2.35])e.box(t,c-.02,v,h-.02,u+.02,v+.16,f+.02,[.34,.27,.16]);e.box(t,c+.5,3.1,h+.5,u-.5,3.6,f-.5,[.22,.23,.25]),l()<.5&&i.quad([c+.6,1.9,f+.025],[.2,0,0],[0,.08,0],[1.6,.2,.05]);break}case"pillar":e.prism(t,d,g,.45,0,t.ceil[s*120+n],8,[.28,.3,.32]),e.prism(t,d,g,.6,0,.3,8,[.2,.21,.22]);break;case"couch":e.box(t,c+.08,0,h+.15,u-.08,.45,f-.15,[.3,.22,.18]),e.box(t,c+.08,.45,h+.15,u-.08,.95,h+.45,[.33,.25,.2]);break;default:o===pt.TALL?x(.08,0,2.3,m):x(.1,0,Le,m)}}outboard(t,e,i){let n=this.L,s=t%120,o=t/120|0;for(;;){if(s+=e,o+=i,s<0||o<0||s>=120||o>=34)return!0;if(n.cells[o*120+s]!==pt.SOLID)return!1}}faceTaken(t,e,i){let[n,s]=cr[i],o=this.L;return o.breakers.some(a=>a.cx===t&&a.cz===e&&a.dx===n&&a.dz===s)||o.stations.some(a=>a.cx===t&&a.cz===e&&a.dx===n&&a.dz===s)}mullion(t,e,i){return[t[0]-.05-Math.abs(e[2])*.1,t[1],t[2]-.05-Math.abs(e[0])*.1,t[0]+.05+Math.abs(e[2])*.1,t[1]+i,t[2]+.05+Math.abs(e[0])*.1]}buildReactor(t,e){let i=this.L,n=1e9,s=-1e9,o=1e9,a=-1e9;for(let v=0;v<4080;v++)if(i.propKind[v]==="reactor"){let E=v%120,S=v/120|0;n=Math.min(n,E),s=Math.max(s,E),o=Math.min(o,S),a=Math.max(a,S)}if(n>s)return;let l=n*2,c=(s+1)*2,h=o*2,u=(a+1)*2,f=(l+c)/2,d=(h+u)/2,g=t("prop",n,o),x=i.ceil[i.idx(n,o)],m=i.zoneOf[i.idx(n,o)],p=[.36,.39,.42],y=[.12,.13,.14],b=[.85,.6,.1];this.pit={x:f,z:d},g.prism(i,f,d,3,0,x,12,[.22,.24,.26],!1),g.prism(i,f,d,3.3,0,.6,12,y),g.prism(i,f,d,3.25,x-.7,x,12,y,!1);for(let v of[1.2,2.4,3.6,4.8])if(!(v>x-1)){g.prism(i,f,d,3.12,v-.12,v+.12,12,p);for(let E=0;E<12;E++){let S=E/12*6.283,R=(E+1)/12*6.283,T=3.02;e[m].quad([f+Math.cos(R)*T,v+.2,d+Math.sin(R)*T],[(Math.cos(S)-Math.cos(R))*T,0,(Math.sin(S)-Math.sin(R))*T],[0,.3,0],[.2,1.6,1.4])}}for(let v=0;v<8;v++){let E=v/8*6.283;g.box(i,f+Math.cos(E)*3.3-.12,0,d+Math.sin(E)*3.3-.12,f+Math.cos(E)*3.3+.12,x,d+Math.sin(E)*3.3+.12,p)}for(let v of[.55,1.05])g.box(i,l,v,h-.035,c,v+.07,h+.035,b,!0),g.box(i,l,v,u-.035,c,v+.07,u+.035,b,!0),g.box(i,l-.035,v,h,l+.035,v+.07,u,b,!0),g.box(i,c-.035,v,h,c+.035,v+.07,u,b,!0);for(let v=l;v<=c;v+=2)for(let E of[h,u])g.box(i,v-.04,0,E-.04,v+.04,1.05,E+.04,b);for(let v=h+2;v<u;v+=2)for(let E of[l,c])g.box(i,E-.04,0,v-.04,E+.04,1.05,v+.04,b)}buildDoors(){let t=this.L,e=new Ri,i=[],n=this.mats.prop;for(let c of t.doors){let h=c.axis==="x",u=c.len,f=u/2,d=new ve;d.position.set(c.x,0,c.z),this.scene.add(d);let g={d:c,grp:d,leaves:[],open:-1,lamp:null,seal:null,sealed:!1};if(c.gate){let x=new Ri,m=[.9,.62,.08],p=[.08,.08,.08],y=[.32,.34,.36],b=(S,R,T,_,w,L)=>h?x.box(t,c.x+S,T,c.z-w,c.x+R,_,c.z+w,L,!0):x.box(t,c.x-w,T,c.z+S,c.x+w,_,c.z+R,L,!0);b(-f,f,.02,2.5,.1,y);for(let S=0;S<u/.4;S++){let R=-f+S*.4;b(R,R+.4,2.25,2.45,.115,S%2?m:p),b(R,R+.4,.06,.26,.115,S%2?p:m)}b(-.35,.35,1.2,1.9,.115,p);let v=x.build();v.translate(-c.x,0,-c.z);let E=new qt(v,n);E.castShadow=!0,E.receiveShadow=!0,d.add(E),g.leaves.push(E)}else{let x=c.bulk>=0;for(let W of[-1,1]){let ct=new Ri,ot=W<0?-f:0,bt=W<0?0:f,G=x?[.3,.32,.34]:[.5,.54,.56],Y=[.85,.6,.12],ft=(M,k,K,rt,et,Tt)=>h?ct.box(t,c.x+M,K,c.z-et,c.x+k,rt,c.z+et,Tt,!0):ct.box(t,c.x-et,K,c.z+M,c.x+et,rt,c.z+k,Tt,!0);if(x){ft(ot,bt,0,ms,.14,G);for(let M=0;M<6;M++){let k=ot+(bt-ot)*M/6;ft(k+.02,k+(bt-ot)/6-.02,.35,.65,.155,M%2?[.08,.08,.08]:Y),ft(k+.02,k+(bt-ot)/6-.02,1.9,2.2,.155,M%2?[.08,.08,.08]:Y)}ft(ot+.15,bt-.15,.95,1.55,.15,[.2,.21,.22])}else ft(ot,bt,0,ms,.07,G),ft(ot+.08,bt-.08,.9,1.05,.085,Y),ft(ot+.12,bt-.12,1.5,2.1,.08,[.2,.22,.24]);let vt=ct.build();vt.translate(-c.x,0,-c.z);let xt=new qt(vt,n);xt.castShadow=!0,xt.receiveShadow=!0,xt.userData.s=W,d.add(xt),g.leaves.push(xt)}let m=Math.min(t.ceil[c.cells[0]],3.4),p=[.2,.22,.24],y=(W,ct,ot,bt,G)=>h?e.box(t,c.x+W,ot,c.z-G,c.x+ct,bt,c.z+G,p,!0):e.box(t,c.x-G,ot,c.z+W,c.x+G,bt,c.z+ct,p,!0),b=x?.34:.16;if(y(-f,-f+(x?.25:.1),0,ms,b),y(f-(x?.25:.1),f,0,ms,b),y(-f,f,ms,m,b),x)for(let W of[-1,1]){let ct=t.sections[W<0?c.bulk+1:c.bulk];i.push({text:(W<0,""+"SECTION "+(ct.id+1)+" \xB7 "+ct.name.toUpperCase()),x:c.x+(h?0:W*.35),z:c.z+(h?W*.35:0),ry:h?W>0?0:Math.PI:W>0?Math.PI/2:-Math.PI/2,big:!0})}let v=new Mn,E=ms+.08,S=x?.5:.14,R=x?.12:.07,T=x?.345:.165;h?(v.quad([-S,E,T],[S*2,0,0],[0,R,0],[1,1,1]),v.quad([S,E,-T],[-S*2,0,0],[0,R,0],[1,1,1])):(v.quad([T,E,S],[0,0,-S*2],[0,R,0],[1,1,1]),v.quad([-T,E,-S],[0,0,S*2],[0,R,0],[1,1,1])),g.lamp=new qt(v.build(),new Se({color:16755234})),d.add(g.lamp);let _=new Ri,w=[.34,.33,.3],L=.125,P=(W,ct,ot,bt)=>h?_.box(t,c.x+W,ot,c.z-L,c.x+ct,bt,c.z+L,w,!0):_.box(t,c.x-L,ot,c.z+W,c.x+L,bt,c.z+ct,w,!0);for(let W of[.62,1.78])P(-f+.05,f-.05,W,W+.12);for(let W of[-f+.16,f-.3])P(W,W+.14,.5,2.02);let D=_.build();D.translate(-c.x,0,-c.z);let z=new qt(D,n);z.castShadow=!0,z.receiveShadow=!0;let $=new Mn,X=1.24;h?($.quad([-.2,X,.092],[.4,0,0],[0,.06,0],[1,1,1]),$.quad([.2,X,-.092],[-.4,0,0],[0,.06,0],[1,1,1])):($.quad([.092,X,.2],[0,0,-.4],[0,.06,0],[1,1,1]),$.quad([-.092,X,-.2],[0,0,.4],[0,.06,0],[1,1,1])),g.seal=new ve,g.seal.add(z),g.seal.add(new qt($.build(),this.sealMat)),g.seal.visible=!1,d.add(g.seal);let tt=c.cells[0],B=tt%120,ut=tt/120|0,mt=h?t.idx(B,ut-1):t.idx(B-1,ut),Rt=h?t.idx(B,ut+1):t.idx(B+1,ut),q=W=>{let ct=t.roomId[W];return ct>=0?t.rooms[ct]:null},Xt=q(mt),j=q(Rt);if(m>=3.1)for(let[W,ct]of[[j,-1],[Xt,1]])!W||W.kind!=="room"||i.push({text:W.name,x:c.x+(h?0:ct*.17),z:c.z+(h?ct*.17:0),ry:h?ct>0?0:Math.PI:ct>0?Math.PI/2:-Math.PI/2})}this.doors.push(g)}let s=new qt(e.build(),this.mats.prop);s.castShadow=!0,s.receiveShadow=!0,s.matrixAutoUpdate=!1,this.scene.add(s);let o=new Map,a=new fi(1.5,.28),l=new fi(3.2,.42);for(let c of i){let h=o.get(c.text);h||(h=new Se({map:of(c.text),color:10132122}),o.set(c.text,h));let u=new qt(c.big?l:a,h);u.position.set(c.x,ms+(c.big?.5:.42),c.z),u.rotation.y=c.ry,u.matrixAutoUpdate=!1,u.updateMatrix(),this.scene.add(u)}}buildLift(){let t=this.L,e=t.lift,i=new Ri,n=1e9,s=-1e9,o=1e9,a=-1e9;for(let p of e.cells){let y=p%120,b=p/120|0;n=Math.min(n,y),s=Math.max(s,y),o=Math.min(o,b),a=Math.max(a,b)}let l=n*2,c=(s+1)*2,h=o*2,u=(a+1)*2,f=[.55,.2,.1],d=[.2,.21,.23],g=(p,y,b,v)=>{i.box(t,p-.32,0,y-.32,p+.32,.45,y+.32,d),i.box(t,p-.3,.45,y-.3,p+.3,.58,y+.3,f);let E=p-b*.3,S=y-v*.3;i.box(t,Math.min(E,E-b*.12)-(v?.3:0),.58,Math.min(S,S-v*.12)-(b?.3:0),Math.max(E,E-b*.12)+(v?.3:0),1.5,Math.max(S,S-v*.12)+(b?.3:0),f)};for(let p of[l+1.2,(l+c)/2,c-1.2])g(p,h+.55,0,1);g(l+.55,h+2.4,1,0),g(c-.55,h+2.4,-1,0),g(l+.55,h+3.7,1,0);for(let p of[0,2.45])i.box(t,l,p,h,c,p+.15,u,d,!0);let x=new qt(i.build(),this.mats.prop);x.castShadow=!0,x.receiveShadow=!0,x.matrixAutoUpdate=!1,this.scene.add(x),this.liftLight=new xn(16766880,0,9,1.6),this.liftLight.position.set(e.x,2.2,e.z),this.scene.add(this.liftLight);let m=e.console;this.liftScreen=new qt(new fi(1.1,.8),new Se({color:16720384})),this.liftScreen.rotation.x=-Math.PI/2,this.liftScreen.position.set(m.x,Le+.005,m.z),this.scene.add(this.liftScreen),this.beacon=new xn(16747038,0,22,1.4),this.beacon.position.set(e.x,3.4,u+2+.6),this.scene.add(this.beacon),this.beaconMesh=new qt(new ai(.16,10,8),new Se({color:3348997})),this.beaconMesh.position.copy(this.beacon.position),this.scene.add(this.beaconMesh)}buildStations(){let t=this.L,e=new Ri,i=[.13,.14,.15],n=[.4,.43,.46],s=[.8,.6,.12],o=[.42,.3,.18];this.stationRecs=[];for(let l of t.stations){let c=l.dx?[0,1]:[1,0],h=-l.dx,u=-l.dz,f=t.ceil[t.idx(l.cx,l.cz)],d=(y,b,v,E,S,R,T)=>{let _=[l.x+c[0]*y+h*S,l.x+c[0]*b+h*R],w=[l.z+c[1]*y+u*S,l.z+c[1]*b+u*R];e.box(t,Math.min(..._),v,Math.min(...w),Math.max(..._),E,Math.max(...w),T,!0)},g=2,x=null;if(l.kind==="pump"){d(-.55,.55,0,1.75,0,.45,[.24,.3,.3]),d(-.62,.62,1.75,1.9,0,.5,i);for(let y of[-.35,.35])d(y-.09,y+.09,1.9,f,.12,.3,o);for(let y=0;y<8;y++){let b=y/8*6.283,v=.3;d(Math.cos(b)*v-.05,Math.cos(b)*v+.05,1.05+Math.sin(b)*v-.05,1.05+Math.sin(b)*v+.05,.45,.52,[.7,.12,.08])}d(-.04,.04,.78,1.32,.45,.5,[.7,.12,.08]),d(-.27,.27,1.01,1.09,.45,.5,[.7,.12,.08]),g=2}else if(l.kind==="lever"){d(-.5,.5,.7,2,0,.3,i);for(let y=0;y<5;y++)d(-.5+y*.2,-.4+y*.2,.7,.8,.3,.31,y%2?[.08,.08,.08]:s);d(-.07,.07,1.2,1.9,.3,.42,n),d(-.16,.16,1.85,2,.3,.5,[.7,.12,.08]),g=2.15}else{let y=l.kind==="uplink"?.7:.5;d(-y-.06,y+.06,1,2,0,.12,i),d(-y,y,0,1,0,.35,[.22,.24,.26]),d(-y,y,.95,1.02,0,.42,[.3,.32,.34]),x=new qt(new fi(y*1.8,.75),new Se({color:666160})),x.position.set(l.x+h*.125,1.5,l.z+u*.125),x.rotation.y=Math.atan2(h,u),x.matrixAutoUpdate=!1,x.updateMatrix(),this.scene.add(x),g=2.12}let m=new qt(new fi(.22,.09),new Se({color:16722450})),p=l.kind==="pump"?.5:l.kind==="lever"?.31:.13;m.position.set(l.x+h*p,g,l.z+u*p),m.rotation.y=Math.atan2(h,u),m.matrixAutoUpdate=!1,m.updateMatrix(),this.scene.add(m),this.stationRecs.push({st:l,lamp:m,screen:x})}let a=new qt(e.build(),this.mats.prop);a.castShadow=!0,a.receiveShadow=!0,a.matrixAutoUpdate=!1,this.scene.add(a)}buildVents(){let t=this.L,e=new Ri,i=[.16,.17,.18],n=.62;for(let c of t.vents){let h=t.ceil[c.cell],u=c.x,f=c.z;e.box(t,u-n-.1,h-.07,f-n-.1,u+n+.1,h-.01,f-n,i,!0),e.box(t,u-n-.1,h-.07,f+n,u+n+.1,h-.01,f+n+.1,i,!0),e.box(t,u-n-.1,h-.07,f-n,u-n,h-.01,f+n,i,!0),e.box(t,u+n,h-.07,f-n,u+n+.1,h-.01,f+n,i,!0)}let s=new qt(e.build(),this.mats.prop);s.matrixAutoUpdate=!1,this.scene.add(s);let o=new yi(n*2,.025,n*2);o.translate(n,0,0);let a=[];for(let c=0;c<6;c++){let h=new yi(n*2,.06,.05);h.translate(n,-.03,-n+.1+c*(n*2-.2)/5),a.push(h)}let l=Ux([o,...a]);this.ventGrille=new Vo(l,new ir({color:3422268,roughness:.55,metalness:.5}),t.vents.length),this.ventSwing=new Float32Array(t.vents.length),this.ventT=new Float32Array(t.vents.length),this.ventGrille.frustumCulled=!1,this.scene.add(this.ventGrille),this.placeVents(!0)}ventKick(t){t>=0&&t<this.ventT.length&&(this.ventT[t]=1.6)}placeVents(t){let e=this.L,i=new we,n=new Ti,s=new Ei,o=new U,a=new U(1,1,1);for(let l=0;l<e.vents.length;l++){if(!t&&this.ventT[l]<=0&&this.ventSwing[l]===0)continue;let c=e.vents[l];o.set(c.x-.62,e.ceil[c.cell]-.05,c.z),s.set(0,0,-this.ventSwing[l]*1.45),n.setFromEuler(s),i.compose(o,n,a),this.ventGrille.setMatrixAt(l,i)}this.ventGrille.instanceMatrix.needsUpdate=!0}glowSprite(t,e){let i=new tr(new mn({map:this.glowTex,color:t,blending:Xs,depthWrite:!1,transparent:!0}));return i.scale.set(e,e,1),i}makeTag(){let t=new ve,e=this.ambient({color:9212566,roughness:.5,metalness:.3}),i=this.ambient({color:1382427,roughness:.3,metalness:.5}),n=new qt(new ai(.27,14,10),e);n.position.set(-.25,.25,.1),n.scale.set(1,.95,1.1),n.castShadow=!0,t.add(n);let s=new qt(new ai(.2,12,8),i);s.position.set(-.25,.27,.27),s.scale.set(1,.7,.6),t.add(s);let o=new qt(new yi(.2,.05,.3),i);o.position.set(.25,.03,-.1),o.rotation.y=.5,t.add(o);let a=this.glowSprite(6160304,.55);return a.position.set(.25,.14,-.1),t.add(a),t.userData={led:a,mats:[e,i]},t}makeSounder(t=1){let e=new ve,i=this.ambient({color:11762204,roughness:.45,metalness:.4}),n=new qt(new ii(.07,.07,.24,10),i);n.rotation.z=Math.PI/2,n.position.y=.07,n.castShadow=!0,e.add(n);let s=this.glowSprite(16752688,.4);return s.position.set(0,.16,0),e.add(s),e.scale.setScalar(t),e.userData={led:s,mats:[i]},e}buildBreakers(){let t=new fi(.16,.1);for(let e of this.L.breakers){let i=new Se({color:3211136}),n=new qt(t,i),s=-e.dx,o=-e.dz;n.position.set(e.x+s*.165,1.56,e.z+o*.165),n.rotation.y=Math.atan2(s,o),n.matrixAutoUpdate=!1,n.updateMatrix(),this.scene.add(n),this.breakers.push({b:e,mat:i})}}buildSigns(){let t=this.L,e=new fi(1,.235),i=[new Se({map:Fc(-1),color:9211020}),new Se({map:Fc(1),color:9211020})];for(let n of this.wallFaces){if(!n.hall||(n.cx*3+n.cz*5)%6!==0||this.signs.some(f=>f.i===n.i))continue;let[s,o]=cr[n.k],a=-s,l=-o,c=(n.cx+.5+s*.5)*2+a*.02,h=(n.cz+.5+o*.5)*2+l*.02,u={i:n.i,right:n.i+-o+s*120,left:n.i- -o-s*120,m:[]};for(let f of i){let d=new qt(e,f);d.position.set(c,2.12,h),d.rotation.y=Math.atan2(a,l),d.matrixAutoUpdate=!1,d.updateMatrix(),d.visible=!1,this.scene.add(d),u.m.push(d)}this.signs.push(u)}}routeSigns(t){let e=this.L,i=e.walkP.slice();for(let o of t.sealed)for(let a of e.doors[o].cells)i[a]=0;let n=ps(i,e.idx(e.lift.console.cx,e.lift.console.cz)),s=o=>n[o]>=0?n[o]:1e9;for(let o of this.signs){let a=s(o.i),l=s(o.right),c=s(o.left);o.m[0].visible=c<a&&c<=l,o.m[1].visible=l<a&&l<c}}dressMatch(t){this.dress&&(this.scene.remove(this.dress),this.dress.traverse(x=>{x.geometry&&x.geometry.dispose()}));let e=this.L,i=this.dress=new ve,n=Ai(((t.seed|0)^388821)>>>0),s=new Ri,o=new Ri,a=this.sheet,l=(x,m,p,y,b=[1,1,1])=>s.quad(e,[x-p,.014,m-p],[0,0,p*2],[p*2,0,0],1,1,[y[0],y[1]],[0,y[3]],[y[2],0],b),c=(x,m,p,y,b,v,E=[1,1,1])=>{let[S,R,T,_]=cr[x.k],w=T(x.cx*2,x.cz*2),L=_[0]/2,P=_[2]/2,D=-S,z=-R;s.quad(e,[w[0]+L*m+D*.014,p,w[1]+P*m+z*.014],[L*y,0,P*y],[0,b,0],1,1,[v[0],v[1]],[v[2],0],[0,v[3]],E)},h=x=>x[Math.floor(n()*x.length)],u=[.44,.33,.21],f=[.1,.1,.11];t.tags.forEach((x,m)=>{if(n()>.6)return;let p=Math.floor(n()*4),y=[1,0,-1,0][p],b=[0,1,0,-1][p],v=-b,E=y,S=x.x+v*.42,R=x.z+E*.42,T=(w,L,P,D,z,$,X)=>{let tt=[S+y*w+v*P,S+y*L+v*D],B=[R+b*w+E*P,R+b*L+E*D];o.box(e,Math.min(...tt),z,Math.min(...B),Math.max(...tt),$,Math.max(...B),X)};T(-.2,.5,-.24,.24,0,.2,u),T(.5,.62,-.13,.13,.02,.17,f),T(-.95,-.2,-.22,-.05,0,.16,u),T(-.62,-.2,.05,.22,0,.16,u),T(-.72,-.56,.05,.6,0,.15,u),T(-.1,.45,-.4,-.27,0,.12,u),T(.2,.36,.24,.8,0,.12,u),T(-1,-.86,-.24,-.03,0,.2,f),T(-.76,-.52,.55,.7,0,.18,f),l(x.x-y*.1,x.z-b*.1,.85,h(a.stain));let _=e.cellOf(x.x-y*1.6,x.z-b*1.6);e.cells[_]===pt.FLOOR&&n()<.6&&l(x.x-y*1.5,x.z-b*1.5,.8,a.drag[0])});let d=this.wallFaces.filter(x=>x.hall),g=this.wallFaces.filter(x=>!x.hall);for(let x=0;x<9;x++){let m=h(d);l((m.cx+.3+n()*.4)*2,(m.cz+.3+n()*.4)*2,.5+n()*.45,h(a.stain))}for(let x=0;x<14;x++){let m=h(x<10?d:g),p=.8+n()*.5;c(m,n()*(2-p),.5+n()*.9,p,p*1.15,h(a.gouge))}for(let x=0;x<7;x++){let m=h(x<5?g:d),p=1.5+n()*.3;c(m,(2-p)/2,1.15+n()*.45,p,p/4,a.scrawl[Math.floor(n()*a.scrawl.length)],[.9,.92,.94])}for(let x of t.sealed){if(n()>.6)continue;let m=e.doors[x],p=Math.min(1.1,m.len-.5),y=-p/2,b=h(a.gouge);for(let v of[-1,1])m.axis==="x"?s.quad(e,[m.x+y*v,.55,m.z+.142*v],[p*v,0,0],[0,p*1.15,0],1,1,[b[0],b[1]],[b[2],0],[0,b[3]],[1,1,1]):s.quad(e,[m.x+.142*v,.55,m.z-y*v],[0,0,-p*v],[0,p*1.15,0],1,1,[b[0],b[1]],[b[2],0],[0,b[3]],[1,1,1])}if(o.n){let x=new qt(o.build(),this.mats.prop);x.castShadow=!0,x.receiveShadow=!0,x.matrixAutoUpdate=!1,i.add(x)}if(s.n){let x=new qt(s.build(),this.mats.decal);x.receiveShadow=!0,x.matrixAutoUpdate=!1,x.renderOrder=1,i.add(x)}this.scene.add(i)}setLayout(t){this.zones=t.zones,this.stationsActive=t.stations,this.routeSigns(t),this.dressMatch(t);for(let i of this.doors)i.sealed=t.sealed.includes(i.d.id),i.seal&&(i.seal.visible=i.sealed),i.open=-1;for(let i of this.tags)this.scene.remove(i.obj);for(let i of this.items)this.scene.remove(i.obj);for(let i of this.decoys.values())this.scene.remove(i.obj);this.decoys.clear();let e=new Jt;this.tags=t.tags.map((i,n)=>{let s=this.makeTag();s.position.set(i.x,0,i.z),s.rotation.y=n*2.4,this.scene.add(s),this.ambientAt(i.x,.3,i.z,e);for(let o of s.userData.mats)o.userData.amb.value.copy(e);return{obj:s,taken:!1,x:i.x,z:i.z,ph:n*1.7}}),this.items=t.items.map((i,n)=>{let s=this.makeSounder(1.3);s.position.set(i.x,0,i.z),s.rotation.y=n*1.9,this.scene.add(s),this.ambientAt(i.x,.3,i.z,e);for(let o of s.userData.mats)o.userData.amb.value.copy(e);return{obj:s,taken:!1,x:i.x,z:i.z,ph:n*2.3}})}update(t,e){if(this.time+=t,this.flickT-=t,this.flickT<=0){let c=Math.random();this.flickTo=c<.18?.08:c<.3?.5:1,this.flickT=this.flickTo<1?.04+Math.random()*.14:.1+Math.random()*1.6}this.flick+=(this.flickTo-this.flick)*Math.min(1,t*40),this.uni.uFlick.value=this.flick;for(let c=0;c<this.pow.length;c++){let h=.04+.96*Math.min(1,this.pow[c]);this.fitMat[c].color.setScalar(h),this.fitMatF[c].color.setScalar(h*(.1+.9*this.flick));let u=.16+2.4*this.off[c];this.emMat[c].color.setRGB(u,u*.1,u*.05)}let i=e?e.zoneOff|0:0,n=Math.sin(this.time*5)>0;for(let c of this.breakers){let h=c.b.zone,u=!!(i&64<<h),f=!!(i&32)||!!(i&1<<h)||!!this.zones&&e&&this.zones[h]!==ge.ON&&!u;c.mat.color.setHex(e?f?n?16723992:3803653:u?16754720:3211136:3211136)}if(!e)return;for(let c of this.doors){let h=e.doorOpen[c.d.id];if(!(h===c.open&&c.jam===e.doorJam[c.d.id]))if(c.open=h,c.jam=e.doorJam[c.d.id],c.d.gate)c.leaves[0].position.y=h*2.7;else{let u=h*(c.d.len/2-.06);for(let f of c.leaves)c.d.axis==="x"?f.position.x=f.userData.s*u:f.position.z=f.userData.s*u;c.lamp.material.color.setHex(c.sealed||c.jam?16722450:e.doorWant[c.d.id]?3735434:16753700)}}for(let c of this.doors)c.d.bulk>=0&&c.lamp.material.color.setHex(e.sec===c.d.bulk&&e.secDone?3735434:Math.sin(this.time*3)>0||e.sec>c.d.bulk?16722450:4196868);for(let c of this.stationRecs){let h=c.st.id,u=!this.stationsActive||this.stationsActive.includes(h),f=e.stProg&&e.stProg[h]||0,d=f>=1;c.lamp.material.color.setHex(u?d?3211136:f>0?Math.sin(this.time*8)>0?16754720:6305800:16722450:1052688),c.screen&&c.screen.material.color.setHex(u?d?1731128:f>0?Math.sin(this.time*12+h)>0?2788e3:1593438:931392:329223)}let s=!1;for(let c=0;c<this.ventT.length;c++)if(this.ventT[c]>0){this.ventT[c]-=t;let h=this.ventT[c]>.5?1:0;this.ventSwing[c]+=(h-this.ventSwing[c])*Math.min(1,t*(h?18:3)),s=!0}else this.ventSwing[c]!==0&&(this.ventSwing[c]=Math.max(0,this.ventSwing[c]-t*2.5)*(1+.6*Math.sin(this.time*30)*this.ventSwing[c]),this.ventSwing[c]<.01&&(this.ventSwing[c]=0),s=!0);s&&this.placeVents(!1),this.spaceMat.uniforms.uTime.value=this.time;for(let c=0;c<this.tags.length;c++){let h=this.tags[c],u=!!(e.tagBits&1<<c);u!==h.taken&&(h.taken=u,h.obj.visible=!u),u||(h.obj.userData.led.material.opacity=.35+.65*Math.max(0,Math.sin(this.time*3.2+h.ph)))}for(let c=0;c<this.items.length;c++){let h=this.items[c],u=!!(e.itemBits&1<<c);u!==h.taken&&(h.taken=u,h.obj.visible=!u),u||(h.obj.userData.led.material.opacity=.2+.5*Math.max(0,Math.sin(this.time*2.1+h.ph)))}for(let c of this.decoys.values())c.live=!1;for(let[c,h]of e.decoys){let u=this.decoys.get(c);u||(u={obj:this.makeSounder(1.2),spin:Math.random()*6},this.scene.add(u.obj),this.decoys.set(c,u)),u.live=!0,u.obj.position.set(h.x,h.y,h.z),u.state=h.state,h.state===0?(u.spin+=t*14,u.obj.rotation.set(u.spin,u.spin*.7,0)):u.obj.rotation.set(0,u.spin,0),u.obj.userData.led.material.opacity=h.state===1?Math.sin(this.time*11.4)>0?1:.15:h.state===0?.7:.05,u.obj.userData.led.scale.setScalar(h.state===1?1.2:.4)}for(let[c,h]of this.decoys)h.live||(this.scene.remove(h.obj),this.decoys.delete(c));let o=e.lift;this.liftLight.intensity=o.state>=ae.ARRIVED?12:o.state===ae.CALLED?3+2*Math.sin(this.time*7):0;let a=Math.sin(this.time*6)>0;this.liftScreen.material.color.setHex(o.state===ae.LOCKED?12589064:o.state===ae.READY?a?3211136:811056:o.state===ae.CALLED?a?16752656:4204544:3211136);let l=o.state===ae.CALLED;this.beacon.intensity=l?14*(.55+.45*Math.sin(this.time*7)):0,this.beaconMesh.material.color.setHex(l&&a?16752688:3348997)}};var Fx="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Bx=`
precision highp float;
uniform sampler2D tScene; uniform vec2 uRes;
uniform float uTime, uStatic, uHurt, uFade, uExposure, uGrain, uSrgbIn, uDesat, uVig, uSlats;
varying vec2 vUv;
float hash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 grab(vec2 uv){ vec3 c = texture2D(tScene, uv).rgb; if (uSrgbIn > 0.5) c = pow(c, vec3(2.2)); return c; }
void main(){
  vec2 uv = vUv; float s = uStatic;
  float band = floor(uv.y * 80.0), tick = floor(uTime * 18.0);
  float torn = step(1.0 - 0.3 * s * s, hash(vec2(band, tick)));
  uv.x += torn * (hash(vec2(band * 1.7, tick + 3.0)) - 0.5) * 0.07 * s;
  vec2 c = uv - 0.5;
  float ca = 0.0012 + 0.009 * s * s;
  vec3 col = vec3(grab(uv + c * ca).r, grab(uv).g, grab(uv - c * ca).b);
  col *= uExposure;
  col = (col * (2.51 * col + 0.03)) / (col * (2.43 * col + 0.59) + 0.14);
  col = pow(clamp(col, 0.0, 1.0), vec3(1.0 / 2.2));
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, vec3(lum) * vec3(0.8, 0.95, 1.0), uDesat);
  float snow = hash(floor(vUv * uRes / 3.0) + tick * 17.0);
  col = mix(col, vec3(snow * 0.7), clamp(s * s * 0.34 * step(0.55, hash(vec2(band * 0.31, tick + 9.0))) + torn * 0.3 * s, 0.0, 0.7));
  col += (hash(vUv * uRes + fract(uTime) * 61.0) - 0.5) * (uGrain + 0.09 * s);
  float v = length(c * vec2(1.0, uRes.y / uRes.x * 1.2));
  col *= 1.0 - smoothstep(0.3, 0.92, v) * uVig;
  col = mix(col, vec3(0.5, 0.0, 0.0) * (0.35 + lum), uHurt * smoothstep(0.1, 0.7, v + 0.3 * uHurt));
  // looking out through the vents of a locker door
  float bar = smoothstep(0.34, 0.5, abs(fract(vUv.y * 7.0) - 0.5));
  float frame = max(bar, smoothstep(0.30, 0.36, abs(vUv.x - 0.5)));
  frame = max(frame, 1.0 - smoothstep(0.0, 0.04, min(vUv.y - 0.18, 0.86 - vUv.y)));
  col *= 1.0 - uSlats * frame * 0.985;
  col *= uFade;
  gl_FragColor = vec4(col, 1.0);
}`,Bc={low:{scale:.7,maxDpr:1,samples:0,shadow:0},medium:{scale:1,maxDpr:1,samples:0,shadow:512},high:{scale:1,maxDpr:1.25,samples:4,shadow:1024}},ea=class{constructor(t){let e=this.renderer=new No({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});e.setPixelRatio(1),e.info.autoReset=!1,e.shadowMap.enabled=!0,e.shadowMap.type=Ec,this.float=e.extensions.has("EXT_color_buffer_float")||e.extensions.has("EXT_color_buffer_half_float"),this.q=Bc.high,this.qName="high",this.w=2,this.h=2,this.uni={tScene:{value:null},uRes:{value:new te(2,2)},uTime:{value:0},uStatic:{value:0},uHurt:{value:0},uFade:{value:1},uExposure:{value:1},uGrain:{value:.045},uSrgbIn:{value:this.float?0:1},uDesat:{value:0},uVig:{value:.75},uSlats:{value:0}},this.post=new ui({uniforms:this.uni,vertexShader:Fx,fragmentShader:Bx,depthTest:!1,depthWrite:!1});let i=new qt(new fi(2,2),this.post);i.frustumCulled=!1,this.pscene=new Qs,this.pscene.add(i),this.pcam=new Ur(-1,1,1,-1,0,1),this.makeTarget()}makeTarget(){this.rt&&this.rt.dispose(),this.rt=new Bi(this.w,this.h,{type:this.float?us:Fi,samples:this.q.samples,depthBuffer:!0}),this.float||(this.rt.texture.colorSpace=ze),this.uni.tScene.value=this.rt.texture}setQuality(t){Bc[t]||(t="high");let e=this.q.samples;this.q=Bc[t],this.qName=t,this.renderer.shadowMap.enabled=this.q.shadow>0,e!==this.q.samples&&this.makeTarget(),this.cssW&&this.resize(this.cssW,this.cssH)}resize(t,e){this.cssW=t,this.cssH=e;let i=Math.min(window.devicePixelRatio||1,this.q.maxDpr),n=this.q.scale*i,s=Math.max(2,Math.round(t*n)),o=Math.max(2,Math.round(e*n));s===this.w&&o===this.h||(this.w=s,this.h=o,this.renderer.setSize(s,o,!1),this.rt.setSize(s,o),this.uni.uRes.value.set(s,o))}render(t,e){let i=this.renderer;i.info.reset(),i.setRenderTarget(this.rt),i.render(t,e),i.setRenderTarget(null),i.render(this.pscene,this.pcam)}};var uf=new U(0,1,0),gs={calm:[.16,.95,.8,1],wary:[1,.55,.08,1.5],hunt:[1,0,.012,2.6],search:[1,.22,.02,1.8],out:[.02,.05,.05,0]},Br=.64,Hc=.76,Ke={idle:{hip:.52,lean:1.45,ribs:0,jaw:0,arm:[1.7,.1,2.3]},roam:{hip:1.3,lean:.44,ribs:.04,jaw:0,arm:[.12,.07,.3]},wary:{hip:1.22,lean:.55,ribs:.14,jaw:.14,arm:[.4,.16,.75]},hunt:{hip:1.05,lean:.85,ribs:.4,jaw:.5,arm:[1,.24,.55]},rear:{hip:1.36,lean:-.1,ribs:1,jaw:1,arm:[.35,1.15,.7]},attack:{hip:1,lean:.95,ribs:1,jaw:1,arm:[1.4,.12,.25]},locker:{hip:.9,lean:1.02,ribs:.3,jaw:.6,arm:[1.25,.4,.5]},wait:{hip:1.34,lean:.12,ribs:0,jaw:0,arm:[.03,.04,.06]},climb:{hip:1.4,lean:-.2,ribs:.2,jaw:0,arm:[2.95,.22,.25]},land:{hip:.7,lean:1.2,ribs:.5,jaw:.4,arm:[.9,.5,.7]}},ia=class{constructor(t){this.s3=t;let e=t.scene,i=sf(),n=new te(.9,.9);this.shell=t.ambient({color:14209732,map:i.map,normalMap:i.normalMap,normalScale:n,roughness:.4,metalness:0}),this.hide=t.ambient({color:2827811,map:i.map,normalMap:i.normalMap,normalScale:n,roughness:.46,metalness:.05}),this.dark=t.ambient({color:788744,normalMap:i.normalMap,normalScale:new te(.6,.6),roughness:.88,metalness:0}),this.bone=t.ambient({color:13616814,roughness:.3,metalness:0}),this.stitch=t.ambient({color:1182731,roughness:.5,metalness:0}),this.claw=t.ambient({color:16777215,vertexColors:!0,roughness:.26,metalness:0}),this.gut=new Se({color:1836292,side:Ye}),this.maw=new Se({color:590338,side:Ye}),this.mats=[this.shell,this.hide,this.dark,this.bone,this.claw,this.stitch];let s=(T,_,w,L=0,P=0,D=0,z=1,$=1,X=1)=>{let tt=new qt(T,_);return tt.position.set(L,P,D),tt.scale.set(z,$,X),tt.castShadow=!0,w.add(tt),tt},o=new ai(1,14,11),a=new er(1,1,5);this.root=new ve,e.add(this.root),this.pelvis=new ve,this.root.add(this.pelvis),s(o,this.dark,this.pelvis,0,0,0,.19,.075,.11);for(let T of[-1,1]){let _=s(o,this.dark,this.pelvis,T*.14,.05,0,.028,.1,.085);_.rotation.z=-T*.5}this.spine=new ve,this.spine.position.y=.05,this.pelvis.add(this.spine);for(let[T,_]of[[.07,.07],[.17,.058],[.27,.052],[.37,.058],[.47,.07]])s(o,this.dark,this.spine,0,T,0,_,.062,_*.85);this.chest=new ve,this.chest.position.y=.68,this.spine.add(this.chest);let l=new ai(1,14,12,0,Math.PI);s(l,this.hide,this.chest,0,0,0,.285,.38,.17),s(o,this.gut,this.chest,0,0,-.02,.265,.36,.15);for(let T=0;T<9;T++)s(o,this.bone,this.chest,0,.33-T*.115,.168*Math.sqrt(Math.max(.2,1-((.33-T*.115)/.4)**2))+(T>5?.03:0),.03,.036,.03);s(o,this.hide,this.chest,0,.31,.05,.34,.1,.15);for(let T of[-1,1]){s(o,this.dark,this.chest,T*.31,.27,0,.07,.07,.07);let _=s(o,this.hide,this.chest,T*.15,.17,.13,.085,.16,.04);_.rotation.z=-T*.25,_.rotation.y=T*.35}for(let T=0;T<7;T++){let _=.34-T*.11,w=.24-Math.abs(T-1.5)*.03,L=s(a,this.dark,this.chest,0,_+w*.2,.17*Math.sqrt(Math.max(.1,1-(_/.4)**2))+w*.38,.024,w,.024);L.rotation.x=1.05}this.ribs=[];let c=new Or(1,.075,5,9,Math.PI/2);c.rotateX(-Math.PI/2);let h=new Or(1,.075,5,9,Math.PI/2);h.rotateZ(Math.PI/2),h.rotateX(-Math.PI/2);for(let T of[-1,1]){let _=new ve;_.position.set(T*.25,0,.03),this.chest.add(_);for(let w=0;w<6;w++){let L=.3-w*.12-(T>0?0:.058),P=Math.sqrt(Math.max(.05,1-(L/.4)**2)),D=.29*P,z=.25*P;s(T>0?c:h,this.dark,_,-T*.25,L,-.03,D,.24,z);let $=s(a,this.bone,_,-T*.25-T*.03,L,-.03-z*1.01,.012,.15,.012);$.rotation.z=T*Math.PI/2,$.rotation.y=T*.3}this.ribs.push({g:_,s:T})}this.lampMat=new mn({map:t.glowTex,color:2749132,blending:Xs,depthWrite:!1,transparent:!0}),this.lamps=[];let u=new ii(.004,.004,1,4);for(let[T,_,w,L]of[[0,0,-.09,.07],[-.11,.12,-.06,.05],[.12,.1,-.08,.055],[-.06,-.14,-.07,.045],[.07,-.11,-.11,.05],[-.14,-.02,-.03,.04],[.15,-.04,-.01,.04]]){let P=new ve;P.position.set(T*.6,.33,w*.5),this.chest.add(P);let D=.33-_,z=new qt(u,this.dark);z.scale.y=D,z.position.set(T*.2,-D/2,w*.25),P.add(z);let $=t.glowSprite(2749132,L*1.9);$.material=this.lampMat,$.position.set(T*.4,-D,w*.5),P.add($);let X=t.glowSprite(2749132,L*5);X.position.copy($.position),P.add(X),this.lamps.push({g:P,halo:X,ph:Math.random()*6,r:L,side:Math.sign(T)})}this.light=new xn(2749132,0,12,1.7),this.light.position.set(0,0,-.2),this.chest.add(this.light),this.throat=t.glowSprite(16722448,.8),this.throat.position.set(0,0,-.1),this.throat.material.opacity=0,this.chest.add(this.throat),this.neck=new ve,this.neck.position.set(0,.35,-.03),this.chest.add(this.neck);let f=new ii(.036,.06,.24,7);f.translate(0,.12,0),this.neckMesh=s(f,this.dark,this.neck),this.head=new ve,this.head.position.y=.24,this.neck.add(this.head),s(o,this.dark,this.head,0,.09,0,.06,.11,.08),this.gullet=t.glowSprite(16720904,.3),this.gullet.position.set(0,.08,-.07),this.gullet.material.opacity=0,this.head.add(this.gullet),this.jaws=[];let d=.132,g=.24,x=.19,m=(T,_,w)=>{let L=_<0?1-.36*Math.pow(-_,1.4):1-.06*_*_;return[T*L,_,w*L*(w<0?.93:1)]};for(let T of[-1,1]){let _=new ve;_.position.set(0,.1,.12),this.head.add(_);let w=new ai(1,14,14,T>0?Math.PI/2:-Math.PI/2,Math.PI),L=w.attributes.position;for(let D=0;D<L.count;D++){let z=m(L.getX(D),L.getY(D),L.getZ(D));L.setXYZ(D,z[0],z[1],z[2])}w.computeVertexNormals(),s(w,this.shell,_,0,0,-.14,d,g,x),s(w,this.maw,_,0,0,-.14,d*.9,g*.93,x*.92);let P=(D,z)=>{let $=m(0,Math.sin(D),-Math.cos(D));return[$[1]*g*z,-.14+$[2]*x*z]};for(let D of[-1.3,-.95,-.62,-.3,0,.3,.62,.95,1.3]){let z=.05+.02*Math.abs(Math.sin(D*7.1+T)),[$,X]=P(D+T*.06,.84),tt=s(a,this.bone,_,T*(.012-z/2),$,X,.009,z,.009);tt.rotation.z=T*Math.PI/2,tt.rotation.y=T*.35}for(let D=0;D<12;D++){let z=-1.32+(D+(T>0?0:.5))*.235,$=.04+.022*Math.abs(Math.sin(D*2.7+T)),[X,tt]=P(z,1),B=s(a,this.stitch,_,T*(.03-$/2),X,tt,.0065,$,.0065);B.rotation.z=T*Math.PI/2}this.jaws.push({g:_,s:T})}this.arms=[];let p=new ii(.058,.04,.72,7);p.translate(0,-.36,0);let y=new ii(.046,.026,.78,7);y.translate(0,-.39,0);let b=new er(.018,.44,5);b.rotateX(Math.PI),b.translate(0,-.22,0);{let T=b.attributes.position,_=new Float32Array(T.count*3);for(let w=0;w<T.count;w++){let L=ce((-T.getY(w)/.44-.3)/.6),P=L*L*(3-2*L);_[w*3]=$e(.62,.075,P),_[w*3+1]=$e(.58,.012,P),_[w*3+2]=$e(.48,.01,P)}b.setAttribute("color",new ei(_,3))}for(let T of[-1,1]){let _=new ve;_.position.set(T*.31,.27,0),this.chest.add(_),s(p,this.dark,_);let w=new ve;w.position.y=-.72,_.add(w),s(o,this.dark,w,0,0,0,.05,.05,.05),s(y,this.shell,w);let L=new ve;L.position.y=-.78,w.add(L),s(o,this.shell,L,0,-.01,0,.04,.05,.03);let P=[];for(let D of[-1,0,1]){let z=s(b,this.claw,L);z.rotation.z=D*.3,z.rotation.x=.15,P.push({f:z,a:D})}this.arms.push({g:_,el:w,hand:L,fingers:P,s:T,ph:T*1.3})}this.legs=[];let v=new ii(.085,.058,1,7),E=new ii(.064,.008,1,7),S=new ai(.075,8,6),R=new er(.03,.22,5);for(let T of[-1,1]){let _={side:T,hip:new U(T*.12,-.03,0),home:T*.16,foot:new U,from:new U,to:new U,t:1,dur:.25,lift:0,up:new qt(v,this.dark),lo:new qt(E,this.dark),kn:new qt(S,this.dark),sp:new qt(R,this.dark)};for(let w of[_.up,_.lo,_.kn,_.sp])w.castShadow=!0,e.add(w);this.legs.push(_)}this.x=0,this.z=0,this.yaw=0,this.vx=0,this.vz=0,this.speed=0,this.p={hip:Ke.idle.hip,lean:Ke.idle.lean,ribs:0,jaw:0,a0:1.7,a1:.1,a2:2.3},this.mood=gs.calm.slice(),this.t=0,this.placed=!1,this.lunge=0,this.ambT=0,this.rear=0,this.shine=0,this.tilt=0,this.tiltTo=0,this.turn=0,this.turnTo=0,this.twT=2,this.tw=0,this.stretch=0,this.cracks=0,this.watching=!1,this.lol=1,this.lolSet=!1,this._a=new U,this._b=new U,this._fq=new U,this._k=new U,this._f=new U,this._s=new U,this._q=new Ti,this._c=new Jt,this._w=new Jt(1,1,.9),this.setVisible(!1)}setVisible(t){this.root.visible=t;for(let e of this.legs)e.up.visible=e.lo.visible=e.kn.visible=e.sp.visible=t;t||(this.placed=!1)}update(t,e,i){this.t+=t;let n=this.s3.L,s=this.p;if(!this.placed){this.x=e.x,this.z=e.z,this.yaw=e.yaw,this.vx=this.vz=0,this.placed=!0;for(let q of this.legs)this.homeOf(q,q.foot,0),q.t=1}let o=Math.min(1,t*18),a=this.x,l=this.z;this.x+=(e.x-this.x)*o,this.z+=(e.z-this.z)*o,this.yaw=_n(this.yaw,e.yaw,Math.min(1,t*12)),t>0&&(this.vx=$e(this.vx,(this.x-a)/t,.3),this.vz=$e(this.vz,(this.z-l)/t,.3));let c=this.speed=Math.hypot(this.vx,this.vz),h=e.state,u=h===Q.HUNT||h===Q.ATTACK,f=!!e.lampsOut&&(h===Q.AMBUSH||h===Q.BAIT),d=Math.min(n.ceil[n.cellOf(le(this.x,2,1e4),le(this.z,2,1e4))]||Nc,4.2);this.rear+=((e.rear?1:0)-this.rear)*Math.min(1,t*(e.rear?16:4));let g=e.watch?Math.hypot(e.watch.x-this.x,e.watch.z-this.z):99;this.stretch+=((e.watch&&g<9&&!u||this.rear>.5?1:0)-this.stretch)*Math.min(1,t*(this.rear>.5?6:1.4)),this.lunge=h===Q.ATTACK?Math.min(1,this.lunge+t*7):Math.max(0,this.lunge-t*2.5);let x=h===Q.IDLE?Ke.idle:f?Ke.wait:h===Q.ATTACK?Ke.attack:h===Q.HUNT?Ke.hunt:h===Q.LOCKER?Ke.locker:h===Q.SUSPECT||h===Q.INVEST||h===Q.SEARCH?Ke.wary:Ke.roam;e.climb===1?x=Ke.climb:e.climb===2&&(x=Ke.land),this.rear>.5&&h!==Q.ATTACK&&(x=Ke.rear);let m=Math.min(1,t*(x===Ke.rear||x===Ke.attack||x===Ke.land?13:x===Ke.idle?2:x===Ke.climb?7:5));s.hip+=(x.hip-s.hip)*m,s.lean+=(x.lean-s.lean)*m,s.ribs+=(x.ribs-s.ribs)*Math.min(1,t*(x.ribs>s.ribs?16:4)),s.jaw+=(x.jaw-s.jaw)*Math.min(1,t*(x.jaw>s.jaw?16:4)),s.a0+=(x.arm[0]-s.a0)*m,s.a1+=(x.arm[1]-s.a1)*m,s.a2+=(x.arm[2]-s.a2)*m;let p=s.lean+(u?Math.min(.2,c*.03):0),y=s.hip,b=q=>y+.05+1.03*Math.cos(q)+(.5+.2*this.stretch)*Math.cos(q*.45);for(let q=0;q<8&&b(p)>d-.06;q++)p+=.09,q>3&&(y-=.05);let v=-Math.sin(this.yaw),E=-Math.cos(this.yaw),S=.5+c*.17,R=le(.4-c*.04,.17,.4),[T,_]=this.legs,w=0;for(let q of this.legs){let Xt=q===T?_:T;if(q.t<1){q.t=Math.min(1,q.t+t/q.dur);let j=q.t*q.t*(3-2*q.t);q.foot.lerpVectors(q.from,q.to,j),q.foot.y=Math.sin(q.t*Math.PI)*q.lift,q.t>=1&&(q.foot.y=0,i&&i(q.foot.x,q.foot.z,c))}else{this.homeOf(q,this._a,0);let j=Math.hypot(this._a.x-q.foot.x,this._a.z-q.foot.z);(j>S&&Xt.t>=1||j>S*2.2||c<.15&&j>.22&&Xt.t>=1)&&(q.from.copy(q.foot),this.homeOf(q,q.to,R*.9+.05),q.t=0,q.dur=R*(.92+Math.random()*.16),q.lift=.16+c*.06)}w+=q.side*((q.foot.x-this.x)*v+(q.foot.z-this.z)*E)}let L=Math.hypot(T.foot.x-_.foot.x,T.foot.z-_.foot.z);y-=le(L-.5,0,1.4)*.09,f?this.lolSet||(this.lolSet=!0,this.lol=(Math.random()<.5?-1:1)*(.95+Math.random()*.3),this.twT=Math.min(this.twT,.5)):this.lolSet=!1;let P=e.watch?le(yn(Ze(e.watch.x-this.x,e.watch.z-this.z)-this.yaw),-2.75,2.75):null;if(P!==null&&!this.watching&&(this.twT=Math.min(this.twT,.15+Math.random()*.3)),this.watching=P!==null,this.twT-=t,this.twT<=0)if(P!==null){let q=P-this.turnTo;this.turnTo+=Math.sign(q)*Math.min(Math.abs(q),.3+Math.random()*.5),this.twT=.2+Math.random()*(f?1.2:.5),this.tiltTo=f?this.lol:Math.abs(this.turnTo)>1.4?Math.sign(this.turnTo)*.45:(Math.random()-.5)*.6,Math.abs(q)>.08&&this.cracks++}else this.twT=(f?2.5:1)+Math.random()*(f?7:3.5),this.tw=(Math.random()-.5)*.25,this.tiltTo=f?this.lol:(Math.random()-.5)*(u?.5:.9),this.turnTo=f?(Math.random()-.5)*.4:(Math.random()-.5)*(h===Q.SEARCH||h===Q.INVEST||h===Q.ROAM?1.5:.5),Math.random()<.2&&this.cracks++;this.tw*=Math.max(0,1-t*8),this.tilt+=(this.tiltTo-this.tilt)*Math.min(1,t*16),this.turn+=(this.turnTo-this.turn)*Math.min(1,t*20);let D=Math.sin(this.t*1.7)*.012,z=(e.lift||0)*1.8;this.root.position.set(this.x,z,this.z),this.root.rotation.y=this.yaw,this.pelvis.position.set(0,y+D,-this.lunge*.35),this.pelvis.rotation.set(0,le(w*.16,-.3,.3),this.tw*.4),this.spine.rotation.set(-p,-le(w*.2,-.35,.35),Math.sin(this.t*2.3)*.015*(1+c)+this.tw);let $=this.turn;this.neckMesh.scale.y=1+.95*this.stretch,this.head.position.y=.24*(1+.95*this.stretch),this.neck.rotation.set(-.35+p*.55-this.stretch*.15,0,0),this.head.rotation.set(p*.35-.1-this.rear*.25,$,this.tilt);let X=s.jaw*.19+(u?.04*Math.max(0,Math.sin(this.t*7.3)):0);for(let q of this.jaws)q.g.rotation.y=-q.s*X;let tt=ce(s.ribs+(u?.1*Math.max(0,Math.sin(this.t*5.1)):Math.sin(this.t*1.7)*.012));for(let q of this.ribs)q.g.rotation.y=-q.s*tt*1.25,q.g.scale.setScalar(1+.45*tt);this.gut.color.setRGB(.012+.03*tt*tt,.002,.002),this.gullet.material.opacity=ce(X*2.6),this.throat.material.opacity=ce(tt*tt*.1);let B=le(w*.5,-.5,.5)*ce(c/2.5);for(let q of this.arms){let Xt=Math.sin(this.t*(5+q.s)+q.ph)*.05*(.4+s.ribs*2);q.g.rotation.x=p+s.a0-q.s*B*(u?.3:1)+Xt+this.lunge*.3,q.g.rotation.z=q.s*(s.a1+Xt*.5),q.el.rotation.x=s.a2+Math.max(0,q.s*B)*.5-Xt;let j=.3+s.ribs*.35+Math.sin(this.t*3.1+q.ph)*.06;for(let W of q.fingers)W.f.rotation.z=W.a*j,W.f.rotation.x=.15+s.ribs*.5+Math.sin(this.t*9+W.a*2+q.ph)*.07*(u?2:1)}this.root.updateMatrixWorld(!0);for(let q of this.legs){let Xt=this._a.copy(q.hip);this.pelvis.localToWorld(Xt);let j=z>0?this._fq.copy(q.foot).setY(q.foot.y+z*.85):q.foot,W=this._b.subVectors(j,Xt),ct=le(W.length(),.25,Br+Hc-.01);W.normalize();let ot=(Br*Br-Hc*Hc+ct*ct)/(2*ct),bt=Math.sqrt(Math.max(0,Br*Br-ot*ot)),G=this._f.set(v,.12,E).addScaledVector(W,-(v*W.x+.12*W.y+E*W.z)).normalize(),Y=this._k.copy(Xt).addScaledVector(W,ot).addScaledVector(G,bt),ft=this._s.copy(Xt).addScaledVector(W,ct);this.seg(q.up,Xt,Y),this.seg(q.lo,Y,ft),q.kn.position.copy(Y),q.sp.position.copy(Y).addScaledVector(G,.13),q.sp.quaternion.copy(this._q.setFromUnitVectors(uf,G))}let ut=e.lampsOut?gs.out:u?gs.hunt:h===Q.SEARCH||h===Q.LOCKER?gs.search:h===Q.SUSPECT||h===Q.INVEST?gs.wary:h===Q.IDLE?gs.out:gs.calm;for(let q=0;q<4;q++)this.mood[q]+=(ut[q]-this.mood[q])*Math.min(1,t*(e.lampsOut?3:6));this.shine+=((e.shine||0)-this.shine)*Math.min(1,t*10);let mt=.82+.18*Math.sin(this.t*(u?13:2.4)),Rt=this.shine*ce(1-this.mood[3]);this._c.setRGB(this.mood[0],this.mood[1],this.mood[2]),this.lampMat.color.copy(this._c).multiplyScalar(.2+.55*this.mood[3]*mt),this.lampMat.color.r+=Rt*.85,this.lampMat.color.g+=Rt*.9,this.lampMat.color.b+=Rt*.7,this.light.color.copy(this._c),this.light.intensity=3.2*this.mood[3]*mt*(1+.4*tt);for(let q of this.lamps)q.g.rotation.x=p*.9+Math.sin(this.t*2.1+q.ph)*.06+tt*(.45+.25*Math.sin(q.ph)),q.g.rotation.z=Math.sin(this.t*1.6+q.ph*2)*.08+this.tw*2+q.side*tt*.25,q.halo.material.color.copy(this._c).lerp(this._w,Rt),q.halo.material.opacity=Math.min(.5,.26*this.mood[3]*mt+Rt*.3);if(this.ambT-=t,this.ambT<=0){this.ambT=.12,this.s3.ambientAt(this.x,1.6,this.z,this.shell.userData.amb.value);for(let q of this.mats)q.userData.amb.value.copy(this.shell.userData.amb.value)}}homeOf(t,e,i){let n=Math.cos(this.yaw),s=Math.sin(this.yaw),o=this.s3.L,a=.08+this.p.lean*.2,l=this.x+t.home*n-s*a+this.vx*i,c=this.z-t.home*s-n*a+this.vz*i;for(let h=0;h<4&&!o.walkC[o.cellOf(l,c)];h++)l=$e(l,this.x,.35),c=$e(c,this.z,.35);return e.set(l,0,c)}seg(t,e,i){let n=this._q0||(this._q0=new U);n.subVectors(e,i);let s=n.length()||.001;t.position.copy(i).addScaledVector(n,.5),t.scale.set(1,s,1),t.quaternion.copy(this._q.setFromUnitVectors(uf,n.multiplyScalar(1/s)))}};var bn=["#63e6d0","#ffb84d","#ff6fb1","#a8e05f","#6fa8ff","#ff6a55"],na=class{constructor(t){this.s3=t,this.map=new Map,this.lamps=[];for(let e=0;e<2;e++){let i=new sr(14674687,0,30,.5,.6,1.6);t.scene.add(i),t.scene.add(i.target),this.lamps.push(i)}this.box=new yi(1,1,1),this.sph=new ai(1,14,10),this.cyl=new ii(1,1,1,10),this._c=new Jt}make(t,e){let i=this.s3,n=new ve,s=bn[t%bn.length],o=i.ambient({color:8018492,roughness:.8,metalness:0}),a=i.ambient({color:1842978,roughness:.5,metalness:.3}),l=new Se({color:s}),c=new ve;n.add(c);let h=(p,y,b,v,E,S,R,T,_=c)=>{let w=new qt(p,y);return w.position.set(b,v,E),w.scale.set(S,R,T),w.castShadow=!0,_.add(w),w};h(this.cyl,o,0,1.08,0,.22,.62,.17),h(this.box,a,0,1.12,.2,.3,.46,.16),h(this.sph,o,0,1.58,0,.19,.2,.2),h(this.sph,a,0,1.59,-.09,.15,.11,.13),h(this.box,l,0,1.72,-.02,.2,.03,.3);let u=h(this.box,o,-.1,.39,0,.13,.78,.15),f=h(this.box,o,.1,.39,0,.13,.78,.15),d=h(this.box,o,-.29,1.08,0,.09,.6,.11),g=h(this.box,o,.29,1.08,0,.09,.6,.11),x=h(this.sph,new Se({color:1118481}),.13,1.63,-.16,.035,.035,.035),m=new tr(new mn({map:af(e,s),depthWrite:!1,transparent:!0}));return m.scale.set(1.5,.375,1),m.position.y=2.05,n.add(m),this.s3.scene.add(n),{g:n,body:c,legL:u,legR:f,armL:d,armR:g,lens:x,tag:m,suit:o,dark:a,name:e,slot:t,x:0,z:0,yaw:0,walk:0,placed:!1,ambT:0,sv:0}}sync(t,e,i){let n=new Set,s=0,o=[];for(let a of t){n.add(a.id);let l=this.map.get(a.id);(!l||l.name!==a.name||l.slot!==a.slot)&&(l&&this.s3.scene.remove(l.g),l=this.make(a.slot,a.name),this.map.set(a.id,l)),l.placed||(l.x=a.x,l.z=a.z,l.yaw=a.yaw,l.placed=!0);let c=l.x,h=l.z,u=Math.min(1,e*14);l.x+=(a.x-l.x)*u,l.z+=(a.z-l.z)*u,l.yaw=_n(l.yaw,a.yaw,u);let f=e>0?Math.hypot(l.x-c,l.z-h)/e:0;l.sv+=(f-l.sv)*Math.min(1,e*8);let d=a.status===dt.OUT||a.hidden>=0;if(l.g.visible=!d,d)continue;let g=a.status===dt.DOWN||a.status===dt.DEAD,x=!!(a.f&Ne.CROUCH);l.g.position.set(l.x,0,l.z),l.g.rotation.y=l.yaw,l.body.rotation.x+=((g?-1.45:0)-l.body.rotation.x)*Math.min(1,e*6),l.body.position.y+=((g?.22:0)-l.body.position.y)*Math.min(1,e*6),l.body.scale.y+=((x&&!g?.62:1)-l.body.scale.y)*Math.min(1,e*9),l.walk+=l.sv*e*3.2;let m=Math.sin(l.walk)*Math.min(.7,l.sv*.22);l.legL.rotation.x=m,l.legR.rotation.x=-m,l.armL.rotation.x=-m*.7,l.armR.rotation.x=m*.7;let p=Math.hypot(l.x-i.x,l.z-i.z);l.tag.visible=p<26&&!g,l.tag.position.y=x?1.5:2.05;let y=!!(a.f&Ne.LIGHT)&&!g;l.lens.material.color.setHex(y?16777215:1118481),y&&o.push({a:l,o:a,d:p}),l.ambT-=e,l.ambT<=0&&(l.ambT=.2,this.s3.ambientAt(l.x,1.2,l.z,l.suit.userData.amb.value),l.dark.userData.amb.value.copy(l.suit.userData.amb.value),a.status===dt.DEAD&&l.suit.userData.amb.value.multiplyScalar(.4))}for(let[a,l]of this.map)n.has(a)||(this.s3.scene.remove(l.g),this.map.delete(a));o.sort((a,l)=>a.d-l.d);for(let{a,o:l}of o){if(s>=this.lamps.length)break;let c=this.lamps[s++],h=l.f&Ne.CROUCH?.95:1.6,u=-Math.sin(a.yaw)*Math.cos(l.pitch||0),f=Math.sin(l.pitch||0),d=-Math.cos(a.yaw)*Math.cos(l.pitch||0);c.position.set(a.x+u*.25,h,a.z+d*.25),c.target.position.set(a.x+u*8,h+f*8,a.z+d*8),c.intensity=150}for(;s<this.lamps.length;s++)this.lamps[s].intensity=0}clear(){for(let t of this.map.values())this.s3.scene.remove(t.g);this.map.clear();for(let t of this.lamps)t.intensity=0}};var Hr=class{constructor(){this.ctx=null,this.cheap=!1,this.vol=.8,this.t=0,this.beatT=0,this.breathT=0,this.hideT=1,this.staticLevel=0}start(t,e){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i&&!t)return;let n=this.ctx=t||new i;this.master=n.createGain(),this.master.gain.value=this.vol;let s=n.createDynamicsCompressor();s.threshold.value=-16,s.knee.value=18,s.ratio.value=5,s.attack.value=.004,s.release.value=.2,this.muff=n.createBiquadFilter(),this.muff.type="lowpass",this.muff.frequency.value=2e4,this.muff.Q.value=.5,this.master.connect(this.muff).connect(s).connect(n.destination);let o=(u,f)=>{let d=n.createBuffer(1,n.sampleRate*u,n.sampleRate),g=d.getChannelData(0),x=0;for(let m=0;m<g.length;m++){let p=Math.random()*2-1;f?(x=(x+.02*p)/1.02,g[m]=x*3.5):g[m]=p}return d};this.white=o(2,!1),this.brown=o(4,!0);let a=(u,f,d,g,x)=>{let m=n.createBufferSource();m.buffer=u,m.loop=!0;let p=n.createBiquadFilter();p.type=f,p.frequency.value=d,p.Q.value=g;let y=n.createGain();return y.gain.value=x,m.connect(p).connect(y).connect(this.master),m.start(),y};if(!e){a(this.brown,"lowpass",190,.5,.055),a(this.white,"bandpass",700,.35,.006);for(let[u,f]of[[49,.07],[73.4,.045],[98.3,.11]]){let d=n.createOscillator();d.type="sine",d.frequency.value=u;let g=n.createGain();g.gain.value=.012;let x=n.createOscillator();x.frequency.value=f;let m=n.createGain();m.gain.value=.01,x.connect(m).connect(g.gain),d.connect(g).connect(this.master),d.start(),x.start()}}this.staticGain=a(this.white,"bandpass",2800,.5,0),this.genGain=n.createGain(),this.genGain.gain.value=0,this.genGain.connect(this.master);for(let u of[55,110.4,164.7]){let f=n.createOscillator();f.type="sawtooth",f.frequency.value=u;let d=n.createBiquadFilter();d.type="lowpass",d.frequency.value=320;let g=n.createGain();g.gain.value=.2,f.connect(d).connect(g).connect(this.genGain),f.start()}let l=new Float32Array(256);for(let u=0;u<256;u++){let f=u/128-1;l[u]=Math.tanh(f*3.5)}this.curve=l,this.tenseGain=n.createGain(),this.tenseGain.gain.value=0,this.tenseFl=n.createBiquadFilter(),this.tenseFl.type="lowpass",this.tenseFl.frequency.value=240,this.tenseFl.Q.value=.8,this.tenseFl.connect(this.tenseGain).connect(this.master);let c=n.createOscillator(),h=n.createGain();c.frequency.value=.13,h.gain.value=9,c.connect(h),c.start();for(let u of[87.3,92.5,130.8,185,277.2]){let f=n.createOscillator();f.type="sawtooth",f.frequency.value=u,h.connect(f.detune);let d=n.createGain();d.gain.value=u>200?.1:.22,f.connect(d).connect(this.tenseFl),f.start()}}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=t)}get now(){return this.ctx.currentTime}listener(t,e,i,n,s,o){if(!this.ctx)return;let a=this.ctx.listener;if(a.positionX){let l=this.now;a.positionX.setValueAtTime(t,l),a.positionY.setValueAtTime(e,l),a.positionZ.setValueAtTime(i,l),a.forwardX.setValueAtTime(n,l),a.forwardY.setValueAtTime(s,l),a.forwardZ.setValueAtTime(o,l),a.upX.setValueAtTime(0,l),a.upY.setValueAtTime(1,l),a.upZ.setValueAtTime(0,l)}else a.setPosition(t,e,i),a.setOrientation(n,s,o,0,1,0)}at(t,e,i=1.5,n=3,s=!1,o=60){let a=this.ctx.createPanner();if(a.panningModel=this.cheap?"equalpower":"HRTF",a.distanceModel="inverse",a.refDistance=n,a.maxDistance=o,a.rolloffFactor=1.35,a.positionX?(a.positionX.value=t,a.positionY.value=i,a.positionZ.value=e):a.setPosition(t,i,e),!s)return a.connect(this.master),a;let l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=650;let c=this.ctx.createGain();return c.gain.value=.6,l.connect(c).connect(a).connect(this.master),l}tone(t,e,i,n,s,o,a,l=.006){let c=this.ctx,h=c.createOscillator(),u=c.createGain();return a=a||this.now,h.type=t,h.frequency.setValueAtTime(e,a),i!==e&&h.frequency.exponentialRampToValueAtTime(Math.max(1,i),a+n),u.gain.setValueAtTime(1e-4,a),u.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),a+l),u.gain.exponentialRampToValueAtTime(1e-4,a+n),h.connect(u).connect(o||this.master),h.start(a),h.stop(a+n+.03),u}burst(t,e,i,n,s,o,a,l,c,h=.004){let u=this.ctx,f=u.createBufferSource(),d=u.createBiquadFilter(),g=u.createGain();l=l||this.now,f.buffer=c||this.white,f.loop=!0,d.type=i,d.Q.value=o,d.frequency.setValueAtTime(n,l),s!==n&&d.frequency.exponentialRampToValueAtTime(Math.max(20,s),l+t),g.gain.setValueAtTime(1e-4,l),g.gain.exponentialRampToValueAtTime(Math.max(2e-4,e),l+h),g.gain.exponentialRampToValueAtTime(1e-4,l+t),f.connect(d).connect(g).connect(a||this.master),f.start(l,Math.random()*1.5),f.stop(l+t+.03)}step(t){if(!this.ctx)return;let e=t.crouch?.03:t.run?.18:.075;this.burst(.09,e,"lowpass",900+Math.random()*500,180,.8),this.tone("sine",95+Math.random()*25,48,.09,e*1.3)}stepAt(t,e,i,n){if(!this.ctx)return;let s=this.at(t,e,.2,2),o=n?.05:i?.5:.22;this.burst(.09,o,"lowpass",1e3,200,.8,s),this.tone("sine",100,50,.09,o,s)}ui(){this.ctx&&this.tone("sine",980,980,.04,.08)}lamp(t){this.ctx&&(this.burst(.025,.2,"highpass",2500,2500,.7),this.tone("square",t?1700:1100,t?1700:1100,.03,.03))}pickupTag(){if(!this.ctx)return;let t=this.now;this.tone("sine",880,880,.12,.16,null,t),this.tone("sine",1320,1320,.2,.16,null,t+.1);for(let e=0;e<7;e++)this.tone("square",1500+Math.random()*2600,1500,.03,.025,null,t+.32+e*.045)}gasp(){if(!this.ctx)return;let t=this.now;this.burst(.4,.6,"bandpass",600,1900,1.1,null,t,null,.03),this.burst(.7,.4,"bandpass",1300,520,1.2,null,t+.45,null,.12)}pickupItem(){this.ctx&&(this.burst(.03,.2,"bandpass",1800,1800,2),this.tone("sine",620,760,.1,.12))}throwSound(){this.ctx&&this.burst(.22,.14,"bandpass",500,1600,1.2)}scanPing(t){if(!this.ctx)return;let e=1150+t*900,i=this.now;this.tone("sine",e,e,.09,.1,null,i),this.tone("sine",e,e,.12,.03,null,i+.13)}downed(){if(!this.ctx)return;let t=this.now;this.tone("sine",85,30,.7,.65,null,t),this.burst(.3,.4,"lowpass",1400,120,.7,null,t),this.tone("sine",3100,3050,2.2,.035,null,t+.1,.4)}revived(){if(!this.ctx)return;let t=this.now;for(let e=0;e<4;e++)this.tone("sine",440*Math.pow(1.26,e),440*Math.pow(1.26,e),.14,.1,null,t+e*.09)}reviveTick(t){this.ctx&&this.tone("sine",300+t*500,300+t*500,.05,.05)}win(){if(!this.ctx)return;let t=this.now;[392,494,587,784].forEach((e,i)=>this.tone("sine",e,e,.9,.1,null,t+i*.16,.05))}lose(){if(!this.ctx)return;let t=this.now;this.tone("sawtooth",110,38,2.6,.2,null,t,.05),this.burst(2.4,.3,"bandpass",2600,300,.6,null,t)}door(t,e,i,n,s){if(!this.ctx)return;let o=this.at(t,e,1.4,3,s),a=this.now;if(n){let l=this.ctx.createWaveShaper();l.curve=this.curve,l.connect(o),this.tone("sawtooth",260,980,.34,.5,l,a,.02),this.burst(.3,.6,"bandpass",1900,700,3,o,a),this.tone("sine",120,45,.25,1.2,o,a+.3),this.burst(.12,.9,"lowpass",900,200,1,o,a+.3)}else this.burst(.42,.45,"lowpass",i?2400:700,i?500:1800,1.2,o,a),this.tone("sine",105,70,.1,.5,o,a+.4)}locker(t,e,i,n){if(!this.ctx)return;let s=this.at(t,e,1.2,2.5,n),o=this.now,a=i?.9:.3;for(let l of[311,523,887,1410])this.tone("sine",l*(.97+Math.random()*.06),l*.98,i?.5:.22,a*.3,s,o);if(this.burst(.05,a,"bandpass",2400,900,1.5,s,o),i){this.burst(.5,.8,"bandpass",1500,500,2.5,s,o+.12);for(let l of[280,470])this.tone("sine",l,l*.9,.6,.35,s,o+.5)}}beep(t,e,i){if(!this.ctx)return;let n=this.at(t,e,.2,7,i,90),s=this.now;this.tone("square",2100,2100,.08,.5,n,s),this.tone("square",2650,2650,.08,.5,n,s+.11)}klaxon(t,e){if(!this.ctx)return;let i=this.at(t,e,3.5,9,!1,120),n=this.now,s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=1300,s.connect(i),this.tone("sawtooth",392,392,.55,.5,s,n,.03),this.tone("sawtooth",311,311,.6,.5,s,n+.6,.03)}liftArrive(t,e){if(!this.ctx)return;let i=this.at(t,e,2,9,!1,120),n=this.now;this.burst(3,1.3,"lowpass",150,70,.7,i,n,this.brown,.4),this.tone("sine",1046,1046,1.6,.4,i,n+2.6),this.tone("sine",1568,1568,1.4,.2,i,n+2.6)}creak(t,e){if(!this.ctx)return;let i=this.at(t,e,3,8,!0),n=this.now;if(Math.random()<.6){let s=60+Math.random()*50;this.tone("sawtooth",s,s*(.7+Math.random()*.7),1.6+Math.random()*1.5,1.1,i,n,.5)}else for(let s=0;s<3;s++)this.burst(.08,.9,"bandpass",700+Math.random()*900,400,4,i,n+s*(.12+Math.random()*.3))}knock(t,e){if(!this.ctx)return;let i=this.at(t,e,1.5,7,!0),n=3+Math.floor(Math.random()*3),s=.36+Math.random()*.4,o=this.now;for(let a=0;a<n;a++){let l=170+Math.random()*40;this.tone("sine",l,l*.62,.16,.7,i,o,.002),this.tone("sine",l*2.76,l*2.7,.3,.18,i,o,.002),this.burst(.02,.5,"bandpass",900,900,5,i,o,null,.001),o+=s*(a===n-2?1.9:1)}}iceCrack(t,e){if(!this.ctx)return;let i=this.at(t,e,2.5,8,!1,120),n=this.now;this.burst(.014,1,"highpass",3e3,3e3,.7,i,n,null,.001),this.burst(1.7,.4,"bandpass",2600,420,.9,i,n+.012,null,.004),this.tone("sine",74,36,1.2,.6,i,n,.004),Math.random()<.5&&this.burst(.01,.8,"highpass",3600,3600,.7,i,n+.21+Math.random()*.2,null,.001)}howl(t,e){if(!this.ctx)return;let i=this.at(t,e,3,25,!1,200),n=this.now,s=300+Math.random()*160,o=4+Math.random()*2.5;this.burst(o,7,"bandpass",s,s*1.5,11,i,n,null,o*.45),this.burst(o,4.5,"bandpass",s*1.49,s*1.1,14,i,n+.3,null,o*.4)}drip(t,e){if(!this.ctx)return;let i=this.at(t,e,.3,4),n=1+Math.floor(Math.random()*3),s=this.now;for(let o=0;o<n;o++){let a=1500+Math.random()*900;for(let l=0;l<3;l++)this.tone("sine",a,a*.55,.07,.2/(1+l*2.2),i,s+l*.17,.001);s+=.5+Math.random()*.9}}garble(t=1.5){if(!this.ctx)return;let e=this.ctx,i=this.now,n=e.createBiquadFilter(),s=e.createGain();n.type="bandpass",n.frequency.value=1500,n.Q.value=.6,s.gain.value=.5,n.connect(s).connect(this.master),this.burst(.03,.25,"highpass",2500,2500,.7,null,i,null,.001),this.burst(t+.15,.05,"bandpass",2600,2200,.7,null,i);let o=i+.08,a=105+Math.random()*50;for(;o<i+t;){let l=.07+Math.random()*.16,c=a*(.9+Math.random()*.25);for(let h of[320+Math.random()*520,1100+Math.random()*1300]){let u=e.createOscillator(),f=e.createBiquadFilter(),d=e.createGain();u.type="sawtooth",u.frequency.setValueAtTime(c,o),u.frequency.linearRampToValueAtTime(c*(.85+Math.random()*.25),o+l),f.type="bandpass",f.frequency.value=h,f.Q.value=7,d.gain.setValueAtTime(1e-4,o),d.gain.exponentialRampToValueAtTime(.6,o+.02),d.gain.exponentialRampToValueAtTime(1e-4,o+l),u.connect(f).connect(d).connect(n),u.start(o),u.stop(o+l+.03)}o+=l+(Math.random()<.25?.16+Math.random()*.2:.015)}this.burst(.03,.2,"highpass",2500,2500,.7,null,i+t+.1,null,.001)}breath(t,e){if(!this.ctx)return;let i=this.at(t,e,1.4,1),n=this.now;this.burst(.9,.3,"bandpass",650,1100,1.3,i,n,null,.4),this.burst(1.2,.36,"bandpass",950,480,1.3,i,n+.95,null,.25)}ductScuttle(t,e){if(!this.ctx)return;let i=this.at(t,e,.6,2.5),n=this.now,s=.2;for(let o=0;o<7;o++){let a=130+Math.random()*40,l=.9*(1-o*.1);this.tone("sine",a,a*.55,.1,l,i,n,.002),this.burst(.03,l*.6,"bandpass",480,300,2,i,n,null,.001),n+=s,s*=.84}this.tone("sine",96,44,.4,1.1,i,n+.25,.003),this.burst(.08,.6,"lowpass",700,200,1,i,n+.25)}thump(t,e){if(!this.ctx)return;let i=this.at(t,e,1.2,2.2),n=this.now;this.tone("sine",118,52,.28,.8,i,n,.002),this.burst(.04,.65,"bandpass",1500,600,2,i,n,null,.001);for(let s of[311,523,887])this.tone("sine",s,s*.985,.55,.16,i,n,.002)}pop(t,e){if(!this.ctx)return;let i=this.at(t,e,3,3),n=this.now;this.burst(.03,.85,"highpass",4200,1800,.7,i,n,null,.001),this.tone("sine",160,60,.12,.45,i,n,.001);for(let s=0;s<6;s++){let o=3e3+Math.random()*4500;this.tone("sine",o,o*.96,.09,.12,i,n+.08+Math.random()*.5,.001)}}vanish(){if(!this.ctx)return;let t=this.now;this.tone("sine",58,30,.6,.34,null,t,.004),this.burst(.18,.18,"bandpass",2800,1200,.8,null,t,null,.002)}sting(t=1){if(!this.ctx)return;let e=this.ctx,i=this.now,n=e.createWaveShaper(),s=e.createGain();n.curve=this.curve,s.gain.value=.4*t,n.connect(s).connect(this.master);for(let o of[207.7,220,311.1,440,466.2,622.3])this.tone("sawtooth",o,o*.965,1,.17,n,i,.003);this.burst(.65,.65*t,"bandpass",3400,650,.7,null,i,null,.002),this.tone("sine",82,29,.95,.7*t,null,i,.003)}powerDown(t=1){if(!this.ctx)return;let e=this.now,i=.25+.75*t;this.burst(.03,.8*i,"bandpass",1300,1300,3,null,e,null,.001),this.tone("sine",150,26,1.4,.55*i,null,e+.02,.01),this.tone("sawtooth",100,22,1.2,.1*i,null,e+.02,.01),this.burst(1.3,.25*i,"lowpass",700,50,.7,null,e,this.brown,.02)}powerUp(t=1){if(!this.ctx)return;let e=this.now,i=.25+.75*t;this.burst(.03,.7*i,"bandpass",1500,1500,3,null,e,null,.001),this.tone("sine",34,104,.9,.3*i,null,e+.05,.3),this.tone("sine",208,208,.5,.06*i,null,e+.5,.2)}breaker(t,e,i){if(!this.ctx)return;let n=this.at(t,e,1.4,5,i,120),s=this.now;this.tone("sine",96,38,.32,1.3,n,s,.002),this.burst(.05,1,"bandpass",850,400,1.5,n,s,null,.001),this.burst(.03,.6,"highpass",3e3,3e3,.7,n,s+.02,null,.001),this.tone("sawtooth",48,100,.9,.22,n,s+.1,.4)}spark(t,e,i){if(!this.ctx)return;let n=this.at(t,e,2.5,3,i),s=this.now,o=3+Math.floor(Math.random()*5);for(let a=0;a<o;a++){let l=s+Math.random()*.22;this.burst(.012,.8,"highpass",4800,3e3,.7,n,l,null,.001),this.tone("square",90+Math.random()*60,60,.03,.25,n,l,.001)}}ventCrawl(t,e){if(!this.ctx)return;let i=this.at(t,e,3.6,2.6,!0,40),n=this.now;this.tone("sine",92+Math.random()*30,48,.16,.9,i,n,.003),this.burst(.09,.7,"bandpass",900,380,1.6,i,n,null,.002),Math.random()<.55&&this.burst(.35+Math.random()*.3,.32,"bandpass",2200,1100,1.2,i,n+.08,null,.08)}ventBang(t,e,i){if(!this.ctx)return;let n=this.at(t,e,3,5,i,90),s=this.now;this.tone("sine",140,60,.35,1.2,n,s,.002),this.burst(.06,1.1,"bandpass",1700,900,1.4,n,s,null,.001);for(let o=0;o<6;o++)this.burst(.05,.5-o*.06,"bandpass",3e3+Math.random()*1500,2400,5,n,s+.06+o*.05,null,.001);this.burst(.7,.25,"highpass",2600,4200,.7,n,s+.05,null,.05)}stationWork(t,e,i,n){if(!this.ctx)return;let s=this.at(e,i,1.4,t==="pump"?4:2.5,n,70),o=this.now;if(t==="pump")this.tone("square",62,48,.25,.35,s,o,.004),this.burst(.05,.8,"bandpass",1100,700,2,s,o,null,.001),this.burst(.7,.3,"highpass",3e3,5e3,.8,s,o+.12,null,.1);else if(t==="lever")this.burst(.08,.9,"bandpass",800,500,2,s,o,null,.002),this.tone("sine",120,70,.3,.6,s,o,.003);else for(let a=0;a<5;a++){let l=1200+Math.floor(Math.random()*6)*220;this.tone("square",l,l,.05,.08,s,o+a*.09,.002)}}stationDone(t,e){if(!this.ctx)return;let i=this.at(t,e,1.4,4,!1,80),n=this.now;this.tone("sine",660,660,.15,.22,i,n),this.tone("sine",990,990,.3,.22,i,n+.12),this.burst(.06,.6,"bandpass",900,600,2,i,n,null,.001)}bulkhead(t,e,i){if(!this.ctx)return;let n=this.at(t,e,2.2,10,!1,200),s=this.now,o=.4+.6*i;for(let a=0;a<3;a++)this.tone("sawtooth",440,440,.32,.12*o,n,s+a*.5,.01),this.tone("sawtooth",330,330,.18,.1*o,n,s+a*.5+.3,.01);for(let a=0;a<4;a++)this.burst(.05,.9*o,"bandpass",700,400,2,n,s+1.5+a*.12,null,.001);this.burst(2.6,.7*o,"bandpass",1800,900,.9,n,s+1.6,null,.15),this.tone("sine",60,38,2.2,.8*o,n,s+1.7,.2)}reactor(){if(!this.ctx)return;let t=this.now;this.tone("sine",26,64,3.5,.9,null,t,1.2),this.tone("sawtooth",52,128,3.2,.12,null,t+.3,1),this.burst(4,.5,"lowpass",120,420,.8,null,t,this.brown,1.6),this.burst(.05,.8,"bandpass",1200,1200,3,null,t+3.2,null,.001)}podLaunch(){if(!this.ctx)return;let t=this.now;for(let e=0;e<4;e++)this.burst(.08,1.1,"bandpass",600,300,1.5,null,t+e*.08,null,.001);this.burst(5,1,"lowpass",300,90,.7,null,t+.4,this.brown,.3),this.tone("sawtooth",70,30,4.5,.18,null,t+.4,.2),this.burst(4,.35,"bandpass",2400,800,.8,null,t+.5,null,.4)}crack(t,e,i){if(!this.ctx)return;let n=this.at(t,e,2.4,2.2,i),s=this.now,o=2+Math.floor(Math.random()*3);for(let a=0;a<o;a++)this.burst(.007,.95-a*.12,"bandpass",2600+Math.random()*1600,1800,1.4,n,s+a*(.018+Math.random()*.022),null,5e-4);this.tone("sine",170,80,.06,.5,n,s,.001)}fault(t,e,i){if(!this.ctx)return;let n=this.at(t,e,2.2,3.5,i),s=this.now;this.tone("square",58,58,.4,.35,n,s,.005);for(let o=0;o<5;o++)this.burst(.015,.6,"highpass",3e3,3e3,.7,n,s+Math.random()*.4,null,.001)}quake(t=6.5){if(!this.ctx)return;let e=this.now;this.burst(t,.7,"lowpass",85,60,.7,null,e,this.brown,t*.22),this.burst(t*.8,.32,"lowpass",240,110,.6,null,e+.4,this.brown,t*.25);for(let i=0;i<4;i++){let n=e+.5+Math.random()*(t-2);this.tone("sine",44+Math.random()*14,26,1.3,.38,null,n,.03)}for(let i=0;i<9;i++){let n=e+.8+Math.random()*(t-1.5),s=600+Math.random()*1600;this.burst(.05,.14,"bandpass",s,s*.6,3,null,n,null,.002)}}wakeCall(t,e){if(!this.ctx)return;let i=this.ctx,n=this.now,s=this.at(t,e,2.2,14,!1,400),o=i.createBiquadFilter(),a=i.createWaveShaper(),l=i.createGain();o.type="lowpass",o.frequency.value=780,a.curve=this.curve,l.gain.value=.3,a.connect(o).connect(l).connect(s);for(let c of[1,1.012,1.5]){let h=i.createOscillator(),u=i.createGain();h.type="sawtooth",h.frequency.setValueAtTime(170*c,n),h.frequency.exponentialRampToValueAtTime(430*c,n+.7),h.frequency.exponentialRampToValueAtTime(250*c,n+1.9),h.frequency.exponentialRampToValueAtTime(120*c,n+3);let f=i.createOscillator(),d=i.createGain();f.frequency.value=23,d.gain.value=18,f.connect(d).connect(h.frequency),u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(.5,n+.25),u.gain.setValueAtTime(.5,n+1.9),u.gain.exponentialRampToValueAtTime(1e-4,n+3.1),h.connect(u).connect(a),h.start(n),f.start(n),h.stop(n+3.2),f.stop(n+3.2)}this.burst(2.8,.18,"bandpass",1200,500,1.1,s,n+.1,null,.3)}tick(t,e,i,n){if(!this.ctx)return;let s=this.at(t,e,.1,2.6,n),o=this.now,a=2100+Math.random()*1300,l=.28+Math.min(.5,i*.09);this.burst(.02,l,"bandpass",a,a,9,s,o,null,.001),this.tone("sine",a,a*.94,.045,l*.35,s,o,.001),this.tone("sine",120,60,.06,l*.5,s,o,.002)}voice(t,e,i,n){if(!this.ctx)return;let s=this.now;if(t==="alert"){let o=this.at(e,i,2.2,4,n),a=s,l=.085;for(let c=0;c<9;c++){let h=1500+c*150;this.burst(.02,1.3,"bandpass",h,h,8,o,a,null,.001),this.tone("sine",h,h*.9,.035,.4,o,a,.001),a+=l,l*=.86}}else if(t==="screech"){let o=this.at(e,i,2.2,7,n,120),a=this.ctx.createWaveShaper();a.curve=this.curve;let l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=1700,l.Q.value=1.1,a.connect(l).connect(o);for(let c of[1,1.013,1.51]){let h=this.ctx,u=h.createOscillator(),f=h.createGain();u.type="sawtooth",u.frequency.setValueAtTime(480*c,s),u.frequency.exponentialRampToValueAtTime(1500*c,s+.22),u.frequency.exponentialRampToValueAtTime(900*c,s+.7),u.frequency.exponentialRampToValueAtTime(380*c,s+1.15);let d=h.createOscillator(),g=h.createGain();d.frequency.value=31,g.gain.value=60,d.connect(g).connect(u.frequency),f.gain.setValueAtTime(1e-4,s),f.gain.exponentialRampToValueAtTime(.5,s+.04),f.gain.setValueAtTime(.5,s+.75),f.gain.exponentialRampToValueAtTime(1e-4,s+1.2),u.connect(f).connect(a),u.start(s),d.start(s),u.stop(s+1.25),d.stop(s+1.25)}this.burst(1.1,.7,"bandpass",3200,1500,1.2,o,s),this.tone("sawtooth",104,62,1.15,.55,a,s,.02),this.tone("sawtooth",157,90,1,.3,a,s,.02)}else if(t==="hiss"){let o=this.at(e,i,2.2,4,n);this.burst(.9,.6,"highpass",2600,4200,.7,o,s,null,.08)}else if(t==="rattle"){let o=this.at(e,i,2.2,3,n);for(let a=0;a<6;a++){let l=760+Math.random()*240;this.burst(.025,.3,"bandpass",l,l,8,o,s+a*.11,null,.002)}}else if(t==="breath"){let o=this.at(e,i,2,2.4,n);this.burst(.6,.95,"bandpass",240,430,2.2,o,s,this.brown,.28),this.burst(.5,.34,"bandpass",900,600,1.4,o,s+.05,null,.25);for(let a=0;a<6;a++){let l=400+Math.random()*180;this.burst(.03,.62,"bandpass",l,l*.7,5,o,s+.72+a*.065,null,.003)}}else if(t==="snarl"){let o=this.at(e,i,1.8,3.6,n),a=this.ctx.createWaveShaper(),l=this.ctx.createGain();a.curve=this.curve,l.gain.value=.36,a.connect(l).connect(o),this.tone("sawtooth",90,56,.6,.6,a,s,.03),this.tone("sawtooth",134,82,.5,.35,a,s,.03),this.burst(.5,.2,"bandpass",950,480,1.5,o,s,null,.04)}else if(t==="lunge"){let o=this.at(e,i,1.5,4,n),a=this.ctx.createWaveShaper();a.curve=this.curve,a.connect(o),this.tone("sawtooth",900,140,.4,.8,a,s,.01),this.burst(.35,.9,"bandpass",2400,500,1.5,o,s)}}update(t,e){if(!this.ctx)return;this.t+=t;let i=this.now;this.staticLevel+=(e.static-this.staticLevel)*Math.min(1,t*5);let n=this.staticLevel,s=Math.random()<.3?.6+Math.random()*.8:1;this.staticGain.gain.setTargetAtTime(n*n*.11*s,i,.03),this.genGain.gain.setTargetAtTime(e.gen*.26,i,.3);let o=ce(e.tension||0);if(this.tenseGain.gain.setTargetAtTime(.003+.03*o+.08*o*o,i,.7),this.tenseFl.frequency.setTargetAtTime(220+1100*o*o,i,.7),e.danger>.35&&(this.beatT-=t,this.beatT<=0)){this.beatT=60/(72+70*e.danger);let a=.14+.3*e.danger;this.tone("sine",62,38,.13,a,null,i,.01),this.tone("sine",52,34,.12,a*.7,null,i+.16,.01)}if(this.muff.frequency.setTargetAtTime(e.holding?620:2e4,i,e.holding?.1:.05),e.hiding&&!e.holding?(this.hideT-=t,this.hideT<=0&&(this.hideT=2.7,this.burst(.8,.075,"bandpass",600,950,1.3,null,i,null,.3),this.burst(1,.085,"bandpass",850,500,1.3,null,i+1.05,null,.25))):this.hideT=.9,e.winded>.3&&(this.breathT-=t,this.breathT<=0)){this.breathT=.75-.25*e.winded;let a=.05+.1*e.winded;this.burst(.3,a,"bandpass",900,1500,1.4,null,i,null,.1),this.burst(.3,a*.8,"bandpass",1300,700,1.4,null,i+.36,null,.08)}}};var Ge=Mt.player,sa=class{constructor(t){this.L=t,this.x=0,this.z=0,this.yaw=0,this.pitch=0,this.vx=0,this.vz=0,this.crouch=!1,this.eye=Ge.eye,this.stamina=Ge.stamina,this.spent=!1,this.regenWait=0,this.light=!1,this.scan=!1,this.hidden=-1,this.hideYaw=0,this.rv=-1,this.ws=-1,this.status=dt.ALIVE,this.mid=-1,this.bob=0,this.stride=0,this.moving=!1,this.running=!1,this.speed=0,this.target=null,this.holdE=0,this.shake=0,this.tilt=0,this.dropT=0,this.hold=!1,this.breath=1,this.gaspT=0,this._o={x:0,z:0}}spawn(t,e=0){let i=this.L.sections[e]?this.L.sections[e].spawns:this.L.spawns,n=i[t%i.length];this.x=(n.cx+.5)*2,this.z=(n.cz+.5)*2,this.yaw=-Math.PI/2,this.pitch=0,this.vx=this.vz=0,this.ws=-1,this.crouch=!1,this.eye=Ge.eye,this.stamina=Ge.stamina,this.spent=!1,this.light=!1,this.scan=!1,this.hidden=-1,this.rv=-1,this.status=dt.ALIVE,this.tilt=0,this.dropT=0,this.hold=!1,this.breath=1,this.gaspT=0}flags(){return(this.crouch?Ne.CROUCH:0)|(this.light?Ne.LIGHT:0)|(this.running?Ne.RUN:0)|(this.scan?Ne.SCAN:0)|(this.moving?Ne.MOVE:0)|(this.hold?Ne.HOLD:0)}inDuct(){return this.L.cells[this.L.cellOf(this.x,this.z)]===pt.DUCT}lowRoof(){let t=this.L,e=Ge.r;for(let[i,n]of[[0,0],[e,0],[-e,0],[0,e],[0,-e]])if(t.cells[t.cellOf(this.x+i,this.z+n)]===pt.DUCT)return!0;return!1}update(t,e,i,n){let s=this.L,o=null;if(this.shake=Math.max(0,this.shake-t*2.5),this.status===dt.DOWN||this.status===dt.DEAD?(this.dropT=Math.min(1,this.dropT+t*2.2),this.light=!1,this.scan=!1,this.hidden=-1,this.rv=-1,this.moving=this.running=!1,this.vx=this.vz=0):this.dropT=Math.max(0,this.dropT-t*1.6),this.yaw=yn(this.yaw-e.dx*n),this.pitch=le(this.pitch-e.dy*n,-1.45,1.45),this.hidden>=0){let S=yn(this.yaw-this.hideYaw);return this.yaw=this.hideYaw+le(S,-1,1),this.pitch=le(this.pitch,-.5,.5),this.moving=this.running=!1,this.vx=this.vz=0,this.speed=0,this.stamina=Math.min(Ge.stamina,this.stamina+Ge.regen*t),null}if(this.status!==dt.ALIVE)return this.eye=Ki(this.eye,.35,t*3),null;e.crouchHold===!0||e.crouchHold===!1?this.crouch=e.crouchHold:e.crouchToggle&&(this.crouch=!this.crouch),this.lowRoof()&&(this.crouch=!0),this.eye=Ki(this.eye,this.crouch?Ge.eyeCrouch:Ge.eye,t*3.6);let l=e.right,c=e.fwd,h=Math.hypot(l,c);h>1&&(l/=h,c/=h);let u=e.run&&!this.crouch&&c>.1&&!this.spent&&this.stamina>0,f=this.crouch?Ge.crouch:u?Ge.run:Ge.walk,d=Math.sin(this.yaw),g=Math.cos(this.yaw),x=(-d*c+g*l)*f,m=(-g*c-d*l)*f,p=1-Math.exp(-(h>0?11:14)*t);this.vx+=(x-this.vx)*p,this.vz+=(m-this.vz)*p,this.speed=Math.hypot(this.vx,this.vz),this.moving=this.speed>.3,this.running=u&&this.speed>Ge.walk+.4,this.running?(this.stamina-=Ge.drain*t,this.regenWait=Ge.regenDelay,this.stamina<=0&&(this.stamina=0,this.spent=!0)):(this.regenWait-=t,this.regenWait<=0&&(this.stamina=Math.min(Ge.stamina,this.stamina+Ge.regen*(this.moving?.7:1.25)*t)),this.spent&&this.stamina>28&&(this.spent=!1));let y=this.crouch,b=i?i.doorOpen:null,v=S=>{let R=s.cells[S];if(R===pt.FLOOR||R===pt.LIFT){let T=s.doorAt[S];return T>=0&&b&&b[T]<.7}return!(R===pt.DUCT&&y)},E=Math.max(1,Math.ceil(this.speed*t/.2));for(let S=0;S<E;S++)tf(s,this.x+this.vx*t/E,this.z+this.vz*t/E,Ge.r,v,this._o),this.x=this._o.x,this.z=this._o.z;if(this.x=le(this.x,2,238),this.z=le(this.z,2,66),this.moving){let S=this.running?2:this.crouch?1.2:1.5;this.stride+=this.speed*t,this.bob+=this.speed*t/S*Math.PI,this.stride>=S&&(this.stride=0,o={run:this.running,crouch:this.crouch})}else this.bob*=Math.max(0,1-t*6);return o}enterLocker(t){let e=this.L.lockers[t];this.hidden=t,this.hideYaw=Math.atan2(-e.outX,-e.outZ),this.yaw=this.hideYaw,this.pitch=0,this.vx=this.vz=0,this.light=!1,this.scan=!1,this.crouch=!1}leaveLocker(){let t=this.L.lockers[this.hidden];t&&(this.x=t.x,this.z=t.z),this.hidden=-1}eyePos(t,e){if(this.hidden>=0){let n=this.L.lockers[this.hidden];return t.x=n.fx+n.outX*.2,t.z=n.fz+n.outZ*.2,t.y=1.55,t}let i=this.crouch?.02:this.running?.06:.035;return t.x=this.x,t.z=this.z,t.y=this.eye+Math.sin(this.bob*2)*i*ce(this.speed/2)-this.dropT*0,this.shake>0&&(t.x+=(Math.random()-.5)*this.shake*.12,t.y+=(Math.random()-.5)*this.shake*.12),t}findTarget(t,e){if(this.target=null,!t||t.phase!==se.PLAY||this.status!==dt.ALIVE)return null;let i=this.L;if(this.hidden>=0)return this.target={kind:"unhide",text:"Step out"};let n=-Math.sin(this.yaw),s=-Math.cos(this.yaw),o=null,a=.55,l=(d,g,x,m,p)=>{let y=d-this.x,b=g-this.z,v=Math.hypot(y,b);if(v>x)return;let E=v<.6?1:(y*n+b*s)/v;if(E<m)return;let S=E+(1-v/x)*.35;S>a&&(a=S,o=p())};t.layout&&(t.layout.tags.forEach((d,g)=>{t.tagBits&1<<g||l(d.x,d.z,Mt.reach,.5,()=>({kind:"tag",i:g,text:"Take crew tag"}))}),t.layout.items.forEach((d,g)=>{t.itemBits&1<<g||l(d.x,d.z,Mt.reach,.5,()=>({kind:"item",i:g,text:t.me&&t.me.decoys>=Mt.MAX_SOUNDERS?"Sounder (you are carrying three)":"Take sounder",dead:t.me&&t.me.decoys>=Mt.MAX_SOUNDERS}))}));for(let d of e)d.status===dt.DOWN&&l(d.x,d.z,Mt.down.reach-.2,.2,()=>({kind:"revive",slot:d.slot,text:"Hold to pick up "+d.name,hold:!0}));let c=t.layout?t.layout.sealed:null;for(let d of i.doors)if(!d.gate){if(d.bulk>=0){let g=i.sections[d.bulk+1].name.toUpperCase();t.sec===d.bulk&&t.secDone||l(d.x,d.z,Mt.reach+1.4,.6,()=>({kind:"none",dead:!0,text:t.sec>d.bulk?"Bulkhead: sealed behind you":t.sec===d.bulk?`Bulkhead to the ${g}: locked until the job here is done`:"Bulkhead: locked"}));continue}l(d.x,d.z,Mt.reach+.5+(d.len>2?.9:0),.6,()=>c&&c.includes(d.id)?{kind:"none",text:"Sealed shut. Find another way round",dead:!0}:t.doorJam[d.id]?{kind:"none",text:"Door forced. It will not move",dead:!0}:{kind:"door",i:d.id,text:t.doorWant[d.id]?"Shut door":"Open door"})}for(let d of i.lockers){let g=e.some(x=>x.hidden===d.id);l(d.fx,d.fz,1.9,.6,()=>g?{kind:"none",text:"Someone is in there",dead:!0}:{kind:"hide",i:d.id,text:"Hide in locker"})}for(let d of i.breakers)l(d.x,d.z,Mt.reach,.5,()=>{let g=d.zone,x=t.zoneOff|0,m=!!(x&64<<g),p=t.zonesNow?t.zonesNow():null,y=p?p[g]:2;return x&32?{kind:"breaker",i:d.id,text:"Throw the breaker. It ends the blackout, and it is loud"}:x&1<<g?{kind:"breaker",i:d.id,text:"Reset the breaker. It is loud"}:y!==2&&!m?{kind:"breaker",i:d.id,text:"Throw the breaker: power here for a while. It is loud"}:{kind:"none",text:m?"Breaker: holding, for now":"Breaker: this deck has power",dead:!0}});let h=t.layout?t.layout.stations:null,u=i.stations.every(d=>d.kind!=="pump"||t.stProg&&t.stProg[d.id]>=1);for(let d of i.stations)l(d.x,d.z,Mt.reach+.3,.45,()=>{let g=t.stProg?t.stProg[d.id]:0,x=!h||h.includes(d.id),m=d.sec===t.sec&&!t.secDone,p={pump:"Coolant pump",lever:"Reactor lever",terminal:"Terminal",uplink:"Uplink console"}[d.kind];return x?g>=1?{kind:"none",dead:!0,text:{pump:"Coolant pump: running",lever:"Reactor: running",terminal:"Terminal: codes downloaded",uplink:"Uplink: codes accepted"}[d.kind]}:m?d.kind==="lever"&&!u?{kind:"none",dead:!0,text:"Reactor lever: the coolant pumps are not running yet"}:{kind:"station",i:d.id,hold:!0,prog:g,text:{pump:"Hold to bring the coolant pump back online. It is loud",lever:"Hold to throw the reactor lever",terminal:"Hold to download the launch codes. It chirps",uplink:"Hold to upload the launch codes"}[d.kind]}:{kind:"none",dead:!0,text:p}:{kind:"none",dead:!0,text:"Terminal: nothing on this one"}});let f=i.lift.console;return l(f.x,f.z,Mt.reach+.6,.5,()=>{let d=t.lift.state;return d===ae.LOCKED?{kind:"none",text:"Escape pod: it needs the launch codes uploaded on the bridge",dead:!0}:d===ae.READY?{kind:"lift",text:"Prime the escape pod. The alarm will bring it"}:{kind:"none",text:d===ae.CALLED?"Escape pod: launch sequence running":"Escape pod: hatch open. Get in",dead:!0}}),this.target=o}};var Vc=[["fwd","Move forward",["KeyW","ArrowUp"]],["back","Move back",["KeyS","ArrowDown"]],["left","Move left",["KeyA","ArrowLeft"]],["right","Move right",["KeyD","ArrowRight"]],["run","Run (loud)",["ShiftLeft","ShiftRight"]],["crouch","Crouch (quiet)",["KeyC","ControlLeft"]],["use","Use \xB7 hide \xB7 pick up (hold to revive)",["KeyE",""]],["lamp","Lamp",["KeyF",""]],["scan","Tag scanner (hold)",["KeyQ","Mouse2"]],["throw","Throw a sounder",["KeyG","Mouse0"]],["map","Schematic (hold)",["Tab","KeyM"]]],ff=()=>Object.fromEntries(Vc.map(([r,,t])=>[r,t.slice()])),Hx=new Set(["Escape","Backquote"]),df={ShiftLeft:"L Shift",ShiftRight:"R Shift",ControlLeft:"L Ctrl",ControlRight:"R Ctrl",AltLeft:"L Alt",AltRight:"R Alt",Space:"Space",Tab:"Tab",Enter:"Enter",CapsLock:"Caps",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Mouse0:"Left click",Mouse1:"Middle click",Mouse2:"Right click",Mouse3:"Mouse 4",Mouse4:"Mouse 5",Backspace:"Backspace"};function Gc(r){return r?df[r]?df[r]:r.startsWith("Key")?r.slice(3):r.startsWith("Digit")?r.slice(5):r.startsWith("Numpad")?"Num "+r.slice(6):r.replace(/([a-z])([A-Z])/g,"$1 $2"):"\u2014"}var ra=class{constructor(t){this.settings=t;let e=ff();t.binds=Object.assign(e,t.binds||{});for(let i in t.binds)e[i]||delete t.binds[i];this.down=new Set,this.touch=new Set,this.hits=new Set,this.listen=null,this.onBound=null,this.move={x:0,y:0},this.look={x:0,y:0}}get binds(){return this.settings.binds}actionsFor(t){let e=[];for(let i in this.binds)this.binds[i].includes(t)&&e.push(i);return e}isBound(t){return this.actionsFor(t).length>0}codeDown(t){if(this.listen)return this.bindNow(t);if(this.down.has(t))return this.isBound(t);this.down.add(t);let e=this.actionsFor(t);for(let i of e)this.hits.add(i);return e.length>0}codeUp(t){this.down.delete(t)}bindNow(t){let[e,i]=this.listen;if(this.listen=null,t==="Escape")return this.onBound&&this.onBound(),!0;if(t==="Backspace"||t==="Delete")this.binds[e][i]="";else if(!Hx.has(t)){for(let n in this.binds)this.binds[n]=this.binds[n].map(s=>s===t?"":s);this.binds[e][i]=t}return this.onBound&&this.onBound(),!0}held(t){return this.touch.has(t)||this.binds[t].some(e=>e&&this.down.has(e))}hit(t){return this.hits.has(t)}endFrame(){this.hits.clear(),this.look.x=this.look.y=0}clear(){this.down.clear(),this.touch.clear(),this.hits.clear(),this.move.x=this.move.y=0}reset(){this.settings.binds=ff()}label(t){let e=this.binds[t];return Gc(e[0]||e[1])}press(t){this.hits.add(t)}hold(t,e){e?(this.touch.add(t),this.hits.add(t)):this.touch.delete(t)}};var Dt=r=>document.getElementById(r),Ji=r=>String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),oa=class{constructor(t,e){this.L=t,this.on=e,this.screen="title",this.cache={},this.roomName="",this.roomT=0,this.bannerT=0,this.logT=0,this.noticeT=0;let i=(s,o)=>Dt(s).addEventListener("click",a=>{a.preventDefault(),o()});i("m-solo",()=>e.solo()),i("m-host",()=>e.host()),i("m-join",()=>e.join()),i("l-start",()=>e.start()),i("l-ready",()=>e.ready()),i("l-leave",()=>e.leave()),i("p-resume",()=>e.resume()),i("p-leave",()=>e.leave()),i("e-again",()=>e.again()),i("e-leave",()=>e.leave()),document.querySelector("[data-screen=click]").addEventListener("click",()=>e.resume());let n=(s,o)=>i(s,()=>{let a=Dt(s),l=()=>{a.textContent="Copied",setTimeout(()=>a.textContent="Copy link",1500)};navigator.clipboard?navigator.clipboard.writeText(Dt(o).value).then(l,()=>Dt(o).select()):Dt(o).select()});n("m-copy","m-link"),n("l-copy","l-link"),i("m-priv",()=>e.privateRoom()),i("m-controls",()=>e.controls()),i("p-controls",()=>e.controls()),i("c-back",()=>e.controlsBack()),i("c-reset",()=>e.resetBinds()),i("c-edit",()=>e.editTouch()),Dt("c-touch").addEventListener("click",s=>{let o=s.target.dataset&&s.target.dataset.v;o&&e.touchMode(o)}),Dt("c-invert").addEventListener("change",s=>e.option("invertY",s.target.checked)),Dt("c-holdcrouch").addEventListener("change",s=>e.option("holdCrouch",s.target.checked)),Dt("c-binds").addEventListener("click",s=>{let o=s.target.closest("[data-bind]");if(o){s.preventDefault();let[a,l]=o.dataset.bind.split(":");e.bind(a,+l)}}),this.useKey="E",Dt("m-name").addEventListener("input",()=>e.name(Dt("m-name").value));for(let s of["s","p"])Dt(s+"-sens").addEventListener("input",o=>e.setting("sens",+o.target.value)),Dt(s+"-vol").addEventListener("input",o=>e.setting("vol",+o.target.value)),Dt(s+"-bri").addEventListener("input",o=>e.setting("bri",+o.target.value)),Dt(s+"-q").addEventListener("change",o=>e.setting("q",o.target.value)),Dt(s+"-scare").addEventListener("change",o=>e.setting("scares",o.target.checked));this.pipN=-1,this.mapCtx=Dt("h-map").getContext("2d"),this.mapBase=null}set(t,e,i,n){let s=t+e;this.cache[s]!==i&&(this.cache[s]=i,n(Dt(t),i))}text(t,e){this.set(t,"t",e,(i,n)=>i.textContent=n)}cls(t,e,i){this.set(t,"c"+e,!!i,(n,s)=>n.classList.toggle(e,s))}show(t,e){this.set(t,"h",!!e,(i,n)=>i.hidden=!n)}width(t,e){this.set(t,"w",Math.round(e*100),(i,n)=>i.style.width=n+"%")}setScreen(t){this.screen=t;for(let e of document.querySelectorAll("#overlay .card"))e.hidden=e.dataset.screen!==t;Dt("overlay").hidden=!t,Dt("overlay").classList.toggle("clear",t==="click")}setSettings(t){for(let e of["s","p"])Dt(e+"-sens").value=t.sens,Dt(e+"-vol").value=t.vol,Dt(e+"-bri").value=t.bri,Dt(e+"-q").value=t.q,Dt(e+"-scare").checked=t.scares!==!1;document.activeElement!==Dt("m-name")&&(Dt("m-name").value=t.name||"")}setLink(t,e){Dt("m-link").value=t,Dt("l-link").value=t,Dt("m-priv").textContent=e?"Back to the public room":"Make a private room"}setBuild(t){Dt("m-build").textContent=t}setRecord(t){for(let e of["m-record","e-record"])Dt(e).textContent=t,Dt(e).hidden=!t}setNet(t,e,i,n){this.text("m-status",t),this.cls("m-status","on",e===2),this.cls("m-status","part",e===1),this.set("m-host","d",!i,(s,o)=>s.disabled=o),this.set("m-join","d",!n,(s,o)=>s.disabled=o),this.text("m-join",n||"Join a crew"),this.text("m-host","Open a crew")}setLobby(t,e,i,n){let s=t.map(a=>`<li><i style="background:${bn[a.slot%bn.length]}"></i><span>${Ji(a.name)}${a.id===e?" (you)":""}</span><em class="${a.host||a.ready?"ok":""}">${a.host?"Leader":a.ready?"Ready":"Not ready"}</em></li>`).join("");this.set("l-roster","html",s,(a,l)=>a.innerHTML=l),this.show("l-start",i),this.show("l-ready",!i),this.text("l-ready",n?"Not ready":"Ready");let o=t.filter(a=>!a.host&&!a.ready).length;this.text("l-text",i?t.length===1?"Nobody else has joined yet. You can start alone, or wait.":o?`Waiting on ${o} of the crew. You can start anyway.`:"Everyone is ready.":"Waiting for the crew leader to start.")}setEnd(t){this.text("e-eyebrow",t.eyebrow),this.text("e-title",t.title),this.text("e-text",t.text),Dt("e-stats").innerHTML=t.stats.map(([n,s])=>`<div><b>${Ji(n)}</b><span>${Ji(s)}</span></div>`).join(""),this.text("e-again",t.again),this.show("e-again",!!t.again);let e=t.extra,i=Dt("e-extra");i.hidden=!e,e&&(i.querySelector("i").textContent=e.head,i.querySelector("b").textContent=e.name,i.querySelector("span").textContent=e.line,i.querySelector("em").textContent=e.cond)}setPause(t){this.text("p-text",t?"The ship waits while this is open.":"The match carries on without you while this is open.")}setTouch(t,e){this.touch=t,this.useKey=t?"USE":e.label("use"),this.runKey=t?"BREATH":e.label("run"),this.cache={},Dt("m-needs").textContent=t?"Touch controls are on: left thumb moves, right thumb looks. Hold the phone sideways. No sound on an iPhone? Check the silent switch.":"Keyboard and mouse, or a phone or tablet held sideways.";let i=Dt("h-bl"),n=Dt(t?"h-tl":"hud");i.parentElement!==n&&n.appendChild(i),document.querySelector("[data-screen=controls]").classList.toggle("touchfirst",t),this.keyList(e)}keyList(t){let e=n=>t.label(n),i=this.touch?[["Left thumb","Move"],["Right thumb","Look"],["USE","Doors \xB7 lockers \xB7 pick up"],["RUN","Run while the stick is held (loud)"],["CROUCH","Crouch (quiet)"],["LAMP","Lamp"],["SCAN","Tag scanner, on and off (it pings)"],["THROW","Throw a sounder"],["MAP","Schematic, while held"]]:[[[e("fwd"),e("left"),e("back"),e("right")].join(" "),"Move"],[e("run"),"Run (loud)"],[e("crouch"),"Crouch (quiet)"],[e("use"),"Use \xB7 hide \xB7 pick up"],[e("lamp"),"Lamp"],[e("scan"),"Tag scanner (it pings)"],[e("throw"),"Throw a sounder"],[e("map"),"Schematic"]];Dt("m-keys").innerHTML=i.map(([n,s])=>`<div><dt>${Ji(n)}</dt><dd>${Ji(s)}</dd></div>`).join("")}setControls(t,e,i,n){Dt("c-binds").innerHTML=e.map(([s,o])=>`<tr><th>${Ji(o)}</th>${[0,1].map(a=>{let l=t.listen&&t.listen[0]===s&&t.listen[1]===a;return`<td><button type="button" data-bind="${s}:${a}" class="${l?"wait":""}">${l?"Press a key\u2026":Ji(Gc(t.binds[s][a]))}</button></td>`}).join("")}</tr>`).join("");for(let s of Dt("c-touch").children)s.classList.toggle("on",s.dataset.v===i.touchMode);Dt("c-touchnow").textContent=n?"On now.":"Off now.",Dt("c-invert").checked=!!i.invertY,Dt("c-holdcrouch").checked=!!i.holdCrouch,this.setTouch(n,t)}portrait(t){this.set("rotate","h",!!t,(e,i)=>e.hidden=!i)}notice(t){let e=Dt("notice");e.textContent=t,e.hidden=!1,this.noticeT=5}banner(t,e=4,i=""){let n=Dt("h-banner");n.textContent=t,n.className="on "+i,this.bannerT=e}log(t,e,i){let n=Dt("h-log");n.querySelector("b").textContent=`${t} \xB7 ${e}`,n.querySelector("span").textContent='"'+i+'"',n.classList.add("on"),this.logT=8}feed(t,e,i=6){let n=Dt("h-feed"),s=document.createElement("div");for(s.textContent=t,e&&(s.className=e),s.style.animationDuration=i+"s",n.appendChild(s);n.children.length>6;)n.removeChild(n.firstChild);setTimeout(()=>s.remove(),i*1e3+200)}update(t,e){if(this.noticeT>0&&(this.noticeT-=t,this.noticeT<=0&&(Dt("notice").hidden=!0)),this.show("hud",e.show),!e.show)return;if(this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&(Dt("h-banner").className="")),this.logT>0&&(this.logT-=t,this.logT<=0&&Dt("h-log").classList.remove("on")),this.text("h-cap",e.cap||""),e.pips&&e.pips.n!==this.pipN){this.pipN=e.pips.n;let o=Dt("h-tags");o.innerHTML="";for(let a=0;a<e.pips.n;a++)o.appendChild(document.createElement("i"))}let i=Dt("h-tags").children;for(let o=0;o<i.length;o++){let a=!!e.pips&&o<e.pips.done;i[o]._on!==a&&(i[o]._on=a,i[o].classList.toggle("on",a))}this.text("h-obj",e.objective);let n=Dt("h-signal").querySelectorAll("i");for(let o=0;o<5;o++){let a=o<e.bars;n[o]._on!==a&&(n[o]._on=a,n[o].classList.toggle("on",a))}if(this.cls("h-signal","low",e.bars<=2),this.cls("h-signal","none",e.bars===0),this.set("h-roster","html",e.roster.map(o=>`<div class="${["","down","dead","out"][o.status]||""}"><b style="color:${bn[o.slot%bn.length]}">\u25A0</b> ${Ji(o.name)}${o.status===dt.DOWN?" \xB7 down":o.status===dt.DEAD?" \xB7 lost":o.status===dt.OUT?" \xB7 out":""}</div>`).join(""),(o,a)=>o.innerHTML=a),e.room&&e.room!==this.roomName&&(this.roomName=e.room,this.roomT=3.5,this.text("h-room",e.room)),this.roomT>0&&(this.roomT-=t),this.cls("h-room","on",this.roomT>0),this.cls("h-prompt","on",!!e.prompt),this.cls("h-prompt","dead",!!(e.prompt&&e.prompt.dead)),e.prompt){let o=e.prompt.kind==="unhide"?" \xB7 hold "+this.runKey+" to hold your breath":"";this.set("h-prompt","html",e.prompt.text+"|"+e.prompt.dead+o,a=>a.innerHTML=(e.prompt.dead?"":"<kbd>"+Ji(this.useKey)+"</kbd>")+Ji(e.prompt.text+o))}this.cls("h-hold","on",e.hold>0),Dt("h-hold").firstElementChild.style.width=Math.round(e.hold*100)+"%",this.show("h-cross",!e.map&&!e.hidden),Dt("h-seen").querySelector("i").style.width=Math.round(Math.min(1,e.seen)*100)+"%",this.cls("h-seen","hot",e.seen>=1),Dt("h-stam").firstElementChild.style.width=Math.round(e.stamina*100)+"%",this.cls("h-stam","spent",e.spent),this.cls("h-stam","breath",e.hidden),this.text("h-lamp",e.lamp?"Lamp ON":"Lamp off"),this.cls("h-lamp","on",e.lamp),this.text("h-stance",e.hidden?e.holding?"Holding your breath":"Hidden":e.crouch?"Crouched":"Standing"),this.text("h-snd","Sounders "+e.sounders),this.show("h-scan",e.scan!==null),e.scan!==null&&(Dt("h-arrow").style.transform=`rotate(${e.scan.angle}rad)`,this.text("h-dist",e.scan.label)),this.show("h-down",!!e.down),e.down&&(Dt("h-down").querySelector("b").textContent=e.down.title,Dt("h-down").querySelector("span").textContent=e.down.text,Dt("h-down").querySelector("i").style.width=Math.round(e.down.frac*100)+"%",Dt("h-down").querySelector("em").style.visibility=e.down.frac>=0?"visible":"hidden");let s=Dt("h-marks");for(;s.children.length<e.marks.length;)s.appendChild(document.createElement("span"));for(;s.children.length>e.marks.length;)s.removeChild(s.lastChild);e.marks.forEach((o,a)=>{let l=s.children[a];l.textContent=o.text,l.style.left=o.x+"px",l.style.top=o.y+"px"}),this.show("h-mapwrap",e.map),e.map&&this.drawMap(e)}drawMap(t){let e=this.L,i=this.mapCtx,n=i.canvas,s=Math.min(n.width/120,n.height/34),o=2;if(!this.mapBase){let g=this.mapBase=document.createElement("canvas");g.width=n.width*o,g.height=n.height*o;let x=g.getContext("2d");x.scale(o,o),x.fillStyle="#05090b",x.fillRect(0,0,n.width,n.height);for(let p=0;p<4080;p++){let y=e.cells[p];if(y===pt.SOLID||y===pt.LOCKER)continue;let b=p%120,v=p/120|0;x.fillStyle=y===pt.PIT?"#02161a":y===pt.DUCT?"#3b3320":y===pt.LIFT?"#5a4a12":e.ice[p]?"#1f3a48":y===pt.TALL?"#16242a":y===pt.LOW?"#1c2e35":"#243b43",x.fillRect(b*s,v*s,s+.5,s+.5)}x.fillStyle="#7fe3d4";for(let p of e.doors)for(let y of p.cells)x.fillRect(y%120*s+s*.2,(y/120|0)*s+s*.2,s*.6,s*.6);x.fillStyle="#4f7f86";for(let p of e.lockers)x.fillRect(p.cx*s+s*.25,p.cz*s+s*.25,s*.5,s*.5);x.fillStyle="#ffc24a";for(let p of e.breakers){let y=(p.cx+.5+p.dx*.42)*s,b=(p.cz+.5+p.dz*.42)*s;x.beginPath(),x.moveTo(y,b-s*.42),x.lineTo(y+s*.42,b),x.lineTo(y,b+s*.42),x.lineTo(y-s*.42,b),x.closePath(),x.fill()}x.font='600 11px "Segoe UI", Arial, sans-serif',x.textAlign="center",x.textBaseline="middle";let m=new Set;for(let p of e.rooms){if(p.kind!=="room"||m.has(p.name)||p.x1-p.x0<2)continue;m.add(p.name);let y=p.name.startsWith("Cabin ")?p.name.slice(6):p.name.toUpperCase(),b=(p.x0+p.x1+1)/2*s,v=(p.z0+p.z1+1)/2*s;x.fillStyle="rgba(0,0,0,0.55)";let E=x.measureText(y).width+6;x.fillRect(b-E/2,v-7,E,14),x.fillStyle="#cfe0e2",x.fillText(y,b,v)}}let a=le(1e3/(n.clientWidth||n.width),1,2.6),l=t.mapPlayers.find(g=>g.me),c=n.width/a,h=n.height/a,u=a>1&&l?le(l.x/2*s-c/2,0,n.width-c):0,f=a>1&&l?le(l.z/2*s-h/2,0,n.height-h):0;if(i.setTransform(1,0,0,1,0,0),i.fillStyle="#05090b",i.fillRect(0,0,n.width,n.height),i.setTransform(a,0,0,a,-u*a,-f*a),i.drawImage(this.mapBase,0,0,n.width,n.height),t.dark){i.fillStyle="rgba(0, 0, 0, 0.5)";for(let g of e.rooms)t.dark[g.zone]<.5&&i.fillRect(g.x0*s,g.z0*s,(g.x1-g.x0+1)*s+.5,(g.z1-g.z0+1)*s+.5)}if(t.sec!==void 0)for(let g of e.sections)g.id!==t.sec&&(i.fillStyle=g.id<t.sec?"rgba(0, 0, 0, 0.62)":"rgba(5, 9, 11, 0.55)",i.fillRect(g.x0*s,0,(Math.min(119,g.x1)-g.x0+1)*s,34*s),i.fillStyle="rgba(200, 220, 222, 0.5)",i.font='700 13px "Segoe UI", Arial, sans-serif',i.textAlign="center",i.fillText(g.id<t.sec?"SEALED BEHIND YOU":"LOCKED",(g.x0+g.x1)/2*s,1*s));if(t.sec!==void 0){for(let g of e.doors)if(g.bulk>=0){let x=g.bulk===t.sec&&t.secDone;i.fillStyle=x?"#38ff8a":"#ff4630";for(let m of g.cells)i.fillRect(m%120*s-s*.1,(m/120|0)*s,s*1.2,s)}}if(t.stations)for(let g of e.stations){if(g.sec!==t.sec||!t.stations.act.includes(g.id))continue;let x=t.stations.prog[g.id]>=1;i.fillStyle=x?"#38ff8a":"#7fe3d4",i.beginPath(),i.arc((g.cx+.5)*s,(g.cz+.5)*s,s*.55,0,7),i.fill()}if(t.sealed)for(let g of t.sealed)for(let x of e.doors[g].cells){let m=x%120*s,p=(x/120|0)*s;i.fillStyle="#ff4630",i.fillRect(m+s*.08,p+s*.08,s*.84,s*.84),i.strokeStyle="#2a0703",i.lineWidth=1.5,i.beginPath(),i.moveTo(m+s*.2,p+s*.2),i.lineTo(m+s*.8,p+s*.8),i.moveTo(m+s*.8,p+s*.2),i.lineTo(m+s*.2,p+s*.8),i.stroke()}for(let g of t.mapPlayers)i.fillStyle=bn[g.slot%bn.length],i.globalAlpha=g.status===dt.ALIVE?1:.5,i.beginPath(),i.arc(g.x/2*s,g.z/2*s,g.me?5:4,0,7),i.fill(),g.me&&(i.strokeStyle="#fff",i.lineWidth=2,i.beginPath(),i.moveTo(g.x/2*s,g.z/2*s),i.lineTo(g.x/2*s-Math.sin(g.yaw)*11,g.z/2*s-Math.cos(g.yaw)*11),i.stroke());i.globalAlpha=1,i.setTransform(1,0,0,1,0,0);let d=(t.sealed&&t.sealed.length?" Red: sealed doors.":"")+(t.dark&&Array.from(t.dark).some(g=>g<.5)?" Shaded: no power.":"")+" Yellow: breakers. Circles: what needs doing here.";this.set("h-mapnote","t",(a>1?"The part of the ship around you. You are the bright dot; the creature is not shown.":"You are the bright dot. The schematic does not show the creature.")+d,(g,x)=>g.textContent=x)}};var wn=4080,aa=Mt.creature.eye,pf={run:1,walk:.7,crouch:.45,door:.8,locker:.9,tag:.9,scan:.85,decoy:1.25,thrower:1,revive:1.1,klaxon:.9,breath:.75,gasp:1.2,breaker:1.1,work:.95,pump:1.05,bulkhead:.8},hr=0,Wc=1,la=2,qc=3,Vx=[],ca=class{constructor(t){this.w=t;let e=this.L=t.L;this.walk=e.walkC.slice(),this.pather=new Jo(e,this.walk),this.occ=new Float32Array(wn),this.occ2=new Float32Array(wn),this.lockerOcc=new Float32Array(e.lockers.length),this.lockerChecked=new Uint8Array(e.lockers.length),this.dist=new Int16Array(wn),this.poiSeen=new Float32Array(e.pois.length),this.heat=new Float32Array(e.rooms.length),this.aware=new Map,this.seenAt=new Map,this.decoyCall=new Map,this.spread=new Uint8Array(wn),this.lockersAt=new Map;for(let i of e.lockers)this.lockersAt.has(i.access)||this.lockersAt.set(i.access,[]),this.lockersAt.get(i.access).push(i.id);this.genRoom=e.rooms.findIndex(i=>i.name==="Reactor Room"),this.learn={hide:.15,decoy:1,duct:.45},this.reset(e.idx(e.creatureSpawns[0].cx,e.creatureSpawns[0].cz))}reset(t){let e=this.L,i=this.w;this.tr=Object.assign({hear:1,sight:1,cone:.25,ambush:1,roam:1,chase:0,corner:.35,search:1,hide0:.15,guard:0},i.trait);for(let n=0;n<wn;n++){let s=e.doorAt[n],o=s>=0&&i.doorSeal[s];this.walk[n]=e.walkC[n]&&!o?1:0,this.spread[n]=e.walkP[n]&&!o&&e.cells[n]!==pt.LIFT&&!(s>=0&&e.doors[s].gate)?1:0}this.syncWalk(),this.x=e.cx(t),this.z=e.cz(t),this.yaw=0,this.vx=this.vz=this.speed=0,this.state=Q.IDLE,this.stateT=0,this.path=null,this.pathI=0,this.target=null,this.lostT=0,this.last={x:this.x,z:this.z,vx:0,vz:0},this.knowsLocker=-1,this.suspect=null,this.stim=null,this.pauseT=0,this.lookT=0,this.baseYaw=0,this.roamPoi=-1,this.faceTo=null,this.occ.fill(0),this.lockerOcc.fill(0),this.lockerChecked.fill(0),this.searchLeft=0,this.searchFor=null,this.goalLocker=-1,this.goalT=0,this.thinkT=0,this.replanT=0,this.attackT=0,this.attackId=null,this.attackDone=!1,this.attackHit=!1,this.lockerId=-1,this.lockerT=0,this.lockerBack=Q.ROAM,this.lampsOut=!1,this.forcing=!1,this.doorT=0,this.baitT=0,this.baitFor=null,this.ambushT=0,this.rearT=0,this.burstT=0,this.heardLocker=-1,this.ventPhase=hr,this.ventA=-1,this.ventB=-1,this.ventWhy="",this.ventRoute=null,this.ventI=0,this.ventStuck=0,this.ventCool=25,this.after=null,this.pressure=0,this.backoff=0,this.quiet=0,this.hint=null,this.klaxT=0,this.aware.clear(),this.seenAt.clear(),this.decoyCall.clear(),this.poiSeen.fill(-60),this.heat.fill(0),this.learn.hide=this.tr.hide0,this.learn.decoy=1,this.learn.duct=.45,this.stats={hunts:0,catches:0,lockerChecks:0,lockerFinds:0,searches:0,vents:0}}cell(){return this.L.cellOf(this.x,this.z)}aggr(){let t=this.w;return ce(t.progress())+(t.lift.state>=ae.READY?.15:0)}hidden(){return this.state===Q.VENT&&this.ventPhase===la}climbing(){return this.state===Q.VENT&&(this.ventPhase===Wc||this.ventPhase===qc)}syncWalk(){let t=this.L,e=this.w,i=this.L.cellOf(this.x||0,this.z||0);for(let n of t.doors){if(n.bulk<0)continue;let s=e.doorLock[n.id]&&!n.cells.includes(i);for(let o of n.cells)this.walk[o]=s?0:1,this.spread[o]=s?0:1}this.path=null}onSection(t){this.backoff=Math.max(this.backoff,10),this.hint=null,this.ventCool=0,this.L.secOf[this.cell()]!==t&&this.state!==Q.VENT&&(this.target=null,this.enter(Q.ROAM))}inGen(t,e){let i=this.L.cellOf(t,e);return i>=0&&i<wn&&this.L.roomId[i]===this.genRoom}enter(t){this.state=t,this.stateT=0,this.doorT=0,this.forcing=!1,t!==Q.AMBUSH&&t!==Q.BAIT&&(this.lampsOut=!1)}stop(t){this.speed=Ki(this.speed,0,16*t),this.vx=this.vz=0}targetSlot(){let t=this.target?this.w.players.get(this.target):null;return t?t.slot:-1}update(t){let e=this.w;if(this.stateT+=t,this.ventCool-=t,this.state===Q.IDLE){this.stop(t),e.noises.length=0,e.time>e.wake&&(this.enter(Q.ROAM),e.event("wake"));return}let i=this.state===Q.VENT&&this.ventPhase!==hr;if(!i)this.sense(t);else for(let n of e.players.values()){n.visible=!1;let s=Math.max(0,(this.aware.get(n.id)||0)-.22*t);this.aware.set(n.id,s),n.aware=s}for(let n of e.noises)this.hear(n);if(e.noises.length=0,this.direct(t),!i&&this.state!==Q.ATTACK&&this.state!==Q.LOCKER&&this.L.secOf[this.cell()]!==e.sec&&(this.state!==Q.VENT||this.ventWhy!=="section")&&this.followCrew(),!i&&this.state!==Q.HUNT&&this.state!==Q.ATTACK&&this.state!==Q.LOCKER){let n=null,s=0;for(let o of e.players.values()){if(o.status!==dt.ALIVE||!o.visible)continue;let a=this.aware.get(o.id)||0;a>s&&(s=a,n=o)}n&&s>=1?this.startHunt(n):n&&s>=.4&&this.state!==Q.SUSPECT&&(this.suspect=n.id,this.path=null,this.replanT=0,this.enter(Q.SUSPECT),e.event("alert"))}switch(this.state){case Q.ROAM:this.roam(t);break;case Q.SUSPECT:this.suspectStep(t);break;case Q.INVEST:this.investStep(t);break;case Q.HUNT:this.huntStep(t);break;case Q.SEARCH:this.searchStep(t);break;case Q.ATTACK:this.attackStep(t);break;case Q.AMBUSH:this.ambushStep(t);break;case Q.BAIT:this.baitStep(t);break;case Q.LOCKER:this.lockerStep(t);break;case Q.VENT:this.ventStep(t);break}}sense(t){let e=this.w,i=this.L,n=-Math.sin(this.yaw),s=-Math.cos(this.yaw),o=this.state===Q.HUNT||this.state===Q.SEARCH||this.state===Q.ATTACK;for(let a of e.players.values()){if(a.status!==dt.ALIVE){a.visible=!1,a.aware=0,this.aware.delete(a.id);continue}let l=this.aware.get(a.id)||0,c=!1,h=0,u=a.x-this.x,f=a.z-this.z,d=Math.hypot(u,f);if(a.hidden<0&&a.invuln<=0){let g=i.cellOf(a.x,a.z),x=i.cells[g]===pt.DUCT,m=(a.light?Mt.creature.sightLamp:Mt.creature.sight)*this.tr.sight;if(!x&&d<m){let p=d>.01?(u*n+f*s)/d:1;if((p>(o?-.25:this.tr.cone)||d<2.2)&&di(i,e.doorOpen,this.x,this.z,aa,a.x,a.z,a.crouch?.9:1.6)){c=!0;let y=ce(1-(d-2)/(m-2));h=.3+3.7*y*y,h*=a.light?2.5:.3+.7*e.litAt(g),h*=a.speed>3.7?1.6:a.speed>.4?1:.6,a.crouch&&(h*=.6),p<.75&&(h*=.6),o&&(h*=1.8)}}!c&&d<2.3&&di(i,e.doorOpen,this.x,this.z,1,a.x,a.z,.9,!0)&&(c=!0,h=3)}l=c?Math.min(1.5,l+h*t):Math.max(0,l-.22*t),this.aware.set(a.id,l),a.aware=l,a.visible=c,c&&this.seenAt.set(a.id,{x:a.x,z:a.z,vx:a.vx,vz:a.vz,t:e.time})}}hear(t){let e=this.L,i=this.w,n=Math.hypot(t.x-this.x,t.z-this.z);if(t.kind==="klaxon"){if(this.klaxT-=1,this.klaxT>0||(this.klaxT=3,this.state===Q.HUNT||this.state===Q.ATTACK||this.state===Q.LOCKER||this.state===Q.SUSPECT))return;let d=t.x+(i.rand()*2-1)*8,g=t.z+(i.rand()*2-1)*8;if(this.state===Q.SEARCH&&(this.seedOcc(d,g,.6,3),n<16))return;this.investigate(d,g,.6,"klaxon",0);return}let s=t.r*this.tr.hear*(this.state===Q.BAIT?1.6:this.state===Q.AMBUSH?1.3:1);if(this.state===Q.VENT&&this.ventPhase!==hr){if(this.ventPhase!==la||e.secOf[e.cellOf(t.x,t.z)]!==i.sec)return;s*=.8,i.rumbleT>0&&(s*=.5);let d=Math.hypot(t.x-this.x,t.z-this.z);if(d>s)return;let g=(1-d/s)*(pf[t.kind]||.7);g>=.2&&this.ventToward(t.x,t.z,g,t.kind==="decoy"?"decoy":t.kind,t.id||0);return}if(i.rumbleT>0&&(s*=.5),this.inGen(t.x,t.z)&&(s*=.6),this.inGen(this.x,this.z)&&(s*=.75),n>s||n>3&&!di(e,i.doorOpen,this.x,this.z,1.5,t.x,t.z,1.5,!0)&&(s*=.6,n>s))return;let o=1-n/s,a=t.x,l=t.z,c=t.kind;if(c==="decoy"){let d=this.decoyCall.get(t.id);d===void 0&&(d=i.rand()<this.learn.decoy?1:0,this.decoyCall.set(t.id,d)),d||(a=t.ox+t.id*7919%9-4,l=t.oz+t.id*104729%9-4,c="thrower")}let h=o*(pf[c]||.7);t.locker>=0&&(this.lockerOcc[t.locker]+=.7*o+.2,this.heardLocker=t.locker,this.lockerChecked[t.locker]=0);let u=.3+3*(1-o);a=le(a+(i.rand()*2-1)*u,2,238),l=le(l+(i.rand()*2-1)*u,2,66);let f=e.roomId[e.cellOf(a,l)];switch(f>=0&&(this.heat[f]+=h),this.state){case Q.HUNT:t.src&&t.src===this.target&&this.lostT>0&&(this.last={x:a,z:l,vx:0,vz:0});return;case Q.ATTACK:case Q.LOCKER:case Q.SUSPECT:return;case Q.VENT:h>=.3&&(this.ventPhase=hr,this.investigate(a,l,h,c,t.id));return;case Q.SEARCH:this.seedOcc(a,l,h*.8,2),h>=.45&&this.investigate(a,l,h,c,t.id);return;case Q.AMBUSH:this.faceTo=Ze(a-this.x,l-this.z),h>=.7&&this.investigate(a,l,h,c,t.id);return;case Q.BAIT:h>=.12&&this.investigate(a,l,Math.max(h,.9),c,t.id);return;case Q.INVEST:(!this.stim||h>=this.stim.w*.8)&&this.investigate(a,l,h,c,t.id);return;default:h>=.1&&this.investigate(a,l,h,c,t.id)}}onHide(t,e){let i=this.L,n=i.lockers[e];if(this.state===Q.IDLE)return;let o=Math.hypot(n.x-this.x,n.z-this.z)<16&&di(i,this.w.doorOpen,this.x,this.z,aa,n.x,n.z,1.4);this.state===Q.HUNT&&this.target===t.id&&(this.lostT<.7||o)?this.knowsLocker=e:o&&(this.aware.get(t.id)||0)>.3&&(this.lockerOcc[e]+=1,this.investigate(n.x,n.z,.8,"locker",0))}onUnhide(t,e){let i=this.L,n=i.lockers[e];this.state!==Q.IDLE&&Math.hypot(n.x-this.x,n.z-this.z)<16&&di(i,this.w.doorOpen,this.x,this.z,aa,n.x,n.z,1.4)&&(this.learn.hide=Math.min(.9,this.learn.hide+.25))}direct(t){let e=this.w,i=1e9,n=null,s=[];for(let l of e.players.values())if(l.status===dt.ALIVE){s.push(l);let c=Math.hypot(l.x-this.x,l.z-this.z);c<i&&(i=c,n=l)}let o=this.state===Q.HUNT||this.state===Q.ATTACK;this.pressure=le(this.pressure+t*(o?2:i<12?1:-.7),0,70),this.backoff>0&&(this.backoff-=t),this.pressure>46&&!o&&this.backoff<=0&&e.lift.state<ae.CALLED&&(this.backoff=20+e.rand()*14-this.aggr()*10,this.pressure=14,this.hint=null),this.quiet=this.state===Q.ROAM||this.state===Q.AMBUSH?this.quiet+t:0;let a=55-30*Math.min(1,this.aggr());if(this.hint&&e.time-this.hint.t>26&&(this.hint=null),this.quiet>a&&this.backoff<=0&&s.length){let l=s[Math.floor(e.rand()*s.length)];this.hint={x:l.x+(e.rand()*2-1)*12,z:l.z+(e.rand()*2-1)*12,t:e.time},this.quiet=a*.4,this.state===Q.ROAM&&this.pauseT<=0&&(this.path=null)}for(let l of s)l.hidden>=0&&l.hidFor>55&&(l.hidFor=30,this.lockerOcc[l.hidden]+=.6,this.hint={x:l.x,z:l.z,t:e.time},this.state===Q.ROAM&&(this.path=null));(e.lift.state===ae.CALLED||e.lift.state===ae.ARRIVED)&&((!this.hint||e.time-this.hint.t>6)&&(this.hint={x:this.L.lift.alarm.x,z:this.L.lift.alarm.z,t:e.time}),this.backoff=0)}roam(t){this.path?this.follow(t,Mt.creature.roam*this.tr.roam+.7*this.aggr(),3.5)&&this.arriveRoam():this.pauseT>0?this.lookAbout(t):this.pickRoam()}lookAbout(t){this.pauseT-=t,this.lookT+=t,this.stop(t),this.yaw=this.baseYaw+Math.sin(this.lookT*1.5)*1.15}arriveRoam(){let t=this.w,e=this.L;this.roamPoi>=0&&(this.poiSeen[this.roamPoi]=t.time);for(let o=0;o<e.pois.length;o++)Math.hypot(e.pois[o].x-this.x,e.pois[o].z-this.z)<7&&(this.poiSeen[o]=t.time);this.pauseT=1.2+t.rand()*2.4,this.lookT=0,this.baseYaw=this.yaw;let i=1e9;for(let o of t.players.values())o.status===dt.ALIVE&&(i=Math.min(i,Math.hypot(o.x-this.x,o.z-this.z)));let n=this.aggr(),s=this.tr.ambush>1.5;(n>=.2||s)&&i>9&&this.backoff<=0&&t.rand()<(.12+.16*n)*this.tr.ambush&&(this.ambushT=(9+t.rand()*12)*(s?1.5:1),this.faceTo=null,this.enter(Q.AMBUSH),this.lampsOut=!0)}pickRoam(){let t=this.w,e=this.L,i=this.cell(),n=this.aggr();ps(this.walk,i,this.dist);let s=.001;for(let u of this.heat)u>s&&(s=u);let o=Math.max(n,this.tr.guard),a=new Set;if(o>.2){for(let u of t.tags)u.taken||a.add(e.roomId[u.cell]);for(let u of t.stations)u.sec===t.sec&&u.active&&!u.done&&a.add(e.roomId[e.cellOf(u.ax,u.az)])}let l=[];for(let u of t.players.values())u.status===dt.ALIVE&&l.push(u);let c=-1,h=-1e9;for(let u=0;u<e.pois.length;u++){let f=e.pois[u],d=this.dist[f.cell];if(d<1)continue;let g=Math.min(60,t.time-this.poiSeen[u])/60+t.rand()*.5-d/140;if(g+=.4*this.heat[f.room]/s,a.has(f.room)&&(g+=.5*o),this.hint&&(g+=1.7*Math.max(0,1-Math.hypot(f.x-this.hint.x,f.z-this.hint.z)/30)),this.backoff>0){let x=1e9;for(let m of l)x=Math.min(x,Math.hypot(f.x-m.x,f.z-m.z));g-=1.6*Math.max(0,1-x/30)}g>h&&(h=g,c=u)}if(c<0){this.pauseT=1;return}this.roamPoi=c,!(this.dist[e.pois[c].cell]>20&&this.ventCool<=0&&t.rand()<.3+.35*n&&this.ventTo(e.pois[c].x,e.pois[c].z,"roam",this.dist[e.pois[c].cell]*2*.65))&&(this.path=this.pather.find(i,e.pois[c].cell,t.doorOpen),this.pathI=this.path&&this.path.length>1?1:0,this.path||(this.poiSeen[c]=t.time,this.pauseT=.5))}ambushStep(t){this.stop(t),this.ambushT-=t,this.faceTo!==null&&(this.yaw=vn(this.yaw,this.faceTo,2.5*t)),this.ambushT<=0&&this.enter(Q.ROAM)}suspectStep(t){let e=this.w,i=e.players.get(this.suspect),n=this.seenAt.get(this.suspect),s=i&&this.aware.get(i.id)||0;if(!i||i.status!==dt.ALIVE||!n||s<.15||this.stateT>6){n?this.investigate(n.x,n.z,.55,"glimpse",0):this.enter(Q.ROAM);return}if(this.replanT-=t,this.replanT<=0){this.replanT=.5;let o=ar(this.L,this.walk,n.x,n.z,4);this.path=o>=0?this.pather.find(this.cell(),o,e.doorOpen):null,this.pathI=this.path&&this.path.length>1?1:0}this.path&&this.stateT>.6?this.follow(t,1.5,4):(this.stop(t),this.yaw=vn(this.yaw,Ze(n.x-this.x,n.z-this.z),4*t))}investigate(t,e,i,n,s){let o=this.L,a=this.w,l=ar(o,this.walk,t,e,5);if(l<0)return;let c=this.state!==Q.INVEST;this.stim={x:t,z:e,w:i,kind:n,id:s,t:a.time},this.path=this.pather.find(this.cell(),l,a.doorOpen),this.pathI=this.path&&this.path.length>1?1:0,this.pauseT=0,c&&(this.enter(Q.INVEST),i>=.3&&a.event("alert"))}investStep(t){let e=this.w,i=this.stim;if(this.path){this.follow(t,2.6+1.6*i.w+.6*this.aggr(),5)&&(this.pauseT=1.6,this.lookT=0,this.baseYaw=this.yaw);return}if((i.kind==="breath"||i.kind==="gasp")&&this.heardLocker>=0&&!this.lockerChecked[this.heardLocker]){let n=this.heardLocker,s=this.L.lockers[n];if(this.heardLocker=-1,Math.hypot(s.x-this.x,s.z-this.z)<2.2)return this.searchLeft=Math.max(this.searchLeft,8),this.enterLocker(n,Q.SEARCH)}if(this.pauseT>0)return this.lookAbout(t);i.kind==="decoy"&&(this.learn.decoy=Math.max(.15,this.learn.decoy*.6)),this.startSearch({x:i.x,z:i.z},.7,9+6*this.aggr(),null)}startHunt(t){let e=this.w;this.state!==Q.HUNT&&(e.event("spot",t.slot),this.stats.hunts++,this.pressure+=8,this.state!==Q.ATTACK&&Math.hypot(t.x-this.x,t.z-this.z)>7&&(this.rearT=.5,this.burstT=2.1)),this.target=t.id,this.lostT=0,this.knowsLocker=-1,this.replanT=0,this.path=null,this.last={x:t.x,z:t.z,vx:t.vx,vz:t.vz};let i=this.L.roomId[this.L.cellOf(t.x,t.z)];i>=0&&(this.heat[i]+=2),this.enter(Q.HUNT)}visibleOther(t){let e=null,i=1e9;for(let n of this.w.players.values()){if(n.id===t||n.status!==dt.ALIVE||!n.visible||(this.aware.get(n.id)||0)<.6)continue;let s=Math.hypot(n.x-this.x,n.z-this.z);s<i&&(i=s,e=n)}return e}searchDur(){return(16+14*Math.min(1,this.aggr())+this.w.rand()*6)*this.tr.search}huntStep(t){let e=this.w,i=this.L,n=e.players.get(this.target);if(!n||n.status!==dt.ALIVE){let h=this.visibleOther(this.target);return this.target=null,h?this.startHunt(h):this.startSearch(this.last,.9,this.searchDur(),null)}let s=Math.hypot(n.x-this.x,n.z-this.z);n.visible?(this.lostT=0,this.last={x:n.x,z:n.z,vx:n.vx,vz:n.vz}):(this.lostT+=t,n.hidden<0&&this.lostT<.9&&(this.last={x:n.x,z:n.z,vx:n.vx,vz:n.vz}));let o=this.visibleOther(n.id);if(o&&(!n.visible||Math.hypot(o.x-this.x,o.z-this.z)<s*.6))return this.startHunt(o);this.burstT>0&&(this.burstT-=t);let a=Mt.creature.chase+this.tr.chase+Mt.creature.chaseGain*Math.min(1,this.aggr())+(e.lift.state>=ae.CALLED?.3:0)+(this.burstT>0?.9:0);if(this.rearT>0){this.rearT-=t,this.stop(t),this.yaw=vn(this.yaw,Ze(this.last.x-this.x,this.last.z-this.z),6*t);return}if(this.knowsLocker>=0){let h=i.lockers[this.knowsLocker];if(n.hidden!==this.knowsLocker)this.knowsLocker=-1;else{if(Math.hypot(h.x-this.x,h.z-this.z)<.7)return this.enterLocker(this.knowsLocker,Q.HUNT);this.replanT-=t,(this.replanT<=0||!this.path)&&(this.replanT=.4,this.path=this.pather.find(this.cell(),h.access,e.doorOpen,1.5),this.pathI=this.path&&this.path.length>1?1:0),this.path?this.follow(t,a,9):this.steerAt(t,h.x,h.z,a);return}}let l=i.cells[i.cellOf(n.x,n.z)]===pt.DUCT;if(n.visible&&s<(l?2.3:Mt.creature.catchDist))return this.enterAttack(n);if(n.visible&&!l&&jo(this.walk,this.x,this.z,n.x,n.z,.45)){this.path=null,this.steerAt(t,n.x,n.z,a);return}if(this.replanT-=t,this.replanT<=0||!this.path){this.replanT=.25;let h=ar(i,this.walk,this.last.x,this.last.z,6);this.path=h>=0?this.pather.find(this.cell(),h,e.doorOpen,1.5):null,this.pathI=this.path&&this.path.length>1?1:0}(!this.path||this.follow(t,a,9))&&!n.visible&&this.lostT>=.9&&(e.event("lost"),this.startSearch(this.last,1,this.searchDur(),n.id))}steerAt(t,e,i,n){let s=e-this.x,o=i-this.z,a=Math.hypot(s,o);if(a<.05)return this.stop(t);this.steer(t,s/a,o/a,n,9)}enterAttack(t){this.attackId=t.id,this.attackT=0,this.attackDone=!1,this.attackHit=!1,this.path=null,this.enter(Q.ATTACK),this.w.event("lunge",t.slot)}attackStep(t){let e=this.w,i=this.L,n=e.players.get(this.attackId);if(this.attackT+=t,n){let s=n.x-this.x,o=n.z-this.z,a=Math.hypot(s,o);if(this.yaw=vn(this.yaw,Ze(s,o),12*t),!this.attackDone&&a>1&&jo(this.walk,this.x,this.z,this.x+s/a*.3,this.z+o/a*.3,.45)?(this.x+=s/a*5.5*t,this.z+=o/a*5.5*t,this.speed=5.5):this.stop(t),!this.attackDone&&this.attackT>=.38){this.attackDone=!0;let l=i.cells[i.cellOf(n.x,n.z)]===pt.DUCT;n.status===dt.ALIVE&&n.hidden<0&&n.invuln<=0&&a<(l?2.7:Mt.creature.hitDist)&&di(i,e.doorOpen,this.x,this.z,1,n.x,n.z,.9,!0)&&(this.attackHit=!0,this.stats.catches++,e.downPlayer(n))}}else this.stop(t);this.attackT>=(this.attackHit?1.5:.85)&&(this.attackHit&&n?this.afterKill(n):n&&n.status===dt.ALIVE?(this.target=n.id,this.lostT=0,this.enter(Q.HUNT)):this.enter(Q.ROAM))}afterKill(t){let e=this.w;this.target=null;let i=this.visibleOther(t.id);if(i)return this.startHunt(i);let n=0;for(let o of e.players.values())o.id!==t.id&&o.status===dt.ALIVE&&n++;if(!n)return this.pauseT=2.5,this.lookT=0,this.baseYaw=this.yaw,this.path=null,this.backoff=Math.max(this.backoff,30),this.enter(Q.ROAM);let s=e.rand();if(!(s<.45&&this.startBait(t))){if(s<.75)return this.backoff=24,this.path=null,this.pauseT=0,this.enter(Q.ROAM);this.startSearch({x:t.x,z:t.z},.5,14,null)}}startBait(t){let e=this.w,i=this.L,n=ar(i,this.walk,t.x,t.z,3);if(n<0)return!1;ps(this.walk,n,this.dist);let s=[];for(let a=0;a<wn;a++){let l=this.dist[a];l<3||l>8||i.doorAt[a]>=0||di(i,null,i.cx(a),i.cz(a),1.6,t.x,t.z,.5)||s.push(a)}if(!s.length)return!1;s.sort((a,l)=>this.dist[a]-this.dist[l]);let o=s[Math.floor(e.rand()*Math.min(5,s.length))];return this.path=this.pather.find(this.cell(),o,e.doorOpen),this.path?(this.pathI=this.path.length>1?1:0,this.baitT=30,this.baitFor=t.id,this.faceTo=null,this.enter(Q.BAIT),!0):!1}baitStep(t){let e=this.w,i=e.players.get(this.baitFor);if(!i||i.status!==dt.DOWN)return this.enter(Q.ROAM);if(this.path){this.follow(t,3.2,5)&&(this.lampsOut=!0,this.faceTo=Ze(i.x-this.x,i.z-this.z));return}this.stop(t),this.lampsOut=!0,this.baitT-=t,this.faceTo!==null&&(this.yaw=vn(this.yaw,this.faceTo,2.5*t)),this.baitT<=0&&this.enter(Q.ROAM)}enterLocker(t,e){let i=this.L.lockers[t];this.lockerId=t,this.lockerT=0,this.lockerBack=e,this.path=null,this.faceTo=Ze((i.cx+.5)*2-this.x,(i.cz+.5)*2-this.z),this.enter(Q.LOCKER),this.stats.lockerChecks++,this.w.event("lockchk",t,0)}lockerStep(t){let e=this.w,i=this.lockerId;if(this.stop(t),this.lockerT+=t,this.yaw=vn(this.yaw,this.faceTo,6*t),this.lockerT<1.25)return;this.lockerChecked[i]=1,this.lockerOcc[i]=0;let n=null;for(let s of e.players.values())s.status===dt.ALIVE&&s.hidden===i&&(n=s);if(n&&this.lockerBack!==Q.HUNT&&e.holding(n)&&e.rand()>this.learn.hide&&(this.learn.hide=Math.min(.9,this.learn.hide+.06),e.event("lockchk",i,2),n=null),n)return this.stats.lockerFinds++,this.stats.catches++,e.event("lockchk",i,1),e.downPlayer(n),this.learn.hide=Math.min(.9,this.learn.hide+.1),this.attackT=0,this.afterKill(n);if(this.lockerBack===Q.HUNT)return this.knowsLocker=-1,this.startSearch({x:this.x,z:this.z},.8,this.searchDur(),this.target);if(this.searchLeft>0)return this.enter(Q.SEARCH);this.enter(Q.ROAM)}startSearch(t,e,i,n){this.occ.fill(0);for(let s=0;s<this.lockerOcc.length;s++)this.lockerOcc[s]*=.5;this.lockerChecked.fill(0),this.seedOcc(t.x,t.z,e,4,t.vx||0,t.vz||0),this.searchLeft=i,this.searchFor=n,this.goalLocker=-1,this.goalT=0,this.path=null,this.pauseT=0,this.thinkT=0,this.stats.searches++,this.enter(Q.SEARCH)}searchStep(t){if(this.searchLeft-=t,this.thinkT-=t,this.thinkT<=0&&(this.thinkT=.25,this.diffuse(),this.clearSeen()),this.searchLeft<=0)return this.endSearch();if(this.pauseT>0)return this.lookAbout(t);if(this.goalT+=t,(!this.path||this.goalT>4)&&!this.pickSearchGoal())return this.endSearch();if(this.follow(t,2.8+this.aggr(),5)){if(this.goalLocker>=0&&!this.lockerChecked[this.goalLocker])return this.enterLocker(this.goalLocker,Q.SEARCH);this.pauseT=.9,this.lookT=0,this.baseYaw=this.yaw}}endSearch(){let t=this.w,e=this.L,i=this.searchFor?t.players.get(this.searchFor):null;if(i&&i.status===dt.ALIVE&&(i.hidden>=0?this.learn.hide=Math.min(.9,this.learn.hide+.18):e.cells[e.cellOf(i.x,i.z)]===pt.DUCT&&(this.learn.duct=Math.min(.95,this.learn.duct+.15))),this.occ.fill(0),this.searchLeft=0,this.searchFor=null,this.path=null,this.pauseT=0,this.enter(Q.ROAM),this.ventCool<=0&&t.rand()<.3){let n=e.vents.filter(s=>s.sec===t.sec&&Math.hypot(s.x-this.x,s.z-this.z)>20);if(n.length){let s=n[Math.floor(t.rand()*n.length)];this.ventTo(s.x,s.z,"roam",1e9)}}}pickSearchGoal(){let t=this.L,e=this.w,i=this.cell(),n=this.occ;ps(this.walk,i,this.dist);let s=-1,o=2e-5,a=-1;for(let l=120;l<wn-120;l++){if(!this.walk[l]||this.dist[l]<0)continue;let c=n[l]+.5*(n[l-1]+n[l+1]+n[l-120]+n[l+120]);if(c<1e-5)continue;let h=c/(3+this.dist[l]);h>o&&(o=h,s=l)}for(let l of t.ducts){let c=0;for(let h of l.cells)c+=n[h];if(!(c<1e-4))for(let h of l.exits){if(this.dist[h]<0)continue;let u=c*(.4+this.learn.duct)/(3+this.dist[h]);u>o&&(o=u,s=h)}}for(let l of t.lockers){if(this.lockerChecked[l.id]||this.lockerOcc[l.id]<.02||this.dist[l.access]<0)continue;let c=this.lockerOcc[l.id]*2/(3+this.dist[l.access]);c>o&&(o=c,s=l.access,a=l.id)}return s<0?!1:(this.goalLocker=a,this.goalT=0,this.path=this.pather.find(i,s,e.doorOpen),this.pathI=this.path&&this.path.length>1?1:0,!!this.path)}seedOcc(t,e,i,n,s=0,o=0){let a=this.L,l=this.spread,c=(u,f,d)=>{let g=ar(a,l,u,f,3);if(g<0)return;let x=new Map([[g,0]]),m=[g],p=0;for(let y=0;y<m.length;y++){let b=m[y],v=x.get(b);if(p+=n+1-v,!(v>=n))for(let E of[b-1,b+1,b-120,b+120])l[E]&&!x.has(E)&&(x.set(E,v+1),m.push(E))}for(let[y,b]of x)this.occ[y]+=d*(n+1-b)/p},h=Math.hypot(s,o);h>.5?(c(t,e,i*.5),c(t+s/h*5,e+o/h*5,i*.5)):c(t,e,i)}diffuse(){let t=this.spread,e=this.occ,i=this.occ2;i.fill(0);for(let n=120;n<wn-120;n++){let s=e[n];if(s<1e-6)continue;let o=t[n-1],a=t[n+1],l=t[n-120],c=t[n+120],h=o+a+l+c;if(!h){i[n]+=s;continue}let u=s*.4/h;i[n]+=s*.6,o&&(i[n-1]+=u),a&&(i[n+1]+=u),l&&(i[n-120]+=u),c&&(i[n+120]+=u)}this.occ=i,this.occ2=e}clearSeen(){let t=this.L,e=this.w,i=this.occ,n=Math.floor(this.x/2),s=Math.floor(this.z/2),o=-Math.sin(this.yaw),a=-Math.cos(this.yaw);for(let l=-7;l<=7;l++)for(let c=-7;c<=7;c++){let h=n+c,u=s+l;if(h<1||u<1||h>=119||u>=33)continue;let f=u*120+h;if(i[f]<1e-6||t.cells[f]===pt.DUCT)continue;let d=(h+.5)*2-this.x,g=(u+.5)*2-this.z,x=Math.hypot(d,g);if(!(x>14)&&!(x>2.5&&(d*o+g*a)/x<.1)&&!(x>.5&&!di(t,e.doorOpen,this.x,this.z,aa,(h+.5)*2,(u+.5)*2,1))){for(let m of this.lockersAt.get(f)||Vx)this.lockerChecked[m]||(this.lockerOcc[m]+=i[f]*this.learn.hide);i[f]=0}}}follow(t,e,i){let n=this.L,s=this.path;if(!s||this.pathI>=s.length)return this.path=null,this.stop(t),!0;for(let c=0;c<6&&this.pathI+1<s.length&&n.doorAt[s[this.pathI]]<0&&jo(this.walk,this.x,this.z,n.cx(s[this.pathI+1]),n.cz(s[this.pathI+1]),.5);c++)this.pathI++;let o=n.cx(s[this.pathI])-this.x,a=n.cz(s[this.pathI])-this.z,l=Math.hypot(o,a);return l<.3?(this.pathI++,this.pathI>=s.length?(this.path=null,this.stop(t),!0):!1):(this.steer(t,o/l,a/l,e,i),!1)}steer(t,e,i,n,s){let o=this.L,a=this.w;this.yaw=vn(this.yaw,Ze(e,i),s*t);for(let d of[.4,1.25]){let g=o.doorAt[o.cellOf(this.x+e*d,this.z+i*d)];if(g>=0&&!a.doorSeal[g]&&!a.doorLock[g]&&a.doorOpen[g]<.85){this.stop(t),this.forcing=!0,this.doorT+=t,a.doorWant[g]===0&&this.doorT>(this.state===Q.HUNT?.55:.9)&&a.forceDoor(g);return}}this.forcing=!1,this.doorT=0;let l=Math.hypot(this.vx,this.vz),c=l>.3?(this.vx*e+this.vz*i)/l:1,h=n*(this.tr.corner+(1-this.tr.corner)*ce(c));this.speed=Ki(this.speed,h,(h>this.speed?6:16)*t),this.vx=e*this.speed,this.vz=i*this.speed;let u=this.x+this.vx*t,f=this.z+this.vz*t;this.walk[o.cellOf(u,f)]?(this.x=u,this.z=f):(this.path=null,this.stop(t))}ventTo(t,e,i,n){let s=this.L,o=this.w,a=s.vents.length,l=this.cell(),c=o.sec;if(!this.walk[l])return!1;ps(this.walk,l,this.dist);let h=-1,u=1e9;for(let g of s.vents){let x=this.dist[g.cell];x>=0&&x<14&&x<u&&(u=x,h=g.id)}let f=-1,d=1e9;for(let g of s.vents){if(g.sec!==c)continue;let x=Math.hypot(g.x-t,g.z-e);x<d&&(d=x,f=g.id)}return h<0||f<0||h===f||d>14||u*2+s.ventLen[h*a+f]+d>n?!1:this.goVent(h,f,i)}followCrew(){let t=this.L,e=this.w,i=null,n=null;for(let l of e.players.values())if(l.status===dt.ALIVE&&t.secOf[t.cellOf(l.x,l.z)]===e.sec){i=l.x,n=l.z;break}let s=t.sections[e.sec],o=i!==null?i+(e.rand()*2-1)*14:t.cx(t.idx(s.x0+s.x1>>1,16)),a=n!==null?n+(e.rand()*2-1)*10:32;if(!this.ventTo(o,a,"section",1e9)&&(this.ventStuck+=1,this.ventStuck>30)){let l=-1,c=1e9;for(let h of t.vents){if(h.sec!==e.sec)continue;let u=Math.hypot(h.x-o,h.z-a);u<c&&(c=u,l=h.id)}l>=0&&(this.x=t.vents[l].x,this.z=t.vents[l].z,this.ventStuck=0,this.ventA=this.ventB=l,this.ventWhy="section",this.enter(Q.VENT),this.ventPhase=qc,this.stateT=0,e.event("ventout",l))}}goVent(t,e,i){let n=this.L;return this.ventA=t,this.ventB=e,this.ventWhy=i,this.ventRoute=null,this.after=null,this.path=this.pather.find(this.cell(),n.vents[t].cell,this.w.doorOpen),this.pathI=this.path&&this.path.length>1?1:0,!this.path&&this.cell()!==n.vents[t].cell?!1:(this.enter(Q.VENT),this.ventPhase=hr,this.ventCool=20+this.w.rand()*25,!0)}ventToward(t,e,i,n,s){let o=this.L,a=this.w,l=o.vents.length,c=-1,h=1e9;for(let u of o.vents){if(u.sec!==a.sec)continue;let f=Math.hypot(u.x-t,u.z-e);f<h&&(h=f,c=u.id)}if(!(c<0||h>12)){if(c!==this.ventB){let u=this.ventRoute,f=u?Math.min(this.ventI,u.length-1):0,d=u?[u[f],u[Math.max(0,f-1)]]:[this.ventA],g=d[0],x=1e9;for(let m of d){let p=o.vents[m],y=Math.hypot(p.x-this.x,p.z-this.z)+o.ventLen[m*l+c];y<x&&(x=y,g=m)}this.ventB=c,this.ventRoute=this.route(g,c),this.ventI=0}this.ventWhy="noise",this.after={x:t,z:e,w:i,kind:n,id:s}}}route(t,e){let i=this.L,n=i.vents.length,s=[t],o=t;for(let a=0;a<64&&o!==e&&(o=i.ventNext[o*n+e],!(o<0));a++)s.push(o);return s}ventStep(t){let e=this.L,i=this.w;if(this.ventPhase===hr){if(this.path&&!this.follow(t,2.6+.8*this.aggr(),6))return;let o=e.vents[this.ventA];if(Math.hypot(o.x-this.x,o.z-this.z)>1.2){this.path=this.pather.find(this.cell(),o.cell,i.doorOpen),this.pathI=this.path&&this.path.length>1?1:0,this.path||this.enter(Q.ROAM);return}this.stop(t),this.x=o.x,this.z=o.z,this.ventPhase=Wc,this.stateT=0,this.stats.vents++,i.event("ventin",this.ventA);return}if(this.stop(t),this.ventPhase===Wc){this.stateT>=Mt.creature.climb&&(this.ventPhase=la,this.stateT=0,this.ventRoute=this.route(this.ventA,this.ventB),this.ventI=1);return}if(this.ventPhase===la){let o=Mt.creature.vent*t;for(;o>0&&this.ventRoute&&this.ventI<this.ventRoute.length;){let a=e.vents[this.ventRoute[this.ventI]],l=a.x-this.x,c=a.z-this.z,h=Math.hypot(l,c);if(h<=o){this.x=a.x,this.z=a.z,o-=h,this.ventI++;continue}this.x+=l/h*o,this.z+=c/h*o,this.yaw=vn(this.yaw,Ze(l,c),8*t),this.speed=Mt.creature.vent,o=0}if(!this.ventRoute||this.ventI>=this.ventRoute.length){let a=e.vents[this.ventB];this.x=a.x,this.z=a.z,this.ventPhase=qc,this.stateT=0,this.speed=0,i.event("ventout",this.ventB)}return}if(this.stateT<Mt.creature.drop)return;let n=this.ventWhy,s=this.after;if(this.after=null,this.ventWhy="",this.ventStuck=0,this.pauseT=.6+i.rand(),this.lookT=0,this.baseYaw=this.yaw,this.path=null,s)return this.investigate(s.x,s.z,s.w,s.kind,s.id);this.enter(Q.ROAM),n==="section"&&(this.hint=null)}};var Sn=5;function Gx(r,t){let e=4+t.int(4),i=4080,n=new Uint8Array(i),s=[],o=0;for(let f=0;f<i;f++)o+=r.walkC[f];let a=r.idx(r.spawns[0].cx,r.spawns[0].cz),l=new Uint32Array(i),c=new Int32Array(i),h=0,u=0;for(let f of t.shuffle(r.doors.filter(d=>!d.gate&&d.bulk<0).map(d=>d.id))){if(s.length>=e)break;let d=r.doors[f].cells;for(let p of d)n[p]=1;let g=1,x=0,m=0;for(h++,c[m++]=a,l[a]=h;x<m;){let p=c[x++];for(let y of[p-1,p+1,p-120,p+120])r.walkC[y]&&!n[y]&&l[y]!==h&&(l[y]=h,c[m++]=y,g++)}if(g===o-u-d.length)s.push(f),u+=d.length;else for(let p of d)n[p]=0}return s.sort((f,d)=>f-d)}function ur(r,t){let e=t<0,i=Ai(Math.abs(t)),n=i.shuffle(r.tagSpots.map((m,p)=>p)),s=[];for(let m=10;s.length<Mt.TAGS&&m>=0;m-=2)for(let p of n){if(s.length>=Mt.TAGS)break;if(s.includes(p))continue;let y=r.tagSpots[p];s.every(b=>Math.hypot(r.tagSpots[b].cx-y.cx,r.tagSpots[b].cz-y.cz)>=m)&&s.push(p)}let o=i.shuffle(Zo.map((m,p)=>p)).slice(0,Mt.TAGS),a=i.shuffle(r.itemSpots.map((m,p)=>p)),l=i.pick(r.creatureSpawns.filter(m=>r.secOf[r.idx(m.cx,m.cz)]===0)),c=r.doors.map(m=>!m.gate&&m.bulk<0&&i()<.3?1:0),h=i.shuffle(r.stations.filter(m=>m.kind==="terminal").map(m=>m.id)).slice(0,3),u=r.stations.filter(m=>m.kind!=="terminal"||h.includes(m.id)).map(m=>m.id).sort((m,p)=>m-p),f=m=>({cell:r.idx(m.cx,m.cz),x:(m.cx+.5)*2,z:(m.cz+.5)*2}),d=a.slice(0,e?Mt.ITEMS:Mt.ITEMS-2+i.int(5)),g=e?[]:Gx(r,i);for(let m of g)c[m]=0;let x=new Array(Sn).fill(ge.ON);if(!e){x[0]=ge.DEAD;let m=i(),p=i.shuffle([1,2,3,4]);m<.28||(m<.62?x[p[0]]=ge.DEAD:m<.78?(x[p[0]]=ge.DEAD,x[p[1]]=ge.FAILING):m<.9?x[p[0]]=ge.FAILING:(x[p[0]]=ge.DEAD,x[p[1]]=ge.DEAD))}return{plain:e,seed:Math.abs(t),tags:s.map((m,p)=>Object.assign(f(r.tagSpots[m]),{spot:m,log:o[p]})),items:d.map(m=>Object.assign(f(r.itemSpots[m]),{spot:m})),creatureCell:r.idx(l.cx,l.cz),doorsOpen:c,sealed:g,zones:x,stations:u,trait:e?0:i.int(Vi.length),wake:e?Mt.WAKE:Math.round(20+i()*20),liftWait:e?Mt.lift.call:38+i.int(18)}}var fr=class r{constructor(t,e=1){this.L=t,this.rand=Ai((e^2654435769)>>>0),this.players=new Map,this.phase=se.LOBBY,this.mid=0,this.seed=0,this.time=0,this.clock=0;let i=t.doors.length;this.doorOpen=new Float32Array(i),this.doorWant=new Uint8Array(i),this.doorJam=new Float32Array(i),this.doorSeal=new Uint8Array(i),this.doorLock=new Uint8Array(i),this.sec=0,this.secDone=!1,this.secT=0,this.stations=t.stations.map(n=>({id:n.id,kind:n.kind,sec:n.sec,ax:n.ax,az:n.az,active:!0,prog:0,done:!1,noiseT:0})),this.zoneBase=new Array(Sn).fill(ge.ON),this.zoneOff=new Float32Array(Sn),this.zoneBoost=new Float32Array(Sn),this.blackT=0,this.rumbleT=0,this.incT=1e9,this.trait=Vi[0],this.wake=Mt.WAKE,this.liftWait=Mt.lift.call,this.plain=!0,this.tags=[],this.items=[],this.tagBits=0,this.itemBits=0,this.tagsTaken=0,this.decoys=[],this.decoyId=0,this.lift={state:ae.LOCKED,timer:0,board:0,klax:0},this.events=[],this.evId=0,this.noises=[],this.result=null,this.endT=0,this.wipeT=0,this.solo=!1,this.creature=new ca(this)}addPlayer(t,e,i=!1){if(this.players.has(t))return this.players.get(t);if(this.players.size>=Mt.MAX_PLAYERS)return null;let n=new Set([...this.players.values()].map(c=>c.slot)),s=0;for(;n.has(s);)s++;let o=this.phase===se.PLAY?this.L.sections[this.sec].spawns:this.L.spawns,a=o[s%o.length],l={id:t,name:String(e||"Crew").slice(0,14),slot:s,local:i,x:(a.cx+.5)*2,z:(a.cz+.5)*2,yaw:0,pitch:0,vx:0,vz:0,speed:0,crouch:!1,light:!1,scan:!1,hidden:-1,hidFor:0,rv:-1,status:dt.ALIVE,timer:0,revProg:0,revTick:!1,revBy:-1,revNoise:0,invuln:0,decoys:Mt.START_SOUNDERS,tags:0,wind:0,ack:0,stepAcc:0,scanT:0,inT:this.clock,aware:0,visible:!1,ready:!1,hold:!1,breath:1,gaspT:0,breathT:0,ws:-1};return this.players.set(t,l),this.phase===se.PLAY&&this.event("join",s),l}removePlayer(t){let e=this.players.get(t);e&&(this.players.delete(t),this.phase===se.PLAY&&this.event("leave",e.slot))}bySlot(t){for(let e of this.players.values())if(e.slot===t)return e;return null}input(t,e){let i=this.players.get(t);if(!i)return;let n=Math.max(.02,this.clock-i.inT);if(i.inT=this.clock,e.name&&(i.name=String(e.name).slice(0,14)),e.rd!==void 0&&(i.ready=!!e.rd),this.phase!==se.PLAY){if(Array.isArray(e.acts))for(let s of e.acts)s[0]>i.ack&&(i.ack=s[0]);return}if(i.status===dt.ALIVE&&Number.isFinite(e.x)&&Number.isFinite(e.z)){let s=le(e.x,2,238),o=le(e.z,2,66),a=s-i.x,l=o-i.z,c=Math.hypot(a,l);c<12?(i.vx=$e(i.vx,a/n,.6),i.vz=$e(i.vz,l/n,.6)):i.vx=i.vz=0,i.x=s,i.z=o,i.yaw=+e.yaw||0,i.pitch=+e.pitch||0,i.speed=Math.hypot(i.vx,i.vz);let h=e.f|0;i.crouch=!!(h&Ne.CROUCH),i.light=!!(h&Ne.LIGHT),i.scan=!!(h&Ne.SCAN),i.hold=!!(h&Ne.HOLD),i.rv=Number.isInteger(e.rv)?e.rv:-1,i.ws=Number.isInteger(e.ws)&&e.ws>=0&&e.ws<this.stations.length?e.ws:-1;let u=Number.isInteger(e.lk)&&e.lk>=0&&e.lk<this.L.lockers.length?e.lk:-1;if(u!==i.hidden)if(u>=0){let f=!1;for(let g of this.players.values())g!==i&&g.hidden===u&&g.status===dt.ALIVE&&(f=!0);let d=this.L.lockers[u];!f&&Math.hypot(d.x-s,d.z-o)<4&&(i.hidden=u,i.hidFor=0,this.noise(d.x,d.z,"locker",i.id),this.creature.onHide(i,u))}else{let f=i.hidden;i.hidden=-1;let d=this.L.lockers[f];this.noise(d.x,d.z,"locker",i.id),this.creature.onUnhide(i,f)}if(i.hidden<0&&c<12&&c>.001){i.stepAcc+=c;let f=i.speed>3.7,d=f?2:i.crouch?1.2:1.5;i.stepAcc>=d&&(i.stepAcc=0,this.noise(i.x,i.z,f?"run":i.crouch?"crouch":"walk",i.id))}}if(Array.isArray(e.acts))for(let s of e.acts)!Array.isArray(s)||!(s[0]>i.ack)||(i.ack=s[0],this.act(i,s))}act(t,e){let i=this.L,n=e[1];if(t.status!==dt.ALIVE||t.hidden>=0)return;let s=(o,a,l=Mt.reach+1)=>Math.hypot(o-t.x,a-t.z)<l;if(n==="T"){let o=this.tags[e[2]|0];if(!o||o.taken||!s(o.x,o.z))return;o.taken=!0,this.tagBits|=1<<(e[2]|0),this.tagsTaken++,t.tags++,this.event("tag",e[2]|0,t.slot,this.tagsTaken),this.noise(o.x,o.z,"tag",t.id)}else if(n==="I"){let o=this.items[e[2]|0];if(!o||o.taken||!s(o.x,o.z)||t.decoys>=Mt.MAX_SOUNDERS)return;o.taken=!0,this.itemBits|=1<<(e[2]|0),t.decoys++,this.event("item",e[2]|0,t.slot)}else if(n==="D"){let o=i.doors[e[2]|0];if(!o||o.gate||o.bulk>=0||this.doorSeal[o.id]||this.doorJam[o.id]>0||!s(o.x,o.z,Mt.reach+1.6)||this.doorWant[o.id]&&this.doorBusy(o.id))return;this.doorWant[o.id]^=1,this.event("door",o.id,this.doorWant[o.id],0),this.noise(o.x,o.z,"door",t.id)}else if(n==="G"){if(t.decoys<=0)return;t.decoys--;let o=(+e[2]||0)/1e3,a=le((+e[3]||0)/1e3,-1.4,1.4),l=11,c=t.crouch?Mt.player.eyeCrouch:Mt.player.eye;this.decoys.push({id:++this.decoyId,x:t.x,y:c-.15,z:t.z,vx:-Math.sin(o)*Math.cos(a)*l,vy:Math.sin(a)*l+2.2,vz:-Math.cos(o)*Math.cos(a)*l,state:0,t:0,beep:0,ox:t.x,oz:t.z,owner:t.id}),this.event("throw",t.slot)}else if(n==="B"){let o=i.breakers[e[2]|0];if(!o||!s(o.ax,o.az,Mt.reach+1))return;this.throwBreaker(o.zone,t)}else if(n==="L"){if(this.lift.state!==ae.READY||!s(i.lift.console.x,i.lift.console.z,Mt.reach+1.6))return;this.lift.state=ae.CALLED,this.lift.timer=this.liftWait,this.lift.klax=0,this.event("liftcall",t.slot,this.liftWait)}}useLayout(t){this.plain=t.plain,this.doorSeal.fill(0);for(let e of t.sealed)this.doorSeal[e]=1;for(let e of this.stations)e.active=t.stations.includes(e.id),e.prog=0,e.done=!1,e.noiseT=0;this.zoneBase=t.zones.slice(),this.zoneOff.fill(0),this.zoneBoost.fill(0),this.blackT=0,this.rumbleT=0,this.trait=Vi[t.trait]||Vi[0],this.wake=t.wake,this.liftWait=t.liftWait,this.incT=50+this.rand()*50}startMatch(t){let e=this.L,i=ur(e,t);this.mid++,this.seed=t,this.phase=se.PLAY,this.time=0,this.result=null,this.endT=0,this.wipeT=0,this.tags=i.tags.map(n=>Object.assign({taken:!1},n)),this.items=i.items.map(n=>Object.assign({taken:!1},n)),this.tagBits=0,this.itemBits=0,this.tagsTaken=0,this.decoys=[],this.noises.length=0,this.lift={state:ae.LOCKED,timer:0,board:0,klax:0};for(let n=0;n<e.doors.length;n++)this.doorWant[n]=i.doorsOpen[n],this.doorOpen[n]=i.doorsOpen[n],this.doorJam[n]=0,this.doorLock[n]=e.doors[n].bulk>=0?1:0;this.sec=0,this.secDone=!1,this.secT=0,this.useLayout(i),this.solo=this.players.size===1;for(let n of this.players.values())this.respawn(n),n.wind=this.solo?1:0;this.creature.reset(i.creatureCell),this.event("start")}zonePower(t){return this.blackT>0||this.zoneOff[t]>0?.07:this.zoneBoost[t]>0?1:this.zoneBase[t]===ge.DEAD?.07:this.zoneBase[t]===ge.FAILING?.55:1}throwBreaker(t,e){if(!(t>=0&&t<Sn))return!1;let i=this.L.breakers[t],n=this.blackT>0||this.zoneOff[t]>0,s=this.zoneBase[t]!==ge.ON&&this.zoneBoost[t]<=0;return!n&&!s?!1:(this.blackT>0&&(this.blackT=0,this.event("pwr",9,1)),this.zoneOff[t]>0&&(this.zoneOff[t]=0,this.zoneBase[t]===ge.ON&&this.event("pwr",t,1)),this.zoneBase[t]!==ge.ON&&(this.zoneBoost[t]=Mt.boost,this.event("pwr",t,1,1)),this.event("breaker",t,e?e.slot:-1),this.noise(i.ax,i.az,"breaker",e?e.id:null),!0)}litAt(t){return this.L.lightLevel[t]*this.zonePower(this.L.zoneOf[t])}progress(){return Math.min(1,(this.sec+this.secFrac())/this.L.sections.length)}secFrac(){if(this.secDone)return 1;if(this.L.sections[this.sec].task==="tags")return this.tags.length?this.tagsTaken/this.tags.length:1;let e=0,i=0;for(let n of this.stations)n.sec===this.sec&&n.active&&(e++,i+=n.done?1:n.prog*.8);return e?i/e:0}stationOpen(t){return!t.active||t.done||t.sec!==this.sec||this.secDone?!1:t.kind==="lever"?this.stations.every(e=>e.kind!=="pump"||!e.active||e.done):!0}stepSections(t){let e=this.L,i=e.sections[this.sec];this.secT+=t;for(let n of this.players.values()){if(n.status!==dt.ALIVE||n.hidden>=0||n.ws<0)continue;let s=this.stations[n.ws];!this.stationOpen(s)||Math.hypot(s.ax-n.x,s.az-n.z)>Mt.reach+.6||(s.prog=Math.min(1,s.prog+t/(Mt.station[s.kind]||5)),s.noiseT-=t,s.noiseT<=0&&(s.noiseT=s.kind==="pump"?1:1.5,this.noise(s.ax,s.az,s.kind==="pump"?"pump":"work",n.id)),s.prog>=1&&(s.done=!0,this.event("station",s.id,n.slot)))}if(this.secDone){if(i.bulkOut>=0){let n=this.sec+1,s=!1,o=!0;for(let a of this.players.values())a.status===dt.DEAD||a.status===dt.OUT||(s=!0,e.secOf[e.cellOf(a.x,a.z)]<n&&(o=!1));if(s&&o&&this.secT>2){let a=i.bulkOut;this.doorWant[a]=0,this.doorLock[a]=1,this.sec=n,this.secDone=!1,this.secT=0,this.event("section",n),this.creature.syncWalk(),this.creature.onSection(n)}}}else{let n=!1;i.task==="tags"?n=this.tagsTaken>=this.tags.length:i.task==="launch"?this.lift.state===ae.LOCKED&&this.stations.every(s=>s.sec!==this.sec||!s.active||s.done)&&(this.lift.state=ae.READY,this.event("liftready")):n=this.stations.every(s=>s.sec!==this.sec||!s.active||s.done),n&&this.completeSection()}}completeSection(){let t=this.L,e=t.sections[this.sec];if(this.secDone=!0,this.secT=0,e.task==="reactor"){for(let i of e.zones)this.zoneBase[i]=ge.ON,this.zoneBoost[i]=0;this.event("reactor")}if(e.bulkOut>=0){let i=t.doors[e.bulkOut];this.doorLock[i.id]=0,this.doorWant[i.id]=1,this.event("bulkopen",this.sec),this.noise(i.x,i.z,"bulkhead",null),this.creature.syncWalk()}}finishSection(){if(!this.secDone){for(let t of this.stations)t.sec===this.sec&&t.active&&(t.prog=1,t.done=!0);if(this.L.sections[this.sec].task==="tags")for(let t=0;t<this.tags.length;t++)this.tags[t].taken||(this.tags[t].taken=!0,this.tagBits|=1<<t,this.tagsTaken++);this.stepSections(0)}}holding(t){return t.hidden>=0&&t.hold&&t.gaspT<=0&&t.breath>0}respawn(t){let e=this.L.sections[this.sec].spawns,i=e[t.slot%e.length];Object.assign(t,{x:(i.cx+.5)*2,z:(i.cz+.5)*2,vx:0,vz:0,speed:0,status:dt.ALIVE,timer:0,revProg:0,invuln:0,hidden:-1,hidFor:0,decoys:Mt.START_SOUNDERS,tags:0,stepAcc:0,aware:0,visible:!1,rv:-1,hold:!1,breath:1,gaspT:0,breathT:0})}toLobby(){this.phase=se.LOBBY,this.decoys=[],this.noises.length=0,this.creature.state=Q.IDLE;for(let t of this.players.values())t.status=dt.ALIVE,t.hidden=-1}finish(t){if(this.phase!==se.PLAY)return;this.phase=se.END,this.endT=0;let e=[];for(let i of this.players.values())i.status===dt.OUT&&e.push(i.slot);this.result={win:t?1:0,t:Math.round(this.time),out:e,tags:this.tagsTaken,sec:this.sec},this.event("end",t?1:0)}event(t,e=0,i=0,n=0){this.events.push([++this.evId,t,e,i,n]),this.events.length>10&&this.events.shift()}noise(t,e,i,n,s){if(this.phase!==se.PLAY)return;let o={x:t,z:e,r:Mt.noise[i]||6,kind:i,src:n||null,id:0,ox:t,oz:e};s&&Object.assign(o,s),this.noises.push(o)}doorBusy(t){let e=this.L,i=e.doors[t].cells,n=this.creature;if(!n.hidden()&&i.includes(e.cellOf(n.x,n.z)))return!0;for(let s of this.players.values())if(s.status!==dt.DEAD&&s.status!==dt.OUT&&i.includes(e.cellOf(s.x,s.z)))return!0;return!1}forceDoor(t){this.doorSeal[t]||this.doorLock[t]||(this.doorWant[t]=1,this.doorJam[t]=20,this.event("door",t,1,1))}downPlayer(t){t.status===dt.ALIVE&&(t.status=dt.DOWN,t.timer=Mt.down.bleed,t.revProg=0,t.hidden=-1,t.vx=t.vz=0,t.speed=0,this.event("down",t.slot))}step(t){let e=this.L;this.clock+=t;for(let n=0;n<e.doors.length;n++)this.doorJam[n]>0&&(this.doorJam[n]-=t),!this.doorWant[n]&&this.doorOpen[n]>.05&&this.doorBusy(n)&&(this.doorWant[n]=1),this.doorOpen[n]=Ki(this.doorOpen[n],this.doorWant[n],t*2.4);for(let n of[...this.players.values()])!n.local&&this.clock-n.inT>Mt.net.stale/1e3&&this.removePlayer(n.id);if(this.phase===se.LOBBY){this.noises.length=0;return}if(this.phase===se.END){this.noises.length=0,this.endT+=t,this.endT>16&&this.toLobby();return}this.time+=t;let i=0;for(let n of this.players.values())if(n.status===dt.ALIVE){if(i++,n.invuln>0&&(n.invuln-=t),n.hidden>=0){n.hidFor+=t;let s=e.lockers[n.hidden];n.gaspT>0&&(n.gaspT-=t),n.hold&&n.gaspT<=0&&n.breath>0?(n.breath-=t/Mt.breath.hold,n.breath<=0&&(n.breath=0,n.gaspT=Mt.breath.gasp,this.noise(s.x,s.z,"gasp",n.id,{locker:s.id}),this.event("gasp",n.slot))):(n.breath=Math.min(1,n.breath+t/Mt.breath.recover),n.breathT-=t,n.breathT<=0&&(n.breathT=1.3,this.noise(s.x,s.z,"breath",n.id,{locker:s.id})))}else n.breath=Math.min(1,n.breath+t/Mt.breath.recover),n.gaspT=0,n.breathT=.6;if(n.scan&&n.hidden<0?(n.scanT-=t,n.scanT<=0&&(n.scanT=1.3,this.noise(n.x,n.z,"scan",n.id))):n.scanT=.3,n.rv>=0&&n.hidden<0){let s=this.bySlot(n.rv);s&&s.status===dt.DOWN&&Math.hypot(s.x-n.x,s.z-n.z)<Mt.down.reach&&(s.revTick=!0,s.revBy=n.slot,s.revById=n.id)}}for(let n of this.players.values())n.status===dt.DOWN&&(n.revTick?(n.revProg+=t/Mt.down.revive,n.revNoise-=t,n.revNoise<=0&&(n.revNoise=1,this.noise(n.x,n.z,"revive",n.revById)),n.revProg>=1&&(n.status=dt.ALIVE,n.invuln=Mt.down.invuln,n.revProg=0,i++,this.event("rev",n.slot,n.revBy))):(n.revProg=Math.max(0,n.revProg-t*.5),n.timer-=t,n.timer<=0&&(n.status=dt.DEAD,this.event("dead",n.slot))),n.revTick=!1);if(this.players.size&&i===0){this.wipeT+=t;let n=this.solo&&this.players.size===1?this.players.values().next().value:null;if(n&&n.status===dt.DOWN&&n.wind>0)this.wipeT>5&&(n.wind=0,n.status=dt.ALIVE,n.invuln=7,n.revProg=0,this.wipeT=0,this.creature.backoff=35,this.event("wind",n.slot));else if(this.wipeT>2.5){for(let s of this.players.values())s.status===dt.DOWN&&(s.status=dt.DEAD);return this.finish(!1)}}else this.wipeT=0;this.stepDecoys(t),this.stepSections(t),this.stepLift(t),this.stepIncidents(t),this.creature.update(t)}stepIncidents(t){for(let o=0;o<Sn;o++)this.zoneOff[o]>0&&(this.zoneOff[o]-=t,this.zoneOff[o]<=0&&(this.zoneOff[o]=0,(this.zoneBase[o]===ge.ON||this.zoneBoost[o]>0)&&this.event("pwr",o,1))),this.zoneBoost[o]>0&&(this.zoneBoost[o]-=t,this.zoneBoost[o]<=0&&(this.zoneBoost[o]=0,this.event("pwr",o,0,1)));if(this.blackT>0&&(this.blackT-=t,this.blackT<=0&&(this.blackT=0,this.event("pwr",9,1))),this.rumbleT>0&&(this.rumbleT-=t),this.plain||this.lift.state===ae.LEFT||(this.incT-=t,this.incT>0))return;this.incT=50+this.rand()*65;let e=[];for(let o of this.players.values())o.status===dt.ALIVE&&e.push(o);if(!e.length)return;let i=e[Math.floor(this.rand()*e.length)],n=this.rand(),s=this.L.sections[this.sec].zones;n<.34?this.tripZone(this.rand()<.65?this.L.zoneOf[this.L.cellOf(i.x,i.z)]:s[Math.floor(this.rand()*s.length)]):n<.46?this.blackout():n<.72?this.doorFault(i):this.quake()}tripZone(t,e){return!(t>=0&&t<Sn)||this.zoneBase[t]===ge.DEAD&&this.zoneBoost[t]<=0||this.zoneOff[t]>0||this.blackT>0?!1:(this.zoneOff[t]=e||24+this.rand()*16,this.event("pwr",t,0),!0)}blackout(t){return this.blackT>0?!1:(this.blackT=t||14+this.rand()*9,this.event("pwr",9,0),!0)}doorFault(t){let e=this.L,i=[];for(let s of e.doors){if(s.gate||s.bulk>=0||this.doorSeal[s.id]||this.doorJam[s.id]>0||this.doorBusy(s.id))continue;let o=Math.hypot(s.x-t.x,s.z-t.z);o>4&&o<30&&i.push(s.id)}if(!i.length)return 0;let n=Math.min(i.length,2+Math.floor(this.rand()*3));for(let s=0;s<n;s++){let o=Math.floor(this.rand()*i.length),a=i.splice(o,1)[0];this.doorWant[a]^=1,this.event("door",a,this.doorWant[a],2)}return this.event("fault",n),n}quake(){return this.rumbleT=7,this.event("quake"),!0}stepDecoys(t){let e=this.L,i=(n,s,o)=>{let a=e.cellOf(n,o),l=e.cells[a];if(l===pt.SOLID||l===pt.TALL||l===pt.LOCKER||l===pt.DUCT&&s>1.1||l===pt.LOW&&s<Le)return!0;let c=e.doorAt[a];return c>=0&&this.doorOpen[c]<.5};for(let n of this.decoys)if(n.state===0){n.vy-=9.8*t;let s=n.x+n.vx*t,o=n.z+n.vz*t;i(s,n.y,n.z)?n.vx=-n.vx*.4:n.x=s,i(n.x,n.y,o)?n.vz=-n.vz*.4:n.z=o,n.y+=n.vy*t,e.cells[e.cellOf(n.x,n.z)]===pt.PIT?n.y<-30&&(n.state=2):n.y<.08&&(n.y=.08,Math.abs(n.vy)<2?(n.state=1,n.t=10,n.beep=0,n.vx=n.vz=n.vy=0):(n.vy=-n.vy*.35,n.vx*=.55,n.vz*=.55))}else n.state===1?(n.t-=t,n.beep-=t,n.beep<=0&&(n.beep=.55,this.noise(n.x,n.z,"decoy",null,{id:n.id,ox:n.ox,oz:n.oz})),n.t<=0&&(n.state=2,n.t=2)):n.t-=t;this.decoys.length&&(this.decoys=this.decoys.filter(n=>!(n.state===2&&n.t<=0)))}stepLift(t){let e=this.L,i=this.lift;if(i.state===ae.CALLED)i.timer-=t,i.klax-=t,i.klax<=0&&(i.klax=2.5,this.noise(e.lift.alarm.x,e.lift.alarm.z,"klaxon",null)),i.timer<=0&&(i.state=ae.ARRIVED,i.board=Mt.lift.board,this.doorWant[e.lift.gateId]=1,this.event("liftarr"));else if(i.state===ae.ARRIVED){let n=0,s=0;for(let o of this.players.values())o.status===dt.ALIVE&&(s++,e.cells[e.cellOf(o.x,o.z)]===pt.LIFT&&n++);if(n>0?(i.board-=t,n===s&&(i.board=Math.min(i.board,3))):i.board=Math.min(Mt.lift.board,i.board+t*.5),n>0&&i.board<=0){i.state=ae.LEFT;for(let o of this.players.values())o.status===dt.ALIVE&&e.cells[e.cellOf(o.x,o.z)]===pt.LIFT&&(o.status=dt.OUT);this.doorWant[e.lift.gateId]=0,this.event("liftgo"),this.finish(!0)}}}snapshot(){let t=this.creature,e=Math.round,i={};for(let s of this.players.values())i[s.id]=[s.slot,s.status,e(s.timer*10),s.ack,s.decoys,e(le(s.aware,0,1.5)*100),s.tags,e(s.revProg*100),s.hidden,s.name,s.ready?1:0,s.wind|0];let n="";for(let s=0;s<this.doorWant.length;s++)n+=this.doorJam[s]>0?"2":this.doorWant[s]?"1":"0";return{ph:this.phase,mid:this.mid,sd:this.seed,t:e(this.time*10),c:[e(t.x*100),e(t.z*100),e(t.yaw*1e3),t.state,t.targetSlot(),(t.lampsOut?1:0)|(t.forcing?2:0)|(t.rearT>0?4:0)|(t.hidden()?8:0)|(t.climbing()?16:0),e(t.speed*100),t.state===Q.LOCKER?t.lockerId:-1],sc:[this.sec,this.secDone?1:0,...this.stations.map(s=>s.done?100:e(s.prog*99))],tg:this.tagBits,it:this.itemBits,dr:n,lf:[this.lift.state,e(this.lift.timer*10),e(this.lift.board*10)],zo:this.powerMask(),dc:this.decoys.map(s=>[s.id,e(s.x*100),e(s.y*100),e(s.z*100),s.state]),pl:i,ev:this.events.slice(),ai:[e(t.learn.hide*100),e(t.learn.decoy*100),e(t.learn.duct*100)],rs:this.result}}powerMask(){let t=this.blackT>0?32:0;for(let e=0;e<Sn;e++)this.zoneOff[e]>0&&(t|=1<<e),this.zoneBoost[e]>0&&(t|=64<<e);return t}static restore(t,e,i=1){let n=new r(t,(e.sd^i)>>>0);if(n.phase=e.ph,n.mid=e.mid,n.seed=e.sd,n.time=e.t/10,n.result=e.rs||null,e.ph!==se.LOBBY){let o=ur(t,e.sd);if(n.tags=o.tags.map((l,c)=>Object.assign({taken:!!(e.tg&1<<c)},l)),n.items=o.items.map((l,c)=>Object.assign({taken:!!(e.it&1<<c)},l)),n.tagBits=e.tg,n.itemBits=e.it,n.tagsTaken=n.tags.filter(l=>l.taken).length,n.useLayout(o),e.sc&&(n.sec=e.sc[0]|0,n.secDone=!!e.sc[1],n.stations.forEach((l,c)=>{let h=e.sc[2+c]|0;l.done=h>=100,l.prog=h/100})),n.sec>0||n.secDone)for(let l of t.sections[0].zones)n.zoneBase[l]=ge.ON;for(let l of t.doors)l.bulk>=0&&(n.doorLock[l.id]=l.bulk===n.sec&&n.secDone?0:1);let a=e.zo|0;for(let l=0;l<Sn;l++)a&1<<l&&(n.zoneOff[l]=12),a&64<<l&&(n.zoneBoost[l]=30);a&32&&(n.blackT=8),n.creature.reset(o.creatureCell)}for(let o=0;o<n.doorWant.length;o++){let a=e.dr.charCodeAt(o)-48;n.doorWant[o]=a?1:0,n.doorOpen[o]=a?1:0,n.doorJam[o]=a===2?10:0}n.lift={state:e.lf[0],timer:e.lf[1]/10,board:e.lf[2]/10,klax:0},n.solo=!1;for(let o in e.pl){let a=e.pl[o],l=n.addPlayer(o,a[9]);l&&(l.slot=a[0],l.status=a[1],l.timer=a[2]/10,l.ack=a[3],l.decoys=a[4],l.tags=a[6],l.hidden=a[8],l.wind=a[11]|0,l.invuln=2)}let s=n.creature;if(s.x=e.c[0]/100,s.z=e.c[1]/100,s.yaw=e.c[2]/1e3,s.syncWalk(),!s.walk[t.cellOf(s.x,s.z)]||t.secOf[t.cellOf(s.x,s.z)]!==n.sec){let o=t.vents.find(a=>a.sec===n.sec);s.x=o.x,s.z=o.z}return s.state=e.ph===se.PLAY&&e.c[3]!==Q.IDLE?Q.ROAM:Q.IDLE,s.learn.hide=e.ai[0]/100,s.learn.decoy=e.ai[1]/100,s.learn.duct=e.ai[2]/100,n.evId=e.ev.length?e.ev[e.ev.length-1][0]:0,n.events=e.ev.slice(),n}};var Wx=["wss://broker.emqx.io:8084/mqtt","wss://broker.hivemq.com:8884/mqtt","wss://test.mosquitto.org:8081"],ha=class{constructor(t,e,i){this.base=t,this.onMsg=e,this.onChange=i||(()=>{}),this.id="p"+Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4);let n=typeof window<"u"&&window.MQ_SERVERS||Wx;this.conns=n.map((s,o)=>({url:s,i:o,c:null,up:!1,fails:0,timer:null,gen:0})),this.seq=0,this.seen=new Map,this.started=!1}get upCount(){let t=0;for(let e of this.conns)e.up&&t++;return t}get online(){return this.upCount>0}get total(){return this.conns.length}start(){if(!this.started){this.started=!0;for(let t of this.conns)this.connect(t);document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.reconnect()}),window.addEventListener("online",()=>this.reconnect()),window.addEventListener("pagehide",()=>this.bye())}}reconnect(){for(let t of this.conns)t.up||(t.fails=0,this.connect(t))}connect(t){if(clearTimeout(t.timer),typeof mqtt>"u"){t.timer=setTimeout(()=>this.connect(t),1500);return}let e=++t.gen,i=this.id,n,s=()=>{if(e!==t.gen)return;t.gen++;let o=t.up;t.up=!1;try{n.end(!0)}catch{}t.c=null,t.fails++,this.onChange(),t.timer=setTimeout(()=>this.connect(t),o?600:Math.min(15e3,800*Math.pow(1.6,t.fails)))};try{n=t.c=mqtt.connect(t.url,{clientId:"los_"+i+"_"+t.i+"_"+e,clean:!0,keepalive:15,reconnectPeriod:0,connectTimeout:7e3,will:{topic:this.base+"p/"+i,payload:"",qos:0,retain:!1}})}catch{return n={end(){}},s()}n.on("connect",()=>{e===t.gen&&n.subscribe(this.base+"#",{qos:0},o=>{if(e===t.gen){if(o)return s();t.up=!0,t.fails=0,this.onChange()}})}),n.on("message",(o,a)=>{e===t.gen&&this.receive(o,a)}),n.on("close",s),n.on("error",s),n.on("offline",s)}receive(t,e){if(t.slice(0,this.base.length)!==this.base)return;let i=t.slice(this.base.length),n=e.toString();if(!n){i.startsWith("p/")&&i.slice(2)!==this.id&&this.onMsg(i,null,i.slice(2));return}if(n.length>6e3)return;let s;try{s=JSON.parse(n)}catch{return}if(!s||typeof s!="object"||typeof s.f!="string"||typeof s.s!="number"||!s.d||typeof s.d!="object"||s.f===this.id)return;let o=s.f+"|"+i,a=this.seen.get(o);if(!(a!==void 0&&s.s<=a&&s.s>a-5e3)){this.seen.set(o,s.s);try{this.onMsg(i,s.d,s.f)}catch(l){console.error(l)}}}pub(t,e){if(!this.online)return;let i=JSON.stringify({f:this.id,s:++this.seq,d:e});for(let n of this.conns)if(n.up)try{n.c.publish(this.base+t,i,{qos:0})}catch{}}bye(){for(let t of this.conns)if(t.up)try{t.c.publish(this.base+"p/"+this.id,"",{qos:0})}catch{}}};var Xc=1/30,xs=class{constructor(t){this.L=t;let e=t.doors.length;this.phase=se.LOBBY,this.mid=-1,this.seed=-1,this.time=0,this.layout=null,this.tagBits=0,this.itemBits=0,this.doorWant=new Uint8Array(e),this.doorJam=new Uint8Array(e),this.doorOpen=new Float32Array(e),this.lift={state:0,timer:0,board:0},this.decoys=new Map,this.players=new Map,this.me=null,this.creature={has:!1,x:0,z:0,yaw:0,state:0,tgt:-1,lampsOut:!1,forcing:!1,rear:!1,vent:!1,climb:!1,speed:0,aux:-1},this.cbuf=[],this.lastEv=0,this.result=null,this.fresh=!0,this.snapT=0,this.ai=[15,100,45],this.zoneOff=0,this.sec=0,this.secDone=!1,this.stProg=new Float32Array(t.stations.length),this._zn=null,this._znKey=""}zonesNow(){if(!this.layout)return null;let t=this.sec>0||this.secDone,e=this.seed+":"+t;if(e!==this._znKey&&(this._znKey=e,this._zn=this.layout.zones.slice(),t))for(let i of this.L.sections[0].zones)this._zn[i]=2;return this._zn}tagCount(){let t=0;for(let e=0;e<Mt.TAGS;e++)this.tagBits&1<<e&&t++;return t}apply(t,e,i,n){(t.mid!==this.mid||t.sd!==this.seed)&&(this.mid=t.mid,this.seed=t.sd,this.layout=t.sd?ur(this.L,t.sd):null,this.cbuf.length=0,this.decoys.clear(),this.fresh=!0,n.onLayout&&n.onLayout(this.layout)),this.time=t.t/10,this.tagBits=t.tg,this.itemBits=t.it,this.result=t.rs||null,this.ai=t.ai;for(let a=0;a<this.doorWant.length;a++){let l=t.dr.charCodeAt(a)-48;this.doorWant[a]=l?1:0,this.doorJam[a]=l===2?1:0,this.fresh&&(this.doorOpen[a]=this.doorWant[a])}if(this.lift.state=t.lf[0],this.lift.timer=t.lf[1]/10,this.lift.board=t.lf[2]/10,this.zoneOff=t.zo|0,t.sc){this.sec=t.sc[0]|0,this.secDone=!!t.sc[1];for(let a=0;a<this.stProg.length;a++){let l=t.sc[2+a]|0;this.stProg[a]=l>=100?1:l/100}}this.players.clear();for(let a in t.pl){let l=t.pl[a];this.players.set(a,{id:a,slot:l[0],status:l[1],timer:l[2]/10,ack:l[3],decoys:l[4],aware:l[5]/100,tags:l[6],revProg:l[7]/100,hidden:l[8],name:String(l[9]),ready:!!l[10],wind:l[11]|0})}this.me=this.players.get(i)||null;let s=t.c;this.cbuf.push({t:e,x:s[0]/100,z:s[1]/100,yaw:s[2]/1e3,state:s[3],tgt:s[4],fl:s[5],speed:s[6]/100,aux:s[7]}),this.cbuf.length>24&&this.cbuf.shift();let o=new Set;for(let a of t.dc){o.add(a[0]);let l=this.decoys.get(a[0]);l||(l={x:a[1]/100,y:a[2]/100,z:a[3]/100},this.decoys.set(a[0],l)),l.tx=a[1]/100,l.ty=a[2]/100,l.tz=a[3]/100,l.state=a[4]}for(let a of[...this.decoys.keys()])o.has(a)||this.decoys.delete(a);if(t.ph!==this.phase){let a=this.phase;this.phase=t.ph,n.onPhase&&n.onPhase(a,t.ph)}for(let a of t.ev)a[0]>this.lastEv&&(this.lastEv=a[0],!this.fresh&&n.onEvent&&n.onEvent(a));this.fresh=!1,this.snapT=e}update(t,e,i){for(let d=0;d<this.doorOpen.length;d++)this.doorOpen[d]=Ki(this.doorOpen[d],this.doorWant[d],t*2.4);let n=Math.min(1,t*16);for(let d of this.decoys.values())d.x+=(d.tx-d.x)*n,d.y+=(d.ty-d.y)*n,d.z+=(d.tz-d.z)*n;let s=this.cbuf,o=this.creature;if(o.has=s.length>0,!o.has)return;let a=e-i,l=s.length-1;for(;l>0&&s[l-1].t>a;)l--;let c=s[l],h=s[Math.max(0,l-1)],u=c.t>h.t?Math.min(1,Math.max(0,(a-h.t)/(c.t-h.t))):1;o.x=$e(h.x,c.x,u),o.z=$e(h.z,c.z,u),o.yaw=_n(h.yaw,c.yaw,u);let f=u>.5?c:h;o.state=f.state,o.tgt=f.tgt,o.lampsOut=!!(f.fl&1),o.forcing=!!(f.fl&2),o.rear=!!(f.fl&4),o.vent=!!(f.fl&8),o.climb=!!(f.fl&16),o.speed=f.speed,o.aux=f.aux}},Ci=r=>typeof r=="number"&&Number.isFinite(r),qx=r=>Ci(r.x)&&Ci(r.z)&&Ci(r.y)&&typeof r.n=="string"&&(r.a===void 0||Array.isArray(r.a)),ua=class{constructor(t,e){this.L=t,this.hooks=e,this.mode="menu",this.name="Crew",this.id="local",this.world=null,this.rep=new xs(t),this.relay=null,this.peers=new Map,this.games=new Map,this.gid=null,this.epoch=0,this.hostId=null,this.joinedAt=0,this.lastSnap=null,this.lastSnapT=0,this.acts=[],this.actSeq=0,this.ready=!1,this.paused=!1,this.plain=!1,this.local={x:0,z:0,yaw:0,pitch:0,f:0,lk:-1,rv:-1,ws:-1},this.acc=0,this.lastT=performance.now(),this.sendT=0;let i=(location.hash||"").replace(/^#/,"").toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,12);this.private=!!i,this.code=i||"public",this.base="los/"+Mt.PROTO+"/"+this.code+"/"}get hosting(){return this.mode==="solo"||this.mode==="host"}get online(){return!!(this.relay&&this.relay.online)}connect(){this.relay||(this.relay=new ha(this.base,(t,e,i)=>this.onMsg(t,e,i),()=>{this.hooks.onNet&&this.hooks.onNet()}),this.id=this.relay.id,this.relay.start())}solo(){this.quit(),this.mode="solo",this.world=new fr(this.L,Math.random()*2**31|0),this.rep=new xs(this.L),this.world.addPlayer(this.id,this.name,!0),this.acts=[],this.acc=0,this.paused=!1,this.world.startMatch(this.newSeed())}newSeed(){let t=(Math.random()*2147483648|0)+1;return this.plain?-t:t}host(){this.quit(),this.mode="host",this.gid=Math.random().toString(36).slice(2,8),this.epoch=1,this.hostId=this.id,this.world=new fr(this.L,Math.random()*2**31|0),this.rep=new xs(this.L),this.world.addPlayer(this.id,this.name,!0),this.acts=[],this.acc=0,this.paused=!1}join(t){let e=this.games.get(t);return e?(this.quit(),this.mode="client",this.gid=t,this.hostId=e.h,this.epoch=e.e,this.rep=new xs(this.L),this.joinedAt=performance.now(),this.lastSnap=null,this.lastSnapT=this.joinedAt,this.acts=[],this.ready=!1,this.sendT=0,!0):!1}start(){this.hosting&&this.world.phase!==se.PLAY&&this.world.startMatch(this.newSeed())}quit(){this.world=null,this.gid=null,this.hostId=null,this.lastSnap=null,this.paused=!1}leave(){let t=this.mode;this.quit(),this.mode="menu",this.rep=new xs(this.L),t!=="solo"&&this.relay&&(this.sendT=0,this.publish())}act(t,...e){this.acts.push([++this.actSeq,t,...e]),this.acts.length>12&&this.acts.shift(),this.mode==="client"&&(this.sendT=0)}joinable(){let t=null;for(let[e,i]of this.games)i.n<Mt.MAX_PLAYERS&&(!t||i.t>t.t)&&(t=Object.assign({gid:e},i));return t}tick(t){let e=Math.min(.25,Math.max(0,(t-this.lastT)/1e3));if(this.lastT=t,this.hosting&&this.world){if(!this.paused){this.acc+=e;let i=0;for(;this.acc>=Xc&&i<6;)this.world.input(this.id,{x:this.local.x,z:this.local.z,yaw:this.local.yaw,pitch:this.local.pitch,f:this.local.f,lk:this.local.lk,rv:this.local.rv,ws:this.local.ws,acts:this.acts,name:this.name,rd:!0}),this.world.step(Xc),this.acc-=Xc,i++;i===6&&(this.acc=0);let n=this.world.players.get(this.id);n&&this.acts.length&&(this.acts=this.acts.filter(s=>s[0]>n.ack)),i&&this.rep.apply(this.world.snapshot(),t,this.id,this.hooks)}}else this.mode==="client"&&this.rep.me&&this.acts.length&&(this.acts=this.acts.filter(i=>i[0]>this.rep.me.ack));if(this.relay){this.sendT-=e,this.sendT<=0&&(this.sendT=this.mode==="menu"||this.mode==="solo"?1:1/Mt.net.hz,this.publish());for(let[i,n]of this.peers)t-n.t>Mt.net.stale&&this.dropPeer(i);for(let[i,n]of this.games)t-n.t>4e3&&(this.games.delete(i),this.hooks.onNet&&this.hooks.onNet());this.mode==="client"&&this.watchHost(t)}this.rep.update(e,t,this.hosting?45:Mt.net.interp)}publish(){if(!this.relay||!this.relay.online)return;let t=this.local,e=this.mode==="host"||this.mode==="client";if(this.relay.pub("p/"+this.id,{n:this.name,g:e?this.gid:null,x:Math.round(t.x*100),z:Math.round(t.z*100),y:Math.round(t.yaw*1e3),p:Math.round(t.pitch*1e3),f:t.f,lk:t.lk,rv:t.rv,ws:t.ws,rd:this.ready?1:0,a:this.mode==="client"?this.acts.slice(0,8):[]}),this.mode==="host"&&this.world){let i=this.world.snapshot();i.g=this.gid,i.h=this.id,i.e=this.epoch,this.relay.pub("g/"+this.gid,i)}}onMsg(t,e,i){let n=performance.now();if(t.startsWith("p/")){let s=t.slice(2);if(e===null)return this.dropPeer(s);if(s!==i||s===this.id||!qx(e))return;let o=this.peers.get(s),a=!o;if(o||(o={buf:[]},this.peers.set(s,o)),o.d=e,o.t=n,o.buf.push({t:n,x:e.x/100,z:e.z/100,yaw:e.y/1e3,pitch:(e.p||0)/1e3}),o.buf.length>14&&o.buf.shift(),a&&this.hooks.onNet&&this.hooks.onNet(),this.mode==="host"&&this.world)if(e.g===this.gid){if(!this.world.players.has(s)&&!this.world.addPlayer(s,e.n))return;let l=this.world.players.get(s),c=l.ack;this.world.input(s,{x:e.x/100,z:e.z/100,yaw:e.y/1e3,pitch:(e.p||0)/1e3,f:e.f|0,lk:e.lk,rv:e.rv,ws:e.ws,acts:e.a,name:e.n,rd:!!e.rd}),l.ack!==c&&(this.sendT=Math.min(this.sendT,.02))}else this.world.players.has(s)&&this.world.removePlayer(s);return}if(t.startsWith("g/")){let s=t.slice(2);if(!e||e.g!==s||e.h!==i||!this.okSnap(e))return;let o=this.games.has(s);if(this.games.set(s,{h:e.h,e:e.e,ph:e.ph,n:Object.keys(e.pl).length,t:n,host:e.pl[e.h]?String(e.pl[e.h][9]):"someone"}),!o&&this.hooks.onNet&&this.hooks.onNet(),s!==this.gid)return;if(this.mode==="host")if(e.e>this.epoch||e.e===this.epoch&&e.h<this.id)this.mode="client",this.world=null,this.joinedAt=n;else return;if(this.mode!=="client"||e.e<this.epoch||e.e===this.epoch&&this.lastSnap&&e.h!==this.hostId&&e.h>this.hostId)return;this.epoch=e.e,this.hostId=e.h,this.lastSnap=e,this.lastSnapT=n,this.rep.apply(e,n,this.id,this.hooks)}}okSnap(t){return Ci(t.e)&&Ci(t.ph)&&Ci(t.mid)&&Ci(t.sd)&&Ci(t.t)&&Array.isArray(t.c)&&t.c.length>=8&&t.c.every(Ci)&&typeof t.dr=="string"&&t.dr.length===this.L.doors.length&&Ci(t.tg)&&Ci(t.it)&&(t.zo===void 0||Ci(t.zo))&&Array.isArray(t.lf)&&t.lf.length>=3&&Array.isArray(t.dc)&&Array.isArray(t.ev)&&Array.isArray(t.ai)&&t.pl&&typeof t.pl=="object"&&Object.keys(t.pl).length<=Mt.MAX_PLAYERS&&Object.values(t.pl).every(e=>Array.isArray(e)&&e.length>=10)}dropPeer(t){this.peers.delete(t)&&(this.mode==="host"&&this.world&&this.world.players.has(t)&&this.world.removePlayer(t),this.hooks.onNet&&this.hooks.onNet())}watchHost(t){let e=a=>{this.hooks.onNotice&&this.hooks.onNotice(a)};if(!this.lastSnap){t-this.joinedAt>7e3&&(e("That crew did not answer."),this.leave(),this.hooks.onKicked&&this.hooks.onKicked());return}if(!this.rep.me){t-this.joinedAt>6e3&&(e("That crew is full."),this.leave(),this.hooks.onKicked&&this.hooks.onKicked());return}let i=t-this.lastSnapT,n=this.peers.get(this.hostId),s=!n||n.d.g!==this.gid;if(i<1500||i<4e3&&!s)return;if([...this.rep.players.keys()].filter(a=>a!==this.hostId&&(a===this.id||this.peers.has(a)&&this.peers.get(a).d.g===this.gid)).sort()[0]===this.id){let a=this.lastSnap,l=fr.restore(this.L,a,(t|0)+7);l.players.delete(this.hostId);let c=l.players.get(this.id);if(!c){this.leave();return}c.local=!0,this.world=l,this.mode="host",this.epoch=a.e+1,this.hostId=this.id,this.acc=0,l.phase===se.PLAY&&l.event("leave",a.pl[a.h]?a.pl[a.h][0]:0),e("The crew leader dropped out. You are running the match now.")}else i>15e3&&(e("Lost contact with the crew."),this.leave(),this.hooks.onKicked&&this.hooks.onKicked())}others(t,e){e.length=0;let i=t-Mt.net.interp;for(let[n,s]of this.rep.players){if(n===this.id)continue;let o=this.peers.get(n);if(!o||!o.buf.length)continue;let a=o.buf,l=a.length-1;for(;l>0&&a[l-1].t>i;)l--;let c=a[l],h=a[Math.max(0,l-1)],u=c.t>h.t?Math.min(1,Math.max(0,(i-h.t)/(c.t-h.t))):1;e.push({id:n,slot:s.slot,name:s.name,status:s.status,hidden:s.hidden,f:o.d.f|0,x:$e(h.x,c.x,u),z:$e(h.z,c.z,u),yaw:_n(h.yaw,c.yaw,u),pitch:$e(h.pitch,c.pitch,u)})}return e}hereCount(){return this.peers.size+1}};var xf=[["use","USE",.865,.6,"hold"],["run","RUN",.755,.8,"run"],["crouch","CROUCH",.9,.86,"tap"],["throw","THROW",.745,.52,"tap"],["scan","SCAN",.83,.32,"toggle"],["lamp","LAMP",.94,.34,"tap"],["map","MAP",.62,.09,"hold"],["pause","II",.38,.09,"pause"]],mf={map:.7,pause:.7},gf=()=>({size:1,opacity:.55,look:1,flip:!1,layout:Object.fromEntries(xf.map(([r,,t,e])=>[r,[t,e,1]]))}),fa=class{constructor(t,e,i){this.input=t,this.settings=e,this.on=i;let n=gf(),s=e.touch||{};e.touch=Object.assign({},n,s),e.touch.layout=Object.assign({},n.layout,s.layout||{}),this.root=document.getElementById("touch"),this.base=document.getElementById("t-base"),this.knob=document.getElementById("t-knob"),this.bar=document.getElementById("t-bar"),this.zone=document.getElementById("t-zone"),this.ptrs=new Map,this.editing=!1,this.sel=null,this.running=!1,this.enabled=!1,this.shown=!1,this.stickR=40,this.btns={};for(let[o,a,,,l]of xf){let c=document.createElement("button");c.type="button",c.className="t-btn",c.dataset.id=o,c.textContent=a,c.tabIndex=-1,c.setAttribute("aria-label",o==="pause"?"Pause":a),this.root.appendChild(c),this.btns[o]={el:c,kind:l}}this.root.addEventListener("pointerdown",o=>this.down(o),{passive:!1}),this.root.addEventListener("touchstart",o=>{this.inBar(o.target)||o.preventDefault()},{passive:!1}),window.addEventListener("pointermove",o=>this.moveP(o),{passive:!1}),window.addEventListener("pointerup",o=>this.up(o)),window.addEventListener("pointercancel",o=>this.up(o)),this.bar.addEventListener("click",o=>{let a=o.target.dataset&&o.target.dataset.k;a&&this.editCmd(a)}),window.addEventListener("resize",()=>this.layout()),this.layout()}inBar(t){return!!(t&&t.closest&&t.closest("#t-bar"))}setEnabled(t){this.enabled=t,document.body.classList.toggle("touch",t)}show(t){t=!!t,t!==this.shown&&(this.shown=t,this.root.hidden=!t,t||this.release())}release(){this.ptrs.clear(),this.input.touch.clear(),this.input.move.x=this.input.move.y=0,this.base.hidden=!0,this.running=!1;for(let t of Object.values(this.btns))t.el.classList.remove("on","lit");this.bar.classList.remove("ghost")}layout(){let t=this.settings.touch,e=window.innerWidth,i=window.innerHeight,n=Math.min(e,i)*.155;for(let[o,a]of Object.entries(this.btns)){let[l,c,h]=t.layout[o],u=Math.round(Math.max(36,n*t.size*h*(mf[o]||1)));Object.assign(a.el.style,{left:Math.round(l*e-u/2)+"px",top:Math.round(c*i-u/2)+"px",width:u+"px",height:u+"px",fontSize:Math.max(9,Math.round(u*.2))+"px",opacity:this.editing?.95:t.opacity}),a.el.classList.toggle("sel",this.editing&&this.sel===o)}this.stickR=n*.75*t.size,Object.assign(this.base.style,{width:this.stickR*2+"px",height:this.stickR*2+"px",opacity:Math.min(1,t.opacity+.1)}),this.knob.style.width=this.knob.style.height=this.stickR*.9+"px",this.zone.style.left=t.flip?"58%":"0";let s=document.getElementById("t-lookv");s&&(s.textContent="Look "+t.look.toFixed(1)+"x")}setLive(t){this.btns.use.el.classList.toggle("lit",!!t)}setHiding(t){if(this.hiding===t)return;this.hiding=t,this.running=!1,this.input.hold("run",!1);let e=this.btns.run.el;e.classList.remove("lit"),e.textContent=t?"BREATH":"RUN"}setToggle(t,e){this.input.touch.has(t)!==e&&(this.input.hold(t,e),this.btns[t].el.classList.toggle("lit",e))}btnOf(t){for(;t&&t!==this.root;){if(t.dataset&&t.dataset.id)return t.dataset.id;t=t.parentElement}return null}centre(t){let e=this.btns[t].el.getBoundingClientRect();return[e.left+e.width/2,e.top+e.height/2]}down(t){if(this.inBar(t.target)||t.pointerType==="mouse"&&!this.editing)return;t.preventDefault();let e=this.btnOf(t.target);if(this.editing){if(!e){this.sel=null,this.layout();return}let[o,a]=this.centre(e);this.sel=e,this.ptrs.set(t.pointerId,{kind:"drag",id:e,dx:t.clientX-o,dy:t.clientY-a}),this.bar.classList.add("ghost"),this.layout();return}if(e){let o=this.btns[e];o.el.classList.add("on"),this.ptrs.set(t.pointerId,{kind:"btn",id:e,x:t.clientX,y:t.clientY,far:0}),o.kind==="pause"?this.on.pause():o.kind==="run"?this.hiding?this.input.hold("run",!0):(this.running=!this.running,o.el.classList.toggle("lit",this.running)):o.kind==="toggle"?this.setToggle(e,!this.input.touch.has(e)):o.kind==="hold"?this.input.hold(e,!0):this.input.press(e);return}let i=window.innerWidth;(this.settings.touch.flip?t.clientX>i*.58:t.clientX<i*.42)&&![...this.ptrs.values()].some(o=>o.kind==="stick")?(this.ptrs.set(t.pointerId,{kind:"stick",x0:t.clientX,y0:t.clientY}),this.base.hidden=!1,this.base.style.left=t.clientX-this.stickR+"px",this.base.style.top=t.clientY-this.stickR+"px",this.knob.style.transform="translate(-50%, -50%)"):this.ptrs.set(t.pointerId,{kind:"look",x:t.clientX,y:t.clientY})}moveP(t){let e=this.ptrs.get(t.pointerId);if(e){if(t.preventDefault(),e.kind==="stick"){let i=t.clientX-e.x0,n=t.clientY-e.y0,s=Math.hypot(i,n),o=this.stickR;s>o&&(i*=o/s,n*=o/s);let a=.12,l=Math.min(1,s/o),c=l<a?0:(l-a)/(1-a)/(l||1);this.input.move.x=i/o*c,this.input.move.y=-n/o*c,this.knob.style.transform=`translate(calc(-50% + ${i.toFixed(1)}px), calc(-50% + ${n.toFixed(1)}px))`}else if(e.kind==="look"||e.kind==="btn"){let i=2.1*this.settings.touch.look,n=t.clientX-e.x,s=t.clientY-e.y;if(e.x=t.clientX,e.y=t.clientY,e.kind==="btn"&&(e.far+=Math.hypot(n,s),e.far<10||this.btns[e.id].kind==="pause"))return;this.input.look.x+=n*i,this.input.look.y+=s*i}else if(e.kind==="drag"){let i=window.innerWidth,n=window.innerHeight,s=this.settings.touch.layout[e.id];s[0]=Math.min(.97,Math.max(.03,(t.clientX-e.dx)/i)),s[1]=Math.min(.95,Math.max(.05,(t.clientY-e.dy)/n)),this.layout()}}}up(t){let e=this.ptrs.get(t.pointerId);if(e)if(this.ptrs.delete(t.pointerId),e.kind==="stick")this.input.move.x=this.input.move.y=0,this.base.hidden=!0,this.running&&(this.running=!1,this.btns.run.el.classList.remove("lit"));else if(e.kind==="btn"){let i=this.btns[e.id];i.el.classList.remove("on"),(i.kind==="hold"||i.kind==="run")&&this.input.hold(e.id,!1)}else e.kind==="drag"&&(this.bar.classList.remove("ghost"),this.on.edited())}edit(t){this.release(),this.editing=t,this.sel=null,this.bar.hidden=!t,this.zone.hidden=!t,this.root.classList.toggle("editing",t),t&&(this.shown=!0,this.root.hidden=!1),this.layout()}editCmd(t){let e=this.settings.touch;if(t==="done"){this.edit(!1),this.on.edited(),this.on.editDone&&this.on.editDone();return}if(t==="s+"||t==="s-"){let i=t==="s+"?1.12:.8928571428571428;this.sel?e.layout[this.sel][2]=Math.min(2,Math.max(.6,e.layout[this.sel][2]*i)):e.size=Math.min(1.8,Math.max(.6,e.size*i))}if(t==="o+"&&(e.opacity=Math.min(1,e.opacity+.1)),t==="o-"&&(e.opacity=Math.max(.15,e.opacity-.1)),t==="l+"&&(e.look=Math.min(3,e.look*1.15)),t==="l-"&&(e.look=Math.max(.3,e.look/1.15)),t==="flip"){e.flip=!e.flip;for(let i in e.layout)mf[i]||(e.layout[i][0]=1-e.layout[i][0])}t==="reset"&&(Object.assign(e,gf()),this.sel=null),this.layout(),this.on.edited()}};var da=["is anyone still on this channel","it stopped tapping. That is worse","do not run. Do not run","watch its lights. Watch the colour","nineteen days","I can hear you walking","stay out of the lockers. It knows","the pod only holds six","it is standing right there with its lights out","it is in the ceiling","behind you","we should never have brought that ore aboard","turn your lamp off","it only looks like it has gone"],pa=class{constructor(){let t=Ue.length;this.lv=new Float32Array(t).fill(1),this.want=new Float32Array(t).fill(1),this.stut=new Float32Array(t),this.failT=new Float32Array(t),this.failV=new Float32Array(t).fill(1),this.all=1,this.dipT=0,this.dipLen=1,this.nearT=0,this.nearV=1,this.lamp=1,this.lampT=1,this.lampV=1}reset(t){for(let e=0;e<this.lv.length;e++)this.lv[e]=this.want[e]=t&&t[e]===ge.DEAD?.07:1;this.stut.fill(0),this.failV.fill(1),this.all=1,this.dipT=0,this.nearV=1,this.lamp=this.lampV=1}dip(t){this.dipT=Math.max(this.dipT,t),this.dipLen=this.dipT}update(t,e,i,n,s){for(let l=0;l<this.lv.length;l++){let c=!!(i&64<<l),h=!!e&&(e[l]===ge.DEAD&&!c||!!(i&1<<l)||!!(i&32)),u=h?.07:1;u!==this.want[l]&&(this.want[l]=u,this.stut[l]=u<1?.5:.75);let f=u;if(e&&e[l]===ge.FAILING&&!h&&!c){if(this.failT[l]-=t,this.failT[l]<=0)if(this.failV[l]>.8){let d=Math.random();this.failV[l]=d<.45&&!s?.1:.45,this.failT[l]=d<.07?1+Math.random()*1.6:.07+Math.random()*.25}else this.failV[l]=.88+Math.random()*.12,this.failT[l]=.4+Math.random()*2.6;f=this.failV[l]}if(s&&(this.stut[l]=0),this.stut[l]>0){let d=this.stut[l];this.stut[l]-=t,f=u<1?d>.42?.07:d>.28?.8:.07:d>.62?.9:d>.42?.07:d>.3?.9:d>.14?.3:1}this.lv[l]+=(f-this.lv[l])*Math.min(1,t*(s?3:30))}let o=1;if(n>.02?(this.nearT-=t,this.nearT<=0&&(this.nearV>=1&&Math.random()<.3+.6*n?(this.nearV=1-n*(s?.3:.4+Math.random()*.45),this.nearT=.06+Math.random()*.12):(this.nearV=1,this.nearT=.42+Math.random()*(1.6-n))),o*=this.nearV):this.nearV=1,this.dipT>0){let l=1-this.dipT/this.dipLen;this.dipT-=t,o*=s?.55+.45*l:l<.12?.15:l<.3?.85:l<.55?.2:.2+.8*(l-.55)/.45}this.all+=(o-this.all)*Math.min(1,t*(s?6:35));let a=ce((n-.55)/.45);a>0?(this.lampT-=t,this.lampT<=0&&(this.lampV>=1&&Math.random()<.5?(this.lampV=s?.6:.12,this.lampT=.05+Math.random()*.1):(this.lampV=1,this.lampT=.4+Math.random()*(1.5-a)))):this.lampV=1,this.lamp+=(this.lampV-this.lamp)*Math.min(1,t*40)}},ma=class{constructor(t,e,i){this.s3=t,this.sound=e,this.L=i,this.fx={static:0,shake:0,dip:0},this.onRadio=null,this.fig=this.makeFigure(),this.ph=null,this.ductMouths=[];for(let n of i.ducts)for(let s of n.exits)this.ductMouths.push({x:i.cx(s),z:i.cz(s)});this._c=new Jt,this.reset(),this.ambT=5}reset(){this.ambT=9+Math.random()*8,this.radioT=50+Math.random()*50,this.startleT=75+Math.random()*70,this.phantomT=70+Math.random()*80,this.phantoms=0,this.lastLine=-1,this.hide()}makeFigure(){let t=this.s3,e=new ve,i=t.ambient({color:3354667,roughness:.9,metalness:0}),n=new Se({color:0}),s=new yi(1,1,1),o=new ai(1,12,9),a=new ii(1,1,1,9),l=(c,h,u,f,d,g,x,m,p=0)=>{let y=new qt(c,h);return y.position.set(u,f,d),y.scale.set(g,x,m),y.rotation.z=p,e.add(y),y};return l(a,i,0,1.08,0,.22,.62,.17),l(s,i,0,1.12,.2,.3,.46,.16),l(o,i,.02,1.57,-.03,.19,.2,.2,.16),l(o,n,.02,1.58,-.12,.15,.11,.13,.16),l(s,i,-.1,.39,0,.13,.78,.15),l(s,i,.1,.39,0,.13,.78,.15),l(s,i,-.3,1.04,0,.09,.66,.11,.05),l(s,i,.3,1.04,0,.09,.66,.11,-.05),e.visible=!1,t.scene.add(e),{g:e,suit:i}}hide(){this.ph=null,this.fig.g.visible=!1}update(t,e){let i=this.fx;if(i.static=Math.max(0,i.static-t*3.2),i.shake=0,i.dip=0,!!this.sound.ctx){if(this.ambT-=t,this.ambT<=0&&(this.ambT=10+Math.random()*20,this.ambient(e)),!e.playing||!e.alive){this.ph&&this.hide();return}if(this.radioT-=t,this.radioT<=0&&e.calm){this.radioT=70+Math.random()*90;let n=Math.floor(Math.random()*da.length);n===this.lastLine&&(n=(n+1)%da.length),this.lastLine=n,this.sound.garble(1.2+da[n].length*.035),this.onRadio&&this.onRadio(da[n])}if(!e.scares){this.ph&&this.hide();return}this.startleT-=t,this.startleT<=0&&e.calm&&e.hidden<0&&(this.startleT=this.startle(e)?85+Math.random()*120:3),this.ph?this.stepPhantom(t,e):(this.phantomT-=t,this.phantomT<=0&&e.calm&&e.hidden<0&&this.phantoms<5&&(this.phantomT=this.spawnPhantom(e)?100+Math.random()*140:2.5))}}ambient(t){let e=this.L,i=this.sound,n=Math.random()*6.283,s=14+Math.random()*22,o=t.cam.x+Math.cos(n)*s,a=t.cam.z+Math.sin(n)*s,l=e.cellOf(t.cam.x,t.cam.z),c=t.playing&&e.ice[l],h=Math.random();if(c){h<.45?i.iceCrack(o,a):h<.75?i.drip(t.cam.x+Math.cos(n)*5,t.cam.z+Math.sin(n)*5):i.howl(o,a);return}h<.36?i.creak(o,a):h<.54?i.knock(o,a):h<.68?i.howl(this.s3.pit.x,this.s3.pit.z):h<.8?i.iceCrack(o,a):h<.9?i.drip(t.cam.x+Math.cos(n)*6,t.cam.z+Math.sin(n)*6):i.creak(o,a)}startle(t){let e=this.L,i=this.sound,n=[],s=(a,l)=>Math.hypot(a-t.cam.x,l-t.cam.z);for(let a of e.lockers)if(s(a.x,a.z)<2.6&&!t.others.some(l=>l.hidden===a.id)){n.push(()=>{i.thump(a.fx,a.fz),this.fx.shake=.35});break}for(let a of this.ductMouths)if(s(a.x,a.z)<4.5){n.push(()=>i.ductScuttle(a.x,a.z));break}let o=e.cellOf(t.cam.x,t.cam.z);return e.lightLevel[o]*this.s3.pow[e.zoneOf[o]]>.3&&n.push(()=>{i.pop(t.cam.x+t.fx*1.5,t.cam.z+t.fz*1.5),this.fx.dip=.9}),Math.random()<.35&&n.push(()=>i.breath(t.cam.x-t.fx*.9,t.cam.z-t.fz*.9)),n.length?(n[Math.floor(Math.random()*n.length)](),!0):!1}spawnPhantom(t){let e=this.L,i=t.rep.doorOpen;for(let n=0;n<16;n++){let s=t.yaw+(Math.random()-.5)*1,o=10+Math.random()*11,a=t.cam.x-Math.sin(s)*o,l=t.cam.z-Math.cos(s)*o,c=e.cellOf(a,l);if(!(c>=0)||!e.walkC[c]||e.doorAt[c]>=0)continue;let h=e.cx(c),u=e.cz(c);if(!di(e,i,t.cam.x,t.cam.z,1.6,h,u,1.6)||t.others.some(g=>Math.hypot(g.x-h,g.z-u)<7)||e.lightLevel[c]*this.s3.pow[e.zoneOf[c]]<.14&&!(t.lampOn&&o<19))continue;this.ph={x:h,z:u,t:0,life:3+Math.random()*4,stare:0},this.phantoms++;let d=this.fig.g;return d.position.set(h,0,u),d.rotation.y=Ze(t.cam.x-h,t.cam.z-u)+(Math.random()<.3?Math.PI:0),this.s3.ambientAt(h,1.2,u,this._c),this.fig.suit.userData.amb.value.copy(this._c),d.visible=!0,!0}return!1}stepPhantom(t,e){let i=this.ph,n=i.x-e.cam.x,s=i.z-e.cam.z,o=Math.hypot(n,s)||1;i.t+=t;let a=(n*e.fx+s*e.fz)/o;a>.985&&(i.stare+=t);let l=di(this.L,e.rep.doorOpen,e.cam.x,e.cam.z,1.6,i.x,i.z,1.6);if(!e.calm||!l||e.hidden>=0)return this.hide();if(i.stare>.9||o<8.5){this.hide(),this.fx.static=.6,this.sound.vanish();return}i.t>i.life&&a<.8?this.hide():i.t>i.life+4&&(this.hide(),this.fx.static=.35)}},ga=class{constructor(t,e){this.s3=t,this.sound=e,this.spots=[],this.lit=0,this.light=new xn(12375807,0,15,1.5),t.scene.add(this.light),this.flash=t.glowSprite(14083839,.8),this.flash.visible=!1,t.scene.add(this.flash),this.bits=[];for(let i=0;i<9;i++){let n=t.glowSprite(16765578,.07);n.visible=!1,t.scene.add(n),this.bits.push({sp:n,vx:0,vy:0,vz:0,t:0})}}setLayout(t){let e=Ai(((t.seed|0)^30625)>>>0),i=this.s3.wallFaces.filter(o=>o.hall),n=this.s3.L.T;this.spots=[];let s=[[0,-1],[0,1],[-1,0],[1,0]];for(let o=0;o<8&&i.length;o++){let a=i[Math.floor(e()*i.length)],[l,c]=s[a.k];this.spots.push({x:(a.cx+.5+l*.44)*n,y:2.62,z:(a.cz+.5+c*.44)*n,nx:-l,nz:-c,t:3+e()*14})}}update(t,e,i,n){this.lit>0&&(this.lit-=t,this.lit<=0&&(this.light.intensity=0,this.flash.visible=!1));for(let s of this.bits)s.t<=0||(s.t-=t,s.vy-=9*t,s.sp.position.x+=s.vx*t,s.sp.position.y+=s.vy*t,s.sp.position.z+=s.vz*t,s.sp.material.opacity=ce(s.t*2.5),(s.t<=0||s.sp.position.y<.03)&&(s.t=0,s.sp.visible=!1));for(let s of this.spots){if(s.t-=t,s.t>0||(s.t=4+Math.random()*17,Math.hypot(s.x-e.x,s.z-e.z)>36))continue;this.flash.position.set(s.x,s.y,s.z),this.flash.visible=!0,this.light.position.set(s.x+s.nx*.3,s.y-.2,s.z+s.nz*.3),this.light.intensity=i?0:30,this.lit=.07;let o=4+Math.floor(Math.random()*5);for(let a of this.bits)a.t>0||o--<=0||(a.t=.5+Math.random()*.5,a.sp.visible=!0,a.sp.position.set(s.x,s.y,s.z),a.vx=s.nx*(.5+Math.random()*1.6)+(Math.random()-.5),a.vz=s.nz*(.5+Math.random()*1.6)+(Math.random()-.5),a.vy=Math.random()*1.6);this.sound.spark(s.x,s.z,n(s.x,s.z))}}};var Sf="18 Nov 22:13 432db11",xr=new URLSearchParams(location.search),Wr=xr.has("nolock"),jt={name:"",sens:1,vol:.8,bri:1,q:"high",auto:!0,touchMode:"auto",invertY:!1,holdCrouch:!1,scares:!0},lh=null;try{lh=localStorage.getItem("los-settings")}catch{}try{Object.assign(jt,JSON.parse(lh||"{}"))}catch{}var Qi=()=>{try{localStorage.setItem("los-settings",JSON.stringify(jt))}catch{}};xr.get("q")&&(jt.q=xr.get("q"),jt.auto=!1);var Yt=new ra(jt),Pi=document.getElementById("view"),Xx=r=>!!(window.matchMedia&&window.matchMedia(r).matches),Yx=()=>window.matchMedia?Xx("(pointer: coarse)"):"ontouchstart"in window,$x=!Pi.requestPointerLock,ch=!1,Tf="",Ef=()=>xr.has("touch")||jt.touchMode==="on"||jt.touchMode==="auto"&&(Yx()||$x||ch);!lh&&Ef()&&!xr.get("q")&&(jt.q="medium");var $t=Qu(),Ii=new ea(Pi);Ii.setQuality(jt.q);var We=new ta($t),ys=new ia(We),Af=new na(We),Bt=new Hr;Bt.vol=jt.vol;var at=new sa($t),Ft=new Xe(72,1,.06,95);Ft.rotation.order="YXZ";var qe=new sr(14674687,0,38,.5,.6,1.6);qe.shadow.mapSize.set(1024,1024);qe.shadow.camera.near=.25;qe.shadow.camera.far=38;qe.shadow.bias=-.002;qe.shadow.normalBias=.03;We.scene.add(qe);We.scene.add(qe.target);Ii.renderer.shadowMap.autoUpdate=!1;var hh=()=>{Ii.setQuality(jt.q),qe.castShadow=Ii.q.shadow>0,Ii.q.shadow&&(qe.shadow.mapSize.set(Ii.q.shadow,Ii.q.shadow),qe.shadow.map&&(qe.shadow.map.dispose(),qe.shadow.map=null))};hh();var tn=!1,dr=null,Yc=!1,$c=1,xa=0,Zc=0,wa=0,Vr=0,Gi=!1,Kc=0,Jc=14,jc=0,ya=0,Qc=dt.ALIVE,va=0,uh=!1,Sa=0,th=2,yf=-1,_a=1.3,vf=0,eh=0,Tn={kind:0,t:9},nh=new Float32Array($t.stations.length),Ma=new Float32Array($t.stations.length),ji={},De=-1,Gr=0,sh=!1,ih=0,_f=new Map,Mf=new Map,vi=[],ba=new U,qn={x:0,y:0,z:0},Ta={x:30,z:19},Pt=new ua($t,{onLayout:r=>{r&&(We.setLayout(r),fh.setLayout(r))},onPhase:(r,t)=>{t===se.PLAY&&(wa=0,Vr=0,uh=!1,dr=null,Nt.roomName="",Nt.banner($t.sections[0].name.toUpperCase()+" \xB7 restart the reactor",5,"title"),sh=!1,nh.fill(0),Tn.kind=0,De=-1,Gr=0,bi.reset(),Mi.reset(Pt.rep.zonesNow())),t===se.END&&If(),t===se.LOBBY&&r!==se.LOBBY&&(at.mid=-1,Pt.mode==="solo"&&Cf())},onEvent:r=>Kx(r),onNotice:r=>Nt.notice(r),onKicked:()=>{at.mid=-1},onNet:()=>{Sa=0}});Pt.name=jt.name||"Crew";Pt.plain=xr.has("plain");var bi=new ma(We,Bt,$t),Mi=new pa,fh=new ga(We,Bt),Je={runs:0,out:0,best:0,kinds:{}};try{Object.assign(Je,JSON.parse(localStorage.getItem("los-record")||"{}"))}catch{}var Rf=()=>{let r=Object.keys(Je.kinds||{}).length;return Je.runs?`Runs ${Je.runs} \xB7 escapes ${Je.out}${Je.best?" \xB7 best "+Math.floor(Je.best/60)+":"+String(Je.best%60).padStart(2,"0"):""} \xB7 kinds of creature met ${r} of ${Vi.length}`:""},pr=(r,t)=>{jt.tips||(jt.tips={}),!jt.tips[r]&&(jt.tips[r]=1,Qi(),Nt.feed(t,"tip",11))};bi.onRadio=r=>Nt.feed("Radio: \u201C\u2026"+r+"\u2026\u201D","radio");var Xn=null;async function dh(r){try{if(r&&!Xn&&navigator.wakeLock&&document.visibilityState==="visible")Xn=await navigator.wakeLock.request("screen"),Xn.addEventListener("release",()=>{Xn=null});else if(!r&&Xn){let t=Xn;Xn=null,await t.release()}}catch{Xn=null}}var $n=r=>{if(Te&&navigator.vibrate)try{navigator.vibrate(r)}catch{}};function rh(){Tf!=="touch"||jt.touchMode!=="auto"||Te||(ch=!0,Ra(),tn=!1,Nt.notice("Touch controls turned on. Controls has the setting."))}var mr=()=>{if(Bt.cheap=Te,Bt.start(),tn=!1,Yt.clear(),Te){let r=document.documentElement;dh(!0);try{if(!document.fullscreenElement&&r.requestFullscreen){let t=r.requestFullscreen({navigationUI:"hide"});t&&t.then&&t.then(()=>{try{let e=screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape");e&&e.catch&&e.catch(()=>{})}catch{}},()=>{})}}catch{}return}if(!Wr&&document.pointerLockElement!==Pi&&Pi.requestPointerLock)try{let r=Pi.requestPointerLock();r&&r.catch&&r.catch(rh)}catch{rh()}},ph=()=>{document.pointerLockElement===Pi&&document.exitPointerLock(),Yt.clear()};function Cf(){Pt.leave(),at.mid=-1,Af.clear(),ys.setVisible(!1),ph(),tn=!1,dh(!1)}var Nt=new oa($t,{solo:()=>{Pt.name=jt.name||"Crew",Pt.solo(),mr()},host:()=>{Bt.start(),Pt.name=jt.name||"Crew",Pt.host()},join:()=>{Bt.start();let r=Pt.joinable();r&&(Pt.name=jt.name||"Crew",Pt.join(r.gid)&&r.ph===se.PLAY&&mr())},start:()=>{Pt.start(),mr()},ready:()=>{Pt.ready=!Pt.ready,Bt.ui()},leave:()=>Cf(),resume:()=>mr(),again:()=>{Pt.mode==="solo"&&(Pt.solo(),mr())},name:r=>{jt.name=r.trim().slice(0,14),Pt.name=jt.name||"Crew",Qi()},setting:(r,t)=>{jt[r]=t,r==="q"&&(jt.auto=!1),Qi(),Nt.setSettings(jt),r==="vol"&&Bt.setVolume(t),r==="q"&&hh()},controls:()=>{gr=!0,vs()},controlsBack:()=>{gr=!1,Yt.listen=null,Qi()},bind:(r,t)=>{Yt.listen=[r,t],vs()},resetBinds:()=>{Yt.reset(),Qi(),vs()},touchMode:r=>{jt.touchMode=r,ch=!1,Qi(),Ra(),vs()},option:(r,t)=>{jt[r]=!!t,Qi(),vs()},editTouch:()=>{gr=!1,_i.edit(!0)},privateRoom:()=>{Pt.private?location.hash="":location.hash=Math.random().toString(36).slice(2,8)}});Nt.setSettings(jt);Nt.setBuild("Build "+Sf+".");Nt.setRecord(Rf());Nt.setLink(location.href.split("#")[0].split("?")[0]+(Pt.private?"#"+Pt.code:""),Pt.private);window.addEventListener("hashchange",()=>location.reload());Pt.connect();var oh=0,ah=0,Li=Wr,gr=!1,Te=!1,Ea=!1,Zx=()=>{let r=document.activeElement;return r&&(r.tagName==="INPUT"&&r.type!=="checkbox"&&r.type!=="range"||r.tagName==="SELECT")},_s=()=>Pt.mode!=="menu"&&Pt.rep.phase===se.PLAY;document.addEventListener("keydown",r=>{if(Yt.listen){r.preventDefault(),Yt.codeDown(r.code);return}if(Zx())return;if(r.repeat){Yt.isBound(r.code)&&(Li||_s())&&r.preventDefault();return}Yt.codeDown(r.code)&&(Li||_s()||r.code==="Tab")&&r.preventDefault()});document.addEventListener("keyup",r=>Yt.codeUp(r.code));window.addEventListener("blur",()=>Yt.clear());document.addEventListener("mousemove",r=>{document.pointerLockElement===Pi&&(oh+=le(r.movementX||0,-160,160),ah+=le(r.movementY||0,-160,160))});document.addEventListener("pointerdown",r=>{Tf=r.pointerType||""},!0);document.addEventListener("mousedown",r=>{if(Yt.listen){if(r.target.closest&&r.target.closest("[data-bind]"))return;r.preventDefault(),Yt.codeDown("Mouse"+r.button),Ea=!0,setTimeout(()=>{Ea=!1},400);return}document.pointerLockElement===Pi&&Yt.codeDown("Mouse"+r.button)});document.addEventListener("click",r=>{Ea&&(Ea=!1,r.stopPropagation(),r.preventDefault())},!0);document.addEventListener("mouseup",r=>Yt.codeUp("Mouse"+r.button));document.addEventListener("contextmenu",r=>r.preventDefault());document.addEventListener("gesturestart",r=>r.preventDefault());document.addEventListener("pointerlockchange",()=>{Te||(Li=Wr||document.pointerLockElement===Pi,!Li&&_s()&&(tn=!0),Yt.clear())});document.addEventListener("pointerlockerror",()=>rh());Pi.addEventListener("click",()=>{!Te&&_s()&&!Li&&mr()});document.addEventListener("visibilitychange",()=>{Te&&(document.hidden?_s()&&(tn=!0,Yt.clear(),_i.release()):_s()&&dh(!0))});var _i=new fa(Yt,jt,{pause:()=>{tn=!0,Yt.clear()},edited:()=>Qi(),editDone:()=>{gr=!0,vs()}});function Ra(){let r=Te;Te=Ef(),_i.setEnabled(Te),Nt.setTouch(Te,Yt),Bt.cheap=Te,r&&!Te&&(Li=Wr||document.pointerLockElement===Pi,!Li&&_s()&&(tn=!0),Yt.clear())}Yt.onBound=()=>{Qi(),vs()};function vs(){Nt.setControls(Yt,Vc,jt,Te)}Ra();if(window.matchMedia)try{window.matchMedia("(pointer: coarse)").addEventListener("change",()=>Ra())}catch{}function Yn(r){for(let t of Pt.rep.players.values())if(t.slot===r)return t.name;return"Someone"}function En(r,t){return!di($t,Pt.rep.doorOpen,Ft.position.x,Ft.position.z,1.5,r,t,1.5,!0)}function Kx(r){let t=Pt.rep,e=t.me,i=e&&r[2]===e.slot,n=t.creature;switch(r[1]){case"tag":{let s=t.layout&&t.layout.tags[r[2]],o=e&&r[3]===e.slot,a=r[4];if(o){if(Bt.pickupTag(),s){let l=Zo[s.log];Nt.log(l[0],l[1],l[2]),setTimeout(()=>Bt.garble(1.3),700)}}else Nt.feed(`${Yn(r[3])} recovered a tag (${a} of ${Mt.TAGS})`);break}case"item":e&&r[3]===e.slot&&Bt.pickupItem();break;case"door":{let s=$t.doors[r[2]];if(s){let o=En(s.x,s.z);r[4]===2&&Bt.fault(s.x,s.z,o),Bt.door(s.x,s.z,!!r[3],r[4]===1,o)}break}case"throw":i&&Bt.throwSound();break;case"alert":n.has&&Bt.voice("alert",n.x,n.z,Gi);break;case"spot":n.has&&Bt.voice("screech",n.x,n.z,Gi),i&&(Nt.banner("It has seen you",2.5,"bad"),at.shake=.6,$n([70,50,140]),Mi.dip(.7),bi.fx.static=Math.max(bi.fx.static,.45));break;case"lost":n.has&&Bt.voice("hiss",n.x,n.z,Gi);break;case"lunge":n.has&&Bt.voice("lunge",n.x,n.z,Gi),i&&bf();break;case"lockchk":{let s=$t.lockers[r[2]];s&&r[3]!==2&&Bt.locker(s.x,s.z,!0,En(s.x,s.z)),at.hidden===r[2]&&(r[3]===1?bf():r[3]===2?(Nt.banner("It did not find you",3),n.has&&Bt.voice("hiss",n.x,n.z,!1)):(at.shake=1,$n(120)));break}case"wake":Bt.wakeCall(n.has?n.x:Ta.x,n.has?n.z:Ta.z),Mi.dip(1.5),Nt.feed("Something aboard has started to move.");break;case"station":{let s=$t.stations[r[2]];if(!s)break;Bt.stationDone(s.x,s.z);let o=$t.stations.filter(a=>a.kind===s.kind&&t.stProg[a.id]>=1).length+(t.stProg[s.id]>=1?0:1);s.kind==="pump"?Nt.feed(`Coolant pump ${o} of 3 is running.${o>=3?" Now the reactor lever.":""}`):s.kind==="terminal"?Nt.feed(`Launch codes: ${o} of 3 downloaded.`):s.kind==="uplink"&&Nt.feed("The bridge has the codes.");break}case"reactor":Bt.reactor(),Nt.banner("The reactor is running",4),Nt.feed("Power is back in engineering.");break;case"bulkopen":{let s=$t.sections[r[2]],o=$t.doors[s.bulkOut],a=$t.sections[r[2]+1];Bt.bulkhead(o.x,o.z,ce(1-Math.hypot(o.x-Ft.position.x,o.z-Ft.position.z)/60)),Nt.banner(`The bulkhead to the ${a.name} is open`,6),Nt.feed("It heard that. Get everyone through: it shuts behind the last of you.");break}case"section":{let s=$t.sections[r[2]];Bt.pickupTag(),Nt.banner(s.name.toUpperCase(),5,"title"),Nt.feed({tags:"The crew tags are somewhere in the cargo hold. Their codes open the next bulkhead.",terminals:"Three terminals on this deck hold the launch codes.",launch:"The bridge is at the bow. The escape pod is in the pod bay."}[s.task]||"");break}case"ventin":case"ventout":{let s=$t.vents[r[2]];if(!s)break;let o=Math.hypot(s.x-Ft.position.x,s.z-Ft.position.z);Bt.ventBang(s.x,s.z,En(s.x,s.z)),We.ventKick(r[2]),Tn.kind=r[1]==="ventin"?1:2,Tn.t=0,r[1]==="ventout"&&o<14&&!En(s.x,s.z)&&(at.shake=Math.max(at.shake,.8*(1-o/14)),Mi.dip(.5),bi.fx.static=Math.max(bi.fx.static,.5*(1-o/14)),$n(80)),o<20&&pr("vents","It uses the vents. Listen to the ceiling: you can hear it crawling, and the hatches bang when it goes in or comes out.");break}case"pwr":{let s=r[2],o=s===9||$t.zoneOf[$t.cellOf(Ft.position.x,Ft.position.z)]===s;r[3]?(Bt.powerUp(o?1:.12),Nt.feed(s===9?"The power is back.":r[4]?`The ${Ue[s]} has power for now.`:`Power is back in the ${Ue[s]}.`)):(Bt.powerDown(o?1:.12),Nt.feed(s===9?"Blackout. Every circuit is down.":r[4]?`What the breaker gave the ${Ue[s]} has run out.`:`The power has tripped in the ${Ue[s]}.`),o&&$n(60));break}case"breaker":{let s=$t.breakers[r[2]];s&&Bt.breaker(s.x,s.z,En(s.x,s.z)),e&&r[3]!==e.slot&&r[3]>=0&&Nt.feed(`${Yn(r[3])} threw the ${Ue[r[2]]} breaker`);break}case"gasp":if(i)at.breath=0,at.gaspT=Mt.breath.gasp,at.hold=!1,Bt.gasp(),Nt.banner("You had to breathe",2.2,"warn"),$n(90);else{let s=[...t.players.values()].find(a=>a.slot===r[2]),o=s&&s.hidden>=0?$t.lockers[s.hidden]:null;o&&Math.hypot(o.x-Ft.position.x,o.z-Ft.position.z)<12&&Nt.feed(`${Yn(r[2])} could not hold their breath`)}break;case"fault":Nt.feed(`Door fault. ${r[2]} doors have moved by themselves.`);break;case"quake":Bt.quake(6.5),Gr=6.5,Mi.dip(1),Nt.feed("The hull is groaning. Nothing carries far over that."),$n([200,100,200,100,300]);break;case"down":i?(Bt.downed(),at.shake=1.4,$n(350)):Nt.feed(`${Yn(r[2])} is down`);break;case"dead":i||Nt.feed(`${Yn(r[2])} is gone`);break;case"rev":i?(Bt.revived(),Nt.banner("Back on your feet",3)):Nt.feed(`${Yn(r[3])} picked up ${Yn(r[2])}`);break;case"wind":i&&(Bt.revived(),Nt.banner("It left you for dead. You will not survive another.",6,"warn"));break;case"liftready":Nt.banner("Codes uploaded. Prime the escape pod in the pod bay.",7),Bt.pickupTag();break;case"liftcall":Nt.banner(`Pod primed. ${r[3]||Mt.lift.call} seconds to launch. It will hear the alarm.`,6,"warn");break;case"liftarr":Nt.banner("The pod hatch is open. Get in.",6),Bt.liftArrive($t.lift.x,$t.lift.z);break;case"liftgo":Bt.podLaunch();break;case"join":Nt.feed(`${Yn(r[2])} joined`);break;case"leave":Nt.feed("A crew member dropped out");break}}function Jx(r,t){let e=$t.sections[r.sec],i=Te?"USE":Yt.label("use"),n=Te?"SCAN":Yt.label("scan"),s=o=>$t.stations.filter(a=>a.kind===o&&a.sec===r.sec&&r.stProg[a.id]>=1).length;return r.secDone&&e.bulkOut>=0?`The bulkhead to the ${$t.sections[r.sec+1].name} is open. Everyone through: it shuts behind the last of you.`:e.task==="reactor"?s("pump")<3?`Restart the reactor: bring the coolant pumps back online (${s("pump")} of 3). Hold ${i} at each. ${n} finds them.`:"The pumps are running. Throw the reactor lever in Reactor Control.":e.task==="tags"?`Find the crew tags in the cargo hold (${r.tagCount()} of ${Mt.TAGS}). Their codes open the next bulkhead. ${n} finds them.`:e.task==="terminals"?`Download the launch codes from three terminals (${s("terminal")} of 3). Hold ${i} at each. ${n} finds them.`:t.state===ae.LOCKED?"Upload the launch codes at the uplink on the bridge, at the bow.":t.state===ae.READY?"Prime the escape pod from its console in the pod bay.":t.state===ae.CALLED?`The pod launches in ${Math.ceil(t.timer)} s. Stay alive.`:t.state===ae.ARRIVED?`Get in the pod. It goes in ${Math.max(0,Math.ceil(t.board))} s.`:""}function jx(r){let t=$t.sections[r.sec],e=i=>$t.stations.filter(n=>n.kind===i&&n.sec===r.sec&&r.stProg[n.id]>=1).length;return t.task==="reactor"?{n:4,done:e("pump")+e("lever")}:t.task==="tags"?{n:Mt.TAGS,done:r.tagCount()}:t.task==="terminals"?{n:3,done:e("terminal")}:{n:2,done:e("uplink")+(r.lift.state>=ae.CALLED?1:0)}}var Qx=r=>!!r&&r.dead&&/^Sealed/.test(r.text);function bf(){De=0,Bt.sting(jt.scares?1:.5),$n([40,30,220])}var Aa=(r,t)=>{let e=[];return r.zones.forEach((i,n)=>{i===t&&e.push("the "+Ue[n])}),e.length>1?e.slice(0,-1).join(", ")+" and "+e[e.length-1]:e[0]||""};function t1(r){if(r.plain)return;Nt.feed("The ship is dark: the reactor is down. Bring the coolant pumps back, then throw the reactor lever.");let t=Object.assign({},r,{zones:r.zones.map((n,s)=>s===0?ge.ON:n)}),e=Aa(t,ge.DEAD),i=Aa(t,ge.FAILING);e&&Nt.feed(`Further in, no power on the ${e.replace(/^the /,"")}.`),i&&Nt.feed(`The lights are failing on the ${i.replace(/^the /,"")}.`),r.sealed.length&&Nt.feed(`${r.sealed.length} doors are sealed shut. The schematic marks them in red.`)}function If(){let r=Pt.rep,t=r.result||{win:0,t:0,out:[],tags:0},e=r.me,i=e&&e.status===dt.OUT,n=r.players.size,s=Math.floor(t.t/60),o=String(t.t%60).padStart(2,"0");if(Nt.setEnd({eyebrow:t.win?"Pod away":"No signal",title:i?"You made it out":t.win?"Left behind":"Signal lost",text:i?"The pod falls away from the hull. Behind you, the Ymir goes dark again.":t.win?"The pod went without you.":"Nobody reached the pod. The Ymir keeps drifting.",stats:[[`${s}:${o}`,"Time"],[$t.sections[t.sec|0].name,t.win?"Got off from":"Got as far as"],[`${t.out.length} / ${n}`,"Got out"]],again:Pt.mode==="solo"?"Go again":"",extra:e1(r.layout)}),r.layout&&!r.layout.plain&&yf!==r.mid&&e){yf=r.mid;let a=(Vi[r.layout.trait]||Vi[0]).key,l=Je.kinds[a]||(Je.kinds[a]={met:0,out:0});Je.runs++,l.met++,i&&(Je.out++,l.out++,(!Je.best||t.t<Je.best)&&(Je.best=t.t));try{localStorage.setItem("los-record",JSON.stringify(Je))}catch{}Nt.setRecord(Rf())}t.win&&i?Bt.win():Bt.lose(),uh=!0,ph()}function e1(r){if(!r||r.plain)return null;let t=Vi[r.trait]||Vi[0],e=Aa(r,ge.DEAD),i=Aa(r,ge.FAILING),n=[];return e&&n.push(`No power in ${e}.`),i&&n.push(`Failing lights in ${i}.`),r.sealed.length&&n.push(`${r.sealed.length} doors sealed.`),{head:"What was aboard",name:t.name,line:t.line,cond:n.join(" ")}}var wf=performance.now();function Lf(){requestAnimationFrame(Lf);let r=performance.now(),t=(r-wf)/1e3,e=le(t,0,.1);wf=r;let i=Pt.rep,n=Pt.mode!=="menu",s=Te&&window.innerHeight>window.innerWidth;Te&&(Li=!tn&&!_i.editing&&!gr),jt.auto&&n&&i.phase===se.PLAY&&(document.pointerLockElement===Pi||Te)&&!document.hidden&&t<.25&&(xa+=t,Zc++,xa>5&&(xa/Zc>.031&&jt.q!=="low"&&(jt.q=jt.q==="high"?"medium":"low",hh(),Nt.setSettings(jt),Qi(),Nt.notice(Te?"Detail turned down to keep things smooth. Pause has the setting.":"Detail turned down to keep things smooth. Esc has the setting.")),xa=0,Zc=0));let o=n&&i.phase===se.PLAY&&!!i.me,a=o&&Li&&!Pt.paused;if(o){let G=i.me;(at.mid!==i.mid||at.seed!==i.seed)&&(at.spawn(G.slot,i.sec),at.mid=i.mid,at.seed=i.seed,Qc=dt.ALIVE),G.status!==Qc&&(Qc=G.status,(G.status===dt.DEAD||G.status===dt.OUT)&&(dr=null)),at.status=G.status;let Y={fwd:0,right:0,run:!1,crouchToggle:!1,dx:0,dy:0};a&&(Y.fwd=(Yt.held("fwd")?1:0)-(Yt.held("back")?1:0)+Yt.move.y,Y.right=(Yt.held("right")?1:0)-(Yt.held("left")?1:0)+Yt.move.x,Y.run=Yt.held("run")||_i.running,Y.crouchToggle=Yt.hit("crouch"),Y.crouchHold=jt.holdCrouch&&!Te?Yt.held("crouch"):null,Y.dx=oh+Yt.look.x,Y.dy=(ah+Yt.look.y)*(jt.invertY?-1:1)),De>=0&&De<1.1&&(Y.dx=0,Y.dy=0);let ft=at.update(e,Y,i,.0022*jt.sens);if(ft&&Bt.step(ft),De>=0){De+=e;let M=i.creature;if(M.has&&De<1.1){at.eyePos(qn,0);let k=M.x-qn.x,K=M.z-qn.z,rt=Math.hypot(k,K),et=Math.min(1,e*12);rt>.3&&(at.yaw=_n(at.yaw,Ze(k,K),et),at.pitch+=(Math.atan2((G.status===dt.ALIVE?1.75:1.5)-qn.y,Math.max(rt,.8))-at.pitch)*et)}(De>1.7||De>.75&&G.status===dt.ALIVE)&&(De=-1)}Gr>0&&(Gr-=e,at.shake=Math.max(at.shake,.1+.5*Math.sin(Math.PI*ce(Gr/6.5)))),Pt.others(r,vi),at.findTarget(i,vi);let vt=G.status===dt.ALIVE;if(at.rv=-1,at.ws=-1,a&&vt){let M=at.target;if(Yt.hit("use")&&M&&!M.dead){if(M.kind==="tag")Pt.act("T",M.i);else if(M.kind==="item")Pt.act("I",M.i);else if(M.kind==="door")Pt.act("D",M.i);else if(M.kind==="lift")Pt.act("L");else if(M.kind==="breaker")Pt.act("B",M.i);else if(M.kind==="hide")at.enterLocker(M.i),Bt.locker($t.lockers[M.i].x,$t.lockers[M.i].z,!1,!1),va=0;else if(M.kind==="unhide"){let k=$t.lockers[at.hidden];at.leaveLocker(),k&&Bt.locker(k.x,k.z,!1,!1)}}Yt.held("use")&&M&&M.kind==="revive"&&(at.rv=M.slot),Yt.held("use")&&M&&M.kind==="station"&&(at.ws=M.i,pr("station","Keep holding until the lamp goes green. Letting go keeps what you have done, but the noise carries.")),at.hidden<0?(Yt.hit("lamp")&&(at.light=!at.light,Bt.lamp(at.light)),Yt.hit("throw")&&G.decoys>0&&Pt.act("G",Math.round(at.yaw*1e3),Math.round(at.pitch*1e3)),at.scan=Yt.held("scan")):at.scan=!1}else vt||(at.scan=!1);Te&&(!vt||at.hidden>=0)&&_i.setToggle("scan",!1);let xt=vt&&at.hidden>=0;Te&&_i.setHiding(xt),at.hold=xt&&a&&Yt.held("run")&&at.gaspT<=0,at.hold?at.breath=Math.max(0,at.breath-e/Mt.breath.hold):(at.breath=Math.min(1,at.breath+e/Mt.breath.recover),at.gaspT=xt?Math.max(0,at.gaspT-e):0),xt&&pr("hide",Te?"Hold BREATH while it is outside the locker. It listens. Let go before your air runs out.":`Hold ${Yt.label("run")} to hold your breath while it is outside the locker. It listens. Let go before your air runs out.`),Qx(at.target)&&pr("sealed","A door with bars and a red lamp is sealed for this match. The schematic marks them in red."),at.hidden>=0&&G.hidden!==at.hidden?(va+=e,va>1&&vi.some(M=>M.hidden===at.hidden)&&(at.leaveLocker(),Nt.feed("Someone is already in there"))):va=0,Pt.local.x=at.x,Pt.local.z=at.z,Pt.local.yaw=at.yaw,Pt.local.pitch=at.pitch,Pt.local.f=at.flags(),Pt.local.lk=at.hidden,Pt.local.rv=at.rv,Pt.local.ws=at.ws,(G.status===dt.DEAD||G.status===dt.OUT)&&(Yt.hit("throw")||Yt.hit("use"))&&(Yc=!0),Vr+=e,!sh&&Vr>2.6&&i.layout&&(sh=!0,t1(i.layout))}else Pt.others(r,vi),at.scan=!1,De=-1;Pt.mode==="solo"&&(Pt.paused=tn&&!Li||s&&o),oh=ah=0,Pt.tick(r),i=Pt.rep;let l=n&&i.phase!==se.LOBBY;We.zones=i.zonesNow?i.zonesNow():We.zones,Mi.update(e,l&&i.layout?i.zonesNow():null,l?i.zoneOff:0,l?ih:0,!jt.scares),We.setPower(Mi.lv,Mi.all),We.update(e,n?i:null);let c=i.me,h=null,u=0,f=0,d=!1,g=!1,x=De<0?0:De<.12?De/.12:ce(1-(De-.12)/.6);if(Ii.resize(window.innerWidth,window.innerHeight),Ft.aspect=window.innerWidth/window.innerHeight,Ft.fov=72-14*x,Ft.updateProjectionMatrix(),!l||!c){let G=r/1e3*.05,Y=We.pit.x+Math.cos(G)*9.6,ft=We.pit.z+Math.sin(G)*9.6;Ft.position.set(Y,2.1,ft),u=Ze(We.pit.x-Y,We.pit.z-ft)+.5,f=.12,Ft.rotation.set(f,u,0)}else if((c.status===dt.DEAD||c.status===dt.OUT)&&vi.some(G=>G.status===dt.ALIVE||G.status===dt.DOWN)){let G=vi.filter(Y=>Y.status===dt.ALIVE||Y.status===dt.DOWN);if(Yc||!G.some(Y=>Y.id===dr)){let Y=G.findIndex(ft=>ft.id===dr);dr=G[(Y+1)%G.length].id,Yc=!1}h=G.find(Y=>Y.id===dr),g=!!(h.f&Ne.CROUCH),Ft.position.set(h.x,h.status===dt.DOWN?.4:g?.95:1.6,h.z),u=h.yaw,f=h.pitch,Ft.rotation.set(f,u,0),d=!!(h.f&Ne.LIGHT)&&h.status===dt.ALIVE}else at.eyePos(qn,r/1e3),Ft.position.set(qn.x,qn.y,qn.z),u=at.yaw,f=at.pitch,Ft.rotation.set(f-at.dropT*.25,u,at.dropT*.9+Math.sin(at.bob)*.006*ce(at.speed/3)),d=at.light&&c.status===dt.ALIVE,g=at.crouch;let m=-Math.sin(u)*Math.cos(f),p=Math.sin(f),y=-Math.cos(u)*Math.cos(f),b=12,v=-Math.sin(u),E=-Math.cos(u),S=Math.max(.2,Math.cos(f));if(d){for(let Y=.5;Y<=12;Y+=.5){let ft=$t.cellOf(Ft.position.x+v*Y,Ft.position.z+E*Y),vt=$t.cells[ft],xt=$t.doorAt[ft];if(vt===pt.SOLID||vt===pt.TALL||vt===pt.LOCKER||vt===pt.DUCT||vt===void 0||xt>=0&&i.doorOpen[xt]<.5){b=Y/S;break}}p<-.05?b=Math.min(b,Ft.position.y/-p):p>.05&&(b=Math.min(b,(3.2-Ft.position.y)/p));let G=(Y,ft)=>{let vt=Y-Ft.position.x,xt=ft-Ft.position.z,M=Math.hypot(vt,xt);M>.4&&M<b&&(vt*v+xt*E)/M>.93&&(b=M)};for(let Y of vi)Y.hidden<0&&G(Y.x,Y.z);i.creature.has&&(G(i.creature.x,i.creature.z),b===Math.hypot(i.creature.x-Ft.position.x,i.creature.z-Ft.position.z)&&(b*=.55))}$c+=(le(b/8,.1,1)-$c)*Math.min(1,e*7),qe.intensity+=((d?200*$c*Mi.lamp:0)-qe.intensity)*Math.min(1,e*22),Ii.renderer.shadowMap.needsUpdate=qe.castShadow&&qe.intensity>1,qe.position.set(Ft.position.x+Math.cos(u)*.2,Ft.position.y-.16,Ft.position.z-Math.sin(u)*.2),qe.target.position.set(Ft.position.x+m*10,Ft.position.y+p*10,Ft.position.z+y*10),Bt.listener(Ft.position.x,Ft.position.y,Ft.position.z,m,p,y);let R=i.creature,T=R.has&&R.vent&&!R.climb,_=l&&R.has&&i.phase!==se.LOBBY&&!T;_!==ys.root.visible&&ys.setVisible(_);let w=999;if(Tn.t+=e,l&&R.has&&i.phase!==se.LOBBY&&(w=Math.hypot(R.x-Ft.position.x,R.z-Ft.position.z)),l&&T&&i.phase===se.PLAY&&w<32&&(eh-=e,eh<=0&&(eh=.32+Math.random()*.4,Bt.ventCrawl(R.x,R.z))),_){Kc-=e,Kc<=0&&(Kc=.2,Gi=En(R.x,R.z));let G=w>.05?((R.x-Ft.position.x)*v+(R.z-Ft.position.z)*E)/w:1,Y=c&&R.tgt===c.slot,ft=R.state;if(R.shine=d&&!Gi&&w<26&&G>.88?1:0,R.watch=!Gi&&ft!==Q.IDLE&&(w<18&&(ft===Q.SUSPECT||ft===Q.AMBUSH||ft===Q.BAIT||ft===Q.LOCKER||(ft===Q.HUNT||ft===Q.ATTACK)&&Y)||w<24&&c&&c.status===dt.ALIVE&&c.aware>.2)?Ft.position:null,_a+=((ft===Q.ATTACK||De>=0?2.4:1.3)-_a)*Math.min(1,e*9),Object.assign(ji,R),ji.climb=0,ji.lift=0,R.climb&&Tn.kind===1?(ji.climb=1,ji.lift=ce(Tn.t/Mt.creature.climb)):Tn.kind===2&&Tn.t<1.3&&(ji.climb=2,ji.lift=ce(1-Tn.t/.22)),w<_a&&w>.05){let vt=_a/w;ji.x=Ft.position.x+(R.x-Ft.position.x)*vt,ji.z=Ft.position.z+(R.z-Ft.position.z)*vt}if(ys.update(e,ji,(vt,xt,M)=>{w<55&&Bt.tick(vt,xt,M,Gi)}),ys.cracks!==vf&&(vf=ys.cracks,(w<16&&!R.lampsOut||w<8)&&Bt.crack(R.x,R.z,Gi)),ft!==Q.IDLE&&!R.lampsOut&&w<17&&(th-=e,th<=0)){let vt=ft===Q.HUNT||ft===Q.ATTACK;th=vt?1.5+Math.random()*.9:2.6+Math.random()*1.8,Bt.voice(vt?"snarl":"breath",R.x,R.z,Gi)}R.state===Q.ROAM&&w<40&&(Jc-=e,Jc<=0&&(Jc=10+Math.random()*16,Bt.voice("rattle",R.x,R.z,Gi)))}Af.sync(l?h?vi.filter(G=>G.id!==h.id):vi:[],e,Ft.position);for(let G of vi){let Y=Mf.get(G.id);Y||(Y={x:G.x,z:G.z,acc:0},Mf.set(G.id,Y));let ft=Math.hypot(G.x-Y.x,G.z-Y.z);if(Y.x=G.x,Y.z=G.z,l&&G.status===dt.ALIVE&&G.hidden<0&&ft<2){Y.acc+=ft;let vt=ft/Math.max(e,.001)>3.7,xt=!!(G.f&Ne.CROUCH);Y.acc>(vt?2:xt?1.2:1.5)&&(Y.acc=0,Bt.stepAt(G.x,G.z,vt,xt))}}if(l){for(let[G,Y]of i.decoys){if(Y.state!==1)continue;let ft=(_f.get(G)||0)-e;ft<=0&&(ft=.55,Bt.beep(Y.x,Y.z,En(Y.x,Y.z))),_f.set(G,ft)}i.lift.state===ae.CALLED&&i.phase===se.PLAY&&(jc-=e,jc<=0&&(jc=1.35,Bt.klaxon($t.lift.alarm.x,$t.lift.alarm.z)))}let L=_&&R.state!==Q.IDLE&&i.phase===se.PLAY,P=L?Math.pow(ce(1-(w-4)/24),1.8):0,D=L?w>34?5:w>26?4:w>19?3:w>13?2:w>8?1:0:5;D>0&&D<5&&Math.sin(r/130)*Math.sin(r/370)>.75&&D--;let z=L&&c&&R.tgt===c.slot&&(R.state===Q.HUNT||R.state===Q.ATTACK),$=c&&c.status===dt.DOWN;ih=L?ce(1-(w-3)/11):0;let X=$t.zoneOf[$t.cellOf(le(Ft.position.x,0,137),le(Ft.position.z,0,97))],tt=l&&Mi.want[X]<.5;if(Bt.update(e,{static:l?P:0,danger:l&&c&&c.status===dt.ALIVE?ce((z?.7:0)+P*.5+(at.hold?.4+.5*(1-at.breath):0)):0,winded:o?ce(1-at.stamina/45):0,gen:l?ce(1-Math.hypot(Ft.position.x-Ta.x,Ft.position.z-Ta.z)/30):0,tension:l?ce(P*.9+(z?.45:0)+(tt?.21:.05)):.04,hiding:o&&!!c&&c.status===dt.ALIVE&&at.hidden>=0,holding:o&&at.hold}),l&&fh.update(e,Ft.position,!jt.scares,En),l&&i.phase===se.PLAY)for(let G of $t.stations){let Y=i.stProg[G.id];Y>nh[G.id]&&Y<1?(Ma[G.id]-=e,Ma[G.id]<=0&&(Ma[G.id]=G.kind==="pump"?1:.7,Bt.stationWork(G.kind,G.x,G.z,En(G.x,G.z)))):Ma[G.id]=0,nh[G.id]=Y}o&&c&&c.status===dt.ALIVE&&(ih>.2&&pr("near","The lights stutter when it is close. Crouch, lamp off, and listen for the tapping."),tt&&pr("dark","No power here. The red lamps are emergency lighting. Every deck has a yellow breaker box that can bring its power back for a while.")),bi.update(e,{playing:o,alive:!!c&&c.status===dt.ALIVE&&!h,hidden:at.hidden,scares:jt.scares,calm:!L||w>28,cam:Ft.position,yaw:u,fx:v,fz:E,lampOn:d,rep:i,others:vi}),bi.fx.shake&&(at.shake=Math.max(at.shake,bi.fx.shake)),bi.fx.dip&&Mi.dip(bi.fx.dip),o&&at.scan&&c.status===dt.ALIVE?ya-=e:ya=.15;let B=null;if(o&&at.scan&&c.status===dt.ALIVE&&i.layout){let G=0,Y=0,ft=1e9,vt="TAG",xt=$t.sections[i.sec],M=(k,K,rt)=>{let et=Math.hypot(k-at.x,K-at.z);et<ft&&(ft=et,G=k,Y=K,vt=rt)};if(i.secDone&&xt.bulkOut>=0){let k=$t.doors[xt.bulkOut];M(k.x,k.z,"BULKHEAD")}else if(i.lift.state>=ae.READY){let k=i.lift.state>=ae.ARRIVED?$t.lift:$t.lift.console;M(k.x,k.z,"POD")}else if(xt.task==="tags")i.layout.tags.forEach((k,K)=>{i.tagBits&1<<K||M(k.x,k.z,"TAG")});else{let k=$t.stations.every(K=>K.kind!=="pump"||i.stProg[K.id]>=1);for(let K of $t.stations)K.sec!==i.sec||i.stProg[K.id]>=1||!i.layout.stations.includes(K.id)||K.kind==="lever"&&!k||M(K.ax,K.az,K.kind.toUpperCase())}if(ft<1e9){let k=yn(at.yaw-Ze(G-at.x,Y-at.z));B={angle:k,label:`${vt} \xB7 ${Math.max(5,Math.round(ft/5)*5)} m`},ya<=0&&(ya=1.3,Bt.scanPing(ce(1-Math.abs(k)/Math.PI)))}}let ut=i.lift,mt="";o&&(c.status===dt.DEAD?mt=h?`You are gone. Watching ${h.name}. ${Te?"Tap USE":"Press "+Yt.label("use")} to switch.`:"You are gone.":c.status===dt.OUT?mt="You are out.":mt=Jx(i,ut));let Rt=[];if(o)for(let G of vi){if(G.status!==dt.DOWN||h&&h.id===G.id)continue;ba.set(G.x,.9,G.z).project(Ft);let Y=ba.x,ft=ba.y;ba.z>1&&(Y=-Y,ft=-1),Y=le(Y,-.92,.92),ft=le(ft,-.85,.85);let xt=i.players.get(G.id);Rt.push({text:`${G.name} down \xB7 ${Math.max(0,Math.ceil(xt?xt.timer:0))} s \xB7 ${Math.round(Math.hypot(G.x-Ft.position.x,G.z-Ft.position.z))} m`,x:(Y*.5+.5)*window.innerWidth,y:(-ft*.5+.5)*window.innerHeight})}let q=o&&a?at.target:null,Xt=q&&q.kind==="revive"?[...i.players.values()].find(G=>G.slot===q.slot):null,j=[];if(o){j.push({x:at.x,z:at.z,yaw:at.yaw,slot:c.slot,status:c.status,me:!0});for(let G of vi)j.push({x:G.x,z:G.z,slot:G.slot,status:G.status})}let W=[];if(o)for(let G of i.players.values())G.id!==Pt.id&&W.push(G);Nt.update(e,{show:o&&i.phase===se.PLAY,pips:jx(i),cap:$t.sections[i.sec].name,objective:mt,bars:D,roster:W,room:o?$t.roomName(Ft.position.x,Ft.position.z):"",prompt:q,hold:Xt?Xt.revProg:q&&q.kind==="station"?i.stProg[q.i]:0,hidden:o&&at.hidden>=0,seen:o&&c?c.aware:0,stamina:o&&at.hidden>=0?at.breath:at.stamina/Mt.player.stamina,spent:o&&at.hidden>=0?at.gaspT>0:at.spent,holding:at.hold,lamp:at.light,crouch:at.crouch,sounders:c?c.decoys:0,scan:B,marks:Rt,map:o&&Yt.held("map")&&!s,mapPlayers:j,sealed:i.layout?i.layout.sealed:null,dark:Mi.want,sec:i.sec,secDone:i.secDone,stations:i.layout?{act:i.layout.stations,prog:i.stProg}:null,down:$?{title:"Down",text:Pt.mode==="solo"?c.wind?"Hold still.":"That was your second wind.":c.revProg>0?"Someone is picking you up":"A crewmate can pick you up",frac:c.revProg>0?c.revProg:c.timer/Mt.down.bleed}:null});let ct=null;if(_i.editing?ct=null:gr?ct="controls":n?i.phase===se.LOBBY?(ct="lobby",Li&&!Wr&&ph()):i.phase===se.END?ct="end":Li||(ct=tn?"pause":"click"):ct="title",_i.show(_i.editing||Te&&ct===null&&o),Te&&_i.setLive(o&&at.target&&!at.target.dead),Nt.portrait(s&&(_i.editing||ct===null&&o)),ct!==Nt.screen&&(Nt.setScreen(ct),ct==="pause"&&Nt.setPause(Pt.mode==="solo"),ct==="end"&&!uh&&If()),ct==="lobby"){let G=[...i.players.values()].sort((Y,ft)=>Y.slot-ft.slot).map(Y=>({id:Y.id,slot:Y.slot,name:Y.name,ready:Y.ready,host:Y.id===Pt.hostId}));Nt.setLobby(G,Pt.id,Pt.mode==="host",Pt.ready)}if(Sa-=e,ct==="title"&&Sa<=0){Sa=1;let G=Pt.relay,Y=G?G.upCount:0,ft=Pt.hereCount()-1,vt=Pt.joinable(),xt=Pt.private?"private room "+Pt.code:"public room",M=Y?`Online \xB7 ${xt} \xB7 ${ft===0?"nobody else here yet":ft===1?"1 other here":ft+" others here"} \xB7 relays ${Y}/${G.total}`:navigator.onLine===!1?"No internet connection. You can still go in alone.":"Connecting to the relays\u2026 You can go in alone meanwhile.";Nt.setNet(M,Y?Y===1&&G.total>1?1:2:0,Y>0&&!vt,vt?`Join ${vt.host}'s crew (${vt.n}/${Mt.MAX_PLAYERS}${vt.ph===se.PLAY?", under way":""})`:"")}wa=Math.min(1,wa+e*.7);let ot=Ii.uni;ot.uTime.value=r/1e3,ot.uExposure.value=jt.bri*(jt.scares&&De>=0&&De<.1?1+1.4*(1-De/.1):1);let bt=ce(P+($?.2:0)+(o&&Vr<1.2?.8*(1-Vr/1.2):0)+bi.fx.static);De>=0&&(bt=De<.1?.8:Math.min(bt,.3+.5*ce((De-1)/.7))),ot.uStatic.value=l?bt:.06,ot.uHurt.value=$?.65+.2*Math.sin(r/240):c&&c.status===dt.DEAD&&!h?.8:ce(at.shake*.6),ot.uFade.value=l?wa*(c&&c.status===dt.DEAD&&!h?.3:1):.55,ot.uDesat.value=h?.55:0,ot.uSlats.value+=((o&&at.hidden>=0&&!h?1:0)-ot.uSlats.value)*Math.min(1,e*9),Ii.render(We.scene,Ft),Yt.endFrame()}try{let r=new Worker(URL.createObjectURL(new Blob(["setInterval(() => postMessage(0), 50);"],{type:"text/javascript"})));r.onmessage=()=>{Pt.mode!=="menu"&&(document.hidden||performance.now()-Pt.lastT>90)&&Pt.tick(performance.now())}}catch{}window.__los={ZONES:Ue,session:Pt,player:at,hud:Nt,gfx:Ii,sound:Bt,Sound:Hr,L:$t,cam:Ft,settings:jt,input:Yt,touch:_i,s3:We,scares:bi,lights:Mi,sparks:fh,creature:ys,record:Je,layoutMatch:ur,build:Sf};requestAnimationFrame(Lf);})();
