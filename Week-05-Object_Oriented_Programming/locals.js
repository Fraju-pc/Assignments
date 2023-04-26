document.getElementById('add-single-item-to-ls').addEventListener("click", function(){
window.localStorage.setItem('name', 'Pat Randy');
updateUI();
});
document.getElementById('add-another-item-to-ls').addEventListener("click", function(){
localStorage.setItem('users', 
JSON.stringify({name: 'Pat Corcoran', food: 'Pizza'}));
updateUI();
});
document.getElementById('get-single-item-from-ls').addEventListener("click", function(){
const user = JSON.parse(localStorage.getItem('users'));
document.getElementById('ls-currently').textContent = user.food;
});
document.getElementById('remove-single-item-from-ls').addEventListener("click", function(){
localStorage.removeItem('name');
updateUI();
});
document.getElementById('remove-all-from-ls').addEventListener("click", function(){
localStorage.clear();
updateUI();
});

function updateUI(){
    var values = [], keys = Object.keys(localStorage), i = keys.length;
    while (i--) {
        values.push( localStorage.getItem(keys[i]));
    }
    document.getElementById('ls-currently').textContent = values
}