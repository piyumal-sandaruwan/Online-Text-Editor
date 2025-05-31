function format(command, value = null) {
  document.execCommand(command,  false,value);
}