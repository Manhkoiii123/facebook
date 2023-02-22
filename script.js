
var settingmenu = document.querySelector(".settings-menu");
var darkbtn = document.querySelector("#dark-btn");

function settingsMenuToggle(){
    settingmenu.classList.toggle("settings-menu-height");
}

darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    // lưu lại cái local 
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}

// nếu val của theme trong local là light thì gỡ 2 cái class kia đi
if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}


