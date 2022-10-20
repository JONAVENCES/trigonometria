
var v_control=true;
function resize_panel_functions() {}

var glob_places = 3;
var round_msg = " Note that all decimal results are rounded to " + glob_places + " places based on your chosen rounding preference, and decimal places less than .0000000000001 or greater than .9999999999999 are rounded to the nearest integer.";

function change_places(form) {
	glob_places = document.calc.places.selectedIndex;
	clear_results(document.calc)
}

function pre_fns(num, places) {
	var num_str = "" + num + "";
	var leave_alone = 0;
	if (num_str.indexOf(".") > -1) {
		var dec_ar = num_str.split(".");
		if (dec_ar[1].length < 13) {
			leave_alone = 1
		}
		var num_floor = Math.floor(num);
		var diff = num - num_floor;
		if (diff < .0000000000001) {
			num = num_floor
		}
		var num_ceil = Math.ceil(num);
		var diff_2 = num_ceil - num;
		if (diff_2 < .0000000000001) {
			num = num_ceil
		}
	}
	if (num % 1 != 0 && leave_alone == 0) {
		return fns(num, places, 0, 0, 0)
	} else {
		return num
	}
}

function change_deg_rad(form) {
	var deg_rad = document.calc.deg_rad.selectedIndex;
	var v_sas_B = sn(document.calc.sas_B.value);
	if (v_sas_B > 0) {
		if (deg_rad == 0) {
			v_sas_B = convert_radToDeg(v_sas_B)
		} else {
			v_sas_B = convert_degToRad(v_sas_B)
		}
		document.calc.sas_B.value = v_sas_B
	}
	var v_ssa_A = sn(document.calc.ssa_A.value);
	if (v_ssa_A > 0) {
		if (deg_rad == 0) {
			v_ssa_A = convert_radToDeg(v_ssa_A)
		} else {
			v_ssa_A = convert_degToRad(v_ssa_A)
		}
		document.calc.ssa_A.value = v_ssa_A
	}
	var v_asa_A = sn(document.calc.asa_A.value);
	if (v_asa_A > 0) {
		if (deg_rad == 0) {
			v_asa_A = convert_radToDeg(v_asa_A)
		} else {
			v_asa_A = convert_degToRad(v_asa_A)
		}
		document.calc.asa_A.value = v_asa_A
	}
	var v_asa_B = sn(document.calc.asa_B.value);
	if (v_asa_B > 0) {
		if (deg_rad == 0) {
			v_asa_B = convert_radToDeg(v_asa_B)
		} else {
			v_asa_B = convert_degToRad(v_asa_B)
		}
		document.calc.asa_B.value = v_asa_B
	}
	var v_aas_A = sn(document.calc.aas_A.value);
	if (v_aas_A > 0) {
		if (deg_rad == 0) {
			v_aas_A = convert_radToDeg(v_aas_A)
		} else {
			v_aas_A = convert_degToRad(v_aas_A)
		}
		document.calc.aas_A.value = v_aas_A
	}
	var v_aas_B = sn(document.calc.aas_B.value);
	if (v_aas_B > 0) {
		if (deg_rad == 0) {
			v_aas_B = convert_radToDeg(v_aas_B)
		} else {
			v_aas_B = convert_degToRad(v_aas_B)
		}
		document.calc.aas_B.value = v_aas_B
	}
	glob_deg_rad = document.calc.places.selectedIndex;
	var deg_rad_txt_ar = document.getElementsByClassName("deg_rad_txt");
	if (deg_rad == 0) {
		for (var i = 0; i < deg_rad_txt_ar.length; i++) {
			deg_rad_txt_ar[i].innerHTML = "(grados)"
		}
		$("#sas_B").attr('placeholder', '(grados)');
		$("#ssa_A").attr('placeholder', '(grados)');
		$("#asa_A").attr('placeholder', '(grados)');
		$("#asa_B").attr('placeholder', '(grados)');
		$("#aas_A").attr('placeholder', '(grados)');
		$("#aas_B").attr('placeholder', '(grados)')
	} else {
		for (var i = 0; i < deg_rad_txt_ar.length; i++) {
			deg_rad_txt_ar[i].innerHTML = "(radianes)"
		}
		$("#sas_B").attr('placeholder', '(radianes)');
		$("#ssa_A").attr('placeholder', '(radianes)');
		$("#asa_A").attr('placeholder', '(radianes)');
		$("#asa_B").attr('placeholder', '(radianes)');
		$("#aas_A").attr('placeholder', '(radianes)');
		$("#aas_B").attr('placeholder', '(radianes)')
	}
	clear_results(document.calc)
}

function convert_degToRad(angle) {
	return (Math.PI / 180) * angle
}

function convert_radToDeg(angle) {
	return angle * (180 / Math.PI)
}

function convert_degDec(deg) {
	var deg_int = Math.floor(deg);
	var deg_dec = deg - deg_int;
	var deg_mins = 0;
	var deg_secs = 0;
	if (deg_dec > 0) {
		deg_mins = Math.floor(deg_dec * 60);
		deg_secs = ((deg_dec * 60) - Math.floor(deg_dec * 60)) * 60
	}
	return "" + deg_int + "&deg;" + Math.round(deg_mins) + "'" + Math.round(deg_secs) + "\""
}

