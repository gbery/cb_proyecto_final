function dna() {

    var seq = ['T', 'T' , 'A' ,'A' , 'T', 'G', 'T', 'C', 'C', 'C', 'T', 'A' ,'T' ,'G', 'A', 'T', 'A', 'C', 'T', 'A', 'A', 'T', 'G', 'C', 'G', 'A', 'A', 'A', 'T', 'T', 'A', 'A', 'A', 'T', 'C', 'G', 'A', 'A', 'T'];
    var final = []

    for(i=0;i<seq.length;i++) {
        if(seq[i]=='A' && seq[i+1]=='T' && seq[i+2]=='G') {
            final.push('A','T','G')

            for(j=i+3;j<seq.length;j+=3) {
                if(seq[j]=='T' && seq[j+1]=='G' && seq[j+2]=='A') {
                    for(k=i+3;k<j;k++) {
                        final.push(seq[k]);
                    }
                    final.push('T','G','A')
                    console.log(final)
                }
            }
        }
    }
}

function json() {
    var amigos = [{
        "name":"Juan",
        "lastName":"Perez",
        "age":"24 anios",
        "profilePic":"beach.jpg"
    },
    {
        "name":"Geoffrey",
        "lastName":"Bery",
        "age":"26 anios"
    },
    {
        "name":"Mario",
        "lastName":"Rodriguez",
        "age":"22 anios"
    }];

    var content = "";

    for(var i=0;i<amigos.length;i++){
        content += "<div class='amigoItem'>";
        content += "<img src='"+ amigos[0].profilePic +"'>";
        content += "<h1>" + amigos[i].name + "</h1>";
        content += "<h2>" + amigos[i].lastName +"<h2>";
        content += "<p>" + amigos[i].age + "</p>";
        content += "</div>";
    }

    console.log(content);
    document.getElementById("result").innerHTML = content;
}





