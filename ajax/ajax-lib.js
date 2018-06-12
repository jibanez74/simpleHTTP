// constructor for lib
function simpleAjax () {
  this.http = new XMLHttpRequest();
}

// get req
simpleAjax.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  var self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// post req
simpleAjax.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  var self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


// put req
simpleAjax.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  var self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// delete req
simpleAjax.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  var self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, 'resource Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
