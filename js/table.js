var str = [{'name':'5510','type':'xigu','num':'20'},
{'name':'3005','type':'xigu','num':'10'},
{'name':'3310','type':'tanfen','num':'10'}]
var tmp = str;

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
	var tbody = document.getElementById('tbody');
	tbody.appendChild(tr);
}