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
  if (($(".fire-img")[0].style.marginLeft = "-1400px")) {
    waterAttack.style.visibility = "hidden";
    fireAttack.style.visibility = "visible";

    $(".fire-img").animate({ marginLeft: "4000px" }, 1500);
  } else {
    $(".fire-img")[0].style.marginLeft = "-1400px";
  }
}
// let test = document.querySelector('.water-img')
// test.style.visibility = "hidden";

//Animation that sends the water img from the left to the right of the screen and hidding the water attack from Charizard
function blastoiseAnimationAtk() {
  if (($(".water-img")[0].style.marginLeft = "1775px")) {
    fireAttack.style.visibility = "hidden";
    waterAttack.style.visibility = "visible";

    $(".water-img").animate({ marginLeft: "-3475px" }, 1500);
  } else {
    $(".water-img")[0].style.marginLeft = "1775px";
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
    attackStats.innerHTML = "Charizard missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have won the battle!";
    hideButtons();
    charizardAnimationAtk();
    PlayAgainTimer();
  }
  if (
    iceBeam.style.visibility === "hidden" &&
    waterGun.style.visibility === "hidden" &&
    hydroCannon.style.visibility === "hidden" &&
    hydroPump.style.visibility === "hidden" &&
    blastoiseHP != 0
  ) {
    cpuBlastoiseTimer();
    clearBlastoiseTimer();
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
    attackStats.innerHTML = "Charizard missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have won the battle!";
    hideButtons();
    charizardAnimationAtk();
    PlayAgainTimer();
  }
  if (
    iceBeam.style.visibility === "hidden" &&
    waterGun.style.visibility === "hidden" &&
    hydroCannon.style.visibility === "hidden" &&
    hydroPump.style.visibility === "hidden" &&
    blastoiseHP != 0
  ) {
    cpuBlastoiseTimer();
    clearBlastoiseTimer();
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
    attackStats.innerHTML = "Charizard missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have won the battle!";
    hideButtons();
    charizardAnimationAtk();
    PlayAgainTimer();
  }
  //If single player is selected and buttons are hidden then we want a cpu response, if multiplayer is clicked we do not.
  if (
    iceBeam.style.visibility === "hidden" &&
    waterGun.style.visibility === "hidden" &&
    hydroCannon.style.visibility === "hidden" &&
    hydroPump.style.visibility === "hidden" &&
    blastoiseHP != 0
  ) {
    cpuBlastoiseTimer();
    clearBlastoiseTimer();
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
    attackStats.innerHTML = "Charizard missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have won the battle!";
    hideButtons();
    charizardAnimationAtk();
    PlayAgainTimer();
  }
  //If single player is selected and buttons are hidden then we want a cpu response, if multiplayer is clicked we do not.
  if (
    iceBeam.style.visibility === "hidden" &&
    waterGun.style.visibility === "hidden" &&
    hydroCannon.style.visibility === "hidden" &&
    hydroPump.style.visibility === "hidden" &&
    blastoiseHP != 0
  ) {
    cpuBlastoiseTimer();
    clearBlastoiseTimer();
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
  // console.log(hitChance);
  if (hitChance <= 5) {
    let dmg = Math.floor(Math.random() * 26) + 25;
    // console.log(dmg);
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
    attackStats.innerHTML = "Blastoise missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have won the battle!";
    hideButtons();
    blastoiseAnimationAtk();
    PlayAgainTimer();
  }
  //If single player is selected and buttons are hidden then we want a cpu response, if multiplayer is clicked we do not.
  if (
    fireBall.style.visibility === "hidden" &&
    flamethrower.style.visibility === "hidden" &&
    dragonClaw.style.visibility === "hidden" &&
    overheat.style.visibility === "hidden" &&
    charizardHP != 0
  ) {
    //cpu attacks with a random atk in 3 seconds
    cpuCharizardTimer();
    //cpu timer is cleared so it is not repeated
    clearCharizardTimer();
  }
}

function waterGunAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  // console.log(hitChance);
  if (hitChance <= 9) {
    let dmg = Math.floor(Math.random() * 6) + 15;
    // console.log(dmg);
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
    attackStats.innerHTML = "Blastoise missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have won the battle!";
    hideButtons();
    blastoiseAnimationAtk();
    PlayAgainTimer();
  }
  //If single player is selected and buttons are hidden then we want a cpu response, if multiplayer is clicked we do not.
  if (
    fireBall.style.visibility === "hidden" &&
    flamethrower.style.visibility === "hidden" &&
    dragonClaw.style.visibility === "hidden" &&
    overheat.style.visibility === "hidden" &&
    charizardHP != 0
  ) {
    //cpu attacks with a random atk in 3 seconds
    cpuCharizardTimer();
    //cpu timer is cleared so it is not repeated
    clearCharizardTimer();
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
    attackStats.innerHTML = "Blastoise missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have won the battle!";
    hideButtons();

    blastoiseAnimationAtk();
    PlayAgainTimer();
  }
  //If single player is selected and buttons are hidden then we want a cpu response, if multiplayer is clicked we do not.
  if (
    fireBall.style.visibility === "hidden" &&
    flamethrower.style.visibility === "hidden" &&
    dragonClaw.style.visibility === "hidden" &&
    overheat.style.visibility === "hidden" &&
    charizardHP != 0
  ) {
    //cpu attacks with a random atk in 3 seconds
    cpuCharizardTimer();
    //cpu timer is cleared so it is not repeated
    clearCharizardTimer();
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
    attackStats.innerHTML = "Blastoise missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have won the battle!";
    hideButtons();
    blastoiseAnimationAtk();
    PlayAgainTimer();
  }
  //If single player is selected and buttons are hidden then we want a cpu response, if multiplayer is clicked we do not.
  if (
    fireBall.style.visibility === "hidden" &&
    flamethrower.style.visibility === "hidden" &&
    dragonClaw.style.visibility === "hidden" &&
    overheat.style.visibility === "hidden" &&
    charizardHP != 0
  ) {
    //cpu attacks with a random atk in 3 seconds
    cpuCharizardTimer();
    //cpu timer is cleared so it is not repeated
    clearCharizardTimer();
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
hideButtons();

//show buttons function
function showButtons() {
  fireBall.style.visibility = "visible";
  flamethrower.style.visibility = "visible";
  dragonClaw.style.visibility = "visible";
  overheat.style.visibility = "visible";
  iceBeam.style.visibility = "visible";
  waterGun.style.visibility = "visible";
  hydroCannon.style.visibility = "visible";
  hydroPump.style.visibility = "visible";
}

function showCharizardButtons() {
  fireBall.style.visibility = "visible";
  flamethrower.style.visibility = "visible";
  dragonClaw.style.visibility = "visible";
  overheat.style.visibility = "visible";
}

//animation to make the pokemon waver if hit by an attack

//grab the single player and multiplayer buttons
let singlePlayer = document.querySelector(".single-btn");
let multiplayer = document.querySelector(".multi-btn");
let choosePokemon = document.querySelector(".pokemon-choose");
let charizardButton = document.querySelector(".charizard-btn");
let blastoiseButton = document.querySelector(".blastoise-btn");
let battleDetails = document.querySelector(".battle-details");
let buttonContainer = document.querySelector(".btn-container");
let playerButtons = document.querySelector(".player-btns");
let battleText = document.querySelector(".battle-text");

//Click Single player or Multiplayer
function singlePlayerOption() {
  singlePlayer.addEventListener("click", function () {
    choosePokemon.style.display = "block";
    charizardButton.style.display = "block";
    blastoiseButton.style.display = "block";
    multiplayer.style.display = "none";
    singlePlayer.style.display = "none";
  });
}
singlePlayerOption();

function multiplayerOption() {
  multiplayer.addEventListener("click", function () {
    multiplayer.style.display = "none";
    singlePlayer.style.display = "none";
    playerButtons.style.display = "none";
    battleText.style.marginTop = "250px";
    battleDetails.style.visibility = "visible";
    fireBall.style.visibility = "visible";
    flamethrower.style.visibility = "visible";
    dragonClaw.style.visibility = "visible";
    overheat.style.visibility = "visible";
    iceBeam.style.visibility = "visible";
    waterGun.style.visibility = "visible";
    hydroCannon.style.visibility = "visible";
    hydroPump.style.visibility = "visible";
  });
}
multiplayerOption();

//Choose your pokemon and hide the opposite pokemon attack buttons
function charizardIsChosen() {
  charizardButton.addEventListener("click", function () {
    fireBall.style.visibility = "visible";
    flamethrower.style.visibility = "visible";
    dragonClaw.style.visibility = "visible";
    overheat.style.visibility = "visible";
    choosePokemon.style.display = "none";
    charizardButton.style.display = "none";
    blastoiseButton.style.display = "none";
    playerButtons.style.display = "none";
    battleText.style.marginTop = "250px";
    battleDetails.style.visibility = "visible";
    battleDetails.innerHTML =
      "You are " +
      "<span class='char-span'>Charizard</span>" +
      " facing off against " +
      "<span class='blast-span'>Blastoise</span>" +
      ".";
  });
}
charizardIsChosen();

function blastoiseIsChosen() {
  blastoiseButton.addEventListener("click", function () {
    iceBeam.style.visibility = "visible";
    waterGun.style.visibility = "visible";
    hydroCannon.style.visibility = "visible";
    hydroPump.style.visibility = "visible";
    buttonContainer.style.display = "none";
    choosePokemon.style.display = "none";
    charizardButton.style.display = "none";
    blastoiseButton.style.display = "none";
    playerButtons.style.display = "none";
    battleText.style.marginTop = "250px";
    battleDetails.style.visibility = "visible";
    battleDetails.innerHTML =
      "You are " +
      "<span class='blast-span'>Blastoise</span>" +
      " facing off against " +
      "<span class='char-span'>Charizard</span>" +
      ".";
  });
}
blastoiseIsChosen();

//function that has a random attack response after player 1 attacks, alternating turns

function cpuBlastoiseAtk() {
  let randomAttack = Math.floor(Math.random() * 4);
  // console.log(randomAttack);
  if (blastoiseHP > 0) {
    if (randomAttack === 0) {
      //call attack function
      cpuIceBeamAtk();
    } else if (randomAttack === 1) {
      cpuWaterGunAtk();
    } else if (randomAttack === 2) {
      cpuHydroCannonAtk();
    } else if (randomAttack === 3) {
      cpuHydroPumpAtk();
    }
  }
}

function cpuCharizardAtk() {
  let randomAttack = Math.floor(Math.random() * 4);
  console.log(randomAttack);
  if (charizardHP > 0) {
    if (randomAttack === 0) {
      //call attack function
      cpuFireBallAtk();
    } else if (randomAttack === 1) {
      cpuDragonClawAtk();
    } else if (randomAttack === 2) {
      cpuOverheatAtk();
    } else if (randomAttack === 3) {
      cpuFlamethrowerAtk();
    }
  }
}

function cpuBlastoiseTimer() {
  let timer = setTimeout(cpuBlastoiseAtk, 2300);
}

function clearBlastoiseTimer() {
  clearTimeout(cpuBlastoiseTimer);
}

function cpuCharizardTimer() {
  let timer = setTimeout(cpuCharizardAtk, 2300);
}

function clearCharizardTimer() {
  clearTimeout(cpuCharizardTimer);
}

//Blastoise Attacks
function cpuIceBeamAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  // console.log(hitChance);
  if (hitChance <= 5) {
    let dmg = Math.floor(Math.random() * 26) + 25;
    // console.log(dmg);
    blastoiseAnimationAtk();
    charizardHP -= dmg;
    // console.log(blastoiseHP)
    if (charizardHP < 0) {
      charizardHP = 0;
    }
    attackStats.innerHTML = `Blastoise used Ice Beam, doing ${dmg} damage. Charizard now has ${charizardHP}HP.`;
    attackStats.style.display = "flex";

    let charizardHPBarWidth = (charizardHP / 100) * 250;
    charHP.style.width = charizardHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "Blastoise missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have lost the battle!";
    hideButtons();

    blastoiseAnimationAtk();
    PlayAgainTimer();
  }
}

function cpuWaterGunAtk() {
  let hitChance = Math.floor(Math.random() * 11);
  // console.log(hitChance);
  if (hitChance <= 9) {
    let dmg = Math.floor(Math.random() * 6) + 15;
    // console.log(dmg);
    blastoiseAnimationAtk();

    charizardHP -= dmg;
    // console.log(blastoiseHP)
    if (charizardHP < 0) {
      charizardHP = 0;
    }
    attackStats.innerHTML = `Blastoise used Water Gun, doing ${dmg} damage. Charizard now has ${charizardHP}HP.`;
    attackStats.style.display = "flex";

    let charizardHPBarWidth = (charizardHP / 100) * 250;
    charHP.style.width = charizardHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "Blastoise missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have lost the battle!";
    hideButtons();

    blastoiseAnimationAtk();
    PlayAgainTimer();
  }
}

function cpuHydroCannonAtk() {
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
    attackStats.innerHTML = `Blastoise used Hydro Cannon, doing ${dmg} damage. Charizard now has ${charizardHP}HP.`;
    attackStats.style.display = "flex";
    let charizardHPBarWidth = (charizardHP / 100) * 250;
    charHP.style.width = charizardHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "Blastoise missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have lost the battle!";
    hideButtons();

    blastoiseAnimationAtk();
    PlayAgainTimer();
  }
}

