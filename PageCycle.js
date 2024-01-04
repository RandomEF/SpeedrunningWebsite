const pages = ["Speedrunning", "Disclaimer", "Categories", "Glitches", "TAS", "Cheating", "Glossary"];
const filename = location.pathname.split('/').pop().slice(0, -5);
const backLink = document.getElementById("backLink");
const forwardLink = document.getElementById("forwardLink");
for (var i = 0; i < pages.length; i++){
    if (pages[i] == filename){
        if (i == 0){
            forwardLink.href = pages[i + 1] + ".html";
            forwardLink.innerHTML = pages[i + 1] + " »";
            backLink.innerHTML = '';
            break
        } else if (i == pages.length - 1){
            backLink.href = pages[i - 1] + ".html";
            backLink.innerHTML = "« " + pages[i - 1];
            forwardLink.innerHTML = '';
            break
        } else {
            backLink.href = pages[i - 1] + ".html";
            backLink.innerHTML = "« " + pages[i - 1];
            forwardLink.href = pages[i + 1] + ".html";
            forwardLink.innerHTML = pages[i + 1] + " »";
            break
        }
    }
}
const sandwhichElement = document.getElementById(filename);
sandwhichElement.style.backgroundColor = '#006d77';
const sandwhichLink = sandwhichElement.querySelector("a");
sandwhichLink.style.color = 'rgb(220, 220, 220)';

function GetNextPage(){
    return pages[i + 1];
}
function GetNextLink(){
    return pages[i + 1] + ".html";
}