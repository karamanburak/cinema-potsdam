const containerDiv = document.querySelector(".seats-container");
const totalAmount = document.getElementById("amount");
const infoText = document.querySelector(".infoText");
const seats = document.querySelectorAll(".siccin")

 let price = 10

window.addEventListener("load", () => {
        const video = document.querySelector(".video");
        video.play();
        video.muted = true;
        
})

getFromLocalStorage()

containerDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("siccin")) {
        
        // console.log(e.target);
        e.target.classList.toggle("checked")
        const selectedSeatsSC = containerDiv.querySelectorAll(".siccin.checked")
        // console.log(seats);
        // console.log(selectedSeatsSC);
        const selectedSeatsSCArr = [];
        const seatsArr = [];

        selectedSeatsSC.forEach((seat) => {
            selectedSeatsSCArr.push(seat)
        });

        seats.forEach((seat) => {
            seatsArr.push(seat);
        })

        let selectedSeatIndexs = selectedSeatsSCArr.map((seat) => {
            return seatsArr.indexOf(seat);
        });

        console.log(selectedSeatIndexs);

        let selectedSeatCount = selectedSeatsSC.length;
        //   console.log(selectedSeatCount);
       
        totalAmount.textContent = selectedSeatCount * price

        saveToLocalStorage(selectedSeatIndexs);
    }

    //* ---------------------------------- */
    //*            LOCALSTORAGE            */
    //* ---------------------------------- */


    function saveToLocalStorage(indexs) {
        localStorage.setItem("selectedSeatsSC", JSON.stringify(indexs))
    }

})

function getFromLocalStorage() {
    const selectedSeatsSC = JSON.parse(localStorage.getItem("selectedSeatsSC"))
    let price = 10
    if (selectedSeatsSC != null && selectedSeatsSC.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeatsSC.indexOf(index) > -1) {
                seat.classList.add("checked")
                let selectedSeatCount = selectedSeatsSC.length;
                //   console.log(selectedSeatCount);
              totalAmount.textContent = selectedSeatCount*price
            }
        })
    }
}


