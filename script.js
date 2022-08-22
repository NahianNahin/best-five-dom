// Inportant functions 

function appendElement(name){
    const listContainer = document.getElementById('list-container');
    const list = document.createElement('li');
    list.innerText = name;
    listContainer.appendChild(list);
}
function disabledBtn(btn){
    document.getElementById(btn).disabled = true;
    document.getElementById(btn).style.background = '#A2A9AF';

}

function inputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function display(displayId){
    const displayField = document.getElementById(displayId);
    return displayField;
}
function selectButtonEvent(btnId,name){
    document.getElementById(btnId).addEventListener('click',function(){
            
        const listContainer = document.getElementById('list-container');
            if(listContainer.childElementCount >= 5){
                alert('you already select 5');
                return;
            }
        appendElement(name);
        disabledBtn(btnId);
        display('select-count').innerText = listContainer.childElementCount;
    })
}


// ADD EVENT IN BUTTONS 

// FOR btn-1 
document.getElementById('btn-1').addEventListener('click',function(){
            
    const listContainer = document.getElementById('list-container');
        if(listContainer.childElementCount >= 5){
            alert('you already select 5');
            return;
        }
    appendElement('Lionel Messi');
    disabledBtn('btn-1');
    display('select-count').innerText = listContainer.childElementCount;
})
// FOR btn-2 
selectButtonEvent('btn-2','Neymar Jr');
// FOR btn-3 
selectButtonEvent('btn-3','Kylian Mbappé');
// FOR btn-4 
selectButtonEvent('btn-4','Vítor Machado');
// FOR btn-5 
selectButtonEvent('btn-5','Sergio Ramos');
// FOR btn-6
selectButtonEvent('btn-6','Renato Sanches');
// FOR btn-7
selectButtonEvent('btn-7','Cristian Ronaldo');
// FOR btn-8
selectButtonEvent('btn-8','Dani Alves');
// FOR btn-9
selectButtonEvent('btn-9','Mesut Özil');

// CALCULATION SECTION 

document.getElementById('calculate-btn').addEventListener('click',function(){
    if( inputValue('per-player') <= 0 || isNaN(inputValue('per-player'))){
        alert('Give a positive number');
        display('per-player').value = '';
        display('five-player-price').innerText = '00';
        return;
    }
    const listContainer = document.getElementById('list-container');
    const totalPlayerPrice = parseFloat(inputValue('per-player')) * listContainer.childElementCount;
    display('per-player').value = '';
    display('five-player-price').innerText = totalPlayerPrice;
    

})
document.getElementById('total-btn').addEventListener('click',function(){
    if( inputValue('manager') <= 0 || inputValue('coach') <= 0 || isNaN(inputValue('manager')) || isNaN(inputValue('coach'))){
        alert('Give a positive number');
        display('manager').value = '';
        display('coach').value = '';
        display('total-price').innerText = '00';
        return;
    }
    const fivePlayerPrice = parseFloat(display('five-player-price').innerText);
    const totalPrice = fivePlayerPrice + inputValue('manager') + inputValue('coach');
    display('total-price').innerText = totalPrice;
    display('manager').value = '';
    display('coach').value = '';
    

})