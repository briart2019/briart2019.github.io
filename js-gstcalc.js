function findgst() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);

    console.log(subtotal)

    if (subtotal <= 0) {
        alert("Please Enter A Positive Number")
    }

    if (isNaN(subtotal)) {
        alert("Please Enter A Number")
    }

    else if (subtotal > 0) {
        let gst = (subtotal / 100) * 15;
        document.getElementById("gst")
            .value = "GST = $" + gst.toFixed(2);
        
        let total = subtotal + gst;
        document.getElementById("total")
            .value = "Total = $" + total.toFixed(2);
        }

}

