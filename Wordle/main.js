var height = 6; //number of guesses
var width = 3; //length of the word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;
// var word = "SQUID";
var wordList = [
  "aid",
  "aim",
  "air",
  "ale",
  "all",
  "alt",
  "amp",
  "and",
  "ant",
  "any",
  "ape",
  "app",
  "apt",
  "arc",
  "are",
  "ark",
  "arm",
  "art",
  "ash",
  "ask",
  "ass",
  "ate",
  "awe",
  "axe",
  "bad",
  "bag",
  "ban",
  "bar",
  "bat",
  "bay",
  "bed",
  "bee",
  "beg",
  "bet",
  "bid",
  "big",
  "bin",
  "bio",
  "bit",
  "bob",
  "bow",
  "box",
  "boy",
  "bra",
  "bud",
  "bug",
  "bum",
  "bun",
  "bus",
  "but",
  "buy",
  "bye",
  "cab",
  "can",
  "cap",
  "car",
  "cat",
  "cob",
  "con",
  "cop",
  "cow",
  "cox",
  "coy",
  "cry",
  "cub",
  "cue",
  "cup",
  "cut",
  "dab",
  "dad",
  "dal",
  "dam",
  "day",
  "den",
  "dew",
  "did",
  "die",
  "dig",
  "dim",
  "dip",
  "doe",
  "dog",
  "don",
  "dot",
  "dry",
  "due",
  "dug",
  "duo",
  "dye",
  "ear",
  "eat",
  "egg",
  "ego",
  "elf",
  "end",
  "era",
  "eve",
  "eye",
  "fab",
  "fan",
  "far",
  "fat",
  "fax",
  "fed",
  "few",
  "fig",
  "fin",
  "fit",
  "fix",
  "flu",
  "fly",
  "foe",
  "fog",
  "for",
  "fox",
  "fry",
  "fun",
  "fur",
  "gag",
  "gap",
  "gas",
  "gay",
  "gel",
  "gem",
  "get",
  "gig",
  "gin",
  "god",
  "got",
  "gum",
  "gun",
  "gut",
  "guy",
  "gym",
  "had",
  "ham",
  "has",
  "hat",
  "hay",
  "hen",
  "her",
  "hey",
  "hid",
  "him",
  "hip",
  "his",
  "hit",
  "hog",
  "hop",
  "hot",
  "how",
  "hug",
  "hum",
  "hut",
  "ice",
  "icy",
  "ill",
  "ink",
  "inn",
  "its",
  "jam",
  "jar",
  "jaw",
  "jet",
  "job",
  "jog",
  "joy",
  "jug",
  "key",
  "kid",
  "kin",
  "kit",
  "lab",
  "lad",
  "lag",
  "lap",
  "law",
  "lay",
  "led",
  "leg",
  "let",
  "lie",
  "lip",
  "lit",
  "log",
  "lot",
  "low",
  "mad",
  "man",
  "map",
  "mat",
  "may",
  "med",
  "men",
  "met",
  "mix",
  "mob",
  "mod",
  "mom",
  "mop",
  "mud",
  "mug",
  "mum",
  "nap",
  "net",
  "new",
  "nil",
  "nod",
  "not",
  "now",
  "nun",
  "nut",
  "oak",
  "odd",
  "off",
  "oil",
  "old",
  "one",
  "opt",
  "orb",
  "ore",
  "our",
  "out",
  "owl",
  "own",
  "pad",
  "pal",
  "pan",
  "par",
  "pat",
  "paw",
  "pay",
  "pea",
  "pen",
  "pet",
  "pic",
  "pie",
  "pig",
  "pin",
  "pit",
  "pod",
  "pop",
  "pot",
  "pro",
  "pub",
  "pup",
  "put",
  "rad",
  "ran",
  "rap",
  "rat",
  "raw",
  "ray",
  "red",
  "rid",
  "rig",
  "rim",
  "rip",
  "rob",
  "rod",
  "rot",
  "row",
  "rub",
  "rug",
  "rum",
  "run",
  "sad",
  "sat",
  "saw",
  "say",
  "sea",
  "see",
  "set",
  "she",
  "shy",
  "sim",
  "sin",
  "sip",
  "sir",
  "sis",
  "sit",
  "six",
  "ski",
  "sky",
  "son",
  "spy",
  "sum",
  "sun",
  "tab",
  "tag",
  "tan",
  "tap",
  "tar",
  "tax",
  "tea",
  "ted",
  "ten",
  "the",
  "thy",
  "tie",
  "tin",
  "tip",
  "toe",
  "ton",
  "top",
  "tow",
  "toy",
  "try",
  "tub",
  "tug",
  "two",
  "use",
  "van",
  "vet",
  "war",
  "was",
  "wax",
  "way",
  "web",
  "wet",
  "who",
  "why",
  "wig",
  "win",
  "won",
  "wow",
  "yen",
  "yes",
  "yet",
  "you",
  "zip",
  "zoo",
];

