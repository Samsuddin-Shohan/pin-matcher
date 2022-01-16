// console.log('js added');
document.getElementById('generate-button').addEventListener('click',()=>{
    const pin = getPin();
    document.getElementById('input-field').value = pin;
})
document.getElementById('key-pad').addEventListener('click',(event)=>{
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if(!isNaN(number)){
        
        const previousNumber =calcInput.value;
        const newNumber = previousNumber+number;
        calcInput.value = newNumber;
    }
    else{
        if(number==='C')calcInput.value = '';
    }
})
const getPin = ()=>{
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length===4){
        return pin;
    }
    else{
        return getPin();
    }
}
const verifyPin = () => {
    const typedNumber = document.getElementById('typed-number').value;
    const pin = document.getElementById('input-field').value;
    if(typedNumber===pin){
        document.getElementById('success').style.display = 'block';
        document.getElementById('fail').style.display = 'none';
        
    }
    else{
        document.getElementById('success').style.display = 'none';
        document.getElementById('fail').style.display = 'block';
    }
}