function cpuHydroPumpAtk() {
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
    attackStats.innerHTML = `Blastoise used Hydro Pump, doing ${dmg} damage. Charizard now has ${charizardHP}HP.`;
    attackStats.style.display = "flex";
    let charizardHPBarWidth = (charizardHP / 100) * 250;
    charHP.style.width = charizardHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "Blastoise missed!";
    attackStats.style.display = "flex";
  }
  if (charizardHP === 0) {
    attackStats.innerHTML = "Charizard has fainted. You have lost the battle!";
    hideButtons();
    blastoiseAnimationAtk();
    PlayAgainTimer();
  }
}

//Charizard Attacks
function cpuFireBallAtk() {
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
    attackStats.innerHTML = `Charizard used Fire Ball, doing ${dmg} damage. Blastoise now has ${blastoiseHP}HP.`;
    attackStats.style.display = "flex";
    let blastoiseHPBarWidth = (blastoiseHP / 100) * 250;
    blastHP.style.width = blastoiseHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "Charizard missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have lost the battle!";
    hideButtons();
    charizardAnimationAtk();
    PlayAgainTimer();
  }
}

function cpuDragonClawAtk() {
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
    attackStats.innerHTML = `Charizard used Dragon Claw, doing ${dmg} damage. Blastoise now has ${blastoiseHP}HP.`;
    attackStats.style.display = "flex";

    let blastoiseHPBarWidth = (blastoiseHP / 100) * 250;
    blastHP.style.width = blastoiseHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "Charizard missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have lost the battle!";
    hideButtons();
    charizardAnimationAtk();
    PlayAgainTimer();
  }
}

