//Parametresiz ve geriye döndürmeyen metot
/*
function yazdir(){
    ...kodlar
}
*/
//metot burda hazırlandı
function yazdir(){
    console.log("FHG");
}

yazdir(); //metotu çağırdım

function sum(){
    let a=Number(prompt("Sayi giriniz"));
    let b=Number(prompt("Sayi giriniz"));

    alert("Sayıların toplamı: "+(a+b));
}
sum();

//parametreli metot

function write(isim,soyisim){
    console.log(isim+" "+soyisim);
}

write("Fatma","Gül");

function cube(sayi){
    console.log(sayi**3);
}
cube(3);
cube(5);

let age=Number(prompt("Yaşınızı giriniz")); 
function control(yas){
    if(age>=18){
        console.log("Ehliyet alabilirsiniz");
    }
    else{
        console.log("Ehliyet alamazsınız");
    }
}
control(age);

let sayi1=Number(prompt("Bir sayi giriinz"));
function square(sayi1){
    console.log(sayi1**2);
}
square(sayi1);

//Geriye değer döndüren metot  --return: geriye dönmek
//?Return bir değeri metodun dışarısına cıkarmak taşımak için kullanılır
//?Bir metodu bitiren anahtar kelimedir sonrasında başka bir şey kullanılmaz

let donenDeger=cube(2);
kareAl(donenDeger);

function kareAl(sayi){
    let sonuc=sayi**2;
    console.log(sonuc);
}
function cube(sayi){
    let sonuc=sayi**3;
    return sonuc;
}

// //?geriye değer döndürmeyen metod void

//Kelime sayısı bulma uygulaması
//benim girdiğim cümle içerisinde kullanıcının girdiği harfi arayacağım kullanıcaıdan harf alıcam

let sentence="Ben okulda JS alıştırmaları yapıyorum"; //metin oluşturdum

let letter=prompt("Bir harf giriniz"); 

let result=find(letter); 
alert("Harf sayisi: " + result);

function find(letter){
    let sum=0;
    for(let i=0; i<sentence.length ;i++){//.lenght uzunluğu bulan fonksiyon 
        if(sentence.charAt(i)===letter){//charAt kaçıncı elemanı olduğunu buluyor
            //?Küçük büyük harf farkı olmasını istemiyorsam if(sentence.charAt(i).toLowerCase()===letter.toLowerCase) her türlü küçük harfe çevirdim 
            sum+=1;
        }
    }
    return sum;
}

//Mükemmel sayı uygulaması
//Bir sayıyı tam bölünmesi için max yarısına kadar yolumuz var
function isPerfectNumber(number){
    
}
