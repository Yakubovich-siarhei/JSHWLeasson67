
function insertRow(id) {
    let valueSelect = getValue();
    let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(valueSelect))
        td1.appendChild(document.createTextNode(" из "+document.getElementById("t1").value))        
        td1.appendChild(document.createTextNode(" в "+document.getElementById("t5").value))
        td1.appendChild(document.createTextNode(" отправление "+document.getElementById("mydate").value))
        td1.appendChild(document.createTextNode(" прибытия "+document.getElementById("t3").value))
        td1.appendChild(document.createTextNode(" цена билета "+document.getElementById("t6").value))
    let td2 = document.createElement("td");
        td2.innerHTML = ' Удалить';
    row.appendChild(td1);
    row.appendChild(td2);
    // удаление
    td2.setAttribute ('onmousedown', 'this.parentNode.parentNode.removeChild (this.parentNode);');
    tbody.appendChild(row);
}

function getValue() {
    let select = document.getElementById("select");
    let value = select.value;
    return value;
}

let time, hours, miutes, seconds, day, mouth, year;
time=new Date();
year = time.getFullYear();
mouth = time.getMonth() + 1;
day = time.getDate();
hours = time.getHours();
minutes = time.getMinutes();
seconds = time.getSeconds();
if (hours <=9) hours = '0'+hours;
if (minutes <=9) minutes = '0'+minutes;
if (seconds <=9) seconds = '0'+seconds;
document.myform.mytime.value = +hours+':'+minutes+':'+seconds;

document.myform.mydate.value = +day+'.' +mouth+'.' +year 



