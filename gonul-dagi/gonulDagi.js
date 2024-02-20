const containerDiv = document.querySelector(".seats-container");
const totalAmount = document.getElementById("amountGD");
const infoText = document.querySelector(".infoText");
const seats = document.querySelectorAll(".g-dagi")


window.addEventListener("load", () => {
    const video = document.querySelector(".video")
        video.play()
        video.muted = true

})



getFromLocalStorage()

containerDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("g-dagi")) {
        // console.log(e.target);
        e.target.classList.toggle("checked")
        const selectedSeatsGD = containerDiv.querySelectorAll(".g-dagi.checked")
        // console.log(seats);
        // console.log(selectedSeatsGD);
        const selectedSeatsGDArr = [];
        const seatsArr = [];

        selectedSeatsGD.forEach((seat) => {
            selectedSeatsGDArr.push(seat)
        });

        seats.forEach((seat) => {
            seatsArr.push(seat);
        })

        let selectedSeatIndexs = selectedSeatsGDArr.map((seat) => {
            return seatsArr.indexOf(seat);
        });

        console.log(selectedSeatIndexs);

        let selectedSeatCount = selectedSeatsGD.length;
        //   console.log(selectedSeatCount);
        let price = 10
        totalAmount.textContent = selectedSeatCount * price

        saveToLocalStorage(selectedSeatIndexs);
    }

    //* ---------------------------------- */
    //*            LOCALSTORAGE            */
    //* ---------------------------------- */

    function saveToLocalStorage(indexs) {
        localStorage.setItem("selectedSeatsGD", JSON.stringify(indexs))
    }

})

function getFromLocalStorage() {
    const selectedSeatsGD = JSON.parse(localStorage.getItem("selectedSeatsGD"))
    let price = 10
    if (selectedSeatsGD != null && selectedSeatsGD.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeatsGD.indexOf(index) > -1) {
                seat.classList.add("checked")
                let selectedSeatCount = selectedSeatsGD.length;
                //   console.log(selectedSeatCount);
                totalAmount.textContent = selectedSeatCount * price
            }
        })
    }
}


