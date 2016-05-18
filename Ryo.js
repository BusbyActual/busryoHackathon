//create object to hold all game-specific valuables
var all = {
	user: {},
	numStages: 0,
	stages: [],
	currentLocation: 0,
	bossStage: {}
}
var stageVertices = [[0,1,2],[1,0,4],[2,0],[3,2,1],[4,0,1,5],[5,4,6],[6,5,7],[7]];
//create object constructors for all creatures, items, persons, and stages in the game

//create object constructors for all creatures, items, persons, and stages in the game
function Creature (name, type, description, health, damage) {
	this.name = name;
	this.type = type;
	this.description = description;
	this.health = health;
	this.damage = damage;
	this.items = [];
	this.smallSprite = '<img class="' + this.name + 'Small" src="imgs/sprites/trans.png"/>';
	this.bigSprite = '<img class="' + this.name + 'Big" src="imgs/sprites/trans.png"/>';
}

function Boss (name, type, desc1, desc2) {
	this.name = name;
	this.type = type;
	this.description = [desc1, desc2];
	this.health = 20;
	this.damage = 3;
	this.smallSprite = '<img class="' + this.name + 'Small" src="imgs/sprites/trans.png"/>';
	this.bigSprite = '<img class="' + this.name + 'Big" src="imgs/sprites/trans.png"/>';
}

function Item (name, type, description) {
	this.name = name;
	this.type = type;
	this.description = description;
	this.properties = this.addProperties();
}

function Person (name, gender, bigSprite, smallSprite) {
	this.name = name;
	this.gender = gender;
	this.bigSprite = bigSprite;
	this.smallSprite = smallSprite;
	this.health = 0;
	this.items = [];
	this.using = [];
}

function Stage (name, type, description, occupants) {
	this.name = name;
	this.type = type;
	this.description = description;
	this.occupants = occupants; //should be an array
	this.synopsis = ''; // to hold the ultimate synopsis of the room, after all values are set
}


//create any methods needed by the object constructors
//create method to add the properties to items
Item.prototype.addProperties = function() {
	console.log('addPRoperties called on ' + this.name);
	//create a property to return
	var property;

	//create a switch statement to go through all the possible values for item name
	switch(this.name) {
		case 'gold':
			switch(this.description) {
				case 'shiny':
					property = 80;
					break;
				case 'old':
					property = 50;
					break;
				case 'bloody':
					property = 40;
					break;
				case 'stained':
					property = 20;
					break;
				case 'magical':
					property = 100;
					break;
				default:
					property = 'ERROR: Something when wrong in Item.addProperties > gold';
					break;
			}
			break;
		case 'ie6':
			switch(this.description) {
				case 'shiny':
					property = 80;
					break;
				case 'old':
					property = 50;
					break;
				case 'bloody':
					property = 40;
					break;
				case 'stained':
					property = 20;
					break;
				case 'magical':
					property = 100;
					break;
				default:
					property = 'ERROR: Something when wrong in Item.addProperties > gold';
					break;
			}
			break;
		case 'tome':
			switch(this.description) {
				case 'shiny':
					property = 80;
					break;
				case 'old':
					property = 50;
					break;
				case 'bloody':
					property = 40;
					break;
				case 'stained':
					property = 20;
					break;
				case 'magical':
					property = 100;
					break;
				default:
					property = 'ERROR: Something when wrong in Item.addProperties > gold';
					break;
			}
			break;
		case 'sword':
			switch(this.description) {
				case 'shiny':
					property = 80;
					break;
				case 'old':
					property = 50;
					break;
				case 'bloody':
					property = 40;
					break;
				case 'stained':
					property = 20;
					break;
				case 'magical':
					property = 100;
					break;
				default:
					property = 'ERROR: Something when wrong in Item.addProperties > gold';
					break;
			}
			break;
		case 'map':
			switch(this.description) {
				case 'shiny':
					property = 80;
					break;
				case 'old':
					property = 50;
					break;
				case 'bloody':
					property = 40;
					break;
				case 'stained':
					property = 20;
					break;
				case 'magical':
					property = 100;
					break;
				default:
					property = 'ERROR: Something when wrong in Item.addProperties > gold';
					break;
			}
			break;
		case 'rope':
			switch(this.description) {
				case 'shiny':
					property = 80;
					break;
				case 'old':
					property = 50;
					break;
				case 'bloody':
					property = 40;
					break;
				case 'stained':
					property = 20;
					break;
				case 'magical':
					property = 100;
					break;
				default:
					property = 'ERROR: Something when wrong in Item.addProperties > gold';
					break;
			}
			break;
		case 'holy water':
			switch(this.description) {
				case 'shiny':
					property = 80;
					break;
				case 'old':
					property = 50;
					break;
				case 'bloody':
					property = 40;
					break;
				case 'stained':
					property = 20;
					break;
				case 'magical':
					property = 100;
					break;
				default:
					property = 'ERROR: Something when wrong in Item.addProperties > gold';
					break;
			}
			break;
		case 'treasure':
			switch(this.description) {
				case 'shiny':
					property = 80;
					break;
				case 'old':
					property = 50;
					break;
				case 'bloody':
					property = 40;
					break;
				case 'stained':
					property = 20;
					break;
				case 'magical':
					property = 100;
					break;
				default:
					property = 'ERROR: Something when wrong in Item.addProperties > gold';
					break;
			}
			break;
		case 'stuff':
			switch(this.description) {
				case 'shiny':
					property = 80;
					break;
				case 'old':
					property = 50;
					break;
				case 'bloody':
					property = 40;
					break;
				case 'stained':
					property = 20;
					break;
				case 'magical':
					property = 100;
					break;
				default:
					property = 'ERROR: Something when wrong in Item.addProperties > gold';
					break;
			}
			break;
		default:
			property = "ERROR: Something went wrong in Item.addProperties"
	}

	return property;
}

