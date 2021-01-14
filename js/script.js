function hideapikey() {
  var x = document.getElementById("ts-api-key");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function hidechannelid() {
  var x = document.getElementById("ts-channel-id");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
/////////////////////////////////////////////////////////////////////////////////

setInterval(function () {
  // Call a function repetatively with 15 Second interval
  getThingSpeakLightState1();
  getThingSpeakLightState2();
  getThingSpeakLightState3();
  getThingSpeakLightState4();
  getThingSpeakLightState5();
  getThingSpeakLightState6();
  getThingSpeakLightState7();
  getThingSpeakLightState8();
}, 1500);

///////////////////////////////////first relay//////////////////////////////////
document.getElementById("light-on1").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url1 =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field1=1";
  $.getJSON(url1, function (data1) {
    console.log(data1);
  });
});

document.getElementById("light-off1").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field1=0";
  $.getJSON(url, function (data1) {
    console.log(data1);
  });
});

function getThingSpeakLightState1() {
  var ts_channel_id = document.getElementById("ts-channel-id").value;
  var xhttp1 = new XMLHttpRequest();
  xhttp1.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj1 = JSON.parse(this.responseText);
      if (myObj1.field1 == 1) {
        document.getElementById("LIGHTState1").innerHTML = "ON";
        document.getElementById("LightImage1").src = "on.png";
      } else {
        document.getElementById("LIGHTState1").innerHTML = "OFF";
        document.getElementById("LightImage1").src = "off.png";
      }
    }
  };
  xhttp1.open(
    "GET",
    "https://api.thingspeak.com/channels/" +
      ts_channel_id +
      "/fields/1/last.json",
    true
  );
  xhttp1.send();
}

//////////////////////////////////end relay 1//////////////////////////////////////////////////

///////////////////////////////////Second relay//////////////////////////////////
document.getElementById("light-on2").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url1 =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field2=1";
  $.getJSON(url1, function (data1) {
    console.log(data1);
  });
});

document.getElementById("light-off2").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field2=0";
  $.getJSON(url, function (data1) {
    console.log(data1);
  });
});

function getThingSpeakLightState2() {
  var ts_channel_id = document.getElementById("ts-channel-id").value;
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj2 = JSON.parse(this.responseText);
      if (myObj2.field2 == 1) {
        document.getElementById("LIGHTState2").innerHTML = "ON";
        document.getElementById("LightImage2").src = "on.png";
      } else {
        document.getElementById("LIGHTState2").innerHTML = "OFF";
        document.getElementById("LightImage2").src = "off.png";
      }
    }
  };
  xhttp2.open(
    "GET",
    "https://api.thingspeak.com/channels/" +
      ts_channel_id +
      "/fields/2/last.json",
    true
  );
  xhttp2.send();
}

//////////////////////////////////end relay 2//////////////////////////////////////////////////

///////////////////////////////////first relay//////////////////////////////////
document.getElementById("light-on3").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url1 =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field3=1";
  $.getJSON(url1, function (data1) {
    console.log(data1);
  });
});

document.getElementById("light-off3").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field3=0";
  $.getJSON(url, function (data1) {
    console.log(data1);
  });
});

function getThingSpeakLightState3() {
  var ts_channel_id = document.getElementById("ts-channel-id").value;
  var xhttp3 = new XMLHttpRequest();
  xhttp3.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj3 = JSON.parse(this.responseText);
      if (myObj3.field3 == 1) {
        document.getElementById("LIGHTState3").innerHTML = "ON";
        document.getElementById("LightImage3").src = "on.png";
      } else {
        document.getElementById("LIGHTState3").innerHTML = "OFF";
        document.getElementById("LightImage3").src = "off.png";
      }
    }
  };
  xhttp3.open(
    "GET",
    "https://api.thingspeak.com/channels/" +
      ts_channel_id +
      "/fields/3/last.json",
    true
  );
  xhttp3.send();
}

//////////////////////////////////end relay 3//////////////////////////////////////////////////

///////////////////////////////////4th relay//////////////////////////////////
document.getElementById("light-on4").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url1 =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field4=1";
  $.getJSON(url1, function (data1) {
    console.log(data1);
  });
});

document.getElementById("light-off4").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field4=0";
  $.getJSON(url, function (data1) {
    console.log(data1);
  });
});

function getThingSpeakLightState4() {
  var ts_channel_id = document.getElementById("ts-channel-id").value;
  var xhttp4 = new XMLHttpRequest();
  xhttp4.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj4 = JSON.parse(this.responseText);
      if (myObj4.field4 == 1) {
        document.getElementById("LIGHTState4").innerHTML = "ON";
        document.getElementById("LightImage4").src = "on.png";
      } else {
        document.getElementById("LIGHTState4").innerHTML = "OFF";
        document.getElementById("LightImage4").src = "off.png";
      }
    }
  };
  xhttp4.open(
    "GET",
    "https://api.thingspeak.com/channels/" +
      ts_channel_id +
      "/fields/4/last.json",
    true
  );
  xhttp4.send();
}

