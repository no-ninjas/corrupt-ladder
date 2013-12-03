	
	function isFunction(functionToCheck) {
	 var getType = {};
	 return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	}

	function submit(par) {
	
		var p = chapters[chapter];
	/*	
		if (variables['int'][0] < 0) {
			//you'll always be average and never accomplish anything
			par = 8;
			p = chapters[0];
		}
		
		if (variables['luck'][0] < 0) {
			//you're just too unlucky
			par = 9;
			p = chapters[0];
		}

		if (variables['reputation'][0] < 0) {
			//you're just too low reputation
			par = 13;
			p = chapters[0];
		}

		if (variables['money'][0] < 0) {
			//you're just too money
			par = 14;
			p = chapters[0];
		}
				
		if ((chapter > 1) && (variables['int'][0] < 4) && (variables['corruption'][0] > 10)) {
			//you got caught doing corrupt
			par = 10;
			p = chapters[0];
		}
		
		if ((chapter > 1) && (variables['reputation'][0] < 4)) {
			//your political allies lost faith in you
			par = 11;
			p = chapters[0];
		}
		
		if ((chapter > 1) && (variables['stress'][0] > 10)) {
			// you suffer an heart attack from too much stress
			par = 12;
			p = chapters[0];
		}		
*/

		if (p[par]['pre']) {
			p[par]['pre']();
		}
	
		var textout = '';
		var subinfo = 'info';
		var suboptions = 'options';
		
		if (lang != 'en') {
			if (p[par]['info-'+lang]) subinfo = 'info-'+lang;
			if (p[par]['options-'+lang]) suboptions = 'options-'+lang;
		}
		
		if (isFunction(p[par][subinfo])) textout = p[par][subinfo]();
				else textout = p[par][subinfo];
				
		console.log(par);
		
		if (p[par][suboptions]) {
		
			textout += "<div id=\"options\">";
			for (var i=0; i<p[par][suboptions].length; i++) {
			
				var optext = '';
				if (isFunction(p[par][suboptions][i][0])) optext = p[par][suboptions][i][0]();
					else optext = p[par][suboptions][i][0];
					
				var vlaue = 0;
				if (isFunction(p[par][suboptions][i][1])) vlaue = p[par][suboptions][i][1]();
				 else vlaue = p[par][suboptions][i][1];
				
				textout += '<input type="button" value="'+optext+'" onclick="submit('+vlaue+')">';
			}
			textout += "</div>";
			
		} else {

			// legacy paragraph code compliancy

			if (p[par]['options-text'] && p[par]['options-redirect']) {
				var dim = Object.keys(p[par]['options-text']).length;
				var dim2 = Object.keys(p[par]['options-redirect']).length;
				if (dim != dim2) {
					console.log("options-text != options-redirect");
					return;
				} else {
					textout += "<div id=\"options\">";
					for (var i=0; i<dim; i++) {
						
						var optext = '';
						if (isFunction(p[par]['options-text'][i])) optext = p[par]['options-text'][i]();
							else optext = p[par]['options-text'][i];
							
						var vlaue = 0;
						if (isFunction(p[par]['options-redirect'][i])) vlaue = p[par]['options-redirect'][i]();
						 else vlaue = p[par]['options-redirect'][i];
						
						textout += '<input type="button" value="'+optext+'" onclick="submit('+vlaue+')">';
					}
					textout += "</div>";
				}
			}
		}
		document.getElementById('board').innerHTML = textout;
		
		if (p[par]['update']) {
			p[par]['update']();	
		}
		
		if (dont_display_stats_once == false) {
			displayStats();
		} else {
			dont_display_stats_once = false;
		}
	}
