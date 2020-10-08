// get XML request
window.addEventListener("load", (e) => {
    let req = () => {
        const request = new XMLHttpRequest(); //! api is ready to use
        request.open("GET", "http://localhost:3000/people"); //! so'rov jo'natdik
        request.setRequestHeader("Content-type", "application/json") //! sarlavha qo'ydik qanaqa turdagi tur kerakligini kiritdik
        request.send();//! yubordik
        request.addEventListener("load", () => {
            let data = JSON.parse(request.response);
            console.log(data)
            data.forEach(element => {
                console.log(element)
                let card = document.createElement("div")
                card.classList.add("card")
                let app = document.querySelector(".app")
                if(element.jinsi == "male") {
                    icon = "icons/mars.png"
                }else{
                    icon = "icons/female.png"
                }
                card.innerHTML = `
                <img class="card_img" src="${element.photo}">
                <div class="name">${element.name} ${element.surname}</div>
                <div class="jinsi"><img src="${icon}"></div>
                <div class="age">${element.age}</div>
                <button class="number_btn">Number</button>
                `;
                app.appendChild(card)
                
            }
            );
            
        })
    }
    
    let btn = document.querySelector("button");
    btn.addEventListener("click", req, {once: true})

})