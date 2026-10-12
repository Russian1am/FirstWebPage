function show_aboutpage(){
    const text_element = document.querySelector("#about-page-div");
    if (invisible === 1){
        text_element.classList.remove("hidden");
        text_element.classList.add("text_div");
        button1.textContent = "Open text";
        invisible = false;
    }
    else{
        text_element.classList.add("hidden");
        text_element.classList.remove("text_div");
        button1.textContent = "Hide text";
        invisible = true;
    }


}


let shown_part = false;
const button1 = document.getElementById("home_page_button");

