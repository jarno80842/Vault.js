<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="description" content="Vault">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<title>Vault</title>
	
</head>
<body>
	<div id=main-container>
		<div id=flash>
			<div id="Green"></div>
			<div id="Red"></div>
		</div>
		<div id="code-container"></div>
		<br/>
		<div id="button-container">
			<button class="button" value="1" onclick="getNumber(this)"> 1 </button>
			<button class="button" value="2" onclick="getNumber(this)"> 2 </button>
			<button class="button" value="3" onclick="getNumber(this)"> 3 </button>
			<button class="submit" value="submit" onclick="submit(this)"> submit </button>
		</div>
		<div id=codecount>
			<div id=Correct>
			Correct:
				<div id=numberCorrect>
					0
				</div>
			</div>
			<div id=Wrong>
			Wrong:
				<div id=numberWrong>
					0
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>