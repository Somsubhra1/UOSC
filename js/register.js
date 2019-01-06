var member4 = document.getElementById('member4');
var member5 = document.getElementById('member5');

// event listener

document.getElementById("registrationForm").addEventListener('submit', submitted);

function eventSelected(event) {
    if (event.value === 'coding' || event.value === 'quiz') {
        member4.style.display = 'none';
        member5.style.display = 'none';

        document.getElementById("member4-name").required = false;
        document.getElementById("member4-class").required = false;
        document.getElementById("member4-contact").required = false;

        document.getElementById("member5-name").required = false;
        document.getElementById("member5-class").required = false;
        document.getElementById("member5-contact").required = false;
    }
    else if (event.value === 'model') {
        member4.style.display = "block";
        member5.style.display = "block"; 

        document.getElementById("member4-name").required = true;
        document.getElementById("member4-class").required = true;
        document.getElementById("member4-contact").required = true;

        document.getElementById("member5-name").required = true;
        document.getElementById("member5-class").required = true;
        document.getElementById("member5-contact").required = true;
    }
     
}

function submitted(event) {
    event.preventDefault();
    // display success alert for 3 seconds   
    document.getElementById("alertSuccess").style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(() => {
        document.getElementById("alertSuccess").style.display = 'none';        
    }, 3000);
    // form reset
    document.getElementById("registrationForm").reset()
    
}