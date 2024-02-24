function convert(){
    const cmval = document.getElementById("input_for_cm_js").value;
    const inchval = cmval/2.54;
    const answer = document.getElementById("answer_box_cm_js")
    answer.innerHTML = inchval.toFixed(2) +" inches"

}

function convert_cel_fah(){
    const celval = document.getElementById("input_for_cel_js").value;
    const fahval = (celval*1.8)+32;
    const answer_2 = document.getElementById("answer_box_cel_js");
    answer_2.innerHTML = fahval.toFixed(3) +"^F ";
}
