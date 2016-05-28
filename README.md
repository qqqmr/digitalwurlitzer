## Readme - M3

* Gruppe:	Montag 13:15
* Team-Nr.: Team 9
* Projektname: Digitalwurlitzer
* Projektthema: Music Voting App

### Implementierung

Framework:	Cordova - iOS + Android
API-Version:	[Android Lollipop 5.1 ]

Gerät(e), auf dem(denen) getestet wurde:
Nexus 5

Externe Libraries und Frameworks:
- cordova-plugin-geolocation (ermittlung des Standortes)
- Google Maps Library (js) und API Abfragen

Dauer der Entwicklung:
[30 Stunden]

### Weitere Anmerkungen:

### WICHTIG: 
Wir haben uns entschieden - speziell im Hinblick auf eine zukünftige Version der App mit voll funktionsfähigen Backend - die HTTP
Requests selbst mittels Angular zu mocken. Wir haben Cordova/Ionic zwar in dieser Hinsicht nicht völlig durchschaut, vermuten aber, dass
es daran liegt, dass der gewrappte HTTP Server von Android/Cordova dies nicht wirklich beherrscht - bzw. die Content Security Policy dies konsquent blockiert. Um die App deswegen auf einem Emulatur anzusehen, muss  die App mit dem lokalen Dev-Server verbunden werden,
der dann die Requests an den gemockten localhost Endpoint  bearbeitet.

Dies geschieht mittels:

ionic run -l -c -s