//create method to create the synopsis for a stage
Stage.prototype.makeSynopsis = function() {
	console.log('makeSynopsis called on ' + this.name);
	this.synopsis = 'You are in ' + (("aeiou".indexOf(this.type[0]) > 0) ? 'an ' : 'a ') + this.type + ' ' + this.name + '. ';
	var placeholder = this;
	each(this.occupants, function(value) {
		if (value instanceof Person) {
			placeholder.synopsis += 'There\'s a ' + ((value.gender === 'male') ? 'man' : 'woman') + ' in the corner, waiting patiently. ';
		} else if (value instanceof Boss) {
			placeholder.synopsis += 'Standing before you is ' + (("aeiou".indexOf(value.type[0]) > 0) ? 'an ' : 'a ') + value.type + ' ' + value.name + ', with ' + value.description[0] + ' and ' + value.description[1] + '.';
		} else {
			switch (value.description) {
				case 'ancient':
				case 'renowned':
					placeholder.synopsis += 'You\'re eye can\'t help but be drawn towards ' + (("aeiouAEIOU".indexOf(value.type[0]) > 0) ? 'an ' : 'a ') + value.type + ' ' + value.name + ' near the center of the room. ';
					break
				case 'innocent': 
				case 'small':
					placeholder.synopsis += '' + (("aeiou".indexOf(value.description[0]) > 0) ? 'An ' : 'A ') + value.description + ' ' + value.type + ' ' + value.name + ' watches you from a far corner. ';
					break;
				case 'big':
				case 'rugged':
					placeholder.synopsis += '' + (("aeiou".indexOf(value.description[0]) > 0) ? 'An ' : 'A ') + value.description + ' brute ' + value.type + ' ' + value.name + ' has caught sight of you, beady eyes narrowing in disdain. ';
					break;
				case 'intelligent':
					placeholder.synopsis += 'You catch ' + (("aeiouAEIOU".indexOf(value.type[0]) > 0) ? 'an ' : 'a ') + value.type + ' ' + value.name + ' looking you over with strangely intelligent eyes. ';
					break;
				default:
					plaeholder.synopsis += "ERROR";
			}
		}
	})
}



