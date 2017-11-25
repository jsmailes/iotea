var requesturl = "/"

function submitValues(temp, time) {
  alert(temp + " " + time);
  request("enqueue", {temp: temp, time: time}, function(r){
    alert(":O");
  });
  return false;
}

function request(func, data, _callback) {
    var r;
    var error;
    var url = requesturl + func;
    $.post(url, data, function(ret, status, xhr){
        if (status == "success") {
            r = ret;
            console.log(r);
            if (r.success == true) { //to make sure callback is always called if leaving/ending
                _callback(r);
            }
            else {
                alert(r.error);
            }
        }
        else {
            //error
        }
    }, "json");
}
