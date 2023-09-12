function validarMonto() {
    var monto = parseFloat(document.getElementById('monto').value);
    var propina = parseFloat(document.getElementById('propina').value);
    
    var saldo = monto * (propina / 100);
    var saldoi = saldo + monto;
    
    alert('Saldo a pagar: $' + saldoi + ' pesos');
}
