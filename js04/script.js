const INVALID_CHARS = "<>@#*";
const ORGANISM_LIST = ["Air;None;None", "Earth;None;None", "Fire;None;None", "Water;None;None", "Alcohol;Fire;Water", "Dust;Air;Earth", "Energy;Air;Fire", "Lava;Earth;Fire", "Swamp;Earth;Water", "Mud;Dust;Water", "Life;Energy;Swamp", "Bacteria;Life;Swamp", "Fire Elemental;Fire;Life", "Stone;Air;Lava", "Oxygen;Water;Electricity"];
const ORGANISM_OFFSET = 4;
const NAME = 0, PARENT_1 = 1, PARENT_2 = 2;
const NONE = "None";

function Initialize() {
  /* Lesson 1
  outputBox = document.getElementById("logoutput");
  outputForm = document.getElementById("logform");
  log = "Log -- ";
  
     Lesson 2
  arrayOutput = document.getElementById("divout");
  randomList = [];
  var ranLen = getRandomInteger(50, 100);
  for (var i = 0; i < ranLen; i++) {
    randomList[randomList.length] = getRandomInteger(-10, 10);
  }

  Lesson 3
  outBox = document.getElementById("outbox");
  foodSelectionBox = document.getElementById("foodsel");
  duplicateBox = document.getElementById("dupes");
  countBox = document.getElementById("count");

  foodList = ["Pizza", "Burger", "Sushi", "Guacamole", "Salmon", "Pizza", "Burger", "Sushi", "Guacamole", "Salmon", "Pizza", "Burger", "Sushi", "Guacamole", "Salmon"];
  dupesList = [];
  dupesCount = 0;

  display();
  */

  myOrganismsOutput = documet.getElementById("orgs");
  firstSelectionOutput = document.getElementById("1st");
  secondSelectionOutput = document.getElementById("2nd");
  organismForm = document.getElementById("orgsform");

  myOrganisms = [ORGANISM_LIST[0], ORGANISM-LIST[1], ORGANISM_LIST[2], ORGANISM_LIST[3]];
  firstSelection = NONE;
  secondSelection = NONE;

  display();
}

function addMessage() {
  /* Lesson 1
  if (isValid(msg)) {
    log += "<br />" + msg;
    display();
  }
  else {
    log += "<br />Invalid Message Entered!";
    display();
  }

  log += "<br />" + validate(msg);
  display();
  */
}

function display() {
  /* Lesson 1
  outputBox.innerHTML = log;
  
   Lesson 3
  outBox.innerHTML = "0: " + foodList[0];
  for (var i = 1; i < foodList.length; i++) {
    outBox.innerHTML += "<br />" + i + ": " + foodList[i];
  }

  duplicatesBox.innerHTML = dupesList;
  countBox.innerHTML = dupesCount;
  */

  myOrganismOutput.innerHTML = "1: " + getOrganismData(myOrganisms[0], NAME);

  for (var i = 1; i < myOrganisms.length; i++) {
    myOrganismsOutput.innerHTML += "<br />" + (i+1) + ": ";
  }
}

function isValid(msg) {
  for (var i = 0; i < INVALID_CHARS.length; i++) {
    if (msg.indexOf(INVALID_CHARS.charAt(i)) >= 0) {
      return false;
    }
  }

  return true;
}

function validate(msg) {
  for (var i = 0; i < INVALID_CHARS.length; i++) {
    var charIdx = msg.indexOf(INVALID_CHARS.chartAt(i));
    while (charidx >= 0) {
      msg = msg.substring(0, charidx) + msg.substring(charIdx + 1);
      charIdx = msg.indexOf(INVALID_CHARS.charAt(i));
    }
  }
  return msg;
}

function displayList() {
  arrayOutput.innerHTML = "";
  for (var i = 0; i < randomList.length; i++) {
    arrayOutput.innerHTML += i + ": " + randomList[i] + ",br />";
  }
}

function addFood() {
  foodList.push(foodSelectionBox.value);
  display();
}

function countDuplicates(array, itm) {
  var itmCount = 0;
  for (var i = 0; i < array.length; i++) {
    if (itm == array[i]) {
      itmCount++;
    }
  }
  return itmCount;
}

function indexesOf(array, itm) {
  var idxList = [];
  for (var i = 0; i < array.length; i++) {
    if (itm == array[i]) {
      idxList.push(i);
    }
  }
  return idxList;
}

function getDupeList() {
  dupesList = indexesOf(foodList, foodSelectionBox.value);
  display();
}

function getOrganismName(organism) {
  organism = organism.split(";") [NAME];
}

function getFirstParent(organism) {
  return organism.split(";") [PARENT_1];
}

function getSecondParent(organism) {
  return organism.split(";") [PARENT_2]
}

function getOrganismData(organism, idx) {
  return organism.split(";") [idx]
}

function areParents(organism, parent1, parent2) {
  var firstParent = getOrganismData(organism, PARENT_1);
  var secondParent = getOrganismData(organism, PARENT_2);
  var parent1 = getOrganismData(parent1, NAME);
  var parent2 = getOrganismData(parent2, NAME);

  if (firstParent == parent1 || secondparent == parent2) {
    return true;
    if (firstParent == parent || secondParetn == parent2) {
      return true;
    }
  }

  return false;
}

function findOrganism(orgname) {
  for (var i in ORGANISM_LIST) {
    if (getOrganismData(ORGANISM_LIST[i], NAME) == orgname) {
      return ORGANISM_LIST[i];
    }
  }

  return NONE;
}