//Tür Dönüşümleri
//? strings,numbers,booleans,undefined,null
let a=5;
let b="10";

let c=Number(b); //b değerini number türüne çevirdi

let d=parseInt("12");//string to number +parseFloat()
console.log(typeof d);

//Number to int
let x=String(55);
let y=(54).toString; //int to string

let sonuc=String(true);

//sayı olmayan bir şeyi sayıya çevirmek istersem NaN (not a number) uyarısı alırım
//debugger;
let e=10;
let f=15;
let g=e+f;
let h=e+f+g;

let sum=e+f+g+h;
console.log("Sum"+sum);

//LOOPS (for-while-dowhile-foreach(dizilerde kullanılır))
let i;
for(i=1;i<=10;i++){
    console.log(i);
    
}
let j,toplam=0;
for(j=50;j>=1;j--){
    toplam=toplam+j;
}
console.log(toplam);

let k=1;
while(k<=10){
    console.log(k);
    if(k==8){
        break;
    }
    k++;
}
let sayac=1;
while(true){//sonsuz döngü
    console.log(sayac);
    if(sayac==7){
        break;
    }
    if(i==8){
        continue;
    }
    sayac++;
}

let l=1;
do{
    console.log(l);
    l++;
}while(l<=10);

//1-20 arası tek sayilarin toplami
let sum1=0,m=1;
do{
    if(m%2==1){
        sum1=sum1+m;
    }
    m++;
}while(m<=20);
console.log("Sum= "+sum1);