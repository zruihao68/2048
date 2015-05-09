 documentWidth=window.screen.availWidth; //获取屏幕的宽度
 gridContainerWidth = 0.92*documentWidth;  //大方块的宽度
 cellSideLength = 0.18 * documentWidth;  //小方块的宽度
 cellSpace = 0.04 * documentWidth;   //方块间的宽度
/*»ñÈ¡Top*/
function getPosTop(i,j){
	return cellSpace+i*(cellSideLength+cellSpace);
}
/*»ñÈ¡Left*/
function getPosLeft(i,j){
 return cellSpace+j*(cellSideLength+cellSpace);
}
/*»ñÈ¡Êý×ÖµÄ±³¾°É«*/
function getNumberBackroundColor(number){

	switch(number){
		case 2: return '#eee4da';break;
		case 4: return '#ede0c8';break;
		case 8: return '#f2b179';break;
		case 16:return '#f59563';break;
		case 32:return '#f67c5f';break;
		case 64:return '#f65e3b';break;
		case 128:return '#edcf72';break;
		case 256:return '#edcc61';break;
		case 512:return '#9c0';break;
		case 1024:return '#eeb5e5';break;
		case 2048:return '#9c0';break;
		case 4096:return '#a6c';break;
		case 8192:return '#93c';break;
	}

	return 'black';
  
}

function getNumberColor(number){
   if(number<=4)
	   return '#776e65';
   
   return 'white';
}

function nospace(board){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]==0){
				return false;
			}
		}
	
	}
	return true;
}

/*ÅÐ¶ÏÊÇ·ñÏò×óÒÆ¶¯*/
function canMoveLeft(board){
  for(var i=0;i<4;i++){
	  for(var j=1;j<4;j++){
	    if(board[i][j]!=0){
			if( board[i][j-1]==0 || board[i][j-1]==board[i][j]){
			  return true;
			}
		}
	  }
  }
  return false;
}
/*ÅÐ¶ÏÊÇ·ñÏòÉÏÒÆ¶¯*/
function canMoveUp(board){
  for(var i=1;i<4;i++){
	  for(var j=0;j<4;j++){
	    if(board[i][j]!=0){
			if( board[i-1][j]==0 || board[i-1][j]==board[i][j]){
			  return true;
			}
		}
	  }
  }
  return false;
}
/*ÅÐ¶ÏÊÇ·ñÏòÓÒÒÆ¶¯*/
function canMoveRight(board){
  for(var i=0;i<4;i++){
	  for(var j=2;j>=0;j--){
	    if(board[i][j]!=0){
			if( board[i][j+1]==0 || board[i][j+1]==board[i][j]){
			  return true;
			}
		}
	  }
  }
  return false;
}
/*ÅÐ¶ÏÄÜ·ñÏòÏÂÒÆ¶¯*/
function canMoveDown(board)
{
	for(var i=2;i>=0;i--)
	 for(var j=0;j<4;j++)
	 {
		 if(board[i][j]!=0)
		 if(board[i+1][j]==0||board[i+1][j]==board[i][j])
		 return true;
	 }
	 return false; 
}

/*ÅÐ¶ÏË®Æ½ÖÐ¼äÊÇ·ñÓÐÕÏ°­Îï*/
function noBiockHorizontal(row,col1,col2,board){
   for(var i=col1+1;i<col2;i++){
	   if(board[row][i]!=0)
		  return false;
	      
  }
 return true;
 
   
}
/*
function noBiockHorizontal1(row,col1,col2,board){
   for(var i=col1-1;i>col2;i--){
	   if(board[row][i]!=0)
		  return false;
  }
 return true;
   
}*/
/*ÅÐ¶ÏÉÏÏÂÊÇ·ñÓÐÕÏ°­Îï*/
function noBiockUpDown(row,col1,col2,board){
   for(var i=col1+1;i<col2;i++){
	   if(board[i][row]!=0)
		  return false;
	 
  }
 
 return true;
   
}