var guessList = [
  "aid",
  "aim",
  "air",
  "ala",
  "ale",
  "all",
  "alt",
  "amp",
  "ana",
  "and",
  "ant",
  "any",
  "ape",
  "app",
  "apt",
  "arc",
  "are",
  "ark",
  "arm",
  "art",
  "ash",
  "ask",
  "asp",
  "ass",
  "ate",
  "ave",
  "awe",
  "axe",
  "aye",
  "baa",
  "bad",
  "bag",
  "ban",
  "bar",
  "bat",
  "bay",
  "bed",
  "bee",
  "beg",
  "bel",
  "ben",
  "bet",
  "bid",
  "big",
  "bin",
  "bio",
  "bis",
  "bit",
  "biz",
  "bob",
  "bog",
  "boo",
  "bow",
  "box",
  "boy",
  "bra",
  "bud",
  "Bug",
  "bum",
  "bun",
  "bus",
  "but",
  "buy",
  "bye",
  "cab",
  "cad",
  "cam",
  "can",
  "cap",
  "car",
  "cat",
  "chi",
  "cob",
  "cod",
  "col",
  "con",
  "coo",
  "cop",
  "cor",
  "cos",
  "cot",
  "cow",
  "cox",
  "coy",
  "cry",
  "cub",
  "cue",
  "cum",
  "cup",
  "cut",
  "dab",
  "dad",
  "dal",
  "dam",
  "dan",
  "day",
  "Dee",
  "def",
  "del",
  "den",
  "dew",
  "did",
  "die",
  "dig",
  "dim",
  "din",
  "dip",
  "dis",
  "doc",
  "doe",
  "dog",
  "don",
  "dot",
  "dry",
  "dub",
  "due",
  "dug",
  "dun",
  "duo",
  "dye",
  "ear",
  "eat",
  "ebb",
  "ecu",
  "eft",
  "egg",
  "ego",
  "elf",
  "elm",
  "emu",
  "end",
  "era",
  "eta",
  "eve",
  "eye",
  "fab",
  "fad",
  "fan",
  "far",
  "fat",
  "fax",
  "fay",
  "fed",
  "fee",
  "fen",
  "few",
  "fig",
  "fin",
  "fir",
  "fit",
  "fix",
  "flu",
  "fly",
  "foe",
  "fog",
  "for",
  "fox",
  "fry",
  "fun",
  "fur",
  "gag",
  "gal",
  "gap",
  "gas",
  "gay",
  "gee",
  "gel",
  "gem",
  "get",
  "gig",
  "gin",
  "god",
  "got",
  "gum",
  "gun",
  "gut",
  "guy",
  "gym",
  "had",
  "ham",
  "has",
  "hat",
  "hay",
  "hem",
  "hen",
  "her",
  "hey",
  "hid",
  "him",
  "hip",
  "his",
  "hit",
  "hog",
  "hon",
  "hop",
  "hot",
  "how",
  "hub",
  "hue",
  "hug",
  "huh",
  "hum",
  "hut",
  "ice",
  "icy",
  "igg",
  "ill",
  "imp",
  "ink",
  "inn",
  "ion",
  "its",
  "ivy",
  "jam",
  "jar",
  "jaw",
  "jay",
  "jet",
  "jew",
  "job",
  "joe",
  "jog",
  "joy",
  "jug",
  "jun",
  "kay",
  "ken",
  "key",
  "kid",
  "kin",
  "kit",
  "lab",
  "lac",
  "lad",
  "lag",
  "lam",
  "lap",
  "law",
  "lax",
  "lay",
  "lea",
  "led",
  "Lee",
  "leg",
  "les",
  "let",
  "lib",
  "lid",
  "lie",
  "lip",
  "lit",
  "log",
  "lot",
  "low",
  "mac",
  "mad",
  "mag",
  "man",
  "map",
  "mar",
  "mas",
  "mat",
  "max",
  "may",
  "med",
  "meg",
  "men",
  "Met",
  "mid",
  "mil",
  "mix",
  "mob",
  "mod",
  "mol",
  "mom",
  "mon",
  "mop",
  "mot",
  "mud",
  "mug",
  "mum",
  "nab",
  "nah",
  "nan",
  "nap",
  "nay",
  "neb",
  "neg",
  "net",
  "new",
  "nil",
  "nip",
  "nod",
  "nor",
  "nos",
  "not",
  "now",
  "nun",
  "nut",
  "oak",
  "odd",
  "off",
  "oft",
  "oil",
  "old",
  "ole",
  "one",
  "ooh",
  "opt",
  "orb",
  "ore",
  "our",
  "out",
  "owe",
  "owl",
  "own",
  "pac",
  "pad",
  "pal",
  "pam",
  "pan",
  "pap",
  "par",
  "pas",
  "pat",
  "paw",
  "pay",
  "pea",
  "peg",
  "pen",
  "pep",
  "per",
  "pet",
  "pew",
  "phi",
  "pic",
  "pie",
  "pig",
  "pin",
  "pip",
  "pit",
  "ply",
  "pod",
  "pol",
  "pop",
  "pot",
  "pro",
  "psi",
  "pub",
  "pup",
  "put",
  "rad",
  "rag",
  "raj",
  "ram",
  "ran",
  "rap",
  "rat",
  "raw",
  "ray",
  "red",
  "ref",
  "reg",
  "rem",
  "rep",
  "rev",
  "rib",
  "rid",
  "rig",
  "rim",
  "rip",
  "rob",
  "rod",
  "roe",
  "rot",
  "row",
  "rub",
  "rue",
  "rug",
  "rum",
  "run",
  "rye",
  "sab",
  "sac",
  "sad",
  "sae",
  "sag",
  "sal",
  "sap",
  "sat",
  "saw",
  "say",
  "sea",
  "sec",
  "see",
  "sen",
  "set",
  "sew",
  "sex",
  "she",
  "shy",
  "sic",
  "sim",
  "sin",
  "sip",
  "sir",
  "sis",
  "sit",
  "six",
  "ski",
  "sky",
  "sly",
  "sod",
  "sol",
  "son",
  "sow",
  "soy",
  "spa",
  "spy",
  "sub",
  "sue",
  "sum",
  "sun",
  "sup",
  "tab",
  "tad",
  "tag",
  "tam",
  "tan",
  "tap",
  "tar",
  "tat",
  "tax",
  "tea",
  "ted",
  "tee",
  "ten",
  "the",
  "thy",
  "tie",
  "tin",
  "tip",
  "tod",
  "toe",
  "tom",
  "ton",
  "too",
  "top",
  "tor",
  "tot",
  "tow",
  "toy",
  "try",
  "tub",
  "tug",
  "two",
  "use",
  "van",
  "vat",
  "vet",
  "via",
  "vie",
  "vow",
  "wan",
  "war",
  "was",
  "wax",
  "way",
  "web",
  "wed",
  "wee",
  "wet",
  "who",
  "why",
  "wig",
  "win",
  "wis",
  "wit",
  "won",
  "woo",
  "wow",
  "wry",
  "wye",
  "yen",
  "yep",
  "yes",
  "yet",
  "you",
  "zip",
  "zoo",
];

