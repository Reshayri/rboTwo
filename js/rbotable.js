
//rbocal
	     

    function man() { 
             //Объявление переменных
		  var a; //Вклад в банке
		  var b; // Проценты банка
		  var dg; // Годовой доход
		  var dm; //доход за месяц
         a = +document.f.w.value,//Ввод массы вклада
         b = +document.f.h.value;//Ввод процентной ставки банка
		 //------------------------------------------------Percent. Income calculation-------------------------
		 per = +document.f.p.value; //Ввод процентной ставки
		 //------------------------------------------------Percent. Income calculation-------------------------
      	// Расчет
		
		dg = (a/100)*b;  //Годовой доход
		dm = dg/12;//доход за 1 месяц
	var m1 = (a+dm); m1 = m1.toFixed(2);//вклад 1 месяца
		//доход за 2 месяц
		
		var dg2 = m1/100*b;//Годовой доход 2  месяц
		var dm2 = dg2/12;//доход за 2 месяц
		var m2 = (dm2*1)+(m1*1); m2 = m2.toFixed(2);//вклад 2 месяца
		//доход за 3 месяц
		var dg3 = m2/100*b;//Годовой доход 3  месяц
		var dm3 = dg3/12;//доход за 3 месяц
		var m3 = (dm3*1)+(m2*1); m3 = m3.toFixed(2);//вклад 3 месяца
		  //доход за 4 месяц
		var dg4 = m3/100*b;//Годовой доход 4  месяц
		var dm4 = dg4/12;//доход за 4 месяц
		var m4 = (dm4*1)+(m3*1); m4 = m4.toFixed(2);//вклад 4 месяца
		  //доход за 5 месяц
		var dg5 = m4/100*b;//Годовой доход 5  месяц
		var dm5 = dg5/12;//доход за 5 месяц
		var m5 = (dm5*1)+(m4*1); m5 = m5.toFixed(2);//вклад 5 месяца
		  //доход за 6 месяц
		var dg6 = m5/100*b;//Годовой доход 6  месяц
		var dm6 = dg6/12;//доход за 6 месяц
		var m6 = (dm6*1)+(m5*1); m6 = m6.toFixed(2);//вклад 6 месяца
		 //доход за 7 месяц
		var dg7 = m6/100*b;//Годовой доход 7  месяц
		var dm7 = dg7/12;//доход за 7 месяц
		var m7 = (dm7*1)+(m6*1); m7 = m7.toFixed(2);//вклад 7 месяца
		 //доход за 8 месяц
		var dg8 = m7/100*b;//Годовой доход 8  месяц
		var dm8 = dg8/12;//доход за 8 месяц
		var m8 = (dm8*1)+(m7*1); m8 = m8.toFixed(2);//вклад 8 месяца
		 //доход за 9 месяц
		var dg9 = m8/100*b;//Годовой доход 9  месяц
		var dm9 = dg9/12;//доход за 9 месяц
		var m9 = (dm9*1)+(m8*1); m9 = m9.toFixed(2);//вклад 9 месяца
		//доход за 10 месяц
		var dg10 = m9/100*b;//Годовой доход 10  месяц
		var dm10 = dg10/12;//доход за 10 месяц
		var m10 = (dm10*1)+(m9*1); m10 = m10.toFixed(2);//вклад 10 месяца
		//доход за 11 месяц
		var dg11 = m10/100*b;//Годовой доход 11  месяц
		var dm11 = dg11/12;//доход за 11 месяц
		var m11 = (dm11*1)+(m10*1); m11 = m11.toFixed(2);//вклад 11 месяца
		//доход за 12 месяц
		var dg12 = m11/100*b;//Годовой доход 12  месяц
		var dm12 = dg12/12;//доход за 12 месяц
		var m12 = (dm12*1)+(m11*1); m12 = m12.toFixed(2);//вклад 12 месяца
		//------------------------------------------------Percent. Income calculation-------------------------
		var dgminus = dm - (dm/100)*per; dgminus = dgminus.toFixed(2); // dm - доход за 1 месяц
		//------------------------------------------------Percent. Income calculation-------------------------
		//Вывод результатов расчета на текстовое окно
		 
		 document.getElementById("a").innerHTML = "Вклад " + a; //Начальный вклад
		 //
		 document.getElementById("m1").innerHTML = m1; //Вклад в банке 1
		 document.getElementById("m2").innerHTML = m2; //Вклад в банке 2
		 document.getElementById("m3").innerHTML = m3; //Вклад в банке 3
		 document.getElementById("m4").innerHTML = m4; //Вклад в банке 4
		 document.getElementById("m5").innerHTML = m5; //Вклад в банке 5
		 document.getElementById("m6").innerHTML = m6; //Вклад в банке 6
		 document.getElementById("m7").innerHTML = m7; //Вклад в банке 7
		 document.getElementById("m8").innerHTML = m8; //Вклад в банке 8
		 document.getElementById("m9").innerHTML = m9; //Вклад в банке 9
		 document.getElementById("m10").innerHTML = m10; //Вклад в банке 10
		 document.getElementById("m11").innerHTML = m11; //Вклад в банке 11
		 document.getElementById("m12").innerHTML = m12; //Вклад в банке 12
		 //------------------------------------------------Percent. Income calculation-------------------------
		 document.getElementById("perzent").innerHTML = " Minus "+ per + " % " + " &  total " + dgminus + " Conventional Units"; //Вывод с учетом минуса процента
		 document.getElementById("table3").style.backgroundImage = "url(images/chervonez.png)";
		 //------------------------------------------------Percent. Income calculation-------------------------
		 
         };
	 
	 
	 