function calc_sss() {
	if ($("#sss").prop("checked")) {
	     v_control=true;
		var a = sn(document.calc.sss_a.value);
		var b = sn(document.calc.sss_b.value);
		var c = sn(document.calc.sss_c.value);
		var A = 0;
		var B = 0;
		var C = 0;
		if (a <= 0) {
			alert("Por favor introduce un valor positivo para a.");
			v_control=false;
			document.calc.sss_a.focus(); return;
		} else
		if (b <= 0) {
			alert("Por favor introduce un valor positivo para b.");v_control=false;
			document.calc.sss_b.focus(); return;
		} else
		if (c <= 0) {
			alert("Por favor introduce un valor positivo para c.");v_control=false;
			document.calc.sss_c.focus(); return;
		} else
		if (a + b <= c) {
			alert("Este no es un triangulo valido, dado que a (" + a + ") + b (" + b + ") no pude ser menor o igual a la longitud de c (" + c + ".");v_control=false; return;
		} else
		if (b + c <= a) {
			alert("Este no es un triangulo valido, dado que b (" + b + ") + c (" + c + ") no pude ser menor o igual a la longitud de a (" + a + "."); v_control=false; return;
		} else
		if (a + c <= b) {
			alert("Este no es un triangulo valido, dado que a (" + a + ") + c (" + c + ") no pude ser menor o igual a la longitud de b (" + b + "."); v_control=false; return;
		} else {
			var cos_A = (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c);
			A = Math.acos(cos_A);
			A *= 180 / Math.PI;
			var cos_B = (Math.pow(c, 2) + Math.pow(a, 2) - Math.pow(b, 2)) / (2 * c * a);
			B = Math.acos(cos_B);
			B *= 180 / Math.PI;
			C = 180 - A - B;
			var pass = get_results(a, b, c, A, B, C, 1, "SSS");
			if (pass) {
				var work = "";
				work += "<table class='cht-tbl'>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Valores conocidos</strong></td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Lado <em>a</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + a + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Lado <em>b</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + b + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Lado <em>c</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + c + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Paso #1</strong>: Usar la ley de Cosenos para encontrar al angulo A.</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>cos A</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(b<sup>2</sup> + c<sup>2</sup> − a<sup>2</sup>) / 2bc</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>cos A</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(" + b + "<sup>2</sup> + " + c + "<sup>2</sup> − " + a + "<sup>2</sup>) / 2 x " + b + " x " + c + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>cos A</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(" + pre_fns(Math.pow(b, 2), glob_places) + " + " + pre_fns(Math.pow(c, 2), glob_places) + " − " + pre_fns(Math.pow(a, 2), glob_places) + ") / " + pre_fns(2 * b * c, glob_places) + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>cos A</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(cos_A, glob_places) + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>A</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>cos<sup>-1</sup>(" + pre_fns(cos_A, glob_places) + ")</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>A</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(A, glob_places) + "&deg; o " + convert_degDec(A) + " o " + pre_fns(convert_degToRad(A), glob_places) + " radianes</td>";
				work += "</tr>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Paso #2</strong>: Usar la ley de Cosenos para encontrar el angulo B.</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>cos B</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(c<sup>2</sup> + a<sup>2</sup> − b<sup>2</sup>) / 2ca</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>cos B</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(" + c + "<sup>2</sup> + " + a + "<sup>2</sup> − " + b + "<sup>2</sup>) / 2 x " + c + " x " + a + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>cos B</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(" + pre_fns(Math.pow(c, 2), glob_places) + " + " + pre_fns(Math.pow(a, 2), glob_places) + " − " + pre_fns(Math.pow(b, 2), glob_places) + ") / " + pre_fns(2 * c * a, glob_places) + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>cos B</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(cos_B, glob_places) + "<br />";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>B</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>cos<sup>-1</sup>(" + pre_fns(cos_B, glob_places) + ")</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>B</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(B, glob_places) + "&deg; o " + convert_degDec(B) + " o " + pre_fns(convert_degToRad(B), glob_places) + " radianes</td>";
				work += "</tr>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Paso #3</strong>: Restar los ángulos conocidos a 180&deg; para encontrar el valor del angulo faltante.</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>C</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>180&deg; - A&deg; - B&deg;</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>C</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>180&deg; - " + pre_fns(A, glob_places) + "&deg; - " + pre_fns(B, glob_places) + "&deg;</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>C</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(C, glob_places) + "&deg; o " + convert_degDec(C) + "  o " + pre_fns(convert_degToRad(C), glob_places) + " radianes</td>";
				work += "</tr>";
				work += "</table>";
				work += "<p>A continuación te presentamos el triángulo calculado.</p>";
				document.getElementById("sumTxt").innerHTML = work;
				$('#clc-sum-row').css('display', 'table-row');
				$('#clc-sum-cell').css('display', 'table-cell');
			}
		}
	}
}

function calc_sas() {
	if ($("#sas").prop("checked")) {
	    v_control=true;
		var c = sn(document.calc.sas_c.value);
		var B = sn(document.calc.sas_B.value);
		var a = sn(document.calc.sas_a.value);
		var b = 0;
		var A = 0;
		var C = 0;
		if (c <= 0) {
			alert("Introduzca un valor positivo para c."); v_control=false;
			document.calc.sas_c.focus();return;
		} else
		if (B <= 0) {
			alert("Introduzca un valor positivo para B."); v_control=false;
			document.calc.sas_B.focus();return;
		} else
		if (a <= 0) {
			alert("Introduzca un valor positivo para a."); v_control=false;
			document.calc.sas_a.focus();return;
		} else
		if (document.calc.deg_rad.selectedIndex == 0 && B > 180) {
			alert("Angulo B debe ser menor a 180 grados."); v_control=false; return;
		} else
		if (document.calc.deg_rad.selectedIndex == 1 && B > Math.PI) {
			alert("Angulo B debe ser menor que " + Math.PI + "."); v_control=false;  return;
		} else {
			var rad_B = B;
			if (document.calc.deg_rad.selectedIndex == 0) {
				rad_B = convert_degToRad(B)
			} else {
				B = convert_radToDeg(B)
			}
			b = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2) - (2 * a * c) * Math.cos(rad_B));
			if (a < c) {
				var sin_A = (Math.sin(rad_B) * a) / b;
				A = Math.asin(sin_A);
				A *= 180 / Math.PI;
				C = 180 - A - B
			} else {
				var sin_C = (Math.sin(rad_B) * c) / b;
				C = Math.asin(sin_C);
				C *= 180 / Math.PI;
				A = 180 - B - C
			}
			var pass = get_results(a, b, c, A, B, C, 1, "SAS");
			if (pass) {
				var cos_B = Math.cos(rad_B);
				var a_sq = Math.pow(a, 2);
				var c_sq = Math.pow(c, 2);
				var ac_sum = a_sq + c_sq;
				var ac_2 = 2 * a * c;
				var ac_2_cos_product = ac_2 * Math.cos(rad_B);
				var b_sq = ac_sum - ac_2_cos_product;
				var b_root = Math.sqrt(b_sq);
				var work = "";
				work += "<table class='cht-tbl'>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Valores conocidos</strong></td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Lado <em>c</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + c + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Angulo <em>B</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + B + "&deg; o " + convert_degDec(B) + " o " + pre_fns(convert_degToRad(B), glob_places) + " radianes</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Lado <em>a</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + a + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Paso #1</strong>: Usar la ley de Cosenos para hayar la longitud del lado <em>b</em>.</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b<sup>2</sup></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>a<sup>2</sup> + c<sup>2</sup> − 2ac cos(B)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b<sup>2</sup></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(" + a + "<sup>2</sup> + " + c + "<sup>2</sup>) − ( 2 x " + a + " x " + c + ") cos(" + B + "&deg;)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b<sup>2</sup></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(" + pre_fns(a_sq, glob_places) + " + " + pre_fns(c_sq, glob_places) + ") − " + pre_fns(ac_2, glob_places) + " x " + pre_fns(cos_B, glob_places) + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b<sup>2</sup></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(ac_sum, glob_places) + " - " + pre_fns(ac_2, glob_places) + " x " + pre_fns(cos_B, glob_places) + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b<sup>2</sup></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(ac_sum, glob_places) + " - " + pre_fns(ac_2_cos_product, glob_places) + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b<sup>2</sup></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(b_sq, glob_places) + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>&radic;" + pre_fns(b_sq, glob_places) + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(b_root, glob_places) + "</td>";
				work += "</tr>";
				if (a < c) {
					work += "<tr class='cht-row-head'>";
					work += "<td colspan='4'><strong>Paso #2</strong>: Ahora que sabemos la longitud del lado <em>b</em>, podemos usar la ley de los Senos para encontrar el más pequeño de los otros dos ángulos. Como el lado <em>a</em> es más pequeño que el lado <em>c</em>, usa la ley de los Senos para encontrar su ángulo opuesto <em>A</em>.</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin A / a</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>sin B / b</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin A / " + a + "</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>sin(" + B + "&deg;) / " + pre_fns(b, glob_places) + "</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin A</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(Math.sin(rad_B), glob_places) + " x " + a + ") / " + pre_fns(b, glob_places) + "</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin A</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(sin_A, glob_places) + "<br />";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>A</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>sin<sup>-1</sup>(" + pre_fns(sin_A, glob_places) + ")</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>A</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(A, glob_places) + "&deg; o " + convert_degDec(A) + " o " + pre_fns(convert_degToRad(A), glob_places) + " radianes</td>";
					work += "</tr>";
					work += "<tr class='cht-row-head'>";
					work += "<td colspan='4'><strong>Paso #3</strong>: Restar los ángulos conocidos a 180&deg; para encontrar el valor del angulo faltante.</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>180&deg; - A&deg; - B&deg;</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>180&deg; - " + pre_fns(A, glob_places) + "&deg; - " + pre_fns(B, glob_places) + "&deg;</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(C, glob_places) + "&deg; o " + convert_degDec(C) + " o " + pre_fns(convert_degToRad(C), glob_places) + " radianes</td>";
					work += "</tr>"
				} else {
					work += "<tr class='cht-row-head'>";
					work += "<td colspan='4'><strong>Paso #2</strong>: Now that we know the length of side <em>b</em> we can use the Law of Sines to find the smaller of the other two angles. Since side <em>c</em> is smaller than side <em>a</em>, use the Law of Sines to find its opposing angle <em>C</em>.</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin C / c</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>sin B / b</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin C / " + c + "</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>sin(" + B + "&deg;) / " + pre_fns(b, glob_places) + "</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(Math.sin(rad_B), glob_places) + " x " + c + ") / " + pre_fns(b, glob_places) + "</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(sin_C, glob_places) + "<br />";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>sin<sup>-1</sup>(" + pre_fns(sin_C, glob_places) + ")</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(C, glob_places) + "&deg; o " + convert_degDec(C) + " o " + pre_fns(convert_degToRad(C), glob_places) + " radianes</td>";
					work += "</tr>";
					work += "<tr class='cht-row-head'>";
					work += "<td colspan='4'><strong>Paso #3</strong>: Restar los ángulos conocidos a 180&deg; para encontrar el valor del angulo faltante.</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>A</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>180&deg; - C&deg; - B&deg;</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>A</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>180&deg; - " + pre_fns(C, glob_places) + "&deg; - " + pre_fns(B, glob_places) + "&deg;</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>A</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(A, glob_places) + "&deg; o " + convert_degDec(A) + " o " + pre_fns(convert_degToRad(A), glob_places) + " radianes</td>";
					work += "</tr>"
				}
				work += "</table>";
				work += "<p>A continuación te presentamos el triángulo calculado.</p>";
				document.getElementById("sumTxt").innerHTML = work;
				$('#clc-sum-row').css('display', 'table-row');
				$('#clc-sum-cell').css('display', 'table-cell');
			}
		}
	}
}

