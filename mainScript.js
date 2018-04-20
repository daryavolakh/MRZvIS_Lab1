function Multiplication(str,bit)
{
    var strResult = '';
    if (bit == '0')
    {
        for (var index = 0; index < str.length ; index++ )
        {
            strResult = strResult + '0';
        }
    }

    else if (bit == '1')
    {
        strResult = str;      
    }

    return strResult;
}

function Displacement(str)
{
    str = str + '0';
   return str;
}

function Add(str1, str2)
{
    var result = '';
    if (str2 == '0')
    {
        result = str1;
    }
    
    else
    {   
        var index2 = 3;
        var inwardly = 0;
        for (var index1 = str1.length - 1; index1 >= str1.length - 4 ; index1--)
        {
            if (str1[index1] == '0' && str2[index2] == '0' && inwardly == 0)
            {
                result = '0' + result;
                inwardly = 0
            }

            else if (str1[index1] == '0' && str2[index2] == '0' && inwardly == 1)
            {
                result = '1' + result;
                inwardly = 0;
            }

            else if ((str1[index1] == '0' && str2[index2] == '1' && inwardly == 0)||(str1[index1] == '1' && str2[index2] == '0' && inwardly == 0)) 
            {
                result = '1' + result;
                inwardly = 0;
            }

            else if (str1[index1] == '1' && str2[index2] == '1' && inwardly == 0)
            {
                result = '0' + result;
                inwardly = 1;
            }
            
            else if (str1[index1] == '1' && str2[index2] == '1' && inwardly == 1)
            {
                result = '1' + result;
                inwardly = 1;
            }

            else if ((str1[index1] == '0' && str2[index2] == '1' && inwardly == 1)||(str1[index1] == '1' && str2[index2] == '0' && inwardly == 1)) 
            {
                result = '0' + result;
                inwardly = 1;
            }

            index2-- ;
        }
        
        for (var index1 = str1.length - 5; index1 >= 0; index1--)
        {
            if (str1[index1] == '0' && inwardly == 0)
            {
                result = '0' + result;
                inwardly = 0;
            }

            else if (str1[index1] == '0' && inwardly == 1)
            {
                result = '1' + result;
                inwardly = 0;
            }

            else if (str1[index1] == '1' && inwardly == 0)
            {
                result = '1' + result;
                inwardly = 0;
            }

            else if (str1[index1] == '1' && inwardly == 1)
            {
                result = '0' + result;
                inwardly = 1;
            }            
        }

        if (inwardly == 1)
        {
            result = '1' + result;
        }

        return result;
    }
}
    
function CreateTable(num)
{
    var body=document.querySelector("body"),
    table=document.querySelector("table"),
    height=60,
    width=3500,
    rows=(num + 5),
    columns=14,    
    tableRow = "",
    tableData = "",
    tableHeader = "",
    firstTable = document.querySelector("table");   //???

    var table = document.createElement("table");
    table.setAttribute("width",width);
    table.setAttribute("border","1.5px");  //?????????
    table.setAttribute("bordercolor","black");    //потом ввести мои цвета
    table.setAttribute("align","center"); 

    tableRow = document.createElement("tr");    
    tableRow.setAttribute("bgcolor","#FBF0DB");
    tableHeader = document.createElement("th");    
    text = document.createTextNode("Такты");

    tableHeader.setAttribute("rowspan","2");
    tableHeader.appendChild(text);
    tableRow.appendChild(tableHeader);
  
    for (var i = 0; i < 4 ; i++)
    {
        tableHeader = document.createElement('th');
        tableHeader.setAttribute("colspan","3");
        text = document.createTextNode('Этап ' + (i + 1));
        tableHeader.appendChild(text);
        tableRow.appendChild(tableHeader);
    }

    tableHeader = document.createElement("th");
    tableHeader.setAttribute("rowspan", "2");
    text = document.createTextNode("Результат");
    tableHeader.appendChild(text);
    tableRow.appendChild(tableHeader);

    table.appendChild(tableRow);
    tableRow = document.createElement("tr");
    tableRow.setAttribute("bgcolor","#FFDAB9");

    for (var i = 3; i >= 0; i--)
    {
        tableHeader = document.createElement("th");
        text = document.createTextNode("Сдвиг");
        tableHeader.appendChild(text);
        tableRow.appendChild(tableHeader);

        tableHeader = document.createElement("th");
        text = document.createTextNode("A*b["+i+"]");
        tableHeader.appendChild(text);
        tableRow.appendChild(tableHeader);

        tableHeader = document.createElement("th");
        text = document.createTextNode("P + A*b["+i+"]");
        tableHeader.appendChild(text);
        tableRow.appendChild(tableHeader);
    }
    table.appendChild(tableRow);

    for (var r = 0; r < rows - 2; r++)
    {
        tableRow = document.createElement("tr");
        for (var c = 0; c < columns; c++)
        {
            tableData = document.createElement("td");
            tableData.id = ((r + 1) + "." + (c + 1));
            tableRow.appendChild(tableData);
            tableData.setAttribute("height",height);
        }
        table.appendChild(tableRow);
    }

    if (firstTable == null)
    {
        return body.appendChild(table);
    }
    else
    {
        var newTable = body.appendChild(table);
        return document.body.replaceChild(newTable, firstTable);
    }


/*<form>
<table width="650" border="1" cellspacing="0" cellpadding="5">
    <thead>
        <tr>
            <th rowspan="2" bgcolor="#FBF0DB">Такты</th>
            <th colspan="3" bgcolor="#DBF0DB">Этап 1</th>
            <th colspan="3" bgcolor="#DBF0DB">Этап 2</th>
            <th colspan="3" bgcolor="#DBF0DB">Этап 3</th>
            <th colspan="3" bgcolor="#DBF0DB">Этап 4</th>
        </tr>
        <tr>
            <th colspan="1" bgcolor="#FFDAB9">Сдвиг</th>
            <th colspan="1" bgcolor="#FFDAB9">A*b[3]</th>
            <th colspan="1" bgcolor="#FFDAB9">Сумма+A*b[3]</th>
                
            <th colspan="1" bgcolor="#FFDAB9">Сдвиг</th>
            <th colspan="1" bgcolor="#FFDAB9">A*b[2]</th>
            <th colspan="1" bgcolor="#FFDAB9">Сумма+A*b[2]</th>
            
            <th colspan="1" bgcolor="#FFDAB9">Сдвиг</th>
            <th colspan="1" bgcolor="#FFDAB9">A*b[1]</th>
            <th colspan="1" bgcolor="#FFDAB9">Сумма+A*b[1]</th>
                
            <th colspan="1" bgcolor="#FFDAB9">Сдвиг</th>
            <th colspan="1" bgcolor="#FFDAB9">A*b[0]</th>
            <th colspan="1" bgcolor="#FFDAB9">Сумма+A*b[0]</th>
        </tr>
    </thead>
    <thead>
       
        </thead>
    <tbody id="dynamic"></tbody>
</table>
</form>*/
}