guessList = guessList.concat(wordList);

var word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
console.log(word);

window.onload = function () {
  intialize();
};

function intialize() {
  // Create the game board
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      // <span id="0-0" class="tile">P</span>
      let tile = document.createElement("span");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      document.getElementById("board").appendChild(tile);
    }
  }

  // Create the key board
  let keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  for (let i = 0; i < keyboard.length; i++) {
    let currRow = keyboard[i];
    let keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");

    for (let j = 0; j < currRow.length; j++) {
      let keyTile = document.createElement("div");

      let key = currRow[j];
      keyTile.innerText = key;
      if (key == "Enter") {
        keyTile.id = "Enter";
      } else if (key == "⌫") {
        keyTile.id = "Backspace";
      } else if ("A" <= key && key <= "Z") {
        keyTile.id = "Key" + key; // "Key" + "A";
      }

      keyTile.addEventListener("click", processKey);

      if (key == "Enter") {
        keyTile.classList.add("enter-key-tile");
      } else {
        keyTile.classList.add("key-tile");
      }
      keyboardRow.appendChild(keyTile);
    }
    document.body.appendChild(keyboardRow);
  }

  // Listen for Key Press
  document.addEventListener("keyup", (e) => {
    processInput(e);
  });
}

function processKey() {
  e = { code: this.id };
  processInput(e);
}

