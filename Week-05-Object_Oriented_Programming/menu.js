//Sub class 1
class Album {
    constructor(name){
        this.name = name;
    }

    describe(){
        return `${this.name}`;
    }
}

//Sub Class 2
class Band {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
        this.albums = [];    
    
    }

    addAlbum(album){
        if(album instanceof Album){
            this.albums.push(album);
        } else {
            throw new Error(`You can only add an instance of Album.  What you typed in is not an Album: ${album}`);
        }
    }
    describe(){
        return `${this.name} has ${this.albums.length} Albums.`;
    }
}

//Main Class
class Menu {
    constructor(){
        this.bands = [];
        this.selectedBand = null;
        
        
    }

    

    start() {
        
        //code to repopulate the Menu arrays from Local Storage
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
        
        let selection = this.showMainMenuOptions();

        while(selection !=0 ) {
            switch (selection) {
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
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
            //Code to store Menu items into Local Storage
            for(let j = 0; j < this.bands.length; j++) {
            this.selectedBand = this.bands[j];
            let description = 'Band Name: ' + this.selectedBand.name + ': Genre: ' + this.selectedBand.genre + ": ";
            
            for (let i=0; i< this.selectedBand.albums.length; i++){
            description += "Album " + (i+1) + ': ' + this.selectedBand.albums[i].name + ": ";
           }
            localStorage.setItem(j, JSON.stringify(description));
            
            }
        alert('Thank You!');
    }

    showMainMenuOptions(){
        return prompt(`
        0: Exit
        1: Create New Band
        2: View Band
        3: Delete Band
        4: Display all Bands
        `);
    }

    showBandMenuOptions(bandInfo){
        return prompt(`
        0: Back
        1: Create Album
        2: Delete Album
        -------------------------
        ${bandInfo}`)
        
        
    }

    displayBands(){
        let bandString = '';
        for(let i = 0; i < this.bands.length; i++){
            bandString += i +': ' + this.bands[i].name + '\n';
        }
        alert(bandString);
    }

    createBand(){
        let name = prompt(`Enter name for the new Band`);
        let genre = prompt(`Enter Genre for the new Band`);
        this.bands.push(new Band(name, genre));
    }

    viewBand(){
        let index = prompt(`Enter the index of the Band you wish to view: `);
        if(index > -1 && index < this.bands.length){
            this.selectedBand = this.bands[index];
            let description = 'Band Name: ' + this.selectedBand.name + ' - ' + this.selectedBand.genre + '\n';
            
            for (let i=0; i< this.selectedBand.albums.length; i++){
                description += "        " + i + ': ' + this.selectedBand.albums[i].name  + '\n';
            }
            

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

    deleteBand(){
        let index = prompt(`Enter the index of the Band you wish to delete: `);
        if( index > -1 && index < this.bands.length) {
            this.bands.splice(index, 1);
        }
    }

    createAlbum(){
        let name = prompt(`Enter name for new Album: `);
        this.selectedBand.albums.push(new Album(name));
    }

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