function AddToTable(dis,mult,add,ind)
{
    tempNode1 = 0;
    tempNode2 = 2;
    for (var index = 0; index < 4; index++)
    {
        document.getElementById((index + 1 + ind) + "." + (index + 2 + tempNode1)).innerHTML =  dis[index];
        document.getElementById((index + 1 + ind) + "." + (index + 3 + tempNode1)).innerHTML = "A * b["+(5-tempNode2) +"] = " + mult[index];
        document.getElementById((index + 1 + ind) + "." + (index + 4 + tempNode1)).innerHTML = "Sum + A * b["+(5-tempNode2) +"] = " + add[index];
        tempNode1 += 2;
        tempNode2++;
    }
}

function MainFunc()
{
var numbers = document.getElementById("f1");

var numbers1 = numbers.elements[0].value.split(',');
var numbers2 = numbers.elements[1].value.split(',');
var tact = parseInt(numbers.elements[2].value);

if (numbers1.length != numbers2.length)
{
    alert("Пожалуйста, введите вектора одинаковой длины!");    
}
else 
{
    for (var ind = 0; ind < numbers1.length; ind++)
    {
        var first = parseInt(numbers1[ind]);          
        var second = parseInt(numbers2[ind]);
        
        if (first > 16 || second > 16)
        {
            alert("Пожалуйста, введите число от 0 до 15!");   //+ должна быть какая-то переменная для выхода
        }
    }
    CreateTable(numbers1.length);

    for(var i = 1;i < numbers1.length + 4; i++)
    {
        document.getElementById(i+"."+1).innerHTML="Такты: "+(i*tact);
    }

    for (var ind = 0; ind < numbers1.length; ind++)
    {
        var first = parseInt(numbers1[ind]);            
        var second = parseInt(numbers2[ind]);
        var firstToString = first.toString(2);
        var secondToString = second.toString(2);
        var partSum = '0000';        
        var dis = new Array(0);
        var mult = new Array(0);
        var add = new Array(0);
        
        if (firstToString.length == 3 || firstToString.length == 2 || firstToString.length == 1)
        {
            firstToString = '0'+ firstToString;
            if (firstToString.length < 4)
            {
                firstToString = '0'+ firstToString;
                if (firstToString.length < 4)
                {
                    firstToString = '0'+ firstToString;
                }
            }
        }
        
        if (secondToString.length == 3 || secondToString.length == 2 || secondToString.length == 1)
            {
                secondToString = '0'+ secondToString;
                if (secondToString.length < 4)
                {
                    secondToString = '0'+ secondToString;
                    if (secondToString.length < 4)
                    {
                        secondToString = '0'+ secondToString;
                    }
                }
            }
           
            var tempNode1 = 0;  
            var tempNode2 = 2;
        for (var index = 0; index < secondToString.length; index++)
        {
            console.log('ЭТАП ' + index);
           // console.log(firstToString);
           // console.log(secondToString);
            var multRes = '';
            var addRes = '';
            var data = '';
            
            partSum = Displacement(partSum);
            dis.push(partSum);

            multRes = Multiplication(firstToString, secondToString[index]);
            mult.push(multRes);

            partSum = Add(partSum,multRes);
            add.push(partSum);
            
            console.log('сумма: ' +partSum);
            tempNode1 += 2;
            tempNode2++;
        }
        AddToTable(dis,mult,add,ind);
        }
    }

    
    
}


    //столбцов 13, строк - 4*n + 2!!!!!



