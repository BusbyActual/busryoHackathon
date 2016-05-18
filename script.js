var Person = function(name,gender,age){
	this.name = name;
	this.gender = gender;
	this.age = age;	
	this.using = [];
	this.items = [];
}

var Creature = function(name,type,description){
	this.name = name;
	this.type = type;
	this.description = description;
	this.items = [];
}

var Item = function(name,type,description){
	this.name = name;
	this.type = type;
	this.description = description;
	this.properties = properties; // maybe change this later
}

var Stage = function(name,type,description,occupants){
	this.name = name;
	this.type = type;
	this.description = description;
	this.occupants = occupants;
}
///look for graph data structure.
//generate object to hold all creature objects. Do same for items and persons 

///Holder for stage & all things that are currently encountering eachother.

$('#text').html('Welcome to the Adventure Game Creator, we\'ll fill this in more later MEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEMEM. . .');
$('#options').html('<center><button type="button" id="continue" class="btn btn-success">Continue</button>');

$('#continue').on('click', function() {
	randomGameStart();
});

function randomGameStart(theme) {
	if (theme) {
		//generate that game from that theme
		//sets initial variables
		//sets first Stage (3-8 Stages total, generate as you go)
		//sets final boss
		//final boss/stage only apears once every stage has been explored
	} else {
		//generate a random game
		//generates random theme first
		//other variables based off of theme
	}

	//generate first room
	//set the scene
	//give options to move/use items
}