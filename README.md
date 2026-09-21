Game tape files for the following language learning app:<br>
https://damarsidiq.github.io/jiveRPG/EasternHead.html<br>
(es,fr,de,it)
<br><br>
and
<br><br>
https://damarsidiq.github.io/jiveRPG/southSide.html <br>
(sv,no,da,fi)

<br><br><br><br>


NOTES for Future Offline Versioning
<BR>

For a working offline installation, the current code requires a folder structure that looks like the following:
[folder structure](structure.txt)  <br>
-- all inside 1 folder called "jiveRPG", located at the root of where the app file is (EasternHead.html, southSide.html or northWall.html) and it needs to be accessed using a local server (eg: http://localhost/EasternHead.html) instead of just opening the file with a browser due to CORS restriction.

<br><br>
next step:<br>

for each app file(EasternHead.html, southSide.html or northWall.html) there would be 2 things to edit:<br>
1. Removing "Cloudflare Web Analytics" js code just before the closing body.
2. changing `var isanelectronapp= null;` to `var isanelectronapp= 1;` (or any value other than 'null') inside the head tag

<br>

** the difference between the offline and the online version is that in the offline version the javascript game tape files (for easternHead and southSide) are completely separated inside their own folders while in this repository it's mixed together.
