let seconds = 00;
let miliseconds = 00;
let mins = 00;           /* for minute value */
let getseconds = document.querySelector('.seconds');
let getmiliseconds = document.querySelector('.miliseconds');
let getmins = document.querySelector ('.mins');
let btnstart = document.querySelector('.btn-start');
let btnstop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-Reset'); /* btn is a Button */
let interval;


btnstart.addEventListener('click',()=>{   
    clearInterval(interval);
    interval = setInterval(startTimer,10);
    })

btnstop.addEventListener('click',()=>{
    clearInterval(interval);
})
btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    miliseconds = '00';
    seconds = '00';
    mins = '00'
    getseconds.innerHTML = seconds; 
    getmiliseconds.innerHTML = miliseconds;
    getmins. innerHTML = mins;
})



function startTimer(){
    miliseconds++;

    if(miliseconds<=9){
        getmiliseconds.innerHTML = '0'+ miliseconds;
    }
   if(miliseconds>9){
        getmiliseconds.innerHTML = miliseconds;
    }
    if(miliseconds>99){
        seconds++;
        getseconds.innerHTML = '0' + seconds;
        miliseconds = 0;
        getmiliseconds.innerHTML = '0' + seconds
        }
    if(seconds > 9){
        getseconds.innerHTML = seconds;

    }
    if(seconds > 59){
        mins++;
        getmins.innerHTML = '0'+ mins;
        seconds = 0;
        getmins.innerHTML = '0' + mins;
    }
    if (mins > 9){
        getseconds.innerHTML = mins;
    }
    
}
