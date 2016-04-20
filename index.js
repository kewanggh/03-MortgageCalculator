$(document).ready(function(){
	$("#calculate").click(function(){
		var x = $("#loanBalance").val();
		x = parseInt(x);
		var y = $("#rate").val();
		y = parseInt(y);
		var u = $("#termYears").val();
		u = parseInt(u);
		var z = $("#planetSelected option:selected").val();
		z = parseInt(z);
		var numOfPays = z * u;
		var monthlyInterest = (y/100)/z;
		var compIntRate = Math.pow((1+monthlyInterest), numOfPays);
		var intQuo = (monthlyInterest * compIntRate)/(compIntRate-1);
		var final = parseFloat(x * intQuo).toFixed(2);
		
		if(!$("p"))
		{		
		$("body").append("<p><span>Your Mortgage: " + final + "$</span></p>");
		} else {
		$("p").empty().append("<p><span>Your Mortgage: " + final + "$</span></p>");
		}

	});	
	
});
	