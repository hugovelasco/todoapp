let full_list = document.querySelectorAll(".check-btn");

full_list.forEach((item_list) => {

    let clicked = false;

    item_list.addEventListener('click', () => {
        if (!clicked) {
            console.log(item_list.children.namedItem);
            // item_list.querySelector('.check-btn ~ span').classList.add('.done-task');

            item_list.classList.add('check-icon');
            item_list.setAttribute('style', 'background: linear-gradient(90deg, rgb(87, 221, 255), rgb(192, 88, 243))');

            clicked = true;
        } else {

            item_list.classList.remove('check-icon');
            item_list.setAttribute('style', 'background: transparent');

            clicked = false;
        }


    });
});

document.addEventListener('keypress', (event) => {
    let input_text = document.getElementById("insert-todo").value;
    let ul_html = document.getElementById("all-items-list");
    let li_html = '<li class="flex-row">'
                + '<button type = "button" class="check-btn" ></button>'
                + '<span>'+input_text+'</span>'
                + '<button type="button" class="cross-mark-btn"></button>'
                + '</li > ';
    if (event.key === "Enter") {
        if (input_text != "" && input_text.charAt(0) != " ") {

            ul_html.innerHTML += li_html;

        } else {
            alert("Input não pode ser vazio");
        }
    }
});