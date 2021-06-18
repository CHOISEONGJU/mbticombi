var arr = [];

//영역지정
for (var i = 0; i <= 15; i++) {
	arr[i] = [];
	for (var j = 0; j <= 15; j++) {
		arr[i][j] = 0;
	}
}
//오른쪽 아래 큰부분
for (var i = 4; i <= 15; i++) {
	for (var j = 4; j <= 15; j++) {
		arr[i][j] = 5;
	}
}
//왼쪽 위
for (var i = 0; i <= 7; i++) {
	for (var j = 0; j <= 7; j++) {
		arr[i][j] = 7;
	}
}
//오른쪽 아래 작은부분
for (var i = 12; i <= 15; i++) {
	for (var j = 12; j <= 15; j++) {
		arr[i][j] = 7;
	}
}
//왼쪽 위
for (var i = 0; i <= 3; i++) {
	for (var j = 8; j <= 15; j++) {
		arr[i][j] = 1;
	}
}
//왼쪽 아래
for (var i = 8; i <= 15; i++) {
	for (var j = 0; j <= 3; j++) {
		arr[i][j] = 1;
	}
}
//노란부분
for (var i = 8; i <= 11; i++) {
	for (var j = 8; j <= 11; j++) {
		arr[i][j] = 3;
	}
}
(arr[0][3] = 9), (arr[3][0] = 9);
(arr[0][5] = 9), (arr[5][0] = 9);
(arr[1][2] = 9), (arr[2][1] = 9);
(arr[1][4] = 9), (arr[4][1] = 9);
(arr[2][7] = 9), (arr[7][2] = 9);
(arr[3][8] = 9), (arr[8][3] = 9);
(arr[4][7] = 9), (arr[7][4] = 9);
(arr[4][12] = 3), (arr[12][4] = 3);
(arr[4][13] = 3), (arr[13][4] = 3);
(arr[4][14] = 3), (arr[14][4] = 3);
(arr[4][15] = 3), (arr[15][4] = 3);
(arr[5][6] = 9), (arr[6][5] = 9);
(arr[6][12] = 3), (arr[12][6] = 3);
(arr[6][13] = 3), (arr[13][6] = 3);
(arr[6][14] = 3), (arr[14][6] = 3);
(arr[6][15] = 9), (arr[15][6] = 9);
(arr[7][12] = 3), (arr[12][7] = 3);
(arr[7][13] = 3), (arr[13][7] = 3);
(arr[7][14] = 3), (arr[14][7] = 3);
(arr[7][15] = 3), (arr[15][7] = 3);
(arr[8][13] = 9), (arr[13][8] = 9);
(arr[8][15] = 9), (arr[15][8] = 9);
(arr[9][12] = 9), (arr[12][9] = 9);
(arr[9][14] = 9), (arr[14][9] = 9);
(arr[10][13] = 9), (arr[13][10] = 9);
(arr[10][15] = 9), (arr[15][10] = 9);
(arr[11][12] = 9), (arr[12][11] = 9);
(arr[11][14] = 9), (arr[14][11] = 9);

var arr2 = [];
(arr2[0] = "INFP"), (arr2[1] = "ENFP");
(arr2[2] = "INFJ"), (arr2[3] = "ENFJ");
(arr2[4] = "INTJ"), (arr2[5] = "ENTJ");
(arr2[6] = "INTP"), (arr2[7] = "ENTP");
(arr2[8] = "ISFP"), (arr2[9] = "ESFP");
(arr2[10] = "ISTP"), (arr2[11] = "ESTP");
(arr2[12] = "ISFJ"), (arr2[13] = "ESFJ");
(arr2[14] = "ISTJ"), (arr2[15] = "ESTJ");

function show() {
	let number = document.getElementById('num').value;
	for (var i = 1; i <= 5; i++) {
		document.getElementById('f' + i).style.display = 'none';
	}
	$('#howmany').hide();
	for (var i = 1; i <= number; i++) {
		$('#f' + i).show();
	}
	$('#friend').show();
	$('#but').show();
}

