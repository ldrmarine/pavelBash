// JavaScript Document

var dayarray=new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота")

function getthedate(){
var mydate=new Date()
mydate=new Date(mydate.getFullYear(), mydate.getMonth(), mydate.getDate(), mydate.getHours(), mydate.getMinutes(), mydate.getSeconds())
var year=mydate.getYear()
if (year < 1000)
year+=1900
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()
if (daym<10)
daym="0"+daym
month=month+1
if (month<10)
month="0"+month
var hours=mydate.getHours()
var minutes=mydate.getMinutes()
var seconds=mydate.getSeconds()
if (hours<=9)
hours="0"+hours
if (minutes<=9)
minutes="0"+minutes
if (seconds<=9)
seconds="0"+seconds
//change font size here
var cdate="<b>"+hours+":"+minutes+":"+seconds+"</b> " + dayarray[day]+" <b>"+daym+"."+month+"."+year+"</b>"

if (document.all)
document.all.clock.innerHTML=cdate
else if (document.getElementById)
document.getElementById("clock").innerHTML=cdate
else
document.write(cdate)
}
if (!document.all&&!document.getElementById)
getthedate()
function goforit(){
if (document.all||document.getElementById)
setInterval("getthedate()",1000)
}