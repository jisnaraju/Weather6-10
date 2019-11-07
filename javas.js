$(document).ready(function(){
    $("#button").click(a);
    function a()
    {
       var b= $("#text").val();
    
       $.ajax({
          url:"http://api.openweathermap.org/data/2.5/weather?q="+b+"&units=metric"+"&APPID=78d81f90a038fdadd18a09b488bedf7c",
          type:"GET",
          datatype:"jsonp",
          success:function(data)
          {

              document.getElementById("temperature").innerHTML=data.main.temp;
              var d=data.sys.country;
              document.getElementById("name").innerHTML= b+" "+d;
              var icon1="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
              document.getElementById("icon").src=icon1;
  
          }

       });
    }

});

$(document).ready(function(){
   $("#farhen").click(a);
   function a()
   {
      var b= $("#text").val();
   
      $.ajax({
         url:"http://api.openweathermap.org/data/2.5/weather?q="+b+"&units=metric"+"&APPID=78d81f90a038fdadd18a09b488bedf7c",
         type:"GET",
         datatype:"jsonp",
         success:function(data)
         {
            document.getElementById("temperature").innerHTML=data.main.temp;
            var x=data.main.temp;
            var y=(x*1.8)+32;
            document.getElementById("temperature").innerHTML=y;
         }

      });
   }

});

$(document).ready(function(){
   $("#celcious").click(a);
   function a()
   {
      var b= $("#text").val();
   
      $.ajax({
         url:"http://api.openweathermap.org/data/2.5/weather?q="+b+"&units=metric"+"&APPID=78d81f90a038fdadd18a09b488bedf7c",
         type:"GET",
         datatype:"jsonp",
         success:function(data)
         {
            document.getElementById("temperature").innerHTML=data.main.temp;
         }

      });
   }

});



