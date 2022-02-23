# just-a-simple-calculator

![just-a-calculator](https://user-images.githubusercontent.com/97133099/155417651-0b60b33f-7e3f-441e-bb33-4589bfea9f1c.gif)

It's really just a calculator

# Info
- it neatly auto-resizes based on the screen width and goes full-screen on small window sizes and mobile devices
- turned out that percent button on these simple calculators works differently depending on the manufacturer, feels like a fun fact. Decided to go with the most functional approach based on the information provided here: http://percentagecalculator.co/Percent-Button.html:
>- 90 [+] 10 [%] = 99 calculates as: 90 + (10% of 90) = 99
>- 90 [-] 10 [%] = 81 calculates as: 90 - (10% of 90) = 81
>- 90 [x] 10 [%] = 9 calculates as: 90 x (0.1) = 9
>- 90 [/] 10 [%] = 900 calculates as: 90 / (0.1) = 900
>- 10 [%] = 0 calculates as: calculator does not process

>Notice that the [x] and [/] operators cause the percent button to function differently than the [+] and [-] operators.
>For the [+] and [-] operators, the calculator sees the 10 [%] as 10% of 90 which is equal to 9.
>For the [x] and [/] operators, the calculator sees the 10 [%] as 10/100 which is equal to 0.
