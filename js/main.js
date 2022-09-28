let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let point = document.getElementById('point');
let slash = document.getElementById('slash');
let times = document.getElementById('times');
let equals = document.getElementById('equals');
let reset = document.getElementById('reset');
let del = document.getElementById('delete');
let input = document.querySelector('.display');
let cont1 = document.querySelector('.cont1');
let cont2 = document.querySelector('.cont2');
let cont3 = document.querySelector('.cont3');
let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');
let buttons = document.querySelector('.buttons');
let button = document.querySelector('.button');
let circleParent = document.querySelector('.circle-parent');
let calc = document.querySelector('.calc');
let theme = document.querySelector('.theme');


zero.onclick = function(){
    input.value += '0'
}
one.onclick = function(){
    input.value += '1'
}
two.onclick = function(){
    input.value += '2'
}
three.onclick = function(){
    input.value += '3'
}
four.onclick = function(){
    input.value += '4'
}
five.onclick = function(){
    input.value += '5'
}
six.onclick = function(){
    input.value += '6'
}
seven.onclick = function(){
    input.value += '7'
}
eight.onclick = function(){
    input.value += '8'
}
nine.onclick = function(){
    input.value += '9'
}
point.onclick = function(){
    input.value += '.'
}
slash.onclick = function(){
    input.value += '/'
}
times.onclick = function(){
    input.value += '*';
}
minus.onclick = function(){
    input.value += '-'
}
plus.onclick = function(){
    input.value += '+'
}
reset.onclick = function(){
    input.value = ''
}

del.onclick = function(){
    input.value = input.value.slice(0 , -1);
}

equals.addEventListener('click',()=>{
        input.value = eval(input.value);
});

