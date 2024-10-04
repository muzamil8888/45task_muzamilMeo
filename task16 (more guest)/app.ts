// let Name = "AFFAN";
// for ( let i=0 ; i < 1000 ; i++ ){
//     console.log(Name);}

// let Name = "affan"
// let o = 0;
// while(o<=10){
//     console.log(o);
//     o++
// }
let Guestlist : string[]= ["affan","ali","haider"];
for(let i = 0 ; i< Guestlist.length ; i++){
    console.log(`Dear ${Guestlist[i]} : \n you are invited to dinner! \n`);
}
console.log(`Unfortunatly ${Guestlist[1]} , can't come to party`);
Guestlist [1] = 'imran';
console.log('\n New invitation list');
for(let j = 0 ; j< Guestlist.length ; j++){
    console.log(`Dear ${Guestlist[j]} : \n you are invited to dinner! \n`);
}
console.log('Good news!we planned a bigger dinner party,that means we can invite more guest\n')
Guestlist.unshift('Alam');
Guestlist.splice( 2, 0 ,'zakir');
Guestlist.push('adil');
for(let i = 0 ; i< Guestlist.length ; i++){
    console.log(`Dear ${Guestlist[i]} : \n you are invited to dinner! \n`);
};