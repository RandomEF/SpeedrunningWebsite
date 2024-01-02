function AcceptCookies(){
    document.cookie = "cookieAcceptance=1";
    localStorage.cookieAcceptance = 1;
}
function RejectCookies(){
    document.cookie = "cookieAcceptance=0";
    localStorage.cookieAcceptance = 0;
}
function GetCookies(cookieName){
    let name = cookieName + '=';
    let cookieArray = document.cookie.split(";");
    for(let i = 0; i < cookieArray.length; i++){
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' '){
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0){
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}
function GetCookieArray(cookieName){
    let cookieArray = document.cookie.split(";")
    const cookieOutputArray = [];
    for(let i = 0; i < cookieArray.length; i++){
        let cookie = cookieArray[i];
        while(cookie.charAt(0) == ' '){
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0){
            cookieOutputArray.push(cookie);
        }
    }
    return cookieOutputArray;
}