function calc_ssa() {
	if ($("#ssa").prop("checked")) {
	    v_control=true;
		var a = sn(document.calc.ssa_a.value);
		var A = sn(document.calc.ssa_A.value);
		var c = sn(document.calc.ssa_c.value);
		var b = 0;
		var B = 0;
		var C = 0;
		if (a <= 0) {
			alert("Introduzca un valor positivo para el lado a."); v_control=false;
			document.calc.ssa_a.focus();return;
		} else
		if (A <= 0) {
			alert("Introduzca un valor positivo para A."); v_control=false;
			document.calc.ssa_A.focus();return;
		} else
		if (c <= 0) {
			alert("Introduzca un valor positivo para el lado c."); v_control=false;
			document.calc.ssa_c.focus();return;
		} else
		if (document.calc.deg_rad.selectedIndex == 0 && A > 180) {
			alert("Angulo A debe ser menor que 180 degrees.");v_control=false; return; 
		} else
		if (document.calc.deg_rad.selectedIndex == 1 && A > Math.PI) {
			alert("Angulo A debe ser menor que " + Math.PI + "."); v_control=false; return;
		} else {
			var rad_A = A;
			if (document.calc.deg_rad.selectedIndex == 0) {
				rad_A = convert_degToRad(A)
			} else {
				A = convert_radToDeg(A)
			}
			var sin_A = Math.sin(rad_A);
			var sin_C = (c * sin_A) / a;
			C = Math.asin(sin_C);
			C *= 180 / Math.PI;
			B = 180 - A - C;
			var C_2 = 180 - C;
			var test_for_sol_2 = A + C_2;
			var num_solutions = 1;
			if (isNaN(C)) {
				num_solutions = 0
			} else
			if (test_for_sol_2 <= 180) {
				num_solutions = 2
			}
			document.getElementById("solution_2_txt").innerHTML = "";
			if (num_solutions == 0) {
				alert("Lo sentimos. No es posible encontrar una solucion para los valores introducidos.");  v_control=false; return;
			} else {
				var rad_B = B;
				rad_B = convert_degToRad(B);
				b = (Math.sin(rad_B) * a) / sin_A;
				var pass_1 = get_results(a, b, c, A, B, C, 1, "SSA");
				if (pass_1) {
					var work = "";
					work += "<table class='cht-tbl'>";
					work += "<tr class='cht-row-head'>";
					work += "<td colspan='4'><strong>Valores conocidos</strong></td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>Lado <em>a</em></td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + a + "</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>Angulo <em>A</em></td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + A + "&deg; o " + convert_degDec(A) + " o " + pre_fns(convert_degToRad(A), glob_places) + " radianes</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>Lado <em>c</em></td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + c + "</td>";
					work += "</tr>";
					work += "<tr class='cht-row-head'>";
					work += "<td colspan='4'><strong>Paso #1</strong>: Usar la ley de Senos para encontrar el angulo <em>C</em>.</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin C / c</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>sin A / a</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin C / " + c + "</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>sin(" + A + "&deg;) / " + pre_fns(a, glob_places) + "</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(Math.sin(rad_A), glob_places) + " x " + c + ") / " + pre_fns(a, glob_places) + "</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>sin C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(sin_C, glob_places) + "<br />";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>sin<sup>-1</sup>(" + pre_fns(sin_C, glob_places) + ")</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>C</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(C, glob_places) + "&deg; o " + convert_degDec(A) + " o " + pre_fns(convert_degToRad(C), glob_places) + " radianes</td>";
					work += "</tr>";
					work += "<tr class='cht-row-head'>";
					work += "<td colspan='4'><strong>Paso #2</strong>: Restar los ángulos conocidos a 180&deg; para encontrar el valor del angulo faltante.</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>B</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>180&deg; - C&deg; - A&deg;</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>B</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>180&deg; - " + pre_fns(C, glob_places) + "&deg; - " + pre_fns(A, glob_places) + "&deg;</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>B</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(B, glob_places) + "&deg; o " + convert_degDec(B) + " o " + pre_fns(convert_degToRad(B), glob_places) + " radianes</td>";
					work += "</tr>";
					work += "<tr class='cht-row-head'>";
					work += "<td colspan='4'><strong>Paso #3</strong>: Usar la ley de Senos para encontrar el lado <em>b</em>.</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>b / sin(B)</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>a / sin(A)</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>b / sin(" + pre_fns(B, glob_places) + "&deg;)</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(a, glob_places) + " / sin(" + A + "&deg;)</td>";
					work += "</tr>";
					work += "<tr class='cht-row-even'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>b</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>(sin(" + pre_fns(B, glob_places) + "&deg;) x " + a + ") / sin(" + A + "&deg;)</td>";
					work += "</tr>";
					work += "<tr class='cht-row-odd'>";
					work += "<td style='width: 5px;'>&nbsp;</td>";
					work += "<td style='text-align: right;'>b</td>";
					work += "<td class='ctr'>=</td>";
					work += "<td>" + pre_fns(b, glob_places) + "</td>";
					work += "</tr>";
					work += "</table>";
					if (num_solutions == 2) {
						var B_2 = 180 - A - C_2;
						var rad_B_2 = B_2;
						rad_B_2 = convert_degToRad(B_2);
						var b_2 = (Math.sin(rad_B_2) * a) / sin_A;
						var pass_2 = get_results(a, b_2, c, A, B_2, C_2, 2, "SSA");
						if (pass_2) {
							$(".sol_lbl").css("width", "25%");
							$(".sol_1").css("width", "40%");
							$(".sol_2").css("width", "35%");
							$(".sol_2").css("padding", "2px");
							document.getElementById("solution_2_txt").innerHTML = "2nd Solution";
							work += "<p>According to my calculations, there is a second solution to the entered SSA triangle. Here are the steps I took to solve the second solution.</p>";
							work += "<table class='cht-tbl'>";
							work += "<tr class='cht-row-head'>";
							work += "<td colspan='4'><strong>Valores conocidos</strong></td>";
							work += "</tr>";
							work += "<tr class='cht-row-even'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>Lado <em>a</em></td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>" + a + "</td>";
							work += "</tr>";
							work += "<tr class='cht-row-odd'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>Angulo <em>A</em></td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>" + A + "&deg; o " + convert_degDec(A) + " o " + pre_fns(convert_degToRad(A), glob_places) + " radianes</td>";
							work += "</tr>";
							work += "<tr class='cht-row-even'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>Lado <em>c</em></td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>" + c + "</td>";
							work += "</tr>";
							work += "<tr class='cht-row-head'>";
							work += "<td colspan='4'><strong>Paso #1</strong>: Usar la ley de Senos para encontrar el angulo <em>C</em>.</td>";
							work += "</tr>";
							work += "<tr class='cht-row-even'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>sin C / c</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>sin A / a</td>";
							work += "</tr>";
							work += "<tr class='cht-row-odd'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>sin C / " + c + "</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>sin(" + A + "&deg;) / " + pre_fns(a, glob_places) + "</td>";
							work += "</tr>";
							work += "<tr class='cht-row-even'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>sin C</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>" + pre_fns(Math.sin(rad_A), glob_places) + " x " + c + ") / " + pre_fns(a, glob_places) + "</td>";
							work += "</tr>";
							work += "<tr class='cht-row-odd'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>sin C</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>" + pre_fns(sin_C, glob_places) + "<br />";
							work += "</tr>";
							work += "<tr class='cht-row-even'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>C</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>sin<sup>-1</sup>(" + pre_fns(sin_C, glob_places) + ")</td>";
							work += "</tr>";
							work += "<tr class='cht-row-odd'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>C</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>" + pre_fns(C_2, glob_places) + "&deg; o " + convert_degDec(C_2) + " o " + pre_fns(convert_degToRad(C_2), glob_places) + " radianes</td>";
							work += "</tr>";
							work += "<tr class='cht-row-head'>";
							work += "<td colspan='4'><strong>Paso #2</strong>: Restar los ángulos conocidos a 180&deg; para encontrar el valor del angulo faltante.</td>";
							work += "</tr>";
							work += "<tr class='cht-row-even'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>B</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>180&deg; - C&deg; - A&deg;</td>";
							work += "</tr>";
							work += "<tr class='cht-row-odd'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>B</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>180&deg; - " + pre_fns(C_2, glob_places) + "&deg; - " + pre_fns(A, glob_places) + "&deg;</td>";
							work += "</tr>";
							work += "<tr class='cht-row-even'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>B</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>" + pre_fns(B_2, glob_places) + "&deg; o " + convert_degDec(B_2) + " o " + pre_fns(convert_degToRad(B_2), glob_places) + " radianes</td>";
							work += "</tr>";
							work += "<tr class='cht-row-head'>";
							work += "<td colspan='4'><strong>Paso #3</strong>: Usar la ley de Senos para encontrar el lado <em>b</em>.</td>";
							work += "</tr>";
							work += "<tr class='cht-row-even'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>b / sin(B)</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>a / sin(A)</td>";
							work += "</tr>";
							work += "<tr class='cht-row-odd'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>a / sin(" + pre_fns(B_2, glob_places) + "&deg;)</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>" + pre_fns(a, glob_places) + " / sin(" + A + "&deg;)</td>";
							work += "</tr>";
							work += "<tr class='cht-row-even'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>b</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>(sin(" + pre_fns(B_2, glob_places) + "&deg;) x " + a + ") / sin(" + A + "&deg;)</td>";
							work += "</tr>";
							work += "<tr class='cht-row-odd'>";
							work += "<td style='width: 5px;'>&nbsp;</td>";
							work += "<td style='text-align: right;'>b</td>";
							work += "<td class='ctr'>=</td>";
							work += "<td>" + pre_fns(b_2, glob_places) + "</td>";
							work += "</tr>";
							work += "</table>"
						}
					}
					work += "<p>A continuación te presentamos el triángulo calculado.</p>";
					document.getElementById("sumTxt").innerHTML = work;
					$('#clc-sum-row').css('display', 'table-row');
					$('#clc-sum-cell').css('display', 'table-cell');
				}
			}
		}
	}
}

