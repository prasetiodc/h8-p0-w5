function attack (damage) {
    // Code disini
    return damage -2
  }
  
function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    if(numberOfAttacks===0){
        return 0
    }else{
        newNumberofAttack = numberOfAttacks-1
      
        return attack(damagePerAttack)+damageCalculation(newNumberofAttack,damagePerAttack )
    }
}
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  console.log(damageCalculation(10, 4)); // 20
  console.log(damageCalculation(5, 20)); // 90