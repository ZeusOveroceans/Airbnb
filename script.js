function filterByCity(targetCity, listingCityArray) { 

      let searchIndicies = [];
  
      for (let i = 0; i < listingCityArray.length; i++) {
          
        if (listingCityArray[i].toLowerCase == targetCity.toLowerCase) { 
          
          searchIndicies.push(i);
          }
      }
      return searchIndicies; 
  }

    
  



function filterByPrice(minPrice, maxPrice, listingPriceArray) {

  let searchIndicies = [];

  for (let i = 0; i < listingPriceArray.length; i++) {
    
    if (listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
      
      searchIndicies.push(i);
    } 
  } 
  return searchIndicies;
      }

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {

  let searchIndicies = [];

  for (let i = 0; i < listingTypeArray.length; i++) {

    if (listingTypeArray[i] == targetTypes) {

      searchIndicies.push(i);
    } 
  } 
  return searchIndicies;
      }