function calc_asa() {
	if ($("#asa").prop("checked")) {
	    v_control=true;
		var A = sn(document.calc.asa_A.value);
		var c = sn(document.calc.asa_c.value);
		var B = sn(document.calc.asa_B.value);
		var a = 0;
		var b = 0;
		var C = 0;
		var sum_angles = Number(A) + Number(B);
		if (A <= 0) {
			alert("Por favor introduce un valor positivo para A.");  v_control=false;
			document.calc.asa_A.focus(); return;
		} else
		if (c <= 0) {
			alert("Por favor introduce un valor positivo para c.");  v_control=false;
			document.calc.asa_c.focus(); return;
		} else
		if (B <= 0) {
			alert("Por favor introduce un valor positivo para B.");  v_control=false;
			document.calc.asa_B.focus(); return;
		} else
		if (document.calc.deg_rad.selectedIndex == 0 && sum_angles > 180) {
			alert("La suma de A y B debe ser menor que 180 grados.");  v_control=false; return;
		} else
		if (document.calc.deg_rad.selectedIndex == 1 && sum_angles > Math.PI) {
			alert("La suma de A y B debe ser menor que " + Math.PI + ".");  v_control=false; return;
		} else {
			if (document.calc.deg_rad.selectedIndex == 1) {
				A = convert_radToDeg(A);
				B = convert_radToDeg(B)
			}
			C = 180 - A - B;
			if (document.calc.deg_rad.selectedIndex == 1) {
				A = convert_degToRad(A);
				B = convert_degToRad(B);
				C = convert_degToRad(C)
			}
			var rad_C = C;
			if (document.calc.deg_rad.selectedIndex == 0) {
				rad_C = convert_degToRad(C)
			}
			var rad_B = B;
			if (document.calc.deg_rad.selectedIndex == 0) {
				rad_B = convert_degToRad(B)
			}
			var sin_B = Math.sin(rad_B);
			var rad_A = A;
			if (document.calc.deg_rad.selectedIndex == 0) {
				rad_A = convert_degToRad(A)
			}
			a = (c * Math.sin(rad_A)) / Math.sin(rad_C);
			b = (c * Math.sin(rad_B)) / Math.sin(rad_C);
			if (document.calc.deg_rad.selectedIndex == 1) {
				A = convert_radToDeg(A);
				B = convert_radToDeg(B);
				C = convert_radToDeg(C)
			}
			var pass = get_results(a, b, c, A, B, C, 1, "ASA");
			if (pass) {
				var work = "";
				work += "<table class='cht-tbl'>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Valores conocidos</strong></td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Angulo <em>A</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + A + "&deg; o " + convert_degDec(A) + " o " + pre_fns(convert_degToRad(A), glob_places) + " radianes</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Lado <em>c</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + c + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Angulo <em>B</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + B + "&deg; o " + convert_degDec(B) + " o " + pre_fns(convert_degToRad(B), glob_places) + " radianes</td>";
				work += "</tr>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Paso #1</strong>: Encontrar el angulo <em>C</em> restando a 180&deg; los otros dos angulos.</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>C</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>180&deg; - A&deg; - B&deg;</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>C</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>180&deg; - " + pre_fns(A, glob_places) + "&deg; - " + pre_fns(B, glob_places) + "&deg;</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>C</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(C, glob_places) + "&deg; o " + convert_degDec(C) + " o " + pre_fns(convert_degToRad(C), glob_places) + " radianes</td>";
				work += "</tr>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Paso #2</strong>: Usar la ley de Senos para encontrar el lado <em>a</em>.</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>a / sin(A)</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>c / sin(C)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>a / sin(" + pre_fns(A, glob_places) + "&deg;)</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(c, glob_places) + " / sin(" + C + "&deg;)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>a</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(sin(" + pre_fns(A, glob_places) + "&deg;) x " + c + ") / sin(" + C + "&deg;)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>a</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(a, glob_places) + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Paso #3</strong>: Usar la ley de Senos para encontrar el lado <em>b</em>.</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b / sin(B)</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>c / sin(C)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b / sin(" + pre_fns(B, glob_places) + "&deg;)</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(c, glob_places) + " / sin(" + C + "&deg;)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(sin(" + pre_fns(B, glob_places) + "&deg;) x " + c + ") / sin(" + C + "&deg;)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(b, glob_places) + "</td>";
				work += "</tr>";
				work += "</table>";
				work += "<p>A continuación te presentamos el triángulo calculado.</p>";
				document.getElementById("sumTxt").innerHTML = work;
				$('#clc-sum-row').css('display', 'table-row');
				$('#clc-sum-cell').css('display', 'table-cell');
			}
		}
	}
}

