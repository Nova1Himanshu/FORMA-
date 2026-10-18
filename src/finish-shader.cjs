module.exports=s=>s.replace(/const fs=`[\s\S]*?`;\nfunction shader/,`const fs=\`precision highp float;uniform vec3 uColor;uniform vec3 uPick;uniform float uMaterial;uniform float uSelected;uniform float uMode;uniform float uExplosion;varying vec3 vNormal;varying vec3 vPosition;varying vec3 vView;
void main(){if(uMode>.5){gl_FragColor=vec4(uPick,1.);return;}vec3 n=normalize(vNormal);if(!gl_FrontFacing)n=-n;vec3 v=normalize(vView-vPosition/12.);vec3 r=reflect(-v,n);float fres=pow(1.-abs(dot(n,v)),5.);float key=max(0.,dot(n,normalize(vec3(1.,2.2,1.6))));float fill=max(0.,dot(n,normalize(vec3(-1.5,.8,-1.))));float soft=pow(max(0.,1.-abs(r.y-.62)*3.5),18.);float strip=soft*(.3+.7*pow(abs(r.z),2.));float second=pow(max(0.,1.-abs(r.x+.45)*5.),22.)*max(0.,r.y);float spec=pow(max(0.,dot(n,normalize(normalize(vec3(1.,2.2,1.6))+v))),100.);vec3 env=vec3(.82,.88,1.)*(strip*.85+second*.38+spec*.7)+vec3(.26,.29,.35)*fres;vec3 base=uColor*(.27+.68*key+.23*fill+.22*max(0.,n.y));
if(uMaterial>1.2&&uMaterial<1.5){base*=.82+.18*pow(abs(dot(n,v)),.5);base+=env*.72+vec3(1.,.94,.86)*spec*.3;}
else if(uMaterial>1.5&&uMaterial<2.5){base=mix(uColor*.23,uColor*(.45+.9*max(0.,r.y)),.65)+env*1.1;}
else if(uMaterial>3.5&&uMaterial<4.5){base=uColor*(.8+.3*key)+env*.55+vec3(.12,.16,.22)*fres;}
else if(uMaterial>4.5&&uMaterial<5.5){float a=sin(vPosition.x*1600.+vPosition.z*1600.),b=sin(vPosition.y*1600.-vPosition.z*1600.);float weave=.8+.2*a*b;base=uColor*(.55+.8*key)*weave+env*.24;}
else if(uMaterial>5.5&&uMaterial<6.5){float grain=fract(sin(dot(vPosition,vec3(127.1,311.7,74.7)))*43758.5453);base*=.94+.06*grain;base+=vec3(.12,.10,.08)*pow(max(0.,dot(n,normalize(vec3(1.,2.,1.)+v))),12.);}
else if(uMaterial>6.5){base=uColor*(.65+.45*key)+vec3(.035)*pow(max(0.,dot(n,normalize(vec3(1.,2.,1.)+v))),9.);}
else base+=env*uMaterial*.4;
if(uMaterial<-.5){float shadow=exp(-pow(vPosition.x/2.35,4.)-pow(vPosition.z/1.1,4.))*.65*(1.-uExplosion*.7);base=vec3(.048,.057,.073)*(1.-shadow);}
if(uMaterial>2.5&&uMaterial<3.5)base=uColor*1.2;base=mix(base,vec3(.75,.60,.32),uSelected*.27);base=base/(1.+base*.25);gl_FragColor=vec4(pow(max(base,vec3(0.)),vec3(.82)),1.);}\`;
function shader`);
