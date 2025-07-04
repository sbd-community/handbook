**Bundesverband IT-Sicherheit e.V.**

(^)
201 9-


**TeleTrusT-AG "Smart Grids / Industrial Security"**

**Federführung und Ansprechpartner für Rückfragen:**

**Sebastian Fritsch, secuvera GmbH**

Tobias Glemser, secuvera GmbH
Steffen Heyde, secunet Security Networks AG
Dr. Holger Mühlbauer, TeleTrusT - Bundesverband IT-Sicherheit e.V.

**Impressum**

Herausgeber:

Bundesverband IT-Sicherheit e.V. (TeleTrusT)
Chausseestraße 17
10115 Berlin
Tel.: +49 30 4005 4306
Fax: +49 30 4005 4311
E-Mail: info@teletrust.de
https://www.teletrust.de

© 2019 TeleTrusT


```
TeleTrusT-Prüfschema nach IEC 62443-4-
```
### 2019 -

**Industrielle Kommunikationsnetze - IT-Sicherheit für industrielle Automatisierungssysteme**

```
Security for industrial automation and control systems
```
```
IEC 62443 Security for industrial automation and control systems -
Part 4-2: Technical security requirements for IACS components (IEC 62443-4-2:2019)
```

## Inhaltsverzeichnis

- 1 Einführung Inhalt
- 1.1 Zielsetzung und Anwendungsbereich
- 1.2 Übersicht zum Normteil IEC 62443-4-2
- 1.3 Nutzung des Normteils
- 1.4 Abgrenzung zu SL-Stufen
- 1.5 Adressaten
- 1.6 Normative Terminologie
- 1.7 Normative Referenzen
- 1.8 Definitionen
- 2 Prüfkonzept
- 2.1 Generelles Konzept
- 2.2 Prüfung des Verwendungszwecks
- 2.3 Dokumentation (Design)
- 2.4 Dokumentation (Anwender)
- 2.5 Konformitätsbewertung
- 2.6 Schwachstellenanalyse
- 3 Prüfungsablauf
- 3.1 Konformitätsbewertung
- 3.2 Zertifizierung
- 3.3 Andere Prüfverfahren
- 3.4 Durchführung der Prüfung
- 4 Anhang A (normativ) - Komponentenspezifikation
- 4.1 Vorbemerkung
- 4.2 Beschreibung der Komponente / Konformitätsbehauptung
- 4.3 Verwendungszweck
- 4.4 Dokumentation
- 5 Anhang B (normativ) - Anforderungen an Prüfdokumentation
- 5.1 Vorbemerkung
- 5.2 Übersicht zur Prüfung
- 5.3 Bewertung der Design-Dokumentation
- 5.4 Prüfung der Anwender-Dokumentation
- 5.5 Testergebnisse der Konformitätsbewertung
- 5.6 Schwachstellenanalyse
- 5.7 Gesamtbewertung
- 6 Anhang C (normativ) - Akzeptanzkriterien
- 6.1 Vorbemerkung
- 6.2 FR-1: Identification and Authentication Control
- 6.3 FR-2: Use Control
- 6.4 FR-3: System Integrity
- 6.5 FR-4: Data Confidentiality
- 6.6 FR-5: Restricted Data Flow
- 6.7 FR-6: Timely Response To Events
- 6.8 FR-7: Resource Availability
- 7 Anhang D (informativ) – Methoden zur Schwachstellenbewertung
- 7.1 Einführung
- 7.2 AVA/CEM Bewertung
- 7.3 Beispiel einer Bewertung nach AVA/CEM
- Entwicklungsprozesses 8 Anhang E (informativ) – Übersicht zur Nutzung der Ergebnisse des IEC 62443-4-1-
- 9 Anhang F (informativ) – Übersicht der Ergänzungen zur Norm
- 10 Abkürzungsverzeichnis
- 11 Literaturverzeichnis


**1 Einführung**

## 1.1 Zielsetzung und Anwendungsbereich

Die noch "junge" und zum Teil noch in Arbeit befindliche Norm IEC 62443 hat das Ziel, Cybersicher-
heit im industriellen Umfeld (primär der Automatisierungstechnik) ganzheitlich zu betrachten. Es wer-
den die drei Rollen (Betreiber, Integrator und Komponentenhersteller) betrachtet.

Der in diesem Prüfschema fokussierte Normteil IEC 62443-4-2 (IEC 62443-4-2:2019) stellt Anforde-
rungen an die technischen Security Eigenschaften von industriellen Komponenten. Daneben existiert
im Abschnitt 4, welcher konkret Komponentenhersteller adressiert, der Normteil 62443-4-1. Dieser
beinhaltet die Anforderungen an einen sicheren Entwicklungsprozess für Komponentenhersteller. Die
Anforderungen an technische Security Eigenschaften von ganzen industriellen Systemen (Anlagen)
wird im Normteil IEC 62443-3-3 behandelt.

Die Norm IEC 62443 enthält über ihre Teile Vorgehensmodelle und Anforderungen, um sichere indu-
strielle Anlagen zu erstellen und zu betreiben. Es werden allerdings keine Anforderungen formuliert,
wie eine dritte Partei die korrekte und effektive Umsetzung der Norm prüfen kann. Dies ist allerdings
insbesondere im Kontext von Zertifizierung relevant, da von Anwendern hinter Zertifikaten vergleich-
bare Bewertungsergebnisse erwartet werden.

Das vorliegende Dokument "Prüfschema nach IEC 62443-4-2" ist ein Vorschlag für eine Vorgehens-
weise zur Prüfung oder Evaluierung, ob die Anforderungen der IEC 62443-4-2 eingehalten wurden.

Das Prüfschema bezieht sich primär auf die technischen Fähigkeiten einer Komponente, setzt aller-
dings gleichzeitig voraus, dass bei der Entwicklung der Komponente ein Entwicklungsprozess ent-
sprechend IEC 62443-4-1 zugrunde gelegt wurde. Umgekehrt kann aber nach Anwendung des Prüf-
schemas keine Aussage über den Reifegrad des Entwicklungsprozesses gemacht werden.

Dies bedeutet, das Prüfschema fordert entsprechend der Norm, dass die Entwicklung einer Kompo-
nente nach den Prozessen der IEC 62443-4-1 erfolgt ist, d.h. es liegen Ergebnisse (Deliverables) des
Entwicklungsprozesses vor, welche im Rahmen der Prüfung der Komponente herangezogen werden
können. Jegliche Bezüge in diesem Prüfschema beziehen sich auf diese Deliverables und nicht auf
die Bewertung des Reifegrads des Entwicklungsprozesses an sich.

Das Prüfschema stellt kein Zertifizierungsschema sondern eine Grundlage für eine Konformitätsbe-
wertung dar. Zertifizierungsrelevante Aspekte wie die Definition beteiligter Rollen, Verfahren zur Bean-
tragung, Abnahme und Überwachung von zertifizierten Komponenten und weitere müssen hierauf
aufbauend von Schemabetreibern oder Zertifizierungsstellen definiert werden, dies wird im vorliegen-
den Dokument nicht behandelt.

Das Prüfschema versteht sich im Sinne des IECEE Programmdokuments [OD-2061] als Umsetzung
einer Produkt Zertifizierung nach IEC 62443-4-2 entsprechend Szenario 1. Abweichend betrachtet das
Prüfschema das Vorhandensein einer IEC 62443-4-1 Zertifizierungen nicht als ausreichend. Wie oben
beschrieben werden immer die Ergebnisse (Deliverables) eines IEC 62443-4-1 konformen Entwick-
lungsprozesses betrachtet, d.h. aus Prüfungssicht wird die Evidenzebene und nicht die Zertifikatsebe-
ne betrachtet.

Das Prüfschema kann für kombinierte Zertifizierungen nach IEC 62443-4-2 mit Berücksichtigung eines
Entwicklungsprozesses nach IEC 62443-4-1 genutzt werden. In diesem Fall handelt es sich um Dritt-
parteienbewertungen. Eine weitere typische Anwendung des Prüfschemas ist die Konformitätsbewer-
tung eines Herstellers der eigenen Komponenten also Erstparteienbewertung.

Ziel der Aussage einer Prüfung nach diesem Schema ist, die korrekte und robuste Implementierung
der Anforderungen der IEC 62443-4-2, bezogen auf eine konkrete Komponente, zu bestätigen oder
Mängel zu benennen. Zudem soll die Prüfung eine Aussage dazu machen, ob die Komponente resi-
stent entsprechend des Niveaus des definierten Angreifers (entsprechend Security Level, siehe Kapi-
tel 1.3) ist oder ob die Komponente nicht ausreichend resistent zu dem erwarteten Niveau ist. Das
Ergebnis der Prüfung bezieht sich immer auf die der Prüfung zugrunde liegenden Version der Kompo-
nente unter Beachtung der zu diesem Zeitpunkt bekannten Schwachstellen und Angriffsmethoden.


**1.2 Übersicht zum Normteil IEC 62443-4-**

Industrielle Komponenten nach IEC 62442-4-2 werden in vier Gerätetypen eingeteilt:

- Embedded Devices
BEISPIELE PLC, Sensoren, SIS (Safety Instrumented Systems) Controller, DCS (Distributed
Control System) Controller
- Host Devices
BEISPIELE Notebooks, PC, Workstations
- Network Devices
BEISPIEL Industrial Router
- Applications
BEISPIELE Konfigurations-Software, Historisierungssoftware

Dies sind Komponenten die in industriellen Automatisierungssystemen eingesetzt werden. Unter an-
derem sind dies COTS (Commercial off-the-shelf) Komponenten, die einem größeren Anwenderkreis
zur Verfügung gestellt werden. Der Normteil kann aber auch aus Sicht eines Systemherstel-
lers/Integrators genutzt werden, der für die Mitigation von Risiken einer in Planung befindlichen Anla-
ge eine spezifische Komponente entwickeln lassen will, die ausgewählte Security Eigenschaften bein-
halten soll.

Der Normteil sortiert die Einzelanforderungen in sogenannte Foundational Requirements (FR), die als
Themenkategorisierung gelesen werden können. Darunter befinden sich die Component Require-
ments (CR), welche die technische Detailanforderungsebene darstellen.

## 1.3 Nutzung des Normteils

Aus der Definition des Normteils sowie der gesamten IEC 62443 lassen sich zwei Einstiege in die
Prüfung nach IEC 62443-4-2 ableiten:

1. Auswahl einer SL-Stufe mit verbundenen Anforderungen (CR) und Resistenz-Stufe
2. Gezielte Auswahl von Anforderungen (CR) sowie definierter Resistenz-Stufe.

Das erste Modell geht von der Perspektive eines Komponenten-Herstellers aus, der eine Bewertung
der Security Eigenschaften der verschiedene Einsatzvarianten der Komponenten durchführen möchte.
Ein Hersteller definiert hierzu über die SL-Stufe das Zielniveau seiner Security Eigenschaften, dies
leitet sich wiederum u.a. aus der Analyse einer üblichen Einsatzumgebung seiner Komponente oder
Befragung seiner Kunden ab.

Das zweite Modell geht von der Perspektive der Anlagenplanung aus. Hierzu wird eine Risikoanalyse
nach dem Vorgehensmodell aus dem Normteil IEC 62443-3-2 durchgeführt und auf Basis der ermittel-
ten Risiken ein Systemdesign durchgeführt. Um die identifizierten Risiken zu mitigieren, können ent-
sprechend notwendige Anforderungen an die Komponenten abgeleitet werden. Diese Menge an An-
forderungen kann gezielt über eine Auswahl von Anforderungen (CR) definiert werden.

