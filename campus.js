function showLocale(objD)
{
    var str,colorhead;
    var yy = objD.getYear();
    if(yy<1900) yy = yy+1900;
    var MM = objD.getMonth()+1;
    if(MM<10) MM = '0' + MM;
    var dd = objD.getDate();
    if(dd<10) dd = '0' + dd;
    var ww = objD.getDay();
    if  ( ww > 0 && ww < 6 )  colorhead="<font color=\"#F8F8FF\">";
    if  (ww==0)  ww="星期日";
    if  (ww==1)  ww="星期一";
    if  (ww==2)  ww="星期二";
    if  (ww==3)  ww="星期三";
    if  (ww==4)  ww="星期四";
    if  (ww==5)  ww="星期五";
    if  (ww==6)  ww="星期六";
    if  (ww==0)  ww="星期日";
    str = colorhead + yy + "-" + MM + "-" + dd + " "  + "  " + ww;
    return(str);
}
function tick()
{
    var today;
    today = new Date();
    document.getElementById("localtime").innerHTML = showLocale(today);
    window.setTimeout("tick()", 1000);
}
tick();
