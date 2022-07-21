

async function getStocks() {
    const name = document.getElementById('nameOfStock');
    const year = document.getElementById('Year');

    // const headers = {
        // 'name': name.value,
        // 'year': year.value
    // }

    fetch('http://localhost:8080/stocks/' + name.value + '/' + year.value).then(response => response.json())
    .then(data => console.log(data));
}   