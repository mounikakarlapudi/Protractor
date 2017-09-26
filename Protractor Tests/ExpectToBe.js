describe("Validating the caluclator app",function(){
	
	var expected_text;
	beforeEach(function(){
		browser.get("http://www.way2automation.com/angularjs-protractor/calc/");// what ever you want to execute before every it block you can give in forEach
		element(by.model("first")).sendKeys("7");
		element(by.model("second")).sendKeys("7");
		element(by.buttonText("Go!")).click();
		expected_text=element(by.binding("latest")).getText();
	});
	
	
	afterEach(function(){// similarly after each block
		browser.sleep(3000);
	});
	it("7+7=14",function(){
		
		
		expected_text.then(function(text){
			console.log("The result is:" +text);
			expect(text).toBe(14);
		});
		it("7+7 !=13",function(){
			
			expected_text.then(function(){
				console.log("the result is:"+text);
				expect(text).not.toBe(13);
			
				});
			
	
		
	});