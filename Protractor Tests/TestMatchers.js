describe("Validating the caluclator app",function(){
	
	var title;
	
	beforeEach(function(){
		
		browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
		browser.getTitle();
	});
	it("validates exact title",function(){
		
		title.then(function(text){
		console.log(text);	
		expect(title).toEqual("Protractor practice website - Caluclator");
		});
		
	});
it("validate title should not match",function(){
		
		title.then(function(text){
		console.log(text);	
		expect(title).not.toEqual("Protractor practice website - Caluclator");
		});
		
	});
it("validates partial title",function(){
	
	title.then(function(text){
	console.log(text);	
	expect(title).toMatch("practice");
	});
	
});
});