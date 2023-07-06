//Document write ile çıktı verme

document.writeln("Hello, World<br>");
document.writeln("I'm FHG<br>");
document.write(311);

// console.log("") consol içerisine yazar

console.log("Hello, world");
console.log(132);
console.log(true);
console.log({name:"Fatma" ,surname:"Gül"});

console.clear(); //console işlemleri temizlenir

//alert (uyarı) popup(sayfanın üzerinde birden verilen mesaj) ile çıktı verme

console.log(window); //window sayfanın en geniş metodu

alert("MERHABA");
let  a =10;
let b=12;
alert("toplam: " +(a+b));

//yorum satırı: kodun açıklığını artırmak için yazılması gaydalı olur
//CTRL+Ö seçilen satırları yorum satırı yapar
/*.....*/ 
/*
? Bilgilendirme
! dikkat
TODO yapılacaklar
*test mesajı
*/

let isim="Fatma Hümeyra 19 yaşındadır";
console.log(isim);
console.log(typeof isim);

let sayi1=11;
console.log(sayi1);
console.log(typeof sayi1);

console.log(5<2);

//operatörler
let not1=60;
let not2=47;

console.log(not1+not2);
console.log("Notların toplpamı: "+(not1+not2)); // buradaki parantez işlem önceliği gibi

//** operatörü üssünü almak için kullanılır

console.log(4**2); //4 ün karesini alır

console.log(5=="5"); //true-false değeri verir
console.log(5==="5");

console.log(!(8<1)); // ünlem değili true-false
console.log(55);
console.log(5==3);
console.log(5!=3);
console.log(5>=3);
console.log(5<=3);

//Diyalog kutuları
//? window objesi içinden fonksiyon çağıracaksam başına window yazmak zorunda değilim
//console.log(window);
alert("popup içerisinde görülecek mesaj");

let ad= prompt("İsminizi girin: "); //?kullanıcıdan değer aldı ve bunu ad değişkenine atadı ama türü string olur her halukarda
console.log(ad); //kullanıcıdan alınan değerler her zaman strinf döner

confirm("silmek istediğine emin misin?"); //confirm onay almak için true-false

//koşul yapıları
let not=67;
if(not>50){
    console.log("Geçtiniz, notunuz: "+ not);
}
else{
    console.log("Kaldınız, notunuz: "+not);
}
let age = Number(prompt("Yaşınız: "));
let money= Number(prompt("Bütçeniz: "));

if(age>=18 && money>3000){
    console.log("Ehliyet alabilirsiniz");
}
else{
    console.log("Ehliyet alamazsınız");
}