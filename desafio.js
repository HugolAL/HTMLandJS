let Metros = 0;
let Kilogramos = 0;
let IMCvar = 0;
let Factorialvar = 0;
let ResultFactorial = 1;
let n = 0;
let MXN = 0;

function Enviar()
{
    Metros = document.querySelector('#Metros').value;
    Kilogramos = document.querySelector('#Kilogramos').value;
    Factorialvar = document.querySelector('#Factorial').value;
    IMCvar = IMC(Metros, Kilogramos);
    ResultFactorial = Factorial(Factorialvar);

    console.log("Información Enviada: ");
    console.log(Metros);
    console.log(Kilogramos);
    console.log(IMCvar);
    console.log(ResultFactorial);
}

function Factorial(Factorialvar)
{
    while(n<Factorialvar)
    {
        n++;
        ResultFactorial = ResultFactorial*n;
        console.log(ResultFactorial);
    }
    return ResultFactorial;
}

function IMC(Metros, Kilogramos)
{
    return Kilogramos/(Metros*Metros);
}

function ConversorDLL()
{
    let MXNvalue = document.querySelector("#ValorMXN").value;
    MXN = MXNvalue/17.08;
    console.log(MXN);
}

function RectangularAyP()
{
    let Altura = document.querySelector("#Altura").value;
    let Anchura = document.querySelector("#Anchura").value;
    let Unidades = document.querySelector("#Unidades").value;
    let A = CalculoRectangularA(Altura, Anchura);
    let P = CalculoRectangularP(Altura, Anchura);
    console.log(`El área es: ${A} ${Unidades}^2`);
    console.log(`El perímetro es: ${P} ${Unidades}`);
}

function CalculoRectangularA(Altura, Anchura)
{
    return Altura*Anchura;
}

function CalculoRectangularP(Altura, Anchura)
{
    return (2*Altura)+(2*Anchura);
}

function Radio()
{
    let Radiovar = document.querySelector("#Radio").value;
    let AR = AreaRadio(Radiovar);
    let PR = PerimetroRadio(Radiovar);
    console.log(`El área del círculo es: ${AR}`)
    console.log(`El perímetro del círculo es: ${PR}`)
}

function AreaRadio(Radiovar)
{
    return 3.14*Radiovar*Radiovar;
}

function PerimetroRadio(Radiovar)
{
    return 2*3.14*Radiovar;
}

function Numero()
{
    let Dato = document.querySelector("#Numero").value;
    TabladeMult(Dato);
    return;
}

function TabladeMult(Dato)
{
    let mult = 0;
    let cont = 0;
    while (cont<=10)
    {
        mult = cont*Dato;
        console.log(`${Dato}*${cont}=${mult}`)
        cont++;
    }
    return;
}