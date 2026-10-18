// Display finishes are illustrative; source geometry remains unchanged.
for(let m of meshes){const name=m.n.sourceName.split(' /')[0];
if(name==='body'){m.rgb=[.58,.006,.018];m.material=1.4;}
else if(name==='glass'){m.rgb=[.027,.044,.061];m.material=4;}
else if(/carbon/.test(name)){m.rgb=[.035,.041,.049];m.material=5;}
else if(/leather/.test(name)){m.rgb=[.095,.046,.031];m.material=6;}
else if(name==='carpet'){m.rgb=[.025,.027,.031];m.material=.12;}
else if(name==='tire'){m.rgb=[.021,.023,.026];m.material=7;}
else if(/^(rim_|chrome|nuts|metal|steering_metal)/.test(name)){m.rgb=name==='nuts'?[.26,.28,.31]:[.48,.51,.55];m.material=2;}
else if(name==='brakes'){m.rgb=[.68,.012,.022];m.material=1.1;}
}
