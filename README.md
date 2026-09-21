Game tape files for the following language learning app:<br>
https://damarsidiq.github.io/jiveRPG/EasternHead.html<br>
(es,fr,de,it)
<br><br>
and
<br><br>
https://damarsidiq.github.io/jiveRPG/southSide.html <br>
(sv,no,da,fi)

<br><br><br><br>

For a working offline installation, the current code requires a folder structure that looks like the following:
[folder structure](structure.txt)  <br>
-- all inside 1 folder called "jiveRPG", located at the root of where the app file is (whether its EasternHead.html, southSide.html or northWall.html) and it needs to be accessed using a local server (eg: http://localhost/EasternHead.html) instead of just opening the file with a browser due to CORS restriction.

<br><br>
next step:<br>

for each app file there would be 2 things to edit:<br>
1. Removing "Cloudflare Web Analytics" js code just before the closing body.
2. changing `var isanelectronapp= null;` to `var isanelectronapp= 1;` (or any value other than 'null') inside the head tag
