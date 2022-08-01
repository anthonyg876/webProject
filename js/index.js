
async function getJson(url) {
    const response = await fetch(url);
    return response.json();
}

async function getStocks() {
    const name = document.getElementById('nameOfStock');
    
    const heapSort = document.getElementById("HeapSort");
    const TimSort = document.getElementById("TimSort");
    let outPut;
    let algorithm;

    console.log(TimSort.checked);
    console.log(heapSort.value);
    

    document.getElementById("outPutStock").value = document.getElementById('nameOfStock').value;

    if (document.getElementById("HeapSort").checked) {
        algorithm = heapSort;
    }
    else {
        algorithm = TimSort;
    }

    const jsonData = await getJson('http://localhost:8080/stocks/' + name.value + "/" + algorithm.value);

    console.log({ jsonData });
}   