describe("Locator testing by Repeater",function(){
	
	
		// what ever you want to execute before every it block you can give in forEach

	
	       it("Adding few records",function(){
		
	    	   browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
		
		element(by.model("first")).sendKeys("4");
		element(by.model("second")).sendKeys("7");
		element(by.id("gobutton")).click();
		
		element(by.model("first")).sendKeys("9");
		element(by.model("second")).sendKeys("7");
		element(by.id("gobutton")).click();
		
		
		element(by.binding("latest")).getText().then(function(text){
			
		});
		it("printing the first row data",function(){
			
			console.log("The result is:" +text);
		});
		});
	});