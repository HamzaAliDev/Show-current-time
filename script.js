let newDate = new Date();
let year = newDate.getFullYear();

let dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let monthName = ['January','Fedruary','March','April','May','June','July','August','September','Octuber','November','December']

// footer year display
function handleFooter(){
    document.getElementById('footer-section').innerHTML= "&copy;"+ year +".All Rights Reserved."
    // console.log(year);
}

// header date Display
setInterval(()=> {
    let newDate = new Date();
    let year = newDate.getFullYear();
    let day = newDate.getDay();
    let month = newDate.getMonth();
    let date = newDate.getDate();
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes()
    let second = newDate.getSeconds()

        let confirmDay = dayName[day]
        let confirmMonth = monthName[month]
        // check hour and maradian
        let confirmHour = null
        let maradian = "am"
        if(hour>12){
            confirmHour = hour%12
            maradian = "pm"
        }else{
            confirmHour = hour
            if(confirmHour == 12){
                maradian = "am"
            }
        }    
        
        let datePostfix = "th";
        switch (date) {
            case 1:
                datePostfix = "st"
                break;
            case 2:
                datePostfix = "nd"
                break;
            case 3:
                datePostfix = "rd"
                break;
            case 21:
                datePostfix = "st"
                break;
            case 22:
                datePostfix = "nd"
                break;
            case 23:
                datePostfix = "rd"
                break;
        
            default:
                datePostfix = "th"
        }

        document.getElementById('header-section').innerHTML = `${confirmDay}, ${confirmMonth} ${date}${datePostfix}  ${year}, ${confirmHour}:${minutes}: ${second} ${maradian}`
    },1000)



handleFooter();