function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    const age = parseFloat(ageText);
    
    
    try{
        if(isNaN(age)){
            throw 'invalid a number'
        }
        else if(age < 18){
            throw 'bacchara dure thako'
        }
        else if(age > 30){
            throw 'murubbi bad jao'
        }
        errorTag.innerText = ' ';
    }
    catch(err){
        console.log('ERROR:', err)
        errorTag.innerText = 'ERROR:' +  err;
    }
    
}