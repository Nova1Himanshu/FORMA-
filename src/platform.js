// Display plinth is viewer scenery, outside the vehicle parts hierarchy.
const platformMeshes=[];
function platformSurface(vertices,color,material){const m={rgb:color,material,count:vertices.length/6};m.buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,m.buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);platformMeshes.push(m);}
const plinthRadius=2.9,plinthTop=-.625,plinthBottom=-.82,segments=160;
let topVertices=[],sideVertices=[],ringVertices=[];
function vertex(list,x,y,z,nx,ny,nz){list.push(x,y,z,nx,ny,nz);}
for(let i=0;i<segments;i++){const a=i/segments*Math.PI*2,b=(i+1)/segments*Math.PI*2,ax=Math.cos(a),az=Math.sin(a),bx=Math.cos(b),bz=Math.sin(b);
vertex(topVertices,0,plinthTop,0,0,1,0);vertex(topVertices,bx*plinthRadius,plinthTop,bz*plinthRadius,0,1,0);vertex(topVertices,ax*plinthRadius,plinthTop,az*plinthRadius,0,1,0);
for(const [x,y,z,nx,nz] of [[ax*plinthRadius,plinthBottom,az*plinthRadius,ax,az],[ax*plinthRadius,plinthTop,az*plinthRadius,ax,az],[bx*plinthRadius,plinthTop,bz*plinthRadius,bx,bz],[ax*plinthRadius,plinthBottom,az*plinthRadius,ax,az],[bx*plinthRadius,plinthTop,bz*plinthRadius,bx,bz],[bx*plinthRadius,plinthBottom,bz*plinthRadius,bx,bz]])vertex(sideVertices,x,y,z,nx,0,nz);
const inner=plinthRadius-.07,outer=plinthRadius-.035;for(const [x,z] of [[ax*inner,az*inner],[bx*outer,bz*outer],[ax*outer,az*outer],[ax*inner,az*inner],[bx*inner,bz*inner],[bx*outer,bz*outer]])vertex(ringVertices,x,plinthTop+.002,z,0,1,0);
}
platformSurface(topVertices,[.115,.125,.15],0);platformSurface(sideVertices,[.045,.05,.065],0);platformSurface(ringVertices,[.7,.13,.18],0);
