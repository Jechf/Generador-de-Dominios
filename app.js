var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];


function combinarray(){
    
    var comb = [];

    for (i = 0; i < pronoun.length; i++) {
        for (j = 0; j < adj.length; j++) {
            for (k = 0; k < noun.length; k++) {
                comb.push(pronoun[i]+adj[j]+noun[k]+".com")
            }
        }
    }
return comb;    
}

console.log(combinarray());



