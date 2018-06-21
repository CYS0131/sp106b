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

  ```
