
$(document).ready(function() {
   $("#commandbutton").click(function() {
    var potentialcommand = $("#command").val();
    console.log("do something button was clicked on!");
    console.log(potentialcommand);

    var re = /^(click|scroll|enter)\s(.*)/i;
    var result = re.exec(potentialcommand);

    if(result) {
      var verb = result[1];
      var arg = result[2]

      console.log("verb: " + verb + ", args: " + arg)

      switch(verb) {
        case "click":
          // what do we do if click?
          console.log("handling click")

          //console.log($("*:contains('" + arg + "')"));

          var stringpieces = arg.split(/\s/);

          $("a,input,button").each(function() {
            if($(this)[0].tagName == "INPUT") {
                // look for the text in INPUT fields

            }
          });

          break;
        case "scroll":
          // what do we do on scroll?
          console.log("handling scroll`")
          break;
        case "enter":
          // what do we do on enter?
          console.log("handling enter")
          break;
        default:
          console.log("sorry, that is not a recognized command")
      }


      //console.log("Scroll " + result[1]);
      //if(result[1]=="up") {
        // scroll up
      //} else if(result[1]=="down") {
        // scroll down
      //}
    }

 })
});
};