function calc_aas() {
	if ($("#aas").prop("checked")) {
	    v_control=true;
		var A = sn(document.calc.aas_A.value);
		var B = sn(document.calc.aas_B.value);
		var a = sn(document.calc.aas_a.value);
		var b = 0;
		var c = 0;
		var C = 0;
		var sum_angles = Number(A) + Number(B);
		if (A <= 0) {
			alert("Introduce un valor positivo para A."); v_control=false;
			document.calc.aas_A.focus(); return;
		} else
		if (B <= 0) {
			alert("Introduce un valor positivo para B."); v_control=false;
			document.calc.aas_B.focus(); return;
		} else
		if (a <= 0) {
			alert("Introduce un valor positivo para a."); v_control=false;
			document.calc.aas_a.focus(); return;
		} else
		if (document.calc.deg_rad.selectedIndex == 0 && sum_angles > 180) {
			alert("La suma de A y B debe ser menor que 180 grados."); v_control=false; return;
		} else
		if (document.calc.deg_rad.selectedIndex == 1 && sum_angles > Math.PI) {
			alert("La suma de A y B debe ser menor que " + Math.PI + ".");  v_control=false; return;
		} else {
			if (document.calc.deg_rad.selectedIndex == 1) {
				A = convert_radToDeg(A);
				B = convert_radToDeg(B)
			}
			C = 180 - A - B;
			if (document.calc.deg_rad.selectedIndex == 1) {
				A = convert_degToRad(A);
				B = convert_degToRad(B);
				C = convert_degToRad(C)
			}
			var rad_A = A;
			if (document.calc.deg_rad.selectedIndex == 0) {
				rad_A = convert_degToRad(A)
			}
			var rad_B = B;
			if (document.calc.deg_rad.selectedIndex == 0) {
				rad_B = convert_degToRad(B)
			}
			var rad_C = C;
			if (document.calc.deg_rad.selectedIndex == 0) {
				rad_C = convert_degToRad(C)
			}
			b = (a * Math.sin(rad_B)) / Math.sin(rad_A);
			c = (a * Math.sin(rad_C)) / Math.sin(rad_A);
			if (document.calc.deg_rad.selectedIndex == 1) {
				A = convert_radToDeg(A);
				B = convert_radToDeg(B);
				C = convert_radToDeg(C)
			}
			var pass = get_results(a, b, c, A, B, C, 1, "AAS");
			if (pass) {
				var work = "";
				work += "<table class='cht-tbl'>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Valores conocidos</strong></td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Angulo <em>A</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(A, glob_places) + "&deg; o " + convert_degDec(A) + " o " + pre_fns(convert_degToRad(A), glob_places) + " radianes</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Angulo <em>B</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(B, glob_places) + "&deg o " + convert_degDec(B) + " o " + pre_fns(convert_degToRad(B), glob_places) + " radianes</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>Lado <em>a</em></td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + a + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Paso #1</strong>: Encontrar el angulo <em>C</em> restando a 180&deg; los otros dos angulos.</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>C</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>180&deg; - A&deg; - B&deg;</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>C</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>180&deg; - " + pre_fns(A, glob_places) + "&deg; - " + pre_fns(B, glob_places) + "&deg;</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>C</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(C, glob_places) + "&deg; o " + convert_degDec(C) + " o " + pre_fns(convert_degToRad(C), glob_places) + " radianes</td>";
				work += "</tr>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Paso #2</strong>: Usar la ley de Senos para encontrar el lado <em>b</em>.</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b / sin(B)</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>a / sin(A)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b / sin(" + pre_fns(B, glob_places) + "&deg;)</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(a, glob_places) + " / sin(" + pre_fns(A, glob_places) + "&deg;)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(sin(" + pre_fns(B, glob_places) + "&deg;) x " + pre_fns(a, glob_places) + ") / sin(" + pre_fns(A, glob_places) + "&deg;)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>b</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(b, glob_places) + "</td>";
				work += "</tr>";
				work += "<tr class='cht-row-head'>";
				work += "<td colspan='4'><strong>Paso #3</strong>: Usar la ley de Senos para encontrar el lado <em>c</em>.</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>c / sin(C)</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>a / sin(A)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>c / sin(" + pre_fns(C, glob_places) + "&deg;)</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(a, glob_places) + " / sin(" + pre_fns(A, glob_places) + "&deg;)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-even'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>c</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>(sin(" + pre_fns(C, glob_places) + "&deg;) x " + pre_fns(a, glob_places) + ") / sin(" + pre_fns(A, glob_places) + "&deg;)</td>";
				work += "</tr>";
				work += "<tr class='cht-row-odd'>";
				work += "<td style='width: 5px;'>&nbsp;</td>";
				work += "<td style='text-align: right;'>c</td>";
				work += "<td class='ctr'>=</td>";
				work += "<td>" + pre_fns(c, glob_places) + "</td>";
				work += "</tr>";
				work += "</table>";
				work += "<p>A continuación te presentamos el triángulo calculado.</p>";
				document.getElementById("sumTxt").innerHTML = work;
				$('#clc-sum-row').css('display', 'table-row');
				$('#clc-sum-cell').css('display', 'table-cell');
			}
		}
	}
}

