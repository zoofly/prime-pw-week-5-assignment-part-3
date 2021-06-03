console.log('***** Music Collection *****')
var collection= [];

function addToCollection(title, artist, year){
  let album={
    title: title,
    artist: artist,
    year: year,
  };
  collection.push({title,artist,year});
  return album;
} //end addCollection

console.log(addToCollection('Sweetener','Ariana Grande',2018));
console.log(addToCollection('WELCOME HOME','Aries',2019));
console.log(addToCollection('THE REAPER','Keshi',2018));
console.log(addToCollection('Skeletons','Keshi',2019));
console.log(addToCollection('Zephyr','NIKI',2018));
console.log(addToCollection('Some boring love stories pt 5','Powfu',2020));

console.log(collection);

function showCollection(album){

  console.log(collection.length);
}
