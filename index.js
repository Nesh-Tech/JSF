const game = {
    'suspects' : [
        {
            name : "Rusty",
            color : "orange"
        },
        {
            name : "Miss Scarter",
            color : "red"
        }
    ]
};

// Loop over the objects, REMEMBER: Objects does not has length

function foo(){
    for(let i = 0; i < game.suspects.length; i++){     // we can't do "game.length" because it is object and it does not has length
        console.log(game.suspects[i]);
    }
}
foo();