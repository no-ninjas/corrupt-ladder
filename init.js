	
	//global variables
	var paragraph, chapter, gameover;
	var chapters = [];
	var lang = '';
	
	//chapter 0 variables	
	//public
	var variables = [];
	
	function init() {

		//global variables
		chapter = 0;
		paragraph = 0;
		gameover = false;
		
		name = '';
		time = 0;
		minskills = 4;
		maxskills = 12;
		rolls = 3;
		rollgap = 6;
		jumpchapter = false;
		privacy = false;
		
		// public stats
		
		variables['int'] = [minskills, 'public', maxskills, minskills];
		variables['luck'] = [maxskills-minskills, 'public', maxskills, maxskills-minskills];
		variables['reputation'] = [minskills, 'public', maxskills, minskills];
		variables['money'] = [minskills, 'public', maxskills, minskills];
		
		// private stats
		
/*		variables['corruption'] = [0, 'private', 'unlimited'];
		variables['skills'] = [0, 'private', 'unlimited'];
		variables['family'] = [0, 'private', 'unlimited'];
		variables['stress'] = [minskills, 'private', 'unlimited'];
		variables['age'] = [16, 'private', 'unlimited'];
		
		// calc family
		
		if (Math.random() > 0.65) {
			inc('family');
			inc('money');
			if (Math.random() > 0.75) {
				inc('family');
				inc('money', 2);
				inc('reputation');
				if (Math.random() > 0.75) {
					inc('family');
					inc('money', 2);
					inc('reputation', 2);
				}	
			}
		}*/
		
		
		dont_display_stats_once = false;
		//pass = '';
		//pass2 = '';
		//passcode1 = 'undefined';
		//passcode2 = 'undefined';
		
		var outputtext = '';
		outputtext += '<div id=\"options\">';
		//outputtext += '<select name="select1" id="select1"><option value="en" selected>English</option><option value="es">Spanish</option></select><br><br>';
		//outputtext += '<select name="select2" id="select2"><option value="covers" selected>Covers Soundtrack</option><option value="euskal">Euskal Soundtrack</option></select><br><br>';
		outputtext += '<input type="button" value="Start!" onclick="launch()"></div>';
		document.getElementById('board').innerHTML = outputtext;

	}

	function launch() {
	
		var dropdown = document.getElementById('select1');
		if (dropdown) {
			var index  = dropdown.selectedIndex;
    		var value = dropdown.options[index].value;
    		lang = value;
		} else {
			lang = 'en';
		}
		
		loadAudio();
		
		submit(paragraph);
		
	}

	rand = function(n){
		return 0|(Math.random()*n);
	};

	function displayStats() {
		var textout = '<table>';
		
		for (var i in variables) {
			if (variables[i][1] == 'public') {
				textout += '<tr><td align="right">'+t[lang][i]+': </td><td width="4%">&nbsp;</td><td width="100%">';
				var blinkingmin = variables[i][0];
				if (variables[i][3] < blinkingmin) blinkingmin = variables[i][3];
				var blinkingmax = variables[i][0];
				if (variables[i][3] > blinkingmax) blinkingmax = variables[i][3];
				var j = 0;
				for(j = 0; j < blinkingmin; j++) textout+='<span class="range'+j+'">◉</span>';
				for(j = blinkingmin; j < blinkingmax; j++) textout+='<span class="range'+j+' blink">◉</span>';
				
				//var j = 0;
				//for(j = 0; j < variables[i][0]; j++) textout+='<span class="range'+j+'" style="">◉</span>';
				
				for(; j<maxskills; j++) textout+='<span>◉</span>';	
				textout+='</td></tr>';
				variables[i][3] = variables[i][0];
			}
		}
		
		textout += '</table>';
		document.getElementById('top').innerHTML = textout;
	}
	
	// roll a dice roll on a given variable
	function roll(variable) {
		variables[variable][0] += rand(rollgap)+1;
		if (variables[variable][2] != 'unlimited')
			if (variables[variable][0] > maxskills)
				variables[variable][0] = maxskills;
		rolls--;
		return variables[variable][0];
	}

	// increase a given variable by value, with max clamp
	function inc(variable, value) {
		if (typeof value === 'undefined') {
			value = 1;
		}
		variables[variable][3] = variables[variable][0];
		variables[variable][0] += value;
		if (variables[variable][2] != 'unlimited')
			if (variables[variable][0] > maxskills)
				variables[variable][0] = maxskills;
		return variables[variable][0];
	}

	// decrease a given variable by value
	function dec(variable, value) {
		if (typeof value === 'undefined') {
			value = 1;
		}
		//if (variables[variable][3] != variables[variable][0])
		//variables[variable][3] = variables[variable][0];
		variables[variable][0] -= value;
		if (variables[variable][0] < 0)
			variables[variable][0] = 0;
		return variables[variable][0];
	}

	// compare a given variable to value, if its higher
	function cmpH(variable, value) {
		return (variables[variable][0] > value);
	}

	// compare a given variable to value, if its lower	
	function cmpL(variable, value) {
		return (variables[variable][0] < value);
	}

	function displayImageOnTop(img) {
		dont_display_stats_once = true;
		document.getElementById('top').innerHTML = "<img src='images/"+img+"'>";
	}
	
	function decTest(testfunction, value1, value2) {
		if (cmpH(testfunction, rand(12))) {
			dec(testfunction, value1);
		} else {
			dec(testfunction, value2);
		}
		if (variables[testfunction][0] == 0) decAll(1);
		return true;
	}
	
	function decAll(value) {
		for (var i in variables) {
			if (variables[i][1] == 'public') dec(i, value);
		}
		return true;
	}
	
	function addUp() {
		var thisvalue = 0;
		for (var i in variables) {
			if (variables[i][1] == 'public') thisvalue += variables[i][0];
		}
		return thisvalue;
	}
	