function fightMe(creature){
   var lastManStanding = true;
   var removeFallen =  all.stages[all.currentLocation].occupants;
   var person = all.user;
 	
   var temp = 0;
   all.user.items.length > 0 ? personDamage=items[0].property : personDamage = 3;
   while(lastManStanding&&creature.health > 0){
   			console.log(person['name'] + ' attacks ' + creature['name'] +' for ' + person['damage'] + ' damage.');
   			temp = creature['health'] - person['damage'];
   			console.log(creature['health'] + ' - ' + person['damage'] + ' = ' + temp);
   			creature['health'] = temp;

   			console.log(creature['name'] + ' attacks ' + person['name'] +' for ' + creature['damage'] + ' damage.');
   			temp = person['health'] - creature['damage'];
   			console.log(person['health'] + ' - ' + creature['damage'] + ' = ' + temp);
   			person['health'] = temp;

   if(creature['health'] <= 0 && person['health'] <= 0){
   		console.log("The hero " + person['name'] + ' fought valiantly and vanquished ' + creature['name'] +'. However, '
   		+ person['gender'] + ' fell in the duty of battle.' );
   		removeFallen.splice(removeFallen.indexOf(creature),removeFallen.indexOf(creature) + 1);
    }else if (creature['health'] <= 0){
	 removeFallen.splice(removeFallen.indexOf(creature),removeFallen.indexOf(creature) + 1);
    	console.log('Glorious! Our hero has slain a ' + creature['name']);
    }else if (person['health'] <= 0){
    	console.log('Our hero has fallen..');
    	// <PlayAgain?> have dialogue to reset game?
    }
    	//make combat per click
    	lastManStanding = false;
    
 }
 	//RefreshSprites
 	moveUser(all.currentLocation);
}



//make ranmoizer 
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//make helper function to iterate over arrays
function randomArrayElement(array){
	var index = getRandomArbitrary(0,array.length);
	return array[index];
}

// specify object and property we want randomized.
function randomObject(objectTemplate,objectProp){
	var value ='';
	var objectProp = objectTemplate[objectProp];
  		
		return	objectTemplate.objectProp > 0 ? value = randomArrayElement(objectProp) : value = value;  		 
}



///
function moveUser(location){
	all.currentLocation = location;
	all.currentCreatures=[];
	$('#options').html('');
	$('#sidebar').html('');

	for (var i = 1; i < stageVertices[all.currentLocation].length; i++) {
		$('#options').append('<button type="button" id="move' + stageVertices[all.currentLocation][i] + '">Go to room ' + stageVertices[all.currentLocation][i] + '</button>');
	}
	var chanceToEscape = false;

	var cantEscape = getRandomArbitrary(1, 100);
	cantEscape > 30 ? chanceToEscape = true : chanceToEscape = chanceToEscape;

	$('#move0').on('click', function() {
		if(!chanceToEscape){
			cantRunAway();
		}else{
			moveUser(0);
		}
		
	});
	$('#move1').on('click', function() {
		if(!chanceToEscape){
			cantRunAway();
		}else{
			moveUser(1);
		}
	});
	$('#move2').on('click', function() {
		if(!chanceToEscape){
			cantRunAway();
			moveUser(2);
		}
	});
	$('#move3').on('click', function() {
		if(!chanceToEscape){
			cantRunAway();
		}else{
			moveUser(3);
		}
	});
	$('#move4').on('click', function() {
		if(!chanceToEscape){
			cantRunAway();
		}else{
			moveUser(4);
		}
	});
	$('#move5').on('click', function() {
		if(!chanceToEscape){
			cantRunAway();
		}else{
			moveUser(5);
		}
	});	
	$('#move6').on('click', function() {
		if(!chanceToEscape){
			cantRunAway();
		}else{
			moveUser(6);
		}
		$('#text').prepend('<div class="alert alert-danger"><strong>WARNING!</strong> Once you enter the boss level, you cannot turn back!</div>');
		$('#move7').text('Boss Level');
	});
	$('#move7').on('click', function() {
		moveUser(7);
		// added mechanism for healing when getting to final boss.
		all.user.health = 20;
	});

	$('#text').html(all.stages[all.currentLocation].synopsis);

	writeSidebar();
}	
		
	
//Penalty for tring to leave a room of monsters.
function cantRunAway(){
	//find a random monster near me
	var persons = all.stages[all.currentLocation].occupants;
	var monsters = [];
	for(var i = 0; i < persons.length;i++){
		if(persons[i] instanceof Creature){
			monsters.push(persons[i]);
		}
	}
	if(monsters.length > 0){
	var randCreature =monsters[getRandomArbitrary(0,monsters.length)];
	console.log('You are unable to leave unscathed. A ' + randCreature.description + ' ' + randCreature.type + ' '  + randCreature.name + ' attacks.');
	all.user.health -= randCreature.damage;
	console.log(all.user.name + ' takes '+ randCreature.damage +' damage.');
	moveUser(all.currentLocation);
  }
}
		
	
	//<img class="clown" src="imgs/sprites/trans.png"/>

