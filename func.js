// JavaScript Document

function desplegar(tab) {
	"use strict";
	var tab = document.getElementById(tab);


	switch (tab.style.display) {
		case "none":
			tab.style.display = "block";

			break;
		default:
			tab.style.display = "none";

			break;
	}
}

function operar1() {
	"use strict";
	var a = document.getElementById("hueco1a").value;
	var b = document.getElementById("hueco1b").value;
	var h = document.getElementById("hueco1c").value;
	var a2 = a * a;
	var b2 = b * b;
	var h2 = h * h;
	var w = a * b * h;
	var bol = false;
	var u, wa, wb, wh = 0;
	var uap = 0;



	if (w == 0) {
		if (a == 0) {
			w = b * h;
			if (w == 0) {
				alert("Error: Solo un lado puede ser 0.");
			}
			else {
				w = b - h;
				if (w >= 0) {
					alert("Error: h debe ser mayor que b.");
				}
				else {
					document.getElementById("operaciones").innerHTML = "h<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> <br>";
					document.getElementById("operaciones").innerHTML += " " + h + "<sup>2</sup> = a<sup>2</sup> + " + b + "<sup>2</sup><br>";
					document.getElementById("operaciones").innerHTML += " " + h2 + " = a<sup>2</sup> + " + b2 + "<br>";
					document.getElementById("operaciones").innerHTML += "a<sup>2</sup> = " + h2 + " - " + b2 + "<br>";

					w = h2 - b2;
					document.getElementById("operaciones").innerHTML += "a<sup>2</sup> = " + w + "<br>";
					document.getElementById("operaciones").innerHTML += "a = &radic;(" + w + ")<br>";





					a = Math.sqrt(w);
					wa = a.toFixed(2);
					a = wa;
					document.getElementById("operaciones").innerHTML += "a &cong; " + wa + "<br>";
					document.getElementById("hueco1a").value = wa;

					bol = true;

					document.getElementById("hueco1a").style.backgroundColor = "rgba(234,240,7,1.00)";
					document.getElementById("hueco1b").style.backgroundColor = "rgba(255,255,255,1.00)";
					document.getElementById("hueco1c").style.backgroundColor = "rgba(255,255,255,1.00)";
					u = a / h;
					w = Math.asin(u);
					w = 180 * w / Math.PI;
					w = w.toFixed(2);
					document.getElementById("hueco1z2").value = w;
					u = b / h;
					w = Math.asin(u);
					w = 180 * w / Math.PI;
					w = w.toFixed(2);
					document.getElementById("hueco1z3").value = w;




				}
			}
		}
		else {
			if (b == 0) {
				if (h == 0) {
					alert("Error: Solo un lado puede ser 0.");
				}
				else {
					w = a - h;
					if (w >= 0) {
						alert("Error: h debe ser mayor que a.");
					}
					else {
						document.getElementById("operaciones").innerHTML = "h<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> <br>";
						document.getElementById("operaciones").innerHTML += " " + h + "<sup>2</sup> =  " + a + "<sup>2</sup> + b<sup>2</sup><br>";
						document.getElementById("operaciones").innerHTML += " " + h2 + " = " + a2 + " + b<sup>2</sup><br>";
						document.getElementById("operaciones").innerHTML += "b<sup>2</sup> = " + h2 + " - " + a2 + "<br>";

						w = h2 - a2;

						document.getElementById("operaciones").innerHTML += "b<sup>2</sup> = " + w + "<br>";

						b = Math.sqrt(w);

						document.getElementById("operaciones").innerHTML += "b = &radic;(" + w + ")<br>";

						wb = b.toFixed(2);
						b = wb;

						document.getElementById("operaciones").innerHTML += "b &cong; " + wb + "<br>";


						document.getElementById("hueco1b").value = wb;
						bol = true;

						document.getElementById("hueco1b").style.backgroundColor = "rgba(234,240,7,1.00)";
						document.getElementById("hueco1a").style.backgroundColor = "rgba(255,255,255,1.00)";
						document.getElementById("hueco1c").style.backgroundColor = "rgba(255,255,255,1.00)";

						u = a / h;
						w = Math.asin(u);
						w = 180 * w / Math.PI;
						w = w.toFixed(2);
						document.getElementById("hueco1z2").value = w;
						u = b / h;
						w = Math.asin(u);
						w = 180 * w / Math.PI;
						w = w.toFixed(2);
						document.getElementById("hueco1z3").value = w;



					}
				}
			}
			else {
				document.getElementById("operaciones").innerHTML = "h<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> <br>";
				document.getElementById("operaciones").innerHTML += "h<sup>2</sup> = " + a + "<sup>2</sup> + " + b + "<sup>2</sup><br>";
				document.getElementById("operaciones").innerHTML += "h<sup>2</sup> = " + a2 + " + " + b2 + "<br>";

				w = a2 + b2;

				document.getElementById("operaciones").innerHTML += "h<sup>2</sup> = " + w + "<br>";
				document.getElementById("operaciones").innerHTML += "h = &radic;(" + w + ")<br>";


				h = Math.sqrt(w);
				wh = h.toFixed(2);
				h = wh;

				document.getElementById("operaciones").innerHTML += "h &cong; " + wh + "<br>";

				document.getElementById("hueco1c").value = wh;
				bol = true;

				document.getElementById("hueco1c").style.backgroundColor = "rgba(234,240,7,1.00)";
				document.getElementById("hueco1a").style.backgroundColor = "rgba(255,255,255,1.00)";
				document.getElementById("hueco1b").style.backgroundColor = "rgba(255,255,255,1.00)";


			}
		}
	}
	else {
		alert("Error: Un lado debe ser 0.");
	}

	if (bol) {
		document.getElementById("operaciones").innerHTML += "<br><h3>Área:</h3>";
		document.getElementById("operaciones").innerHTML += "Área = a·b/2 <br>";
		document.getElementById("operaciones").innerHTML += "Área &cong; " + a + "·" + b + "/2<br>";
		w = a * b / 2;
		w = w.toFixed(2);
		document.getElementById("operaciones").innerHTML += "Área &cong; " + w + ""+"<br>";

		document.getElementById("operaciones").innerHTML += "<br><h3>Perímetro:</h3>";
		document.getElementById("operaciones").innerHTML += "Perímetro = a + b + h<br>";
		document.getElementById("operaciones").innerHTML += "Perímetro &cong; " + a + " + " + b + " + " + h + "<br>";
		document.getElementById("hueco1z").value = w;
		w = 1 * a + 1 * b + 1 * h;
		w = w.toFixed(2);
		document.getElementById("operaciones").innerHTML += "Perímetro &cong; " + w + "<br>";
		document.getElementById("hueco1z1").value = w;

		document.getElementById("operaciones").innerHTML += "<br><h3>Ángulos:</h3>";
		document.getElementById("operaciones").innerHTML += "&alpha; = arcsin(a/h)<br>";

		u = a / h;
		uap = u.toFixed(2);
		document.getElementById("operaciones").innerHTML += "&alpha; = arcsin(" + uap + ")<br>";

		w = Math.asin(u);
		w = 180 * w / Math.PI;
		w = w.toFixed(2);
		document.getElementById("operaciones").innerHTML += "&alpha; &cong; " + w + "º<br>";

		document.getElementById("hueco1z2").value = w;
		document.getElementById("operaciones").innerHTML += "<br>&beta; = arcsin(b/h)<br>";
		u = b / h;
		uap = u.toFixed(2);
		document.getElementById("operaciones").innerHTML += "&beta; = arcsin(" + uap + ")<br>";
		w = Math.asin(u);
		w = 180 * w / Math.PI;
		w = w.toFixed(2);
		document.getElementById("operaciones").innerHTML += "&beta; &cong; " + w + "º<br>";
		document.getElementById("hueco1z3").value = w;

	}




}

