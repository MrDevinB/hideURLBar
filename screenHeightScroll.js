/* Author: @MrDevinB */

(function () {
    function loaded() {
  	// get body element
	    var body=document.getElementsByTagName('body')[0];
		// set initial height of body to screens available height
		body.style.minHeight=screen.availHeight+"px";
		// scroll to hide URL bar
		window.scrollTo(0,1);
		// reset min height to screens innerHeight
		body.style.minHeight=window.innerHeight+'px';
	}
    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', loaded, false);
    } else {
        window.attachEvent('onload', loaded);
    }
}());
