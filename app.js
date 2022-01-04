//grab each button
let fireBall = document.querySelector(".fire-ball");
let dragonClaw = document.querySelector(".dragon-claw");
let overheat = document.querySelector(".overheat");
let flamethrower = document.querySelector(".flamethrower");
//
let iceBeam = document.querySelector(".ice-beam");
let hydroPump = document.querySelector(".hydro-pump");
let hydroCannon = document.querySelector(".hydro-cannon");
let waterGun = document.querySelector(".water-gun");
let attackStats = document.querySelector(".attack-stats");
let blastHP = document.querySelector(".hp-blastoise");
let charHP = document.querySelector(".hp-charizard");
let charizardHP = 100;
let blastoiseHP = 100;

//addEventListener to listen for a click for Charizard Attacks
fireBall.addEventListener("click", fireBallAtk);
dragonClaw.addEventListener("click", dragonClawAtk);
flamethrower.addEventListener("click", flamethrowerAtk);
overheat.addEventListener("click", overheatAtk);
let waterAttack = document.querySelector(".water-img");
let fireAttack = document.querySelector(".fire-img");

//Animation that sends the fire ball img from the left to the right of the screen and hidding the water attack from Blastoise
function charizardAnimationAtk() {
  if (($(".fire-img")[0].style.marginLeft = "-775px")) {
    waterAttack.style.visibility = "hidden";
    fireAttack.style.visibility = "visible";

    $(".fire-img").animate({ marginLeft: "4000px" }, 1500);
  } else {
    $(".fire-img")[0].style.marginLeft = "-775px";
  }
}
// let test = document.querySelector('.water-img')
// test.style.visibility = "hidden";

//Animation that sends the water img from the left to the right of the screen and hidding the water attack from Charizard
function blastoiseAnimationAtk() {
  if (($(".water-img")[0].style.marginLeft = "1575px")) {
    fireAttack.style.visibility = "hidden";
    waterAttack.style.visibility = "visible";

    $(".water-img").animate({ marginLeft: "-3475px" }, 1500);
  } else {
    $(".water-img")[0].style.marginLeft = "775px";
  }
}

//Charizard Attacks
function fireBallAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  console.log(hitChance);
  if (hitChance <= 5) {
    let dmg = Math.floor(Math.random() * 26) + 25;
    console.log(dmg);
    charizardAnimationAtk();
    blastoiseHP -= dmg;
    // console.log(blastoiseHP)
    if (blastoiseHP < 0) {
      blastoiseHP = 0;
    }
    attackStats.innerHTML = `You hit Blastoise with your Fire Ball, doing ${dmg} damage. Blastoise now has ${blastoiseHP}HP.`;
    attackStats.style.display = "flex";
    let blastoiseHPBarWidth = (blastoiseHP / 100) * 250;
    blastHP.style.width = blastoiseHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "You missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have won the battle!";
    hideButtons();
    hideButtons();
    charizardAnimationAtk();
  }
}

function dragonClawAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  console.log(hitChance);
  if (hitChance <= 8) {
    let dmg = Math.floor(Math.random() * 11) + 20;
    console.log(dmg);
    charizardAnimationAtk();

    blastoiseHP -= dmg;
    // console.log(blastoiseHP)
    if (blastoiseHP < 0) {
      blastoiseHP = 0;
    }
    attackStats.innerHTML = `You hit Blastoise with your Dragon Claw, doing ${dmg} damage. Blastoise now has ${blastoiseHP}HP.`;
    attackStats.style.display = "flex";

    let blastoiseHPBarWidth = (blastoiseHP / 100) * 250;
    blastHP.style.width = blastoiseHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "You missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have won the battle!";
    hideButtons();
    charizardAnimationAtk();
  }
}

function overheatAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  console.log(hitChance);
  if (hitChance <= 9) {
    let dmg = Math.floor(Math.random() * 6) + 15;
    console.log(dmg);
    charizardAnimationAtk();

    blastoiseHP -= dmg;
    // console.log(blastoiseHP)
    if (blastoiseHP < 0) {
      blastoiseHP = 0;
    }
    attackStats.innerHTML = `You hit Blastoise with Overheat, doing ${dmg} damage. Blastoise now has ${blastoiseHP}HP.`;
    attackStats.style.display = "flex";

    let blastoiseHPBarWidth = (blastoiseHP / 100) * 250;
    blastHP.style.width = blastoiseHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "You missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have won the battle!";
    hideButtons();
    charizardAnimationAtk();
  }
}

function flamethrowerAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  console.log(hitChance);
  if (hitChance <= 7) {
    let dmg = Math.floor(Math.random() * 6) + 30;
    console.log(dmg);
    charizardAnimationAtk();

    blastoiseHP -= dmg;
    // console.log(blastoiseHP)
    if (blastoiseHP < 0) {
      blastoiseHP = 0;
    }
    attackStats.innerHTML = `You hit Blastoise with your Flamethrower, doing ${dmg} damage. Blastoise now has ${blastoiseHP}HP.`;
    attackStats.style.display = "flex";

    let blastoiseHPBarWidth = (blastoiseHP / 100) * 250;
    blastHP.style.width = blastoiseHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "You missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have won the battle!";
    hideButtons();
    charizardAnimationAtk();
  }
}

//addEventListener to listen for a click for Blastoise Attacks
iceBeam.addEventListener("click", iceBeamAtk);
hydroCannon.addEventListener("click", hydroCannonAtk);
hydroPump.addEventListener("click", hydroPumpAtk);
waterGun.addEventListener("click", waterGunAtk);

//Blastoise Attacks
function iceBeamAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  console.log(hitChance);
  if (hitChance <= 5) {
    let dmg = Math.floor(Math.random() * 26) + 25;
    console.log(dmg);
    blastoiseAnimationAtk();
    charizardHP -= dmg;
    // console.log(blastoiseHP)
    if (charizardHP < 0) {
      charizardHP = 0;
    }
    attackStats.innerHTML = `You hit Charizard with your Ice Beam, doing ${dmg} damage. Charizard now has ${charizardHP}HP.`;
    attackStats.style.display = "flex";

    let charizardHPBarWidth = (charizardHP / 100) * 250;
    charHP.style.width = charizardHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "You missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have won the battle!";
    hideButtons();

    blastoiseAnimationAtk();
  }
}

function waterGunAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  console.log(hitChance);
  if (hitChance <= 9) {
    let dmg = Math.floor(Math.random() * 6) + 15;
    console.log(dmg);
    blastoiseAnimationAtk();

    charizardHP -= dmg;
    // console.log(blastoiseHP)
    if (charizardHP < 0) {
      charizardHP = 0;
    }
    attackStats.innerHTML = `You hit Charizard with your Ice Beam, doing ${dmg} damage. Charizard now has ${charizardHP}HP.`;
    attackStats.style.display = "flex";

    let charizardHPBarWidth = (charizardHP / 100) * 250;
    charHP.style.width = charizardHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "You missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have won the battle!";
    hideButtons();

    blastoiseAnimationAtk();
  }
}

function hydroCannonAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  console.log(hitChance);
  if (hitChance <= 7) {
    let dmg = Math.floor(Math.random() * 6) + 30;
    console.log(dmg);
    blastoiseAnimationAtk();
    charizardHP -= dmg;
    // console.log(blastoiseHP)
    if (charizardHP < 0) {
      charizardHP = 0;
    }
    attackStats.innerHTML = `You hit Charizard with your Ice Beam, doing ${dmg} damage. Charizard now has ${charizardHP}HP.`;
    attackStats.style.display = "flex";
    let charizardHPBarWidth = (charizardHP / 100) * 250;
    charHP.style.width = charizardHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "You missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have won the battle!";
    hideButtons();

    blastoiseAnimationAtk();
  }
}

function hydroPumpAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  console.log(hitChance);
  if (hitChance <= 8) {
    let dmg = Math.floor(Math.random() * 11) + 20;
    console.log(dmg);
    blastoiseAnimationAtk();
    charizardHP -= dmg;
    // console.log(blastoiseHP)
    if (charizardHP < 0) {
      charizardHP = 0;
    }
    attackStats.innerHTML = `You hit Charizard with your Ice Beam, doing ${dmg} damage. Charizard now has ${charizardHP}HP.`;
    attackStats.style.display = "flex";
    let charizardHPBarWidth = (charizardHP / 100) * 250;
    charHP.style.width = charizardHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "You missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have won the battle!";
    hideButtons();
    blastoiseAnimationAtk();
  }
}

//grab all of the buttons and hide them
function hideButtons() {
  fireBall.style.visibility = "hidden";
  flamethrower.style.visibility = "hidden";
  dragonClaw.style.visibility = "hidden";
  overheat.style.visibility = "hidden";
  iceBeam.style.visibility = "hidden";
  waterGun.style.visibility = "hidden";
  hydroCannon.style.visibility = "hidden";
  hydroPump.style.visibility = "hidden";
}

//animations
// function charizardAnimationAtk() {
//   $(".fire-ball").click(function () {
//     $(".fire-img").animate({ "margin-left": "+=1400px", opacity: 0 }, "slow");
//     $(".fire-img").animate({ "margin-left": "-=1400px", opacity: 0 }, "slow");
//   });
// }
