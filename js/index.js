
async function getJson(url) {
    const response = await fetch(url);
    return response.json();
}

async function getStocks() {
    const name = document.getElementById('nameOfStock');
    
    const heapSort = document.getElementById("HeapSort");
    const TimSort = document.getElementById("TimSort");
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
    console.log(jsonData.high);
    let max = jsonData.high.toFixed(2);
    let min = jsonData.low.toFixed(2);
    let timeTaken = jsonData.timeForAlgorithm;

    
    document.getElementById("maxValue").value = max;
    document.getElementById("minValue").value = min;
    document.getElementById("algorithmTime").value = timeTaken;

}   