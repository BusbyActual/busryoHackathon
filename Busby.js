	var creatureTemplate = {
	name : ['zombie','bear','clown','rabbit','kitten','wizard','warrior','cultist','rogue','programmer'],
	type : ['Water','Fire','Earth','Wind','Undead','Humanoid', 'Dwarf','Orc', 'beast','developer'],
	description : ['ancient','innocent','big','small','intelligent','rugged','renowned'],
};

var item = {
	name:['gold','ie6','tome','sword','map','rope','holy water','treasure','stuff'],
	type: ['consumable','equiptment','currency','weapon'],
	description: ['shiny','old','bloody','stained','magical'],
	properties: [] //Not sure about this one. We can do some sort of ammount? 
};

var stage = {
	name:['house','space ship','dungeon','cave','castle','labyrinth','city','park'],
	type:['ornate','mystic','gloomy','rustic','metalic','stone','alien'],
	description:['unfamilliar to you','chaotic','jurrasic','']
};

var personTemplate = {
	name:['billy','susie','stan','George R.R. Martin', 'Busby','he who shall not be named','mr.Rogers'],
	gender:['male','female']
};

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
  		
		return	objectProp.length > 0 ? value = randomArrayElement(objectProp) : value = value;  		 
}

