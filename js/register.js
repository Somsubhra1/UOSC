var member1 = document.getElementById('member1');
var member2 = document.getElementById('member2');
var member3 = document.getElementById('member3');
var member4 = document.getElementById('member4');
var member5 = document.getElementById('member5');

// event listener

document.getElementById("registrationForm").addEventListener('submit', submitted);

function eventSelected(event) {
    if (event.value === 'coding' || event.value === 'quiz') {
        member1.style.display = "block";
        member2.style.display = "block";
        member3.style.display = "block";        
        member4.style.display = 'none';
        member5.style.display = 'none';

        document.getElementById("member1-name").required = true;
        document.getElementById("member1-class").required = true;
        document.getElementById("member1-contact").required = true;

        document.getElementById("member2-name").required = true;
        document.getElementById("member2-class").required = true;
        document.getElementById("member2-contact").required = true;

        document.getElementById("member3-name").required = true;
        document.getElementById("member3-class").required = true;
        document.getElementById("member3-contact").required = true;

        document.getElementById("member4-name").required = false;
        document.getElementById("member4-class").required = false;
        document.getElementById("member4-contact").required = false;

        document.getElementById("member5-name").required = false;
        document.getElementById("member5-class").required = false;
        document.getElementById("member5-contact").required = false;
    }
    else if (event.value === 'model') {
        member1.style.display = "block";
        member2.style.display = "block";
        member3.style.display = "block";
        member4.style.display = "block";
        member5.style.display = "block";
        
        document.getElementById("member1-name").required = true;
        document.getElementById("member1-class").required = true;
        document.getElementById("member1-contact").required = true;

        document.getElementById("member2-name").required = true;
        document.getElementById("member2-class").required = true;
        document.getElementById("member2-contact").required = true;

        document.getElementById("member3-name").required = true;
        document.getElementById("member3-class").required = true;
        document.getElementById("member3-contact").required = true;

        document.getElementById("member4-name").required = true;
        document.getElementById("member4-class").required = true;
        document.getElementById("member4-contact").required = true;

        document.getElementById("member5-name").required = true;
        document.getElementById("member5-class").required = true;
        document.getElementById("member5-contact").required = true;
    }
    else {
        document.getElementById("member1").style.display = "none";
        document.getElementById("member2").style.display = "none";
        document.getElementById("member3").style.display = "none";
        document.getElementById("member4").style.display = "none";
        document.getElementById("member5").style.display = "none";
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