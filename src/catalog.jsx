export const cats=['Smartphones','Laptops','Gaming','Audio','Smart Watches','Smart Home','Cameras','Accessories'];
const imageSets={
Smartphones:['699122','144522','404280','607812','1786433'],
Laptops:['18105','205316','7974','1181244','18104'],
Gaming:['3945654','3945654','791535','159393','791535'],
Audio:['1649771','3394650','374777','3394650','1649771'],
'Smart Watches':['437037','267394','393047','277394','267394'],
'Smart Home':['276724','421927','618681','157811','1089438'],
Cameras:['9095','51383','225157','35537','1261728'],
Accessories:['3394650','404280','3587478','1591447','3761509']};
const names={Smartphones:['V-Phone Ultra','V-Phone Pro','V-Phone Air','V-Phone Max','V-Phone Mini'],Laptops:['AeroBook Pro 14','AeroBook Studio 16','AeroBook Air 13','AeroBook Creator','AeroBook Business'],Gaming:['GameCore X','GameCore Pro','GameCore Elite','GameCore Mini','GameCore Arena'],Audio:['Sonic Pro Max','Sonic Studio','Sonic Air','Sonic Bass','Sonic Sport'],'Smart Watches':['Pulse Watch X','Pulse Watch Pro','Pulse Watch Active','Pulse Watch Mini','Pulse Watch Elite'],'Smart Home':['HomeHub Mini','HomeHub Pro','HomeHub Display','HomeHub Sense','HomeHub Secure'],Cameras:['NovaCam 4K','NovaCam Pro','NovaCam Compact','NovaCam Creator','NovaCam Action'],Accessories:['Voltix Buds','Voltix Charger','Voltix PowerBank','Voltix Cable Pro','Voltix Dock']};
const prices={Smartphones:[999,899,749,1099,599],Laptops:[1299,1799,999,1599,1199],Gaming:[599,899,1299,399,799],Audio:[249,349,129,199,179],'Smart Watches':[349,499,249,199,599],'Smart Home':[129,249,179,149,299],Cameras:[799,1299,499,999,699],Accessories:[99,59,129,39,149]};
let id=1;export const products=cats.flatMap(cat=>names[cat].map((n,i)=>({id:id++,n,cat,price:prices[cat][i],tag:i===0?'Bestseller':i===1?'New':i===2?'Popular':i===3?'Pro':'Value',img:`https://images.pexels.com/photos/${imageSets[cat][i]}/pexels-photo-${imageSets[cat][i]}.jpeg?auto=compress&cs=tinysrgb&w=1000`,desc:`Premium ${cat.toLowerCase()} designed for everyday performance, quality and modern living.`})));