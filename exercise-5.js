function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var strAngka = String(angka)
    if( strAngka.length===1){
      return angka
    }else{
      var times = 1
      for(let i=0; i<strAngka.length; i++){
        times *= Number(strAngka[i])
      }
  
      return kaliTerusRekursif(times)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6