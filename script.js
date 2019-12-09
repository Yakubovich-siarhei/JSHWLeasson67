function insertRow(id) {
    let valueSelect = getValue();
    let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(valueSelect))
        td1.appendChild(document.createTextNode(" из "+document.getElementById("t1").value))        
        td1.appendChild(document.createTextNode(" в "+document.getElementById("t5").value))
        td1.appendChild(document.createTextNode(" отправление "+document.getElementById("t2").value))
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



