let seconds=0;
let minutes=0;
let hours=0;
let displayseconds=0;
let displayminutes=0;
let displayhours=0;
let interval=null;
let status="stopped";
function stopWatch()
{
    seconds++;
    if(seconds/60==1){
        seconds=0;
        minutes++;
        if(minutes/60==1){
            minutes=0;
            hours++;
        }
    }

    if(seconds<10)
    {
        displayseconds="0"+ seconds.toString();
    }
    else
    {
    displayseconds=seconds;
    }
    if(minutes<10)
    {
        displayminutes="0"+ minutes.toString();
    }
    else
    {
    displayminutes=minutes;
    }
    if(hours<10)
    {
        displayhours="0"+ hours.toString();
    }
    else
    {
    displayhours=hours;
    }
    document.getElementById("display").innerHTML=displayhours +":" + displayminutes +":" + displayseconds;

}
function startstop(){

    if(status=="stopped")
    {
    interval=window.setInterval(stopWatch,1000);
    document.getElementById("startstop").innerHTML="STOP";
    status="start";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML="START";
        status="stopped";
    }

}
function reset(){
    window.clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("startstop").innerHTML="START";
}