function get_results(a, b, c, A, B, C, col, type) {
	if (a + b <= c) {
		alert("This is not a valid triangle, since " + a + " + " + b + " cannot be less than or equal to " + c + "."); v_control=false;
		return false
	} else {
		document.getElementById("side_a_" + col + "").innerHTML = pre_fns(a, glob_places);
		document.getElementById("side_b_" + col + "").innerHTML = pre_fns(b, glob_places);
		document.getElementById("side_c_" + col + "").innerHTML = pre_fns(c, glob_places);
		if (document.calc.deg_rad.selectedIndex == 0) {
			document.getElementById("angle_A_" + col + "").innerHTML = pre_fns(A, glob_places) + "&deg;";
			document.getElementById("angle_B_" + col + "").innerHTML = pre_fns(B, glob_places) + "&deg;";
			document.getElementById("angle_C_" + col + "").innerHTML = pre_fns(C, glob_places) + "&deg;"
		} else {
			document.getElementById("angle_A_" + col + "").innerHTML = pre_fns(convert_degToRad(A), glob_places) + " rad";
			document.getElementById("angle_B_" + col + "").innerHTML = pre_fns(convert_degToRad(B), glob_places) + " rad";
			document.getElementById("angle_C_" + col + "").innerHTML = pre_fns(convert_degToRad(C), glob_places) + " rad"
		}
		var v_perimeter = a + b + c;
		document.getElementById("perimeter_" + col + "").innerHTML = fns(v_perimeter, glob_places, 0, 0, 0);
		var v_semi_perimeter = v_perimeter / 2;
		document.getElementById("semi_perimeter_" + col + "").innerHTML = fns(v_semi_perimeter, glob_places, 0, 0, 0);
		var v_area = Math.sqrt(v_semi_perimeter * (v_semi_perimeter - a) * (v_semi_perimeter - b) * (v_semi_perimeter - c));
		document.getElementById("area_" + col + "").innerHTML = fns(v_area, glob_places, 0, 0, 0);
		var v_inscribed = Math.sqrt((v_semi_perimeter - Number(a)) * (v_semi_perimeter - Number(b)) * (v_semi_perimeter - Number(c)) / v_semi_perimeter);
		document.getElementById("inscribed_" + col + "").innerHTML = fns(v_inscribed, glob_places, 0, 0, 0);
		var v_circumscribed = (a * b * c) / (4 * v_area);
		document.getElementById("circumscribed_" + col + "").innerHTML = fns(v_circumscribed, glob_places, 0, 0, 0);
		var v_median_a = Math.sqrt(((2 * Math.pow(b, 2)) + (2 * Math.pow(c, 2)) - Math.pow(a, 2)) / 4);
		document.getElementById("median_a_" + col + "").innerHTML = fns(v_median_a, glob_places, 0, 0, 0);
		var v_median_b = Math.sqrt(((2 * Math.pow(a, 2)) + (2 * Math.pow(c, 2)) - Math.pow(b, 2)) / 4);
		document.getElementById("median_b_" + col + "").innerHTML = fns(v_median_b, glob_places, 0, 0, 0);
		var v_median_c = Math.sqrt(((2 * Math.pow(a, 2)) + (2 * Math.pow(b, 2)) - Math.pow(c, 2)) / 4);
		document.getElementById("median_c_" + col + "").innerHTML = fns(v_median_c, glob_places, 0, 0, 0);
		var v_height_a = 2 * (v_area / a);
		document.getElementById("height_a_" + col + "").innerHTML = fns(v_height_a, glob_places, 0, 0, 0);
		var v_height_b = 2 * (v_area / b);
		document.getElementById("height_b_" + col + "").innerHTML = fns(v_height_b, glob_places, 0, 0, 0);
		var v_height_c = 2 * (v_area / c);
		document.getElementById("height_c_" + col + "").innerHTML = fns(v_height_c, glob_places, 0, 0, 0);
		var a_sq = Math.pow(a, 2);
		var b_sq = Math.pow(b, 2);
		var ab_diff = Math.abs(a_sq - b_sq);
		var c_a = (Math.pow(b, 2) - Math.pow(a, 2) + Math.pow(c, 2)) / (2 * c);
		var c_h = Math.sqrt(b * b - c_a * c_a);
		var c_x2 = 0 + (c_a * (c - 0)) / c;
		var c_y2 = 0 + (c_a * (0 - 0)) / c;
		var c_x = c_x2 + (c_h * (0 - 0) / c);
		var c_y = c_y2 + (c_h * (c - 0) / c);
		document.getElementById("cood_A_" + col + "").innerHTML = "[0 , 0]";
		document.getElementById("cood_B_" + col + "").innerHTML = "[" + fns(c, glob_places, 0, 0, 0) + " , 0]";
		document.getElementById("cood_C_" + col + "").innerHTML = "[" + fns(c_x, glob_places, 0, 0, 0) + " , " + fns(c_y, glob_places, 0, 0, 0) + "]";
		var centroid_x = 1 / 3 * (c + c_x);
		var centroid_y = 1 / 3 * (c_y);
		document.getElementById("cood_centroid_" + col + "").innerHTML = "[" + fns(centroid_x, glob_places, 0, 0, 0) + " , " + fns(centroid_y, glob_places, 0, 0, 0) + "]";
		var circum_d = 2 * (c * c_y);
		var circum_x = (c_y * Math.pow(c, 2)) / circum_d;
		var circum_y = ((c * (Math.pow(c_x, 2) + Math.pow(c_y, 2))) - (c_x * (Math.pow(c, 2)))) / circum_d;
		document.getElementById("cood_circum_" + col + "").innerHTML = "[" + fns(circum_x, glob_places, 0, 0, 0) + " , " + fns(circum_y, glob_places, 0, 0, 0) + "]";
		var classification = "";
		if (A > 90 || B > 90 || C > 90) {
			classification += "Obtusangulo / "
		} else
		if (A == 90 || B == 90 || C == 90) {
			classification += "Rectangulo / "
		} else {
			classification += "Acutangulo / "
		}
		if (v_height_a == v_height_b && v_height_b == v_height_c) {
			classification += "Equilatero "
		}
		if ((v_height_a == v_height_b && v_height_a != c) || (v_height_a == v_height_c && v_height_a != b) || (v_height_b == v_height_c && v_height_a != b)) {
			classification += "Isosceles "
		}
		if (v_height_a != v_height_b && v_height_a != v_height_c && v_height_b != v_height_c) {
			classification += "Escaleno "
		}
		document.getElementById("triangle_class_" + col + "").innerHTML = classification;
		if (col == 1) {
			draw_triangle("canvas1", a, b, c, 0, 0, c, 0, c_x, c_y, A, B, C, type);
			$("#canvas1").css("display", "block")
		} else
		if (col == 2) {
			draw_triangle("canvas2", a, b, c, 0, 0, c, 0, c_x, c_y, A, B, C, type);
			$("#canvas2").css("display", "block")
		}
	}
	return true;
}
var forms_ar = ["sss", "sas", "ssa", "asa", "aas"];

