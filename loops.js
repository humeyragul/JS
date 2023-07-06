//Çarpım Tablosu
let i,j;
for(i=1;i<=10;i++){
    for(j=1;j<=10;j++){
        console.log(i+"x"+j+"="+(i*j));
    }
    console.log("--------------------------------------");
}

//Asal Sayı Bulma 1
let sayi=Number(prompt("Bir sayi değeri giriniz:"));
let flag=false;

for(let k=2;k<=Math.floor(sayi/2);k++){
    if(sayi%k==0){
       flag=true;
        break;
    }
}
if(flag){
    alert(sayi+" asal değildir");
}
else{
    alert(sayi+" asaldır");
}
//Asal sayı bulma -2
/*
let sayi=Number(prompt("Sayi girin"));
let sonuc=true;
for(i=2;i<=Math.floor(sayi/2);i++){
    if(sayi%i==0){
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayi+"asaldır");
}
else{
    alert(sayi+"asal değildir");
}*/

//Faktoriyel Hesaplama
let sayi1=Number(prompt("Faktoriyeli hesaplanacak sayiyi giriniz"));
let fact=1;

for(let m=1;m<=sayi1;m++){
    fact=fact*m;
}
alert(sayi1+ " faktoriyel degeri " +fact);

//Armstrong sayi her rakamının küpü kendisini veriyorsa
let sayi2=Number(prompt("Sayiyi giriniz"));
let b=sayi2;
let sum=0;
//?sayi.lenght : string ifadenin kaç karakterden oluştuğunu bulur.
while(sayi2>0){
    let bas=sayi2%10;
    let a=bas**3;
    sum=sum+a;
    sayi2=Math.floor(sayi2/10);
}
if(sum==b){
    alert("Armstrong sayi");
}
else{
    alert("Armstrong sayi değildir");
}
//2.yol
/*let sayi = prompt("Sayı giriniz"); //?sayiyi string olarak aldık çünkü sayi.lenght özelliğini kullanmak istiyorum 
let toplam =0;
for(let i=0 ; i<sayi.length; i++){ //?(string verinin karakter sayısını bulan metot-sayının uzunluğu kadar dön)
   let rakam = sayi.charAt(i);//?sayi.charAt:verilen index numarasının karakterini dönüyor 1(0.index)5(1.index)3(3.index)
   toplam+=rakam*rakam*rakam;
}

if(sayi==toplam){
    alert("Armstrong sayısıdır :)");
}else{
    alert("Armstrong sayısı değildir");
}*/