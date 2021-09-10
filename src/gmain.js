// function submitForm(event){
// 	event.preventDefault();
// 	let name = document.forms["homeForm"]["name"].value;

// 	sessionStorage.setItem("name", name);
// 	location.href = "src/indiaquiz.html";
// }

window.onload = function() {
	show(0);
}

let questions =[
	{
		id: 1,
		question: "What is the color of an apple?",
		answer: "Red",
		optionss:[
			"Yellow",
			"Blue",
			"Red",
			"Brown"
		]
	},

	{
		id: 2,
		question: "How many letters are there in English alphabets?",
		answer: "26",
		optionss:[
			"21",
			"24",
			"23",
			"26"
		]
	},

	{
		id: 3,
		question: "How many vowels are present in English alphabets?",
		answer: "5",
		optionss:[
			"5",
			"6",
			"4",
			"3"
		]
	},

	{
		id: 4,
		question: "How many consonants are present in English alphabets?",
		answer: "21",
		optionss:[
			"22",
			"23",
			"20",
			"21"
		]
	},

	{
		id: 5,
		question: "How many zeros are present in 100 rupees note?",
		answer: "2",
		optionss:[
			"1",
			"2",
			"3",
			"0"
		]
	},

	{
		id: 6,
		question: "Who is the tallest land animal(existing)?",
		answer: "Giraffe",
		optionss:[
			"Elephant",
			"Dinosaur",
			"Horse",
			"Giraffe"
		]
	},

	{
		id: 7,
		question: "Which animal have black and white stripes?",
		answer: "Zebra",
		optionss:[
			"Zebra",
			"Panda",
			"Rabbit ",
			"Cow"
		]
	},

	{
		id: 8,
		question: "How many sides does a square have?",
		answer: "4",
		optionss:[
			"1",
			"2",
			"3",
			"4"
		]
	},
	
	{
		id: 9,
		question: "How many sides does a triangle have?",
		answer: "3",
		optionss:[
			"1",
			"6",
			"7",
			"3"
		]
	},

	{
		id: 10,
		question: "How many sides does a pentagon have?",
		answer: "5",
		optionss:[
			"2",
			"4",
			"9",
			"5"
		]
	},

	{
		id: 11,
		question: "How many sides does a hexagon have?",
		answer: "6",
		optionss:[
			"7",
			"8",
			"6",
			"9"
		]
	},

	{
		id: 12,
		question: "How many sides does a heptagon have?",
		answer: "7",
		optionss:[
			"8",
			"7",
			"9",
			"6"
		]
	},


	{
		id: 13,
		question: "How many sides does an octagon have?",
		answer: "8",
		optionss:[
			"6",
			"5",
			"4",
			"8"
		]
	},

	{
		id: 14,
		question: "How many sides does an octagon have?",
		answer: "9",
		optionss:[
			"6",
			"9",
			"8",
			"7"
		]
	},

	{
		id: 15,
		question: "How many sides does a decagon have?",
		answer: "10",
		optionss:[
			"10",
			"11",
			"12",
			"14"
		]
	},

	{
		id: 16,
		question: "An animal who can keep its baby in pocket is?",
		answer: "Kangaroo",
		optionss:[
			"Kangaroo",
			"Penguin",
			"Lion",
			"Bear"
		]
	},

	{
		id: 17,
		question: "An animal who can change its color is?",
		answer: "Chameleon",
		optionss:[
			"Squirrel",
			"Mantis",
			"Snake",
			"Chameleon "
		]
	},
	
	{
		id: 18,
		question: "A bird who can only see at night?",
		answer: "Owl",
		optionss:[
			"Owl",
			"Bat",
			"Dove",
			"Eagle"
		]
	},
	
	{
		id: 19,
		question: "Who is the largest bird",
		answer: "Ostrich",
		optionss:[
			"Falcon",
			"Ostrich",
			"Vulture",
			"Peacock"
		]
	},

	{
		id: 20,
		question: "A bird who produces sweetest sound? ",
		answer: "Nightingale",
		optionss:[
			"Cucukoo",
			"Peacock",
			"Nightingale",
			"Humming bird"
		]
	},

	{
		id: 21,
		question: "Which animal never sits? ",
		answer: "Horse",
		optionss:[
			"Camel",
			"Elephant",
			"Horse",
			"Mule"
		]
	},

	{
		id: 22,
		question: "A fish which have electricity in it?",
		answer: "Electric Eel ",
		optionss:[
			"Clown Fish",
			"Shark",
			"Flashlight Fish",
			"Electric Eel"
		]
	},

	{
		id: 23,
		question: "A fish which looks like star?",
		answer: "Star Fish",
		optionss:[
			"Octopus",
			"Jelly Fish",
			"Star Fish",
			"Leech"
		]
	},


	{
		id: 24,
		question: "Biggest flower of all?",
		answer: "Rafflesia",
		optionss:[
			"Sunflower",
			"Rafflesia",
			"Cobalt Dreams",
			"Sacred Lotus"
		]
	},

	{
		id: 25,
		question: "A animal who cries like a human baby?",
		answer: "Panda",
		optionss:[
			"Monkey",
			"Panda",
			"Cat",
			"Dog"
		]
	},

	{
		id: 26,
		question: "World’s slowest animal?",
		answer: "Sloth",
		optionss:[
			"Turtle",
			"Koala",
			"Seel",
			"Sloth"
		]
	},

	{
		id: 27,
		question: "Who’s fastest animal?",
		answer: "Cheetah",
		optionss:[
			"Tiger",
			"Lion",
			"Cheetah",
			"Leopard"
		]
	},

	{
		id: 28,
		question: "An animal which hangs upside down?",
		answer: "Bat",
		optionss:[
			"Crow",
			"Pegion",
			"Bat",
			"Flamingo"
		]
	},

	{
		id: 29,
		question: "An animal when it speaks looks like its laughing?",
		answer: "Hyena",
		optionss:[
			"Crocodile",
			"Lion",
			"Hyena",
			"Monkey"
		]
	},

	{
		id: 30,
		question: "A bird which can learn human language and can speak too?",
		answer: "Parrot",
		optionss:[
			"Crow",
			"Hen",
			"Duck",
			"Parrot"
		]
	},

	{
		id: 31,
		question: "How many days we have in a week?",
		answer: "7",
		optionss:[
			"8",
			"6",
			"5",
			"7"
		]
	},

	{
		id: 32,
		question: "How many days are there in a year?",
		answer: "365",
		optionss:[
			"366",
			"365",
			"345",
			"354"
		]
	},

	{
		id: 33,
		question: "How many seconds are there in a minute?",
		answer: "60sec",
		optionss:[
			"00sec",
			"59sec",
			"50sec",
			"60sec"
		]
	},

	{
		id: 34,
		question: "How many weeks are there in a month?",
		answer: "4",
		optionss:[
			"5",
			"3",
			"4",
			"6"
		]
	},

	{
		id: 35,
		question: "How many hours are there in a day?",
		answer: "24",
		optionss:[
			"12",
			"8",
			"16",
			"24"
		]
	},

	{
		id: 36,
		question: "How many minutes are there in an hour?",
		answer: "60min",
		optionss:[
			"59min",
			"60min",
			"00min",
			"50min"
		]
	},

	{
		id: 37,
		question: "How many months are there in a year?",
		answer: "12",
		optionss:[
			"9",
			"10",
			"12",
			"11"
		]
	},

	{
		id: 38,
		question: "How many planets are there in galaxy?",
		answer: "8",
		optionss:[
			"8",
			"9",
			"7",
			"10"
		]
	},

	{
		id: 39,
		question: "Who is dwarf planet?",
		answer: "Pluto",
		optionss:[
			"Pluto",
			"Sun",
			"Moon",
			"Mercury"
		]
	},

	{
		id: 40,
		question: "Earth is ____ Planet from the sun?",
		answer: "3rd",
		optionss:[
			"2nd",
			"3rd",
			"4th",
			"1st"
		]
	},

	{
		id: 41,
		question: "The closest star to earth is_____?",
		answer: "Sun",
		optionss:[
			"Proxima Centauri",
			"Sun",
			"Alpha Centauri",
			"Alpha Centauri A"
		]
	},

	{
		id: 42,
		question: "A planet which have rings?",
		answer: "Saturn",
		optionss:[
			"Jupiter",
			"Neptune",
			"Saturn",
			"Uranus"
		]
	},

	{
		id: 43,
		question: "Smallest planet of solar system is?",
		answer: "Mercury",
		optionss:[
			"Venus",
			"Mercury",
			"Neptune",
			"Mars"
		]
	},

	{
		id: 44,
		question: "Biggest planet of solar system is?",
		answer: "Jupiter",
		optionss:[
			"Jupiter",
			"Sun",
			"Saturn",
			"Earth"
		]
	},

	{
		id: 45,
		question: "Who is the natural satellite of earth?",
		answer: "Moon",
		optionss:[
			"Sun",
			"Moon",
			"The International Space Station",
			"Sputnik"
		]
	},

	{
		id: 46,
		question: "___ helps you to taste food?",
		answer: "Tongue",
		optionss:[
			"Teeth",
			"Mouth",
			"Tongue",
			"Jaw Bone"
		]
	},

	{
		id: 47,
		question: "___ helps you to smell?",
		answer: "Nose",
		optionss:[
			"Eyes",
			"Nose",
			"Mouth",
			"Ears"
		]
	},

	{
		id: 48,
		question: "___ helps you to see things?",
		answer: "Eyes",
		optionss:[
			"Eyes",
			"Mouth",
			"Ears",
			"Nose"
		]
	},

	{
		id: 49,
		question: " ___ helps you to chew food?",
		answer: "Teeth",
		optionss:[
			"Nose",
			"Tongue",
			"Ears",
			"Teeth"
		]
	},

	{
		id: 50,
		question: "How many fingers is in your Hands?",
		answer: "8",
		optionss:[
			"10",
			"8",
			"4",
			"5"
		]
	},

	{
		id: 51,
		question: "How many bones are there in a grown adult?",
		answer: "206",
		optionss:[
			"304",
			"300",
			"206",
			"750"
		]
	},

	{
		id: 52,
		question: "A baby's body has about ____bones at birth?",
		answer: "300",
		optionss:[
			"400",
			"300",
			"200",
			"100"
		]
	},

	{
		id: 53,
		question: "Which is the strongest bone in human body?",
		answer: "Thigh Bone ",
		optionss:[
			"Bone Marrow",
			"spine",
			"Skull",
			"Thigh Bone"
		]
	},

	{
		id: 54,
		question: "Which is the weakest bone in human body?",
		answer: "Ear Bone",
		optionss:[
			"Nose Bone",
			"Little Finger Bone",
			"Little Toe Bone",
			"Ear Bone"
		]
	},

	{
		id: 55,
		question: "Which organ can be donated while we are living (commonly)?",
		answer: "Kidney",
		optionss:[
			"Brain",
			"Eyes",
			"Heart",
			"Pancrease"
		]
	},

	{
		id: 56,
		question: "Which is the largest gland in Human body?",
		answer: "Liver",
		optionss:[
			"Pituitary.",
			"Liver",
			"Thyroid",
			"Pineal"
		]
	},

	{
		id: 57,
		question: "How many times a heart beats in an hour?",
		answer: "72 times",
		optionss:[
			"72 times",
			"15 times",
			"100 times",
			"5 times"
		]
	},

	{
		id: 58,
		question: "Which organ is responsible for our dreams?",
		answer: "Brain",
		optionss:[
			"Brain",
			"Heart",
			"Lungs",
			"Intestine"
		]
	},

	{
		id: 59,
		question: "Which organ pumps blood into our body?",
		answer: "Heart",
		optionss:[
			"Liver",
			"Kidney",
			"Heart",
			"Pancrease"
		]
	},

	{
		id: 60,
		question: "Which organ purifies blood into our body?",
		answer: "Kidney",
		optionss:[
			"Liver",
			"Heart",
			"Kidney",
			"Intestine"
		]
	},

	{
		id: 61,
		question: "Which is the largest continent in the world?",
		answer: "Asia",
		optionss:[
			"Asia",
			"Antarctica",
			"Africa",
			"Europe"
		]
	},

	{
		id: 62,
		question: "Which is the smallest continent in the world?",
		answer: "Australia",
		optionss:[
			"South America",
			"North America",
			"Antarctica",
			"Australia"
		]
	},

	{
		id: 63,
		question: "Which is the most populated country in the world?",
		answer: "China",
		optionss:[
			"India",
			"United States",
			"China",
			"Indonesia"
		]
	},

	{
		id: 64,
		question: "Which is the least populated country in the world?",
		answer: "Vatican City ",
		optionss:[
			"Nauru",
			"Tuvalu",
			"Palau",
			"Vatican City"
		]
	},

	{
		id: 65,
		question: "How many total continents in the world?",
		answer: "7",
		optionss:[
			"4",
			"5",
			"7",
			"8"
		]
	},

	{
		id: 66,
		question: "Which is the coldest continent of World?",
		answer: "Antarctica",
		optionss:[
			"Antarctica",
			"Australia",
			"Asia",
			"North America"
		]
	},

	{
		id: 67,
		question: "Which is the hottest continent of the world?",
		answer: "Africa",
		optionss:[
			"Asia",
			"Africa",
			"North America",
			"Australia"
		]
	},

	{
		id: 68,
		question: ". Which is the longest river in world?",
		answer: "Nile ",
		optionss:[
			"Amazon",
			"Nile ",
			"Congo",
			"Lena"
		]
	},

	{
		id: 69,
		question: "Which is the longest mountain range in the world?",
		answer: "Andes",
		optionss:[
			"Andes",
			"Southern Great Escarpment",
			"Rocky Mountains",
			"Transantarctic Mountains"
		]
	},

	{
		id: 70,
		question: "Which is the biggest forest in the world?",
		answer: "Amazon",
		optionss:[
			"Taiga",
			"Amazon",
			"Tropical Rainforest In Congo",
			"Tropical Rainforest Of New Guinea"
		]
	},

	{
		id: 71,
		question: "Which is the biggest dessert in the world?",
		answer: "Antarctica Dessert",
		optionss:[
			"Antarctica Dessert",
			"Arctic Dessert",
			"Sahara Dessert",
			"Arabian Dessert"
		]
	},

	{
		id: 72,
		question: "Which is the tallest building on earth?",
		answer: "Burj Khalifa",
		optionss:[
			"Shanghai Tower",
			"Burj Khalifa",
			"Abraj Al-Bait Clock Tower",
			"Ping An Finance Center"
		]
	},

	{
		id: 73,
		question: "Which is the tallest statue of the world?",
		answer: "Statue Of Unity",
		optionss:[
			"Christ the Redeemer",
			"Statue of Liberty",
			"Spring Temple Buddha",
			"Statue Of Unity"
		]
	},

	{
		id: 74,
		question: "Lightest metal in the world?",
		answer: "Lithium",
		optionss:[
			"Potassium",
			"Lithium",
			"Sodium",
			"Rubidium"
		]
	},

	{
		id: 75,
		question: "Heaviest metal in the world?",
		answer: "Osmium",
		optionss:[
			"Osmium ",
			"Iridium",
			"Platinum",
			"Neptunium"
		]
	},

]

