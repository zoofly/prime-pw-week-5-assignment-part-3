console.log('***** Music Collection *****')
var collection= [];

console.log(collection);

function addToCollection(title, artist, year){
  let album={
    title: title,
    artist: artist,
    year: year,
  };
  album.title=title;
  album.artist=artist;
  album.year=year;
  collection.push(album);
  //collection.push({title,artist,year}); or collection.push({album})? Is there a way to simplify "let album=..."?
  return album;
} //end addCollection


console.log(addToCollection('Sweetener','Ariana Grande',2018));
console.log(addToCollection('WELCOME HOME','Aries',2019));
console.log(addToCollection('THE REAPER','Keshi',2018));
console.log(addToCollection('Skeletons','Keshi',2019));
console.log(addToCollection('Zephyr','NIKI',2018));
console.log(addToCollection('Some boring love stories pt 5','Powfu',2020));
console.log(collection);//testing addToCollection


function showCollection(collection){
    console.log(`There are ${collection.length} albums in this collection`);
    console.log('Here are my albums:');
    for(let i=0; i<collection.length;i++){
      console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].year}.`);
    }
    return collection;
}  //end showCollection

 console.log(showCollection(collection)) //testing showCollection


function findByArtist(artist){
 let artistArray= []
 for(let i=0; i<collection.length;i++){
   if(artist===collection[i].artist){
     artistArray.push(artist);
   }
 }
  return artistArray;
}//end findByArtist

//testing findByArtist
console.log(findByArtist('Ariana Grande'));
console.log(findByArtist('Girls Generation'));
console.log(findByArtist('Keshi'));
console.log(findByArtist('Powfu'));
console.log(findByArtist('f(x)'));
console.log(findByArtist('Lady Gaga'));
