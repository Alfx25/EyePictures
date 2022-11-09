window.onload = function () {
  //start the webgazer tracker
  webgazer
    .setRegression("ridge") /* currently must set regression and tracker */
    .setTracker("clmtrackr")
    .setGazeListener(function () {})
    .begin()
    .showPredictionPoints(
      true
    ); /* shows a square every 100 milliseconds where current prediction is */
  setInterval(function () {
    document.getElementById("text").style.opacity = 100;
  }, 4000);
};

var myMap = new Map();
function addToMap(string, func) {
  myMap.set(string, func);
  console.log(myMap);
}

var validator = 0;
setInterval(function () {
  prediction = webgazer.getCurrentPrediction();
  console.log(document.elementFromPoint(prediction.x, prediction.y));
  if (
    document
      .elementFromPoint(prediction.x, prediction.y)
      .parentElement.classList.contains("hover") ||
    document
      .elementFromPoint(prediction.x, prediction.y)
      .classList.contains("hover")
  ) {
    validator++;

    if (validator == 3) {
      document.elementFromPoint(prediction.x, prediction.y).click();
      validator = 0;
    }
  } else validator = 0;
}, 1000);

function painting() {
  emptyList();
  addElement("top-page");
  addToMap("top-page", function () {
    gotoPage("/settings.html?=drama", "top");
  });

  addElement("bottom-page");
  addToMap("bottom-drama", function () {
    gotoPage("/apps.html", "bottom");
  });

  //addElement("right-drama");
  addToMap("right-drama", function () {});

  //addElement("left-drama");
  addToMap("left-drama", function () {});

  addElement("gioconda");
  addToMap("gioconda", function () {
    openImage("/visualizzazione.html?=painting", "gioconda");
  });

  addElement("urlo");
  addToMap("urlo", function () {
    openImage("/visualizzazione.html?=painting", "urlo");
  });

  addElement("vangogh");
  addToMap("vangogh", function () {
    openImage("/visualizzazione.html?=painting", "vangogh");
  });

  addElement("nafea");
  addToMap("nafea", function () {
    openImage("/visualizzazione.html?=painting", "nafea");
  });

  addElement("turbante");
  addToMap("turbante", function () {
    openImage("/visualizzazione.html?=painting", "turbante");
  });

  addElement("dama");
  addToMap("dama", function () {
    openImage("/visualizzazione.html?=painting", "dama");
  });
}

function settingsload() {
  emptyList();
  addElement("bottom-settings");
  addToMap("bottom-settings", function () {
    if (window.location.href.indexOf("?=") < 0) {
      gotoPage("/painting.html", "bottom");
    } else {
      gotoPage(
        "/" +
          window.location.href.substring(
            window.location.href.indexOf("?=") + 2
          ) +
          ".html",
        "bottom"
      );
    }
  });

  addElement("down-bright");
  addToMap("down-bright", function () {
    decreaseBrightness();
  });

  addElement("up-bright");
  addToMap("up-bright", function () {
    increaseBrightness();
  });
}

function visual() {
  emptyList();
  addElement("top-image");
  addToMap("top-image", function () {
    gotoPage("/settings.html?=image", "top");
  });

  addElement("bottom-image");
  addToMap("bottom-image", function () {
    gotoPage("/painting.html", "bottom");
  });

  addElement("right-image");
  addToMap("right-video", function () {
    quadroAvanti();
  });

  addElement("left-image");
  addToMap("left-video", function () {
    quadroIndietro();
  });

  addElement("pallino");
  addElement("pallino2");
}

function apps() {
  emptyList();
  addElement("painting");
  addToMap("painting", function () {
    gotoPage("/painting.html", "top");
  });

  addElement("apps-top");
  addToMap("apps-top", function () {
    gotoPage("/settings.html?=apps", "top");
  });
}

document.onkeypress = function (e) {
  if (e.key == " ") {
    let hovered = document.getElementsByClassName("hover")[0];
    func = myMap.get(hovered.id.toString());
    func();
  }
};

var csvFileData = new Array();

setInterval(function () {
  prediction = webgazer.getCurrentPrediction();
  var value = [prediction.x, prediction.y];
  csvFileData.push(value);
  console.log(csvFileData);
}, 100);

function download_csv_file() {
  //define the heading for each row of the data
  var csv = "X position, Y position\n";
  //merge the data with CSV
  csvFileData.forEach(function (row) {
    csv += row.join(",");
    csv += "\n";
  });

  //display the created CSV data on the web browser
  document.write(csv);

  var hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  hiddenElement.target = "_blank";

  //provide the name for the CSV file to be downloaded
  hiddenElement.download = "Gaze positions.csv";
  hiddenElement.click();
}
