
//
// define stats, buy computer
//

t = [];
t['en'] = [];
t['en']['int'] = 'Intelligence';
t['en']['luck'] = 'Luck';
t['en']['reputation'] = 'Reputation';
t['en']['money'] = 'Money';
t['en']['family0'] = 'poor family';
t['en']['family1'] = 'modern household family';
t['en']['family2'] = 'wealthy family';
t['en']['family3'] = 'very wealthy family';


chapters[0] = {
	0: {
		'info': "It's a dark night. Outside the wind blows hard and the rain falls deep on a concrete jungle you can still barely call home.<br><br>You are John Doe, the famous politician."
		,'options':
		[
		 ["Proceed", 1],	 
		]
		,'update': function() {
			playAudio(0);
			displayImageOnTop('drawing01.png');
		}
	},
	1: {
		'info': "Over the past few years you have risen to power in the eye of the public sphere to a position of utmost importance.<br><br>Your decisions influence the lives of hundreds."
		,'options':
		[
		 ["Proceed", 3],	
		]
	},
/*	2: {
		'info': "But despite all your power, you are still trapped under the control of an interested few.<br><br>How did you get here? Where did everything go wrong?<br><br>You will need your highest skills to solve what comes next."
		,'options':
		[
		  ["Proceed", 3],
		]
	},
	*/
	
	
	
	
	3: {
		'info': "You recall how it all started, your highschool days..."
		,'options':
		[
		 ["Bookworm",4],
		 ["Wormwood",5],
		 ["Bully",6]
		]
		,'update': function() {
			displayImageOnTop('drawing02.png');
		}
	},
	4: {
		'info': "You paid your dues and never cut class. Spent your days in the desolate excuse of a local library. The water leaks ruined some pages on your favorite book, The Prince by Niccolò Machiavelli. But that never stopped you from reading it over and over.<br><br>A few years later you used to spot the cute library lady doubling tricks for your cousin on the streets downtown."
		,'options':
		[
		 ["Proceed",7]
		]
		,'update': function() {
			inc('int', 2);
		}
	},
	5: {
		'info': "You spent your highschool days smoking your laced weed and running gigs for your godfather out in the streets. You made your early contacts with the thugs and dope heads of the local game, didn't took you too long to build a reputation at the clubs."
		,'options':
		[
		 ["Proceed",7]
		]
		,'update': function() {
			inc('reputation', 4);
			dec('money', 1);
		}
	},
	6: {
		'info': "You made an art out of robbing kids of their lunch money, investing it on some gear and hardware for your fallout excuse of a crew. You roamed the streets and slowly carved out a turf of your own in the hood."
		,'options':
		[
		 ["Proceed",7]
		]
		,'update': function() {
			inc('reputation',2);
			inc('money',2);
		}
	},
	7: {
		'info': "But the golden days of your endless youth were soon about to end."
		,'options':
		[
		 ["Proceed",8]
		]
		,'update': function() {

		}
	},




	8: {
		'info': "You think back on how your family supported you..."
		,'options':
		[
		 ["You came from a poor family",9],
		 ["You were spoiled rotten",10],
		 ["Your parents deserted you",11]
		]
		,'update': function() {
			displayImageOnTop('drawing03.png');
		}
	},
	9: {
		'info': "Everything you ever had was built with your own blood, sweat and tears. Your playground was the streets and you graduated from the university of life with flying colors and some deep connections on the local mafia business."
		,'options':
		[
		 ["Proceed",12]
		]
		,'update': function() {
			inc('reputation', 2);
			dec('luck',1);
		}
	},
	10: {
		'info': "Nothing comes easy in life, except in your case it does. Your family put you through college and got you a job as an assistant to a local big shot you soon realized to be related to the local mafia business."
		,'options':
		[
		 ["Proceed",12]
		]
		,'update': function() {
			inc('money', 2);
			dec('luck',1);
		}
	},
	11: {
		'info': "You come from a wealthy family but managed to get yourself quickly deserted. Your mother prefers her xanax and poodles. And your father was never around to begin with. They threw you out to work for your cousin, a long time big shot in the local mafia business."
		,'options':
		[
		 ["Proceed",12]
		]
		,'update': function() {
			inc('int', 2);
			dec('luck',1);
		}
	},
	12: {
		'info': "Now family is everything."
		,'options':
		[
		 ["Proceed",13]
		]
		,'update': function() {

		}
	},





	13: {
		'info': "You had to work your way up the ladder..."
		,'options':
		[
		 ["Using your wits",14],
		 ["Working your contacts",15],
		 ["Paying your dues",16]
		]
		,'update': function() {
			displayImageOnTop('drawing04.png');
		}
	},
	14: {
		'info': "Outsmarting local thugs was your daily bread, a jolly life for the hollow man. Most of them high on drugs or drunk on power.<br><br>Eventually you managed to overpowered even the most influencial businessmen in town. Blood was spilled, but it mostly not your own."
		,'options':
		[
		 ["Proceed",17]
		]
		,'update': function() {
			inc('int', 2);
		}
	},
	15: {
		'info': "A healthy social network is the key to any successful entrepeneur. Hussling local business men was easy compared to what you had to pull off when you were a kid. Most of them lacked some muscle to back them up. Getting someone to threaten their families usually did the trick."
		,'options':
		[
		 ["Proceed",17]
		]
		,'update': function() {
			inc('reputation', 2);
		}
	},
	16: {
		'info': "You put all the benjamins you gathered from the drug business into some good use, buying out legit businesses for laundry and profit. Pushing the locals into submission."
		,'options':
		[
		 ["Proceed",17]
		]
		,'update': function() {
			inc('money', 2);
		}
	},
	17: {
		'info': "With hard work and dedication you managed to build a nice place you can now call home."
		,'options':
		[
		 ["Proceed",18]
		]
		,'update': function() {

		}
	},





	18: {
		'info': "You always were a law abiding citizen..."
		,'options':
		[
		 ["Following the law",19],
		 ["Paying your taxes",20]
		]
		,'update': function() {
			displayImageOnTop('drawing05.png');
		}
	},
	19: {
		'info': "Following the law across state lines to blackmail and threaten their families and bend them your way. Some nuts were harder to crack then others, but in time no shield was big enough for your taking. Most of them enjoyed their extra income on the side. The ones who didn't always ending up unexpectedly retired."
		,'options':
		[
		 ["Proceed",21]
		]
		,'update': function() {
			inc('int', 2);
			dec('reputation', 1);
		}
	},
	20: {
		'info': "Paying your taxes, and a little extra on the side: The beat cops would turn a blind eye. Lieutenants never minded their monthly brown bag. And when it came to handling judges, the ones with families and kids always prescribed your process out of court."
		,'options':
		[
		 ["Proceed",21]
		]
		,'update': function() {
			inc('int', 2);
			dec('reputation', 1);
		}
	},
	21: {
		'info': "Always keeping your nose clean."
		,'options':
		[
		 ["Proceed",22]
		]
		,'update': function() {
		
		}
	},




	22: {
		'info': "Always tried to always do the right thing...<br><br>That's why you decided to run for city mayor."
		,'options':
		[
		 ["With the support of your friends",23],
		 ["To make your city prosper",24],
		 ["To clean up the streets",25],
		]
		,'update': function() {
			displayImageOnTop('drawing06.png');
		}
	},
	23: {
		'info': "You got your city hall position with the support of your friends. One by one your gang picked out all of the supporters for the opposing party and turned them in your favor, one way or the other."
		,'options':
		[
		 ["Proceed",26],
		]
		,'update': function() {
			inc('reputation', 2);
		}
	},
	24: {
		'info': "Controlling city hall you were able to expand your empire and finance it directly with the taxpayers money."
		,'options':
		[
		 ["Proceed",26],
		]
		,'update': function() {
			inc('money',2);
		}
	},
	25: {
		'info': "Controlling city hall you cleaned up the city real good, from all your rival gangs."
		,'options':
		[
		 ["Proceed",26],
		]
		,'update': function() {
			inc('reputation');
			inc('money');
		}
	},
	26: {
		'info': "The price of greatness is responsibility."
		,'options':
		[
		 ["Proceed",27]
		]
		,'update': function() {
		
		}
	},




	27: {
		'info': "You never neglected your family..."
		,'options':
		[
		 ["Support your cousin",28],
		 ["Tend to your wife",29],
		 ["Honour your father",30],
		]
		,'update': function() {
			displayImageOnTop('drawing07.png');
		}
	},
	28: {
		'info': "Your cousin might have been a two faced scum bag prickster who never managed save his own ass even if it landed him another score. But that one time his party hooker OD'ed on him, you were there to help him get rid of the body."
		,'options':
		[
		 ["Proceed",31],
		]
		,'update': function() {
			dec('reputation', 1);
			dec('luck', 1);
		}
	},
	29: {
		'info': "Your wife always had everything she ever wanted. And she really wanted a lot. It's hard to keep up appearances with a depressed shopaholic with a reoccuring coke addiction. But somehow you always managed to keep it in check."
		,'options':
		[
		 ["Proceed",31],
		]
		,'update': function() {
			dec('money',1);
			dec('luck',1);
		}
	},
	30: {
		'info': "Your father was never there when you were growing up. To make up for it he was always around to drag you into his problems. You often had to send out your boys on some dirty business just to shut him up."
		,'options':
		[
		 ["Proceed",31],
		]
		,'update': function() {
			dec('int', 1);
			dec('luck',1);
		}
	},
	31: {
		'info': "Family always comes first."
		,'options':
		[
		 ["Proceed",32]
		]
		,'update': function() {
		
		}
	},







	32: {
		'info': "Holding it together."
		,'options':
		[
		 ["With passion",33],
		 ["With responsibility",33],
		 ["With determination",33]
		]
		,'update': function() {
			displayImageOnTop('drawing08.png');
		}
	},
	33: {
		'info': "Then the Russians showed up. Running their stripclubs. Buying out soccer teams as fronts. Things quickly turned nasty. You even had a mark on your head for a couple of weeks. That lasted long enough for you to buy out the hitman and torch down their business. Who knows what they're up to now."
		,'options':
		[
		 ["Proceed",34]
		]
		,'update': function() {
			decAll(1);
		}
	},
	34: {
		'info': "You presevered and ran for office another term."
		,'options':
		[
		 ["Proceed",35]
		]
		,'update': function() {

		}
	},
	
	

	35: {
		'info': "And now comes this situation with your latest girlfriend."
		,'options':
		[
		 ["Outsmarted",36],
		 ["Bad Luck",37],
		 ["Dragged in the mud",38],
		 ["Robbed",39]
		]
		,'update': function() {
			displayImageOnTop('drawing09.png');
		}
	},
	36: {
		'info': "A cute little piece of ass from Ukraine. Always sweared naked not being involved with the Russians. Could quite easily be swindling your wits through your dick."
		,'options':
		[
		 ["Proceed",40]
		]
		,'update': function() {
			decTest('int',1,3);
		}
	},
	37: {
		'info': "A cute little piece of ass from Ukraine. Always sweared naked not being involved with the Russians. Maybe you're just running shit out of luck."
		,'options':
		[
		 ["Proceed",40]
		]
		,'update': function() {
			decTest('luck',1,3);
		}
	},
	38: {
		'info': "A cute little piece of ass from Ukraine. Always sweared naked not being involved with the Russians. The only time she should have kept her mouth open was on her knees, instead she's been dragging your name through the mud, spilling all your secrets, some more true then other."
		,'options':
		[
		 ["Proceed",40]
		]
		,'update': function() {
			decTest('reputation',1,3);
		}
	},
	39: {
		'info': "A cute little piece of ass from Ukraine. Always sweared naked not being involved with the Russians. Now keeps borrowing you money for her niece. Probably a sad scheme to leech you dry."
		,'options':
		[
		 ["Proceed",40]
		]
		,'update': function() {
			decTest('money',1,3);
		}
	},
	40: {
		'info': "Keep your friends close and your enemies closer."
		,'options':
		[
		 ["Proceed",41]
		]
		,'update': function() {
			
		}
	},




	41: {
		'info': "Handling the media..."
		,'options':
		[
		 ["With care",42],
		 ["With patience",43],
		 ["With your wallet",44],
		]
		,'update': function() {
			displayImageOnTop('drawing10.png');
		}
	},
	42: {
		'info': "This nosy reporter keeps running his mouth about you in the paper. It's about time someone shut him up. You send a few boys to take care of him, but it somehow manages to backfire."
		,'options':
		[
		 ["Proceed",45],
		]
		,'update': function() {
			decTest('reputation',1,3);
		}
	},
	43: {
		'info': "This nosy reporter keeps running his mouth about you in the paper. It's about time someone shut him up. You try to destroy his reputation in the paper, but somehow he manages to get support in other agencies."
		,'options':
		[
		 ["Proceed",45],
		]
		,'update': function() {
			decTest('int',1,3);
		}
	},
	44: {
		'info': "This nosy reporter keeps running his mouth about you in the paper. It's about time someone shut him up. You try to bribe him, but he just writes about it on his next piece. Seems you got one of those morally righteous nutcases on your hands."
		,'options':
		[
		 ["Proceed",45],
		]
		,'update': function() {
			decTest('money',1,3);
		}
	},
	45: {
		'info': "Truth has a tendency to triumph over slander."
		,'options':
		[
		 ["Proceed",46],
		]
		,'update': function() {

		}
	},






	46: {
		'info': "Transparency and accountability..."
		,'options':
		[
		 ["Frame",47],
		 ["Censor",48],
		 ["Capture",49],
		 ["Bribe",50]
		]
		,'update': function() {
			displayImageOnTop('drawing11.png');
		}
	},
	47: {
		'info': "You come up with an elaborate sex scandal scheme to slander your local Julian Assange. The plan seems to drag on for longer then initially expected, but atleast you're ruining the life of that misserable bastard."
		,'options':
		[
		 ["Proceed",51],
		]
		,'update': function() {
			decTest('int',1,3);
		}
	},
	48: {
		'info': "You pass a new law aimed at censoring your local Julian Assange. Before the plan gets in motion the scheme was already snowballed into an international incident by those free speech hippies on the internet."
		,'options':
		[
		 ["Proceed",51],
		]
		,'update': function() {
			decTest('int',1,3);
		}
	},
	49: {
		'info': "You put up a prize on your local Julian Assange. But your hitman seems to have trouble tracking him down."
		,'options':
		[
		 ["Proceed",51],
		]
		,'update': function() {
			decTest('reputation',1,3);
		}
	},
	50: {
		'info': "You buy out the paper that has been running the pieces against you. Your local Julian Assange starts blogging them periodically all over the internet."
		,'options':
		[
		 ["Proceed",51],
		]
		,'update': function() {
			decTest('money',1,3);
		}
	},
	51: {
		'info': "Only the truth will set you free."
		,'options':
		[
		 ["Proceed",52],
		]
		,'update': function() {
			playAudio(1);
		}
	},

	52: {
		'info': "In the end you get caught up in a lawsuit with an honest judge. You try to bribe the members of the jury, but it seems the Russians are pressuring them to decide against you.<br><br>You have to face your old skeletons laid bare in the courtroom. The defense even cuts a deal with a few of your boys to bring them in and testify against you.<br><br>It seems your political career is at an end."
		,'options':
		[
		 ["Proceed", function(){ return (addUp() > 12) ? 53 : 54; }],
		]
		,'update': function() {

		}
	},

	53: {
		'info': "At the end of the 9 month trial you are found guilty of multiple crimes and sentenced to 2 years under house arrest.<br><br>It seems the Corrupt Ladder was gentle on you!"
		,'update': function() {
			displayImageOnTop('drawing12.png');
		}
	},

	54: {
		'info': "At the end of your 9 month trial you are found guilty of multiple crimes and sentenced to serve 5 years in jail.<br><br>You are back on the streets in 3 due to good behavior.<br><br>Thank you for climbing the Corrupt Ladder!"
		,'update': function() {
			displayImageOnTop('drawing13.png');
		}
	},



};

