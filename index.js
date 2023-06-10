const app =  document.getElementsByClassName("theApp")[0];
window.onload = function() {
   let inputs = app.querySelectorAll(".userInput")
    inputs.forEach (field => {
        field.value = ''
    })
}
console.log(app)

let errorDisplayed = false

const validateDay = (day) => {
    let validInput = true;
    console.log(typeof(day)+" "+day)
    let str = ""+day+"";
    if(day === undefined || day === "") { 
        console.log('Inside day condition....')
        validInput = false
        addError("day", "empty")
    } else if (day >= 32 || day <= 0 || str.match(/[^0-9]/g)) {
            console.log('Inside day invalid...')
            validInput = false
            addError("day", "invalid")
    }
    if (validInput && errorDisplayed) {
        RemoveError("day")
    }
    return validInput
}

const validateMonth = (month) => {
    let validInput = true;
    console.log(typeof(month)+" "+month)
    let str = ""+month+"";
    if(month === undefined || month === "") {
        console.log('Inside month condition....')
        validInput = false
        addError("month", "empty")
    } else if (month >= 13 || month <= 0 || str.match(/[^0-9]/g)) {
        console.log('Inside month invalid...')
        validInput = false
        addError("month", "invalid")
    }
    if (validInput && errorDisplayed) {
        RemoveError("month")
    }
    return validInput
}

const validateYear = (year) => {
    let validInput = true;
    console.log(typeof(year)+" "+year)
    let str = ""+year+""
    if(year === undefined || year === "") {
        console.log('Inside year condition....')
        validInput = false;
        addError("year", "empty")
    } else if (year >= 2023) {
        console.log('Inside year invalid...')
        validInput = false;
        addError("year", "invalid")
    } else if (str.match(/[^0-9]/g) || year < 0) {
        console.log('Improper value receieved....')
        validInput = false;
        addError("year", "improper")
    }
    if(validInput && errorDisplayed) {
        RemoveError("year")
    }
    return validInput
}

const dayField = app.querySelectorAll(".userInput")[0];
dayField.addEventListener('input', (event)=>{
    event.preventDefault()
    let day = (dayField.value)
    console.log("Day receieved is :::"+day)
    validateDay(day)
})

const monthField = app.querySelectorAll(".userInput")[1];
monthField.addEventListener ('input', (event)=>{
    event.preventDefault()
    let month = (monthField.value)
    console.log("Month received is :::"+month)
    validateMonth(month)
})

const yearField = app.querySelectorAll(".userInput")[2];
yearField.addEventListener('input', (event)=>{
    event.preventDefault()
    let year = (yearField.value)
    console.log("Year receieved is :::"+year)
    validateYear(year)
})

const submit = app.querySelector(".icon")
submit.addEventListener('click', ()=>{
    RemoveError()
    let day =  (app.querySelectorAll(".userInput")[0]).value;
    let month =  (app.querySelectorAll(".userInput")[1]).value;
    let year =  (app.querySelectorAll(".userInput")[2]).value;
    let validDate = (validateDay(day) && validateMonth(month) && validateYear(year))
    let input = year+month+day
    input = +(input)
    console.log(day+" "+month+" "+year)
    console.log(input+" "+typeof(input))
    if (validDate) {
        ageCalculator(input)
    }
    console.log("Click event receieved!!!")
})

const addError = (field, type) => {
    RemoveError(field)
    console.log("To Add Received :"+field+" "+"for"+" "+type)
        switch (field) {
            case "day" : {
                let label = (app.querySelectorAll(".input-label")[0])
                let message = (app.querySelectorAll(".null-day")[0])
                if (type == "invalid") {
                    message = (app.querySelectorAll(".invalid-day")[0])
                }
                let day = (app.querySelectorAll(".day-input")[0])
                day.classList.add("error")
                message.classList.remove("hide")
                label.classList.add("error-message-label")
                break;
            };
            case "month" : {
                let label = (app.querySelectorAll(".input-label")[1])
                let message = (app.querySelectorAll(".null-month")[0])
                if(type == "invalid"){
                    message = (app.querySelectorAll(".invalid-month")[0])
                }
                let day = (app.querySelectorAll(".month-input")[0])
                day.classList.add("error")
                message.classList.remove("hide")
                label.classList.add("error-message-label")
                break;
            };
            case "year" : {
                let label = (app.querySelectorAll(".input-label")[2])
                let message = (app.querySelectorAll(".null-year")[0])
                if(type == "invalid"){
                    message = (app.querySelectorAll(".invalid-year")[0])
                } else if (type == "improper") {
                    message = (app.querySelectorAll(".improper-year")[0])
                }
                let day = (app.querySelectorAll(".year-input")[0])
                day.classList.add("error")
                message.classList.remove("hide")
                label.classList.add("error-message-label")
                break;
            }
        }
        errorDisplayed = true;
    return
}

