window.onload = function() {
    console.log("hello")
    //start the webgazer tracker
    webgazer.setRegression('ridge') /* currently must set regression and tracker */
        .setTracker('clmtrackr')
        .setGazeListener(function(data, clock) {
             //console.log(data); /* data is an object containing an x and y key which are the x and y prediction coordinates (no bounds limiting) */
          //   console.log(clock); /* elapsed time in milliseconds since webgazer.begin() was called */
        })
        .begin()
        .showPredictionPoints(true); /* shows a square every 100 milliseconds where current prediction is */

}

var myMap = new Map();
function addToMap(string, func)
{
    myMap.set(string,func);
    console.log(myMap);
}

function drama()
{
    emptyList();
    addElement("top-drama");
    addToMap("top-drama",function(){
        gotoPage('/settings.html?=drama','top'); 
    });

    addElement("bottom-drama");
    addToMap("bottom-drama",function(){
        gotoPage('/apps.html','bottom');
    });

    addElement("right-drama");
    addToMap("right-drama",function(){
    });

    addElement("left-drama");
    addToMap("left-drama",function(){
    });

    addElement("gioconda");
    addToMap("gioconda",function(){
        openImage('/visualizzazione.html?=painting','gioconda');
    });

    addElement("urlo");
    addToMap("urlo",function(){
        openImage('/visualizzazione.html?=painting','urlo');
    });

    addElement("nafea");
    addToMap("nafea",function(){
        openImage('/visualizzazione.html?=painting','nafea');
    });

    addElement("turbante");
    addToMap("turbante",function(){
        openImage('/visualizzazione.html?=painting','turbante');
    });

    addElement("dama")
    addToMap("dama",function(){
        openImage('/visualizzazione.html?=painting','dama');
    });
}

function settingsload()
{
    emptyList();
    addElement("bottom-settings");
    addToMap("bottom-settings", function(){
        if(window.location.href.indexOf('?=') < 0)
        {
            gotoPage('/drama.html','bottom');
        }
        else
        {
            gotoPage('/' + window.location.href.substring(window.location.href.indexOf('?=') + 2) + '.html','bottom');
        }
    });

    addElement("down-bright");
    addToMap("down-bright", function(){
        decreaseBrightness();
    });

    addElement("up-bright");
    addToMap("up-bright", function(){
        increaseBrightness();
    });
    
    addElement("down-vol");
    addToMap("down-vol", function(){
        volDown();
    });

    addElement("up-vol");
    addToMap("up-vol", function(){
        volUp();
    });

}

function video()
{
    emptyList();

    addElement("top-video");
    addToMap("top-video",function(){
        gotoPage('/settings.html?=video','top');
    });

    addElement("bottom-video");
    addToMap("bottom-video",function(){
        if(window.location.href.indexOf('?=') < 0)
        {
            gotoPage('/drama.html','bottom');
        }
        else
        {
            gotoPage('/' + window.location.href.substring(window.location.href.indexOf('?=') + 2) + '.html','bottom');
        }
    });

    addElement("right-video");
    addToMap("right-video",function(){
        quadroAvanti();
    });

    addElement("left-video");
    addToMap("left-video",function(){
        quadroIndietro();
    });
    addElement("player");
    addToMap("player",function(){
        playPause();
    });
    
}

function tutorial(){
    emptyList();
    var btn = document.getElementById("eyebutton");
    btn.onclick = function(){
        var mydiv = document.getElementById("eyebutton")   ;
        mydiv.style.backgroundImage = "url('assets/ClickedEyeButton.png')";
        setTimeout(function(){
            mydiv.style.backgroundImage = "url('assets/EyeButton.png')";
        }, 600);
    }

    addElement("eyebutton");
    addToMap("eyebutton",function(){
        var mydiv = document.getElementById("eyebutton")   ;
        mydiv.style.backgroundImage = "url('assets/ClickedEyeButton.png')";
        setTimeout(function(){
            mydiv.style.backgroundImage = "url('assets/EyeButton.png')";
        }, 600);
    });

    addElement("tutorial-top");
    addToMap("tutorial-top", function(){
        gotoPage('/settings.html?=horror');
    })

    addElement("tutorial-bottom");
    addToMap("tutorial-bottom", function(){
        gotoPage('/apps.html', 'bottom');
    })


    

}

function apps() {
    emptyList();
    addElement("moviez");
    addToMap("moviez",function(){
        gotoPage('/painting.html','top');
    });

    addElement("apps-top");
    addToMap("apps-top",function(){
        gotoPage('/settings.html?=apps','top')
    })


}

document.onkeypress = function(e) {
    if(e.key == ' ')
    {
        let hovered = document.getElementsByClassName("hover")[0];
        func = myMap.get(hovered.id.toString());
        func();
            

        
        
    }
}