'use strict';

//сортировка двух массивов с числами и строками
var twoArraysSort = function (arrNum, arrStr) {
  for (var i = 0; i < arrNum.length - 1; i++) {
    var minValueArrNum = arrNum[i];
    var minValueArrStr = arrStr[i];
    for (var j = i + 1; j < arrNum.length; j++) {
      if (minValueArrNum < arrNum[j]) {
        minValueArrNum = arrNum[j];
        var swap = arrNum[i];
        arrNum[i] = minValueArrNum;
        arrNum[j] = swap;

        minValueArrStr = arrStr[j];
        swap = arrStr[i];
        arrStr[i] = minValueArrStr;
        arrStr[j] = swap;
      }
    }
  }
  return arrNum;
  return arrStr;
};

// поиск максимального значения в массиве
var maxArrayValue = function (arr) {
var max = -1;
var maxIndex = -1;
for (var i = 0; i < arr.length; i++) {
  var arrMax = arr[i];
  if (max < arrMax) {
    max = arrMax;
    maxIndex = i;
    }
  }
  return max;
};

//статистика
window.renderStatistics = function (ctx, names, times) {
  //левый край свитка
  ctx.beginPath(0, 80);
  ctx.lineTo(85, 80);
  ctx.lineTo(85, 295);
  ctx.lineTo(0, 295);
  ctx.lineTo(50, 185);
  ctx.lineTo(0, 80);
  ctx.fillStyle = '#CE9959';
  ctx.fill();

  ctx.beginPath(85, 295);
  ctx.lineTo(85, 250);
  ctx.lineTo(70, 250);
  ctx.lineTo(85, 295);
  ctx.fillStyle = '#a57c44';
  ctx.fill();

  //правый край свитка
  ctx.beginPath(700, 80);
  ctx.lineTo(615, 80);
  ctx.lineTo(615, 295);
  ctx.lineTo(700, 295);
  ctx.lineTo(650, 185);
  ctx.lineTo(700, 80);
  ctx.fillStyle = '#CE9959';
  ctx.fill();

  ctx.beginPath(615, 295);
  ctx.lineTo(615, 250);
  ctx.lineTo(630, 250);
  ctx.lineTo(615, 295);
  ctx.fillStyle = '#a57c44';
  ctx.fill();

  //центральная часть свитка
  ctx.fillStyle = '#EFBF7F';
  ctx.fillRect(70, 0, 560, 250);

  ctx.fillStyle = '#2e2313';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!\nСписок результатов:', 170, 35);

  console.log(times);
  console.log(names);
  twoArraysSort(times, names);
  console.log(times);
  console.log(names);

  console.log(maxArrayValue(times));

  var maxTime = maxArrayValue(times);

  //гистрограмма
  var histogramHeight = 150; //px
  var histogramStep = histogramHeight / maxTime;
  var barX = 270;
  var barStep = 50;
  var barY = 200;
  var barWidth = 40;
  var namesY = 215;
  var timesY = 235;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255,0,0,1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,128,' + Math.random() + ')';
    }
    ctx.fillRect(barX + barStep * i, barY, barWidth, -(times[i] * histogramStep));
    ctx.fillText(names[i], barX + barStep * i, namesY);
    ctx.fillText(times[i].toFixed(), barX + barStep * i, timesY);
  }
}