Unabhängig von den beiden Vorgehensmodellen muss ein Komponentenhersteller bei der Entwick-
lung seiner Komponente die Vorgaben der IEC 62443-4-1 in seinem Entwicklungsprozess einhalten.
Ein wichtiges Ergebnis dieser Prozesse ist u.a. die Definition des Verwendungszwecks oder Kontexts
der Komponente. Diese und weitere Angaben geben einem Anwender sowie Prüfer wichtige Informa-
tionen über das zu erwartende Verhalten der Komponente.

Der Begriff der "SL-Stufe", konkret SL-C für SL Capability, nach IEC 62443-4-2 definiert sich über zwei
Anteile. Zum einen über die Auswahl von Anforderungen (CR) und zum anderen über einen definier-
ten Angreifertyp. Im Rahmen des Normteils IEC 62443-4-2 wurde versucht dies allgemeingültig, sinn-
voll miteinander abzugleichen. Ergebnis der Risikoanalyse eines Systems kann jedoch sein, dass
sowohl die Auswahl der Anforderungen als auch die Definition des Angreifertyps angepasst werden
muss. Komponentenhersteller haben allerdings oft das Problem, dass die genauen Einsatzszenarien
der Anlagen ihrer Kunden nicht bekannt sind oder sich deutlich unterscheiden. Für Komponentenher-
steller ist es daher sinnvoll und effektiv, auf die vordefinierten SL-Stufen zurückzugreifen, da das Vor-
gehen damit vereinfacht wird. Bei der Wahl einer SL-Stufe sollte inhaltlich der Verwendungszweck der
Komponente berücksichtigt werden.


