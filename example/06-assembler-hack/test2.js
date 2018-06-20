else {  
     var lengths = line.split("=")
     if (lengths.length!=2)
     {
       lengths = line.split(";")
       numbinary = "111" + ctable[lengths[0]] + "000" + jtable[lengths[1]]
     }
     numbinary = "111" + ctable[lengths[1]] + dtable[lengths[0]] + "000"
     c.log(numbinary)
   }