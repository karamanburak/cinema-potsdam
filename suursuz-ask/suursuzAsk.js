const containerDiv = document.querySelector(".seats-container");
const totalAmount = document.getElementById("amount");
const infoText = document.querySelector(".infoText");
const seats = document.querySelectorAll(".s-ask")


window.addEventListener("load", () => {


    const video = document.querySelector(".video")
    video.play()
    video.muted = true


})

getFromLocalStorage()

containerDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("s-ask")) {
        // console.log(e.target);
        e.target.classList.toggle("checked")
        const selectedSeatsSA = containerDiv.querySelectorAll(".s-ask.checked")
        // console.log(seats);
        // console.log(selectedSeatsSA);
        const selectedSeatsSAArr = [];
        const seatsArr = [];

        selectedSeatsSA.forEach((seat) => {
            selectedSeatsSAArr.push(seat)
        });

        seats.forEach((seat) => {
            seatsArr.push(seat);
        })

        let selectedSeatIndexs = selectedSeatsSAArr.map((seat) => {
            return seatsArr.indexOf(seat);
        });

        console.log(selectedSeatIndexs);

        let selectedSeatCount = selectedSeatsSA.length;
        //   console.log(selectedSeatCount);
        let price = 10
        totalAmount.textContent = selectedSeatCount * price

        saveToLocalStorage(selectedSeatIndexs);
    }

    //* ---------------------------------- */
    //*            LOCALSTORAGE            */
    //* ---------------------------------- */


    function saveToLocalStorage(indexs) {
        localStorage.setItem("selectedSeatsSA", JSON.stringify(indexs))
    }

})

function getFromLocalStorage() {
    const selectedSeatsSA = JSON.parse(localStorage.getItem("selectedSeatsSA"))
    let price = 10
    if (selectedSeatsSA != null && selectedSeatsSA.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeatsSA.indexOf(index) > -1) {
                seat.classList.add("checked")
                let selectedSeatCount = selectedSeatsSA.length;
                //   console.log(selectedSeatCount);
                totalAmount.textContent = selectedSeatCount * price
            }
        })
    }
}
