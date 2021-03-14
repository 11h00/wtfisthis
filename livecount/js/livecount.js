//"use strict";
const CULER = new XMLHttpRequest();
var user_pref = window.localStorage;
var oldcount = 0, folo = 0, updatecount = 0, milestonz, ID, high2;
var timeset = false;
var wew = false;
var sad = new Audio('lesonn/sad.mp3');
sad.loop = true;
var useuname = "mathias_santourian";
var prifle = "";
var pnz = false;
var paused = false;
var methoddemerde = 0;
var wownon = "";
var sonHD = false;
var oldpostcount = 0;
var oldfollwoing = null;
//sounds
var UPsound = new Audio("lesonn/up.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var downfollowing = new Audio('lesonn/downfollowing.mp3');
var followingup = new Audio("lesonn/followingup.mp3");
var DOWNsoundfollo = new Audio("lesonn/followdown.mp3");
var postup = new Audio('lesonn/uppost.mp3');
var postdown = new Audio('lesonn/downpost.mp3');
var UPsoundfollo = new Audio("lesonn/up_follower.mp3");
var nofoundmathias = new Audio("lesonn/nofound_mathias.wav");
var mathias_up = new Audio("lesonn/save_up.mp3");
var mathias_down = new Audio("lesonn/save_down.mp3");

nofoundmathias.loop = true
//end of sounds
var followers = 0;
var nofoundmsg = {"text": " was no found please try again with a other instagram username:", "title": "404: account no found"};
var sond = 1;
var lanui = false;
var customrefresg = parseInt(user_pref.custom_update)
var getdayornoght = Boolean(parseInt(user_pref.is_night_mode));
var sonounon = Boolean(parseInt(user_pref.have_sound));
var lastuser = user_pref.last_user;

if (lastuser == undefined || ""){
	useuname = "mathias_santourian";
}else{
	useuname = lastuser;
}

if (useuname.length == 0){
	useuname = "mathias_santourian";
}
if (!isNaN(customrefresg)){
	$(document).ready(function(){
		$("#textcount").text(customrefresg / 1000);
		rateres = customrefresg / 1000;
		document.documentElement.style.setProperty('--transsecond', (customrefresg / 1000) + "s");
	})
}else{
	$(document).ready(function(){
		$("#textcount").text("5");
		user_pref.setItem("custom_update", 5000);
		rateres = 5;
		document.documentElement.style.setProperty('--transsecond', 5 + "s");
	})
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkcookie(){
	if (sonounon == true){
		sonHD = false;
		sonsetting();
	}
	if (getdayornoght == true){
		document.documentElement.style.setProperty('--lightmode_background', "black");
        document.documentElement.style.setProperty('--livecountdiv_background', "rgba(119, 119, 119, 0.133)");
        document.documentElement.style.setProperty('--livecountdiv_borders', "2px solid rgba(189, 189, 189, 0.133)");
        document.documentElement.style.setProperty('--feature_button', "rgb(66, 66, 66)");
		document.getElementById("sole").src = "img/lue.png";
		lanui = true;
	}
}
function gotoprofile(){
	Swal.fire({
  title: 'do you want to go to this profile ?',
  type: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'yes',
  cancelButtonText: 'nah rener'
}).then((result) => {
  if (result.value) {
  	window.open("https://www.instagram.com/" + useuname);
  }
})
}

function sonsetting(){
if (sonHD == true){
	if (lanui == false){
		document.getElementById("soundstting").style.background  = "#FF0000";
	}
	document.getElementById("soundstting").innerText = "sound : OFF";
	user_pref.setItem("have_sound", 0);
	sonHD = false;
}else{
	if (lanui == false){
    	document.getElementById("soundstting").style.background  = "#00FF00";
	}
	document.getElementById("soundstting").innerText = "sound : ON";
	user_pref.setItem("have_sound", 1);
	sonHD = true;
}

}
function milestonztest(){
	switch(folo.toString().length){
		case 1:
			var milestonz = folo;
			milestonz += 1;
		break;
		case 2:
			var milestonz = parseInt((Math.floor(folo / 10)) + "0");
			milestonz += 10;
		break;
		case 3:
			var milestonz = parseInt((Math.floor(folo / 100)) + "00");
			milestonz += 100;
		break;
		case 4:
			var milestonz = parseInt((Math.floor(folo / 1000)) + "000");
			milestonz += 1000;
		break;
		case 5:
			var milestonz = parseInt((Math.floor(folo / 10000)) + "0000");
			milestonz += 10000;
		break;
		case 6:
			var milestonz = parseInt((Math.floor(folo / 100000)) + "00000");
			milestonz += 100000;
		break;
		case 7:
			var milestonz = parseInt((Math.floor(folo / 1000000)) + "000000");
			milestonz += 1000000;
		break;
		case 8:
			var milestonz = parseInt((Math.floor(folo / 10000000)) + "0000000");
			milestonz += 10000000
		break;
		case 9:
			var milestonz = parseInt((Math.floor(folo / 100000000)) + "00000000");
			milestonz += 100000000;
		break;
	}
	switch(milestonz){
		case 0:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | nagativer !";break;
		case 1:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | pouri";break;
		case 2:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | C! pa vrai!";break;
		case 3:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | vou y ete pre!";break;
		case 4:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | quelzi ,,,,444!";break;
		case 5:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | moiuter?!";break;
		case 6:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | adnw, !: le ej a ! 6:00?!";break;
		case 7:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | SEVE LE NCHIFFERE GEN?ERAL N.";break;
		case 8:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 8!";break;
		case 9:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 9 est la somme des trois premiers cubes parfaits (03 + 13 + 2 3 = 9).";break;
		case 10:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | DOWN!!!";break;
		case 20:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | HELL YEAH, WIOLL BE EASY!ù";break;
		case 30:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | YHPIU CAN DO IT!!!";break;
		case 40:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 0OOWLO 4 <= (ch_ve innataje).";break;
		case 50:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | OMFH 50% DE MA POITI EGENERAM:!!";break;
		case 60:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 60 ?! DAMMITG!";break;
		case 70:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 78.ùà ? najh,,,,,. BETA	!!";break;
		case 80:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 88 DOIULER!";break;
		case 90:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | JKAI LA GERBE......";break;
		case 100:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 100% !!! DEPU8T DE LANVEN!! ";break;
		case 200:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | WJHTGA?! ";break;
		case 300:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | HAAHAHAJHABBB ! FUNFG NY 1223! !!!!";break;
		case 400:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | diodi you hezar this !?";break;
		case 500:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | mùaintier petit limite centrale ! ";break;
		case 600:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | horor.";break;
		case 700:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 77777! ! ";break;
		case 800:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | _8 TUIOKLE DE  BUNTRE; ! ";break;
		case 900:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | vimiation ! ";break;
		case 1000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + ",,,,, ";break;
		case 2000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | pa ma!!";break;
		case 3000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 3 KILO!";break;
		case 4000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 4444,,,,,";break;
		case 5000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 50% bi !";break;
		case 6000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | va til y ariver?";break;
		case 7000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 7.0 andoid nouga?!";break;
		case 8000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | ùmdij EN G MONOR";break;
		case 9000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | JE VOMI!!!!";break;
		case 10000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 10k!: JE PET 1 PLON!";break;
		case 20000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | C REPATITY!";break;
		case 30000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 30ki §?§?§?§? YOU ARE FOU!";break;
		case 40000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | are yopiu rich or soemthing?!";break;
		case 50000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 50M§% de la lmimit centrale 😳";break;
		case 60000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 6?!!! YOU AZRE ESXITNG THE NIFGHT!";break;
		case 70000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | adnproijdu  70.0 i aml ion t(heh future?!";break;
		case 80000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | U EN I MINOR! 8 TUILE!";break;
		case 90000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | KE GERBA ENCORE VOU!";break;
		case 100000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | HERLK YEAHY!";break;
		case 200000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | SOWN: SA CONTINUE!!!";break;
		case 300000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | DAWNIG!!!!";break;
		case 400000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | presqt a la miotier general de securite.....!";break;
		case 500000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | miotier general de securite 😳😳😳😳";break;
		case 600000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | opmfg YOIUY ACN DO TYI	 😳😳😳😳";break;
		case 700000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | AZLER PLSU NQSIE 3KI";break;
		case 800000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | MOO?JLIGHT NMLV3 EN BGVY MINRO";break;
		case 900000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | VOMUJAVE4G ANTAL !";break;
		case 1000000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | , <= X2 !";break;
		case 2000000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | CRET UNH JEU DENFAIN :)";break;
		case 3000000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | EHLL 6ZEAH B36 M ILUION!:";break;
		
		default:document.getElementById('milestona').innerHTML = 'before ' + milestonz;break;
	}
odometer5.innerHTML = milestonz - folo;
}

function testcount(){
	if (folo > oldcount){
		UPsound.cloneNode(true).play();
	}
	if (folo < oldcount){
		DOWNsound.cloneNode(true).play();
	}
	if (high2 > oldpostcount){
		postup.cloneNode(true).play();
	}
	if (high2 < oldpostcount){
		postdown.cloneNode(true).play();
	}
	if (oldfollwoing > followin){
		downfollowing.cloneNode(true).play();
	}
	if (oldfollwoing < followin){
		followingup.cloneNode(true).play();
	}
	if (followers > oldcount2){
		UPsoundfollo.cloneNode(true).play();
	}
	if (followers < oldcount2){
		DOWNsoundfollo.cloneNode(true).play();
	}
}

function tg() {        
   setTimeout(function () {   
   switch(methoddemerde){
	    case 0:
			CULER.open('GET', "https://www.instagram.com/" + useuname + "/guides/?__a=1");
		break;
		case 1:
			CULER.open('GET', "https://www.instagram.com/" + useuname + "/?__a=1");
		break;
		}
		CULER.send(null);
		CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar = JSON.parse(CULER.responseText);
			oldcount2 = followers;
			oldcount = folo;
			oldpostcount = high2;
			oldfollwoing = followin;
			switch(useuname){
				case 'mathias_santourian':
				case 'bas_les_couille_du_13_v2':
				case 'mathias_santourian_':
				case 'bas_les_couille_du_13':
				case 'mathiassantoutou777':
				case 'steve_le_destructeur':
					$('#pfp').css('border-radius', '0');
					$("#pfp").css("animation", "");
					$("#pfp").css("animation", "mathias infinite 1s alternate-reverse");
					// document.getElementById('pfp').style.border = 'solid darkorange';
				break;
				case 'kaiiz_k':
				case 'eimw':
					$('#pfp').css('border-radius', '0');
					$("#pfp").css("animation", "mathias_friend infinite 1s alternate-reverse");
				break;
				case 'moapies':
				case 'memesglobe':
				case 'namo00o':
				case 'nordicmalamutes':
				case 'weavile':
				case 'mathias_santourian_4':
				case 'back_innit':
				case 'benc4n':
					$("#pfp").css("animation", "");
					$('#pfp').css('border-radius', '100%');
					document.getElementById('pfp').style.border = 'solid red';
				break;
				default:
					$("#pfp").css("animation", "");
					$('#pfp').css('border-radius', '0');
					document.getElementById('pfp').style.border = 'solid';
				break;
			}
			switch(useuname){
				case "bas_les_couille_du_13_v2":
				case "bas_les_couille_du_13":
					$("#followeur")[0].innerHTML = "videos :";
					$("#posts")[0].innerHTML = "followers :";
					folo = degar.graphql.user.edge_felix_video_timeline.count;
					followers = degar.graphql.user.edge_followed_by.count;
					high2 = degar.graphql.user.highlight_reel_count;
				break;
				default:
					folo = degar.graphql.user.edge_followed_by.count;
					high2 = degar.graphql.user.highlight_reel_count;
					followers = degar.graphql.user.edge_owner_to_timeline_media.count;
					$("#followeur")[0].innerHTML = "followers :";
					$("#posts")[0].innerHTML = "posts :";
					$("#autre2")[0].innerHTML = "highlight stories :";
				break;
			}
			followin = degar.graphql.user.edge_follow.count;
			wownon = degar.graphql.user.full_name;
			if (wownon.length == 0){
				wownon = useuname
			}
			ID = degar.graphql.user.id;
			prifle = degar.graphql.user.profile_pic_url_hd;
			document.getElementById('pfp').src = prifle;
			odometer.innerHTML = folo;
			odometer2.innerHTML = followers;
			odometer3.innerHTML = followin;
			milestonztest()
			odometer4.innerHTML = high2;
			document.getElementById("coconu").innerHTML = wownon + " ID : (" + ID + ")";
			if (sonHD == true) {
				testcount();
			}
        }
		switch(this.status){
			case 404:
			if (!Swal.isVisible()){
			nofoundmsg = {"text": " was no found please try again with a other instagram username:", "title": "404: account no found"};
			sad.play()
			swal.fire({
			allowEscapeKey: false,
			title: nofoundmsg.title,
			text: useuname + nofoundmsg.text,
			input: 'text'
			}).then((result) => {
			useuname = result.value
			if (useuname == undefined || useuname == null || useuname == ""){
				if (useuname == "mathias777_is_cool"){
					useuname = "mathias_santourian_spam";
				}else{
					useuname = "mathias_santourian";
				}
			}
			user_pref.setItem("last_user", "mathias_santourian");
			switch(methoddemerde){
				case 0:
					CULER.open('GET', "https://www.instagram.com/" + useuname + "/guides/?__a=1");
				break;
				case 1:
					CULER.open('GET', "https://www.instagram.com/" + useuname + "/?__a=1");
				break;
			}
			CULER.send(null);
			swal.fire({
			title: "new instagram username set:",
			text: useuname,
			toast: true,
			animation: null,
			position: 'top',
			allowEscapeKey: false,
			showConfirmButton: false,
			timer: 3000})
			sad.pause()
			nofoundmathias.pause()
			});
		}
			break;
			case 429:
				swal.fire({
				title:"429: rate limit",
				text:"please try again later.",
				});
			break;
			case 500:
				swal.fire({
				title:"500: internal server error",
				text:"instagram have a internal server error and maybe instagram is down please try later.",
				});
			break;
		}
    }
};                     
        tg();
        if (timeset == false){
        	timeset = true;
        	if (isNaN(customrefresg)){
				updatecount = 5000;
			}else{
				updatecount = customrefresg;
			}
		}
   }, updatecount)
}

tg();  