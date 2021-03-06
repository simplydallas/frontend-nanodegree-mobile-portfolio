/*
Welcome to the 60fps project! Your goal is to make Cam's Pizzeria website run
jank-free at 60 frames per second.

There are two major issues in this code that lead to sub-60fps performance. Can
you spot and fix both?


Built into the code, you'll find a few instances of the User Timing API
(window.performance), which will be console.log()ing frame rate data into the
browser console. To learn more about User Timing API, check out:
http://www.html5rocks.com/en/tutorials/webperformance/usertiming/

Creator:
Cameron Pittman, Udacity Course Developer
cameron *at* udacity *dot* com
*/
// As you may have realized, this website randomly generates pizzas.
// Here are arrays of all possible pizza ingredients.
var pizzaIngredients = {};
pizzaIngredients.meats = [
  "Pepperoni",
  "Sausage",
  "Fennel Sausage",
  "Spicy Sausage",
  "Chicken",
  "BBQ Chicken",
  "Chorizo",
  "Chicken Andouille",
  "Salami",
  "Tofu",
  "Bacon",
  "Canadian Bacon",
  "Proscuitto",
  "Italian Sausage",
  "Ground Beef",
  "Anchovies",
  "Turkey",
  "Ham",
  "Venison",
  "Lamb",
  "Duck",
  "Soylent Green",
  "Carne Asada",
  "Soppressata Picante",
  "Coppa",
  "Pancetta",
  "Bresola",
  "Lox",
  "Guanciale",
  "Chili",
  "Beef Jerky",
  "Pastrami",
  "Kielbasa",
  "Scallops",
  "Filet Mignon"
];
pizzaIngredients.nonMeats = [
  "White Onions",
  "Red Onions",
  "Sauteed Onions",
  "Green Peppers",
  "Red Peppers",
  "Banana Peppers",
  "Ghost Peppers",
  "Habanero Peppers",
  "Jalapeno Peppers",
  "Stuffed Peppers",
  "Spinach",
  "Tomatoes",
  "Pineapple",
  "Pear Slices",
  "Apple Slices",
  "Mushrooms",
  "Arugula",
  "Basil",
  "Fennel",
  "Rosemary",
  "Cilantro",
  "Avocado",
  "Guacamole",
  "Salsa",
  "Swiss Chard",
  "Kale",
  "Sun Dried Tomatoes",
  "Walnuts",
  "Artichoke",
  "Asparagus",
  "Caramelized Onions",
  "Mango",
  "Garlic",
  "Olives",
  "Cauliflower",
  "Polenta",
  "Fried Egg",
  "Zucchini",
  "Hummus"
];
pizzaIngredients.cheeses = [
  "American Cheese",
  "Swiss Cheese",
  "Goat Cheese",
  "Mozzarella Cheese",
  "Parmesean Cheese",
  "Velveeta Cheese",
  "Gouda Cheese",
  "Muenster Cheese",
  "Applewood Cheese",
  "Asiago Cheese",
  "Bleu Cheese",
  "Boursin Cheese",
  "Brie Cheese",
  "Cheddar Cheese",
  "Chevre Cheese",
  "Havarti Cheese",
  "Jack Cheese",
  "Pepper Jack Cheese",
  "Gruyere Cheese",
  "Limberger Cheese",
  "Manchego Cheese",
  "Marscapone Cheese",
  "Pecorino Cheese",
  "Provolone Cheese",
  "Queso Cheese",
  "Roquefort Cheese",
  "Romano Cheese",
  "Ricotta Cheese",
  "Smoked Gouda"
];
pizzaIngredients.sauces = [
  "Red Sauce",
  "Marinara",
  "BBQ Sauce",
  "No Sauce",
  "Hot Sauce"
];
pizzaIngredients.crusts = [
  "White Crust",
  "Whole Wheat Crust",
  "Flatbread Crust",
  "Stuffed Crust"
];
// Name generator pulled from http://saturdaykid.com/usernames/generator.html
// Capitalizes first letter of each word
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
// Pulls adjective out of array using random number sent from generator
function getAdj(x) {
  switch (x) {
    case "dark":
      var dark = ["dark", "morbid", "scary", "spooky", "gothic", "deviant",
        "creepy", "sadistic", "black", "dangerous", "dejected", "haunted",
        "morose", "tragic", "shattered", "broken", "sad", "melancholy",
        "somber", "dark", "gloomy", "homicidal", "murderous", "shady",
        "misty",
        "dusky", "ghostly", "shadowy", "demented", "cursed", "insane",
        "possessed", "grotesque", "obsessed"
      ];
      return dark;
    case "color":
      var colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen",
        "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red",
        "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum",
        "violet", "cerulean", "brown", "lavender", "violet", "magenta",
        "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy",
        "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan",
        "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne",
        "coral", "cyan"
      ];
      return colors;
    case "whimsical":
      var whimsy = ["whimsical", "silly", "drunken", "goofy", "funny",
        "weird", "strange", "odd", "playful", "clever", "boastful",
        "breakdancing",
        "hilarious", "conceited", "happy", "comical", "curious", "peculiar",
        "quaint", "quirky", "fancy", "wayward", "fickle", "yawning",
        "sleepy",
        "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy",
        "smiling", "perplexed", "baffled", "cockamamie", "vulgar",
        "hoodwinked",
        "brainwashed"
      ];
      return whimsy;
    case "shiny":
      var shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby",
        "emerald", "topaz", "diamond", "amethyst", "turquoise",
        "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet",
        "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
        "metallic"
      ];
      return shiny;
    case "noisy":
      var noisy = ["untuned", "loud", "soft", "shrieking", "melodious",
        "musical", "operatic", "symphonic", "dancing", "lyrical",
        "harmonic",
        "orchestral", "noisy", "dissonant", "rhythmic", "hissing",
        "singing", "crooning", "shouting", "screaming", "wailing", "crying",
        "howling",
        "yelling", "hollering", "caterwauling", "bawling", "bellowing",
        "roaring", "squealing", "beeping", "knocking", "tapping", "rapping",
        "humming", "scatting", "whispered", "whispering", "rasping",
        "buzzing", "whirring", "whistling", "whistled"
      ];
      return noisy;
    case "apocalyptic":
      var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic",
        "zombie", "collapsed", "grim", "fallen", "collapsed",
        "cannibalistic",
        "radioactive", "toxic", "poisonous", "venomous", "disastrous",
        "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing",
        "decaying",
        "rotten", "deadly", "plagued", "decimated", "rotting", "putrid",
        "decayed", "deserted", "acidic"
      ];
      return apocalyptic;
    case "insulting":
      var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous",
        "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless",
        "slow",
        "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous",
        "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow",
        "vacuous",
        "boring", "insipid", "tedious", "monotonous", "weird", "bizarre",
        "backward", "moronic", "ignorant", "scatterbrained", "forgetful",
        "careless",
        "lethargic", "insolent", "indolent", "loitering", "gross",
        "disgusting", "bland", "horrid", "unseemly", "revolting", "homely",
        "deformed",
        "disfigured", "offensive", "cowardly", "weak", "villainous",
        "fearful", "monstrous", "unattractive", "unpleasant", "nasty",
        "beastly", "snide",
        "horrible", "syncophantic", "unhelpful", "bootlicking"
      ];
      return insulting;
    case "praise":
      var praise = ["beautiful", "intelligent", "smart", "genius",
        "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome",
        "graceful",
        "talented", "exquisite", "enchanting", "fascinating", "interesting",
        "divine", "alluring", "ravishing", "wonderful", "magnificient",
        "marvelous",
        "dazzling", "cute", "charming", "attractive", "nifty", "delightful",
        "superior", "amiable", "gentle", "heroic", "courageous", "valiant",
        "brave",
        "noble", "daring", "fearless", "gallant", "adventurous", "cool",
        "enthusiastic", "fierce", "awesome", "radical", "tubular",
        "fearsome",
        "majestic", "grand", "stunning"
      ];
      return praise;
    case "scientific":
      var scientific = ["scientific", "technical", "digital", "programming",
        "calculating", "formulating", "cyberpunk", "mechanical",
        "technological",
        "innovative", "brainy", "chemical", "quantum", "astro", "space",
        "theoretical", "atomic", "electronic", "gaseous", "investigative",
        "solar",
        "extinct", "galactic"
      ]
      return scientific;
    default:
      var scientific = ["scientific", "technical", "digital", "programming",
        "calculating", "formulating", "cyberpunk", "mechanical",
        "technological",
        "innovative", "brainy", "chemical", "quantum", "astro", "space",
        "theoretical", "atomic", "electronic", "gaseous", "investigative",
        "solar",
        "extinct", "galactic"
      ]
      return scientific;
  };
};
// Pulls noun out of array using random number sent from generator
function getNoun(y) {
  switch (y) {
    case "animals":
      var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat",
        "alligator", "dachsund", "poodle", "beagle", "crocodile",
        "kangaroo",
        "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot",
        "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove",
        "toucan",
        "raccoon", "vulture", "peacock", "goldfish", "rook", "koala",
        "skunk", "goat", "rooster", "fox", "porcupine", "llama",
        "grasshopper",
        "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe",
        "badger", "lion", "mouse", "beetle", "cricket", "nightingale",
        "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust",
        "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish",
        "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail",
        "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture",
        "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose",
        "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"
      ];
      return animals;
    case "profession":
      var professions = ["doctor", "lawyer", "ninja", "writer", "samurai",
        "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
        "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter",
        "plumber", "cashier", "electrician", "waiter", "president",
        "governor",
        "senator", "scientist", "programmer", "singer", "dancer",
        "director", "mayor", "merchant", "detective", "investigator",
        "navigator", "pilot",
        "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate",
        "miner", "police"
      ];
      return professions;
    case "fantasy":
      var fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword",
        "fairy", "pegasus", "halfling", "elf", "changeling", "ghost",
        "knight", "squire", "magician", "witch", "warlock", "unicorn",
        "dragon", "wyvern", "princess", "prince", "king", "queen", "jester",
        "tower", "castle", "kraken", "seamonster", "mermaid", "psychic",
        "seer", "oracle"
      ];
      return fantasy;
    case "music":
      var music = ["violin", "flute", "bagpipe", "guitar", "symphony",
        "orchestra", "piano", "trombone", "tuba", "opera", "drums",
        "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano",
        "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind",
        "saxophone",
        "bugle", "trumpet", "sousaphone", "cornet", "stradivarius",
        "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder",
        "oboe", "conductor",
        "singer"
      ];
      return music;
    case "horror":
      var horror = ["murderer", "chainsaw", "knife", "sword", "murder",
        "devil", "killer", "psycho", "ghost", "monster", "godzilla",
        "werewolf",
        "vampire", "demon", "graveyard", "zombie", "mummy", "curse",
        "death", "grave", "tomb", "beast", "nightmare", "frankenstein",
        "specter",
        "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal",
        "skull", "bones", "undertaker", "zombie", "creature", "mask",
        "psychopath",
        "fiend", "satanist", "moon", "fullMoon"
      ];
      return horror;
    case "gross":
      var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit",
        "boil", "blister", "orifice", "secretion", "mucus", "phlegm",
        "centipede", "beetle", "fart", "snot", "crevice", "flatulence",
        "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder",
        "odor", "substance",
        "fluid", "moisture", "garbage", "trash", "bug"
      ];
      return gross;
    case "everyday":
      var everyday = ["mirror", "knife", "fork", "spork", "spoon",
        "tupperware", "minivan", "suburb", "lamp", "desk", "stereo",
        "television", "TV",
        "book", "car", "truck", "soda", "door", "video", "game", "computer",
        "calender", "tree", "plant", "flower", "chimney", "attic",
        "kitchen",
        "garden", "school", "wallet", "bottle"
      ];
      return everyday;
    case "jewelry":
      var jewelry = ["earrings", "ring", "necklace", "pendant", "choker",
        "brooch", "bracelet", "cameo", "charm", "bauble", "trinket",
        "jewelry",
        "anklet", "bangle", "locket", "finery", "crown", "tiara",
        "blingBling", "chain", "rosary", "jewel", "gemstone", "beads",
        "armband", "pin",
        "costume", "ornament", "treasure"
      ];
      return jewelry;
    case "places":
      var places = ["swamp", "graveyard", "cemetery", "park", "building",
        "house", "river", "ocean", "sea", "field", "forest", "woods",
        "neighborhood",
        "city", "town", "suburb", "country", "meadow", "cliffs", "lake",
        "stream", "creek", "school", "college", "university", "library",
        "bakery",
        "shop", "store", "theater", "garden", "canyon", "highway",
        "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"
      ];
      return places;
    case "scifi":
      var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket",
        "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
        "computer", "future", "timeMachine", "wormHole", "timeTraveler",
        "scientist", "invention", "martian", "pluto", "jupiter", "saturn",
        "mars",
        "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears",
        "molecule", "electron", "neutrino", "proton", "experiment",
        "photon", "apparatus",
        "universe", "gravity", "darkMatter", "constellation", "circuit",
        "asteroid"
      ];
      return scifi;
    default:
      var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket",
        "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
        "computer", "future", "timeMachine", "wormHole", "timeTraveler",
        "scientist", "invention", "martian", "pluto", "jupiter", "saturn",
        "mars",
        "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears",
        "molecule", "electron", "neutrino", "proton", "experiment",
        "photon", "apparatus",
        "universe", "gravity", "darkMatter", "constellation", "circuit",
        "asteroid"
      ];
      return scifi;
  };
};
var adjectives = ["dark", "color", "whimsical", "shiny", "noise", "apocalyptic",
  "insulting", "praise", "scientific"
]; // types of adjectives for pizza titles
var nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry",
  "places", "scifi"
];
// types of nouns for pizza titles
// Generates random numbers for getAdj and getNoun functions and returns a new pizza name
// 
// added the 10 to each parseint to speed it up by letting it know what number to expect
function generator(adj, noun) {
  var adjectives = getAdj(adj);
  var nouns = getNoun(noun);
  var randomAdjective = parseInt(Math.random() * adjectives.length, 10);
  var randomNoun = parseInt(Math.random() * nouns.length, 10);
  var name = "The " + adjectives[randomAdjective].capitalize() + " " + nouns[
    randomNoun].capitalize();
  return name;
};
// Chooses random adjective and random noun
function randomName() {
  var randomNumberAdj = parseInt(Math.random() * adjectives.length, 10);
  var randomNumberNoun = parseInt(Math.random() * nouns.length, 10);
  return generator(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
};
// These functions return a string of a random ingredient from each respective category of ingredients.
var selectRandomMeat = function() {
  var randomMeat = pizzaIngredients.meats[Math.floor((Math.random() *
    pizzaIngredients.meats.length))];
  return randomMeat;
}
var selectRandomNonMeat = function() {
  var randomNonMeat = pizzaIngredients.nonMeats[Math.floor((Math.random() *
    pizzaIngredients.nonMeats.length))];
  return randomNonMeat;
}
var selectRandomCheese = function() {
  var randomCheese = pizzaIngredients.cheeses[Math.floor((Math.random() *
    pizzaIngredients.cheeses.length))];
  return randomCheese;
}
var selectRandomSauce = function() {
  var randomSauce = pizzaIngredients.sauces[Math.floor((Math.random() *
    pizzaIngredients.sauces.length))];
  return randomSauce;
}
var selectRandomCrust = function() {
  var randomCrust = pizzaIngredients.crusts[Math.floor((Math.random() *
    pizzaIngredients.crusts.length))];
  return randomCrust;
}
var ingredientItemizer = function(string) {
  return "<li>" + string + "</li>";
}
// Returns a string with random pizza ingredients nested inside <li> tags
var makeRandomPizza = function() {
  var pizza = "";
  var numberOfMeats = Math.floor((Math.random() * 4));
  var numberOfNonMeats = Math.floor((Math.random() * 3));
  var numberOfCheeses = Math.floor((Math.random() * 2));
  for (var i = 0; i < numberOfMeats; i++) {
    pizza = pizza + ingredientItemizer(selectRandomMeat());
  }
  for (var i = 0; i < numberOfNonMeats; i++) {
    pizza = pizza + ingredientItemizer(selectRandomNonMeat());
  }
  for (var i = 0; i < numberOfCheeses; i++) {
    pizza = pizza + ingredientItemizer(selectRandomCheese());
  }
  pizza = pizza + ingredientItemizer(selectRandomSauce());
  pizza = pizza + ingredientItemizer(selectRandomCrust());
  return pizza;
}
// returns a DOM element for each pizza
var pizzaElementGenerator = function(i) {
  var pizzaContainer, // contains pizza title, image and list of ingredients
    pizzaImageContainer, // contains the pizza image
    pizzaImage, // the pizza image itself
    pizzaDescriptionContainer, // contains the pizza title and list of ingredients
    pizzaName, // the pizza name itself
    ul; // the list of ingredients
  pizzaContainer = document.createElement("div");
  pizzaImageContainer = document.createElement("div");
  pizzaImage = document.createElement("img");
  pizzaDescriptionContainer = document.createElement("div");
  pizzaContainer.classList.add("randomPizzaContainer");
  pizzaContainer.style.width = "33.33%";
  pizzaContainer.style.height = "325px";
  pizzaContainer.id = "pizza" + i; // gives each pizza element a unique id
  pizzaImageContainer.classList.add("col-md-6");
  pizzaImage.src =
    "data:image/png;base64,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";
  pizzaImage.classList.add("img-responsive");
  pizzaImageContainer.appendChild(pizzaImage);
  pizzaContainer.appendChild(pizzaImageContainer);
  pizzaDescriptionContainer.classList.add("col-md-6");
  pizzaName = document.createElement("h4");
  pizzaName.innerHTML = randomName();
  pizzaDescriptionContainer.appendChild(pizzaName);
  ul = document.createElement("ul");
  ul.innerHTML = makeRandomPizza();
  pizzaDescriptionContainer.appendChild(ul);
  pizzaContainer.appendChild(pizzaDescriptionContainer);
  return pizzaContainer;
}
// resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
var resizePizzas = function(size) {
  window.performance.mark("mark_start_resize");   // User Timing API function
  // Changes the value for the size of the pizza above the slider
  function changeSliderLabel(size) {
    switch (size) {
      case "1":
        document.getElementById("pizzaSize").innerHTML = "Small";
        return;
      case "2":
        document.getElementById("pizzaSize").innerHTML = "Medium";
        return;
      case "3":
        document.getElementById("pizzaSize").innerHTML = "Large";
        return;
      default:
        console.log("bug in changeSliderLabel");
    }
  }
  changeSliderLabel(size);
  // Returns the size difference to change a pizza element from one size to another. Called by changePizzaSlices(size).
  function determineDx(elem, size) {
    var oldwidth = elem.offsetWidth;
    var windowwidth = document.getElementById("randomPizzas").offsetWidth;
    var oldsize = oldwidth / windowwidth;

    function sizeSwitcher(size) {
      switch (size) {
        case "1":
          return 0.25;
        case "2":
          return 0.3333;
        case "3":
          return 0.5;
        default:
          console.log("bug in sizeSwitcher");
      }
    }
    var newsize = sizeSwitcher(size);
    var dx = (newsize - oldsize) * windowwidth;
    return dx;
  }
  // Iterates through pizza elements on the page and changes their widths
  //removed some variables from loop and loop declaration
  //switched from querySelectorAll to getElementsByClassName based on jsPerf
  //did the same elsewhere for getElementById
  var randomPizzas = document.getElementsByClassName("randomPizzaContainer");
  var dx = determineDx(randomPizzas[0], size);
  var newwidth = (randomPizzas[0].offsetWidth + dx) + 'px';
  var pizzaContLen = randomPizzas.length

  function changePizzaSizes(size) {
    for (var i = 0; i < pizzaContLen; i++) {
      document.getElementsByClassName("randomPizzaContainer")[i].style.width =
        newwidth;
    }
  }
  changePizzaSizes(size);

  // User Timing API is awesome
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
  var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
  console.log("Time to resize pizzas: " + timeToResize[0].duration + "ms");  
}

window.performance.mark("mark_start_generating"); // collect timing data

//creating the pizzas in memory so we can append just once
var generatedPizzas = document.createDocumentFragment();
var pizzasDiv = document.getElementById("randomPizzas");

function addPizzas() {
  for (var i = 0; i < 100; i++) {
    generatedPizzas.appendChild(pizzaElementGenerator(i))
  }
  //append once
  pizzasDiv.appendChild(generatedPizzas);
}

// User Timing API again. These measurements tell you how long it took to generate the initial pizzas
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
function logAverageFrame(times) {   // times is the array of User Timing measurements from updatePositions()
  var numberOfEntries = times.length;
  var sum = 0;
  for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
    sum = sum + times[i].duration;
  }
  console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
}

