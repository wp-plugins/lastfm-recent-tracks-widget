//<![CDATA[

/*
	name : lastfm
	file : jquery.lastfm.js
	author : gregory tomlinson
	(c) gregory tomlinson
	Dual licensed under the MIT and GPL licenses.
	///////////////////////////
	///////////////////////////		
	dependencies : jQuery 1.3.2
	///////////////////////////
	///////////////////////////	

*/

(function($) {

	$.fn.lastfm = function( options ) {
		// extend the defaults settings
		var el, o = $.extend(true, {}, defaults, options);
		$bod = $( document.body );
		el = this;
		connector( o.url, o.params, success );
		return this;		
		
		/**
		*	Declare any functions that require local scoping
		*
		*/
		function success(jo) {
			// access to el & o here
			if( o.params.limit > 1 && jo.recenttracks.track.length ) {
				for( i=0;i<jo.recenttracks.track.length;i++ ) {
					renderItems( jo.recenttracks.track[i] ).appendTo( el );
				}
			} else {
				// handle the non array returned
				renderItems( jo.recenttracks.track ).appendTo( el );
			}
		}
		
		function handleDate( itm ) {
		    var n=new Date(), t, ago = " ";
		    if(itm.date && itm.date.uts) {
		      t =   Math.round( (n.getTime() / 1000 - parseInt( itm.date.uts )) / 60 );
		      ago += ( t <= 1 ) ? "Now" : ( t < 60 ) ? t + " mins ago" : ( t < 3600 ) ? Math.round( t/60) + " hours ago" : Math.ceil( t/3600) + " days ago";
		    } else {
		        ago += "Now";
		    }
		    return ago;
		}
		
		function renderItems( itm ) {
			var li = $("<li />"), ago = handleDate(itm),
				a = $("<a />")
					.html( itm.name ).attr( "href", itm.url )
					.attr("target", "_blank").appendTo( li );
	
			var span = $("<span />").html( "<i>" + itm.artist['#text'] + "</i>" + ago )
									.addClass("sp_list_itm_span").appendTo( li );
			
			return li;
		}		
		
	/* end the plugin function */
	}
	
	/**
	*	Declare the defaults here
	*/
	var defaults = {
	
		url : 'http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks',
		page : 'http://www.last.fm/user/',		
		user : 'gregory80', // default, override via options
		pageName : 'Recently on Last.fm',
		params : {
			limit : 5,
			format : 'json',			
			api_key : '0e08a37f63207afd22b959c4ba7a2c3e',
			user : 'gregory80'
		}
		
	}, $bod;
	
	/**
	*	JSONP Connector, get data from a remote source
	*/
	
	function connector(url, params, callback) {
		var str = $.param( params );
		$.ajax({
			dataType: 'jsonp',
			data : str,
			jsonp: 'callback',
			'url' : url,
			success: callback			
		});
	}

})(jQuery);

//]]>