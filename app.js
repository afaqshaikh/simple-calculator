function getNumber(num) {
    // console.log(num);
    result = document.getElementById('result');
    result.value += num
}



function clearNumber() {
    result = document.getElementById('result');
    result.value = '';
}

function equalResult() {
    result = document.getElementById('result');
    result.value = eval(result.value);
}