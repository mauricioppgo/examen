var corredor1 = document.getElementById("corredor1");
        var corredor2 = document.getElementById("corredor2");

        
        var x_corredor1 = 0;
        var x_corredor2 = 0;

        function correr() {
            
            if (x_corredor1 <= 99 && x_corredor1 >= 0) { 
                x_corredor1 = x_corredor1 + 2 ; 
                corredor1.style.left = x_corredor1 + "%"; 
            } else { 
                x_corredor1 = 0; 
                corredor1.style.left = x_corredor1 + "%"; 
            }

           
            if (x_corredor2 <= 99 && x_corredor2 >= 0) { 
                x_corredor2 = x_corredor2 + 1; 
                corredor2.style.left = x_corredor2 + "%"; 
            } else { 
                x_corredor2 = 0; 
                corredor2.style.left = x_corredor2 + "%"; 
            }
        }