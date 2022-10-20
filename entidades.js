function calcular() {
    var co = document.getElementById('co').value;
    var ca = document.getElementById('ca').value;

    hipotenusa = (co * co) + (ca * ca);
    hipotenusa = Math.sqrt(hipotenusa).toFixed(2);;

    beta = Math.asin(ca / hipotenusa);
    beta = (180 * beta / Math.PI).toFixed(2);

    alfa = Math.asin(co / hipotenusa);
    alfa = (180 * alfa / Math.PI).toFixed(2);

    s_alfa = co / hipotenusa;
    c_alfa = ca / hipotenusa;
    t_alfa = co / ca;

    document.getElementById('hipo').value = hipotenusa;
    document.getElementById('beta').value = beta;
    document.getElementById('alfa').value = alfa;
    document.getElementById('salfa').value = s_alfa;
    document.getElementById('calfa').value = c_alfa;
    document.getElementById('talfa').value = t_alfa;
}