function pickNumbers() {
    let numbers = new Set();
    while (numbers.size < 5) {
        let num = Math.floor(Math.random() * 25) + 1;
        numbers.add(num);
    }
    let resultText = "당번: " + Array.from(numbers).join(", ");

    Swal.fire({
        title: "청소당번 선정 완료!",
        text: resultText,
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#007bff"
    });

    document.getElementById("result").innerText = resultText;
}