function writeSidebar () {
	//clear the sidebar of any previous data
	$('#sidebar').html('');

	//build table for user info
	$('#sidebar').append('<table class="sidebarTable"><tr><td><strong>User:</strong></td></tr><tr><td class="sprite"><a id="fight' + i + '" href="javascript:void(0);">' + all.user.smallSprite + '</a></td><td colspan="2">' + all.user.name + '</td></tr><tr><td colspan="2">Health:</td></tr><tr><td colspan="2"><div class="progress"><div id="userHealth" class="progress-bar progress-bar-success" style="width: ' + (all.user.health/20 * 100) + '%"><span class="sr-only">40% Complete (success)</span></div></div></td></tr><tr><td style="height: 30px;"></td></tr></table>');		 +	$('#sidebar').append('table class="sidebarTable"><tr><td></table>');
 		
 	//check if user's health is too low		
 	if ((all.user.health/20 * 100) < 20) {		
 		$('#userHealth').removeClass('progress-bar-success progress-bar-warning progress-bar-danger').addClass('progress-bar-danger');		
 	} else if ((all.user.health/20 * 100) < 40) {		
 		$('#userHealth').removeClass('progress-bar-success progress-bar-warning progress-bar-danger').addClass('progress-bar-warning');		
 	}

	//build table for all occupants
	$('#sidebar').append('<table class="sidebarTable oocTable"><tr><td><strong>Occupants:</strong></td></tr></table>')
	for (var i = 0; i < all.stages[all.currentLocation].occupants.length; i++) {
		var items = all.stages[all.currentLocation].occupants[i];
		if (items instanceof Person) {
			$('.oocTable').append('<tr><td class="sprite"><a id="fight' + i + '" href="javascript:void(0);">' + items.smallSprite + '</a></td><td> ' + items.name + '</td></tr>');

		} else {
			$('.oocTable').append('<tr><td class="sprite"><a id="fight' + i + '" href="javascript:void(0);">' + items.smallSprite + '</a></td><td>' + items.type + ' ' + items.name + '</td></tr>');
		}

	}

	$('#fight0').on('click', function() {
		fightMe(all.stages[all.currentLocation].occupants[0]);
	});
	$('#fight1').on('click', function() {
		fightMe(all.stages[all.currentLocation].occupants[1]);
	});
	$('#fight2').on('click', function() {
		fightMe(all.stages[all.currentLocation].occupants[2]);
	});
}


//create templates for all possible values for the different objects
var creatureTemplate = {
	name : ['zombie','bear','clown','rabbit','kitten','wizard','warrior','cultist','rogue','programmer'],
	type : ['Water','Fire','Earth','Wind','Undead','Humanoid', 'Dwarf','Orc', 'Beast','Developer'],
	description : ['ancient','innocent','big','small','intelligent','rugged','renowned']
};

