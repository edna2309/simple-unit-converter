/* MIJENJANJE TABOVA */

function boja(a, b, c, d){
    document.getElementById("duzina-nav").style.color = a;
    document.getElementById("masa-nav").style.color = b;
    document.getElementById("povrsina-nav").style.color = c;
    document.getElementById("volumen-nav").style.color = d;
}

function stil(a, b, c, d){
    document.getElementById("duzina").style.display = a;
    document.getElementById("masa").style.display = b;
    document.getElementById("povrsina").style.display = c;
    document.getElementById("volumen").style.display = d;
}

function promijeniDuzina(){
    stil('block', 'none', 'none', 'none');
    boja('black', 'white', 'white', 'white');
}

function promijeniMasa(){
    stil('none', 'block', 'none', 'none');
    boja('white', 'black', 'white', 'white');
}
function promijeniVolumen(){
    stil( 'none', 'none', 'none', 'block');
    boja('white', 'white', 'white', 'black');
}
function promijeniPovrsina(){
    stil( 'none', 'none', 'block', 'none');
    boja('white', 'white','black', 'white');
}

/*---------------DUZINA---------------*/

/* KILOMETRI */
function DuzinaKilometri(br)
{
    document.getElementById("metarInput").value= br*1000;
    document.getElementById("centimetarInput").value= br*100000;
    document.getElementById("milimetarInput").value= br*1000000;
    document.getElementById("miljaInput").value= br/1.609344;
    document.getElementById("inchInput").value= br/0.0000254;
}

/* METRI*/
function DuzinaMetri(br)
{
    document.getElementById("kilometarInput").value=br/1000;
    document.getElementById("centimetarInput").value=br/0.01;
    document.getElementById("milimetarInput").value=br/0.001;
    document.getElementById("miljaInput").value=br*0.00062137;
    document.getElementById("inchInput").value=br*39.370;
}

/* CENTIMETRI */
function DuzinaCentimetri(br)
{
    document.getElementById("kilometarInput").value=br/100000;
    document.getElementById("metarInput").value=br/100;
    document.getElementById("milimetarInput").value=br/10;
    document.getElementById("miljaInput").value=br*0.0000062137;
    document.getElementById("inchInput").value=br*0.39370;
}

/* MILIMETRI */
function DuzinaMilimetri(br)
{
    document.getElementById("kilometarInput").value=br/1000000;
    document.getElementById("metarInput").value=br/1000;
    document.getElementById("centimetarInput").value=br/10;
    document.getElementById("miljaInput").value=br/1609344;
    document.getElementById("inchInput").value=br*0.039370;
}

/* MILJA */
function DuzinaMilja(br){
    document.getElementById("kilometarInput").value=br/0.62137;
    document.getElementById("metarInput").value=br/0.00062137;
    document.getElementById("centimetarInput").value=br/0.0000062137;
    document.getElementById("milimetarInput").value=br*1609344;
    document.getElementById("inchInput").value=br*63360;
}

/* INČ */
function DuzinaInch(br)
{
    document.getElementById("kilometarInput").value=br/39370;
    document.getElementById("metarInput").value=br/39.370;
    document.getElementById("centimetarInput").value=br/0.39370;
    document.getElementById("milimetarInput").value=br*25.4;
    document.getElementById("miljaInput").value=br*0.000015783;
}

/*---------------MASA---------------*/

/* KILOGRAM */
function MasaKilogram(br)
{
    document.getElementById("gramInput").value=br*1000;
    document.getElementById("miligramInput").value=br*1000000;
    document.getElementById("funtaInput").value=br*2.2046;
    document.getElementById("tonaInput").value=br/1000;
}

/* GRAM */
function MasaGram(br)
{
    document.getElementById("kilogramInput").value=br/1000;
    document.getElementById("miligramInput").value=br*1000;
    document.getElementById("funtaInput").value=br*0.0022046;
    document.getElementById("tonaInput").value=br/1000000;
}

/* MILIGRAM */
function MasaMiligram(br)
{
    document.getElementById("kilogramInput").value=br/1000000;
    document.getElementById("gramInput").value=br/1000;
    document.getElementById("funtaInput").value=br*0.0000022046;
    document.getElementById("tonaInput").value=br/1000000000;
}

/* FUNTA */
function MasaFunta(br)
{
    document.getElementById("kilogramInput").value=br/2.2046;
    document.getElementById("gramInput").value=br/0.0022046;
    document.getElementById("miligramInput").value=br*453592.37;
    document.getElementById("tonaInput").value=br/2204.6;
}

