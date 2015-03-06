$( document ).ready( function () {

	var vid         = $( '#bgvid' );
	var pauseButton = $( '#polina button' );

	function vidFade() {
		vid.addClass( 'stopfade' );
	}

	vid.on( 'ended', function() {
		// only functional if 'loop' is removed
		vid.trigger('pause');
		vid.get(0).pause;
		// to capture IE10
		vidFade();
		console.log("Ended!");
	} );

	pauseButton.on( 'click', function () {
		vid.toggleClass( 'stopfade' );
		console.log(vid);
		if ( vid.get(0).paused ) {
			vid.trigger('play');
			pauseButton.html('Pause');
		} else {
			vid.trigger('pause');
			pauseButton.html('Paused');
		}
	} )

});

