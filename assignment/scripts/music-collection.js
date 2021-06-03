console.log('***** Music Collection *****')
var collection = [];


function addToCollection(title, artist, year) {
  collection.push({
    title,
    artist,
    year
  });
  let album = {
    title: title,
    artist: artist,
    year: year,
  };
  return album;
} //end addCollection

//testing addToCollection
console.log(addToCollection('Sweetener', 'Ariana Grande', 2018));
console.log(addToCollection('WELCOME HOME', 'Aries', 2019));
console.log(addToCollection('THE REAPER', 'Keshi', 2018));
console.log(addToCollection('Skeletons', 'Keshi', 2019));
console.log(addToCollection('Zephyr', 'NIKI', 2018));
console.log(addToCollection('Some boring love stories pt 5', 'Powfu', 2020));
console.log(collection)



function showCollection(collection) {
  console.log(`There are ${collection.length} albums in this collection`);
  let album = {
    title: title,
    artist: artist,
    year: year,
  };
  for (let i = 0; i < collection.length; i++);
  console.log(`${album.title} by ${album.artist} published in ${album.year}.`);

  return collection;
}
//end showCollection

//testing showCollection
console.log('Here is a collection of my albums:', showCollection(collection))





function findByArtist(artist) {

  return artist;
} //end findByArtist



//testing findByArtist