function change_find(form_lbl) {
	for (var i = 0; i < forms_ar.length; i++) {
		if (form_lbl == forms_ar[i]) {
			document.getElementById("form_" + forms_ar[i]).style.display = "table-row-group"
		} else {
			document.getElementById("form_" + forms_ar[i]).style.display = "none"
		}
	}
	clear_results(document.calc)
}

function draw_triangle(canvas_id, a_len, b_len, c_len, Ax, Ay, Bx, By, Cx, Cy, A, B, C, type) {
    
	var theCanvas = document.getElementById(canvas_id);
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {
			var canvas_width = ctx.canvas.width;
			var canvas_height = ctx.canvas.height;
			var draw_width = canvas_width - 30;
			var draw_height = canvas_height - 30;
			var padding = 15;
			ctx.clearRect(0, 0, canvas_width, canvas_height);
			var max_line_len = a_len;
			if (b_len > max_line_len) {
				max_line_len = b_len
			}
			if (c_len > max_line_len) {
				max_line_len = c_len
			}
			var scale = 0;
			if (max_line_len > draw_width) {
				scale = Math.floor(draw_width / max_line_len);
				Cx = Math.round(Cx * scale);
				Cy = Math.round(Cy * scale);
				Bx = Math.round(Bx * scale)
			}
			if (max_line_len < (draw_width / 2)) {
				scale = Math.floor(draw_width / max_line_len);
				Cx = Math.round(Cx * scale * .95);
				Cy = Math.round(Cy * scale * .95);
				Bx = Math.round(Bx * scale * .95)
			}
			var pnt_1_x = Math.round((canvas_width / 2) - (Bx / 2));
			if (Cx < 0) {
				pnt_1_x += (Cx / -2)
			}
			if (Cx > Bx) {
				pnt_1_x -= ((Cx - Bx) / 2)
			}
			var pnt_1_y = Math.round((canvas_height / 2) + (Cy / 2));
			var pnt_2_x = pnt_1_x + Bx;
			var pnt_2_y = pnt_1_y;
			var pnt_3_x = pnt_1_x + Cx;
			var pnt_3_y = pnt_2_y - Cy;
			var slope_a = (pnt_2_y - pnt_3_y) / (pnt_2_x - pnt_3_x);
			var a_x = pnt_3_x + ((pnt_2_x - pnt_3_x) / 2);
			var a_y_mult = slope_a * (-1 * pnt_3_x);
			var a_y_int = a_y_mult + pnt_3_y;
			var a_y = Math.round((slope_a * a_x) + a_y_int);
			var slope_b = (pnt_1_y - pnt_3_y) / (pnt_1_x - pnt_3_x);
			var b_x = pnt_1_x + ((pnt_3_x - pnt_1_x) / 2);
			var b_y_mult = slope_b * (-1 * pnt_3_x);
			var b_y_int = b_y_mult + pnt_3_y;
			var b_y = Math.round((slope_b * b_x) + b_y_int);
			var txt_a_x = a_x;
			var txt_a_y = a_y;
			var txt_b_x = b_x;
			var txt_b_y = b_y;
			var txt_c_x = Math.round(pnt_1_x + (Bx / 2));
			var txt_c_y = pnt_1_y + 5;
			ctx.strokeStyle = "grey";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.lineJoin = "miter";
			ctx.moveTo(pnt_1_x, pnt_1_y);
			ctx.lineTo(pnt_2_x, pnt_2_y);
			ctx.lineTo(pnt_3_x, pnt_3_y);
			ctx.closePath();
			ctx.stroke();
			ctx.strokeStyle = "red";
			ctx.lineWidth = 1;
			var rad_A = (Math.PI / 180) * A;
			var rad_B = (Math.PI / 180) * B;
			var rad_C = (Math.PI / 180) * C;
			var start_arc = Math.PI + (Math.PI - rad_A);
			var end_arc = 1.99 * Math.PI;
			ctx.beginPath();
			ctx.arc(pnt_1_x, pnt_1_y, 30, start_arc, end_arc, false);
			ctx.stroke();
			start_arc = Math.PI;
			end_arc = Math.PI + rad_B;
			ctx.strokeStyle = "green";
			ctx.beginPath();
			ctx.arc(pnt_2_x, pnt_2_y, 30, start_arc, end_arc, false);
			ctx.stroke();
			var c_start = 180 - 90 - (90 - B);
			var rad_c_start = (Math.PI / 180) * c_start;
			start_arc = rad_c_start;
			end_arc = rad_c_start + rad_C;
			ctx.strokeStyle = "blue";
			ctx.beginPath();
			ctx.arc(pnt_3_x, pnt_3_y, 30, start_arc, end_arc, false);
			ctx.stroke();
			ctx.font = "10pt Arial";
			ctx.strokeStyle = "#eee";
			ctx.textAlign = "center";
			ctx.textBaseline = "bottom";
			ctx.save();
			ctx.translate(txt_a_x, txt_a_y);
			ctx.rotate(rad_B);
			ctx.fillText(pre_fns(a_len, 1), 0, 0);
			ctx.restore();
			ctx.save();
			ctx.textAlign = "center";
			ctx.textBaseline = "bottom";
			ctx.translate(txt_b_x, txt_b_y);
			ctx.rotate(-rad_A);
			ctx.fillText(pre_fns(b_len, 1), 0, 0);
			ctx.restore();
			ctx.save();
			ctx.textAlign = "center";
			ctx.textBaseline = "hanging";
			ctx.fillText(pre_fns(c_len, 1), txt_c_x, txt_c_y);
			ctx.restore();
			ctx.save();
			ctx.fillStyle = "red";
			ctx.font = "8pt Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.translate(pnt_1_x, pnt_1_y + 8);
			ctx.fillText(pre_fns(A, 1) + "°", 0, 0);
			ctx.restore();
			ctx.save();
			ctx.fillStyle = "green";
			ctx.font = "8pt Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.translate(pnt_2_x, pnt_2_y + 8);
			ctx.fillText(pre_fns(B, 1) + "°", 0, 0);
			ctx.restore();
			ctx.save();
			ctx.fillStyle = "blue";
			ctx.font = "8pt Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.translate(pnt_3_x, pnt_3_y - 8);
			ctx.fillText(pre_fns(C, 1) + "°", 0, 0);
			ctx.restore();
			ctx.fillStyle = "#000000";
			ctx.font = "12pt Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			if (canvas_id == "canvas1") {
				ctx.fillText(" Solucion", canvas_width / 2, 10)
			} else {
				ctx.fillText(" Solucion #2", canvas_width / 2, 10)
			}
			mostrar();
		}
	}
}