//////////////////////////////////end relay 4//////////////////////////////////////////////////

///////////////////////////////////5th relay//////////////////////////////////
document.getElementById("light-on5").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url1 =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field5=1";
  $.getJSON(url1, function (data1) {
    console.log(data1);
  });
});

document.getElementById("light-off5").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field5=0";
  $.getJSON(url, function (data1) {
    console.log(data1);
  });
});

function getThingSpeakLightState5() {
  var ts_channel_id = document.getElementById("ts-channel-id").value;
  var xhttp5 = new XMLHttpRequest();
  xhttp5.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj5 = JSON.parse(this.responseText);
      if (myObj5.field5 == 1) {
        document.getElementById("LIGHTState5").innerHTML = "ON";
        document.getElementById("LightImage5").src = "on.png";
      } else {
        document.getElementById("LIGHTState5").innerHTML = "OFF";
        document.getElementById("LightImage5").src = "off.png";
      }
    }
  };
  xhttp5.open(
    "GET",
    "https://api.thingspeak.com/channels/" +
      ts_channel_id +
      "/fields/5/last.json",
    true
  );
  xhttp5.send();
}

//////////////////////////////////end relay 5//////////////////////////////////////////////////

///////////////////////////////////6th relay//////////////////////////////////
document.getElementById("light-on6").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url1 =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field6=1";
  $.getJSON(url1, function (data1) {
    console.log(data1);
  });
});

document.getElementById("light-off6").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field6=0";
  $.getJSON(url, function (data1) {
    console.log(data1);
  });
});

function getThingSpeakLightState6() {
  var ts_channel_id = document.getElementById("ts-channel-id").value;
  var xhttp6 = new XMLHttpRequest();
  xhttp6.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj6 = JSON.parse(this.responseText);
      if (myObj6.field6 == 1) {
        document.getElementById("LIGHTState6").innerHTML = "ON";
        document.getElementById("LightImage6").src = "on.png";
      } else {
        document.getElementById("LIGHTState6").innerHTML = "OFF";
        document.getElementById("LightImage6").src = "off.png";
      }
    }
  };
  xhttp6.open(
    "GET",
    "https://api.thingspeak.com/channels/" +
      ts_channel_id +
      "/fields/6/last.json",
    true
  );
  xhttp6.send();
}

//////////////////////////////////end relay 6//////////////////////////////////////////////////

///////////////////////////////////7th relay//////////////////////////////////
document.getElementById("light-on7").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url1 =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field7=1";
  $.getJSON(url1, function (data1) {
    console.log(data1);
  });
});

document.getElementById("light-off7").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field7=0";
  $.getJSON(url, function (data1) {
    console.log(data1);
  });
});

function getThingSpeakLightState7() {
  var ts_channel_id = document.getElementById("ts-channel-id").value;
  var xhttp7 = new XMLHttpRequest();
  xhttp7.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj7 = JSON.parse(this.responseText);
      if (myObj7.field7 == 1) {
        document.getElementById("LIGHTState7").innerHTML = "ON";
        document.getElementById("LightImage7").src = "on.png";
      } else {
        document.getElementById("LIGHTState7").innerHTML = "OFF";
        document.getElementById("LightImage7").src = "off.png";
      }
    }
  };
  xhttp7.open(
    "GET",
    "https://api.thingspeak.com/channels/" +
      ts_channel_id +
      "/fields/7/last.json",
    true
  );
  xhttp7.send();
}

//////////////////////////////////end relay 7//////////////////////////////////////////////////

///////////////////////////////////8th relay//////////////////////////////////
document.getElementById("light-on8").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url1 =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field8=1";
  $.getJSON(url1, function (data1) {
    console.log(data1);
  });
});

document.getElementById("light-off8").addEventListener("click", function () {
  var ts_api_key = document.getElementById("ts-api-key").value;
  var url =
    "http://api.thingspeak.com/update?api_key=" + ts_api_key + "&field8=0";
  $.getJSON(url, function (data1) {
    console.log(data1);
  });
});

function getThingSpeakLightState8() {
  var ts_channel_id = document.getElementById("ts-channel-id").value;
  var xhttp8 = new XMLHttpRequest();
  xhttp8.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj8 = JSON.parse(this.responseText);
      if (myObj8.field8 == 1) {
        document.getElementById("LIGHTState8").innerHTML = "ON";
        document.getElementById("LightImage8").src = "on.png";
      } else {
        document.getElementById("LIGHTState8").innerHTML = "OFF";
        document.getElementById("LightImage8").src = "off.png";
      }
    }
  };
  xhttp8.open(
    "GET",
    "https://api.thingspeak.com/channels/" +
      ts_channel_id +
      "/fields/8/last.json",
    true
  );
  xhttp8.send();
}

//////////////////////////////////end relay 8//////////////////////////////////////////////////