var bossTemplate = {
	name : ['dragon', 'demon', 'mutation'],
	type : ['great', 'massive', 'roaring', 'flaming', 'towering', 'terrifying'],
	description : ['a lashing tail', 'burning eyes', 'rotting flesh', 'a humbling roar', '', 'terrifying']
}

var itemTemplate = {
	name:['gold','ie6','tome','sword','map','rope','holy water','treasure','stuff'],
	//maybe type can be added dynamically according to the name/description?
	type: ['consumable','equiptment','currency','weapon'],
	description: ['shiny','old','bloody','stained','magical'],
	//properties could determine how good an item is at something, as per it's description and name
	//commented out to be added later
	properties: [] //Not sure about this one. We can do some sort of ammount? 
};

var stageTemplate = {
	name:['house','space ship','dungeon','cave','castle','labyrinth','city','park'],
	type:['ornate','mystic','gloomy','rustic','metalic','stone','alien'],
	description:['unfamilliar to you','chaotic','jurrasic','']
};

var personTemplate = {
	name:['billy','susie','stan','George R.R. Martin','Busby','he who shall not be named','mr.Rogers'],
	gender:['male','female']
};

//create any functions needed
//create each
function each (collection, iterator) {
	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++) {
			iterator(collection[i], i, collection);
		}
	} else {
		for (var key in collection) {
			iterator(collection[key], key, collection);
		}
	}
}

//create function to generate a random stage
function genStage() {
	console.log('genStage called');
	//check if there are any stages left to generate (should be checked previously - Failsafe)
	//if (all.numStages) {
		//create local variables for values in the Stage
		var name;
		var type;
		var desc;
		var occ = [];

		//set each of the values, pulling from values stored in stageTemplate
		var number = Math.floor((Math.random() * 100) * (stageTemplate.name.length/100));
		name = stageTemplate.name[number];
		type = stageTemplate.type[Math.floor((Math.random() * 100) * (stageTemplate.type.length/100))];
		desc = stageTemplate.description[Math.floor((Math.random() * 100) * (stageTemplate.description.length/100))];

		//determine how many creatures/people will be in the room
		var numThings = Math.ceil((Math.random() * 100) * 0.03);
		//roll to see if a person will appear
		var random = Math.floor((Math.random() * 100) * 0.04);
		//generate the number of people/creatures determined above
		for (var i = 0; i < numThings; i++) {
			//if a person is set to appear, generate the person first
			if (!random) {
				var name2 = personTemplate.name[Math.floor((Math.random() * 100) * (personTemplate.name.length/100))];
				var gender2 = personTemplate.gender[Math.floor((Math.random() * 100) * (personTemplate.gender.length/100))]

				//get a random number between 1 and 5
				var avi = getRandomArbitrary(1,5);
				//if the person is male, get his avatar from the male avatars (6-10)
				gender2 === 'male' ? avi += 5 : avi;

				//assign the sprites as per the random number
				var big = '<img class="person' + avi + 'big" src="imgs/sprites/trans.png"/>'
				var small = '<img class="person' + avi + 'small" src="imgs/sprites/trans.png"/>'


				occ[i] = new Person(name2, gender2, big, small);
				//change random so that a person will not be generated again
				random = 1;
			} else {
				var name2 = creatureTemplate.name[Math.floor((Math.random() * 100) * (creatureTemplate.name.length/100))];
				var type2 = creatureTemplate.type[Math.floor((Math.random() * 100) * (creatureTemplate.type.length/100))];
				var description2 = creatureTemplate.description[Math.floor((Math.random() * 100) * (creatureTemplate.description.length/100))];
				var health2 = getRandomArbitrary(3, 8);
				var damage2 = getRandomArbitrary(1, 3);
		        occ[i] = new Creature(name2, type2, description2, health2, damage2);
				
			}
		}

		//create a new stage with values generated above
		var stage = new Stage(name, type, desc, occ);
		//makeSynopsis needs to be debugged
		stage.makeSynopsis();
		all.stages.push(stage);
		//all.numStages--
//	} else {
//		console.log('ERROR: Out of stages to generate');
//	}
}