function clear_results(form) {
	$(".sol_lbl").css("width", "50%");
	$(".sol_1").css("width", "50%");
	$(".sol_2").css("width", "0");
	$(".sol_2").css("padding", "0");
	document.getElementById("triangle_class_1").innerHTML = "";
	document.getElementById("side_a_1").innerHTML = "";
	document.getElementById("side_b_1").innerHTML = "";
	document.getElementById("side_c_1").innerHTML = "";
	document.getElementById("angle_A_1").innerHTML = "";
	document.getElementById("angle_B_1").innerHTML = "";
	document.getElementById("angle_C_1").innerHTML = "";
	document.getElementById("perimeter_1").innerHTML = "";
	document.getElementById("semi_perimeter_1").innerHTML = "";
	document.getElementById("area_1").innerHTML = "";
	document.getElementById("inscribed_1").innerHTML = "";
	document.getElementById("circumscribed_1").innerHTML = "";
	document.getElementById("median_a_1").innerHTML = "";
	document.getElementById("median_b_1").innerHTML = "";
	document.getElementById("median_c_1").innerHTML = "";
	document.getElementById("height_a_1").innerHTML = "";
	document.getElementById("height_b_1").innerHTML = "";
	document.getElementById("height_c_1").innerHTML = "";
	document.getElementById("cood_A_1").innerHTML = "";
	document.getElementById("cood_B_1").innerHTML = "";
	document.getElementById("cood_C_1").innerHTML = "";
	document.getElementById("cood_centroid_1").innerHTML = "";
	document.getElementById("cood_circum_1").innerHTML = "";
	document.getElementById("solution_2_txt").innerHTML = "";
	document.getElementById("triangle_class_2").innerHTML = "";
	document.getElementById("side_a_2").innerHTML = "";
	document.getElementById("side_b_2").innerHTML = "";
	document.getElementById("side_c_2").innerHTML = "";
	document.getElementById("angle_A_2").innerHTML = "";
	document.getElementById("angle_B_2").innerHTML = "";
	document.getElementById("angle_C_2").innerHTML = "";
	document.getElementById("perimeter_2").innerHTML = "";
	document.getElementById("semi_perimeter_2").innerHTML = "";
	document.getElementById("area_2").innerHTML = "";
	document.getElementById("inscribed_2").innerHTML = "";
	document.getElementById("circumscribed_2").innerHTML = "";
	document.getElementById("median_a_2").innerHTML = "";
	document.getElementById("median_b_2").innerHTML = "";
	document.getElementById("median_c_2").innerHTML = "";
	document.getElementById("height_a_2").innerHTML = "";
	document.getElementById("height_b_2").innerHTML = "";
	document.getElementById("height_c_2").innerHTML = "";
	document.getElementById("cood_A_2").innerHTML = "";
	document.getElementById("cood_B_2").innerHTML = "";
	document.getElementById("cood_C_2").innerHTML = "";
	document.getElementById("cood_centroid_2").innerHTML = "";
	document.getElementById("cood_circum_2").innerHTML = "";
	$('#clc-sum-row').css('display', 'none');
	$('#clc-sum-cell').css('display', 'none');
	resize_panel();
	document.getElementById("sumTxt").innerHTML = "";
	document.getElementById("sumTbl").innerHTML = "";
	var canvas_width = 0;
	var canvas_height = 0;
	var theCanvas = document.getElementById("canvas1");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if (ctx) {
			canvas_width = ctx.canvas.width;
			canvas_height = ctx.canvas.height;
			ctx.clearRect(0, 0, canvas_width, canvas_height)
		}
	}
	theCanvas = document.getElementById("canvas2");
	if (theCanvas && theCanvas.getContext) {
		var ctx_2 = theCanvas.getContext("2d");
		if (ctx_2) {
			canvas_width = ctx_2.canvas.width;
			canvas_height = ctx_2.canvas.height;
			ctx_2.clearRect(0, 0, canvas_width, canvas_height)
		}
	}
	$("#canvas1").css("display", "none");
	$("#canvas2").css("display", "none")
}

function reset_calc(form) {
	document.getElementById("sss").checked = true;
	change_find("sss");
	glob_calc_reset();
	change_deg_rad(document.calc);
	scroll_to_id("calc-table")
}

function calc_ready_function() {
	$(".sol_2").css("width", "0");
	$(".sol_2").css("padding", "0")
}
function mostrar() {
    if (v_control){
  document.getElementById("res_").style.display = "block";
  document.getElementById("main-content").style.display = "none";}
  else{v_control=true;}
}
function ocultar() {
  document.getElementById("res_").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}
