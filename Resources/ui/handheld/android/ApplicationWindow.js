//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#8C0221',
		navBarHidden:true,
		fullscreen:true,
		exitOnClose:true
	});
	
//	var crusts = Ti.UI.createView();
//	var OpenCrusts = require('includes/OpenCrusts');  
//	var toppings = Ti.UI.createWindow();  
//	var details = Ti.UI.createWindow();  
	
	self.backgroundImage = 'images/bg_main.png';	
		
	//construct UI
	var firstView = new FirstView();
	self.add(firstView);

//	var openCrusts = new OpenCrusts();	
//	self.add(openCrusts);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