let que_count = 0;
let points = 0;

function next() {
	let selection = document.querySelector("li.option.active").innerHTML;

	if(selection == questions[que_count].answer) {
		points += 10;
		sessionStorage.setItem("point",points);
	}

	if(que_count == questions.length -1) {
		sessionStorage.setItem("time", `${minutes} minutes and ${seconds}seconds`);
		clearInterval(mytime);
		location.href = "final.html";
		return;
	}
	
	que_count++;
	show(que_count);

}

function show(count) {
	let question = document.getElementById("questions");
	question.innerHTML = `<h2>Q${que_count +1}. ${questions[count].question} </h2>
	<ul class="options">
						<li class="option">${questions[count].optionss[0]}</li>
						<li class="option">${questions[count].optionss[1]}</li>
						<li class="option">${questions[count].optionss[2]}</li>
						<li class="option">${questions[count].optionss[3]}</li>
					</ul>`;
					toggleActive();
}
				
function toggleActive() {
	let option = document.querySelectorAll("li.option");
	for (let i = 0; i < option.length; i++) {
		option[i].onclick = function() {
			for (let i = 0; i < option.length; i++) {
				if (option[i].classList.contains("active")) {
					option[i].classList.remove("active");
				}
			}
			option[i].classList.add("active");
		};
	}
}