cont2.addEventListener('click',()=>{
    circle1.style.display = 'none';
    circle2.style.display = 'block';
    circle3.style.display = 'none';
    input.style.background = ' hsl(268, 74%, 14%)';
    input.style.color = 'hsl(52, 100%, 62%)';
    document.body.style.background = 'hsl(268, 75%, 9%)';
    buttons.style.background = ' hsl(268, 74%, 14%)';
    one.style.color = 'hsl(52, 100%, 62%)';
    two.style.color = 'hsl(52, 100%, 62%)';
    three.style.color = 'hsl(52, 100%, 62%)';
    four.style.color = 'hsl(52, 100%, 62%)';
    five.style.color = 'hsl(52, 100%, 62%)';
    six.style.color = 'hsl(52, 100%, 62%)';
    seven.style.color = 'hsl(52, 100%, 62%)';
    eight.style.color = 'hsl(52, 100%, 62%)';
    nine.style.color = 'hsl(52, 100%, 62%)';
    plus.style.color = 'hsl(52, 100%, 62%)';
    minus.style.color = 'hsl(52, 100%, 62%)';
    point.style.color = 'hsl(52, 100%, 62%)';
    slash.style.color = 'hsl(52, 100%, 62%)';
    zero.style.color = 'hsl(52, 100%, 62%)';
    times.style.color = 'hsl(52, 100%, 62%)';
    one.style.background = 'hsl(268, 47%, 21%)';
    two.style.background = 'hsl(268, 47%, 21%)';
    three.style.background = 'hsl(268, 47%, 21%)';
    four.style.background = 'hsl(268, 47%, 21%)';
    five.style.background = 'hsl(268, 47%, 21%)';
    six.style.background = 'hsl(268, 47%, 21%)';
    seven.style.background = 'hsl(268, 47%, 21%)';
    eight.style.background = 'hsl(268, 47%, 21%)';
    nine.style.background = 'hsl(268, 47%, 21%)';
    zero.style.background = 'hsl(268, 47%, 21%)';
    plus.style.background = 'hsl(268, 47%, 21%)';
    minus.style.background = 'hsl(268, 47%, 21%)';
    slash.style.background = 'hsl(268, 47%, 21%)';
    times.style.background = 'hsl(268, 47%, 21%)';
    point.style.background = 'hsl(268, 47%, 21%)';
    one.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    two.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    three.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    four.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    five.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    six.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    seven.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    eight.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    nine.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    zero.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    plus.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    minus.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    slash.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    times.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    point.style.boxShadow = '0 4px hsla(285, 91%, 52%, 0.893)';
    circleParent.style.background = 'hsl(268, 74%, 14%)';
    circle2.style.background = 'hsl(176, 100%, 44%)';
    equals.style.background = 'hsl(176, 100%, 44%)';
    equals.style.color = 'black';
    equals.style.boxShadow = '0 4px hsl(177, 92%, 70%)';
    del.style.background = ' hsl(281, 89%, 26%)';
    del.style.color = 'hsl(0, 0, 100%)';
    del.style.boxShadow = '0 4px hsl(285, 91%, 52%)';
    reset.style.background = 'hsl(281, 89%, 26%)';
    reset.style.color = 'hsl(0, 0, 100%)';
    reset.style.boxShadow = '0 4px hsl(285, 91%, 52%)';
    calc.style.color = 'hsl(52, 100%, 62%)';
    theme.style.color = 'hsl(52, 100%, 62%)';
    one.onmouseover = function(){
        one.style.background = 'hsl(45, 7%, 89%)';
    }
    one.onmouseout = function(){
        one.style.background = 'hsl(268, 47%, 21%)';
    }
    two.onmouseover = function(){
        two.style.background = 'hsl(281, 86%, 36%)';
    }
    two.onmouseout = function(){
        two.style.background = 'hsl(268, 47%, 21%)';
    }
    three.onmouseover = function(){
        three.style.background = 'hsl(281, 86%, 36%)';
    }
    three.onmouseout = function(){
        three.style.background = 'hsl(268, 47%, 21%)';
    }
    four.onmouseover = function(){
        four.style.background = 'hsl(281, 86%, 36%)';
    }
    four.onmouseout = function(){
        four.style.background = 'hsl(268, 47%, 21%)';
    }
    five.onmouseover = function(){
        five.style.background = 'hsl(281, 86%, 36%)';
    }
    five.onmouseout = function(){
        five.style.background = 'hsl(268, 47%, 21%)';
    }
    six.onmouseover = function(){
        six.style.background = 'hsl(281, 86%, 36%)';
    }
    six.onmouseout = function(){
        six.style.background = 'hsl(268, 47%, 21%)';
    }
    seven.onmouseover = function(){
        seven.style.background = 'hsl(281, 86%, 36%)';
    }
    seven.onmouseout = function(){
        seven.style.background = 'hsl(268, 47%, 21%)';
    }
   eight.onmouseover = function(){
       eight.style.background = 'hsl(281, 86%, 36%)';
    }
   eight.onmouseout = function(){
       eight.style.background = 'hsl(268, 47%, 21%)';
    }
    nine.onmouseover = function(){
        nine.style.background = 'hsl(281, 86%, 36%)';
    }
    nine.onmouseout = function(){
        nine.style.background = 'hsl(268, 47%, 21%)';
    }
    zero.onmouseover = function(){
        zero.style.background = 'hsl(281, 86%, 36%)';
    }
    zero.onmouseout = function(){
        zero.style.background = 'hsl(268, 47%, 21%)';
    }
    times.onmouseover = function(){
        times.style.background = 'hsl(281, 86%, 36%)';
    }
    times.onmouseout = function(){
        times.style.background = 'hsl(268, 47%, 21%)';
    }
    slash.onmouseover = function(){
        slash.style.background = 'hsl(281, 86%, 36%)';
    }
    slash.onmouseout = function(){
        slash.style.background = 'hsl(268, 47%, 21%)';
    }
    point.onmouseover = function(){
        point.style.background = 'hsl(281, 86%, 36%)';
    }
    point.onmouseout = function(){
        point.style.background = 'hsl(268, 47%, 21%)';
    }
    minus.onmouseover = function(){
        minus.style.background = 'hsl(281, 86%, 36%)';
    }
    minus.onmouseout = function(){
        minus.style.background = 'hsl(268, 47%, 21%)';
    }
    plus.onmouseover = function(){
        plus.style.background = 'hsl(281, 86%, 36%)';
    }
    plus.onmouseout = function(){
        plus.style.background = 'hsl(268, 47%, 21%)';
    }
    equals.onmouseover = function(){
        equals.style.background = 'hsl(177, 92%, 70%)';
    }
    equals.onmouseout = function(){
        equals.style.background = 'hsl(176, 100%, 44%)';
    }
    reset.onmouseover = function(){
        reset.style.background = 'hsla(285, 79%, 59%, 0.893)';
    }
    reset.onmouseout = function(){
        reset.style.background = 'hsl(281, 89%, 26%)';
    }
    del.onmouseover = function(){
        del.style.background = 'hsla(285, 79%, 59%, 0.893)';
    }
    del.onmouseout = function(){
        del.style.background =  'hsl(281, 89%, 26%)';
    }
    
});
cont1.onclick = function(){
    circle1.style.display = 'block';
    circle1.style.color = '#262322';
    circleParent.style.background = '#F2E5D7';
    circle2.style.display = 'none';
    circle3.style.display = 'none';
    input.style.background = '#F2E5D7';
    input.style.color = ' #262322';
    document.body.style.background = '#262322';
    buttons.style.background = ' #F2E5D7';
    one.style.color = '#F2E5D7';
    two.style.color = '#F2E5D7';
    three.style.color = '#F2E5D7';
    four.style.color = '#F2E5D7';
    five.style.color = '#F2E5D7';
    six.style.color = '#F2E5D7';
    seven.style.color = '#F2E5D7';
    eight.style.color = '#F2E5D7';
    nine.style.color = '#F2E5D7';
    plus.style.color = '#F2E5D7';
    minus.style.color = '#F2E5D7';
    point.style.color = '#F2E5D7';
    slash.style.color = '#F2E5D7';
    zero.style.color = '#F2E5D7';
    times.style.color = '#F2E5D7';
    one.style.background = ' #262322';
    two.style.background = ' #262322';
    three.style.background = ' #262322';
    four.style.background = ' #262322';
    five.style.background = ' #262322';
    six.style.background = ' #262322';
    seven.style.background = ' #262322';
    eight.style.background = ' #262322';
    nine.style.background = ' #262322';
    zero.style.background = ' #262322';
    plus.style.background = ' #262322';
    minus.style.background = ' #262322';
    slash.style.background = ' #262322';
    times.style.background = ' #262322';
    point.style.background = ' #262322';
    one.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    two.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    three.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    four.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    five.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    six.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    seven.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    eight.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    nine.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    zero.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    plus.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    minus.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    slash.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    times.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    point.style.boxShadow = ' 0 4px hsl(29, 25%, 71%)';
    equals.style.background = 'rgba(255, 9, 9, 0.616)';
    equals.style.color = 'white';
    equals.style.boxShadow = '0 4px rgba(226, 75, 75, 0.984)';
    del.style.background = '#6f6453';
    del.style.color = ' #F2E5D7';
    del.style.boxShadow = '0 4px  #afa28e';
    reset.style.background = ' #6f6453';
    reset.style.color = ' #F2E5D7';
    reset.style.boxShadow = '0 4px #afa28e';
    calc.style.color = '#F2E5D7';
    theme.style.color = '#F2E5D7';
    one.onmouseover = function(){
        one.style.background = ' rgb(69, 66, 65)';
    }
    one.onmouseout = function(){
        one.style.background = '#262322';
    }
    two.onmouseover = function(){
        two.style.background = ' rgb(69, 66, 65)';
    }
    two.onmouseout = function(){
        two.style.background = '#262322';
    }
    three.onmouseover = function(){
        three.style.background = ' rgb(69, 66, 65)';
    }
    three.onmouseout = function(){
        three.style.background = '#262322';
    }
    four.onmouseover = function(){
        four.style.background = ' rgb(69, 66, 65)';
    }
    four.onmouseout = function(){
        four.style.background = '#262322';
    }
    five.onmouseover = function(){
        five.style.background = ' rgb(69, 66, 65)';
    }
    five.onmouseout = function(){
        five.style.background = '#262322';
    }
    six.onmouseover = function(){
        six.style.background = ' rgb(69, 66, 65)';
    }
    six.onmouseout = function(){
        six.style.background = '#262322';
    }
    seven.onmouseover = function(){
        seven.style.background = ' rgb(69, 66, 65)';
    }
    seven.onmouseout = function(){
        seven.style.background = '#262322';
    }
   eight.onmouseover = function(){
       eight.style.background = ' rgb(69, 66, 65)';
    }
   eight.onmouseout = function(){
       eight.style.background = '#262322';
    }
    nine.onmouseover = function(){
        nine.style.background = ' rgb(69, 66, 65)';
    }
    nine.onmouseout = function(){
        nine.style.background = '#262322';
    }
    zero.onmouseover = function(){
        zero.style.background = ' rgb(69, 66, 65)';
    }
    zero.onmouseout = function(){
        zero.style.background = '#262322';
    }
    times.onmouseover = function(){
        times.style.background = ' rgb(69, 66, 65)';
    }
    times.onmouseout = function(){
        times.style.background = '#262322';
    }
    slash.onmouseover = function(){
        slash.style.background = ' rgb(69, 66, 65)';
    }
    slash.onmouseout = function(){
        slash.style.background = '#262322';
    }
    point.onmouseover = function(){
        point.style.background = ' rgb(69, 66, 65)';
    }
    point.onmouseout = function(){
        point.style.background = '#262322';
    }
    minus.onmouseover = function(){
        minus.style.background = ' rgb(69, 66, 65)';
    }
    minus.onmouseout = function(){
        minus.style.background = '#262322';
    }
    plus.onmouseover = function(){
        plus.style.background = ' rgb(69, 66, 65)';
    }
    plus.onmouseout = function(){
        plus.style.background = '#262322';
    }
    equals.onmouseover = function(){
        equals.style.background = 'rgba(236, 2, 2, 0.616)';
    }
    equals.onmouseout = function(){
        equals.style.background = ' rgba(255, 9, 9, 0.616)';
    }
    reset.onmouseover = function(){
        reset.style.background = '#ac8d5d';
    }
    reset.onmouseout = function(){
        reset.style.background = ' #6f6453';
    }
    del.onmouseover = function(){
        del.style.background = '#ac8d5d';
    }
    del.onmouseout = function(){
        del.style.background =  '#6f6453';
    }
}
cont3.onclick = function(){
    circle3.style.display = 'block';
    circle2.style.display = 'none';
    circle1.style.display = 'none';
    circleParent.style.background = 'hsl(0, 5%, 81%)';
    circle3.style.background = 'hsl(25, 98%, 40%)';
    input.style.background = 'hsl(0, 0%, 93%)';
    input.style.color = 'hsl(60, 10%, 19%)';
    document.body.style.background = ' hsl(0, 0%, 90%)';
    buttons.style.background = 'hsl(0, 5%, 81%)';
    one.style.color = 'hsl(60, 10%, 19%)';
    two.style.color = 'hsl(60, 10%, 19%)';
    three.style.color = 'hsl(60, 10%, 19%)';
    four.style.color = 'hsl(60, 10%, 19%)';
    five.style.color = 'hsl(60, 10%, 19%)';
    six.style.color = 'hsl(60, 10%, 19%)';
    seven.style.color = 'hsl(60, 10%, 19%)';
    eight.style.color = 'hsl(60, 10%, 19%)';
    nine.style.color = 'hsl(60, 10%, 19%)';
    plus.style.color = 'hsl(60, 10%, 19%)';
    minus.style.color = 'hsl(60, 10%, 19%)';
    point.style.color = 'hsl(60, 10%, 19%)';
    slash.style.color = 'hsl(60, 10%, 19%)';
    zero.style.color = 'hsl(60, 10%, 19%)';
    times.style.color = 'hsl(60, 10%, 19%)';
    one.style.background = 'hsl(45, 7%, 89%)';
    two.style.background = 'hsl(45, 7%, 89%)';
    three.style.background = 'hsl(45, 7%, 89%)';
    four.style.background = 'hsl(45, 7%, 89%)';
    five.style.background = 'hsl(45, 7%, 89%)';
    six.style.background = 'hsl(45, 7%, 89%)';
    seven.style.background = 'hsl(45, 7%, 89%)';
    eight.style.background = 'hsl(45, 7%, 89%)';
    nine.style.background = 'hsl(45, 7%, 89%)';
    zero.style.background = 'hsl(45, 7%, 89%)';
    plus.style.background = 'hsl(45, 7%, 89%)';
    minus.style.background = 'hsl(45, 7%, 89%)';
    slash.style.background = 'hsl(45, 7%, 89%)';
    times.style.background = 'hsl(45, 7%, 89%)';
    point.style.background = 'hsl(45, 7%, 89%)';
    one.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    two.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    three.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    four.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    five.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    six.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    seven.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    eight.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    nine.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    zero.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    plus.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    minus.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    slash.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    times.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    point.style.boxShadow = ' 0 4px hsl(35, 11%, 61%)';
    equals.style.background = 'hsl(25, 98%, 40%)';
    equals.style.color = 'white';
    equals.style.boxShadow = '0 4px hsl(25, 98%, 41%)';
    del.style.background = 'hsl(185, 42%, 37%)';
    del.style.color = 'hsl(0, 0, 100%)';
    del.style.boxShadow = '0 4px  hsl(185, 58%, 25%)';
    reset.style.background = 'hsl(185, 42%, 37%)';
    reset.style.color = 'hsl(0, 0, 100%)';
    reset.style.boxShadow = '0 4px hsl(185, 58%, 25%)';
    calc.style.color = 'hsl(60, 10%, 19%)';
    theme.style.color = 'hsl(60, 10%, 19%)';
    one.onmouseover = function(){
        one.style.background = 'white';
    }
    one.onmouseout = function(){
        one.style.background = 'hsl(45, 7%, 89%)';
    }
    two.onmouseover = function(){
        two.style.background = 'white';
    }
    two.onmouseout = function(){
        two.style.background = 'hsl(45, 7%, 89%)';
    }
    three.onmouseover = function(){
        three.style.background = 'white';
    }
    three.onmouseout = function(){
        three.style.background = 'hsl(45, 7%, 89%)';
    }
    four.onmouseover = function(){
        four.style.background = 'white';
    }
    four.onmouseout = function(){
        four.style.background = 'hsl(45, 7%, 89%)';
    }
    five.onmouseover = function(){
        five.style.background = 'white';
    }
    five.onmouseout = function(){
        five.style.background = 'hsl(45, 7%, 89%)';
    }
    six.onmouseover = function(){
        six.style.background = 'white';
    }
    six.onmouseout = function(){
        six.style.background = 'hsl(45, 7%, 89%)';
    }
    seven.onmouseover = function(){
        seven.style.background = 'white';
    }
    seven.onmouseout = function(){
        seven.style.background = 'hsl(45, 7%, 89%)';
    }
   eight.onmouseover = function(){
       eight.style.background = 'white';
    }
   eight.onmouseout = function(){
       eight.style.background = 'hsl(45, 7%, 89%)';
    }
    nine.onmouseover = function(){
        nine.style.background = 'white';
    }
    nine.onmouseout = function(){
        nine.style.background = 'hsl(45, 7%, 89%)';
    }
    zero.onmouseover = function(){
        zero.style.background = 'white';
    }
    zero.onmouseout = function(){
        zero.style.background = 'hsl(45, 7%, 89%)';
    }
    times.onmouseover = function(){
        times.style.background = 'white';
    }
    times.onmouseout = function(){
        times.style.background = 'hsl(45, 7%, 89%)';
    }
    slash.onmouseover = function(){
        slash.style.background = 'white';
    }
    slash.onmouseout = function(){
        slash.style.background = 'hsl(45, 7%, 89%)';
    }
    point.onmouseover = function(){
        point.style.background = 'white';
    }
    point.onmouseout = function(){
        point.style.background = 'hsl(45, 7%, 89%)';
    }
    minus.onmouseover = function(){
        minus.style.background = 'white';
    }
    minus.onmouseout = function(){
        minus.style.background = 'hsl(45, 7%, 89%)';
    }
    plus.onmouseover = function(){
        plus.style.background = 'white';
    }
    plus.onmouseout = function(){
        plus.style.background = 'hsl(45, 7%, 89%)';
    }
    equals.onmouseover = function(){
        equals.style.background = 'hsl(25, 75%, 49%)';
    }
    equals.onmouseout = function(){
        equals.style.background = 'hsl(25, 98%, 40%)';
    }
    reset.onmouseover = function(){
        reset.style.background = 'hsl(185, 45%, 44%)';
    }
    reset.onmouseout = function(){
        reset.style.background = 'hsl(185, 42%, 37%)';
    }
    del.onmouseover = function(){
        del.style.background = 'hsl(185, 45%, 44%)';
    }
    del.onmouseout = function(){
        del.style.background =  'hsl(185, 42%, 37%)';
    }
}


