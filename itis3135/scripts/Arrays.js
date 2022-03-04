var person = [];
var salary = [];

function displayResults() {
    var average = salary[0];
    var max = salary[0];
    var x = salary.length;


    for (var i=0; i < x; i++) {
        if (max < salary[i]) {
            max = salary[i];
        }
    }

    for (var i=1; i < x; i++) {
        average += salary[i];
    }
        average = parseInt(average / x);

    if (person.length > 0) {
        var text = "The Highest salary is $" + max;
        var avg = "The average is $" + average;
    }
    else {
        text = "The list is empty. Please add an employee to the list"
        avg = ""
    }
    

    document.getElementById("results1").innerHTML = text;
    document.getElementById("results2").innerHTML = avg;
    


}


function displaySalary() {
    
    var html = "";
    for (var i = 0; i < person.length; i++) {
        html += "<tr><td>" + person[i] + "</td><td>" + salary[i] + "</td></tr>";
    }
    html += "</table>";
    

    return document.getElementById("results_table").innerHTML = html;
}

function addSalary() {
    
    var entry = document.getElementById("employee").value;
    
    if (person.includes(entry) == true) {
        alert(entry + " is already in the list");
    }
    else {
        person.push(entry);

        switch (entry) {
            case "Jeff Bezos":
                salary.push(20000000);
                break;
            
            case "Michael Phelps":
                salary.push(7000);
                break;
            
            case "Freddie Mercury":
                salary.push(6000);
                break;

            case "Humphrey Jenkins":
                salary.push(90000);
                break;

            case "Kenny Nguyen":
                salary.push(50000000);
                break;

            case "Daft Punk":
                salary.push(10000);
                break;
            
            case "Zendaya":
                salary.push(10000);
                break;
        }
    }

    document.getElementById("employee").focus();

    

}

function reset() {
    person = [];
    salary = [];
    document.getElementById("employee").focus();
}