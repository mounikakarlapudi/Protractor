describe("Validating the caluclator app",function(){
	
	beforeEach(function(){
		browser.get("http://www.way2automation.com/angularjs-protractor/calc/");// what ever you want to execute before every it block you can give in forEach
	});
	
	afterEach(function(){// similarly after each block
		browser.sleep(3000);
	});
	it("4+7=11",function(){
		
		
		
		element(by.model("first")).sendKeys("4");
		element(by.model("second")).sendKeys("7");
		element(by.buttonText("Go!")).click();
		
		element(by.binding("latest")).getText().then(function(text){
			console.log("The result is:" +text);
		})
	});
	
    it("5+10=15",function(){
		
	
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("10");
		element(by.buttonText("Go!")).click();
		
		element(by.binding("latest")).getText().then(function(text){
			console.log("the result is:"+text);
		})
	});
  it("2+2=4",function(){
	
	element(by.model("first")).sendKeys("2");
	element(by.model("second")).sendKeys("2");
	element(by.buttonText("Go!")).click();
	
	element(by.binding("latest")).getText().then(function(text){
		console.log("the result is:"+text);
	})
});

});