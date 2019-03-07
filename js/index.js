$(function () {
  $("#custom-modal").modal("show");
  $("#one").addClass('enable');
});

$("#typeofgame" && "#formatgame").on("change", function () {
  $("#custom-modal").modal("hide");
  var formatgame = document.getElementById("formatgame").value;
  if (formatgame == '3x3'){
  document.getElementById("tic-tac-toe").style.display = "block";
  var typeofgame = document.getElementById("typeofgame").value;
  if (typeofgame == '2players'){
  	var x = "x"
	var o = "o"
	var count = 0;
	var o_win = 0;
	var x_win = 0;

	$('#game li').click(function(){
	  if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
	   {
		alert('O has won the game. Start a new game')
		$("#game li").text("+");
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')
	   }
	  else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
	  {
	   alert('X wins has won the game. Start a new game')
	   $("#game li").text("+");
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')	
	  }
	  else if (count == 9)
	  {
		alert('Its a tie. It will restart.')
		$("#game li").text("+");
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')
		count = 0
	  }
	  else if ($(this).hasClass('disable'))
	  {
	    alert('Already selected')
	  }
	  else if (count%2 == 0)
	  {
		  count++
		  $(this).text(o)
	      $(this).addClass('disable o btn-primary')
		    if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
		    {
		   alert('O wins')
		   count = 0
		   o_win++
		   $('#o_win').text(o_win)
	        }
	  }
	   else  
	  {
		  count++
	    $(this).text(x)
	    $(this).addClass('disable x btn-info')
		   if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
	        {
		 alert('X wins')
		 count = 0
		 x_win++
		 $('#x_win').text(x_win)
	        }
	  }

	   });
	    $("#reset").click(function () {
	    $("#game li").text("+");
		$("#game li").addClass('enable')
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')
		count = 0

	  });
  } else {
  	var x = "x"
	var o = "o"
	var count = 0;
	var o_win = 0;
	var x_win = 0;

	$('#game li').click(function(){
	  if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
	   {
		alert('O has won the game. Start a new game')
		$("#game li").text("+");
		$("#game li").addClass('enable')
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')
	   }
	  else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
	  {
	   alert('X wins has won the game. Start a new game')
	   $("#game li").text("+");
		$("#game li").addClass('enable')
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')	
	  }
	  else if (count == 9)
	  {
		alert('Its a tie. It will restart.')
		$("#game li").text("+");
		$("#game li").addClass('enable')
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')
		count = 0
	  }
	  else if ($(this).hasClass('disable'))
	  {
	    alert('Already selected')
	  }
	  else (count%2 == 0)
	  {
		  count++
		  $(this).text(o)
		  $(this).removeClass('enable')
	      $(this).addClass('disable o btn-primary')
		    if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
			{
			   alert('O wins')
			   count = 0
			   o_win++
			   $('#o_win').text(o_win)
	       	}

	       	var getid = document.querySelector('.enable').id;
	       	var id = '#'+getid;
			$(id).text(x);
		    $(id).removeClass('enable');
			$(id).addClass('disable x btn-info');
				   if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
			        {
					  alert('X wins')
					  count = 0
					  x_win++
					  $('#x_win').text(x_win)
			        }
	  }

	   });
	    $("#reset").click(function () {
	    $("#game li").text("+");
		$("#game li").addClass('enable')
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')
		count = 0

	  });
  };
  } else if (formatgame == '4x4'){
  document.getElementById("tic-tac-toe-4").style.display = "block";
  var typeofgame = document.getElementById("typeofgame").value;
  if (typeofgame == '2players'){
  	var x = "x"
	var o = "o"
	var count = 0;
	var o_win = 0;
	var x_win = 0;

	$('#game-4 li').click(function(){
	  if ($("#1").hasClass('o') && $("#2").hasClass('o') && $("#3").hasClass('o') && $("#4").hasClass('o') || $("#5").hasClass('o') && $("#6").hasClass('o') && $("#7").hasClass('o') && $("#8").hasClass('o') || $("#9").hasClass('o') && $("#10").hasClass('o') && $("#11").hasClass('o') && $("#12").hasClass('o') || $("#13").hasClass('o') && $("#14").hasClass('o') && $("#15").hasClass('o') && $("#16").hasClass('o') || $("#1").hasClass('o') && $("#5").hasClass('o') && $("#9").hasClass('o') && $("#13").hasClass('o') || $("#2").hasClass('o') && $("#6").hasClass('o') && $("#10").hasClass('o') && $("#14").hasClass('o') || $("#3").hasClass('o') && $("#7").hasClass('o') && $("#11").hasClass('o') && $("#15").hasClass('o') || $("#4").hasClass('o') && $("#8").hasClass('o') && $("#12").hasClass('o') && $("#16").hasClass('o') || $("#1").hasClass('o') && $("#6").hasClass('o') && $("#11").hasClass('o') && $("#16").hasClass('o') || $("#4").hasClass('o') && $("#7").hasClass('o') && $("#10").hasClass('o') && $("#13").hasClass('o'))
	   {
		alert('O has won the game. Start a new game')
		$("#game-4 li").text("+");
		$("#game-4 li").removeClass('disable')
		$("#game-4 li").removeClass('o')
		$("#game-4 li").removeClass('x')
		$("#game-4 li").removeClass('btn-primary')
		$("#game-4 li").removeClass('btn-info')
	   }
	  else if ($("#1").hasClass('x') && $("#2").hasClass('x') && $("#3").hasClass('x') && $("#4").hasClass('x') || $("#5").hasClass('x') && $("#6").hasClass('x') && $("#7").hasClass('x') && $("#8").hasClass('x') || $("#9").hasClass('x') && $("#10").hasClass('x') && $("#11").hasClass('x') && $("#12").hasClass('x') || $("#13").hasClass('x') && $("#14").hasClass('x') && $("#15").hasClass('x') && $("#16").hasClass('x') || $("#1").hasClass('x') && $("#5").hasClass('x') && $("#9").hasClass('x') && $("#13").hasClass('x') || $("#2").hasClass('x') && $("#6").hasClass('x') && $("#10").hasClass('x') && $("#14").hasClass('x') || $("#3").hasClass('x') && $("#7").hasClass('x') && $("#11").hasClass('x') && $("#15").hasClass('x') || $("#4").hasClass('x') && $("#8").hasClass('x') && $("#12").hasClass('x') && $("#16").hasClass('x') || $("#1").hasClass('x') && $("#6").hasClass('x') && $("#11").hasClass('x') && $("#16").hasClass('x') || $("#4").hasClass('x') && $("#7").hasClass('x') && $("#10").hasClass('x') && $("#13").hasClass('x'))
	  {
	   alert('X wins has won the game. Start a new game')
	   $("#game-4 li").text("+");
		$("#game-4 li").removeClass('disable')
		$("#game-4 li").removeClass('o')
		$("#game-4 li").removeClass('x')
		$("#game-4 li").removeClass('btn-primary')
		$("#game-4 li").removeClass('btn-info')	
	  }
	  else if (count == 16)
	  {
		alert('Its a tie. It will restart.')
		$("#game-4 li").text("+");
		$("#game-4 li").removeClass('disable')
		$("#game-4 li").removeClass('o')
		$("#game-4 li").removeClass('x')
		$("#game-4 li").removeClass('btn-primary')
		$("#game-4 li").removeClass('btn-info')
		count = 0
	  }
	  else if ($(this).hasClass('disable'))
	  {
	    alert('Already selected')
	  }
	  else if (count%2 == 0)
	  {
		  count++
		  $(this).text(o)
	      $(this).addClass('disable o btn-primary')
		    if ($("#1").hasClass('o') && $("#2").hasClass('o') && $("#3").hasClass('o') && $("#4").hasClass('o') || $("#5").hasClass('o') && $("#6").hasClass('o') && $("#7").hasClass('o') && $("#8").hasClass('o') || $("#9").hasClass('o') && $("#10").hasClass('o') && $("#11").hasClass('o') && $("#12").hasClass('o') || $("#13").hasClass('o') && $("#14").hasClass('o') && $("#15").hasClass('o') && $("#16").hasClass('o') || $("#1").hasClass('o') && $("#5").hasClass('o') && $("#9").hasClass('o') && $("#13").hasClass('o') || $("#2").hasClass('o') && $("#6").hasClass('o') && $("#10").hasClass('o') && $("#14").hasClass('o') || $("#3").hasClass('o') && $("#7").hasClass('o') && $("#11").hasClass('o') && $("#15").hasClass('o') || $("#4").hasClass('o') && $("#8").hasClass('o') && $("#12").hasClass('o') && $("#16").hasClass('o') || $("#1").hasClass('o') && $("#6").hasClass('o') && $("#11").hasClass('o') && $("#16").hasClass('o') || $("#4").hasClass('o') && $("#7").hasClass('o') && $("#10").hasClass('o') && $("#13").hasClass('o'))
		    {
		   alert('O wins')
		   count = 0
		   o_win++
		   $('#o_win_4').text(o_win)
	        }
	  }
	   else  
	  {
		  count++
	    $(this).text(x)
	    $(this).addClass('disable x btn-info')
		   if ($("#1").hasClass('x') && $("#2").hasClass('x') && $("#3").hasClass('x') && $("#4").hasClass('x') || $("#5").hasClass('x') && $("#6").hasClass('x') && $("#7").hasClass('x') && $("#8").hasClass('x') || $("#9").hasClass('x') && $("#10").hasClass('x') && $("#11").hasClass('x') && $("#12").hasClass('x') || $("#13").hasClass('x') && $("#14").hasClass('x') && $("#15").hasClass('x') && $("#16").hasClass('x') || $("#1").hasClass('x') && $("#5").hasClass('x') && $("#9").hasClass('x') && $("#13").hasClass('x') || $("#2").hasClass('x') && $("#6").hasClass('x') && $("#10").hasClass('x') && $("#14").hasClass('x') || $("#3").hasClass('x') && $("#7").hasClass('x') && $("#11").hasClass('x') && $("#15").hasClass('x') || $("#4").hasClass('x') && $("#8").hasClass('x') && $("#12").hasClass('x') && $("#16").hasClass('x') || $("#1").hasClass('x') && $("#6").hasClass('x') && $("#11").hasClass('x') && $("#16").hasClass('x') || $("#4").hasClass('x') && $("#7").hasClass('x') && $("#10").hasClass('x') && $("#13").hasClass('x'))
	        {
		 alert('X wins')
		 count = 0
		 x_win++
		 $('#x_win_4').text(x_win)
	        }
	  }

	   });
	    $("#reset-4").click(function () {
	    $("#game-4 li").text("+");
		$("#game-4 li").addClass('enabled')
		$("#game-4 li").removeClass('disable')
		$("#game-4 li").removeClass('o')
		$("#game-4 li").removeClass('x')
		$("#game-4 li").removeClass('btn-primary')
		$("#game-4 li").removeClass('btn-info')
		count = 0

	  });
  	} else {
  	var x = "x"
	var o = "o"
	var count = 0;
	var o_win = 0;
	var x_win = 0;

	$('#game-4 li').click(function(){
	  if ($("#1").hasClass('o') && $("#2").hasClass('o') && $("#3").hasClass('o') && $("#4").hasClass('o') || $("#5").hasClass('o') && $("#6").hasClass('o') && $("#7").hasClass('o') && $("#8").hasClass('o') || $("#9").hasClass('o') && $("#10").hasClass('o') && $("#11").hasClass('o') && $("#12").hasClass('o') || $("#13").hasClass('o') && $("#14").hasClass('o') && $("#15").hasClass('o') && $("#16").hasClass('o') || $("#1").hasClass('o') && $("#5").hasClass('o') && $("#9").hasClass('o') && $("#13").hasClass('o') || $("#2").hasClass('o') && $("#6").hasClass('o') && $("#10").hasClass('o') && $("#14").hasClass('o') || $("#3").hasClass('o') && $("#7").hasClass('o') && $("#11").hasClass('o') && $("#15").hasClass('o') || $("#4").hasClass('o') && $("#8").hasClass('o') && $("#12").hasClass('o') && $("#16").hasClass('o') || $("#1").hasClass('o') && $("#6").hasClass('o') && $("#11").hasClass('o') && $("#16").hasClass('o') || $("#4").hasClass('o') && $("#7").hasClass('o') && $("#10").hasClass('o') && $("#13").hasClass('o'))
	   {
		alert('O has won the game. Start a new game')
		$("#game-4 li").text("+");
		$("#game-4 li").addClass('enable')
		$("#game-4 li").removeClass('disable')
		$("#game-4 li").removeClass('o')
		$("#game-4 li").removeClass('x')
		$("#game-4 li").removeClass('btn-primary')
		$("#game-4 li").removeClass('btn-info')
	   }
	  else if ($("#1").hasClass('x') && $("#2").hasClass('x') && $("#3").hasClass('x') && $("#4").hasClass('x') || $("#5").hasClass('x') && $("#6").hasClass('x') && $("#7").hasClass('x') && $("#8").hasClass('x') || $("#9").hasClass('x') && $("#10").hasClass('x') && $("#11").hasClass('x') && $("#12").hasClass('x') || $("#13").hasClass('x') && $("#14").hasClass('x') && $("#15").hasClass('x') && $("#16").hasClass('x') || $("#1").hasClass('x') && $("#5").hasClass('x') && $("#9").hasClass('x') && $("#13").hasClass('x') || $("#2").hasClass('x') && $("#6").hasClass('x') && $("#10").hasClass('x') && $("#14").hasClass('x') || $("#3").hasClass('x') && $("#7").hasClass('x') && $("#11").hasClass('x') && $("#15").hasClass('x') || $("#4").hasClass('x') && $("#8").hasClass('x') && $("#12").hasClass('x') && $("#16").hasClass('x') || $("#1").hasClass('x') && $("#6").hasClass('x') && $("#11").hasClass('x') && $("#16").hasClass('x') || $("#4").hasClass('x') && $("#7").hasClass('x') && $("#10").hasClass('x') && $("#13").hasClass('x'))
	  {
	   alert('X wins has won the game. Start a new game')
	   $("#game-4 li").text("+");
		$("#game-4 li").addClass('enable')
		$("#game-4 li").removeClass('disable')
		$("#game-4 li").removeClass('o')
		$("#game-4 li").removeClass('x')
		$("#game-4 li").removeClass('btn-primary')
		$("#game-4 li").removeClass('btn-info')	
	  }
	  else if (count == 16)
	  {
		alert('Its a tie. It will restart.')
		$("#game-4 li").text("+");
		$("#game-4 li").addClass('enable')
		$("#game-4 li").removeClass('disable')
		$("#game-4 li").removeClass('o')
		$("#game-4 li").removeClass('x')
		$("#game-4 li").removeClass('btn-primary')
		$("#game-4 li").removeClass('btn-info')
		count = 0
	  }
	  else if ($(this).hasClass('disable'))
	  {
	    alert('Already selected')
	  }
	  else (count%2 == 0)
	  {
		  count++
		  $(this).text(o)
		  $(this).removeClass('enable')
	      $(this).addClass('disable o btn-primary')
		    if ($("#1").hasClass('o') && $("#2").hasClass('o') && $("#3").hasClass('o') && $("#4").hasClass('o') || $("#5").hasClass('o') && $("#6").hasClass('o') && $("#7").hasClass('o') && $("#8").hasClass('o') || $("#9").hasClass('o') && $("#10").hasClass('o') && $("#11").hasClass('o') && $("#12").hasClass('o') || $("#13").hasClass('o') && $("#14").hasClass('o') && $("#15").hasClass('o') && $("#16").hasClass('o') || $("#1").hasClass('o') && $("#5").hasClass('o') && $("#9").hasClass('o') && $("#13").hasClass('o') || $("#2").hasClass('o') && $("#6").hasClass('o') && $("#10").hasClass('o') && $("#14").hasClass('o') || $("#3").hasClass('o') && $("#7").hasClass('o') && $("#11").hasClass('o') && $("#15").hasClass('o') || $("#4").hasClass('o') && $("#8").hasClass('o') && $("#12").hasClass('o') && $("#16").hasClass('o') || $("#1").hasClass('o') && $("#6").hasClass('o') && $("#11").hasClass('o') && $("#16").hasClass('o') || $("#4").hasClass('o') && $("#7").hasClass('o') && $("#10").hasClass('o') && $("#13").hasClass('o'))
			{
			   alert('O wins')
			   count = 0
			   o_win++
			   $('#o_win_4').text(o_win)
	       	}

	       	var getid = document.querySelector('.enabled').id;
	       	var id = '#'+getid;
			$(id).text(x);
		    $(id).removeClass('enabled');
			$(id).addClass('disable x btn-info');
			if ($("#1").hasClass('x') && $("#2").hasClass('x') && $("#3").hasClass('x') && $("#4").hasClass('x') || $("#5").hasClass('x') && $("#6").hasClass('x') && $("#7").hasClass('x') && $("#8").hasClass('x') || $("#9").hasClass('x') && $("#10").hasClass('x') && $("#11").hasClass('x') && $("#12").hasClass('x') || $("#13").hasClass('x') && $("#14").hasClass('x') && $("#15").hasClass('x') && $("#16").hasClass('x') || $("#1").hasClass('x') && $("#5").hasClass('x') && $("#9").hasClass('x') && $("#13").hasClass('x') || $("#2").hasClass('x') && $("#6").hasClass('x') && $("#10").hasClass('x') && $("#14").hasClass('x') || $("#3").hasClass('x') && $("#7").hasClass('x') && $("#11").hasClass('x') && $("#15").hasClass('x') || $("#4").hasClass('x') && $("#8").hasClass('x') && $("#12").hasClass('x') && $("#16").hasClass('x') || $("#1").hasClass('x') && $("#6").hasClass('x') && $("#11").hasClass('x') && $("#16").hasClass('x') || $("#4").hasClass('x') && $("#7").hasClass('x') && $("#10").hasClass('x') && $("#13").hasClass('x'))
			        {
					  alert('X wins')
					  count = 0
					  x_win++
					  $('#x_win_4').text(x_win)
			        }
	  }

	   });
	    $("#reset-4").click(function () {
	    $("#game-4 li").text("+");
		$("#game-4 li").addClass('enabled')
		$("#game-4 li").removeClass('disable')
		$("#game-4 li").removeClass('o')
		$("#game-4 li").removeClass('x')
		$("#game-4 li").removeClass('btn-primary')
		$("#game-4 li").removeClass('btn-info')
		count = 0

	  });
  };
  } else {
  document.getElementById("tic-tac-toe-5").style.display = "block";
  var typeofgame = document.getElementById("typeofgame").value;
  if (typeofgame == '2players'){
  	var x = "x"
	var o = "o"
	var count = 0;
	var o_win = 0;
	var x_win = 0;

	$('#game-5 li').click(function(){
	  if ($("#1_").hasClass('o') && $("#2_").hasClass('o') && $("#3_").hasClass('o') && $("#4_").hasClass('o')  && $("#4_").hasClass('o') || $("#6_").hasClass('o') && $("#7_").hasClass('o') && $("#8_").hasClass('o') && $("#9_").hasClass('o')  && $("#10_").hasClass('o') || $("#11_").hasClass('o') && $("#12_").hasClass('o') && $("#13_").hasClass('o') && $("#14_").hasClass('o')  && $("#15_").hasClass('o') || $("#16_").hasClass('o') && $("#17_").hasClass('o') && $("#18_").hasClass('o') && $("#19_").hasClass('o')  && $("#20_").hasClass('o') || $("#21_").hasClass('o') && $("#22_").hasClass('o') && $("#23_").hasClass('o') && $("#24_").hasClass('x')  && $("#25_").hasClass('o') || $("#1_").hasClass('o') && $("#6_").hasClass('o') && $("#11_").hasClass('o') && $("#16_").hasClass('o')  && $("#21_").hasClass('o') || $("#2_").hasClass('o') && $("#7_").hasClass('o') && $("#12_").hasClass('o') && $("#17_").hasClass('o')  && $("#22_").hasClass('o') || $("#3_").hasClass('o') && $("#8_").hasClass('o') && $("#13_").hasClass('o') && $("#18_").hasClass('o')  && $("#23_").hasClass('o') || $("#4_").hasClass('o') && $("#9_").hasClass('o') && $("#14_").hasClass('o') && $("#19_").hasClass('o')  && $("#24_").hasClass('o') || $("#5_").hasClass('o') && $("#10_").hasClass('o') && $("#15_").hasClass('o') && $("#20_").hasClass('o')  && $("#25_").hasClass('o') || $("#1_").hasClass('o') && $("#7_").hasClass('o') && $("#13_").hasClass('o') && $("#19_").hasClass('o')  && $("#25_").hasClass('o') || $("#5_").hasClass('o') && $("#9_").hasClass('o') && $("#13_").hasClass('o') && $("#17_").hasClass('o')  && $("#21_").hasClass('o'))
	   {
		alert('O has won the game. Start a new game')
		$("#game-5 li").text("+");
		$("#game-5 li").removeClass('disable')
		$("#game-5 li").removeClass('o')
		$("#game-5 li").removeClass('x')
		$("#game-5 li").removeClass('btn-primary')
		$("#game-5 li").removeClass('btn-info')
	   }
	  else if ($("#1_").hasClass('x') && $("#2_").hasClass('x') && $("#3_").hasClass('x') && $("#4_").hasClass('x')  && $("#4_").hasClass('x') || $("#6_").hasClass('x') && $("#7_").hasClass('x') && $("#8_").hasClass('x') && $("#9_").hasClass('x')  && $("#10_").hasClass('x') || $("#11_").hasClass('x') && $("#12_").hasClass('x') && $("#13_").hasClass('x') && $("#14_").hasClass('x')  && $("#15_").hasClass('x') || $("#16_").hasClass('x') && $("#17_").hasClass('x') && $("#18_").hasClass('x') && $("#19_").hasClass('x')  && $("#20_").hasClass('x') || $("#21_").hasClass('x') && $("#22_").hasClass('x') && $("#23_").hasClass('x') && $("#24_").hasClass('x')  && $("#25_").hasClass('x') || $("#1_").hasClass('x') && $("#6_").hasClass('x') && $("#11_").hasClass('x') && $("#16_").hasClass('x')  && $("#21_").hasClass('x') || $("#2_").hasClass('x') && $("#7_").hasClass('x') && $("#12_").hasClass('x') && $("#17_").hasClass('x')  && $("#22_").hasClass('x') || $("#3_").hasClass('x') && $("#8_").hasClass('x') && $("#13_").hasClass('x') && $("#18_").hasClass('x')  && $("#23_").hasClass('x') || $("#4_").hasClass('x') && $("#9_").hasClass('x') && $("#14_").hasClass('x') && $("#19_").hasClass('x')  && $("#24_").hasClass('x') || $("#5_").hasClass('x') && $("#10_").hasClass('x') && $("#15_").hasClass('x') && $("#20_").hasClass('x')  && $("#25_").hasClass('x') || $("#1_").hasClass('x') && $("#7_").hasClass('x') && $("#13_").hasClass('x') && $("#19_").hasClass('x')  && $("#25_").hasClass('x') || $("#5_").hasClass('x') && $("#9_").hasClass('x') && $("#13_").hasClass('x') && $("#17_").hasClass('x')  && $("#21_").hasClass('x'))
	  {
	   alert('X wins has won the game. Start a new game')
	   	$("#game-5 li").text("+");
		$("#game-5 li").removeClass('disable')
		$("#game-5 li").removeClass('o')
		$("#game-5 li").removeClass('x')
		$("#game-5 li").removeClass('btn-primary')
		$("#game-5 li").removeClass('btn-info')	
	  }
	  else if (count == 25)
	  {
		alert('Its a tie. It will restart.')
		$("#game-5 li").text("+");
		$("#game-5 li").removeClass('disable')
		$("#game-5 li").removeClass('o')
		$("#game-5 li").removeClass('x')
		$("#game-5 li").removeClass('btn-primary')
		$("#game-5 li").removeClass('btn-info')
		count = 0
	  }
	  else if ($(this).hasClass('disable'))
	  {
	    alert('Already selected')
	  }
	  else if (count%2 == 0)
	  {
		  count++
		  $(this).text(o)
	      $(this).addClass('disable o btn-primary')
		    if ($("#1_").hasClass('o') && $("#2_").hasClass('o') && $("#3_").hasClass('o') && $("#4_").hasClass('o')  && $("#4_").hasClass('o') || $("#6_").hasClass('o') && $("#7_").hasClass('o') && $("#8_").hasClass('o') && $("#9_").hasClass('o')  && $("#10_").hasClass('o') || $("#11_").hasClass('o') && $("#12_").hasClass('o') && $("#13_").hasClass('o') && $("#14_").hasClass('o')  && $("#15_").hasClass('o') || $("#16_").hasClass('o') && $("#17_").hasClass('o') && $("#18_").hasClass('o') && $("#19_").hasClass('o')  && $("#20_").hasClass('o') || $("#21_").hasClass('o') && $("#22_").hasClass('o') && $("#23_").hasClass('o') && $("#24_").hasClass('x')  && $("#25_").hasClass('o') || $("#1_").hasClass('o') && $("#6_").hasClass('o') && $("#11_").hasClass('o') && $("#16_").hasClass('o')  && $("#21_").hasClass('o') || $("#2_").hasClass('o') && $("#7_").hasClass('o') && $("#12_").hasClass('o') && $("#17_").hasClass('o')  && $("#22_").hasClass('o') || $("#3_").hasClass('o') && $("#8_").hasClass('o') && $("#13_").hasClass('o') && $("#18_").hasClass('o')  && $("#23_").hasClass('o') || $("#4_").hasClass('o') && $("#9_").hasClass('o') && $("#14_").hasClass('o') && $("#19_").hasClass('o')  && $("#24_").hasClass('o') || $("#5_").hasClass('o') && $("#10_").hasClass('o') && $("#15_").hasClass('o') && $("#20_").hasClass('o')  && $("#25_").hasClass('o') || $("#1_").hasClass('o') && $("#7_").hasClass('o') && $("#13_").hasClass('o') && $("#19_").hasClass('o')  && $("#25_").hasClass('o') || $("#5_").hasClass('o') && $("#9_").hasClass('o') && $("#13_").hasClass('o') && $("#17_").hasClass('o')  && $("#21_").hasClass('o'))
		    {
		   alert('O wins')
		   count = 0
		   o_win++
		   $('#o_win_5').text(o_win)
	        }
	  }
	   else  
	  {
		  count++
	    $(this).text(x)
	    $(this).addClass('disable x btn-info')
		   if ($("#1_").hasClass('x') && $("#2_").hasClass('x') && $("#3_").hasClass('x') && $("#4_").hasClass('x')  && $("#4_").hasClass('x') || $("#6_").hasClass('x') && $("#7_").hasClass('x') && $("#8_").hasClass('x') && $("#9_").hasClass('x')  && $("#10_").hasClass('x') || $("#11_").hasClass('x') && $("#12_").hasClass('x') && $("#13_").hasClass('x') && $("#14_").hasClass('x')  && $("#15_").hasClass('x') || $("#16_").hasClass('x') && $("#17_").hasClass('x') && $("#18_").hasClass('x') && $("#19_").hasClass('x')  && $("#20_").hasClass('x') || $("#21_").hasClass('x') && $("#22_").hasClass('x') && $("#23_").hasClass('x') && $("#24_").hasClass('x')  && $("#25_").hasClass('x') || $("#1_").hasClass('x') && $("#6_").hasClass('x') && $("#11_").hasClass('x') && $("#16_").hasClass('x')  && $("#21_").hasClass('x') || $("#2_").hasClass('x') && $("#7_").hasClass('x') && $("#12_").hasClass('x') && $("#17_").hasClass('x')  && $("#22_").hasClass('x') || $("#3_").hasClass('x') && $("#8_").hasClass('x') && $("#13_").hasClass('x') && $("#18_").hasClass('x')  && $("#23_").hasClass('x') || $("#4_").hasClass('x') && $("#9_").hasClass('x') && $("#14_").hasClass('x') && $("#19_").hasClass('x')  && $("#24_").hasClass('x') || $("#5_").hasClass('x') && $("#10_").hasClass('x') && $("#15_").hasClass('x') && $("#20_").hasClass('x')  && $("#25_").hasClass('x') || $("#1_").hasClass('x') && $("#7_").hasClass('x') && $("#13_").hasClass('x') && $("#19_").hasClass('x')  && $("#25_").hasClass('x') || $("#5_").hasClass('x') && $("#9_").hasClass('x') && $("#13_").hasClass('x') && $("#17_").hasClass('x')  && $("#21_").hasClass('x'))
	        {
		 alert('X wins')
		 count = 0
		 x_win++
		 $('#x_win_5').text(x_win)
	        }
	  }

	   });
	    $("#reset-5").click(function () {
	    $("#game-5 li").text("+");
		$("#game-5 li").addClass('enabled')
		$("#game-5 li").removeClass('disable')
		$("#game-5 li").removeClass('o')
		$("#game-5 li").removeClass('x')
		$("#game-5 li").removeClass('btn-primary')
		$("#game-5 li").removeClass('btn-info')
		count = 0

	  });
  	} else {
  	var x = "x"
	var o = "o"
	var count = 0;
	var o_win = 0;
	var x_win = 0;

	$('#game-5 li').click(function(){
	  if ($("#1_").hasClass('o') && $("#2_").hasClass('o') && $("#3_").hasClass('o') && $("#4_").hasClass('o')  && $("#4_").hasClass('o') || $("#6_").hasClass('o') && $("#7_").hasClass('o') && $("#8_").hasClass('o') && $("#9_").hasClass('o')  && $("#10_").hasClass('o') || $("#11_").hasClass('o') && $("#12_").hasClass('o') && $("#13_").hasClass('o') && $("#14_").hasClass('o')  && $("#15_").hasClass('o') || $("#16_").hasClass('o') && $("#17_").hasClass('o') && $("#18_").hasClass('o') && $("#19_").hasClass('o')  && $("#20_").hasClass('o') || $("#21_").hasClass('o') && $("#22_").hasClass('o') && $("#23_").hasClass('o') && $("#24_").hasClass('x')  && $("#25_").hasClass('o') || $("#1_").hasClass('o') && $("#6_").hasClass('o') && $("#11_").hasClass('o') && $("#16_").hasClass('o')  && $("#21_").hasClass('o') || $("#2_").hasClass('o') && $("#7_").hasClass('o') && $("#12_").hasClass('o') && $("#17_").hasClass('o')  && $("#22_").hasClass('o') || $("#3_").hasClass('o') && $("#8_").hasClass('o') && $("#13_").hasClass('o') && $("#18_").hasClass('o')  && $("#23_").hasClass('o') || $("#4_").hasClass('o') && $("#9_").hasClass('o') && $("#14_").hasClass('o') && $("#19_").hasClass('o')  && $("#24_").hasClass('o') || $("#5_").hasClass('o') && $("#10_").hasClass('o') && $("#15_").hasClass('o') && $("#20_").hasClass('o')  && $("#25_").hasClass('o') || $("#1_").hasClass('o') && $("#7_").hasClass('o') && $("#13_").hasClass('o') && $("#19_").hasClass('o')  && $("#25_").hasClass('o') || $("#5_").hasClass('o') && $("#9_").hasClass('o') && $("#13_").hasClass('o') && $("#17_").hasClass('o')  && $("#21_").hasClass('o'))
	   {
		alert('O has won the game. Start a new game')
		$("#game-5 li").text("+");
		$("#game-5 li").addClass('enable')
		$("#game-5 li").removeClass('disable')
		$("#game-5 li").removeClass('o')
		$("#game-5 li").removeClass('x')
		$("#game-5 li").removeClass('btn-primary')
		$("#game-5 li").removeClass('btn-info')
	   }
	  else if ($("#1_").hasClass('x') && $("#2_").hasClass('x') && $("#3_").hasClass('x') && $("#4_").hasClass('x')  && $("#4_").hasClass('x') || $("#6_").hasClass('x') && $("#7_").hasClass('x') && $("#8_").hasClass('x') && $("#9_").hasClass('x')  && $("#10_").hasClass('x') || $("#11_").hasClass('x') && $("#12_").hasClass('x') && $("#13_").hasClass('x') && $("#14_").hasClass('x')  && $("#15_").hasClass('x') || $("#16_").hasClass('x') && $("#17_").hasClass('x') && $("#18_").hasClass('x') && $("#19_").hasClass('x')  && $("#20_").hasClass('x') || $("#21_").hasClass('x') && $("#22_").hasClass('x') && $("#23_").hasClass('x') && $("#24_").hasClass('x')  && $("#25_").hasClass('x') || $("#1_").hasClass('x') && $("#6_").hasClass('x') && $("#11_").hasClass('x') && $("#16_").hasClass('x')  && $("#21_").hasClass('x') || $("#2_").hasClass('x') && $("#7_").hasClass('x') && $("#12_").hasClass('x') && $("#17_").hasClass('x')  && $("#22_").hasClass('x') || $("#3_").hasClass('x') && $("#8_").hasClass('x') && $("#13_").hasClass('x') && $("#18_").hasClass('x')  && $("#23_").hasClass('x') || $("#4_").hasClass('x') && $("#9_").hasClass('x') && $("#14_").hasClass('x') && $("#19_").hasClass('x')  && $("#24_").hasClass('x') || $("#5_").hasClass('x') && $("#10_").hasClass('x') && $("#15_").hasClass('x') && $("#20_").hasClass('x')  && $("#25_").hasClass('x') || $("#1_").hasClass('x') && $("#7_").hasClass('x') && $("#13_").hasClass('x') && $("#19_").hasClass('x')  && $("#25_").hasClass('x') || $("#5_").hasClass('x') && $("#9_").hasClass('x') && $("#13_").hasClass('x') && $("#17_").hasClass('x')  && $("#21_").hasClass('x'))
	  {
	   alert('X wins has won the game. Start a new game')
	   $("#game-5 li").text("+");
		$("#game-5 li").addClass('enable')
		$("#game-5 li").removeClass('disable')
		$("#game-5 li").removeClass('o')
		$("#game-5 li").removeClass('x')
		$("#game-5 li").removeClass('btn-primary')
		$("#game-5 li").removeClass('btn-info')	
	  }
	  else if (count == 25)
	  {
		alert('Its a tie. It will restart.')
		$("#game-5 li").text("+");
		$("#game-5 li").addClass('enable')
		$("#game-5 li").removeClass('disable')
		$("#game-5 li").removeClass('o')
		$("#game-5 li").removeClass('x')
		$("#game-5 li").removeClass('btn-primary')
		$("#game-5 li").removeClass('btn-info')
		count = 0
	  }
	  else if ($(this).hasClass('disable'))
	  {
	    alert('Already selected')
	  }
	  else (count%2 == 0)
	  {
		  count++
		  $(this).text(o)
		  $(this).removeClass('enable')
	      $(this).addClass('disable o btn-primary')
		    if ($("#1_").hasClass('o') && $("#2_").hasClass('o') && $("#3_").hasClass('o') && $("#4_").hasClass('o')  && $("#4_").hasClass('o') || $("#6_").hasClass('o') && $("#7_").hasClass('o') && $("#8_").hasClass('o') && $("#9_").hasClass('o')  && $("#10_").hasClass('o') || $("#11_").hasClass('o') && $("#12_").hasClass('o') && $("#13_").hasClass('o') && $("#14_").hasClass('o')  && $("#15_").hasClass('o') || $("#16_").hasClass('o') && $("#17_").hasClass('o') && $("#18_").hasClass('o') && $("#19_").hasClass('o')  && $("#20_").hasClass('o') || $("#21_").hasClass('o') && $("#22_").hasClass('o') && $("#23_").hasClass('o') && $("#24_").hasClass('x')  && $("#25_").hasClass('o') || $("#1_").hasClass('o') && $("#6_").hasClass('o') && $("#11_").hasClass('o') && $("#16_").hasClass('o')  && $("#21_").hasClass('o') || $("#2_").hasClass('o') && $("#7_").hasClass('o') && $("#12_").hasClass('o') && $("#17_").hasClass('o')  && $("#22_").hasClass('o') || $("#3_").hasClass('o') && $("#8_").hasClass('o') && $("#13_").hasClass('o') && $("#18_").hasClass('o')  && $("#23_").hasClass('o') || $("#4_").hasClass('o') && $("#9_").hasClass('o') && $("#14_").hasClass('o') && $("#19_").hasClass('o')  && $("#24_").hasClass('o') || $("#5_").hasClass('o') && $("#10_").hasClass('o') && $("#15_").hasClass('o') && $("#20_").hasClass('o')  && $("#25_").hasClass('o') || $("#1_").hasClass('o') && $("#7_").hasClass('o') && $("#13_").hasClass('o') && $("#19_").hasClass('o')  && $("#25_").hasClass('o') || $("#5_").hasClass('o') && $("#9_").hasClass('o') && $("#13_").hasClass('o') && $("#17_").hasClass('o')  && $("#21_").hasClass('o'))
			{o
			   alert('O wins')
			   count = 0
			   o_win++
			   $('#o_win_5').text(o_win)
	       	}

	       	var getid = document.querySelector('.enabled').id;
	       	var id = '#'+getid;
			$(id).text(x);
		    $(id).removeClass('enabled');
			$(id).addClass('disable x btn-info');
			if ($("#1_").hasClass('x') && $("#2_").hasClass('x') && $("#3_").hasClass('x') && $("#4_").hasClass('x')  && $("#4_").hasClass('x') || $("#6_").hasClass('x') && $("#7_").hasClass('x') && $("#8_").hasClass('x') && $("#9_").hasClass('x')  && $("#10_").hasClass('x') || $("#11_").hasClass('x') && $("#12_").hasClass('x') && $("#13_").hasClass('x') && $("#14_").hasClass('x')  && $("#15_").hasClass('x') || $("#16_").hasClass('x') && $("#17_").hasClass('x') && $("#18_").hasClass('x') && $("#19_").hasClass('x')  && $("#20_").hasClass('x') || $("#21_").hasClass('x') && $("#22_").hasClass('x') && $("#23_").hasClass('x') && $("#24_").hasClass('x')  && $("#25_").hasClass('x') || $("#1_").hasClass('x') && $("#6_").hasClass('x') && $("#11_").hasClass('x') && $("#16_").hasClass('x')  && $("#21_").hasClass('x') || $("#2_").hasClass('x') && $("#7_").hasClass('x') && $("#12_").hasClass('x') && $("#17_").hasClass('x')  && $("#22_").hasClass('x') || $("#3_").hasClass('x') && $("#8_").hasClass('x') && $("#13_").hasClass('x') && $("#18_").hasClass('x')  && $("#23_").hasClass('x') || $("#4_").hasClass('x') && $("#9_").hasClass('x') && $("#14_").hasClass('x') && $("#19_").hasClass('x')  && $("#24_").hasClass('x') || $("#5_").hasClass('x') && $("#10_").hasClass('x') && $("#15_").hasClass('x') && $("#20_").hasClass('x')  && $("#25_").hasClass('x') || $("#1_").hasClass('x') && $("#7_").hasClass('x') && $("#13_").hasClass('x') && $("#19_").hasClass('x')  && $("#25_").hasClass('x') || $("#5_").hasClass('x') && $("#9_").hasClass('x') && $("#13_").hasClass('x') && $("#17_").hasClass('x')  && $("#21_").hasClass('x'))
			        {
					  alert('X wins')
					  count = 0
					  x_win++
					  $('#x_win_5').text(x_win)
			        }
	  }

	   });
	    $("#reset-5").click(function () {
	    $("#game-5 li").text("+");
		$("#game-5 li").addClass('enabled')
		$("#game-5 li").removeClass('disable')
		$("#game-5 li").removeClass('o')
		$("#game-5 li").removeClass('x')
		$("#game-5 li").removeClass('btn-primary')
		$("#game-5 li").removeClass('btn-info')
		count = 0

	  });
  };
  }
});

function refresh(){
	location.reload();
	$('#typeofgame').prop('selectedIndex',0); 
	$('#formatgame').prop('selectedIndex',0);
}