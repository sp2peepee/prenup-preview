$( document ).ready( function () {

	var vid         = $( '#bgvid' );
	var pauseButton = $( '#polina button' );

	function vidFade() {
		vid.addClass( 'stopfade' );
	}

	vid.on( 'ended', function () {
		// only functional if 'loop' is removed
		vid.trigger( 'pause' );
		// to capture IE10
		vidFade();
	} );


	pauseButton.click( function () {
		vid.toggleClass( 'stopfade' );

		if( vid.get( 0 ).paused ) {
			vid.trigger( 'play' );
			$( this ).text( 'Pause' );
		} else {
			vid.trigger( 'pause' );
			$( this ).text( 'Paused' );
		}

	} );

} );

