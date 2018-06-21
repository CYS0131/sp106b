# 組譯器（javascript版本）

* 完整程式碼：[project.js](https://github.com/ChiaYuSu/sp106b/blob/master/project/project.js)
* 編譯過程：
  * add.asm
  ```nasm
    // This file is part of www.nand2tetris.org
    // and the book "The Elements of Computing Systems"
    // by Nisan and Schocken, MIT Press.
    // File name: projects/06/add/Add.asm

    // Computes R0 = 2 + 3

    @2
    D=A
    @3
    D=D+A
    @0
    M=D
  ```
  * 輸出
  ```
    PS C:\Users\蘇家禹\Desktop\sp106b\project> node project.js add
    @2
    0000000000000010
    D=A
    1110110000010000
    @3
    0000000000000011
    D=D+A
    1110000010010000
    @0
    0000000000000000
    M=D
    1110001100001000
  ```
  * max.asm
  ```nasm
    // This file is part of www.nand2tetris.org
    // and the book "The Elements of Computing Systems"
    // by Nisan and Schocken, MIT Press.
    // File name: projects/06/max/Max.asm

    // Computes R2 = max(R0, R1)  (R0,R1,R2 refer to  RAM[0],RAM[1],RAM[2])

    @R0
    D=M              // D = first number
    @R1
    D=D-M            // D = first number - second number
    @OUTPUT_FIRST
    D;JGT            // if D>0 (first is greater) goto output_first
    @R1
    D=M              // D = second number
    @OUTPUT_D
    0;JMP            // goto output_d
    (OUTPUT_FIRST)
    @R0             
    D=M              // D = first number
    (OUTPUT_D)
    @R2
    M=D              // M[2] = D (greatest number)
    (INFINITE_LOOP)
    @INFINITE_LOOP
    0;JMP            // infinite loop
  ```
  * 輸出
  ```
    PS C:\Users\蘇家禹\Desktop\sp106b\project> node project.js max
    @R0
    0000000000000000
    D=M
    1111110000010000
    @R1
    0000000000000001
    D=D-M
    1111010011010000
    @OUTPUT_FIRST
    0000000000001010
    D;JGT
    1110001100000001
    @R1
    0000000000000001
    D=M
    1111110000010000
    @OUTPUT_D
    0000000000001100
    0;JMP
    1110101010000111
    @R0
    0000000000000000
    D=M
    1111110000010000
    @R2
    0000000000000010
    M=D
    1110001100001000
    @INFINITE_LOOP
    0000000000001110
    0;JMP
    1110101010000111
  ```
  * rect.asm
  ```nasm
    // This file is part of www.nand2tetris.org
    // and the book "The Elements of Computing Systems"
    // by Nisan and Schocken, MIT Press.
    // File name: projects/06/rect/Rect.asm

    // Draws a rectangle at the top-left corner of the screen.
    // The rectangle is 16 pixels wide and R0 pixels high.

    @0
    D=M
    @INFINITE_LOOP
    D;JLE 
    @counter
    M=D
    @SCREEN
    D=A
    @address
    M=D
    (LOOP)
    @address
    A=M
    M=-1
    @address
    D=M
    @32
    D=D+A
    @address
    M=D
    @counter
    MD=M-1
    @LOOP
    D;JGT
    (INFINITE_LOOP)
    @INFINITE_LOOP
    0;JMP
  ``` 
  * 輸出
  ```
    @0
    0000000000000000
    D=M
    1111110000010000
    @INFINITE_LOOP
    0000000000010111
    D;JLE
    1110001100000110
    @counter
    0000000000010000
    M=D
    1110001100001000
    @SCREEN
    0100000000000000
    D=A
    1110110000010000
    @address
    0000000000010001
    M=D
    1110001100001000
    @address
    0000000000010001
    A=M
    1111110000100000
    M=-1
    1110111010001000
    @address
    0000000000010001
    D=M
    1111110000010000
    @32
    0000000000100000
    D=D+A
    1110000010010000
    @address
    0000000000010001
    M=D
    1110001100001000
    @counter
    0000000000010000
    MD=M-1
    1111110010011000
    @LOOP
    0000000000001010
    D;JGT
    1110001100000001
    @INFINITE_LOOP
    0000000000010111
    0;JMP
    1110101010000111
  ```
