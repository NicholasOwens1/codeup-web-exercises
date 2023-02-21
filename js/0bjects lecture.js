"use strict"
const fighter = {
    name: "ARATA",
    hitPoints: 18,
    maxDamage: 8,
    attack: function(enemy){
        console.log(this.name +" attacks");
        const damage = Math.ceil(Math.random() * this.maxDamage);
        console.log(`${this.name} does ${damage} points of damage!`);
    }
}

const fighter2= {
    name: "Bigfoot",
    hitPoints: 17,
    maxDamage: 10,
    attack: function(){
        console.log(this.name + " attacks!");
    }
}

const monster = {
    name: "Goblin",
    hitPoints: 8,
    maxDamage: 6
}

const gameLogic = {
    attack: function(attacker, defender){
        console.log(`${defender.name} has ${defender.hitPoints}
        hit points`)
        console.log(`${attacker.name} attacks!`);
        const damage = Math.ceil((Math.random() * attacker.maxDamage));
        const damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.hitPoints -= damage;
        console.log(`${defender.name} now has ${defender.hitpoints} hit points left!`);
    }
}
const view = {
    displayAttackResults: function(attackerName, defenderName, hpBeforeAttack, hpAfterAttack) {
        console.log(`${defenderNmae} has ${hpBeforeAttack} hit points.`);
        console.log(`${attackerName} attacks!`);
    }
}