let button_clicked = document.getElementById('generate_button_id')
button_clicked.addEventListener('click',generate_number);

function generate_number(){
    let random_value = Math.floor(Math.random()*91)+10;
    let final_number = random_value +"px";
    
    let get_input = document.getElementById('text_area_input').value;
    

    let result_box_update = document.getElementById('result_text_output');
    result_box_update.style.fontSize=final_number;
    result_box_update.style.fontWeight = 900;
    result_box_update.innerHTML=get_input;
    
    let font_size_display = document.getElementById('font_sixe_mentioning_id');
    font_size_display.innerHTML="Font-Sixe = "+final_number;
}



