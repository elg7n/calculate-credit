const payment = document.querySelector(".payment");
const calculate = document.querySelector(".calculate");
const clean=document.querySelector(".clean");
calculate.addEventListener("click", function () {
    payment.innerHTML="";
    let perMonth = document.querySelector(".per-month");
    let cost = document.querySelector(".cost");
    let percent = document.querySelector(".percent");
    let total=+cost.value+(cost.value*percent.value/100)*perMonth.value;

    let currentDate = new Date();
    for (let i = 1; i <= perMonth.value; i++) {
        let div = document.createElement("div");
        div.classList.add("col-2-5", "me-4", "mb-4","py-3", "border");
        let p = document.createElement("p");
        p.classList.add("text-center")
        let calc=total/perMonth.value;
        calc=Math.floor(calc);
        if(i==perMonth.value){
            calc=total-((perMonth.value-1)*calc);
        }
        p.innerHTML = `${calc} ₼`
        div.append(p);
        let span = document.createElement("span");
        span.style.marginLeft="69px";
        currentDate.setDate(currentDate.getDate()+30)
        let year=currentDate.getFullYear();
        let month=currentDate.getMonth()+1;
        let day=currentDate.getDate();
        month=(month<10)?"0"+month:month;
        day=(day<10)?"0"+day:day;
        let date=`${day}-${month}-${year}`;
        span.innerHTML=date;
        div.append(span);
        payment.append(div);
    }
    let h2=document.createElement("h2");
    h2.innerHTML=`Toplam: ${total} ₼`;
    payment.append(h2);
});

clean.addEventListener("click",function(){
   payment.innerHTML="";
});