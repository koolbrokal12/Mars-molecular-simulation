let c = 0;
let o = 0;
let h = 8; 

let methane = 0;
let water = 0;
let oxygen = 0;
let energy = 0;

function refresh_screen() {
    document.getElementById("c_total").innerHTML = c;
    document.getElementById("o_total").innerHTML = o;
    document.getElementById("h_total").innerHTML = h;
    
    document.getElementById("ch4_total").innerHTML = methane;
    document.getElementById("h2o_total").innerHTML = water;
    document.getElementById("o2_total").innerHTML = oxygen;
    document.getElementById("heat_total").innerHTML = energy;
}

// Function for button 1 - boosted to scrub 3 molecules at once
function get_co2() {
    c = c + 3; // adds 3 carbon atoms now
    o = o + 6; // adds 6 oxygen atoms now
    refresh_screen();
}

function make_fuel() {
    if (c >= 1 && h >= 4) {
        c = c - 1;
        h = h - 4;
        
        methane = methane + 1;
        water = water + 2;
        energy = energy + 165; 
        refresh_screen();
    } else {
        alert("Error! You do not have enough Carbon or Hydrogen atoms yet.");
    }
}

function split_water() {
    if (water >= 2) {
        water = water - 2;
        h = h + 4; 
        oxygen = oxygen + 1; 
        refresh_screen();
    } else {
        alert("Error! You need to make at least 2 water molecules first.");
    }
}

refresh_screen();