Aus Sicht der Angriffsresistenz definiert die SL-Stufe folgende abstrakte Angriffstypen entsprechend [:

```
Stufe Originaltext Angriffstyp
SL-1 Protection against casual or coinci-
dental violation.
```
```
nicht gezielter Angriff
```
```
SL-2 Protection against intentional violation
using simple means with low re-
sources, generic skills and low motiva-
tion
```
```
aktiver, gerichteter Angriff, einfache
Mittel, allgemeines IT-Wissen, geringe
Motivation
```
```
SL-3 Protection against intentional violation
using sophisticated means with mod-
erate resources, IACS specific skills
and moderate motivation.
```
```
aktiver, gerichteter Angriff, erweiterte
Werkzeuge und Ressourcen (Zeit,
Geld), industrie-spezifisches Wissen,
mittlere Motivation
SL-4 Protection against intentional violation
using sophisticated means with ex-
tended resources, IACS specific skills
and high motivation.
```
```
aktiver, gerichteter Angriff, umfangrei-
che Werkzeuge und Ressourcen (Zeit,
Geld), industrie-spezifisches Wissen,
hohe Motivation.
```
```
Tabelle 1
```
## 1.4 Abgrenzung zu SL-Stufen

Dieses Prüfschema orientiert sich an den Anforderungen der Stufen SL-1 bis SL-3. Die Stufe SL- 4
wird aktuell nicht betrachtet. Dies begründet sich daraus, dass hiermit zunächst Prüfungen im mittle-
ren Vertrauenswürdigkeitsbereich (medium/substantial assurance) adressiert werden sollen, um zu-
nächst Erfahrungen im Umgang mit der Norm zu sammeln.

Die Stufe SL-4 legt einen Angreifer mit hohem Potential, hoher Motivation und hohen Ressourcen
zugrunde, aktuell wird empfohlen hierzu spezifische Sicherheitskonzepte zu entwickeln, z. B. auf Ba-
sis des Normteil IEC 62443-3-2.

Eine Erweiterung dieses Prüfschemas auf SL-4 im Rahmen einer Fortschreibung ist zukünftig möglich.

## 1.5 Adressaten

Die primären Adressaten dieses Prüfschemas sind Prüfer, Prüfstellen und interne QS-/IT-
Prüfabteilungen. Zertifizierungsschemen können das Prüfschema anwenden. Des Weiteren richtet
sich das Dokument an Komponentenhersteller, welche sich auf eine Prüfung Ihrer Komponenten vor-
bereiten wollen, also Entwicklungsabteilungen.

## 1.6 Normative Terminologie

Im folgenden Text werden die Schlüsselworte MUSS, SOLLTE, KANN und DARF entsprechend der
normativen Bedeutung genutzt und werden jeweils in Großbuchstaben dargestellt. Dabei bedeutet
MUSS eine strikte Anforderung, SOLLTE eine Empfehlung, KANN eine Möglichkeit und DARF eine
Erlaubnis für eine mögliche Verwendung.


## 1.7 Normative Referenzen

Die folgenden zitierten Dokumente sind für die Anwendung dieses Dokuments erforderlich. Bei datier-

ten Verweisungen gilt nur die in Bezug genommene Ausgabe. Bei undatierten Verweisungen gilt die

letzte Ausgabe des in Bezug genommenen Dokuments (einschließlich aller Änderungen).

IEC 62443-3-3, _Industrial communication networks - Network and system security - Part 3-3: System
security requirements and security levels_ [IEC62443-3-3]

IEC 62443-4-1, _Security for industrial automation and control systems – Part 4-1: Product develop-_

_ment requirements_ [IEC62442-4-1]

IEC 62443-4-2, _Security for industrial automation and control systems – Part 4-2: Technical security_

_requirements for IACS components_ [IEC62442-4-2]

## 1.8 Definitionen

```
Begriff Definition
Akzeptanzkriterien (acceptance criteria) Kriterien für den Prüfer zur Beurteilung, ob eine
vorgefundene Implementierung im Sinne der
Anforderung akzeptabel umgesetzt wurde
Angriffsresistenz Fähigkeit einer Komponente bei einem Angriff
gegenüber diesem (vgl. SL-Stufe) resistent zu
bleiben
Resistenz-Stufe Kategorien zur Beschreibung einer erwarteten
Angriffsresistenz aus Perspektive des Angriffs-
potentials (Definition der SL-Stufen)
Robustheit Aufrechthaltung der korrekten Funktionalität im
Fall von ungültigen Eingaben oder ungünstigen
Umgebungsbedingungen, z. B. Sonderzeichen
in an sich regulären Benutzereingaben
```
```
Tabelle 2
```
## 2 Prüfkonzept

## 2.1 Generelles Konzept

Die Prüfung einer Komponente auf Einhaltung des Normteils IEC 62443-4-2 MUSS entlang folgender
Prüfschritte erfolgen:

1. Prüfung des Verwendungszwecks
2. Dokumentation (Design/Prüfung)
3. Dokumentation (Anwender)
4. Konformitätsbewertung
5. Schwachstellenanalyse

Der erste Prüfschritt leitet sich aus zwei Punkten ab. Zum einen wird normativ gefordert, dass die
Entwicklung von Komponenten basierend auf den Prozessen des Normteil IEC 62443-4-1 entwickelt
wurde. Hierzu MUSS ein Security Kontext und die Erstellung eines Bedrohungsmodells erfolgen. Zum
anderen bedingen die zum Teil abstrakten Beschreibungen der Anforderungen der IEC 62443-4-2,
dass eine Berücksichtigung der Komponenten-spezifischen Rahmenparameter erfolgen MUSS, um
eine Evaluation durchführen zu können. Hierzu MUSS der Verwendungszweck der Komponente be-
schrieben werden.

Um eine Komponente auf Security Eigenschaften prüfen zu können, werden je nach Konzept und SL-
Stufe der Prüfung Details über die Komponente vom Hersteller benötigt. In etablierten IT-Produkt-
Evaluierungsstandards ist es üblich, dass eine zunehmende Resistenz unter anderem durch eine
höhere (SL-)Stufe ausgedrückt wird, einhergehend mit einer tieferen Prüfung und damit zunehmender
Vertrauenswürdigkeit (Assurance). Dieses Prinzip wird in diesem Prüfkonzept ebenfalls so ange-


wandt, dass bei höherer SL-Stufe der Hersteller detailliertere Entwickler- oder Design-Dokumente
vorlegen MUSS.

Im folgenden Prüfschritt MUSS die Anwender-Dokumentation untersucht werden, ob diese hinsichtlich
der Security Eigenschaften vollständig und korrekt ist. Die mindestens zu beschreibenden Themen
ergeben sich aus den Prozessen der IEC 62443-4-1, eine Übersicht findet sich in Kapitel 2.4 in die-
sem Dokument.

Der nächste, deutlich umfangreichere Prüfschritt ist die Prüfung auf konforme Implementierung der
definierten Anforderungen in Abhängigkeit der gewählten die SL-Stufe. Für die Evaluation durch den
Prüfer wurden hierzu im vorliegenden Dokument Akzeptanzkriterien definiert. Ein Nachweis über die
Einhaltung einzelner Kriterien MUSS über einen oder mehrere Tests stattfinden. Falls dies nicht mög-
lich, z. B. falls die Funktionalität nicht über eine Schnittstelle getestet werden kann, dann KANN ein
Nachweis über eine Design-Dokument-Prüfung erbracht werden.

Der folgende Prüfschritt ist die Durchführung einer Schwachstellenanalyse zur Feststellung, ob die
erwartete Angriffsresistenz eingehalten wurde. In diesem Prüfschritt MUSS der Bezug zum ange-
nommenen Angriffspotential hergestellt werden, welches ebenfalls mittels einer gewählten SL-Stufe
definiert wird. Falls die Sicherheitsanforderungen nicht über eine SL-Stufe gewählt wurden, MUSS ein
entsprechender Angreifertyp explizit ausgewählt werden.

Die zu prüfende Komponente SOLLTE in mindestens zweifacher Ausführung zur Prüfung übergeben
werden, diese optionale Forderung soll helfen einen reibungslosen Prüfungsablauf sicherzustellen.
Die Komponente MUSS dabei einem normalen Serienmodell entsprechen. Sofern noch in Entwicklung
befindlich, MUSS sichergestellt sein, dass die geprüften Eigenschaften denen im späteren Serienmo-
dell entsprechen.

Die zuvor benannten Punkte definieren den Umfang der durch den Hersteller zu übergebenden Infor-
mationen für die Prüfung nach IEC 62443-4-2. Nachfolgend werden die einzelnen Angaben noch ein-
mal detailliert innerhalb der jeweiligen Prüfschritte beschrieben.

## 2.2 Prüfung des Verwendungszwecks

Der Verwendungszweck der Komponente definiert betriebliche und Security-Rahmenparameter einer
Komponente. Diese KÖNNEN beispielsweise als Annahmen an die Einsatzumgebung beschrieben
werden. Ein Format für diese Beschreibung ist nicht in der IEC 62443 definiert. Die zugehörigen Inhal-
te werden für eine effektive Prüfung allerdings benötigt.

Die Inhalte lassen sich aus den Prozessen der IEC 62443-4-1 herauslesen und werden in diesem
Dokument teilweise noch präzisiert. Es MUSS die Definition eines Security Kontexts (SR-1) und die
Erstellung eines Bedrohungsmodells (SR-2) für die Komponente erfolgen.

Aus Sicht dieses Prüfschema MÜSSEN die Informationen als beschriebenes Ergebnis (Dokument)
Eingabe in die Prüfung finden. In Anhang A dieses Dokuments wird eine Komponentenspezifikation
angegeben, welche genutzt werden SOLLTE, um alle notwendigen Informationen zusammenzustel-
len. Die Komponentenspezifikation KANN als Gliederung für ein Dokument genutzt werden oder als
Checkliste für referenzierte Dokumente.

Der Prüfer MUSS die bereitgestellten Informationen auf Vollständigkeit und Korrektheit analysieren.

## 2.3 Dokumentation (Design)

Etablierte Prüfstandards nutzen als Konzept eine stufenweise Steigerung der Vertrauenswürdigkeit
(Assurance). Zusätzlich wird ein direkter Bezug zwischen der Vertrauenswürdigkeit und der Resistenz
gegenüber Schwachstellen hergestellt. Die zugrundeliegende Überlegung ist, dass eine gegenüber
den Prüfern weitgehende Transparenz bei den technischen Details zu einer effektiven Möglichkeit zur
Bewertung des Komponenten-Designs führt. Damit wird in diesem Analyseschritt zudem ermöglicht,
grundsätzliche Design-Schwächen aufzudecken.

In diesem Prüfschema wird dieses Konzept aufgegriffen und den betrachteten Stufen SL-1 bis SL-
(Resistenzstufe) die folgende geforderte Design-Dokumentation zugeordnet.


Die Wahl der technischen Implementierung MUSS angemessen zur gewählten SL-Stufe (im Sinne der
Resistenz) sein, dies ist über die Design-Dokumentation darzustellen. Diese Forderung ergibt sich aus
den Definitionen der sieben Foundational Requirements (FR) jeweils zu Beginn der einzelnen Kapitel
5 bis 11 der [IEC62442-4-2].

Dies bedeutet beispielsweise, dass bzgl. der Anforderung CR 4.1 Information confidentiality darzustel-
len ist, warum die gewählte Implementierung bei SL-2 das in FR 4 Data confidentiality geforderte
Niveau erreicht: „Prevent the unauthorized disclosure of information to an entity actively searching for
it using simple means with low resources, generic skills and low motivation.“

Die abschließende Beurteilung, ob die technische Implementierung der geforderten Stufe entspricht,
findet final im Prüfschritt 5 Schwachstellenanalyse statt.

```
SL-Stufe
Geforderte Design-Dokumentation Kommentar
```
```
SL-1 Beschreibung aller externen Schnitt-
stellen,
u.a.:
alle kabelgebundenen und funkbasier-
ten Kommunikationsschnittstellen,
elektrische Schnittstellen und Debug-
schnittstellen mit Beschreibung der
Funktionalität und Konfigurationsmög-
lichkeiten, z. B. eine Schnittstelle zur
Gerätekonfiguration mit technischer
Beschreibung des Protokolls (oder
Protokollstacks) und aller Konfigurati-
onsparameter, sowie Kommunikati-
onsmatrix (Quelle, Ziel und Zweck)
```
```
Informationen zu eingesetzten krypto-
graphischen Algorithmen, dabei auch
Verweis auf empfehlende Stelle und
Begründung für die Wahl des Algo-
rithmus
```
```
Informationen zu eingesetzter Soft-
ware mit 3rd-Party-Libraries und exak-
ter Version
```
```
Informationen zum Schutz der Integri-
tät der Komponente, z. B. Firmware-
Datei-Integrität (Begriff aus
[IEC62442-4-1]: product integrity veri-
fication mechanisms)
SL-
wie SL-
```
```
SL-3 zusätzlich internes Design, u.a.:
Nennung von Subsystemen und Mo-
dulen mit Funktionalität und externen
Konfigurationsmöglichkeiten und zu-
sätzlich Beschreibung der Sicher-
heitsarchitektur
```
```
Auflistung aller verwendeten System-
Benutzer der Komponente. Diese
müssen sich auch in der Dokumenta-
tion wiederfinden.
SL-4 nicht definiert nicht relevant für Prüfschema
in dieser Version
```

```
Tabelle 3
```
Der Prüfer MUSS eine Prüfung auf Verständlichkeit und Vollständigkeit durchführen. Die Informatio-
nen MÜSSEN dann in der Konformitätsbewertung und Schwachstellenanalyse aufgegriffen werden.
Das erfolgte Threat Modeling (SR-2) MUSS bei der Prüfung der erfolgten Design-Entscheidungen mit
beachtet werden und auf Schlüssigkeit geprüft werden.

## 2.4 Dokumentation (Anwender)

Die Entwicklung der Komponente MUSS die Prozesse der IEC 62443-4-1 beachten, daher sind fol-
gende Inhalte in der Anwender-Dokumentation gefordert. In Klammern wird der korrespondierende
Prozess aus dem Normteil IEC 62443-4-1 angegeben:

- Durchführung von Security Updates der Komponente selbst (SUM-2) und weiterer, abhängiger
Komponenten oder darunterliegender Betriebssysteme (SUM-3)
- Auslieferung von Security Updates (SUM-4)
- Beschreibung der Defense-in-Depth-Strategie der Komponente (SG-1)
- Geforderte Maßnahmen des Defense-in-Depth-Konzepts an die operationelle Einsatzumgebung
(SG-2)
- Durchführung von Security Härtungen durch Komponenten-Konfiguration (SG-3), u.a. wie kann
die gehärtete Minimalkonfiguration (CR 7.7 least functionality) konfiguriert werden
- Durchführung einer sicheren Außerbetriebnahme/Entsorgung (SG-4)
- Durchführung eines sicheren Betriebs (SG-5)
- Durchführung des Account Managements (SG-6)

Durch den Prüfer MUSS bewertet werden, ob die bereitgestellte Anwender-Dokumentation die gefor-
derten Informationen angemessen und vollständig beinhaltet, und dass die Anwender-Dokumentation
widerspruchsfrei ist.

## 2.5 Konformitätsbewertung

Der Normteil IEC 62443-4-2 benennt Anforderungen (Component Requirements, CR), die zum Teil
bereits spezifisch definiert und zu anderen Teilen technologie-unabhängig beschrieben sind. Für eine
konkrete Komponente MÜSSEN die Anforderungen daher im Rahmen einer Testfallerstellung durch
den Prüfer konkretisiert werden.

Als Zwischenschritt werden Akzeptanzkriterien definiert, die im Rahmen der Testfallerstellung als
Testerwartung aufgegriffen werden. Das vorliegende Prüfschema leitet aus den Anforderungen der
Norm die Akzeptanzkriterien ab und benennt falls möglich auch Fälle für eine Nicht-Akzeptanz.

Die Akzeptanzkriterien können im Gegensatz zur Norm technologisch präzisiert werden, d.h. es ist
möglich, aktuell empfohlene Technologien konkret zu benennen.

Das Vorgehensmodell zur Überführung der Anforderungen zu Testfällen läuft entsprechend folgender
Hierarchie ab, der Schritt 3 ist in der Prüfdokumentation zu benennen:

1. Anforderungen des Normteils (CR der IEC 62443-4-2, sortiert nach FR)
2. Akzeptanzkriterien (dieses Prüfschemas, Anhang C)
3. Testfälle (Komponenten-spezifisch)

Zu jeder Anforderung der Norm MUSS mindestens ein Testfall referenziert werden. In vielen Fällen
SOLLTEN allerdings mehrere Tests zugeordnet werden, da sich Anforderungen auf mehrere Schnitt-
stellen oder Komponenten-Funktionen beziehen können.

Ein Testfall MUSS mindestens mit folgenden Eigenschaften beschrieben werden:

- Testbeschreibung mit Testerwartung, Testvorbereitung und Testschritten
- Testergebnis
- Bewertung (pass/fail)


Die Testerwartung beschreibt das anzunehmende Testergebnis, welches bei korrektem Verhalten der
Komponente auftritt. Die Testerwartung MUSS sich aus dem intendierten Verhalten der Komponente
und den Akzeptanzkriterien ergeben. Das Testergebnis ist das effektiv, festgestellte Verhalten der
getesteten Komponente entsprechend der durchgeführten Testschritte. Die Wahl der technischen
Implementierung MUSS angemessen zur gewählten SL-Stufe (im Sinne der Resistenz) sein, dies ist
über die Design-Dokumentation darzustellen, siehe Prüfpunkt Dokumentation (Design) in Kapitel 2.3.
Im Rahmen der Konformitätsbewertung MUSS geprüft werden, ob die gewählte technische Implemen-
tierung korrekt umgesetzt wurde. Die Testbeschreibung MUSS Details der technischen Implementie-
rung ausreichend reflektieren. Die abschließende Beurteilung, ob die technische Implementierung der
geforderten Stufe entspricht, findet final im Prüfschritt 5 Schwachstellenanalyse statt.

Falls das Testergebnis der Testerwartung entspricht, fällt die Bewertung entsprechend positiv aus
(pass). Falls das Testergebnis abweicht, fällt die Bewertung negativ aus (fail).

Falls für eine CR kein Testfall spezifiziert werden kann, falls bspw. ein Aspekt der Implementierung
nicht über eine externe Schnittstelle angesprochen werden kann, MUSS in diesen Fällen ein alternati-
ver Nachweis der korrekten Umsetzung erbracht werden. Hierzu KANN ein Review der zugehörigen
Design-Dokumentation mit Fokus auf das jeweilige CR unter Beachtung der Akzeptanzkriterien
durchgeführt werden. Die Detailtiefe der Design-Dokumentation MUSS entsprecht detailliert sein. Es
MUSS ein begründetes Votum des Prüfers vorliegen, der die Einhaltung der Akzeptanzkriterien bestä-
tigt.

Im Nachfolgenden wird anhand eines Beispiels mit Bezug zu CR 3.1 Communication Integrity das
zuvor beschriebene Vorgehensmodell veranschaulicht:

```
Ebene Konkretisierung im Beispiel
1 IEC 62443-4-2 CR 3.1: Communica-
tion Integrity
```
```
The component shall provide the capability to
protect integrity of transmitted information.
2 Prüfschema Akzeptanzkriterien Accept:
```
- capability to protect integrity of transmitted
information
- use of CRC (protection against casual or coin-
cidental manipulation)
- use of standardized cryptographic protocol
- use of recommended protocols (e.g. BSI TR-
02102), see CR4.
3 Komponenten-
spezifisch,
Prüfdokumentati-
on

```
Testfälle für ange-
nommene Kommuni-
kations-protokolle
HTTPS und FTP mit
einer fiktiven Kompo-
nente
```
```
Test description: Connections for 1) Test HTTPS
against recommended protocols, 2) Test FTP
```
```
Test expectation: No manipulation due to man-
in-the-middle attack is successful.
```
```
Test conditions: ARP spoofing for diverting local
network traffic to man-in-the-middle attacker.
```
```
Test steps:
a. Establish connection
b. Manipulate network packets
c. Observe if data is still transmitted, re-
ceived and processed
```
```
Test results:
```
1. HTTPS: manipulation is not possible,
but analyse of available cipher suites showed
not recommended ciphers were active (not ac-
cepted)
2. FTP → Manipulation is possible (not
accepted)
Assessment: if all cases are accepted → pass,
otherwise → fail; in this example all cases were
not accepted therefore the test failed

```
Tabelle 4
```

## 2.6 Schwachstellenanalyse

Zielsetzung der Schwachstellenanalyse ist es, festzustellen, ob die Komponente keine bekannten und
ausnutzbaren Schwachstellen beinhaltet. Zudem soll betrachtet werden, ob Security Eigenschaften
über Mechanismen implementiert wurden, welche eine ausreichende Resistenz gegenüber einem
angenommenen Angreifertyp (definiert über die SL-Stufe) bieten. Eine ausreichende Resistenz liegt
vor, wenn nur Angriffe skizziert werden können, welche oberhalb der behaupteten Resistenz zu finden
sind. Die dazu genutzte Bewertungsmethodik wird im Folgenden dargestellt.

Die Identifizierung von Schwachstellen KANN über verschiedene Phasen der Komponentenentwick-
lung integriert werden. Folgende Praktiken der IEC 62443-4-1 können hierzu genutzt werden:

- Threat model (SR-2)
- Threat mitigation testing (SVV-2)
- Vulnerability testing (SVV-3)
- Penetration testing (SVV-4)

Ein Prüfer MUSS entsprechend der jeweiligen Prüfungsrolle (Erst-, Zweit- oder Drittpartei) die not-
wendige Unabhängigkeit in der Durchführung und Bewertung der jeweiligen Ergebnisse einnehmen
(SVV-5).

Zudem KANN der zuvor beschriebene Prüfschritt „Konformitätsbewertung“ genutzt werden, um Indi-
zien für potentielle Schwachstellen zu finden. In der Analyse werden zudem alle orthogonal zu den
Anforderungen (CR) liegenden Bedrohungen betrachtet, unter anderem die folgenden:

- Schwachstellen in 3rd-Party-Software
- Schwachstellen in Betriebssystem
- Manipulation der Hardware-Firmware bzw. des BIOS
- fehlende Integritätssicherung von Datenexporten

Unabhängig von Phase und Methode MUSS das Ziel erreicht werden, dass alle bekannten und aus-
nutzbaren Schwachstellen identifiziert und zu bewertet werden.

Die Bewertung der Schwachstellen MUSS zu der Aussage führen, dass zum Zeitpunkt des Abschlus-
ses der Prüfung keine Schwachstellen bekannt sind, die mit dem angenommenen Angreifertyp erfolg-
reich ausnutzbar sind.

Nach der durchgeführten Analyse liegt eine Liste von identifizierten Schwachstellen vor, welche dann
im Rahmen einer Schwachstellenbewertung hinsichtlich Relevanz und Kritikalität für die Komponente
eingestuft werden müssen. Hierzu ist insbesondere der zugrundeliegende Verwendungszweck zu
berücksichtigen.

Bei der Bewertung MUSS die Definition des Angreifertyps beachtet werden. Der Angreifertyp wird in
der IEC 62443 über die SL-Stufe definiert. Beispielsweise definiert SL-3 einen Angreifer mit mittlerem
Angriffspotential. Eine Komponente für die behauptet wird, SL-3 zu entsprechen, muss resistent ge-
genüber einem solchen Angreifer sein.

Hierzu wird ein Bewertungsmodell benötigt, welches alle relevanten Faktoren für einen Angriff berück-
sichtigt. Das vorliegende Prüfschema gibt das Bewertungsmodell nicht vor.

Das genutzte Bewertungsmodell MUSS die nachfolgend benannten Eigenschaften erfüllen. In Anhang
D des vorliegenden Prüfschemas wird ein Bewertungsmodell auf Basis der [CEM] Methodik definiert
und erläutert.

Bei der Bewertung MUSS nicht nur die einzelne Schwachstelle zugrunde gelegt werden, sondern es
MUSS der gesamte Angriffspfad skizziert werden. Hiermit wird der Bezug zum Verwendungszweck
hergestellt. Ein Angriff KANN dabei durchaus einen noch nicht praktischen aber theoretisch skizzier-
baren Teilschritt beinhalten, die Fachexperten (Prüfer) müssen dabei argumentieren können, dass
dieser Schritt zukünftig realistisch ausführbar werden wird.

Die gewählte Bewertungsmethodik MUSS sicherstellen, dass ein skizzierter Angriff mit Angriffspfad
eindeutig oberhalb der Schwelle einer Resistenzstufe, also oberhalb SL-1 bis SL-3 , liegen muss. Dies


KANN durch die Auswahl einer Quantifizierung oder durch Kategorien erfolgen. Es SOLLTE hierfür
auf standardisierte Verfahren zurückgegriffen werden, um eine Vergleichbarkeit der Prüfungsaussage
zu unterstützen.

Für die inhaltliche Bewertung der Angriffspfade SOLLTE auch die Design-Dokumentation herangezo-
gen werden. Für die Bewertung möglicher Gegenmaßnahmen SOLLTE die Sicherheitsarchitektur
betrachtet werden (SD-2).

Folgende Liste an Bewertungsaspekten MUSS in der gewählten Bewertungsmethodik eines komplet-
ten Angriffs zumindest indirekt genutzt werden:

- Zeitbedarf (sowohl zur Entwicklung des Angriffs sowie zur Durchführung)
- Expertise
- Wissen über die Komponente (z. B. öffentlich zugänglich oder nur im Entwicklungsteam)
- Möglichkeit zur Ausnutzung (window of opportunity)
- Ausstattung / Equipment des Angreifers

Ein Beispiel zur Anwendung auf Basis der vorgeschlagenen [CEM] Methodik findet sich zudem in
Anhang D.

Optional kann zusätzlich auch noch eine Bewertung gefundener Schwachstellen nach CVSS durchge-
führt werden. Diese Betrachtung beachtet allerdings nicht den vollständigen Angriffspfad im oben ge-
nannten Sinne und nicht den Verwendungszweck der Komponente und bietet damit nur eine Einstu-
fung einer vorgefundenen Schwachstelle. Diese Bewertung kann aber wiederum hilfreich sein, identi-
fizierte Schwachstellen mit einer Kritikalität für den weiteren Entwicklungsprozess der Komponente zu
versehen. Ein Prüfer KANN diese Information optional angeben. CVSS ist eine Metrik zur Bewertung
der Kritikalität gefundener Schwachstellen.


## 3 Prüfungsablauf

## 3.1 Konformitätsbewertung

Eine Konformitätsbewertung im Rahmen einer Zertifizierung MUSS von spezialisierten Prüfstellen mit
Fachkompetenz für IT-Sicherheit durchgeführt werden. Die Prüfstelle sollte die eigenen Prüfverfahren
basierend auf die DIN EN ISO/IEC 17025 ausrichten. Dies entspricht den [DAkkS] Akkreditierungsan-
forderungen für die IEC 62443. Die Tätigkeit von Inspektionsstellen im Kontext der IEC 62443 kann
aufgrund der vorhandenen Expertise nur auf nachrangige Prüfungen bezogen werden, wie beispiels-
weise der Prüfung, ob eine Komponente mit definierten technischen Fähigkeiten in einer konkreten
Anlage die gesetzten Anforderungen erfüllt.

Die Qualifizierung der eingesetzten Prüfer MUSS sich bezogen auf die vorhandene Fachkompetenz
am gewählten SL-Level (im Sinne Angriffsresistenz) orientieren.

Die Unabhängigkeit der eingesetzten Prüfer MUSS den Anforderungen der [IEC62442-4-1] entspre-
chen (SVV-5: Independence of testers).

Anforderungen an Dokumente, wie u.a. Antragsdokumente, Formulare, SOLLTEN von Zertifizierungs-
schemen ausgearbeitet werden. Die inhaltlichen Anforderungen an die Dokumente des Herstellers,
welche für dieses Prüfschema benötigt werden sind in Anhang A "Komponentenspezifikation" ange-
geben.

In diesem Dokument werden explizit nur vollständige Akzeptanzkriterien für die Prüfungsdurchführung
angegeben. Gegebenenfalls KÖNNEN im Rahmen einer Konformitätsbewertung auch Feststellungen
wie "nicht anwendbar" (not applicable) zugelassen werden, dies liegt allerdings außerhalb des Fokus
dieses Prüfschemas. Beispielsweise KÖNNEN bei einem angenommenen Bedrohungsszenario mit
nur logischen Angriffen, physische Security Eigenschaften eventuell ausgeschlossen werden. In die-
sem Dokument wird die vollständige technische Prüfung adressiert.

Das Ergebnis einer positiven Konformitätsbewertung ist die Bestätigung der Fähigkeit einer Kompo-
nente, also des SL-C.

## 3.2 Zertifizierung

Für den Fall einer Zertifizierung (außerhalb IECEE) nach dem Normteil IEC 62443-4-2 SOLLTE das
vorliegende Prüfschema herangezogen und eingebunden werden.

(geplant) Für den Fall einer IECEE-Zertifizierung MUSS das vorliegende Prüfschema verpflichtend

angewandt werden.

Im Rahmen von Zertifizierungen MUSS die Fachkompetenz der Prüfer entsprechend der Anforderun-

gen der ISO/IEC 17025 nachgewiesen werden.

## 3.3 Andere Prüfverfahren

Das Prüfschema KANN auch für andere Prüfverfahren genutzt werden, wie:

- technische Assessments in Lieferanten-Auftragnehmer-Beziehungen (Zweitparteienbewertung)
- interne Prüfung der technischen Fähigkeiten und Resistenz der eigenen Komponente durch
eine organisationseigene Prüfabteilung (Erstparteienbewertung)

## 3.4 Durchführung der Prüfung

Vor der Durchführung der Prüfung SOLLTE ein Zeitplan erstellt werden, dieser sollte zum einen die
Abgabetermine der Prüfgegenstände sowie zum anderen die Zeiträume und Fertigstellungstermine
der Prüfschritte aus Kapitel 2 beinhalten.

Des Weiteren MUSS die Fachkompetenz der an der Prüfung beteiligten Prüfexperten nachgewiesen
werden. Dies MUSS im Vorfeld einer Prüfung erfolgen.


## 4 Anhang A (normativ) - Komponentenspezifikation

## 4.1 Vorbemerkung

Nachfolgend werden die inhaltlichen Anforderungen an die Dokumente des Herstellers, welche für
dieses Prüfschema benötigt werden angegeben. Aus dem Secure Development Process (nach Norm-
teil IEC 62443-4-1) abgeleitete Anforderungen werden nachfolgend markiert mit der Abkürzung des
jeweiligen Prozesses z. B. "(SM-6)". Die Prüfung dieser Angaben erfolgt im Schritt „Prüfung des Ver-
wendungszwecks“, siehe Kapitel 2.2.

## 4.2 Beschreibung der Komponente / Konformitätsbehauptung

- Kurzbeschreibung der Komponente
- Identifizierung der Komponente
- Bezeichnung der Komponente
- Version
- Identifizierungsmöglichkeit im Betrieb während der Installation und bei einem Update
- Integritätsnachweis der Komponente, primär Software (SM-6)
- Komponentenkategorie
    - entsprechend IEC 62443-4-2: Software Application, Embedded Component, Host Compo-
       nent oder Network Component
- Ausgeschlossener Produktumfang der Komponente
- Funktionalitäten der Komponente, die nicht betrachtet werden
    - standardmäßig deaktiviert
    - nur für Sonderfälle aktiviert und dann nicht im Fokus der Konformitätsbewertung
- Deklaration der Sicherheitsanforderungen
    - über eine SL-Stufe: SL-1, SL-2, SL-3 oder SL-
oder
    - über eine Auflistung einzelner Anforderungen, mit Angabe möglicher ergänzter Anforderun-
       gen (requirement enhancements)
- Angabe zum betrachteten Angreifertyp (Resistenzstufe)
    - über eine SL-Stufe: SL-1, SL-2, SL-3 oder SL-4 (analog zur Konformitätsbehauptung oder
       abweichend, in der Regel nur höher)
oder
    - über eine Beschreibung des Angreifers (basierend auf IEC 62443-Definition)

## 4.3 Verwendungszweck

- Verwendungszweck (intended use) (SR-1)
- Anwendungsfälle
- Bedrohungsmodell (SR-2)
- Einsatzumgebung (zwingende und optionale)
- Sicherheitsfunktionalität (SR-3, SR-4)
- Mechanismen zur Umsetzung der Security Eigenschaften
- Information ob PKI-Techniken unterstützt werden

## 4.4 Dokumentation

Anwender-Dokumentation:

- je nach Verwendungszweck Informationen für sicheren Betrieb u.a. in einer
    - Endkunden-Dokumentation
    - Integrator-Dokumentation
- zwingende inhaltliche Forderungen
    - Quelle und Durchführung von Updates der Komponente und darunterliegender Komponen-
       ten/Betriebssysteme (SUM-4)
    - Informationen zum Update-Umfang (SUM-2)
    - Informationen zu Abhängigkeiten bei Updates (SUM-3)
    - Kontaktstelle für Sicherheitsprobleme (DM-1)
    - Defense-in-Depth-Maßnahmen der Komponente (SG-1)


- Defense-in-Depth-Maßnahmen der operationellen Einsatzumgebung (SG-2)
- Informationen für Sicherheitshärtung (SG-3)
- Informationen zur sicheren Außerbetriebnahme (SG-4)
- Informationen zum sicheren Betrieb (SG-5)
- Informationen zum Account Management (SG-6)

Design-Dokumentation:

- für SL-1 bis SL-
    o Beschreibung aller externen Schnittstellen,
       ▪ alle kabelgebundenen und funkbasierten Kommunikationsschnittstellen,
          elektrische Schnittstellen und Debugschnittstellen mit Beschreibung der
          Funktionalität und Konfigurationsmöglichkeiten, z. B. eine Schnittstelle zur
          Gerätekonfiguration mit technischer Beschreibung des Protokolls (oder Pro-
          tokollstacks) und aller Konfigrationsparameter, sowie Kommunikations-
          matrix (Quelle, Ziel und Zweck)
    o Informationen zu eingesetzten krypto-graphischen Algorithmen, dabei auch Verweis
       auf empfehlende Stelle und Begründung für die Wahl des Algo-rithmus
    o Informationen zu eingesetzter Software mit 3rd-Party-Libraries und exakter Version
    o Informationen zum Schutz der Integrität der Komponente, z. B. Firmware-Datei-
       Integrität (Begriff aus [IEC62442-4-1]: product integrity verification mechanisms)
- für SL-
    o Nennung von Subsystemen und Modulen mit Funktionalität und externer Konfigura-
       tionsmöglichkeiten
    o Beschreibung der Sicherheitsarchitektur
    o Auflistung aller verwendeten System-Benutzer der Komponente


## 5 Anhang B (normativ) - Anforderungen an Prüfdokumentation

## 5.1 Vorbemerkung

Nachfolgend werden die inhaltlichen Anforderungen an die Prüfdokumentation für Prüfungen nach
dem hier beschriebenen Schema aufgeführt. Durch ähnliche Dokumentation wird ein Vergleich von
Prüf-Ergebnissen zwischen Prüfern sowie zwischen geprüften Komponenten erst möglich.

Dabei wird nur der grobe Rahmen an den Inhalt vorgegeben, die Inhalte SOLLTEN dann in der
Prüfdokumentation der Prüfer wieder erscheinen. Die exakte inhaltliche Struktur einzelner Dokumente
wird an dieser Stelle nicht vorgegeben.

## 5.2 Übersicht zur Prüfung

- Prüfung der Komponentenspezifikation auf Vollständigkeit und Korrektheit
- Konfiguration(en) der zu prüfenden Komponente
- Aufbau der Prüfumgebung (test setup)
- Nicht geprüfte Funktionalitäten (Abgrenzung)

## 5.3 Bewertung der Design-Dokumentation

- Ergebnisse der Design-Dokumentations-Prüfung

## 5.4 Prüfung der Anwender-Dokumentation

- Ergebnisse der Anwender-Dokumentations-Prüfung

## 5.5 Testergebnisse der Konformitätsbewertung

- Detaillierte Testergebnisse
- Übersicht/Zusammenfassung der Testergebnisse

## 5.6 Schwachstellenanalyse

- Identifizierte Schwachstellen
- Bewertung der Schwachstellen
- Beschreibung der verbleibenden Schwachstellen

## 5.7 Gesamtbewertung

- Übersicht der Prüfergebnisse
- Votum der Prüfstelle, d.h. Zusammenfassung über die Einhaltung aller Anforderungen
- Empfehlungen der Prüfstelle (u.a. bezogen auf Schwachstellen)


## 6 Anhang C (normativ) - Akzeptanzkriterien

## 6.1 Vorbemerkung

Die Anforderungen werden nachfolgend im ursprünglichen englischen Text angegeben, da geplant ist
das vorliegende Prüfschema zukünftig zu übersetzen und international einzubringen, siehe Kapitel 3.
"Zertifizierung".

Die Akzeptanzkriterien sind primär als "accept" positiv formuliert. In manchen Fällen ist ein expliziter
Ausschluss einer Umsetzung zur besseren Hervorhebung allerdings sinnvoll, diese Kriterien sind un-
terhalb von "not accept" aufgeführt.

## 6.2 FR-1: Identification and Authentication Control

**ID Requirement SL-1 SL-2 SL-**

**CR 1.1** Human user identifi-
cation and authenti-
cation

```
Accept:
```
- authentication of
human users on all
interfaces with hu-
man access

```
Accept:
```
- unique authentica-
tion for every human
user on all interfac-
es, for example with
username and
password

```
Accept:
```
- capability to em-
ploy multifactor au-
thentication for all
human
user access to the
component

**CR 1.2** Software process
and
device identification
and authentication

```
no requirements Accept:
```
- the component
identifies itself and
authenticates to any
other component
using passwords,
tokens or location
(physical or logical)
- authentication
mechanism is capa-
ble to prevent at-
tacks like man-in-
the-middle or mes-
sage spoofing

```
Accept:
```
- uniquely identify
and authenticate
itself to any other
component

```
Not accept:
```
- unencrypted au-
thentication and
identification
- no recommended
encryption (e.g. BSI
TR-02102)


**CR 1.3** Account manage-
ment

```
Not relevant if only
one fixed administra-
tive account is im-
plemented on the
component.
```
```
Accept:
```
- capability to inte-
grate into a higher
level account man-
agement system
- account manage-
ment capability (only
by authorized users,
including adding,
activating, modifying,
disabling and remov-
ing accounts)
- the core functionali-
ty of the component
is not affected by an
availability problem
of the higher-level
system

```
Not accept:
```
- no capability to
enable/disable ac-
counts

```
no additional requi-
rements
```
(^)
no additional requi-
rements
**CR 1.4** Identifier manage-
ment
Not relevant if only
one fixed administra-
tive account is im-
plemented on the
component.
Accept:

- capability to inte-
grate into a system
that supports man-
agement of identifi-
ers
- provide the capabil-
ity to support the
management of
identifiers by user,
group, role or control
system interface

```
no additional requi-
rements
```
(^)
no additional requi-
rements


**CR 1.5** Authenticator ma-
nagement

```
Accept:
```
- support of (initial)
authenticator content
(tokens, symmetric
keys, private keys,
biometrics, pass-
words, key cards)
- enforced change of
default authentica-
tors after installation
or recognition of
unchanged default
authenticator (com-
bined with warning
message)
- periodic change of
authenticators
- protection of unau-
thorized disclosure
or modification of
authenticators (when
stored, used, trans-
mitted)

```
Not accept:
```
- transmission of
cleartext passwords

```
no additional requi-
rements
```
```
Accept:
```
- authenticators are
protected via hard-
ware mechanisms
(e.g. Password pro-
tected memory, OTP
memory, hardware
data integrity
checks, and device
security boot
mechanism)

```
Not accept:
```
- no hardware pro-
tection mechanism

**CR 1.6** Wireless access
management

```
Network Component
Requirement
```
```
Accept:
```
- capability to identify
and authenticate all
users (human, soft-
ware processes and
devices) engaged in
wireless communica-
tion

```
Accept:
```
- capability to
uniquely identify and
authenticate all us-
ers (human, soft-
ware processes and
devices) engaged in
wireless communica-
tion

```
no additional requi-
rements
```

**CR 1.7** Strength of pass-
word-based authen-
tication

```
Accept:
```
- enforce configura-
ble password
strength based on
minimum length and
variety of character
types
- configurable pass-
word strength ac-
cording to interna-
tionally recognized
and proven pass-
word guidelines, e.g.
NIST SP800- 63 -2 ,
BSI TR-02102
- external authenti-
cation

```
no additional re-
quirements
```
```
Accept:
```
- prevent any human
user account from
reusing a password
for a configurable
number of genera-
tions
- enforce password
minimum and maxi-
mum lifetime re-
strictions for human
users
- external authenti-
cation

```
Not accept:
```
- no configurable
options for reusing
passwords, i.e.
password reuse
cannot be prevented
- no minimum and
maximum lifetime
restrictions for hu-
man user passwords
**CR 1.8** Public key infra-
structure certificates

```
no requirements Relevant if PKI or
public keys are in
use.
```
```
Accept:
```
- interaction and
operation within the
scope of the PKI
according to 62443-
3-3 SR 1.8 ("operate
a PKI according to
commonly accepted
best practices (see
IETF RFC 3647) or
obtain a public key
certificate from an
existing PKI")

```
no additional requi-
rements
```

**CR 1.9** Strength of public
key
authentication

```
no requirements Relevant if PKI or
public keys are in
use.
```
```
Accept:
```
- provide directly or
integrate into a sys-
tem that provides,
the capability to:
- validating signature
of a given certificate
- validate certificate
chain
- in case of self-
signed certificates,
leaf certificates
should be deployed
to all hosts that
communicate with
the subject to which
the certificate is
issued
- validate certifica-
tion revocations
status
- establish user
(software, human or
device) control of the
corresponding pri-
vate key
- map authenticated
identity to a user by
checking either the
subject name, com-
mon name or distin-
guished name
against the destina-
tion
- algorithms and
keys comply with CR
4.3

```
Accept:
```
- protect the relevant
private keys via
hardware mecha-
nisms (e.g. smart
cards)

```
Not accept:
```
- no additional pro-
tection mechanisms

**CR 1.10** Authenticator feed-
back

```
Accept:
```
- sensitive data con-
cerning the authenti-
cation process is
obscured

```
Not accept:
```
- feedback not dis-
tinguish between
wrong password or
wrong username
- no timing differ-
ences for error and
no error response
- displaying pass-
word, wireless key,
SSH token in input
field instead of aster-
isks
- usage of WEP

```
no additional requi-
rements
```
(^)
no additional requi-
rements


**CR 1.11** Unsuccessful login
attempts

```
Accept:
```
- capability to en-
force, for each user
type (human, soft-
ware, device), a
configurable limit of
consecutive invalid
access attempts
performed in a con-
figurable time period
- capability to deny
access for a speci-
fied period of time or
until unlocked, when
limit reached

```
no additional requi-
rements
```
(^)
no additional requi-
rements
**CR 1.12** System use notifica-
tion
Accept:

- capability to display
a system use notifi-
cation message
before authenticat-
ing to the local user
interface
- capability as an
authorized user to
configure the mes-
sage

```
no additional requi-
rements
```
```
no additional requi-
rements
```
**CR 1.13** Access via untrusted
networks

```
Network Component
Requirement
```
```
Accept:
```
- monitor and control
all methods of ac-
cess to the network
device via untrusted
networks (dial-up,
office network, re-
mote access)

```
Not accept:
```
- access to the net-
work device cannot
be monitored / con-
trolled
- untrusted network
is missing in moni-
toring or cannot be

```
no additional requi-
rements
```
```
Accept:
```
- deny access re-
quests via untrusted
networks unless
approved by an as-
signed role
- for each connection
a device-internal or
external physical key
is used to authorize
the connection

**CR 1.14** Strength of symmet-
ric key-based au-
thentication

```
no requirements Relevant if symmet-
ric key authentica-
tion (e.g. pre-shared-
secrets) is used.
```
```
Accept:
```
- validate shared
secret to establish
the mutual trust
- authentication is
valid as long as
shared secret re-
mains a secret, i.e.
secrets are stored
securely
- restrict access to
the shared secret

```
Accept:
```
- control system
provides the capabil-
ity to protect the
relevant shared keys
via hardware mech-
anisms


- ensure that the
algorithms and keys
used comply with
CR 4.3 (Use of cryp-
tography)

## 6.3 FR-2: Use Control

**ID Requirement SL-1 SL-2 SL-3**

### CR

### 2.1

```
Authorization en-
forcement
```
```
Accept:
```
- authorization mecha-
nism is enforced on all
interfaces which can
accessed by human
users based on their
responsibilities, as dic-
tated by the least privi-
lege principle

```
Not accept:
```
- interface without au-
thorization mechanism
(e.g. HMI, web inter-
face, console)

```
Accept:
```
- authorization mecha-
nism on all interfaces
which are exposed,
independent of user
type (additionally tech-
nical users)
- management of roles
and permissions (defini-
tion and modification,
only by privileged role)
- management of users
mapped to roles

```
Not accept:
```
- interface without au-
thorization mechanism
(e.g. HMI, web inter-
face, console)
- user with access to
HMI can log in via con-
sole or SSH

```
Accept:
```
- capability to
configure a time
or sequence of
events during
supervisor over-
ride without
closing the cur-
rent session
Not accept:
- no possibility
to configure
supervisor over-
ride

### CR

### 2.2

```
Wireless use control Accept:
```
- capability to deny
critical action via wire-
less connection (i.e.
only use wired)
- monitor devices

```
no additional require-
ments
```
(^)
no additional
requirements

### CR

### 2.3

```
Use control for port-
able and mobile
devices
```
```
no requirements no additional require-
ments
```
```
no additional
requirements
```

### CR

### 2.4

```
Mobile code Only relevant if compo-
nents allows to execute
mobile code.
```
```
Accept:
```
- capability to enforce a
security policy for the
usage of mobile code
- control execution of
mobile code
- define which users are
allowed to transfer mo-
bile code to/from device

```
Accept:
```
- provides the capability
to verify the integrity of
the mobile code before
execution is allowed

```
Not accept:
```
- execution is allowed
without verifying the
integrity of the mobile
code

(^)
no additional
requirements
Embedded Component
Requirements

- only upload to device
- perform integrity
checks on the code
prior to code execution
- perform authenticity
checks to verify origin
prior to code execution

### CR

### 2.5

```
Session lock Accept:
```
- for HMI (local or via
network):
- Session Lock after
configurable time period
of inactivity
- option to explicitly
disable Session Lock
(e.g. in control room
scenarios)
- manual session lock
- access to session only
possible using authenti-
cation procedures
- comply with session
locks requested by the
underlying infrastruc-
ture (operating system,
control system)

```
no additional require-
ments
```
(^)
no additional
requirements

### CR

### 2.6

```
Remote session
termination
```
```
no requirements Remote session is in-
terpreted as logical net-
work session.
```
```
Accept:
```
- remote session termi-
nated by user who initi-
ated session (minimum
requirement)
- remote session manu-
ally terminated by a
local authority/user

```
no additional
requirements
```

- remote session termi-
nated after configurable
inactive period of time

### CR

### 2.7

```
Concurrent session
control
```
```
no requirements No requirements Accept:
```
- ability to limit
the number of
session per
interface for any
user

```
Not accept:
```
- Sessions can-
not be limited
per interface
- Sessions can-
not be limited
per user
**CR
2.8**

```
Auditable events Accept:
```
- audit records for fol-
lowing security relevant
cases are generated:
access control, request
errors, control system
events, backup and
restore events, configu-
ration changes, audit
log events
- audit records include
at least the following
information: timestamp,
source, category, type,
event ID, event result

```
no additional require-
ments
```
```
no additional
requirements
```
### CR

### 2.9

```
Audit storage capa-
city
```
```
Accept:
```
- capability to allocate
audit record storage

```
Not accept:
```
- failure of audit func-
tionality when a thresh-
old is reached or the
storage capacity is ex-
ceeded

```
no additional require-
ments
```
```
Accept:
```
- a warning
message in-
forms when a
configurable
threshold is
reached

```
Not accept:
```
- no warning is
produced if the
used storage
capacity reach-
es the threshold
- the hreshold
not configurable

**CR
2.10**

```
Response to audit
processing failures
```
```
Accept:
```
- no loss of essential
services or functions
during an audit pro-
cessing failure
- optional support of

```
no additional require-
ments
```
(^)
no additional
requirements


```
appropriate actions in
response to an audit
processing failure
```
- e.g. alerting personnel
could be an appropriate
action

### CR

### 2.11

```
Timestamps Accept:
```
- ability to generate
timestamps for audit
records (see CR 2.8)
- timestamps include
date and time

```
Accept:
```
- synchronized
timestamps
- e.g. external source
like NTP server

(^)
no additional
requirements

### CR

### 2.12

```
Non-repudiation Relevant if HMI is used.
```
```
Accept:
```
- possibility to deter-
mine which human user
took a particular action
- logging user id in audit
trail

```
no additional require-
ments
```
```
no additional
requirements
```
### CR

### 2.13

```
Use of physical di-
agnostic and test
interfaces
```
```
No requirements Exempt are software
applications
```
```
In case factory diagnos-
tic and test interfaces
use network communi-
cation, the interfaces
are to be subjected to
all of the requirements
of this standard.
```
```
Accept:
```
- prevent unauthorized
use of the physical fac-
tory diagnostic and test
interfaces, e.g. JTAG
- disabled diagnostic
and test interface based
on removed external
connectors

```
Not accept:
```
- any diagnostic and test
interface without author-
ization

```
Accept:
```
- provides active
monitoring of
the device's
diagnostic and
test interfaces
- generate log
entry when at-
tempts to ac-
cess these inter-
faces are de-
tected

```
Not accept:
```
- disabled diag-
nostic and test
interface based
on removed
external con-
nectors

```
Tabelle 7
```

## 6.4 FR-3: System Integrity

**ID Requirement SL-1 SL-2 SL-3**

**CR 3.1** Communication integrity Accept:

- capability to protect
integrity of transmit-
ted information
- use of CRC (protec-
tion against casual or
coincidental manipu-
lation)
- use of standardized
cryptographic proto-
col
- use of recommend-
ed protocols (e.g. BSI
TR-02102), see
CR4.3

```
Accept:
```
- capability to authen-
ticate information
during communica-
tion

```
Not accept:
```
- use of error detec-
tion codes, weak
hashing or weak sig-
nature functions
- authentication of
information is not
possible
- fallback to not rec-
ommended protocols

```
no additional
requirements
```
**CR 3.2** Protection from mali-
cious code

```
Software Application
Component
```
```
Accept:
```
- list at least one
compatible security
component which
implements the pro-
tection functionality
(user documentation
requirement)

```
no additional re-
quirements
```
```
no additional
requirements
```
```
Embedded Compo-
nent
```
```
Accept:
```
- capability to protect
from installation and
execution of unau-
thorized software
- environment is
allowed to provide
malicious code pro-
tection mechanism,
has to be required by
component intended
-use description (user
documentation re-
quirement)
- allowed detection
techniques: binary
integrity, attributes
monitoring, hashing,
signature techniques
- allowed prevention
techniques (e.g. re-
movable media con-
trol, sandbox
techniques, specific
computing platforms
mechanisms (e.g.
restricted firmware

```
no additional re-
quirements
```
```
no additional
requirements
```

```
update), No Execute
(NX) bit, data execu-
tion prevention
(DEP), address
space layout random-
ization (ASLR), stack
corruption detection.
mandatory access
controls)
```
```
Not accept:
```
- reference to IACS
capabilities which are
not implemented by
the component itself

```
Host Component
```
```
Accept:
```
- need to support the
use of malicious code
protection (design
documentation re-
quirement)

```
Accept:
```
- able to automatically
report version of the
malicious code pro-
tection which is actu-
ally in use

```
no additional
requirements
```
```
Network Component
```
```
Accept:
```
- provided by the
network device direct-
ly
- allowed to use com-
pensating control

```
no additional re-
quirements
```
```
no additional
requirements
```
**CR 3.3** Security functionality
verification

```
Accept:
```
- definition of (manu-
al) verification proce-
dures for verifying the
security functionality
- guidance on how to
test security function-
ality (documentation
requirement)
- documented side
effects if these verifi-
cation procedures are
running during normal
operation

```
Not accept:
```
- no possibility to test
security functionality,
e.g. no log message,
no notification

```
no additional requi-
rements
```
(^)
no additional
requirements


**CR 3.4** Software and informati-
on integrity

```
Accept:
```
- integrity check of
data at rest (e.g.
software, configura-
tion)
- capability to be inte-
grated into a system
that can perform or
support integrity
checks

```
Not accept:
```
- no recording of re-
sults of checks

```
Accept:
```
- authenticity check of
data at rest (e.g.
software, configura-
tion)

```
Accept:
```
- unauthorized
change is re-
ported to a
configurable
entity upon
discovery of the
attempt

**CR 3.5** Input validation

```
Note:
Not-accept-criteria give
guidance which
insufficient input
validation methods
are most relevant for
the SL levels to plan
test cases with
reasonable effort.
```
```
Accept:
```
- every input, that
directly impacts the
action of the applica-
tion or device is vali-
dated for syntax and
content

```
Not accept:
```
- out-of-range values
for a defined field
type
- invalid characters in
data fields
- missing or incom-
plete data and buffer
overflow

```
Not accept:
```
- SQL injection at-
tacks
- cross-site scripting
- commonly known
malformed packets

```
Not accept:
```
- malformed
packets as
commonly gen-
erated by pro-
tocol fuzzers

**CR 3.6** Deterministic output Applicable if device
directly controls a
process.

```
Accept:
```
- the deterministic
output needs to be
documented (docu-
mentation require-
ment)
- in case of failsafe,
allowed to demon-
strate by described
process

```
no additional requi-
rements
```
```
no additional
requirements
```
**CR 3.7** Error handling Accept:

- error conditions are
identified and han-
dled
- no unintended in-
formation is leaked
- no security relevant
information is visible

```
no additional requi-
rements
```
```
no additional
requirements
```

**CR 3.8** Session integrity no requirements Accept:

- use of mechanisms
to protect the integrity
of communication
sessions
- sessions are invali-
dated after termina-
tion
- sessions are invali-
dated after reboot
- use of unique ses-
sion IDs

```
Not accept:
```
- session hijacking
- man in the middle
attack
- insertion of false
information into a
session
- replay attacks

```
no additional
requirements
```
**CR 3.9** Protection of audit
information

```
no requirements Accept:
```
- protect audit infor-
mation and audit
tools (if present)
Not accept:
- unauthorized ac-
cess, modification or
deletion of audit in-
formation

```
no additional
requirements
```
**CR 3.10** Support for updates Accept:

- capability to be up-
dated and upgraded
once commissioned
- if component sup-
ports or executes
essential functions,
needs for mechanism
to support patching
and updating without
impacting the essen-
tial function

```
Accept:
```
- the authenticity and
integrity of any up-
date is validated prior
installation

```
no additional
requirements
```
**CR 3.11** Physical tamper re-
sistance and detection

```
no requirements Not relevant in case
of software applica-
tions.
```
```
Relevant if intended
use does not offer
physical protection of
component according
to threat modelling.
```
```
Accept:
```
- anti-tamper re-
sistance: specialized
materials to make
tampering difficult;
e.g.: hardened enclo-
sures, locks, encap-
sulation, security
screws
- detection mecha-

```
Accept:
```
- capability to
automatically
notify upon
discovery of an
attempt to
make an unau-
thorized physi-
cal access


```
nisms for unauthor-
ized physical access
into the device, e.g.
seal
```
**CR 3.12** Provisioning product
supplier roots of trust

```
no requirements Not relevant in case
of software applica-
tions.
```
```
Accept:
```
- provision of product
supplier keys and
roots of trust during
device manufacturing
- e.g. cryptographic
hashes or public key
used for verification

```
Fail:
```
- keys or root of trust
can be manipulated
or leaked

```
no additional
requirements
```
**CR 3.13** Provisioning asset
owner roots of trust

```
no requirements Not relevant in case
of software applica-
tions.
```
```
Relevant if CR 2.4
Mobile Code is se-
lected.
```
```
Accept:
```
- capability to provi-
sion asset owner
roots of trust
- protection of asset
owner roots of trust

```
Not accepted:
```
- export of root of
trust (private key)
- leakage of root of
trust security infor-
mation

```
no additional
requirements
```
**CR 3.14** Integrity of the boot
process

```
Not relevant in case
of software applica-
tions.
```
```
Accept:
```
- integrity verification
of boot process rele-
vant firmware, soft-
ware and configura-
tion data prior to the
use

```
Accept:
```
- authentication verifi-
cation of boot pro-
cess relevant firm-
ware, software and
configuration data
prior to the use
- use of product sup-
pliers roots of trust for
verification

```
no additional
requirements
```
```
Tabelle 8
```

## 6.5 FR-4: Data Confidentiality

**ID Requirement SL-1 SL-2 SL-3**

### CR

### 4.1

```
Information confidentia-
lity
```
```
Accept:
```
- capability to pro-
tect against unau-
thorized disclo-
sure of information
via **eavesdrop-
ping or casual
exposure**
- capability to pro-
tect the confiden-
tiality of infor-
mation at rest for
which explicit read
authorization is
supported
- protection of the
confidentiality of
information in
transit
- (wireless) use of
encryption

```
Not accept:
```
- outdated or dep-
recated encryption
protocols
- use of cleartext
protocols (e.g.
FTP)

```
Accept:
```
- capability to protect
against unauthorized
disclosure of infor-
mation caused by an
attacker actively
searching for vulnera-
bilities with **low re-
sources, generic
skills and low moti-
vation**

```
Accept:
```
- capability to pro-
tect against unau-
thorized disclosure
of information
caused by an at-
tacker actively
searching for vul-
nerabilities with
**moderate re-
sources, IACS
specific skills and
moderate motiva-
tion**

### CR

### 4.2

```
Information persistence no requirements Accept:
```
- capability to purge
component
- capability to erase all
information with explic-
it read authorization

```
Not accept:
```
- existence of data
after component was
decommissioned

```
Accept:
```
- capability to pro-
tect against unau-
thorized and unin-
tended information
transfer via volatile
shared memory
resources
- capability to verify
that the erasure of
information oc-
curred effectively
**CR
4.3**

```
Use of cryptography If cryptography is
required by CR
1.14, CR 3.1 and
CR 4.1.
```
```
Accept:
```
- use of standard-
ized cryptographic
protocol
- use of recom-
mended protocols
(e.g. BSI TR-
02102), see
CR4.3
- used according
to proven practic-

```
no additional require-
ments
```
(^)
no additional re-
quirements


```
es or documenta-
tion
```
```
Tabelle 9
```
## 6.6 FR-5: Restricted Data Flow

**ID Requirement SL-1 SL-2 SL-3**

**CR 5.1** Network segmentation Network Component
Requirement

```
Accept:
```
- support of network
segmentation, e.g.
multiple network
cards, VLANs
- network configura-
tion with routing and
router capability

```
no additional re-
quirements
```
```
no additional
requirements
```
```
Non-Network Com-
ponent Requirement
```
```
Not Accept:
```
- component opens or
requires network
connections that
make a network
segmentation non-
feasible or hard to
maintain


**CR 5.2** Zone boundary protection Network Component
Requirement

```
Accept:
```
- capability to monitor
and control commu-
nication at zone
boundaries to enforce
compartmentalization
defined in risk-based
zones and conduits
model

```
Not accept:
```
- demonstrate insuffi-
cient boundary pro-
tection

```
Accept:
```
- capability to deny
network traffic by
default
- allow network traffic
by exception

```
Accept:
```
- capability to
prevent any
communication
through the
control system
boundary (is-
land mode)
- provide the
capability to
prevent any
communication
through the
control system
boundary when
there is an
operational
failure of the
boundary pro-
tection mecha-
nisms (fail
close)

**CR 5.3** General purpose person-
to-person communication
restrictions

```
Accept:
```
- capability to prevent
general purpose,
person-to-person
messages from being
received from us-
ers/systems to the
control system (email,
all forms of social
media, message sys-
tems)
- e.g. filtering traffic
with packet filters or
application-level
gateways

```
Not accepted:
```
- no/insufficient traffic
inspection

```
no additional requi-
rements
```
```
no additional
requirements
```
```
Tabelle 10
```

## 6.7 FR-6: Timely Response To Events

**ID Requirement SL-1 SL-2 SL-3**

**CR 6.1** Audit log accessibility Accept:

- capability for au-
thorized humans or
tools to access audit
logs on a read only
basis
- web interface (au-
dit perspective)
- console tools (sep-
arate information
system for audit
access)

```
Not accepted:
```
- audit logs are ac-
cessible to unauthor-
ized users

```
no additional re-
quirements
```
```
Accept:
```
- programmatic ac-
cess to audit records
by either using an
application pro-
gramming interface
(API), or
- capability to send
the audit logs to a
centralized system

**CR 6.2** Continuous monitoring no requirements Accept:

- capability to pro-
vide an active inter-
face for continuous
monitoring, or
- capability to send
continuous monitor-
ing information to a
centralized system

```
no additional requi-
rements
```
```
Tabelle 11
```
## 6.8 FR-7: Resource Availability

**ID Requirement SL-1 SL-2 SL-3**

**CR 7.1** Denial of service protection Accept:

- capability to op-
erate in a degrad-
ed mode (essential
functions) during a
DoS event

```
Accept:
```
- Manage commu-
nication load from
application or de-
vice to mitigate
effects of DoS
events
- e.g. limit network
capacity of inter-
faces

```
no additional requi-
rements
```

**CR 7.2** Resource management Accept:

- capability to limit
the use of re-
sources by (active
running) security
functions to pre-
vent resource ex-
haustion
- e.g. software
process prioritiza-
tion, network traffic
rate limiting

```
no additional requi-
rements
```
(^)
no additional requi-
rements
**CR 7.3** Control system backup Accept:

- shall provide
backup abilities to
safeguard applica-
tion/device state
(user- and system-
level information)
- Backup Process
does not affect
normal operation

```
Not accept:
```
- no / insufficient
backup abilities
- normal operation
is affected by con-
trol system backup

```
Accept:
```
- capability to verify
the reliability of
backup mecha-
nism
- e.g. verify backup
data mechanism,
integrity of backed
up information is
validated prior to
restoring it

```
no additional re-
quirements
```
**CR 7.4** Control system recovery
and reconstitution

```
Accept:
```
- capability to re-
covery and recon-
stitute to a known
secure state after
disruption or failure
- system parame-
ters (either default
or configurable)
are set to secure
values
- security-critical
patches are rein-
stalled
- security-related
configuration set-
tings are re-
established
- system documen-
tation and operat-
ing procedures are
available
- components are
reinstalled and
configured with
established set-

```
no additional requi-
rements
```
(^)
no additional requi-
rements


```
tings
```
- recovery uses a
backup selected
explicitly by an
authorized person
or the recovery
uses an internal
authentic backup
source
**CR 7.5** Emergency power no requirements no additional requi-
rements

```
no additional requi-
rements
```
**CR 7.6** Network and security con-
figuration settings

```
Accept:
```
- network and se-
curity configura-
tions can be con-
figured (as de-
scribed in guide-
lines provided by
the control system
supplier)
- component pro-
vides an interface
to the deployed
network and secu-
rity configuration
settings

```
Not accept:
```
- missing related
guideline
- insufficient de-
scription of config-
urations

```
no additional requi-
rements
```
```
Accept:
```
- capability to gen-
erate a report list-
ing the currently
deployed security
settings in a ma-
chine-readable
format

**CR 7.7** Least functionality Accept:

- capability to re-
strict the use of
unnecessary func-
tions, ports, proto-
cols and/or ser-
vices (security-by-
configuration)
- functions beyond
a baseline configu-
ration should be
able to be deac-
tivated

```
no additional requi-
rements
```
```
no additional requi-
rements
```
**CR 7.8** Control system component
inventory

```
no requirements Accept:
```
- capability to sup-
port a control sys-
tem component
inventory
- e.g. vendor-
specific manage-
ment-system or
standard-based
inventory systems
(e.g. with SNMP
support)
- capable to moni-
tor device ID and
status

```
no additional requi-
rements
```

```
Tabelle 12
```
## 7 Anhang D (informativ) – Methoden zur Schwachstellenbewertung

## 7.1 Einführung

Der Prüfschritt der Schwachstellenanalyse bedingt die Bewertung von möglichen Angriffen hinsichtlich

der gewählten SL-Stufe (im Sinne Angriffsresistenz). Das zu nutzende Bewertungsmodell wird nicht im

vorliegenden Prüfschema fest vorgegeben. Die Anforderungen an das Bewertungsmodell sind in Kapi-

tel 2.6 zu finden.

Nachfolgend wird das Bewertungsmodell nach [CEM] Methodik eingeführt, dieses erfüllt alle definier-

ten Anforderungen an ein Bewertungsmodell für die Schwachstellenanalyse.

## 7.2 AVA/CEM Bewertung

Als Bewertungsmodell hat sich die „Vulnerability Assessment (AVA)“ Methodik aus der Common Eva-

luation Methodology [CEM] oder ISO/IEC 18045 [ISO18045] bewährt. Für die Nutzung im Zusammen-

hang mit der IEC 62443 muss eine adaptierte Variante genutzt werden, um die definierten SL-Stufen

nutzen zu können. Diese adaptierte Variante wird im Folgenden beschrieben.

Die Methode hat nicht das Ziel Schwachstellen oder Angriffe zu identifizieren. Die Methode dient nur

dazu skizzierbare Angriffspfade zu bewerten.

Um die Methodik auf die IEC 62443 anwenden zu können, müssen die SL-Stufen auf die nummeri-

schen Werte der [CEM] definiert werden. Dies erfolgt in der folgenden Tabelle:

```
SL-Stufe Schwelle für
ausreichende
Resistenz
```
```
Kommentar
```
```
SL-1 > 0 angenommenes Angriffspotential betrifft nur nicht gezielte
Angriffe; umgekehrt bedeutet dies, dass damit gefundene
Schwachstellen gegen eine explizite Anforderung (CR)
verstoßen müssen, um im Rahmen einer Prüfung nach
SL-1 bewertet zu werden
SL-2 > 4 geringes Angriffspotential bedeutet im Wesentlichen der
zeitliche Faktor ist ausschlaggebend, als Schwelle wird
hier weniger als 1 Monat Angriffszeit angenommen, zu-
sammen für Entwicklung und Durchführung, ein Monat
wird mit 4 Punkten bewertet, siehe [CEM] Anhang B
SL-3 > 14 das angenommene mittlere Angriffspotential ergibt eine
Mindestsumme von 14 Punkten, dies bedingt sich durch
eine Angriffszeit von zwei Monaten (7 Punkte), entweder
weitergehender Expertise (3 Punkte) oder Zugriff auf re-
striktive Daten (ebenfalls 3 Punkte) sowie spezialisiertes
Equipment (4 Punkte), hiermit ergeben sich in Summe 14
Punkte, siehe [CEM] Anhang B
SL-4 - nicht relevant für Prüfschema in dieser Version
```
```
Tabelle 5
```
Folgende Eigenschaften werden zur Bewertung eines kompletten Angriffs zugrunde gelegt:

- Zeitbedarf (sowohl zur Entwicklung des Angriffs sowie zur Durchführung)
- Expertise
- Wissen über die Komponente
- Möglichkeit (window of opportunity)
- Ausstattung


Die Spalte "Schwelle für ausreichende Resistenz" ist so zu lesen, dass ein skizzierbarer Angriff ober-
halb dieser Schwelle liegen MUSS, damit die Komponente in entsprechender SL-Stufe als ausrei-
chend resistent bezeichnet werden kann.

Der Einstufung jeder einzelnen Bewertungseigenschaft werden Punkte zugeordnet, welche dann auf-

summiert und mit einem Zielniveau abgeglichen werden. Die Definition der Punkte und die detaillierte

Beschreibung finden sich im Anhang B der [CEM].

## 7.3 Beispiel einer Bewertung nach AVA/CEM

Als Beispiel sei folgendes Szenario angenommen. Die betrachtete Komponenten-Schnittstelle ist SSH
(Secure Shell) mit einer Passwort-Authentifizierung, weiter wird mindestens ein 4-stelliges Passwort
(ohne weitere Restriktionen) gewählt, eine Beschränkung der Anmeldeversuche existiert nicht. Auf
Basis des Szenarios lässt sich ein Angriff skizzieren, indem mit einem SSH-Bruteforce-Tool versucht
wird das Passwort einer Benutzerkennung zu raten. Ein solches Bruteforce-Tool ist beispielsweise
Hydra. In einer LAN-Umgebung sind beispielsweise 180 SSH-Anmeldeversuche pro Minute möglich,
entsprechende Werte könnten im Rahmen eines Labortests ermittelt werden.

Nimmt man weiter an, dass das zu ratende Passwort tatsächlich vier Stellen hat und aus großen und
kleinen Buchstaben sowie Ziffern besteht, ergeben sich 62^4 mögliche Kennwörter. Mit oben genann-
ter Brute-Force-Rate wäre der Angriff in unter 23 Stunden durchführbar. Hinzu kommt noch ein gewis-
ser Aufwand zum Aufbau und Durchführung des Angriffs. Im Ergebnis wird damit ein Gesamtaufwand
von etwas mehr als einem Tag angesetzt.

Werden die Eckdaten des Angriffs mit Hilfe der Kennzahlen aus der [CEM] abgeschätzt, ergibt sich
folgende Tabelle:

```
Kategorie Begründung Wert
nach [CEM]
```
```
Punktzahl nach
[CEM]
Zeitbedarf mehr als 1 Tag, weniger als eine
Woche
```
```
<= one week 1
```
```
Expertise Angriffswerkzeug ist mit vielen
Beispielen öffentlich dokumentiert
```
```
Layman 0
```
```
Wissen über die
Komponente
```
```
SSH ist ein per RFC dokumentier-
tes Protokoll und ein offener Port
kann über einen Netzwerk-
Portscan gefunden werden
```
```
Public 0
```
```
Möglichkeit (win-
dow of opportunity)
```
```
dies hängt stark vom Verwen-
dungszweck ab, falls keine Restrik-
tionen definiert sind, dann sind
diese unbegrenzt
```
```
Unnecessa-
ry/unlimited ac-
cess
```
### 0

```
Ausstattung das Tool Hydra ist öffentlich und
leicht zugänglich verfügbar
```
```
Standard 0
```
```
Tabelle 6
```
Daraus ergibt sich eine Gesamtzahl von 1 Punkt. In diesem Beispiel wäre die Resistenz der Kompo-
nente also nicht ausreichend, um sich für SL-2 zu qualifizieren, d.h. die Schwachstellenanalyse hätte
an dieser Stelle ein negatives Prüfergebnis.


## Entwicklungsprozesses 8 Anhang E (informativ) – Übersicht zur Nutzung der Ergebnisse des IEC 62443-4-1-

**wicklungsprozesses**

**Practice 1 Security Management Nutzung im Prüfschema**

SM-1 Development Process keine^1

SM-2 Identification of repsonsibilities keine

SM-3 Identification of applicability keine

SM-4 Security expertise keine

SM-5 Process scoping keine

SM-6 File integrity Prüfung Design-Dokumentation, siehe

```
2.3
```
SM-7 Development environment security keine

SM-8 Controls for private keys keine

SM-9 Security requirements for externally provided

```
components
```
```
Prüfung Design-Dokumentation, siehe
2.3
```
SM-10 Custom development components from third-

```
party suppliers
```
```
Prüfung Design-Dokumentation, siehe
2.3
```
SM-11 Assessing and addressing security-related

```
issues
```
```
keine
```
SM-12 Process Verification keine

SM-13 Continuous improvement keine

**Practice 2 Specification of security requirements**

SR-1 Product security context Prüfung des Verwendungszwecks,

```
siehe 2.2
```
SR-2 Threat model Prüfung des Verwendungszwecks,

```
siehe 2.2
```
```
Schwachstellenanalyse, siehe 2.6
```
SR-3 Product security requirements Konformitätsbewertung, siehe 2.5

SR-4 Product security requirements content Prüfung des Verwendungszwecks,

```
siehe 2.2
```
SR-5 Security requirements review Konformitätsbewertung, siehe 2.5,

```
Rolle Tester
```
**Practice 3 Secure by design**

SD-1 Secure design principles Umgesetzte Security Eigenschaften

```
an Schnittstellen, betrifft Prüfung De-
```
(^1) _keine Nutzung im Prüfschema_ ist so zu lesen, dass keine direkten Ergebnisse (deliverables) im
Produkt oder den Design-Dokumenten ablesbar sind.


```
sign-Dokumentation, siehe 2.3
```
SD-2 Defense in depth design Schwachstellenanalyse, siehe 2.6

SD-3 Security design review Umgesetzte Security Eigenschaften

```
(Details ab SL-3 gefordert), betrifft
Prüfung Design-Dokumentation, siehe
2.3
```
SD-4 Secure design best practices Umgesetzte Security Eigenschaften

```
(Details ab SL-3 gefordert), betrifft
Prüfung Design-Dokumentation, siehe
2.3
```
**Practice 4 Secure implementation**

SI-1 Security implementation review keine

SI-2 Secure coding standards keine

**Practice 5 Security verification and validation testing**

SVV-1 Security requirements testing Konformitätsbewertung, siehe 2.5

SVV-2 Threat mitigation testing Schwachstellenanalyse, siehe 2.6

SVV-3 Vulnerability testing Schwachstellenanalyse, siehe 2.6

SVV-4 Penetration testing Schwachstellenanalyse, siehe 2.6

SVV-5 Independence of testers Schwachstellenanalyse, siehe 2.6

```
Konformitätsbewertung, siehe 3.1
```
**Practice 6 Management of security-related-issues**

DM-1 Receiving notifications of security-related is-

```
sues
```
```
keine
```
DM-2 Reviewing security related issues keine

DM-3 Assessing security-related issues keine

DM-4 Adressing security-related issues keine

DM-5 Disclosing in security-related issues keine

DM-6 Periodic review of security defect management

```
practice
```
```
keine
```
**Practice 7 Security update management**

SUM-1 Security update qualification keine

SUM-2 Security update documentation Prüfung Dokumentation (Anwender),

```
siehe 2.4
```
SUM-3 Dependent component or operating system

```
security update documentation
```
```
Prüfung Dokumentation (Anwender),
siehe 2.4
```
SUM-4 Security update delivery keine

SUM-5 Timely delivery of security patches keine


**Practice 8 Security guidelines**

SG-1 Product defense in depth Prüfung Dokumentation (Anwender),

```
siehe 2.4
```
SG-2 Defense in depth measures expected in the

```
environment
```
```
Prüfung Dokumentation (Anwender),
siehe 2.4
```
SG-3 Security hardening guidelines Prüfung Dokumentation (Anwender),

```
siehe 2.4
```
SG-4 Secure disposal guidelines Prüfung Dokumentation (Anwender),

```
siehe 2.4
```
SG-5 Secure operation guidelines Prüfung Dokumentation (Anwender),

```
siehe 2.4
```
SG-6 Account management guidelines Prüfung Dokumentation (Anwender),

```
siehe 2.4
```
SG-7 Documentation review Prüfung Dokumentation (Anwender),

```
siehe 2.4
```

## 9 Anhang F (informativ) – Übersicht der Ergänzungen zur Norm

Zielsetzung des Prüfschemas ist es, dass langfristig keine zusätzlichen Anforderungen als in der

selbst Norm definiert gefordert werden.

Da aus Sicht der Prüfung bezogen auf den aktuellen Stand der Normteile IEC 62443-4-2 und IEC

62443-4-1 noch weitere Details benötigt werden, um vergleichbare Prüfungen durchführen zu können,

werden in diesem Dokument teilweise präzisierte Anforderungen definiert. Diese Ergänzungen werden

an dieser Stelle aufgelistet:

- Komponentenspezifikation entsprechend Anhang A
- Akzeptanzkriterien entsprechend Anhang C
    o geänderte Akzeptenzkriterien im Vergleich zu CR des Normteils IEC 62443-4-2:
       ▪ CR 3.5: Komplexität der referenzierten Verfahren SL-Stufen zugeordnet
       ▪ CR 4.1: Ansteignde Mechanismenstärke der eingesetzten Verfahren aufgrund
          SL-Stufe (im Sinne Angriffsresistenz)
       ▪ CR 5.1: Unterscheidung zwischen Network Component und anderen Kompo-
          nententypen
- Forderung einer je SL-Stufe (im Sinne Angriffsresistenz) angemessenen Umsetzung von An-
    forderungen (CR), welche denen keine gestuften Anforderung (RE, Requirement Enhance-
    ments) definiert sind (beispielsweise CR 4.1), siehe Kapitel 2.3


## 10 Abkürzungsverzeichnis

```
Abkürzung
Bedeutung
```
```
CVSS Common Vulnerability Scoring System
EDR Embedded Device Requirement
DM Defect management (Abkürzung aus IEC 62443-4-1)
PKI Public Key Infrastructure
SD Security by design (Abkürzung aus IEC 62443-4-1)
SG Security guidelines Abkürzung aus IEC 62443-4-1)
SI Security Implementation (Abkürzung aus IEC 62443-4-1)
SM Security management (Abkürzung aus IEC 62443-4-1)
SR Security requirements (Abkürzung aus IEC 62443-4-1)
SUM Security update management (Abkürzung aus IEC 62443-4-1)
SVV Security verification and validation testing (Abkürzung aus IEC 62443-4-1)
```
## 11 Literaturverzeichnis

### [IEC62442-3-3] IEC 62443-3-3:2013

### [IEC62442-4-1] IEC 62443-4-1:2018

### [IEC62442-4-2] IEC 62443-4-2:2019

[CEM] Common Methodology for Information Technology Security Evaluation, Evaluation methodolo-
gy, April 2017, Version 3.1, Revision 5, CCMB-2017- 04 -004

[Dakks] Akkreditierungsanforderungen für Konformitätsbewertungsstellen im Bereich der Informations-
sicherheit/Cyber-Security für industrielle Automatisierungssysteme gemäß IEC 62443, 71 SD 2 019,
Revision: 1.0, 05.03.2018

[ISO18045] ISO/IEC 18045:2008, Information technology - Security techniques - Methodology for IT
security evaluation, 2014-01, Edition 2


**Bundesverband IT-Sicherheit e.V. (TeleTrusT)**

Der Bundesverband IT-Sicherheit e.V. (TeleTrusT) ist ein Kompetenznetzwerk, das in- und ausländische Mit-
glieder aus Industrie, Verwaltung, Beratung und Wissenschaft sowie thematisch verwandte Partnerorganisa-
tionen umfasst. Durch die breit gefächerte Mitgliederschaft und die Partnerorganisationen verkörpert Te-
leTrusT den größten Kompetenzverbund für IT-Sicherheit in Deutschland und Europa. TeleTrusT bietet Foren
für Experten, organisiert Veranstaltungen bzw. Veranstaltungsbeteiligungen und äußert sich zu aktuellen Fra-
gen der IT-Sicherheit. TeleTrusT ist Träger der "TeleTrusT European Bridge CA" (EBCA; PKI-Vertrauensver-
bund), der Expertenzertifikate "TeleTrusT Information Security Professional" (T.I.S.P.) und "TeleTrusT Profes-
sional for Secure Software Engineering" (T.P.S.S.E.) sowie des Vertrauenszeichens "IT Security made in Ger-
many". TeleTrusT ist Mitglied des European Telecommunications Standards Institute (ETSI). Hauptsitz des
Verbandes ist Berlin.

**Kontakt:**

Bundesverband IT-Sicherheit e.V. (TeleTrusT)
Dr. Holger Mühlbauer
Geschäftsführer
Chausseestraße 17
10115 Berlin
Telefon: +49 30 4005 4306
E-Mail: holger.muehlbauer@teletrust.de
https://www.teletrust.de



