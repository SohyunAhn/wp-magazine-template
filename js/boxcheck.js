function searchCheck(){
    var search = document.getElementById("search");

    if(search.value == ""){
        alert("검색어를 입력하세요.");
        search.focus();
        search.style.border = "1px solid #cf0000";
        search.onkeydown = search.onmousedown = function(){search.style.border="1px solid #bababa";};
        return false;
    }
}
function newsletterCheck(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var textBox = [ name, email ];
    var textBoxInfo = [ "이름", "이메일주소" ];

    for(var i=0; i<textBox.length; i++){
        if(textBox[i].value == ""){
            alert(textBoxInfo[i]+"(이)가 빈칸입니다.\n확인해주세요!");
            textBox[i].focus();
            textBox[i].style.border = "1px solid #f00";
            textBox[i].onkeydown = textBox[i].onmousedown = function(){textBox[i].style.border="1px solid #bababa";};
            return false;
        }
    }
}