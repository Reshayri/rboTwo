
//rbocal
	     

    function iwh() { 
             //Объявление переменных
          var a,b,d; 
         a = +document.f.w.value,//Ввод массы вклада
         b = +document.f.h.value;//Ввод процентной ставки банка
		 
      	// Расчет
		 
		 d = (a/100) * b; d = d.toFixed(2);// расчет прибыли за год.
		 var dm = d/12;  dm = dm.toFixed(2); //доход за месяц
		 
		//Вывод результатов расчета на текстовое окно
		 document.f.ind.value = d; //годовй доход
		 document.getElementById("dm").innerHTML = " Доход за месяц " + dm; //доход за месяц
		 
		 document.getElementById("table1").style.backgroundImage = "url(images/denga.png)";
		    
         };
	 
	 
	 