function regist() {
	let number2 = document.getElementById('num').value;
	if (number2 == 2) {
		let mbti_1 = document.getElementById('mbti1').value;
		let mbti_2 = document.getElementById('mbti2').value;
		let score_max = 0;
		let arrValues = [];
		for (var mbti_3 = 0; mbti_3 <= 15; mbti_3++) {
			let score1 = arr[mbti_1];
			let score2 = score1[mbti_2];
			let score3 = arr[mbti_1];
			let score4 = score3[mbti_3];
			let score5 = arr[mbti_2];
			let score6 = score5[mbti_3];
			let score = ((score2 + score4 + score6) / 27) * 100;
			let mbti_max = arr2[mbti_3];
			if (score > score_max) {
				score_max = score;
				arrValues = [];
				arrValues.push(mbti_max);
			} else if (score == score_max) {
				arrValues.push(mbti_max);
			}
		}
		
		$('#friend').hide();
		$('.reset').show();
		
		var myString1 = arrValues.toString();
		document.getElementById('result').innerText = myString1 + '\n' +Math.ceil(score_max)+"점!!";
		
	} else if (number2 == 3) {
		let mbti_1 = document.getElementById('mbti1').value;
		let mbti_2 = document.getElementById('mbti2').value;
		let mbti_3 = document.getElementById('mbti3').value;
		let score_max = 0;
		let arrValues = [];
		for (var mbti_4 = 0; mbti_4 <= 15; mbti_4++) {
			var array = [mbti_1, mbti_2, mbti_3, mbti_4];
			let score3 = 0;
			for (var i = 0, item; (item = array[i]); i++) {
				let score1 = arr[item];
				for (var j = i + 1, item2; (item2 = array[j]); j++) {
					let item2 = array[j];
					let score2 = score1[item2];
					score3 = score3 + score2;
				}
			}
			let score = (score3 / 54) * 100;
			let mbti_max = arr2[mbti_4];
			if (score > score_max) {
				score_max = score;
				arrValues = [];
				arrValues.push(mbti_max);
			} else if (score == score_max) {
				arrValues.push(mbti_max);
			}
		}
		$('#friend').hide();
		$('.reset').show();
		var myString1 = arrValues.toString();
		document.getElementById('result').innerText = myString1;
		
		
	} else if (number2 == 4) {
		let mbti_1 = document.getElementById('mbti1').value;
		let mbti_2 = document.getElementById('mbti2').value;
		let mbti_3 = document.getElementById('mbti3').value;
		let mbti_4 = document.getElementById('mbti4').value;
		let score_max = 0;
		let arrValues = [];
		for (var mbti_5 = 0; mbti_5 <= 15; mbti_5++) {
			var array = [mbti_1, mbti_2, mbti_3, mbti_4, mbti_5];
			let score3 = 0;
			for (var i = 0, item; (item = array[i]); i++) {
				let score1 = arr[item];
				for (var j = i + 1, item2; (item2 = array[j]); j++) {
					let item2 = array[j];
					let score2 = score1[item2];
					score3 = score3 + score2;
				}
			}
			let score = (score3 / 90) * 100;
			let mbti_max = arr2[mbti_5];
			if (score > score_max) {
				score_max = score;
				arrValues = [];
				arrValues.push(mbti_max);
			} else if (score == score_max) {
				arrValues.push(mbti_max);
			}
		}
		$('#friend').hide();
		$('.reset').show();
		var myString1 = arrValues.toString();
		document.getElementById('result').innerText = myString1;
		
	} else {
		let mbti_1 = document.getElementById('mbti1').value;
		let mbti_2 = document.getElementById('mbti2').value;
		let mbti_3 = document.getElementById('mbti3').value;
		let mbti_4 = document.getElementById('mbti4').value;
		let mbti_5 = document.getElementById('mbti5').value;
		let score_max = 0;
		let arrValues = [];
		for (var mbti_6 = 0; mbti_6 <= 15; mbti_6++) {
			var array = [mbti_1, mbti_2, mbti_3, mbti_4, mbti_5, mbti_6];
			let score3 = 0;
			for (var i = 0, item; (item = array[i]); i++) {
				let score1 = arr[item];
				for (var j = i + 1, item2; (item2 = array[j]); j++) {
					let item2 = array[j];
					let score2 = score1[item2];
					score3 = score3 + score2;
				}
			}
			let score = (score3 / 135) * 100;
			let mbti_max = arr2[mbti_6];
			if (score > score_max) {
				score_max = score;
				arrValues = [];
				arrValues.push(mbti_max);
			} else if (score == score_max) {
				arrValues.push(mbti_max);
			}
		}
		$('#friend').hide();
		$('.reset').show();
		var myString1 = arrValues.toString();
		document.getElementById('result').innerText = myString1;
	}

	$('.reset').click(function (e) {
		e.preventDefault();
		//$("#layer").css("display","block");
		//$("#layer").show();
		//$("#layer").fadeIn();
		$('#layer').slideDown();
	});
	$('#layer .close').click(function (e) {
		e.preventDefault();
		//$("#layer").css("display","none");
		//$("#layer").hide();
		//$("#layer").fadeOut();
		location.reload();
	});
}