/*
    Author: Volakh Darya
    Realization of the table: Alexander Yakutin
*/

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
    var body = document.querySelector("body"),
    table = document.querySelector("table"),
    height = 60,
    width = 3500,
    rows = (num + 5),
    columns = 13,    
    tableRow = "",
    tableData = "",
    tableHeader = "",
    firstTable = document.querySelector("table");  
    var table = document.createElement("table");

    table.setAttribute("width",width);
    table.setAttribute("border","1.5px");  
    table.setAttribute("bordercolor","black"); 

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
}

function AddToTable(dis,mult,add,index,A,B,ind)
{
    var k = 0;
    tempNode1 = 0;
    tempNode2 = 2;
    for (var index = 0; index < 4; index++)
    {
        var k = index - 1;
        if (dis[index].length == 7)
            dis[index] = '0' + dis[index];
            else if (dis[index].length == 6)
            dis[index] = '00' + dis[index];
            else if (dis[index].length == 5)
            dis[index] = '000' + dis[index];

            if (add[index].length == 7)
            add[index] = '0' + add[index];
            else if (add[index].length == 6)
            add[index] = '00' + add[index];
            else if (add[index].length == 5)
            add[index] = '000' + add[index];       

        if (index == 0)
        {
            var tenA = parseInt(A,2);
            var tenB = parseInt(B,2);
            document.getElementById((index + 1 + ind) + "." + (index + 2 + tempNode1)).innerHTML =  "A[" + ind + "] = " + A + "<sub>2</sub> = " + tenA + "<sub>10</sub>" + "<br>B[" + ind + "] = " + B + "<sub>2</sub> = " + tenB + "<sub>10</sub>" + "<br>P = " + dis[index];
        } 
        else 
        {
            document.getElementById((index + 1 + ind) + "." + (index + 2 + tempNode1)).innerHTML = add[index - 1] + "<br>P = " + dis[index];
        }

        document.getElementById((index + 1 + ind) + "." + (index + 3 + tempNode1)).innerHTML = "P = " + dis[index] + "<br>A = " + A + "<br>b["+(5-tempNode2) +"] = " + B[index] + "<br>A * b["+(5-tempNode2) +"] = " + mult[index];
        
        if (index == 3)
        {
            var ten = parseInt(add[index],2);
            document.getElementById((index + 1 + ind) + "." + (index + 4 + tempNode1)).innerHTML = "P = " + dis[index] + "<br>A * b["+(5-tempNode2) +"] = " + mult[index] + "<br>P + A * b["+(5-tempNode2) +"] = " + add[index] + "<br><b>Ответ: " + add[index] + "<sub>2</sub> = " + ten + "<sub>10</sub>";
        }
        else 
        {
            document.getElementById((index + 1 + ind) + "." + (index + 4 + tempNode1)).innerHTML = "P = " +  dis[index] + "<br>A * b["+(5-tempNode2) +"] = " + mult[index] + "<br>P + A * b["+(5-tempNode2) +"] = " + add[index];
        }
        tempNode1 += 2;
        tempNode2++;
    }
}

function MainFunc()
{
    var regexp = new RegExp();
    regexp = /(\d[0-6])|\d/;
    var numbers = document.getElementById("f1");

    var numbers1 = numbers.elements[0].value.split(',');
    var numbers2 = numbers.elements[1].value.split(',');
    var tact = parseInt(numbers.elements[2].value);


    if (numbers.elements[2].value == "" || numbers.elements[0].value == "" || numbers.elements[1].value == "") 
    {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    if (tact == 0) 
    {
        alert("Пожалуйста, введите натуральное число!"); 
        return;
    }

    if (numbers1.length != numbers2.length)
    {
        alert("Пожалуйста, введите вектора одинаковой длины!");   
        return; 
    }
    else 
    {
        for (var ind = 0; ind < numbers1.length; ind++)
        {
            if (regexp.test(numbers1[ind]) == false || regexp.test(numbers2[ind]) == false)
            {
                alert("Пожалуйста, введите числа!!!");  
                return;
            }

            var first = parseInt(numbers1[ind]);          
            var second = parseInt(numbers2[ind]);
            
            if (first > 15 || second > 15)
            {
                alert("Пожалуйста, введите числа от 0 до 15!");  
                return;
            }
        }
        CreateTable(numbers1.length);

        for(var ind = 1; ind < numbers1.length + 4; ind++)
        {
            document.getElementById(ind+"."+1).innerHTML="Такты: "+(ind*tact);
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

            for (var index = 0; index < secondToString.length; index++)
            {
                console.log('ЭТАП ' + index);
                var multRes = '';                
                
                console.log(partSum);
                partSum = Displacement(partSum);
                dis.push(partSum);
                console.log("сдвиг = " + partSum);

                multRes = Multiplication(firstToString, secondToString[index]);
                mult.push(multRes);
                console.log("произведение" + multRes);

                partSum = Add(partSum,multRes);
                add.push(partSum);                
                console.log('сумма: ' +partSum);
            }

            AddToTable(dis,mult,add,index,firstToString,secondToString,ind);
        }
    }
} 