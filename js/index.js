 function BarCodeFn() {
          var barCode=document.getElementById("barcode").value;
          var num=parseInt(barCode); 
          var yaddas =Number(barCode.substr(0, 12));
           var strNum=barCode.split(""); 
           var lastNum = strNum.pop(); 
           var lastNumber=parseInt(lastNum);
           var num="";
           var sum=0;
           var multi_3=1;
           var num2="";
           var sum2=0;
           var lastNum_10="";

       /*double place*/  
            for (var i = 0; i < strNum.length; i++) {
               if (i%2!==0) {
                 num=parseInt(strNum[i]);
                 sum+=num;
                 multi_3=sum*3;
                 console.log(multi_3);
             }
            }

          /*single place*/  
          for (var i = 0; i < strNum.length; i++) {
               if (i%2==0) {
                 num2=parseInt(strNum[i]);

                 sum2+=num2;
                 console.log(sum2)
             }
          }
            lastNum_10=multi_3+sum2;

         /*last metod*/
            var son="";
      	   if (10-(lastNum_10 % 10) == lastNumber) {

      	         document.getElementById('result').innerHTML="The code is correct!"
      	   }    else{
      	         document.getElementById('result').innerHTML="The code is wrong!"
      	   }   
 }