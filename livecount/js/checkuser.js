function checkuser(){
	switch(useuname1){
			case 'mathias_santourian':
			case 'mathias.santourian':
			case 'mathias_santourian_':
			case 'bas_les_couille_du_13':
			case 'bas_les_couille_du_13_v2':
			case 'mathiassantoutou777':
			case 'tpjdog':
			case 'steve_le_destructeur':
			$('#pfp').css('border', 'solid blue');
			$('#name1').css('color', '#00c0f9');
			$('#odometer2').css('color', '#24fff5');
			$('#pfp').css('filter', 'blur(0px)')
			// $('#pfp').css('border', 'solid blue');
			// $('#name1').css('color', '#de7a00');
			// $('#odometer2').css('color', '#de7a00');
			// $('#pfp').css('border', 'solid gray');
			// $('#name1').css('color', 'darkgray');
			// $('#odometer2').css('color', 'darkgray');
			$('#pfp').css('border-radius', '0');
		break;
		case 'kaiiz_k':
		case 'eimw':
			$('#pfp').css('filter', 'blur(0px)')
			$('#pfp').css('border', 'solid green');
			$('#name1').css('color', '#25eb00');
			$('#odometer2').css('color', '#3eff3e');
			$('#pfp').css('border-radius', '0');
		break;
		case 'namosclub':
		case 'niepsclub':
		case 'huzunlubirpooncikii':
		case 'supremefastest':
		case 'benc4n':
		case 'namo00o':
		case 'moapies':
		case 'qoubles':
		case 'memesglobe':
		case 'back_innit':
		case 'nordicmalamutes':
		case 'weavile':
			$('#pfp').css('border', 'solid red')
			$('#pfp').css('filter', 'blur(10px)')
			$('#pfp').css('border-radius', '100%')
			$('#name1').css('color', '#FF0000')
			$('#odometer2').css('color', '#FF0000')
		break;
		default:
			$('#pfp').css('filter', 'blur(0px)')
			$('#pfp').css('border', 'solid black');
			$('#pfp').css('border-radius', '0');
			$('#name1').css('color', '#FFFFFF');
			$('#odometer2').css('color', '#FFFFFF');
		break;
	}
	
	switch(useuname2){
		case 'mathias_santourian':
		case 'mathias.santourian':
		case 'mathias_santourian_':
		case 'mathias_santourian__':
		case 'bas_les_couille_du_13_v2':
		case 'tpjdog':
		case 'tpjland':
		case 'bas_les_couille_du_13':
		case 'steve_le_destructeur':
			// $('#pfp3').css('border', 'solid darkorange');
			// $('#name2lol').css('color', '#de7a00');
			// $('#odometer3').css('color', '#de7a00');
			$('#pfp3').css('filter', 'blur(0px)');
			$('#pfp3').css('border', 'solid blue');
			$('#name2lol').css('color', '#00c0f9');
			$('#odometer3').css('color', '#24fff5');
			// $('#pfp3').css('border', 'solid gray');
			// $('#name2lol').css('color', 'darkgray');
			// $('#odometer3').css('color', 'darkgray');
			$('#pfp3').css('border-radius', '0');
		break;
		case 'kaiiz_k':
		case 'eimw':
			$('#pfp3').css('border', 'solid green');
			$('#name2lol').css('color', '#25eb00');
			$('#pfp3').css('filter', 'blur(0px)');
			$('#odometer3').css('color', '#3eff3e');
			$('#pfp3').css('border-radius', '0');
		break;
		case 'namosclub':
		case 'moapies':
		case 'memesglobe':
		case 'back_innit':
		case 'namo00o':
		case 'qoubles':
		case 'nordicmalamutes':
		case 'weavile':
		case 'niepsclub':
		case 'huzunlubirpooncikii':
		case 'benc4n':
			$('#pfp3').css('border', 'solid red');
			$('#pfp3').css('border-radius', '100%');
			$('#name2lol').css('color', '#FF0000');
			$('#pfp3').css('filter', 'blur(10px)')
			$('#odometer3').css('color', '#FF0000');
		break
		default:
			$('#pfp3').css('border', 'solid black');
			$('#pfp3').css('filter', 'blur(0px)');
			$('#pfp3').css('border-radius', '0');
			$('#name2lol').css('color', '#FFFFFF');
			$('#odometer3').css('color', '#FFFFFF');
		break
	}
}