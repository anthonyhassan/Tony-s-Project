Python 3.11.9 (tags/v3.11.9:de54cf5, Apr  2 2024, 10:12:12) [MSC v.1938 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
def calc():
    operation=input('Chhose an operation among these options +,-,*,/,%,//')
    first=input('Type in your first number')
    second=input('Type in your second number')
    if operation==+:
        
SyntaxError: invalid syntax
def calc():
    operation=input('Chhose an operation among these options +,-,*,/,%,//')
    first=input('Type in your first number')
    second=input('Type in your second number')
    if operation=='+':
        answer=int(first)+ int(second)
        print(answer)
    elif f operation=='-':
        answer=int(first)- int(second)
        print(answer)
        
SyntaxError: invalid syntax
def calc():
    operation=input('Chhose an operation among these options +,-,*,/,%,//')
    first=input('Type in your first number')
    second=input('Type in your second number')
    if operation=='+':
        answer=int(first)+ int(second)
        print(answer)
    elif operation=='-':
        answer=int(first)- int(second)
        print(answer)
    elif operation=='*':
        answer=int(first)* int(second)
        print(answer)
    elif operation=='\':
        answer=int(first)\ int(second)
        print(answer)
        
SyntaxError: unterminated string literal (detected at line 14)






def calc():
    operation=input('Chhose an operation among these options +,-,*,/,%,//')
    first=input('Type in your first number')
    second=input('Type in your second number')
    if operation=='+':
        answer=int(first)+ int(second)
        print(answer)
    elif operation=='-':
        answer=int(first)- int(second)
        print(answer)
    elif operation=='*':
        answer=int(first)* int(second)
        print(answer)
    elif operation=="/":
        answer=int(first)/ int(second)
        print(answer)
    elif operation=="%":
        answer=int(first)% int(second)
        print(answer)
    elif operation=="//":
        answer=int(first)// int(second)
        print(answer)
    else: return('Unable to process calculation')

    
calc()
Chhose an operation among these options +,-,*,/,%,////
Type in your first number5.3
Type in your second number2
Traceback (most recent call last):
  File "<pyshell#23>", line 1, in <module>
    calc()
  File "<pyshell#22>", line 21, in calc
    answer=int(first)// int(second)
ValueError: invalid literal for int() with base 10: '5.3'
calc()
Chhose an operation among these options +,-,*,/,%,//20
Type in your first numberj
Type in your second numberd
'Unable to process calculation'
d
Traceback (most recent call last):
  File "<pyshell#25>", line 1, in <module>
    d
NameError: name 'd' is not defined. Did you mean: 'id'?
calc()
Chhose an operation among these options +,-,*,/,%,////
Type in your first number20
Type in your second number3
6
















































def calc():
    operation=input('Chhose an operation among these options +,-,*,/,%,//')
    first=input('Type in your first number')
    second=input('Type in your second number')
    if operation=='+':
        answer=int(first)+ int(second)
        print(answer)
    elif operation=='-':
        answer=int(first)- int(second)
        print(answer)
    elif operation=='*':
        answer=int(first)* int(second)
        print(answer)
    elif operation=="/":
        answer=int(first)/ int(second)
        print(answer)
    elif operation=="%":
        answer=int(first)% int(second)
        print(answer)
    elif operation=="//":
        answer=int(first)// int(second)
        print(answer)
    else: return('Unable to process calculation')

    

def calc():
    operation=input('Choose an operation among these options +,-,*,/,%,//')
    first=input('Type in your first number')
    second=input('Type in your second number')
    if operation=='+':
        answer=int(first)+ int(second)
        print(answer)
    elif operation=='-':
        answer=int(first)- int(second)
        print(answer)
    elif operation=='*':
        answer=int(first)* int(second)
        print(answer)
    elif operation=="/":
        answer=int(first)/ int(second)
        print(answer)
    elif operation=="%":
        answer=int(first)% int(second)
        print(answer)
    elif operation=="//":
        answer=int(first)// int(second)
        print(answer)
    else: return('Unable to process calculation')

    
calc()
Choose an operation among these options +,-,*,/,%,//   +
Type in your first number20
Type in your second number30
'Unable to process calculation'
calc()
Choose an operation among these options +,-,*,/,%,//   -
Type in your first number30
Type in your second number20
'Unable to process calculation'
calc()
Choose an operation among these options +,-,*,/,%,//-
Type in your first number30
Type in your second number20
10
calc()
Choose an operation among these options +,-,*,/,%,//-
Type in your first number20
Type in your second number30
-10
def calc():
    operation=input('Choose an operation among these options +,-,*,/,%,//')
    first=input('Type in your first number')
    second=input('Type in your second number')
    if operation=='+':
        answer=int(first)+ int(second)
        print(answer)
    elif operation=='-':
        answer=int(first)- int(second)
        print(answer)
    elif operation=='*':
        answer=int(first)* int(second)
        print(answer)
    elif operation=="/":
        answer=int(first)/ int(second)
        print(answer)
    elif operation=="%":
        answer=int(first)% int(second)
        print(answer)
    elif operation=="//":
        answer=int(first)// int(second)
        print(answer)
    else: return('Unable to process calculation')

    
calc()
Choose an operation among these options +,-,*,/,%,//  +
Type in your first number20
Type in your second number30
'Unable to process calculation'
def calc():
    operation=input('Choose an operation among these options +,-,*,/,%,//')
    first=input('Type in your first number')
    second=input('Type in your second number')
    if operation=='+':
        answer=int(first)+ int(second)
        print(answer)
    elif operation=='-':
        answer=int(first)- int(second)
        print(answer)
    elif operation=='*':
        answer=int(first)* int(second)
        print(answer)
...     elif operation=="/":
...         answer=int(first)/ int(second)
...         print(answer)
...     elif operation=="%":
...         answer=int(first)% int(second)
...         print(answer)
...     elif operation=="//":
...         answer=int(first)// int(second)
...         print(answer)
...     else: return('Unable to process calculation')
... 
>>> calc()
Choose an operation among these options +,-,*,/,%,//+
Type in your first number20
Type in your second number30
50
>>> calc()
Choose an operation among these options +,-,*,/,%,//-
Type in your first number30
Type in your second number20
10
>>> calc()
Choose an operation among these options +,-,*,/,%,//*
Type in your first number89
Type in your second number34
3026
>>> calc()
Choose an operation among these options +,-,*,/,%,///
Type in your first number60
Type in your second number30
2.0
>>> calc()
Choose an operation among these options +,-,*,/,%,//%
Type in your first number20
Type in your second number3
2
>>> calc()
Choose an operation among these options +,-,*,/,%,//30
Type in your first numberhunder
Type in your second numberhello
'Unable to process calculation'
>>> calc()
Choose an operation among these options +,-,*,/,%,////
Type in your first number30
Type in your second number4
7
