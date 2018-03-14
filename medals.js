var svg = document.getElementById("place");
var canada = document.getElementById("CA");
var norway = document.getElementById("NOR");


var ca = [11,8,10]
var nor = [14,14,11]

var hail_canada = function (e) {
    var count = d3.selectAll("circle").data(ca);
    count.attr("r", function(d){return d*8;});
}

canada.addEventListener('click', hail_canada);

var hail_norway = function (e) {
	var count = d3.selectAll("circle").data(nor);
	count.attr("r", function(d){return d*8;});

}

norway.addEventListener('click', hail_norway);