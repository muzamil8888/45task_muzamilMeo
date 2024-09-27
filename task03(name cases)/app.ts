let personName: string = 'affan sheikh';
console.log(`name in uppercase ${personName.toUpperCase()}`);
console.log(`name in lowercase ${personName.toLowerCase()}`)

let step1 = personName.split( ' ');
let step2 = step1.map(word=> word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let step3 = step2.join(' ');
console.log(`name in Title case: ${step3}`);
// let Titlecase = personName.replace(/\b\w/g,c => c.toUpperCase());
// console.log(`name in Tittlecase ${Titlecase}`);