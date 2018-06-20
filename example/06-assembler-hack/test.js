if (line.startWith("@")) {
     var num = line.substring(1).trim()
     num = num-0
     var numbinary = num.toString(2)
     c.log(numbinary)
     // return { type:"A", arg:line.substring(1).trim() }
   }