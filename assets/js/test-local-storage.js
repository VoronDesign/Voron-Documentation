function testLocalStorage() {
    var storageAvailable = false;
    // let's see if local storage is
    // really available to use
    // try to set and remove an item from local storage
    // if storageAvailable gets set to true then an exception was not thrown
    // https://gist.github.com/paulirish/5558557
	if ("localStorage" in window) {
		try {
			window.localStorage.setItem('_tmptest', 'temp');
            storageAvailable = true;
			window.localStorage.removeItem('_tmptest');
		} catch(e) {
            if (storageAvailable === true) {
                console.log("Exception, BUT setItem() WORKED! Error e.name:("+e.name+") e.message=["+e.message+"]");
            } else {
                console.log("Exception!, Error e.name:("+e.name+") e.message=["+e.message+"]");
            }
	}
    return storageAvailable;
    }
}