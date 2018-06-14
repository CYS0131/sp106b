var fs = require("fs"); // 加載 file system
var c  = console;
var file = process.argv[2];

var dtable = {
  ""   :0b000,
  "M"  :0b001,
  "D"  :0b010,
  "MD" :0b011,
  "A"  :0b100,
  "AM" :0b101,
  "AD" :0b110,
  "AMD":0b111
}

var jtable = {
  ""   :0b000,
  "JGT":0b001,
  "JEQ":0b010,
  "JGE":0b011,
  "JLT":0b100,
  "JNE":0b101,
  "JLE":0b110,
  "JMP":0b111
}

var ctable = {
  "0"   :0b0101010,
  "1"   :0b0111111,
  "-1"  :0b0111010,
  "D"   :0b0001100,
  "A"   :0b0110000, 
  "M"   :0b1110000,
  "!D"  :0b0001101,
  "!A"  :0b0110001, 
  "!M"  :0b1110001,
  "-D"  :0b0001111,
  "-A"  :0b0110011,
  "-M"  :0b1110011,
  "D+1" :0b0011111,
  "A+1" :0b0110111,
  "M+1" :0b1110111,
  "D-1" :0b0001110,
  "A-1" :0b0110010,
  "M-1" :0b1110010,
  "D+A" :0b0000010,
  "D+M" :0b1000010,
  "D-A" :0b0010011,
  "D-M" :0b1010011,
  "A-D" :0b0000111,
  "M-D" :0b1000111,
  "D&A" :0b0000000,
  "D&M" :0b1000000,
  "D|A" :0b0010101,
  "D|M" :0b1010101
}

var symTable = {
  "R0"  :0,
  "R1"  :1,
  "R2"  :2,
  "R3"  :3,
  "R4"  :4,
  "R5"  :5,
  "R6"  :6,
  "R7"  :7,
  "R8"  :8,
  "R9"  :9,
  "R10" :10,
  "R11" :11,
  "R12" :12,
  "R13" :13,
  "R14" :14,
  "R15" :15,
  "SP"  :0,
  "LCL" :1,
  "ARG" :2,
  "THIS":3, 
  "THAT":4,
  "KBD" :24576,
  "SCREEN":16384
};

var symTop = 16; // 新的變數從 16 開始，前 15 個為預設指令

function addSymbol(symbol) {  // 增加變數
  symTable[symbol] = symTop; // 將新的變數放進 symTable 裡面
  symTop ++; 
}

assemble(file+'.asm', file+'.hack'); // assemble(輸入檔案為 asm 檔 , 輸出檔案為 hack 檔)

function assemble(asmFile, objFile) { // assemble(輸入 , 輸出) // 利用正規表達式處理
  var asmText = fs.readFileSync(asmFile, "utf8"); // 讀取檔案到 text 字串中 // 第一步驟：讀檔
  var lines   = asmText.split(/\r?\n/); // 將組合語言分割成一行一行 // 第二步驟：將字串拆行變陣列 
  // \r carriage return（回車鍵，回到頭）
  // \n 換行
  //  ? 比對前一個字元，0次或1次
  // split("t") 000t111t222 --> {000, 111, 222} 以 t 分割
  c.log(JSON.stringify(lines, null, 2)); // c.log = console.log
  pass1(lines);
  pass2(lines, objFile);
} 