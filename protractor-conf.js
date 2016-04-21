exports.config = {
	framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['angularjsHomepage.js'],
    
    onPrepare: function () {
    
        browser.driver.manage().window().setSize(1680, 900);
        
    },
    
    capabilities: {
    browserName: 'chrome'
  	}    
    
}