function processInput(e) {
  if (gameOver) return;

  // alert(e.code);
  if ("KeyA" <= e.code && e.code <= "KeyZ") {
    if (col < width) {
      let currTile = document.getElementById(
        row.toString() + "-" + col.toString()
      );
      if (currTile.innerText == "") {
        currTile.innerText = e.code[3];
        col += 1;
      }
    }
  } else if (e.code == "Backspace") {
    if (0 < col && col <= width) {
      col -= 1;
    }
    let currTile = document.getElementById(
      row.toString() + "-" + col.toString()
    );
    currTile.innerText = "";
  } else if (e.code == "Enter") {
    update();
  }

  if (!gameOver && row == height) {
    gameOver = true;
    document.getElementById("answer").innerText = word;
  }
}

function update() {
  let guess = "";
  document.getElementById("answer").innerText = "";

  //string up the guesses into the word
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;
    guess += letter;
  }

  guess = guess.toLowerCase(); //case sensitive
  console.log(guess);

  if (!guessList.includes(guess)) {
    document.getElementById("answer").innerText = "Not in word list";
    return;
  }

  //start processing guess
  let correct = 0;

  let letterCount = {}; //keep track of letter frequency, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  console.log(letterCount);

  //first iteration, check all the correct ones first
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;

    //Is it in the correct position?
    if (word[c] == letter) {
      currTile.classList.add("correct");

      let keyTile = document.getElementById("Key" + letter);
      keyTile.classList.remove("present");
      keyTile.classList.add("correct");

      correct += 1;
      letterCount[letter] -= 1; //deduct the letter count
    }

    if (correct == width) {
      gameOver = true;
    }
  }

  console.log(letterCount);
  //go again and mark which ones are present but in wrong position
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;

    // skip the letter if it has been marked correct
    if (!currTile.classList.contains("correct")) {
      //Is it in the word?         //make sure we don't double count
      if (word.includes(letter) && letterCount[letter] > 0) {
        currTile.classList.add("present");

        let keyTile = document.getElementById("Key" + letter);
        if (!keyTile.classList.contains("correct")) {
          keyTile.classList.add("present");
        }
        letterCount[letter] -= 1;
      } // Not in the word or (was in word but letters all used up to avoid overcount)
      else {
        currTile.classList.add("absent");
        let keyTile = document.getElementById("Key" + letter);
        keyTile.classList.add("absent");
      }
    }
  }

  row += 1; //start new row
  col = 0; //start at 0 for new row
}
