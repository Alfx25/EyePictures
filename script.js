var opacity = 0.1;
var caliShow = false;
var volume = 1.0;


document.addEventListener('keydown', function(event) 
{
    if(event.keyCode == 67) 
    {
        toggleCalibrator();
    }
});

function gotoPage(url, dir)
{
    //url = "/EyePictures" + url; //for testing on github
    var client = new XMLHttpRequest();
    client.open('GET', url);
    
    var oldColor = window.getComputedStyle(document.getElementById("border-" + dir), null).getPropertyValue("background-color");
    document.getElementById("border-" + dir).classList.add("transition");
    document.getElementById("content").className = "transition-" + dir;
    
    client.onload = function() 
    {
        var page = client.responseText;
        var content = page.substring(page.indexOf('<div id="content">') + 18, page.indexOf('</div> <!-- end of content -->'));
        var title = page.substring(page.indexOf('<title>') + 7, page.indexOf('</title>'));
        document.body.style.backgroundColor = oldColor;
        
        setTimeout(function () 
        {
            document.getElementById("content").innerHTML = content;
            window.history.pushState({}, title, url);
            document.title = title;
            document.getElementById("content").classList.add("in");
            document.body.style.backgroundColor = "var(--background)";
            
            setTimeout(function () 
            {
                document.getElementById("content").className = " ";
            }, 805);
        }, 550);
    }
    client.send();
}

function getUrlParam(parameter, defaultvalue)
{
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1)
    {
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}

function increaseBrightness()
{
    if(opacity >= 0.1)
    {
        opacity = opacity - 0.1;
        document.getElementById("brightness").style.opacity = opacity;
    }
}

function decreaseBrightness()
{
    if(opacity < 0.7)
    {
        opacity = opacity + 0.1;
        document.getElementById("brightness").style.opacity = opacity;
    }
}


function quadroAvanti() 
{   
    var file = document.getElementById("immagine").getAttribute('src')
    if(file.includes("urlo")){
        document.getElementById("immagine").setAttribute('src', '/film/bacio.jpeg')
    }
    if(file.includes("bacio")){
        document.getElementById("immagine").setAttribute('src', '/film/gioconda.jpeg')
    }
    if(file.includes("gioconda")){
        document.getElementById("immagine").setAttribute('src', '/film/nere.jpeg')
    }
    if(file.includes("nere")){
        document.getElementById("immagine").setAttribute('src', '/film/suora.jpeg')
    }
    if(file.includes("suora")){
        document.getElementById("immagine").setAttribute('src', '/film/urlo.jpeg')
    }
} 


function quadroIndietro() 
{   
    var file = document.getElementById("immagine").getAttribute('src')
    if(file.includes("urlo")){
        document.getElementById("immagine").setAttribute('src', '/film/suora.jpeg')
    }
    if(file.includes("suora")){
        document.getElementById("immagine").setAttribute('src', '/film/nere.jpeg')
    }
    if(file.includes("nere")){
        document.getElementById("immagine").setAttribute('src', '/film/gioconda.jpeg')
    }
    if(file.includes("gioconda")){
        document.getElementById("immagine").setAttribute('src', '/film/bacio.jpeg')
    }
    if(file.includes("bacio")){
        document.getElementById("immagine").setAttribute('src', '/film/urlo.jpeg')
    }
} 

function openImage(url, quadri)
{
    //url = "/EyePictures" + url; //for testing on github
    var client = new XMLHttpRequest();
    client.open('GET', url);
    
    document.getElementById(quadri).style = "top: -50px; left: -50px; overflow: visible; transition: all 1s ease; z-index: 2000;";
    document.getElementById(quadri + "-img").style = "filter: brightness(0%); width: 100vw; height: 100vh; top: 0; left: 0; transition: width 1s ease, height 0.5s ease";
    
    client.onload = function() 
    {
        var page = client.responseText;
        var content = page.substring(page.indexOf('<div id="content">') + 18, page.indexOf('</div> <!-- end of content -->'));
        var title = page.substring(page.indexOf('<title>') + 7, page.indexOf('</title>'));
        
        setTimeout(function () 
        {
            document.getElementById("content").innerHTML = content;
            window.history.pushState({}, title, url);
            document.title = title;
            document.getElementById("immagine").setAttribute("src", "/quadri/" + quadri + ".jpeg")
        }, 1000);
    }
    client.send();
}

function toggleCalibrator()
{
    if(caliShow)
    {
        document.getElementById("calibrator").className = " ";
        document.getElementById("webgazerVideoFeed").className = " ";
        document.getElementById("webgazerFaceOverlay").className = " ";
        document.getElementById("webgazerFaceFeedbackBox").className = " ";
        webgazer.removeMouseEventListeners()
        caliShow = false;
    }
    else
    {
        document.getElementById("calibrator").className = "show";
        document.getElementById("webgazerVideoFeed").className = "show";
        document.getElementById("webgazerFaceOverlay").className = "show";
        document.getElementById("webgazerFaceFeedbackBox").className = "show";
        webgazer.addMouseEventListeners()
        caliShow = true;
    }
}
