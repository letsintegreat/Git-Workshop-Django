var numKeys = [];
var opns = [];
var res = document.querySelector("#resultArea");
var clrBtn = document.querySelector("#clrTxt");
var delBtn = document.querySelector("#del");
var eqBtn = document.querySelector("#eq");
var decPoint = document.querySelector("#decp");
var opnSyms = ["+", "-", "*", "/"];
let new_calc = false;

for(var i=0;i<=9;i++){
	(function(i){
    	qs = "#num" + i;
		numKeys.push(document.querySelector(qs));
		numKeys[i].addEventListener("click", function(){
			if(new_calc){
				res.textContent = i;
				new_calc = false;
			}
			else res.textContent += i;
		});
  	}(i));
}

for(var i=0;i<=3;i++){
	(function(i){
    	qs = "#op" + i;
		opns.push(document.querySelector(qs));
		opns[i].addEventListener("click", function(){
			res.textContent += opnSyms[i];
		});
  	}(i));
}

clrBtn.addEventListener("click", function(){
	res.textContent = "";
});

delBtn.addEventListener("click", function(){
    res.textContent = res.textContent.substring(0, res.textContent.length - 1);
});

decPoint.addEventListener("click", function(){
	res.textContent += "?";
});

eqBtn.addEventListener("click", function(){
	try{
		res.textContent = eval(res.textContent);
		new_calc = true;
	}
	catch(e){
		res.textContent = "Invalid Syntax";
	}
});
