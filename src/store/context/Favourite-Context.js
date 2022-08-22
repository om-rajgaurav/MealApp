import React, {createContext, useState} from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: id => {},
  removeFavourite: id => {},
});

function FavouriteContextProvider({children}) {
  const [Favoutite, setFavoutite] = useState([]);

  function addFavourite(id) {
    setFavoutite(currentItem => [...currentItem, id]);
  }
  function removeFavourite(id) {
    setFavoutite(currentItem =>
      currentItem.filter(mealitem => mealitem !== id),
    );
  }
  const Values = {
    ids: Favoutite,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={Values}>
      {children}
    </FavouritesContext.Provider>
  );
}
export default FavouriteContextProvider;
