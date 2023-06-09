let app =  document.getElementsByClassName("theApp")[0];
console.log(app)
let Outday = app.querySelector(".year-value")
console.log(Outday)
Outday.textContent = "04"
let submit = app.querySelector(".icon")
submit.addEventListener('click', ()=>{
    RemoveError()
    let day =  (app.querySelectorAll(".userInput")[0]).value;
    let month =  (app.querySelectorAll(".userInput")[1]).value;
    let year =  (app.querySelectorAll(".userInput")[2]).value;
    console.log(day+" "+month+" "+year)
    if(day == null || day == undefined || day == "") {
        console.log('Inside day condition....')
        addError("day", "empty")
    } else if (day >= 32) {
        console.log('Inside day invalid...')
        addError("day", "invalid")
    }
    if(month == null || month == undefined || month == "") {
        console.log('Inside month condition....')
        addError("month", "empty")
    } else if (month >= 13) {
        console.log('Inside month invalid...')
        addError("month", "invalid")
    }
    if(year == null || year == undefined || year == "") {
        console.log('Inside year condition....')
        addError("year", "empty")
    } else if (year >= 2023) {
        console.log('Inside year invalid...')
        addError("year", "invalid")
    }
    //console.log(day+" "+month+" "+year)
    const shortMonth = ["", "January", "Febraury", "March", "April", "May", "June", "July", "Auguest", "September", "October",
                        "November", "December"];
    console.log(typeof(day))
    if(+(day) > 30 && +(month) == 2, 4, 6, 9, 11) {
        console.log(typeof(day))
        console.log(month.charAt(0)==0)
        console.log(month.charAt(0))
        console.log(month.charAt(0)=='0')
        if(month.charAt(0)==0 || month.charAt(0)=='0') {
            month = month.replace(month.charAt(0), '')
            console.log("After trim: "+month)
        }
        console.log("Invalid Day: "+shortMonth[+(month)]+" cannot have "+day+" days")
    } else  if (+(day) >= 29 && month == 2) {
        console.log()
    }

    if(day.value != null) {
        Outday.value = null;
        day.value = null;
        month.value = null;
        year.value = null;
    }
    console.log("Click event receieved!!!")
})

const addError = (field, type) => {
        switch (field) {
            case "day" : {
                let label = (app.querySelectorAll(".input-label")[0])
                let message = (app.querySelectorAll(".error-message")[0])
                if (type == "invalid") {
                    message = (app.querySelectorAll(".error-message")[1])
                }
                let day = (app.querySelectorAll(".day-input")[0])
                day.classList.add("error")
                message.classList.remove("hide")
                label.classList.add("error-message-label")
                break;
            };
            case "month" : {
                let label = (app.querySelectorAll(".input-label")[1])
                let message = (app.querySelectorAll(".error-message")[2])
                if(type == "invalid"){
                    message = (app.querySelectorAll(".error-message")[3])
                }
                let day = (app.querySelectorAll(".month-input")[0])
                day.classList.add("error")
                message.classList.remove("hide")
                label.classList.add("error-message-label")
                break;
            };
            case "year" : {
                let label = (app.querySelectorAll(".input-label")[2])
                let message = (app.querySelectorAll(".error-message")[4])
                if(type == "invalid"){
                    message = (app.querySelectorAll(".error-message")[5])
                }
                let day = (app.querySelectorAll(".year-input")[0])
                day.classList.add("error")
                message.classList.remove("hide")
                label.classList.add("error-message-label")
                break;
            }
        }
    return
}

const RemoveError = () => {
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
    