describe("Text Automation of Banking Application",function(){
	
	it("Validating customer login test",function(){
		
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		element(By.buttonText("Customer Login")).click();
	   
		expect(browser.getTitle()).toContain("Protractor practice");// it is to check the expected is correct or not
		browser.sleep(3000);
		
		element.all(By.css("#userSelect option")).then(function(items){ //    this element.all gets the multiple values in dropdown 
			
			console.log("Printing values form the drop-down list");
			console.log("The total dropdown list:"+items.length); // this gets the length of the dropdown
			
			for(i=0;i<items.length;i++){
				 items[i].getText().then(function(text){  // to print the all values in dropdown list
					 console.log(text);
				 });
			}
			
			element(by.model("custId")).element(by.css("[value='2']")).click();// here finding element with in the element by using value 
			element(by.buttonText("Login")).click();
			//element(by.binding("user")).getText().then(function(text){--- this statement tells how to get data from binding element( from external source)
				//console.log(text);
			//});
			expect(element(by.binding("user")).getText()).toEqual("Harry Potter");// it validating the data in the binding
			
			browser.sleep(3000);
		});
	});
	
});