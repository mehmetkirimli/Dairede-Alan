var yaricap = process.argv.slice(2);

console.log(`Girilmiş olan dairenin yarıçapı : ${yaricap}`);

function alanHesapla(yaricap) {
  var alan = Math.PI * yaricap * yaricap;
  console.log("Alan = " + alan);
}

alanHesapla(yaricap);
