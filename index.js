$(document).ready(function(){
	const barang = {
		"extrajos" : 10000,
		"luwakwhite" : 50000,
		"coffeemix" : 7500,
		"nutri":7000,
		"kapalapi":6750,
		"goodday": 6000,
		"aires": 4000,
		"sogem": 10000,
		"magelangan": 18000,
		"sarden": 12000,
		"nastel": 15000,
		"intel": 8000,
	};

	var totalHarga = 0;
	var totalBarang = 0;
	var payment = 0;

	$("#payment").keyup(function(event) {
		payment = Number($('#payment').val()) - totalHarga;
		$("#change").val(Number($('#payment').val()) - totalHarga);
	});

	$("#discount").keyup(function(event) {
		$("#change").val(payment - Number($('#discount').val()));
	});

	$()

	$("#extrajosqty").keyup(function (event){
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		
	});

	$("#luwakwhiteqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);

		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});

	$("#coffeemixqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});

	$("#nutrisariqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});

	$("#kapalapiqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});

	$("#gooddayqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});

	$("#airesqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});

	$("#sogemqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});

	$("#magelanganqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});

	$("#nasisarqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});

	$("#nastelqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});

	$("#intelqty").keyup(function (event){
		totalHarga = Number($('#extrajosqty').val()) * barang["extrajos"] 
					+ Number($('#luwakwhiteqty').val()) * barang["luwakwhite"]
					+ Number($('#coffeemixqty').val()) * barang["coffeemix"]
					+ Number($('#nutrisariqty').val()) * barang["nutri"]
					+ Number($('#kapalapiqty').val()) * barang["kapalapi"]
					+ Number($('#gooddayqty').val()) * barang["goodday"]
					+ Number($('#airesqty').val()) * barang["aires"]
					+ Number($('#sogemqty').val()) * barang["sogem"]
					+ Number($('#magelanganqty').val()) * barang["magelangan"]
					+ Number($('#nasisarqty').val()) * barang["sarden"]
					+ Number($('#nastelqty').val()) * barang["nastel"]
					+ Number($('#intelqty').val()) * barang["intel"];

		$("#totalprice").val(totalHarga);
		totalBarang = Number($('#extrajosqty').val())
					+ Number($('#luwakwhiteqty').val())
					+ Number($('#coffeemixqty').val())
					+ Number($('#nutrisariqty').val())
					+ Number($('#kapalapiqty').val())
					+ Number($('#gooddayqty').val())
					+ Number($('#airesqty').val())
					+ Number($('#sogemqty').val())
					+ Number($('#magelanganqty').val())
					+ Number($('#nasisarqty').val())
					+ Number($('#nastelqty').val())
					+ Number($('#intelqty').val());

		$("#totalitems").val(totalBarang);

	});


});

