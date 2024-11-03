function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    document.querySelector('.time').textContent = time;
    document.querySelector('.date').textContent = date;
}
setInterval(updateTime, 1000);
updateTime();
function toggleLight1() {
    var img = document.getElementById("lightbulb1");
    if (img.src.includes("bongdenmo.png")) {
        img.src = "bongdentat.png";
        img.alt = "Bóng đèn tắt";
    } else {
        img.src = "bongdenmo.png";
        img.alt = "Bóng đèn bật";
    }
}
function toggleLight2() {
    var img = document.getElementById("lightbulb2");
    if (img.src.includes("bongdenmo.png")) {
        img.src = "bongdentat.png";
        img.alt = "Bóng đèn tắt";
    } else {
        img.src = "bongdenmo.png";
        img.alt = "Bóng đèn bật";
    }
}
function toggleLight3() {
    var img = document.getElementById("lightbulb3");
    if (img.src.includes("bongdenmo.png")) {
        img.src = "bongdentat.png";
        img.alt = "Bóng đèn tắt";
    } else {
        img.src = "bongdenmo.png";
        img.alt = "Bóng đèn bật";
    }
}
function toggleLight4() {
    var img = document.getElementById("lightbulb4");
    if (img.src.includes("bongdenmo.png")) {
        img.src = "bongdentat.png";
        img.alt = "Bóng đèn tắt";
    } else {
        img.src = "bongdenmo.png";
        img.alt = "Bóng đèn bật";
    }
}
function toggleLight5() {
    var img = document.getElementById("lightbulb5");
    if (img.src.includes("bongdenmo.png")) {
        img.src = "bongdentat.png";
        img.alt = "Bóng đèn tắt";
    } else {
        img.src = "bongdenmo.png";
        img.alt = "Bóng đèn bật";
    }
}
function toggleLight6() {
    var img = document.getElementById("lightbulb6");
    if (img.src.includes("bongdenmo.png")) {
        img.src = "bongdentat.png";
        img.alt = "Bóng đèn tắt";
    } else {
        img.src = "bongdenmo.png";
        img.alt = "Bóng đèn bật";
    }
}
function toggleLight7() {
    var img = document.getElementById("lightbulb7");
    if (img.src.includes("bongdenmo.png")) {
        img.src = "bongdentat.png";
        img.alt = "Bóng đèn tắt";
    } else {
        img.src = "bongdenmo.png";
        img.alt = "Bóng đèn bật";
    }
}
function toggleAllLights() {
    var images = document.querySelectorAll('.bongdenden img');
    images.forEach(function(img) {
        img.src = "bongdentat.png";
    });
}
function changeImage() {
    var img = document.getElementById('okhoaa');
    var customLine = document.querySelector('.custom-line24');
    if (img.src.includes('okhoa-icon.png')) {
        img.src = 'okhoamo.png';
        customLine.style.display = 'none';
        Swal.fire({
            title: 'Thông báo',
            text: 'Cửa đã mở',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else {
        img.src = 'okhoa-icon.png';
        customLine.style.display = 'block';
        Swal.fire({
            title: 'Thông báo',
            text: 'Cửa đã đóng',
            icon: 'info',
            confirmButtonText: 'OK'
        });
    }
}   
/* content2*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('temperature-control').addEventListener('click', function() {
        let currentTemp = prompt("Nhập nhiệt độ mới cho lò sưởi:");
        if (currentTemp !== null) {
            alert("Nhiệt độ lò sưởi đã được điều chỉnh đến: " + currentTemp + "°C");
            // Thêm mã để điều chỉnh nhiệt độ lò sưởi thực tế nếu cần
        }
    });
});


function showTab(tabNumber, element) {
    // Hide all tab contents
    var tabs = document.querySelectorAll('.content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Remove active class from all buttons
    var buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Show the selected content
    document.getElementById('content' + tabNumber).style.display = 'block';

    // Add active class to the selected button
    if (element) element.classList.add('active');

    // Initialize events for the bedroom tab if selected
    if (tabNumber === 3) {
        initializeBedroomEvents();
    }else if (tabNumber === 4) {
        initializeLivingEvents();
    } else if (tabNumber === 5) {
        initializeKitchenEvents();
    } else if (tabNumber ===6) {
        initializeOfficeEvents()
    } else if (tabNumber === 7) {
        initializeBathroomEvents()
    } else if (tabNumber === 8) {
        initializeMasterEvents()
    }
}




function initializeBedroomEvents() {
    // Gán sự kiện cho các nút trong phòng ngủ
    let btn9 = document.querySelector('#btn9');
    let img1 = document.querySelector('#fan1');
    let btn10 = document.querySelector('#btn10');
    btn9.addEventListener('click', function() {
        img1.src = './image/fan_running.png';
        firebase.database().ref("bedroom").update({airconditioner: 1});  
    });
    btn10.addEventListener('click', function() {
        img1.src = './image/fanoff.png';
        firebase.database().ref("bedroom").update({airconditioner: 0});
    });

    let btn11 = document.querySelector('#btn11');
    let img2 = document.querySelector('#tv1');
    let btn12 = document.querySelector('#btn12');
    btn11.addEventListener('click', function() {
        img2.src = './image/tvon1.png';
        firebase.database().ref("bedroom").update({tv: 1}); 
    });
    btn12.addEventListener('click', function() {
        img2.src = './image/tvoff1.png';
        firebase.database().ref("bedroom").update({tv: 0});
    });

    let btn13 = document.querySelector('#btn13');
    let img3 = document.querySelector('#light1');
    let btn14 = document.querySelector('#btn14');
    btn13.addEventListener('click', function() {
        img3.src = './image/denon1.png';
        firebase.database().ref("bedroom").update({light: 1});
    });
    btn14.addEventListener('click', function() {
        img3.src = './image/denoff1.png';
        firebase.database().ref("bedroom").update({light: 0});
    });

    let btn15 = document.querySelector('#btn15');
    let img4 = document.querySelector('#door1');
    let btn16 = document.querySelector('#btn16');
    btn15.addEventListener('click', function() {
        img4.src = './image/lock1.png';
        firebase.database().ref("bedroom").update({lock: 0});
    });
    btn16.addEventListener('click', function() {
        img4.src = './image/unlock1.png';
        firebase.database().ref("bedroom").update({lock: 1});
    });

    let btn17 = document.querySelector('#btn17');
    let img5 = document.querySelector('#curtain1');
    let btn18 = document.querySelector('#btn18');
    btn17.addEventListener('click', function() {
        img5.src = './image/curof1.png';
        firebase.database().ref("bedroom").update({curtain: 0});
    });
    btn18.addEventListener('click', function() {
        img5.src = './image/curon1.png';
        firebase.database().ref("bedroom").update({curtain: 1});
    });

    let btn19 = document.querySelector('#btn19');
    let img6 = document.querySelector('#window1');
    let btn20 = document.querySelector('#btn20');
    btn19.addEventListener('click', function() {
        img6.src = './image/winof1.png';
        firebase.database().ref("bedroom").update({window: 0});
    });
    btn20.addEventListener('click', function() {
        img6.src = './image/winon1.png';
        firebase.database().ref("bedroom").update({window: 1})
    });
}

function initializeLivingEvents(){
    let btn21 = document.querySelector('#btn21');
    let img7 = document.querySelector('#air2');
    let btn22 = document.querySelector('#btn22');

    btn21.addEventListener('click', function()  {
        img7.src = './image/airon1.png'; 
        firebase.database().ref("livingroom").update({airconditioner: 1});
    });
    btn22.addEventListener('click', function()  {
        img7.src = './image/airof1.png';
        firebase.database().ref("livingroom").update({airconditioner: 0});
    });

    let btn23 = document.querySelector('#btn23');
    let img8 = document.querySelector('#tv2');
    let btn24 = document.querySelector('#btn24');

    btn23.addEventListener('click', function() {
        img8.src = './image/tvon1.png';
        firebase.database().ref("livingroom").update({tv: 1});
        
    });
    btn24.addEventListener('click', function() {
        img8.src = './image/tvoff1.png'; 
        firebase.database().ref("livingroom").update({tv: 0});
    });

    let btn25 = document.querySelector('#btn25');
    let img9 = document.querySelector('#light2');
    let btn26 = document.querySelector('#btn26');

    btn25.addEventListener('click', function() {
        img9.src='./image/denon1.png'; 
        firebase.database().ref("livingroom").update({light: 1});      
    });
    btn26.addEventListener('click', function() {
        img9.src='./image/denoff1.png';
        firebase.database().ref("livingroom").update({light: 0});
            
    });

    let btn27 = document.querySelector('#btn27');
    let img10 = document.querySelector('#quat2');
    let btn28 = document.querySelector('#btn28');

    btn27.addEventListener('click', function() {
        img10.src='./image/quatof1.png';
        firebase.database().ref("livingroom").update({fan: 0});       
    });
    btn28.addEventListener('click', function() {
        img10.src='./image/quaton1.png';
        firebase.database().ref("livingroom").update({fan: 1});
            
    });

    let btn29 = document.querySelector('#btn29');
    let img11 = document.querySelector('#curtain2');
    let btn30 = document.querySelector('#btn30');

    btn29.addEventListener('click', function() {
        img11.src='./image/curof1.png';  
         firebase.database().ref("livingroom").update({curtain: 0});     
    });
    btn30.addEventListener('click', function() {
        img11.src='./image/curon1.png';
        firebase.database().ref("livingroom").update({curtain: 1});
            
    });

    let btn31 = document.querySelector('#btn31');
    let img12 = document.querySelector('#window2');
    let btn32 = document.querySelector('#btn32');

    btn31.addEventListener('click', function() {
        img12.src='./image/winof1.png';  
        firebase.database().ref("livingroom").update({window: 0});    
    });
    btn32.addEventListener('click', function() {
        img12.src='./image/winon1.png';
        firebase.database().ref("livingroom").update({window: 1});
            
    });

}

function initializeKitchenEvents() {
    // Assign events for kitchen buttons
    let btn33 = document.querySelector('#btn33');
    let img13 = document.querySelector('#air3');
    let btn34 = document.querySelector('#btn34');
    btn33.addEventListener('click', function() {
        img13.src = './image/airon1.png';
        firebase.database().ref("kitchen").update({airfilter: 1});
    });
    btn34.addEventListener('click', function() {
        img13.src = './image/airof1.png';
        firebase.database().ref("kitchen").update({airfilter: 0});
    });

    let btn35 = document.querySelector('#btn35');
    let img14 = document.querySelector('#clean3');
    let btn36 = document.querySelector('#btn36');
    btn35.addEventListener('click', function() {
        img14.src = './image/buion.png';
        firebase.database().ref("kitchen").update({cleaner: 1});
    });
    btn36.addEventListener('click', function() {
        img14.src = './image/buiof.png';
        firebase.database().ref("kitchen").update({cleaner: 0});
    });

    let btn37 = document.querySelector('#btn37');
    let img15 = document.querySelector('#light3');
    let btn38 = document.querySelector('#btn38');
    btn37.addEventListener('click', function() {
        img15.src = './image/denon1.png';
        firebase.database().ref("kitchen").update({light: 1}); 
    });
    btn38.addEventListener('click', function() {
        img15.src = './image/denoff1.png';
        firebase.database().ref("kitchen").update({light: 0});
    });

    let btn39 = document.querySelector('#btn39');
    let img16 = document.querySelector('#quat3');
    let btn40 = document.querySelector('#btn40');
    btn39.addEventListener('click', function() {
        img16.src = './image/quatof1.png';
        firebase.database().ref("kitchen").update({fan: 0});
    });
    btn40.addEventListener('click', function() {
        img16.src = './image/quaton1.png';
        firebase.database().ref("kitchen").update({fan: 1});
    });

    let btn41 = document.querySelector('#btn41');
    let img17 = document.querySelector('#dish3');
    let btn42 = document.querySelector('#btn42');
    btn41.addEventListener('click', function() {
        img17.src = './image/dishwasherof.png';
        firebase.database().ref("kitchen").update({dish: 0}); 
    });
    btn42.addEventListener('click', function() {
        img17.src = './image/dishwasheron.png';
        firebase.database().ref("kitchen").update({dish: 1}); 
    });

    let btn43 = document.querySelector('#btn43');
    let img18 = document.querySelector('#ref3');
    let btn44 = document.querySelector('#btn44');
    btn43.addEventListener('click', function() {
        img18.src = './image/refof.png';
        firebase.database().ref("kitchen").update({refrigerator: 0}); 
    });
    btn44.addEventListener('click', function() {
        img18.src = './image/refon.png';
        firebase.database().ref("kitchen").update({refrigerator: 1});
    });
}
function initializeOfficeEvents() {
    let btn45 = document.querySelector('#btn45');
    let img19 = document.querySelector('#fan4');
    let btn46 = document.querySelector('#btn46');

    btn45.addEventListener('click', function()  {
        img19.src = './image/fan_running.png'; 
        firebase.database().ref("office").update({airconditioner: 1});             
    });
    btn46.addEventListener('click', function()  {
        img19.src = './image/fanoff.png';
        firebase.database().ref("office").update({aircondiioner: 0});
            
    });

    let btn47 = document.querySelector('#btn47');
    let img20 = document.querySelector('#tv4');
    let btn48 = document.querySelector('#btn48');

    btn47.addEventListener('click', function() {
        img20.src = './image/loaon.png'; 
        firebase.database().ref("office").update({tv: 1});
           
    });
    btn48.addEventListener('click', function() {
        img20.src = './image/loaof.png';
        firebase.database().ref("office").update({tv: 0}); 
            
    });

    let btn49 = document.querySelector('#btn49');
    let img21 = document.querySelector('#light4');
    let btn50 = document.querySelector('#btn50');

    btn49.addEventListener('click', function() {
        img21.src='./image/denon1.png';
        firebase.database().ref("office").update({light: 1}); 
            
    });
    btn50.addEventListener('click', function() {
        img21.src='./image/denoff1.png';
        firebase.database().ref("office").update({light: 0});
            
    });

    let btn51 = document.querySelector('#btn51');
    let img22 = document.querySelector('#door4');
    let btn52 = document.querySelector('#btn52');

    btn51.addEventListener('click', function() {
        img22.src='./image/lock1.png';
        firebase.database().ref("office").update({lock: 0}); 
            
    });
    btn52.addEventListener('click', function() {
        img22.src='./image/unlock1.png';
        firebase.database().ref("office").update({lock: 1}); 
            
    });

    let btn53 = document.querySelector('#btn53');
    let img23 = document.querySelector('#curtain4');
    let btn54 = document.querySelector('#btn54');

    btn53.addEventListener('click', function() {
        img23.src='./image/curof1.png';
        firebase.database().ref("office").update({curtain: 0}); 
            
    });
    btn54.addEventListener('click', function() {
        img23.src='./image/curon1.png';
        firebase.database().ref("office").update({curtain: 1}); 
            
    });

    let btn55 = document.querySelector('#btn55');
    let img24 = document.querySelector('#window4');
    let btn56 = document.querySelector('#btn56');

    btn55.addEventListener('click', function() {
        img24.src='./image/winof1.png';
        firebase.database().ref("office").update({window: 0}); 
            
    });
    btn56.addEventListener('click', function() {
        img24.src='./image/winon1.png';
        firebase.database().ref("office").update({window: 1}); 
            
    });
}
function initializeBathroomEvents() {
    let btn57 = document.querySelector('#btn57');
    let img33 = document.querySelector('#light6');
    let btn58 = document.querySelector('#btn58');

    btn57.addEventListener('click', function() {
        img33.src='./image/denon1.png';
        firebase.database().ref("bathroom").update({light: 1});        
            
    });
    btn58.addEventListener('click', function() {
        img33.src='./image/denoff1.png';   
        firebase.database().ref("bathroom").update({light: 0});       
            
    });

    let btn59 = document.querySelector('#btn59');
    let img34 = document.querySelector('#giat6');
    let btn60 = document.querySelector('#btn60');

    btn59.addEventListener('click', function() {
        img34.src='./image/giaton.png';  
        firebase.database().ref("bathroom").update({washing: 1}); 
            
    });
    btn60.addEventListener('click', function() {
        img34.src='./image/giatof.png';  
        firebase.database().ref("bathroom").update({washing: 0}); 
            
    });

    let btn61 = document.querySelector('#btn61');
    let img35 = document.querySelector('#toil6');
    let btn62 = document.querySelector('#btn62');

    btn61.addEventListener('click', function() {
        img35.src='./image/toileton.png';
        firebase.database().ref("bathroom").update({toilet: 1});
            
    });
    btn62.addEventListener('click', function() {
        img35.src='./image/toiletoff.png';     
        firebase.database().ref("bathroom").update({toilet: 0}); 
    });

    
    let btn63 = document.querySelector('#btn63');
    let img36 = document.querySelector('#bathtub6');
    let btn64 = document.querySelector('#btn64');

    btn63.addEventListener('click', function() {
        img36.src='./image/bathtubon.png';  
        firebase.database().ref("bathroom").update({bathtub: 1});
            
    });
    btn64.addEventListener('click', function() {
        img36.src='./image/bathtubeof.png';   
        firebase.database().ref("bathroom").update({bathtub: 0}); 

    });
}
function initializeMasterEvents() {
    let btn65 = document.querySelector('#btn65');
    let img25 = document.querySelector('#fan5');
    let btn66 = document.querySelector('#btn66');
   
    btn65.addEventListener('click', function()  {
        img25.src = './image/fan_running.png';    
        firebase.database().ref("masterroom").update({airconditioner: 1});     
    });
    btn66.addEventListener('click', function()  {
        img25.src = './image/fanoff.png';     
        firebase.database().ref("masterroom").update({airconditioner: 0});     
            
    });

    let btn67 = document.querySelector('#btn67');
    let img26 = document.querySelector('#tv5');
    let btn68 = document.querySelector('#btn68');

    btn67.addEventListener('click', function() {
        img26.src = './image/loaon.png';    
        firebase.database().ref("masterroom").update({tv: 1});         
           
    });
    btn68.addEventListener('click', function() {
        img26.src = './image/loaof.png';       
        firebase.database().ref("masterroom").update({tv: 0});  
            
    });

    let btn69 = document.querySelector('#btn69');
    let img27 = document.querySelector('#light5');
    let btn70 = document.querySelector('#btn70');

    btn69.addEventListener('click', function() {
        img27.src='./image/denon1.png';     
        firebase.database().ref("masterroom").update({light: 1});     
            
    });
    btn70.addEventListener('click', function() {
        img27.src='./image/denoff1.png';
        firebase.database().ref("masterroom").update({light: 0}); 
    });

    let btn71 = document.querySelector('#btn71');
    let img28 = document.querySelector('#door5');
    let btn72 = document.querySelector('#btn72');

    btn71.addEventListener('click', function() {
        img28.src='./image/lock1.png';   
        firebase.database().ref("masterroom").update({lock: 0});         
            
    });
    btn72.addEventListener('click', function() {
        img28.src='./image/unlock1.png';     
        firebase.database().ref("masterroom").update({lock: 1});     
            
    });

    let btn73 = document.querySelector('#btn73');
    let img29 = document.querySelector('#curtain5');
    let btn74 = document.querySelector('#btn74');

    btn73.addEventListener('click', function() {
        img29.src='./image/curof1.png';   
        firebase.database().ref("masterroom").update({curtain: 0});       
            
    });
    btn74.addEventListener('click', function() {
        img29.src='./image/curon1.png';    
        firebase.database().ref("masterroom").update({curtain: 1});     
            
    });

    let btn75 = document.querySelector('#btn75');
    let img30 = document.querySelector('#window5');
    let btn76 = document.querySelector('#btn76');

    btn75.addEventListener('click', function() {
        img30.src='./image/winof1.png';
        firebase.database().ref("masterroom").update({window: 0});   
    });
    btn76.addEventListener('click', function() {
        img30.src='./image/winon1.png';    
        firebase.database().ref("masterroom").update({window: 1});      
            
    });


}



