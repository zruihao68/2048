function showNumber(i,j,readNumber){
	
	var numberCell=$("#number-cell-"+i+"-"+j);;
	numberCell.css('background-color',getNumberBackroundColor(readNumber));
    numberCell.css('Color',getNumberColor(readNumber));

	numberCell.text(readNumber);

	numberCell.animate({
	  width:cellSideLength,
	  height:cellSideLength,
	  top:getPosTop(i,j),
	  left:getPosLeft(i,j)
	},50);
}

function showMoveAnimation(fromx,fromy,tox,toy){
	var numberCell=$('#number-cell-'+fromx+'-'+fromy);
	numberCell.animate({
		top:getPosTop(tox,toy),
		left:getPosLeft(tox,toy)
	},200);
}
function updateScord(scord){
	console.log(scord);
  $('#score').text(scord);

}