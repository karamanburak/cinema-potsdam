const containerDiv = document.querySelector(".seats-container");
const totalAmount = document.getElementById("amount");
const infoText = document.querySelector(".infoText");
const seats = document.querySelectorAll(".z-gelegen")



getFromLocalStorage()

containerDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("z-gelegen")) {
        // console.log(e.target);
        e.target.classList.toggle("checked")
        const selectedSeatsZG = containerDiv.querySelectorAll(".z-gelegen.checked")
        // console.log(seats);
        // console.log(selectedSeatsZG);
        const selectedSeatsZGArr = [];
        const seatsArr = [];

        selectedSeatsZG.forEach((seat) => {
            selectedSeatsZGArr.push(seat)
        });

        seats.forEach((seat) => {
            seatsArr.push(seat);
        })

        let selectedSeatIndexs = selectedSeatsZGArr.map((seat) => {
            return seatsArr.indexOf(seat);
        });

        console.log(selectedSeatIndexs);

        let selectedSeatCount = selectedSeatsZG.length;
        //   console.log(selectedSeatCount);
        let price = 10
        totalAmount.textContent = selectedSeatCount * price

        saveToLocalStorage(selectedSeatIndexs);
    }

    //* ---------------------------------- */
    //*            LOCALSTORAGE            */
    //* ---------------------------------- */


    function saveToLocalStorage(indexs) {
        localStorage.setItem("selectedSeatsZG", JSON.stringify(indexs))
    }

})

function getFromLocalStorage() {
    const selectedSeatsZG = JSON.parse(localStorage.getItem("selectedSeatsZG"))
    let price = 10
    if (selectedSeatsZG != null && selectedSeatsZG.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeatsZG.indexOf(index) > -1) {
                seat.classList.add("checked")
                let selectedSeatCount = selectedSeatsZG.length;
                //   console.log(selectedSeatCount);
                totalAmount.textContent = selectedSeatCount * price
            }
        })
    }
}

