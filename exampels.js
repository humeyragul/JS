//avarage  hesaplama
let vize1= Number(prompt("Vize1 notunuzu giriniz: "));
let vize2= Number(prompt("Vize2 notunuzu giriniz: "));
let final= Number(prompt("Final notunuzu giriniz: "));

let avarega = (vize1*0.3)+(vize2*0.3)+(final*0.4);

if(avarega>=60){
    console.log("Dersi geçtiniz tebrikler");
}
else{
    console.log("Dersi geçemediniz üzgünüm");
}

//vücut kitle endeksi hesaplama
let weight= Number(prompt("Kilonuzu giriniz:"));
let height= Number(prompt("Boyunuzu giriniz:"));

let index=weight/(height*2);
if(index<18.5){
console.log("İdeal kilonun altında"+index);
}
else if(index>18.5 && index<24.9){
    console.log("İdeal kiloda"+index);
}
else if(index>25 && index<29.9){
    console.log("İdeal kilonun üstünde"+index);
}
else if(index>30 && index<39.9){
    console.log("İdeal kilonun çok üstünde(obez)"+index);
}
else if(index>40){
    console.log("İdeal kilonun çok üstüünde(morbid obez)");
}

//Benzin istasyonu uygulaması
console.log("1-Dizel\r\n2-Benzin\r\n3-LPG")
let choice= prompt("Seçmek istediğiniz işlemi seçiniz: ");

let litre=Number(prompt("Yüklenecek litre miktarı: "));
if(choice=="1"){
let fee= 24.53*litre;
console.log("Toplam ücret: "+fee);
}
else if(choice=="2"){
    let fee= 22.25*litre;
    console.log("Toplam ücret: "+fee); 
}
else if(choice=="3"){
    let fee= 11.1*litre;
console.log("Toplam ücret: "+fee);
}
else{
    console.log("Gecerli deger giriniz");
}

let dizel =24.53 ,benzin=22.25 , lpg=11.1;
const yeniSatir="\r\n";

const yakitMetni ="1-Dizel"+yeniSatir+"2-Benzin"+yeniSatir+"3-LPG"+yeniSatir+"Yakıt türünü seçiniz";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi=="1"|| yakitTipi=="2"|| yakitTipi=="3"){
    let yakitLitresi=Number(prompt("Litre girin"));
    let bakiye =Number(prompt("Bakiyenizi girin"));
    
    if(yakitTipi=="1"){
    let tutar=dizel*yakitLitresi;
    if(tutar<=bakiye){
    bakiye=bakiye-tutar;
    alert("Yakıt alma işlemi başarılı"+yeniSatir+"Kalan bakiye : " + bakiye);
    }
    else{
        alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar : " + tutar+yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik Tutar : " + (tutar-bakiye));
    }
    }
    else if(yakitTipi=="2"){
        let tutar=benzin*yakitLitresi;
        if(tutar<=bakiye){
            bakiye=bakiye-tutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir+"Kalan bakiye : " + bakiye);
            }
            else{
                alert("Bakiyeniz yeterli değildir"+yeniSatir
                    +"Ödenecek tutar : " + tutar+yeniSatir
                    +"Bakiye : " + bakiye+yeniSatir
                    +"Eksik Tutar : " + (tutar-bakiye));
    }
}
    else if(yakitTipi=="3"){
        let tutar=lpg*yakitLitresi;
        if(tutar<=bakiye){
            bakiye=bakiye-tutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir+"Kalan bakiye : " + bakiye);
            }
            else{
                alert("Bakiyeniz yeterli değildir"+yeniSatir
                    +"Ödenecek tutar : " + tutar+yeniSatir
                    +"Bakiye : " + bakiye+yeniSatir
                    +"Eksik Tutar : " + (tutar-bakiye));
    }
}
}
else{
    alert("Geçerli işlem seçin");
}

//Haftanın günleri switch-case
let gunler="1-Pazartesi\n2-Salı\n3-Çarşamba\n4-Perşembe\n5-Cuma\n6-Cumartesi\n7-Pazar\nBir seçim yapınız";

let deger=prompt(gunler);
switch(deger){
    case "1":
        console.log("Pazartesi");
        break;
    case "2":
        console.log("Salı");
        break;
    case "3":
        console.log("Çrş");
        break;
    case "4":
        console.log("prş");
        break;
    case "5":
        console.log("cuma");
        break;
    case "6":
        console.log("cmts");
        break;
    case "7":
        console.log("pazar");
        break;
    default:
        alert("Geçerli sayi giriniz");
        break;
}

//ATM uygulaması
let metin1="1-Bakiye Sorgulama\n2-Para çekme\n3-Para Yatırma\n4-Çıkış"
let secim=prompt(metin1);
let bakiye=1000;

switch(secim){
    case "1":
        alert("Bakiye tutarınız "+bakiye);
        break;
    case "2":
        let paraCekme=prompt("Ne kadar çekmek istediğinizi giriniz:");
        if(paraCekme<bakiye){
            console.log("İşlem başarılı");
        }
        else{
            console.log("Yeterli bakiyeye sahip değilsiniz");
        }
        break;
    case "3":
        let yatirilacakPara=Number(prompt("yatırmak istediğiniz tutarı giriniz"));
        bakiye=bakiye+yatirilacakPara;
        console.log("Yeni bakiye değeriniz: "+bakiye);
        break;
    case "4":
        confirm("Çıkış yapmak istediğinize emin misiniz?");
        break;
    default:
        alert("Geçerli işlem seçiniz");
        break;
}

//TYT Puan Hesaplama

//puan hesaplama seçeneği ve çıkış
let metin2="1-TYT Puan Hesaplama\n2-Çıkış\nYapmak İstediğiniz İşlemi Seçiniz";
let islem=prompt(metin2);


switch(islem){
    case "1":
        let turkceDogru=Number(prompt("Türkçe doğru sayınızı giriniz:"));
        let turkceYanlis=Number(prompt("Türkçe yanlış sayınızı giriniz"));
        let matDogru=Number(prompt("Matematik doğru sayınızı giriniz"));
        let matYanlis=Number(prompt("Matematik yanlış sayınızı giriniz"));
        let fenDogru=Number(prompt("Fen doğru sayınızı giriniz"));
        let fenYanlis=Number(prompt("Fen yanlış sayınızı giriniz"));
        let sosDogru=Number(prompt("Sosyal doğru sayınızı giriniz"));
        let sosYanlis=Number(prompt("Sosyal yanlış sayınızı giriniz"));
        let okulPuani=Number(prompt("Okul puanını gir"));

        let dogruSayisi= turkceDogru+matDogru+fenDogru+sosDogru;
        let yanlisSayisi= turkceYanlis+matYanlis+fenYanlis+sosYanlis;
        let net=dogruSayisi-(yanlisSayisi/4);
        let puan=(net*4)+100+okulPuani;
        alert("TYT Puanınız: "+puan);
        break;
    case "2":
        confirm("Çıkış yapmak istediğinize emin misiniz?");
        break;
    default:
        alert("Geçerli bir işlem seçiniz");
        break;
}
//doğru yanlışları iste hesaplama yap ekrana yazdır
/*
türkçe bir soru 4 puan
*/
