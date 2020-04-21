function CheckFields(form){
    var elems = form.elements;
    var result_p = document.getElementById('result');
    result_p.innerHTML = "";
    console.log(elems);
    console.log(elems.x.value);
    console.log(typeof(elems.x.value));
        
        var X = parseFloat(elems.x.value);
        var Y = parseFloat(elems.y.value);
        var Z = parseFloat(elems.z.value);
        
            
     console.log(X);
     console.log(Y);
     console.log(Z);
    if (X >= 0 && Y >= 0 && Z >= 0 && X+Y>Z && X+Z>Y && Y+Z>X ){
        result_p.innerHTML = "Такой треугольник существует";
        var check = true;
        }
        else{
            result_p.innerHTML = "Треугольник с заданными сторонами не существует";
            var check = false;
        }
    if (check) {
        if ((X==Math.sqrt(Math.pow(Y,2)+Math.pow(Z,2))) || (Y==Math.sqrt(Math.pow(X,2)+Math.pow(Z,2))) || (Z==Math.sqrt(Math.pow(Y,2)+Math.pow(X,2)))) {
            result_p.innerHTML = "Треугольник прямоугольный";
        }
        else {
            result_p.innerHTML = "Треугольник не является прямоугольным"
        }
        }

   
        document.getElementById("UserEnter").submit();
8      
        }

        