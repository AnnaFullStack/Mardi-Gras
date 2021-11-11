
    document.querySelector('.spn1').addEventListener('click',function(){
                document.querySelector('.card1').style.display = 'none';
          document.querySelector('.card2').style.display = 'none';
          document.querySelector('.card3').style.display = 'none';
          document.querySelector('.card4').style.display = 'none';
          document.querySelector('.card5').style.display = 'none';
          document.querySelector('.card6').style.display = 'none';
          document.querySelector('.card7').style.display = 'none';
          document.querySelector('.card8').style.display = 'none';
                 document.querySelector('.card1').style.display = 'flex';
                         document.querySelector('.model').style.display = 'flex';
     })
   document.querySelector('.spn2').addEventListener('click',function(){  document.querySelector('.card1').style.display = 'none';
          document.querySelector('.card2').style.display = 'none';
          document.querySelector('.card3').style.display = 'none';
          document.querySelector('.card4').style.display = 'none';
          document.querySelector('.card5').style.display = 'none';
          document.querySelector('.card6').style.display = 'none';
          document.querySelector('.card7').style.display = 'none';
          document.querySelector('.card8').style.display = 'none';
          
                 document.querySelector('.card2').style.display = 'flex';
        document.querySelector('.model').style.display = 'flex';
     })
          document.querySelector('.spn3').addEventListener('click',function(){   document.querySelector('.card1').style.display = 'none';
          document.querySelector('.card2').style.display = 'none';
          document.querySelector('.card3').style.display = 'none';
          document.querySelector('.card4').style.display = 'none';
          document.querySelector('.card5').style.display = 'none';
          document.querySelector('.card6').style.display = 'none';
          document.querySelector('.card7').style.display = 'none';
          document.querySelector('.card8').style.display = 'none';
          
                 document.querySelector('.card3').style.display = 'flex';
        document.querySelector('.model').style.display = 'flex';
     })
          document.querySelector('.spn4').addEventListener('click',function(){  document.querySelector('.card1').style.display = 'none';
          document.querySelector('.card2').style.display = 'none';
          document.querySelector('.card3').style.display = 'none';
          document.querySelector('.card4').style.display = 'none';
          document.querySelector('.card5').style.display = 'none';
          document.querySelector('.card6').style.display = 'none';
          document.querySelector('.card7').style.display = 'none';
          document.querySelector('.card8').style.display = 'none';
          
                 document.querySelector('.card4').style.display = 'flex';
        document.querySelector('.model').style.display = 'flex';
     })
          document.querySelector('.spn5').addEventListener('click',function(){  document.querySelector('.card1').style.display = 'none';
          document.querySelector('.card2').style.display = 'none';
          document.querySelector('.card3').style.display = 'none';
          document.querySelector('.card4').style.display = 'none';
          document.querySelector('.card5').style.display = 'none';
          document.querySelector('.card6').style.display = 'none';
          document.querySelector('.card7').style.display = 'none';
          document.querySelector('.card8').style.display = 'none';
          
                 document.querySelector('.card5').style.display = 'flex';
        document.querySelector('.model').style.display = 'flex';
     })
          document.querySelector('.spn6').addEventListener('click',function(){  document.querySelector('.card1').style.display = 'none';
          document.querySelector('.card2').style.display = 'none';
          document.querySelector('.card3').style.display = 'none';
          document.querySelector('.card4').style.display = 'none';
          document.querySelector('.card5').style.display = 'none';
          document.querySelector('.card6').style.display = 'none';
          document.querySelector('.card7').style.display = 'none';
          document.querySelector('.card8').style.display = 'none';
          
                 document.querySelector('.card6').style.display = 'flex';
        document.querySelector('.model').style.display = 'flex';
     })
          document.querySelector('.spn7').addEventListener('click',function(){  document.querySelector('.card1').style.display = 'none';
          document.querySelector('.card2').style.display = 'none';
          document.querySelector('.card3').style.display = 'none';
          document.querySelector('.card4').style.display = 'none';
          document.querySelector('.card5').style.display = 'none';
          document.querySelector('.card6').style.display = 'none';
          document.querySelector('.card7').style.display = 'none';
          document.querySelector('.card8').style.display = 'none';
          
                 document.querySelector('.card7').style.display = 'flex';
        document.querySelector('.model').style.display = 'flex';
     })
          document.querySelector('.spn8').addEventListener('click',function(){  document.querySelector('.card1').style.display = 'none';
          document.querySelector('.card2').style.display = 'none';
          document.querySelector('.card3').style.display = 'none';
          document.querySelector('.card4').style.display = 'none';
          document.querySelector('.card5').style.display = 'none';
          document.querySelector('.card6').style.display = 'none';
          document.querySelector('.card7').style.display = 'none';
          document.querySelector('.card8').style.display = 'none';
          
                 document.querySelector('.card8').style.display = 'flex';
        document.querySelector('.model').style.display = 'flex';
     })
     document.querySelector('.model').addEventListener('click',function(){
          document.querySelector('.card1').style.display = 'none';
          document.querySelector('.card2').style.display = 'none';
          document.querySelector('.card3').style.display = 'none';
          document.querySelector('.card4').style.display = 'none';
          document.querySelector('.card5').style.display = 'none';
          document.querySelector('.card6').style.display = 'none';
          document.querySelector('.card7').style.display = 'none';
          document.querySelector('.card8').style.display = 'none';
          

                     document.querySelector('.model').style.display = 'none';
     })

  
//var date1 = new Date('2022/02/01');
//var date2 = new Date();
//var difference = date1.getTime() - date2.getTime();
//var days = Math.ceil(difference / (1000 * 3600 * 24));
//document.getElementById("days").innerHTML=(days + ' days left');

var date = new Date("March 1, 2022");
var now = new Date();
var diff = date.getTime() - now.getTime();
var days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("days").innerHTML=(days + ' days left');
