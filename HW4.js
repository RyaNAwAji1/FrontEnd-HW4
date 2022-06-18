const arri= [{ name:'Ryan',
 height:166,
 gender:'Male',
 mass:eyeColor
},
{
    name:'Bob',
    height:195,
    gender:'Female',
}
]



// Get Names and Name and Height >>> 
const names=arri.map(function(array){
    return array.names+"  "+array.names;
  })
  console.log(names);
  
  
  const height=arri.map(function(array){
    return array.height;
  })
  console.log(height);

  const name=arri.map(function(array){
    return array.name;
  })
  console.log(name);


//   reduce
  let sum = arri.reduce(() => a + item.mass,0);
  console.log(sum);


//   Sort Female and Male >>>
function filtermass(a) {

    return a.mass>100;
  }
  console.log(arri.filter());
  
  const fletri=arri.filter(function(arr){
    return arr.gender=="female";
  })
  console.log(fletri);

  const maily=arri.filter(function(arr){
    return arr.gender=="Male";
  })
  console.log(maily);


//   Every Person ColorEye >>>
  let eyeColor = person.every(function (person) {
    return person.eyeColor === "Blue";
  });
  console.log(eyeColor);
  
  console.log("--Q5.B Is every character male?--");
  
  let everyPersonEye = person.every(function (person) {
    return person.gender === "Male";
  });
  console.log(everyPersonEye);
  

// Some Person For Mass >>>
  let someMasslessThan = person.some(function (person) {
    return person.mass > 50;
  });
  console.log(someMasslessThan);






