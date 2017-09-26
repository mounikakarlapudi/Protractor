var SelectWrapper= require('--/utils/select-wrapper.js');
var mySelect= new SelectWrapper(by.id("userSelect"));

describe("Automating Customer Login functionality",function(){
	
	it("Login to the account",function(){
		
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		
		element(by.buttonText("Customer Login")).click();
		
		mySelect.selectByText("Harry Potter");
		
		element(by.buttonText("Login")).click();
	});
});