/* TONA */
function MasaTona(br)
{
    document.getElementById("kilogramInput").value=br/0.0010000;
    document.getElementById("gramInput").value=br/0.0000010000;
    document.getElementById("miligramInput").value=br/1000000000;
    document.getElementById("funtaInput").value=br/0.00045359237;
}

/*---------------VOLUMEN---------------*/

/* LITAR */
function VolumenLitar(br)
{
    document.getElementById("decilitarInput").value=br*10;
    document.getElementById("centilitarInput").value=br*100;
    document.getElementById("kubniMetarInput").value=br/1000;
    document.getElementById("kubniDecimetarInput").value=br;
}

/* DECILITAR */
function VolumenDecilitar(br)
{
    document.getElementById("litarInput").value=br/10;
    document.getElementById("centilitarInput").value=br*10;
    document.getElementById("kubniMetarInput").value=br/10000;
    document.getElementById("kubniDecimetarInput").value=br/10;
}

/* CENTILITAR */
function VolumenCentilitar(br)
{
    document.getElementById("litarInput").value=br/100;
    document.getElementById("decilitarInput").value=br/10;
    document.getElementById("kubniMetarInput").value=br/100000;
    document.getElementById("kubniDecimetarInput").value=br/100;
}

/* KUBNI METAR */
function VolumenKubniMetar(br)
{
    document.getElementById("litarInput").value=br*1000;
    document.getElementById("decilitarInput").value=br*10000;
    document.getElementById("centilitarInput").value=br*100000;
    document.getElementById("kubniDecimetarInput").value=br*1000;
}

/* KUBNI DECIMETAR */
function VolumenKubniDecimetar(br)
{
    document.getElementById("litarInput").value=br;
    document.getElementById("decilitarInput").value=br*10;
    document.getElementById("centilitarInput").value=br*100;
    document.getElementById("kubniMetarInput").value=br/1000;
    
}

/*---------------POVRŠINA---------------*/

/* KVADRATNI KILOMETAR */
function PovrsinaKvKilometar(br){
    document.getElementById("kvMetarInput").value= br*1000000;
    document.getElementById("kvCentimetarInput").value= br*10000000000;
    document.getElementById("hektarInput").value= br*100;
    document.getElementById("kvJardInput").value= br/0.00000083612736;
    document.getElementById("kvStopaInput").value= br/0.00000009290304;
}

/* KVADRATNI METAR */
function PovrsinaKvMetar(br){
    document.getElementById("kvKilometarInput").value= br/1000000;
    document.getElementById("kvCentimetarInput").value= br*10000;
    document.getElementById("hektarInput").value= br/10000;
    document.getElementById("kvJardInput").value= br/0.83612736;
    document.getElementById("kvStopaInput").value= br/0.09290304;
}

/* KVADRATNI CENTIMETAR */
function PovrsinaKvCentimetar(br){
    document.getElementById("kvKilometarInput").value= br/10000000000;
    document.getElementById("kvMetarInput").value= br/10000;
    document.getElementById("hektarInput").value= br/100000000;
    document.getElementById("kvJardInput").value= br/8361.2736;
    document.getElementById("kvStopaInput").value= br/929.0304;
}

/* HEKTAR */
function PovrsinaHektar(br){
    document.getElementById("kvKilometarInput").value= br/100;
    document.getElementById("kvMetarInput").value= br*10000;
    document.getElementById("kvCentimetarInput").value= br*100000000;
    document.getElementById("kvJardInput").value= br/0.000083612736;
    document.getElementById("kvStopaInput").value= br/0.000009290304;
}

/* KVADRATNI JARD */
function PovrsinaKvJard(br){
    document.getElementById("kvKilometarInput").value= br*0.00000083612736;
    document.getElementById("kvMetarInput").value= br*0.83612736;
    document.getElementById("kvCentimetarInput").value= br*8361.2736;
    document.getElementById("hektarInput").value= br*0.000083612736;
    document.getElementById("kvStopaInput").value= br*9;
}

/* KVADRATNA STOPA */
function PovrsinaKvStopa(br){
    document.getElementById("kvKilometarInput").value= br*0.00000009290304;
    document.getElementById("kvMetarInput").value= br*0.09290304;
    document.getElementById("kvCentimetarInput").value= br*929.0304;
    document.getElementById("hektarInput").value= br*0.000009290304;
    document.getElementById("kvJardInput").value= br/9;
}