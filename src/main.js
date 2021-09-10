// function submitForm(e){
// 	e.preventDefault();
// 	let name = document.forms["homeForm"]["name"].value;

// 	sessionStorage.setItem("name", name);
// 	location.href = "src/select.html";
// }

window.onload = function() {
	show(0);
}

let questions =[
	{
		id: 1,
		question: "India celebrates independence on? ",
		answer: "15 August",
		optionss:[
			"26 January",
			"15 August",
			"2 Ocotober",
			"5 september"
		]
	},

	{
		id: 2,
		question: "National River of India?",
		answer: "Ganga",
		optionss:[
			"Yamuna",
			"Narmada",
			"Ganga",
			"Krishna"
		]
	},

	{
		id: 3,
		question: "Currency of India is? ",
		answer: "Rupees",
		optionss:[
			"Yen",
			"Dirham",
			"Ruble",
			"Rupees"
		]
	},

	{
		id: 4,
		question: "National Anthem of India is? ",
		answer: "Jana Gana Mana",
		optionss:[
			"Vande Mataram",
			"Jana Gana Mana",
			"Bharat Mera Desh Hai",
			"Teri Miti Me Mil Java"
		]
	},

	{
		id: 5,
		question: "National Song of India is? ",
		answer: "Vande Mataram",
		optionss:[
			"Jana Gana Mana",
			"Ye Desh Hai Veer Javano Ka",
			"Teri Miti Me Mil Java",
			"Vande Mataram"
		]
	},

	{
		id: 6,
		question: "National flower of India is?",
		answer: "Lotus",
		optionss:[
			"Rose",
			"Jasmine",
			"Lotus",
			"Sunflower"
		]
	},

	{
		id: 7,
		question: "Name the national fruit of India? ",
		answer: "Mango",
		optionss:[
			"Apple",
			"Orange",
			"Banana",
			"Mango"
		]
	},

	{
		id: 8,
		question: "Which festival is known as the festival of colors?",
		answer: "Holi",
		optionss:[
			"Holi",
			"Sankranti",
			"Deepawali",
			"Raksha Bandhan"
		]
	},

	{
		id: 9,
		question: "Which festival is called the festival of light? ",
		answer: "Deepawali",
		optionss:[
			"Holi",
			"Deepawali",
			"Dussehra",
			"Makar Sankranti"
		]
	},

	{
		id: 10,
		question: "Which festival is known as the ‘Festival of flowers’? ",
		answer: "Onam",
		optionss:[
			"Midosomer",
			"Onam",
			"Tomatina",
			"Spring"
		]
	},

	{
		id: 11,
		question: "Which is the capital of India?",
		answer: "Delhi",
		optionss:[
			"Punjab",
			"Haryana",
			"Delhi",
			"Mumbai"
		]
	},

	{
		id: 12,
		question: "Which is the national game of India? ",
		answer: "Hockey",
		optionss:[
			"Cricket",
			"Tennis",
			"Kabaddi",
			"Hockey"
		]
	},

	{
		id: 13,
		question: "Who was the first prime minister of India? ",
		answer: "Pandit Jawaharlal Nehru",
		optionss:[
			"Indira Ghandhi",
			"Pandit Jawaharlal Nehru",
			"Mahatama Ghandhi",
			"Sardar Vallabhbhai Patel"
		]
	},

	{
		id: 14,
		question: "Who is the national bird of India? ",
		answer: "Peacock",
		optionss:[
			"Hen",
			"Ostrich",
			"Cucukoo",
			"Peacock"
		]
	},

	{
		id: 15,
		question: "How many colors does Indian flag contains?",
		answer: "3",
		optionss:[
			"3",
			"4",
			"6",
			"5"
		]
	},

	{
		id: 16,
		question: "What is the young one of a cat called? ",
		answer: "Kitten",
		optionss:[
			"Puppy",
			"Duckling",
			"Kitten",
			"Calf"
		]
	},

	{
		id: 17,
		question: "How many colors are there in a rainbow? ",
		answer: "7",
		optionss:[
			"7",
			"6",
			"5",
			"8"
		]
	},

	{
		id: 18,
		question: "Which animal is known as the 'Ship of the Desert'?",
		answer: "Camel",
		optionss:[
			"Sheep",
			"Camel",
			"Horse",
			"Ship"
		]
	},

	{
		id: 19,
		question: "Camels store water in their? ",
		answer: "Humps",
		optionss:[
			"Stomach",
			"Intestine",
			"Humps",
			"Throat"
		]
	},

	{
		id: 20,
		question: "All tigers have ___ eyes. ",
		answer: "Yellow",
		optionss:[
			"Yellow",
			"Black",
			"Brown",
			"Golden"
		]
	},

	{
		id: 21,
		question: "Bhagat Singh is a __ fighter of India. ",
		answer: "Freedom",
		optionss:[
			"Fire",
			"Wild",
			"Enemy",
			"Freedom"
		]
	},

	{
		id: 22,
		question: "Name the one wonder out of seven wonders present in India? ",
		answer: "Taj Mahal",
		optionss:[
			"Lal Killa",
			"India Gate",
			"Taj Mahal",
			"Hawa Mahal"
		]
	},

	{
		id: 23,
		question: "Who among the following is known as “Flying Sikh of India” ",
		answer: "Milkha Singh",
		optionss:[
		    "Flying Jatt",
			"Milkha Singh ",
			"Mika Singh",
			"Honey Singh"
		]
	},

	{
		id: 24,
		question: "Aryabhata gave the world the digit _?",
		answer: "0",
		optionss:[
			"8",
			"0",
			"9",
			"1"
		]
	},

	{
		id: 25,
		question: "A few centuries ago what was the nick name of India? ",
		answer: "Sone ki Chidiya ",
		optionss:[
			"Sone ki Gudiya",
			"Sone ki Chidiya ",
			"City of Gold ",
			"Dandi March"
		]
	},

	{
		id: 26,
		question: "Who is the father of nation (India)?",
		answer: "Mahatma Gandhi",
		optionss:[
			"Jawaharlal Nehru",
			"Sardar Vallabhbhai Patel",
			"Mahatma Gandhi",
			"Ratan Tata"
		]
	},

	{
		id: 27,
		question: "Which is the second most populated country in the world?",
		answer: "India",
		optionss:[
			"China",
			"India",
			"United States",
			"Indonesia"
		]
	},

	{
		id: 28,
		question: "Which is the tallest mountain in the world?",
		answer: "Mount Everest ",
		optionss:[
			"Kanchenjenga",
			"K2",
			"Mount Everest ",
			"Lhotse"
		]
	},

	{
		id: 29,
		question: "In which planet do we live? ",
		answer: "Earth ",
		optionss:[
			"Mercury",
			"Venus",
			"Mars",
			"Earth"
		]
	},

	{
		id: 30,
		question: "How many players are there in a cricket team?",
		answer: "11",
		optionss:[
			"5",
			"7",
			"9",
			"11"
		]
	},

	{
		id: 31,
		question: "National heritage animal of India is? ",
		answer: "Elephant",
		optionss:[
			"Tiger",
			"Lion",
			"Cheetah",
			"Elephant"
		]
	},

	{
		id:32,
		question: "National aquatic animal of India?",
		answer: "Ganges River Dolphin",
		optionss:[
			"Ganges River Dolphin",
			"Shark",
			"Star Fish",
			"Whale"
		]
	},

	{
		id: 33,
		question: "National Reptile of India is? ",
		answer: "King Cobra",
		optionss:[
			"King Cobra",
			"Anaconda",
			"Python",
			"Black Mamba"
		]
	},

	{
		id: 34,
		question: "National calendar of India?",
		answer: "Saka Calendar",
		optionss:[
			"Gregorian Calendar",
			"Saka Calendar",
			"Mayan Calendar",
			"Jewish Calendar"
		]
	},

	{
		id: 35,
		question: "National Tree of India is?",
		answer: "Banyan Tree",
		optionss:[
			"Piple Tree",
			"Neem Tree",
			"Banyan Tree",
			"Bamboo Tree"
		]
	},

	{
		id: 36,
		question: "National Vegetable of India is?",
		answer: "Pumpkin",
		optionss:[
			"Lady Finger",
			"Egg Plant",
			"Pumpkin",
			"Cauliflower"
		]
	},

	{
		id: 37,
		question: "India’s oath of Allegiance? ",
		answer: "National Pledge",
		optionss:[
			"National Pledge",
			"Oath",
			"Jana Gana Mana",
			"Vande Mataram"
		]
	},

	{
		id: 38,
		question: "Golden city of India is? ",
		answer: "Amritsar",
		optionss:[
			"Amritsar",
			"Punjab",
			"Karnataka",
			"Madhya Pradesh"
		]
	},

	{
		id: 39,
		question: "Who discovered India?",
		answer: "Vasco de Gama",
		optionss:[
			"Pablo Picasso",
			"Leonardo da Vinci",
			"Christopher Columbus",
			"Vasco de Gama"
		]
	},

	{
		id: 40,
		question: "which indoor game was invented in India?",
		answer: "Chess",
		optionss:[
			"Ludo",
			"Chess",
			"Puzzle",
			"Mahjong"
		]
	},

	{
		id: 41,
		question: "How many spokes does Ashoka chakra have in Tiranga (flag of India)? ",
		answer: "24",
		optionss:[
			"26",
			"28",
			"25",
			"24"
		]
	},

	{
		id: 42,
		question: "Which is the longest written Constitution in the world?",
		answer: "India",
		optionss:[
			"Monaco",
			"Denmark",
			"India",
			"Swiss"
		]
	},

	{
		id: 43,
		question: "Which fruit is native to India?",
		answer: "Ice Apple",
		optionss:[
			"Red Apple",
			"Green Apple",
			"Ice Apple",
			"Plum"
		]
	},

	{
		id: 44,
		question: "How many animals are engraved on the Ashok Chakra?",
		answer: "4",
		optionss:[
			"6",
			"8",
			"4",
			"5"
		]
	},

	{
		id: 45,
		question: "How many states are present in India?",
		answer: "28",
		optionss:[
			"29",
			"30",
			"31",
			"28"
		]
	},

	{
		id: 46,
		question: "Who wrote national anthem of India?",
		answer: "Rabindranath Tagore",
		optionss:[
			"Rabindranath Tagore",
			"Bankimchandra Chatterji",
			"Swami Vivekananda",
			"Sarojini Naidu"
		]
	},

	{
		id: 47,
		question: "Who wrote national song of India? ",
		answer: "Bankimchandra Chatterji ",
		optionss:[
			"Rabindranath Tagore",
			"Bankimchandra Chatterji",
			"Sarojini Naidu",
			"Mulk Raj Anand"
		]
	},

	{
		id: 48,
		question: "Who is the national animal of India?",
		answer: "Royal Bengal Tiger",
		optionss:[
			"Lion",
			"Cheetah",
			"Royal Bengal Tiger",
			"Leopard"
		]
	},


	{
		id: 49,
		question: "Who is the first president of India?",
		answer: "Rajendra Prasad ",
		optionss:[
			"Sarvepalli Radhakrishnan Thiruttani",
			"Rajendra Prasad ",
			"Zakir Husain",
			"Neelam Sanjiva Reddy"
		]
	},

	{
		id: 50,
		question: "Who is Known as missile man of India?",
		answer: "Dr APJ Abdul Kalam",
		optionss:[
			"Dr APJ Abdul Kalam",
			"Sardar Vallabhbhai Patel",
			"M. Visvesvaraya",
			"Srinivasa Ramanujan"
		]
	},

	{
		id: 51,
		question: "What is the full form of ISRO? ",
		answer: "Indian Space Research Organization",
		optionss:[
			"Indian Spice Recipe Organisation",
			"Indian Space Research Organization",
			"Iravati Sundaram Radha Oranium",
			"Iran Spain Russia Oman"
		]
	},

	{
		id: 52,
		question: "Who is the father of Plastic Surgery? ",
		answer: "Sushruta",
		optionss:[
			"Valmiki",
			"Sushruta",
			"Koutilya",
			"Parashuram"
		]
	},
	
	{
		id: 53,
		question: "Two famous universities of ancient India? ",
		answer: "Takshashila and Nalanda",
		optionss:[
			"Takshashila and Nalanda ",
			"Takila and Nalanda",
			"Takshashila and Narmada",
			"Taruna and Nirmala"
		]
	},

	{
		id: 54,
		question: "Krishna River of India where ___ can be found? ",
		answer: "Diamonds",
		optionss:[
			"Perl",
			"Gold",
			"Diamonds",
			"Fish"
		]
	},

	{
		id: 55,
		question: "Jaipur is also known as the ___ city of India? ",
		answer: "Pink",
		optionss:[
			"Air",
			"Red",
			"Pink",
			"Hot"
		]
	},

	{
		id: 56,
		question: "Sandal wood city of India is?",
		answer: "Mysore",
		optionss:[
			"Shivmoga",
			"Kannur",
			"Mysore",
			"Goa"
		]
	},

	{
		id: 57,
		question: "Which state of India is Known as Land of Five Rivers?",
		answer: "Punjab",
		optionss:[
			"Mawsynram",
			"Cherrapunji",
			"Punjab",
			"Jaisalmer"
		]
	},

	{
		id: 58,
		question: "Manchester of India is?",
		answer: "Ahmedabad",
		optionss:[
			"Surat",
			"Bombay",
			"Goa",
			"Ahmedabad"
		]
	},

	{
		id: 59,
		question: "Silicon Valley of India is? ",
		answer: "Bengaluru",
		optionss:[
			"Bengaluru",
			"Chennai",
			"Surat",
			"Kolkata"
		]
	},

	{
		id: 60,
		question: "World capital of Biryani is? ",
		answer: "Hyderabad",
		optionss:[
			"Sikandrabad",
			"Hyderabad",
			"Lahore",
			"Ahmedabad"
		]
	},

	{
		id: 61,
		question: "Which place is known as the roof of the world?",
		answer: "Tibet",
		optionss:[
			"Arunachal Pradesh",
			"Himachal",
			"Tibet",
			"Sangai"
		]
	},

	{
		id: 62,
		question: "How many teeth does a healthy adult have including the wisdom teeth",
		answer: "32",
		optionss:[
			"34",
			"32",
			"30",
			"28"
		]
	},

	{
		id: 63,
		question: "The largest ‘Democracy’ in the world?",
		answer: "India",
		optionss:[
			"Bhutan",
			"Afganistan",
			"India",
			"United States"
		]
	},

	{
		id: 64,
		question: "Which is the largest plateau in the world?",
		answer: "Tibetan Plateau ",
		optionss:[
			"Tibetan Plateau ",
			"Colorado Plateau",
			"Deccan Plateau",
			"Mexican Plateau"
		]
	},
	
	{
		id: 65,
		question: "What color symbolizes peace?",
		answer: "White",
		optionss:[
			"Green",
			"Saffron",
			"Blue",
			"White"
		]
	},

	{
		id: 66,
		question: "How many Cricket world cups does India have? ",
		answer: "2",
		optionss:[
			"2",
			"4",
			"6",
			"8"
		]
	},

	{
		id: 67,
		question: "Which state in India is known as “God’s Own Country”? ",
		answer: "Kerala",
		optionss:[
			"Tamil nadu",
			"Shimla",
			"Karnataka",
			"Kerala"
		]
	},

	{
		id: 68,
		question: "What is the full form of cricket tournament- IPL? ",
		answer: "Indian Premier League",
		optionss:[
			"Indian Primitive Limited",
			"Indane Pressure Leak",
			"Indian Premier League",
			"Istanbul Persia Lahore"
		]
	},

	{
		id: 69,
		question: "In which sports, the term HAT-TRICK is used?",
		answer: "Cricket ",
		optionss:[
			"Hokey",
			"Cricket ",
			"Footbal",
			"Basketball"
		]
	},

	{
		id: 70,
		question: "Eden Gardens cricket stadium is in___",
		answer: "Calcutta ",
		optionss:[
			"Calcutta ",
			"Mumbai",
			"West Bengal",
			"Mizoram"
		]
	},

	{
		id: 71,
		question: "Hockey is the National sports of____",
		answer: "India and Pakistan ",
		optionss:[
			"India",
			"Pakistan",
			"Bhutan",
			"India and Pakistan"
		]
	},

	{
		id: 72,
		question: "Where did the game of Badminton originate from?",
		answer: "Pune",
		optionss:[
			"Morocco",
			"Paris",
			"Pune",
			"Chattisgarh"
		]
	},

	{
		id: 73,
		question: "When is National Sports day of India celebrated?",
		answer: "August 22 ",
		optionss:[
			"August 22 ",
			"March 21",
			"July 11",
			"December 12"
		]
	},

	{
		id: 74,
		question: "Hollywood of India is? ",
		answer: "Mumbai ",
		optionss:[
			"Goa",
			"Kocchi",
			"Mumbai ",
			"Delhi"
		]
	},

	{
		id: 75,
		question: "What is beautiful forest of India? ",
		answer: "Sundarbans",
		optionss:[
			"Sundarbans",
			"Giri national Park",
			"Jim Corbett National Park",
			"Salim Ali Bird Sanctuary"
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