function cpuOverheatAtk() {
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
    attackStats.innerHTML = `Charizard used Overheat, doing ${dmg} damage. Blastoise now has ${blastoiseHP}HP.`;
    attackStats.style.display = "flex";

    let blastoiseHPBarWidth = (blastoiseHP / 100) * 250;
    blastHP.style.width = blastoiseHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "Charizard missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have lost the battle!";
    hideButtons();
    charizardAnimationAtk();
    PlayAgainTimer();
  }
}

function cpuFlamethrowerAtk() {
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
    attackStats.innerHTML = `Charizard used Flamethrower, doing ${dmg} damage. Blastoise now has ${blastoiseHP}HP.`;
    attackStats.style.display = "flex";

    let blastoiseHPBarWidth = (blastoiseHP / 100) * 250;
    blastHP.style.width = blastoiseHPBarWidth + "px";
  } else {
    attackStats.innerHTML = "Charizard missed!";
    attackStats.style.display = "flex";
  }
  if (blastoiseHP === 0) {
    attackStats.innerHTML = "Blastoise has fainted. You have lost the battle!";
    hideButtons();
    charizardAnimationAtk();
    PlayAgainTimer();
  }
}
let playAgainBtn = document.querySelector(".play-again");
playAgainBtn.addEventListener("click", playAgain);
//reset game function
function playAgain() {
  multiplayer.style.display = "flex";
  singlePlayer.style.display = "flex";
  playerButtons.style.display = "flex";
  blastHP.style.width = "250px";
  charHP.style.width = "250px";
  attackStats.innerHTML = "";
  blastoiseHP = 100;
  charizardHP = 100;
  playAgainBtn.style.display = "none";
  attackStats.style.display = "none";
  buttonContainer.style.display = "flex";
}

function PlayAgainTimer() {
  setTimeout(displayPlayAgainBtn, 1000);
}

function displayPlayAgainBtn() {
  playAgainBtn.style.display = "flex";
}
