=== Recently on Last.fm ===
Contributors: gregory80
Tags: widget, music, last.fm
Requires at least: 2.6
Tested up to: 2.7.1
Stable tag: 0.7

Fast, flash free, non-cached view of Recent Tracks on Last.fm

== Description ==
The Last.fm Recent Tracks Plugin / Widget let's you display your Last.fm recent tracks in the sidebar of your blog, useful if you use WP-Cache / Super Cache and want the feed to be fresh. It leverages jQuery and JSONP to provide a never-stale, asynchronous connection to Last.fm.


== Installation ==

1. Unzip lastfm-recent-tracks-widget.zip and upload the entire folder to wp-content/plugins.
1. Activate the plugin through the 'Plugins' menu in WordPress

= Widget Enabled Themes = 
* Go To The Widget Screen Under Appearance. 
* Add The Recently on Last.fm Widget.
* Add Your own Last.fm username to see your recent tracks.
* Select The number of Recent Tracks you want to display
* Save your changes


= Non Widget Enabled Themes =
* Add The following HTML to your sidebar, replacing _ _ YOUR_USER_ID _ _ with your actual Last.fm username
* <pre>&lt;div class="last_fm_recent_tracks_bx">
	&lt;h4>&lt;a href="http://www.last.fm/user/_ _ YOUR_USER_ID _ _" target="_blank">Recently on Last.fm&lt;/a>&lt;/h4>
	 &lt;ul count="5" user="_ _ YOUR_USER_ID _ _" id="recent_on_last_fm_itm_list">&lt;/ul>
&lt;/div&gt;</pre>



== Frequently Asked Questions ==
= How Does It Work =
Magic?! But seriously. The plugin / widget leverages JSONP to connect to the Last.fm API for a specified username to provide a never-stale, asynchronous connection to Last.fm. 

= What awesome technologies are at play =
jQuery, JSONP, PHP & Wordpress!

= How do I install it =
See the installion section

= Who do I complain to if it's broken? =
gregory.tomlinson [at] gmail [dot] com

== Screenshots ==
1. View of the widget in the K2 Theme.

