function meleeRangedGrouping (str) {
    //your code here

    var Melee = []
    var Ranged = []
    var result = []
    
    if(str.length===0){
        return result
    }

    str = str.split(',')

    for (let i=0; i<str.length; i++){
        str[i] = str[i].split('-')
    }

    for(let i=0; i<str.length; i++){
        if (str[i][1]==='Melee'){
            Melee.push(str[i][0])
        }else{
            Ranged.push(str[i][0])
        }
    }

    result.push([Ranged,Melee])
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []