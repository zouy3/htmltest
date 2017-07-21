$.ajax({
    type:"get",
    url:"http://127.0.0.1:5000/get",
    datatype:"json",
    success:function(data) {
        creat(data)
    }
})

function creat(tmp) {
    for (var i = 0; i < tmp.length; i ++) {
        var tr = document.createElement('tr');
        var tdname = document.createElement('td');
        var tdtype = document.createElement('td');
        var tdnum = document.createElement('td');
        tdname.innerHTML = tmp[i].name;
        tdtype.innerHTML = tmp[i].type;
        tdnum.innerHTML = tmp[i].num;
        tr.appendChild(tdname);
        tr.appendChild(tdtype);
        tr.appendChild(tdnum);
        var tbody = document.getElementById('mtbody');
        tbody.appendChild(tr);
    }
}
