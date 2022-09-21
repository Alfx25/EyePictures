window.onload = function() {
    console.log("hello")

    //start the webgazer tracker
    webgazer.setRegression('ridge') /* currently must set regression and tracker */
        .setTracker('clmtrackr')
        .setGazeListener(function() {

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

setInterval(function(){ 
    if(document.getElementById("calibrator").classList.contains("show")){
        var prediction = webgazer.getCurrentPrediction()
      var video = webgazer.getVideoElementCanvas()
      var patches = webgazer.getTracker().getEyePatches(video, video["width"], video["height"])
      var a = patches.positions[63]
      var b = patches.positions[66]

      var a1 = patches.positions[64]
      var b1 = patches.positions[66]

      var a2 = patches.positions[24]
      var b2 = patches.positions[26]

      var oriz1 = patches.positions[23]
      var oriz2 = patches.positions[25]

      var distanzaX  = a[0] - b[0]
      var distanzaY = a[1] - b[1] 
      var distanza = Math.sqrt((distanzaX * distanzaX) + (distanzaY * distanzaY))

      var distanzaX  = a1[0] - b1[0]
      var distanzaY = a1[1] - b1[1] 
      var distanza2 = Math.sqrt((distanzaX * distanzaX) + (distanzaY * distanzaY))

      var distanzaX  = a2[0] - b2[0]
      var distanzaY = a2[1] - b2[1] 
      var distanza3 = Math.sqrt((distanzaX * distanzaX) + (distanzaY * distanzaY))

      var distanzaX  = oriz1[0] - oriz2[0]
      var distanzaY = oriz1[1] - oriz2[1] 
      var distanza4 = Math.sqrt((distanzaX * distanzaX) + (distanzaY * distanzaY))

      var eyeratio = (distanza + distanza2 + distanza3)/(3 * distanza4)
      if(eyeratio < 0.37){
          console.log("blink detected")
      }
    }   
    else{
    var prediction = webgazer.getCurrentPrediction()
      var video = webgazer.getVideoElementCanvas()
      var patches = webgazer.getTracker().getEyePatches(video, video["width"], video["height"])
      var a = patches.positions[63]
      var b = patches.positions[66]

      var a1 = patches.positions[64]
      var b1 = patches.positions[66]

      var a2 = patches.positions[24]
      var b2 = patches.positions[26]

      var oriz1 = patches.positions[23]
      var oriz2 = patches.positions[25]

      var distanzaX  = a[0] - b[0]
      var distanzaY = a[1] - b[1] 
      var distanza = Math.sqrt((distanzaX * distanzaX) + (distanzaY * distanzaY))

      var distanzaX  = a1[0] - b1[0]
      var distanzaY = a1[1] - b1[1] 
      var distanza2 = Math.sqrt((distanzaX * distanzaX) + (distanzaY * distanzaY))

      var distanzaX  = a2[0] - b2[0]
      var distanzaY = a2[1] - b2[1] 
      var distanza3 = Math.sqrt((distanzaX * distanzaX) + (distanzaY * distanzaY))

      var distanzaX  = oriz1[0] - oriz2[0]
      var distanzaY = oriz1[1] - oriz2[1] 
      var distanza4 = Math.sqrt((distanzaX * distanzaX) + (distanzaY * distanzaY))

      var eyeratio = (distanza + distanza2 + distanza3)/(3 * distanza4)
      if(eyeratio < 0.37){
           document.elementFromPoint(prediction.x, prediction.y).click()
          console.log("blink detected")
      }
     }
}, 350);

function drama()
{
    emptyList();
    addElement("top-page");
    addToMap("top-page",function(){
        gotoPage('/settings.html?=drama','top'); 
    });

    addElement("bottom-page");
    addToMap("bottom-drama",function(){
        gotoPage('/apps.html','bottom');
    });

    //addElement("right-drama");
    addToMap("right-drama",function(){
    });

    //addElement("left-drama");
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
            gotoPage('/painting.html','bottom');
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
}

function visual()
{
    emptyList();
    addElement("top-image");
    addToMap("top-image",function(){
        gotoPage('/settings.html?=image','top');
    });

    addElement("bottom-image");
    addToMap("bottom-image",function(){
            gotoPage('/painting.html','bottom');
    });

    addElement("right-image");
    addToMap("right-video",function(){
        quadroAvanti();
    });

    addElement("left-image");
    addToMap("left-video",function(){
        quadroIndietro();
    });
    
    addElement("pallino");
    addElement("pallino2");
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
        gotoPage('/settings.html?=image');
    })

    addElement("tutorial-bottom");
    addToMap("tutorial-bottom", function(){
        gotoPage('/apps.html', 'bottom');
    })
}

function apps() {
    emptyList();
    addElement("painting");
    addToMap("painting",function(){
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

