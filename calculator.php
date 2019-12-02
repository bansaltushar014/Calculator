<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="calculator.css">
	<title>Calculator</title>
</head>
<body>
	<div class="row">
		<div class="calculator col-md-4 col-md-offset-5 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4" >
			<div class="display" id="display">

			</div>
			<div>
				<div class="buttons">
					<button  id="ac" onclick="fun(this.id)" class="btn no">AC</button>
					<button id="del"  onclick="fun(this.id)" class="btn no">DEL</button>
					
				</div>
				<div class="buttons">
					<button  id="id9"  onclick="fun(this.id)" class="btn no">9</button>
					<button id="id8"  onclick="fun(this.id)" class="btn no">8</button>
					<button id="id7"  onclick="fun(this.id)" class="btn no">7</button>
					<button id="idsum"  onclick="fun(this.id)" class="btn no">+</button>
				</div>
				<div class="buttons">
					<button id="id6"  onclick="fun(this.id)" class="btn no">6</button>
					<button id="id5" onclick="fun(this.id)"  class="btn no">5</button>
					<button id="id4"  onclick="fun(this.id)" class="btn no">4</button>
					<button id="idsub"  onclick="fun(this.id)" class="btn no">-</button>
				</div>
				<div class="buttons">
					<button id="id3"  onclick="fun(this.id)" class="btn no">3</button>
					<button id="id2"  onclick="fun(this.id)"  class="btn no">2</button>
					<button id="id1"  onclick="fun(this.id)" class="btn no">1</button>
					<button id="idmul"  onclick="fun(this.id)" class="btn no">*</button>
				</div>
			</div>
			
			<div class="buttons">
				<button id="id0"  onclick="fun(this.id)" class="btn no">0</button>
				<button id="idpoint" onclick="fun(this.id)"  class="btn no">.</button>
				<button id="idequal" onclick="fun(this.id)"  class="btn no">=</button>
				<button id="iddiv"  onclick="fun(this.id)" class="btn no">/</button>
			</div>
			
		</div>

	</div>

	<script src="calculator.js"></script>
</body>
</html>