studentarray = [];
function submit() {
    var display_student_array = [];
    for (var j = 1; j<=4; j++) {
        var name_of_student = document.getElementById("student"+j).value;
        console.log("name_of_student");
        studentarray.push(name_of_student);
    }
    console.log(studentarray);
    var length = studentarray.length;
    console.log(length);
    for (var k = 0; k < length; k++) {
        display_student_array.push("<h4>name -" + studentarray[k]+"</h4>");
        console.log(display_student_array);
    }
    document.getElementById("display_name_commas").innerHTML = display_student_array;
    var remove_commas  = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sort() {
    studentarray.sort();
    console.log(studentarray);
    var display_student_array_sorting = [];

    var length = studentarray.length;
    console.log(length);
    for (var k = 0; k < length; k++) {
        display_student_array_sorting.push("<h4>name -" + studentarray[k]+"</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas  = display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
