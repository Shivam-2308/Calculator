screen=document.getElementById("screen");
//function numKey(x) {
    if (!isNaN((x)) || x=='+' || x=='÷' || x=='×' || x=='-' || x=='.') {
        if (x=='×') {
            x='*';
        } else if (x=='÷') {
            x='/';
        }
        if (screen.value=='0' && !isNaN((x))) {
            screen.value='';
        }
        screen.value+=x;
    } else if (x=='C') {
        screen.value='0';
    } else if (x=='%') {
        screen.value+=x;
        let s = screen.value, s1=''; 
        var i= s.length-2;
        for (; i>=0; i--) {
            if (isNaN(s[i]) && s[i]!='.') {
                s1=s.slice(i+1);
                break;
            }
            if (i==0) {
                s1 = s;
            }
        }
        screen.value=s.replace(s1,(i==-1?1:eval(s.slice(0,i)))*parseInt(s1)/100);
    } else if (x=='=') {
        screen.value=eval(screen.value).toFixed(2);
    } else if(x=='<-') {
        screen.value=screen.value.slice(0,-1);
        if (screen.value=='') 
            screen.value=0;
    }
} 

const button=document.querySelectorAll('button');
for(let i of button) {
    i.addEventListener('click',  () => {numKey(i.innerText)});
}
