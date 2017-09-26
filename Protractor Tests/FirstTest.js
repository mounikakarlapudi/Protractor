describe("Text entering into an input box",function(){
	
	it("executing input box text",function(){
		
		browser.get("https://angularjs.org/");
	    element(by.model("yourName")).sendKeys("Mouni");
	    element(by.binding("yourName")).getText().then(function(text){
	    	
	    	console.log(text);
	    });
	
	});
	
});