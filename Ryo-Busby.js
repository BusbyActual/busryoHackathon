//create object to hold all game-specific valuables
var all = {
	user: {},
	numStages: 0,
	stages: [],
	currentLocation: 0,
	bossStage: [7]
}
var stageVertices = [[0,1,2],[1,0,4],[2,0],[3,2,1],[4,0,1,5][5,4,6],[6,7],[7,6]];
//create object constructors for all creatures, items, persons, and stages in the game


function fightMe(){
   var lastManStanding = true;
   var personDamage = 0;
   var person = all.user;
  // var Creature
   //var person = { health: 20, damage: 4, name:'Busby'};
  var creature = { health: 10, damage: 2,name:'BadMans'};
   var temp = 0;
   all.user.item.length > 0 ? personDamage=item[0].property : personDamage = 3;
   while(lastManStanding){
   			console.log(person['name'] + ' attacks ' + creature['name'] +' for ' + person['damage'] + ' damage.');
   			temp = creature['health'] - person['damage'];
   			console.log(creature['health'] + ' - ' + person['damage'] + ' = ' + temp);
   			creature['health'] = temp;

   			console.log(creature['name'] + ' attacks ' + person['name'] +' for ' + creature['damage'] + ' damage.');
   			temp = person['health'] - creature['damage'];
   			console.log(person['health'] + ' - ' + creature['damage'] + ' = ' + temp);
   			person['health'] = temp;

   if(creature['health'] <= 0 && person['health'] <= 0){
   		lastManStanding = false;
   		console.log("The hero " + person['name'] + ' fought valiantly and vanquished ' + creature['name'] +'. However, '
   		+ person['gender'] + ' fell in the duty of battle.' );
    }else if (creature['health'] <= 0){
    	lastManStanding = false;
    	console.log('Glorious! Our hero has slain a ' + creature['name']);
    }else if (person['health'] <= 0){
    	lastManStanding = false;
    	console.log('Our hero has fallen..');
    	// <PlayAgain?> have dialogue to reset game?
    }
 }
}

function moveUser(location){
	all.currentLocation = location;
	$('#options').html('');
	$('#sidebar').html('');
	for (var i = 1; i < stageVertices[all.currentLocation].length; i++) {
		$('#options').append('<button type="button" id="move' + stageVertices[all.currentLocation][i] + '">Go to room ' + stageVertices[all.currentLocation][i] + '</button>');
	}

	$('#move0').on('click', function() {
		moveUser(0);
	});
	$('#move1').on('click', function() {
		moveUser(1);
	});
	$('#move2').on('click', function() {
		moveUser(2);
	});
	$('#move3').on('click', function() {
		moveUser(3);
	});
	$('#move4').on('click', function() {
		moveUser(4);
	});
	$('#move5').on('click', function() {
		moveUser(5);
	});
	$('#move6').on('click', function() {
		moveUser(6);
		$('#text').prepend('<div class="alert alert-danger"><strong>WARNING!</strong> Once you enter the boss level, you cannot turn back!</div>');
		$('#move7').text('Boss Level');
	});
	$('#move7').on('click', function() {
		moveUser(7);
	});

	$('#text').html(all.stages[all.currentLocation].synopsis);

	for (var i = 1; i < all.stages[all.currentLocation].length; i++) {
		//$('#sidebar').append('<button type="button" id="move' + stageVertices[all.currentLocation][i] + '">Go to room ' + stageVertices[all.currentLocation][i] + '</button>');
		each(all.stages[currentLocation].occupants,function(values){
			$('#sidebar').append(all.stages[all.currentLocation.occupants]);
		})
		
	}
}

function Creature (name, type, description) {
	this.name = name;
	this.type = type;
	this.description = description;
	this.items = [];
}

function Item (name, type, description) {
	this.name = name;
	this.type = type;
	this.description = description;
	this.properties = this.addProperties();
}

function Person (name, gender) {
	this.name = name;
	this.gender = gender;
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


//create templates for all possible values for the different objects
var creatureTemplate = {
	name : ['zombie','bear','clown','rabbit','kitten','wizard','warrior','cultist','rogue','programmer'],
	type : ['Water','Fire','Earth','Wind','Undead','Humanoid', 'Dwarf','Orc', 'beast','developer'],
	description : ['ancient','innocent','big','small','intelligent','rugged','renowned'],
};

var itemTemplate = {
	name:['gold','ie6','tome','sword','map','rope','holy water','treasure','stuff'],
	//maybe type can be added dynamically according to the name/description?
	type: ['consumable','equiptment','currency','weapon'],
	description: ['shiny','old','bloody','stained','magical'],
	//properties could determine how good an item is at something, as per it's description and name
	//commented out to be added later
	//properties: [] //Not sure about this one. We can do some sort of ammount? 
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
		} else {
			placeholder.synopsis += '' + (("aeiou".indexOf(value.description[0]) > 0) ? 'An ' : 'A ') + value.description + ' looking ' + value.type + ' ' + value.name + ' stands in the room. ';
			
		}
	})
}

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
				occ[i] = new Person(personTemplate.name[Math.floor((Math.random() * 100) * (personTemplate.name.length/100))], personTemplate.gender[Math.floor((Math.random() * 100) * (personTemplate.gender.length/100))]);
				//change random so that a person will not be generated again
				random = 1;
			} else {
				var name2 = creatureTemplate.name[Math.floor((Math.random() * 100) * (creatureTemplate.name.length/100))];
				var type2 = creatureTemplate.type[Math.floor((Math.random() * 100) * (creatureTemplate.type.length/100))];
				var description2 = creatureTemplate.description[Math.floor((Math.random() * 100) * (creatureTemplate.description.length/100))];
				occ[i] = new Creature(name2, type2, description2);
			}
		}

		//create a new stage with values generated above
		var stage = new Stage(name, type, desc, occ);
		console.log(stage);
		//makeSynopsis needs to be debugged
		stage.makeSynopsis();
		all.stages.push(stage);
		console.log(all.stages);
		all.numStages--
//	} else {
//		console.log('ERROR: Out of stages to generate');
//	}
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
	//roll for the number of stages in this dungeon
	all.numStages = Math.ceil((Math.random() * 100) * 0.06) + 2;

	//create the stages
	for (var i = 0; i < 8; i++) {
		genStage();
	}
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