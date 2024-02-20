const containerDiv = document.querySelector(".seats-container");
const totalAmount = document.getElementById("amount");
const infoText = document.querySelector(".infoText");
const seats = document.querySelectorAll(".b-t-dawns")


window.addEventListener("load", () => {


    const video = document.querySelector(".video")
    video.play()
    video.muted = true


})

getFromLocalStorage()

containerDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("b-t-dawns")) {
        console.log(e.target);
        e.target.classList.toggle("checked")
        const selectedSeatsBTD = containerDiv.querySelectorAll(".b-t-dawns.checked")
        // console.log(seats);
        // console.log(selectedSeatsBTD);
        const selectedSeatsBTDArr = [];
        const seatsArr = [];

        selectedSeatsBTD.forEach((seat) => {
            selectedSeatsBTDArr.push(seat)
        });

        seats.forEach((seat) => {
            seatsArr.push(seat);
        })

        let selectedSeatIndexs = selectedSeatsBTDArr.map((seat) => {
            return seatsArr.indexOf(seat);
        });

        console.log(selectedSeatIndexs);

        let selectedSeatCount = selectedSeatsBTD.length;
        //   console.log(selectedSeatCount);
        let price = 10
        totalAmount.textContent = selectedSeatCount * price

        saveToLocalStorage(selectedSeatIndexs);
    }

    //* ---------------------------------- */
    //*            LOCALSTORAGE            */
    //* ---------------------------------- */


    function saveToLocalStorage(indexs) {
        localStorage.setItem("selectedSeatsBTD", JSON.stringify(indexs))
    }

})

function getFromLocalStorage() {
    const selectedSeatsBTD = JSON.parse(localStorage.getItem("selectedSeatsBTD"))
    let price = 10
    if (selectedSeatsBTD != null && selectedSeatsBTD.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeatsBTD.indexOf(index) > -1) {
                seat.classList.add("checked")
                let selectedSeatCount = selectedSeatsBTD.length;
                //   console.log(selectedSeatCount);
                totalAmount.textContent = selectedSeatCount * price
            }
        })
    }
}
