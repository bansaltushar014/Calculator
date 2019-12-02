var final = "";
var s1;
var sign;
function fun(id){
	var  text;

	
	if(id === 'id1'){
		text = "1";
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}
	if(id === 'id2'){
		text = '2';
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}

	if(id === 'id3'){
		text = '3';
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}

	if(id === 'id4'){
		text = '4';
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}

	if(id === 'id5'){
		text = '5';
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}

	if(id === 'id6'){
		text = '6';
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}

	if(id === 'id7'){
		text = '7';
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}

	if(id === 'id8'){
		text = '8';
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}

	if(id === 'id9'){
		text = '9';
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}

	if(id === 'id0'){
		text = '0';
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}


	if(id === 'idpoint'){
		text = '.';
		text = final + text;
		final = text;
		document.getElementById("display").innerHTML = final;
	}

	if(id === 'idsum'){
		s1 = final;
		final = "" ;

		document.getElementById("display").innerHTML = final;
		fun('sign+');
	}
	if(id === 'sign+'){
		document.getElementById("display").innerHTML = '+';
		sign = 1;
	}



	if(id === 'idsub'){
		s1 = final;
		final = "";
		document.getElementById("display").innerHTML = final;
		fun('sign-');
	}
	if(id === 'sign-'){
		document.getElementById("display").innerHTML = '-';
		sign = 2;
	}

	if(id === 'idmul'){
		s1 = final;
		final = "";
		document.getElementById("display").innerHTML = final;
		fun('sign*');
	}
	if(id === 'sign*'){
		document.getElementById("display").innerHTML = '*';
		sign = 3;
	}

	if(id === 'iddiv'){
		s1 = final;
		final = "";
		document.getElementById("display").innerHTML = final;
		fun('sign/');
	}
	if(id === 'sign/'){
		document.getElementById("display").innerHTML = '/';
		sign = 4;
	}




	if(id === 'idequal'){
		
		if(s1){

			if(sign === 1){
				final = parseInt(s1) + parseInt(final);
				document.getElementById("display").innerHTML = final;
			}
			if(sign === 2){
				final = parseInt(s1) - parseInt(final);
				document.getElementById("display").innerHTML = final;
			}
			if(sign === 3){
				final = parseInt(s1) * parseInt(final);
				document.getElementById("display").innerHTML = final;
			}
			if(sign === 4){
				if(parseInt(final)!=0){
					final = parseInt(s1) / parseInt(final);
					document.getElementById("display").innerHTML = final;
				}
				else{
					alert('Cant devide by zero');
					final = "";
				}
			}

		}
		else{
			alert('invalid');
		}
	}


	if(id === 'del'){
		final = final.substring(0, final.length-1);
		document.getElementById("display").innerHTML = final;
	}

	if(id === 'ac'){
		final = "";
		s1 = "";
		document.getElementById("display").innerHTML = final;	
	}
}
