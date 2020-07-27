function cals() {

var bill = $('#bill').val();
var percen = $('#percen').val();
var tip = bill * (percen/100);
var total = Number(bill) + tip;  

// injecting value 

$('#tip').val(tip.toFixed(2));
$('#total').val(total.toFixed(2));

// need to add return false to stop loading on new page

return false;
}

// submiting our function to the form

$('#calculator').submit(cals);
