var langEN = {
	greeting: "Tere",
	title: "Pealkiri",
	header: "Campanella - Kella juhtimisüsteem",
	languageText: "Keel:",
	settings: "Sätted",
	status: "Olek",
	home: "Kodu",
	credits: "Autorid / Info",
	projectDescription: "Projekti kirjeldus: ",
	quickguide: "Campanella juhend",
	quickguideContent: "\
		<strong>Campanella</strong> is an open-source bell management system designed for schools.<br>\
		It can control the bells of a school through the internet.<br>\
		With user-friendly interface you can manage a system of RaspberryPi’s.<br>\
		You have only to connect a loudspeaker or the classic school bell to the RaspberryPi and you are ready!<br>\
		Using a single software for all the bells, the managing becomes very easy: all the school bells will ring at the same time and in a few seconds you will be able to change the timetable.<br>\
		The software is very versatile and can plan different timetables: daily, weekly, monthly or whatever.<br>\
		The software automatically syncronizes the internal clock with a remote atomic clock using the NetworkTimeProtocol.<br>\
		The software is designed for schools but is suitable for a lot more applications!<br>\
		",
	updateSettings: "Uuenda sätteid?",
	helpText: "\
	<li>\
	</br>\
	</br>\
	</br>\
	Keela või luba kell.</br>\
	<i>Vaikimisi: lubatud</i>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	Sisestage kella helisemise kellaajad\
	Kirjutage aeg formaadis yyyy-MM-dd hh:mm:ss või w hh:mm:ss kus w on 1 ja 7 vahel, mis näitab nädalapäeva (nt. 1 = Esmaspäev) või formaadis hh:mm:ss et kell heliseks iga päev.\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	<b>\
	Sisestage aeg, millal raspberry pi peaks sisemise kella NTP-serveriga sünkroonima</br>\
	NB!:</br>\
	See protseduur võtab 35 sekundit, mille jooksul kelluke ajutiselt välja lülitatakse.</br>\
	Interneti-ühenduse puudumise või vale NTP-aadressi korral sünkroonimine ebaõnnestub ja olekulehel EI TEATATA veast</br>\
	</b>\
	Soovitatav on määrata ööaeg</br>\
	<i>Vaikimisi: 02:00:00</i>\
	</br>\
	</br>\
	</br>\
	</br>\
	NTP-server, millega kellaaega sünkroonida\
	</br>\
	Soovitatav server on proovide aja- ja sageduslabori ntp1.inrim.it.\
	</br>\
	Vaikimisi: ntp1.inrim.it\
	</br>\
	</br>\
	</br>\
	</br>\
	Kella volüüm<br>\
	Max: 4         Min: -100\
	</br>\
	<b>\
	NB!:\
	</br>\
	Maht on väljendatud dB, mistõttu see on logaritmiline\
	</br>\
	</b>\
\
	<i>Vaikimisi: 4</i>\
	</br>\
	</br>\
	Valige helistada kella KOHE\
	</br>\
	</br>\
	Valige sünkroonida sisemine kell NTP-serveriga kohe\
	</br>\
	</br>\
	</br>\
	</br>\
	</li>\
	<li></li>\
	",
	helpTitle: " Abi ",
	creditsTitle: "Autorid: ",
	creditsText: "\
	<br><br>\
	Il programma Python è stato scritto da<strong> Michele Lizzit.</strong><br>\
	Il CSS è stato scritto da <strong>Daniele Toppano e Marco Ferrari.</strong><br>\
	L'HTML è stato scritto da <strong>Michele Lizzit e Daniele Toppano.</strong><br>\
	Il PHP è stato scritto da <strong>Michele Lizzit.</strong><br>\
	Il logo \"CopernicoDrin\" è stato creato da <strong>Marco Ferrari.</strong><br>\
	Il software per il controllo dell'LCD è stato scritto da <strong>Michele Lizzit.</strong><br><br>\
	Michele Lizzit<br> <i>michele@lizzit.it - <a href=\"https://lizzit.it\">lizzit.it</a></i><br>\
	Daniele Toppano <br><i>danitoppano@gmail.com</i><br>\
	Marco Ferrari <br><i>marcogio99@gmail.com</i><br>\
	<br>\
	Il computer che gestisce la campanella e il server è un Raspberry PI modello B con Raspbian<br>\
	Il software è scritto in PHP e Python<br>\
	Il display LCD è gestito da una scheda Arduino UNO che legge i dati, tramite seriale, dal RaspberryPi<br>\
	Ultima modifica del software 26/04/2016<br>\
	<br>\
	Il software è rilasciato in licenza GNU AGPLv3, il sorgente è gratuitamente scaricabile da <a href=\"https://lizzit.it/campanella\">lizzit.it/campanella</a>\
	",
	settingsTitle: "Muuda enda sätteid: ",
	settingsReset: "Lähtesta",
	settingsUpdate: "Uuenda sätteid",
	settingsRingNow: "Helista kella KOHE",
	settingsVolume: "Volüüm (da -100 a 4)",
	settingsTime: "Aeg ntp-serveri sünkroonimiseks formaadis hh:mm:ss",
	settingsNTP: "Server NTP",
	settingsSound: "Määra heli",
	settingsNTPnow: "Uuenda NTP KOHE",
	settingsEnable: "Luba/Keela campanella",
	settingsEnabledText: "Lubatud",
	settingsDisabledText: "Keelatud",
	settingsTimetable: "Ajatabelid",
	statusServer: "Serveri olek",
	statusUSB: "Kontrolli USB-porte",
	statusSDspace: "SD-s kasutatud ruum:",
	statusSD: "SD mälu:",
	statusRAM: "RAM:",
	statusOptions: "Faili OPTIONS.txt sisu",
	statusErrors: "Server vead:",
	statusNetwork: "Võrgu olek",
	statusTitle: "Süsteemi olek: ",
	rebootConfirm: "Kas olete kindel, et soovite süsteemi taaskäivitada / välja lülitada?",
	usbStatus: "Serveri USB olek",
	textBack: "Tagasi",
	guideTitle: "Projekti juhend:",
	guideContent: "\
	The software works on Raspberry PI Model A or B and on any Linux machine.<br>\
	For more information on the software please visit:\
	<a href=\"https://lizzit.it/campanella\">https://lizzit.it/campanella</a>\
	",
	uploadText: "Laadi üles",
	updateSettings: "Sätted",
	uploadTitle: "Laadige serverisse uus heli: ",
	uploadInfo: "NB!: lubatud ainult .wav",
	uploadLabel: "Laadi enda fail:",
	updateTitle: "Uuenda sätteid: ",
	updateSystemReboot: "Süsteem taaskäivitub, palun oodake.",
	updateDone: "Süsteem on töökorras.",
	homeText: "Kodu",
	title404: "404 Ei Leitud: ",
	text404: "Faili ei leitud",
	selectSoundDeleteAllButton: "Eemalda kõik helid",
	selectSoundSetButton: "Määra heli",
	selectSoundUpload: "Laadige serverisse uus heli",
	selectSoundDeleteButton: "Kustuta valitud heli",
	selectSoundTitle: "Helihalduspaneel",
	selectSoundInfo: "Siin saate seadistada kõlarites esitatava heli.",
	selectSoundDelete: "Kustuta heli mälust",
	selectSoundSetInfo: "Määra heli"

};