//these will both be set on page load
var items = null;
var itemsLength = null;
// Moves the sliding background pizzas based on scroll position
function updatePositions() {
  frame++;  
  window.performance.mark("mark_start_frame");

  //removed items variables from loop and loop declaration
  var scrollSave = document.body.scrollTop;
  var thisItem;
  var phase;
  for (var i = 0; i < itemsLength; i++) {
    phase = Math.sin((scrollSave / 1250) + (i % 5));
    thisItem = items[i];
    thisItem.style.left = thisItem.basicLeft + 100 * phase + 'px';
    //tried tansformX and transform3d but despite what I expected,
    //they had a speed penalty over style.left on my computer
    //if for whatever reason that changes on instructor machine,
    //here is the simpler of the 2 to test as well.
    //thisItem.style.transform = "translateX("+ 100 * phase + "px)";
  }

    // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }  
}



// runs updatePositions on scroll
window.addEventListener('scroll', updatePositions);
//creating the pizzas in memory so we can append just once
var imgTree = document.createDocumentFragment();

function fillImgTree(i, cols, s, h) {
  var elem = document.createElement('img');
  elem.className = 'mover';
  elem.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABkCAMAAAD9n+0GAAAAPFBMVEUAAACxOSzAUDupLCLOZ0j5xIfdhVrhpkvopnj8vWyoWyXYm0SfJRvOiz57QhvBeDP+0pm9Hy1PKhEsFwmS7mlJAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAABcVJREFUeF7tl9luKzkMRIeLll69/f+/TrNISfbtCzuZx4GJIIlh6LhIFtnyP//r+MY3vvF4PO4ej8d/Rez7PF+eYp7n/f572t0gm8VyBP5x2v57DhiIgt/gGesXsh6zYwpi2YqHAcH6sazdOIHZmESEWLcOM9bjZ4Kcsygz062HEGhgAfVZkOu5ANKCg8aXpRTkeP+pIJYnjk7TVLKywzawLvv7lrkgJXmWkqfr9ZpSmqq/pi1Qn0EtpTJNmVkNhEiTvyVaClAfQIU8pTwlOzwBFDFl1Zz1xo56D1rYMzLOc9ScQbY0C13eoB6zg6AIGSVlIs7OIVlp1S5NFqD+aobD1yO1Yh9PcsS6GiodoPX44Ya6Edw//zU3gMI4JollxXGp12t2KLAg8Y2Bup9zc5A2AyEfMs5qOREFlqKL+RZVP1v7qUisVu1sGOiggwTMEZJClPlqOVD7WVKAOE/eNqUVARKDYrxG0kD9WfS5g3rzMyiWFNsLVyUUb6cC9Sj6SRJSy91FdfXkRKzKhBe08vCoobYD9fijStG2J0PzKkQrCWFOGEXnYVegeFRqSNrasA5Rgi1XQZqyEoUHRqm4oFJnSeqgMWQ5R7rThHWQWcBrpqLyKsokwdyvIMT1KZIZjOD0qLosL566t+Q0YVJVPSFEqrk2kobDRJm1htPD6CM5jcbpTYTIK5umzKYhhwbrgISxSPia1EXtL2ZiJ6kZh0goRAiO1taCFfNnxFVEMTOR3phdAqniqIjgcBUcbIXJzfUibtl62FOefL5f2jYphyQRWpsFlSjWQWgCpsNWLTBnT2820iLwAK8RIPHr3CZXK9JwbCT1iRkzBxA0+Vw0kh+OUbRmgBPrptn8MgxeNjdTdv1E6Be3imizAUhCsfaKNtJjFFxjdftJEUrguj5Pzk2uWrO4QWlikIo/kQcpRVXJSN53hgaqzlERymmyJsJPCSS10dsHiUHCXmUibrbOyhRvVN/APIW84xdIlzNpur4JzBwSBxfhpO1E4jOp1trPZXRMmt9DvznTSPPoHb0uAgMktI6Dld1CgxTPBSpnUqSXlQS1Yfcypa4JsCA/byiQ4My2nRIsg8IqHrvIR1vj4CLtmPEA3QYJw4LuJREH1EqBItQ7fMZWPmXO6F08PxtpN9IBQs1rK2zOQgBh6DT4PkNHEFUUPEh73wVbJ1GMp9YYVLEzJNKKljFBJJKm2ysJNri020BaY7llq5NEtzLmFh4w0S47D9K89xGGJphZo1D4cGclJBeaMv5CNUgEE7QFFSTudx2sTLcBtri203TVtu4ow+KEgt/70lzEH8AhhEhjH61cEtawS8nYD76gqpOWF9Lm152crox8YijiUeUuxT7vzSXiayfNMMFzyXlKJgifqI0EVgq7es7Y9DWuKyZpH1+dliZK1oiwIGmBKFx9Hc5Cq3B1Sbft5VvMbN1zl9NKvnIZQytx6RkxlpO6pOhcpGcDw3CUD6qQqNe278+kzJrroCE3WkLSSG+z/MwHFKiKJ0u/OieS+ABESJLNJY2Y7VavWAeJjGUpMQ7Djj5sKxGttZHYQCUkjfS6qDKljIsIDvcRroDajzoHkrT0xg1RhtLwVASvbYSTmxwoGpfMsVDOomD0htKmQ0DyEBQNIFr6oJxFhT3B8ptKVDyD2EgYXdnOuUEUUAxULkC1yZHkV+rxlAdJS3fAa+yOkptnOC5MjP/JUcIpSFRidE/xOEhmdSbcf8LL/YEH8+PBntKUYcnI7Rx3oOJ7eZmSDW+Ob7AWGc8B/IUlO+gce0OVTW6as3qnp9j8GXBF9tRBb1ELUD1yO66loPtCenDegYCaA0WDxQAhgNlQ6zcg1AoosJYLB22EUY5AZujaJxRYOPICo4tjPgsaGYIVMGU6gpk7xwSFHz/LChZoPRbHXIYdP7Ogy2CgIRyDvMD5aTx2CAPNAxSrc+T1K9r9vkNcxLzvHzHf+MY3vvEv2KmqnF95uKoAAAAASUVORK5CYII=";
  elem.style.height = "100px";
  elem.style.width = "73px";
  elem.style.left = ((i % cols) * s) + "px" ;
  elem.basicLeft = ((i % cols) * s);
  elem.style.top = (Math.floor(i / cols) * h) + 'px';
  imgTree.appendChild(elem);
}

// Generates the sliding pizzas when the page loads.
// changed number of pizzas to render to a dynamic number
// that will give 4 visible rows on max screen normal zoom
// should probably also have resize and zoom event listeners to 
// move them around but I think this page is less about being 
// practical and more about fixing speed issues
document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  //var s = screen.availWidth / cols;
  var s = 256;
  var h = screen.availHeight / 4;
  var pizzaNum = cols * 4;
  console.log(pizzaNum);
  
  var movingPizzas = document.getElementById("movingPizzas1")
  for (var i = 0; i < pizzaNum; i++) {
    fillImgTree(i, cols, s, h);
  }
  //add all of our pizzas after loading so we can append just once
  //the snap in should be negligibles but increased load speed
  //should help with percieved speed
  addPizzas();
  movingPizzas.appendChild(imgTree);
  items = document.getElementsByClassName('mover');
  itemsLength = items.length;
});