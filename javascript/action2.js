function cadenero() {
    var edad = 18;
    var especie = "humano"

    if(edad >= 18){
        if(especie=="humano") {
            console.log("Puedes pasar")
        } else {
            console.log("No eres humano")
        }
    }

    else {
        console.log("No tienes edad");
    }
}

function max_num2() {
    var a = 5;
    var b = 17;

    if(a>b) {
        console.log(a);
    } else if(b>a) {
        console.log(b);
    }
}

function max_num3() {
    var a = 5;
    var b = 17;
    var c = 21;

    if(a>b) {
        if(a>c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else if(b>c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

function pos_neg() {
    var a = -5;

    if(a>0) {
        console.log("positive")
    } else if(a<0) {
        console.log("negative")
    } else {
        console.log("zero")
    }
}

function five_eleven() {
    var a = 55;

    if(a%5==0) {
        if(a%11==0) {
            console.log("divisible by 5 and 11")
        } else {
            console.log("not divisible by 11")
        }
    } else {
        console.log("not divisible by 5")
    }
}

function leap_year() {

    var year=2003;

    if(year%4==0) {
        if(year%100==0) {
            if(year%400==0) {
                console.log("leap year! (like 2000)");
            } else {
                console.log("not leap year (like 1900)");
            }
        } else {
            console.log("leap year! (like 2004)");
        }
    } else {
        console.log("not a leap year");
    }
}

function vowel() {
    var letter = 'a';

    if(letter=='a' || letter=='e' || letter=='i' || letter=='u'||letter=='o') {
        console.log("it's a vowel!");
    } else {
        console.log("it's a consonant!");
    }
}

function triangle() {
    var a = 120;
    var b = 20;
    var c = 40;

    if(a+b+c==180) {
        if(a>0 && b>0 && c>0) {
        console.log("It's a valid triangle!");
        } else {
        console.log("Invalid triangle");
    }
    } else {
        console.log("Invalid triangle");
    }
}

function triangle_side() {
    var a = 120;
    var b = 20;
    var c = 40;

    if(a<b+c && b<a+c && c<b+a ) {
        if(a>0 && b>0 && c>0) {
            console.log("Valid triangle");
    } else {
        console.log("Invalid triangle");
    } 
    } else {
        console.log("Invalid triangle");
    }
}

function grade() {
    var phys = 1;
    var chem = 1;
    var bio = 1;
    var math = .8;
    var comp = .8;
    var avg_score = (phys+chem+bio+math+comp)/5

    if(avg_score>=.9) {
        console.log("Grade A")
    } else if(avg_score>=.8) {
        console.log("Grade B")
    } else if(avg_score>=.7) {
        console.log("Grade C")
    } else if(avg_score>=.6) {
        console.log("Grade D")
    } else if(avg_score>=.4) {
        console.log("Grade E")
    } else {
        console.log("Grade F")
    }

}

function count() {
    for(var i=0; i<=100; i+=1) {
        if(i==0){
            console.log("El numero es cero")
        } if(i%2==0){
            console.log("El numero " + i +" es par")
        } else {
            console.log("El numero " + i +" es impar")
        }
    }

}

function natural() {
    var n = 25
    for(var i=1; i<=n; i++) {
        console.log(i)
    }
}

function reverse() {
    var n = 25;

    for(var i=n; i>=1; i+=-1) {
        console.log(i)
    }
}

function evens() {
    for(var i=1; i<=100; i+=1) {
        if(i%2==0){
            console.log(i)
        }
    }
}

function odds() {
    for(var i=1; i<=100; i+=1) {
        if(i%2==1){
            console.log(i)
        }
    }
}

function sum_natural() {

    var n = 26;
    var sum = 0

    for(var i=1; i<=n; i+=1) {
        sum+=i;
        if(i==n) {
        console.log(sum);
        }
    }
}

function sum_evens() {

    var n = 26;
    var sum = 0

    for(var i=1; i<=n; i+=1) {
        if(i%2==0){
            sum+=i;
        }
        if(i==n) {
        console.log(sum);
        }
    }
}

function sum_odds() {

    var n = 26;
    var sum = 0

    for(var i=1; i<=n; i+=1) {
        if(i%2==1){
            sum+=i;
        }
        if(i==n) {
        console.log(sum);
        }
    }
}

function mult_table() {

    var a = 5;

    for(var i=1; i<=a; i+=1) {
        for(var j=1; j<=a; j+=1) {
            console.log(i+" times "+j+" is equal to:"+ i*j);
        }
    }
}

function asterisk_stairs() {

    var n = 5;
    var counter="*"
    

    for(var i=1; i<=n; i+=1) {
        console.log(counter)
        counter+="*"
    }
}

function asterisk_pyramid() {

    var n = 20;
    var asterisk=" *";
    var space= " ";
    
    for(var i=1; i<=n; i+=1) {
        console.log(space.repeat(n-i)+asterisk.repeat(i))
    }
}

function listaAmigos() {
    var amigos = ['Hugo','Paco','Luis'];

    for(var i =0; i<amigos.length; i++){
        console.log(amigos[i])
    }
}

function coches() {
    var coches=[['Polo','Rojo','3p'],
                ['Vocho','Azul','2p'],
                ['Lobo','Negro','2p'],
                ['Swift','Rojo','5p'],
                ['Jetta','Morado','4p'], 
                ['Focus','Verde','5p']
            ];

    var content = "";

    for(var i=0; i<coches.length; i++){
        content = content + "<div>"
        for(var j=0; j<coches[i].length;j++) {
            if(j==0) {
                content = content + "<h1>" + coches[i][j] + "</h1>";
            } else {
            content = content + "<p>" + coches[i][j] + "</p>";
            }
        }
        content = content + "</div>";
    }

    document.getElementById("result").innerHTML = content;

}