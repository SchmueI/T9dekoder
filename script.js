var liste = []

//Sobald eine Datei ausgewählt wird, wird sie in den Filereader gelesen und im Array liste[] gespeiechert.
document.getElementById('inputfile')
.addEventListener('change', function() {
	console.log("Datei wurde geladen");
	var fr=new FileReader();
	fr.onload=function(){
		liste=fr.result.split("\n")
		calc()
	}
	
	fr.readAsText(this.files[0]);
})


function calc(){
	var final = ""
	var combo=[]

	//1. Sammle alle Bausteine
	//Das Ergebnis dieses Abschnittes ist ein Eindimensionales Array mit der Abfolge aller möglichen Großblöcke.
	for (var i = 0; i<input.value.length; i++){
		if(input.value.charAt(i) == 0) combo.push("_")
		if(input.value.charAt(i) == 1) combo.push("_")
		if(input.value.charAt(i) == 2) combo.push("abc")
		if(input.value.charAt(i) == 3) combo.push("def")
		if(input.value.charAt(i) == 4) combo.push("ghi")
		if(input.value.charAt(i) == 5) combo.push("jkl")
		if(input.value.charAt(i) == 6) combo.push("mno")
		if(input.value.charAt(i) == 7) combo.push("pqrs")
		if(input.value.charAt(i) == 8) combo.push("tuv")
		if(input.value.charAt(i) == 9) combo.push("wxyz")
	}

	//2. Isoliere Characters
	//In diesem Schritt wird das Eindimensionale Array in ein Zweidimensionales aufgeteilt. Jedes Element beinhaltet nun exakt 1 Char.
	var splitchar =[]
	for (var i= 0; i<combo.length; i++){
		if(combo[i].length==1){
			splitchar[i] = ["_"]
		}
		if(combo[i].length==3){
			splitchar[i] = [combo[i].charAt(0), combo[i].charAt(1), combo[i].charAt(2)]
		}
		if(combo[i].length==4){
			splitchar[i] = [combo[i].charAt(0), combo[i].charAt(1), combo[i].charAt(2), combo[i].charAt(3)]
		}
	}
	
	
	//3. Pop Wortdatei nach Buchstabe
	//Alle Unpassenden  werden aus der Liste gestrichen.d
	var Worte=liste
	var Puffer=[]
	for (var i=0; i<splitchar.length; i++){
		for (var j=0; j<splitchar[i].length; j++){
			for (var k=0; k<Worte.length; k++){
				if (Worte[k].toLowerCase().charAt(i) == splitchar[i][j]){
					Puffer.push(Worte[k])
				}
			}
		}
		Worte=Puffer
		Puffer=[]
	}
	
	Puffer=[]
	
	//4. Pop Wortdatei nach Länge
	//Wenn Checkbox aktiviert, werden nur Treffer der entpsrechenden Wortlänge angezeigt.
	if(document.getElementById("check").checked){
		for (var i=0; i<Worte.length; i++){
			if (Worte[i].length==document.getElementById("input").value.length){
				Puffer.push(Worte[i])
			}
		}
		Worte=Puffer
		Puffer=[]
	}
				


	//Output
	document.getElementById("output").innerHTML=Worte
}