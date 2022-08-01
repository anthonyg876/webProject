
async function getStocks() {
    const name = document.getElementById('nameOfStock');
    const year = document.getElementById('Year');

    document.getElementById("outPutStock").value = document.getElementById('nameOfStock').value;

    fetch('http://localhost:8080/stocks/' + name.value).then(response => response.json())
    .then(data => console.log(data));
}   