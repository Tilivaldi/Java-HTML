document.forms.publish.onsubmit = function() {
    var message = this.message.value;
    console.log(message)
    return false;
  };