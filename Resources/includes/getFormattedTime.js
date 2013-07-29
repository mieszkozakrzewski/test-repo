function getFormattedTime()  
{  
    var amPM = '';  
    var d = new Date();  
    var currentHour = d.getHours();  
    if (currentHour < 12)  
    {  
        amPM = 'AM';  
    }  
    else  
    {  
        amPM = 'PM';  
    }  
    if (currentHour == 0)  
    {  
        currentHour = 12;  
    }  
    if (currentHour > 12)  
    {  
        currentHour = currentHour - 12;  
    }  
    var currentMinute = d.getMinutes();  
    currentMinute = currentMinute + '';  
    if (currentMinute.length == 1)  
    {  
         currentMinute = '0' + currentMinute;  
    }
      
    var formattedTime = currentHour + ':' + currentMinute + ' ' + amPM;
    
    return formattedTime;  
}  