const RemoveError = (field) => {
    console.log("To remove Received :"+field)
    switch (field) {
        case "day" : {
            let label = (app.querySelectorAll(".input-label")[0])
            let message = (app.querySelectorAll(".null-day")[0])
            let invalidmessage = (app.querySelectorAll(".invalid-day")[0])
            let day = (app.querySelectorAll(".day-input")[0])
            
            label.classList.remove("error-message-label")
            day.classList.remove("error")
            message.classList.add("hide")
            invalidmessage.classList.add("hide")
            break;
        };
        case "month" : {
            let label = (app.querySelectorAll(".input-label")[1])
            let message = (app.querySelectorAll(".null-month")[0])
            let invalidmessage = (app.querySelectorAll(".invalid-month")[0])
            let month = (app.querySelectorAll(".month-input")[0])

            label.classList.remove("error-message-label")
            month.classList.remove("error")
            message.classList.add("hide")
            invalidmessage.classList.add("hide")
            break;
        };
        case "year" : {
            let label = (app.querySelectorAll(".input-label")[2])
            let message = (app.querySelectorAll(".null-year")[0])
            let invalidmessage = (app.querySelectorAll(".invalid-year")[0])
            let impropermessage = (app.querySelectorAll(".improper-year")[0])
            let year = (app.querySelectorAll(".year-input")[0])

            label.classList.remove("error-message-label")
            year.classList.remove("error")
            message.classList.add("hide")
            impropermessage.classList.add("hide")
            invalidmessage.classList.add("hide")
            break;
        }
        default : {
            let labels = app.querySelectorAll(".input-label")
            let messages =  app.querySelectorAll(".error-message")
            let fields =  app.querySelectorAll(".error")
            labels.forEach(label => {
                label.classList.remove("error-message-label")
            })
            messages.forEach(message => {
                message.classList.add("hide")
            })
            fields.forEach(field => {
                field.classList.remove("error")
            })
        }
    }
    errorDisplayed = false;
}

const Outday = app.querySelector(".day-value")
const OutMonth = app.querySelector(".month-value")
const OutYear = app.querySelector(".year-value")
function ageCalculator(revalue) {  
    //collect input from HTML form and convert into date format  
    console.log("Inside function ::::::::::::: "+typeof(revalue))
    var userinput = revalue;  
    var dob = new Date(userinput);  
       
    //extract and collect only date from date-time string  
    var mdate = userinput.toString();  
    var dobYear = parseInt(mdate.substring(0,4), 10);  
    var dobMonth = parseInt(mdate.substring(4,6), 10);  
    var dobDate = parseInt(mdate.substring(6,8), 10);  
    
    console.log("After String splitting :::::: "+dobYear+" "+dobMonth+" "+dobDate)

    //get the current date from system  
    var today = new Date();  
    //date string after broking  
    var birthday = new Date(dobYear, dobMonth-1, dobDate);  
      
    //calculate the difference of dates  
    var diffInMillisecond = today.valueOf() - birthday.valueOf();  
  
    //convert the difference in milliseconds and store in day and year variable          
    var year_age = Math.floor(diffInMillisecond / 31536000000);  
    var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
  
    //when birth date and month is same as today's date        
    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {  
            alert("Happy Birthday!");  
        }  
          
     var month_age = Math.floor(day_age/30);          
     day_age  = day_age % 30;  
          
     var tMnt= (month_age + (year_age*12));  
     var tDays =(tMnt*30) + day_age;  
       
    //DOB is greater than today's date, generate an error: Invalid date    
     if (dob>today) {  
        Outday.innerHTML = ("Invalid date input - Please try again!");  
      }  
      else {  
        Outday.innerHTML = day_age
        OutMonth.innerHTML = month_age 
        OutYear.innerHTML =  year_age
      }   
}  
    