function genBossStage() {
	var name;
	var type;
	var desc;
	var occ = [];

	//set each of the values, pulling from values stored in stageTemplate
	var number = Math.floor((Math.random() * 100) * (stageTemplate.name.length/100));
	name = stageTemplate.name[number];
	type = stageTemplate.type[Math.floor((Math.random() * 100) * (stageTemplate.type.length/100))];
	desc = stageTemplate.description[Math.floor((Math.random() * 100) * (stageTemplate.description.length/100))];

	var name2 = bossTemplate.name[Math.floor((Math.random() * 100) * (bossTemplate.name.length/100))];
	var type2 = bossTemplate.type[Math.floor((Math.random() * 100) * (bossTemplate.type.length/100))];
	var desc1 = bossTemplate.description[Math.floor((Math.random() * 100) * (bossTemplate.description.length/100))];
	var desc2 = bossTemplate.description[Math.floor((Math.random() * 100) * (bossTemplate.description.length/100))];
	while (desc1 === desc2) {
		desc2 = bossTemplate.description[Math.floor((Math.random() * 100) * (bossTemplate.description.length/100))];
	}
    occ[0] = new Boss(name2, type2, desc1, desc2);

	//create a new stage with values generated above
	var stage = new Stage(name, type, desc, occ);
	console.log(stage);
	//makeSynopsis needs to be debugged
	stage.makeSynopsis();
	all.stages.push(stage);
	console.log(all.stages);
	all.numStages--
}

//function generate a random main background
function genBackground() {
	var random = Math.ceil((Math.random() * 100) * 0.05);
	switch (random) {
		case 1:
			swapStyle('background01.css');
			break;
		case 2:
			swapStyle('background02.css');
			break;
		case 3:
			swapStyle('background03.css');
			break;
		case 4:
			swapStyle('background04.css');
			break;
		case 5:
			swapStyle('background05.css');
			break;
		default:
			console.log('ERROR: style not created')
	}
}

//create function to swap out the dummy stylesheet
function swapStyle(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}

//create random game start function - holds most of the active code
function randomGameStart() {
	console.log('random game started');
	all.user.name = prompt('What\'s your name?');
	all.user.gender = prompt('Are you male or female?');
	all.user.gender = all.user.gender.toLowerCase();


	//get a random number between 1 and 5
	var avi = getRandomArbitrary(1,5);
	//if the person is male, get his avatar from the male avatars (6-10)
	all.user.gender === 'male' ? avi += 5 : avi;

	//assign the sprites as per the random number
	var big = '<img class="person' + avi + 'big" src="imgs/sprites/trans.png"/>'
	var small = '<img class="person' + avi + 'small" src="imgs/sprites/trans.png"/>'

	//changed user to a Person (to add sprites easily);
	all.user = new Person(all.user.name, all.user.gender, big, small);
	all.user.health = 20;
	all.user.damage = 2;
	//var userStartingItems = new Item(randomObject(itemTemplate,name),randomObject(itemTemplate,type),randomObject(itemTemplate,description));
	//all.user.items.push(
	//Item (name, type, description) 
	//roll for the number of stages in this dungeon
	all.numStages = Math.ceil((Math.random() * 100) * 0.06) + 2;

	//create the stages
	for (var i = 0; i < 7; i++) {
		genStage();
	}

	genBossStage();

	moveUser(0);
}


//start the game
console.log('game start');
//generate a random background in css
genBackground();
//greet the user and explain what the site is
$('#text').html('Welcome to the Adventure Game Creator, we\'ll fill this in more later . . .');
$('#options').html('<center><button type="button" id="continue" class="btn btn-success">Continue</button>');

$('#continue').on('click', function() {
	randomGameStart();
});
