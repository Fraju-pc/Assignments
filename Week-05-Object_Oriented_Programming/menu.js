//Album Class
class Album {
    constructor(name){
        this.name = name;
    }
}

//Band Class
class Band {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
        this.albums = [];    
    
    }
}

//Main Menu Class
class Menu {
    constructor(){
        this.bands = [];
        this.selectedBand = null;
        
        
    }
    //call to start!
    start() {
        
        //call to pull data from local storage
        this.repopulate();
        
        //main menu selection processing
        let select = this.showMainMenuOptions();
        while(select !=0 ) {
            switch (select) {
                case '1':
                    this.createBand();
                    break;
                case '2':
                    this.viewBand();
                    break;
                case '3':
                    this.deleteBand();
                    break;
                case "4":
                    this.displayBands();
                default:
                    select = 0;
            }
            select = this.showMainMenuOptions();
        } 
        //call to store data to local storage
        this.storeData();

        alert('Thank You!');
    }

    //function to repopulate the Menu arrays from Local Storage    
    repopulate() {
        let keys = Object.keys(localStorage); 
        for (let index = 0; index < keys.length; index++) {
            let strPrs = JSON.parse(localStorage.getItem(index));
            //console.log(strPrs);
            let strSp1 = strPrs.split(": ");
            //console.log(strSp1);
            let n = strSp1[1];
            let g = strSp1[3];
            this.bands.push(new Band(n, g));
            if(strSp1.length > 5){
                for(let k = 5; k < strSp1.length; k+=2){
                    this.bands[index].albums.push(new Album(strSp1[k]));
                }
            }
        }
    }
    //function to store Menu items into Local Storage
    storeData(){
        for(let j = 0; j < this.bands.length; j++) {
            this.selectedBand = this.bands[j];
            let description = 'Band Name: ' + this.selectedBand.name + ': Genre: ' + this.selectedBand.genre + ": ";
            for (let i=0; i< this.selectedBand.albums.length; i++){
            description += "Album " + (i+1) + ': ' + this.selectedBand.albums[i].name + ": ";
           }
            localStorage.setItem(j, JSON.stringify(description));
            
            }
    }

    //main menu function
    showMainMenuOptions(){
        return prompt(`
        0: Exit
        1: Create New Band
        2: View Band
        3: Delete Band
        4: Display all Bands
        `);
    }

    //band menu options function
    showBandMenuOptions(bandInfo){
        return prompt(`
        0: Back
        1: Create Album
        2: Delete Album
        ~~~~~~~~~~~~~~~~
        ${bandInfo}`)
        
        
    }

    //function to display all currently stored bands
    displayBands(){
        let bandString = '';
        for(let i = 0; i < this.bands.length; i++){
            bandString += i +': ' + this.bands[i].name + '\n';
        }
        alert(bandString);
    }

    //function to create new band
    createBand(){
        let name = prompt(`Enter name for the new Band`);
        let genre = prompt(`Enter Genre for the new Band`);
        this.bands.push(new Band(name, genre));
    }

    //function to pull up data on selected band
    viewBand(){
        let index = prompt(`Enter the index of the Band you wish to view: `);
        if(index > -1 && index < this.bands.length){
            this.selectedBand = this.bands[index];
            let description = 'Band Name: ' + this.selectedBand.name + ' - ' + this.selectedBand.genre + '\n';
            
            for (let i=0; i< this.selectedBand.albums.length; i++){
                description += "        " + i + ': ' + this.selectedBand.albums[i].name  + '\n';
            }
            //menu options
            let selection = this.showBandMenuOptions(description);
            switch (selection){
                case '1':
                    this.createAlbum();
                    break;
                case '2':
                    this.deleteAlbum();
            }
        }
    }

    //function to delete band
    deleteBand(){
        let index = prompt(`Enter the index of the Band you wish to delete: `);
        if( index > -1 && index < this.bands.length) {
            this.bands.splice(index, 1);
        }
    }

    //function to create new album
    createAlbum(){
        let name = prompt(`Enter name for new Album: `);
        this.selectedBand.albums.push(new Album(name));
    }

    //function to delete selected album
    deleteAlbum(){
        let index = prompt(`Enter the index of the Album you wish to delete: `);
        if( index > -1 && index < this.selectedBand.albums.length) {
            this.selectedBand.albums.splice(index, 1);
        }
    }
    
}

//Main Function Call
let menu = new Menu();
menu.start();

//Html Button to Display Discography
document.getElementById('get-items-from-ls').addEventListener("click", function(){
    updateUI();
}
);

 //Html button to empty local storage  
document.getElementById('remove-all-from-ls').addEventListener("click", function(){
    localStorage.clear();
    updateUI();
}
);

//Display Discography to HTML
function updateUI(){
    let values = {}, 
    keys = Object.keys(localStorage), 
    i = keys.length;
    while(i--) {
        values[keys[i] ] = localStorage.getItem(keys[i]);
    }
 

for (index in values ) {
    document.getElementById("ls-currently").innerHTML += values[index] + '<br><br>';
    }

}