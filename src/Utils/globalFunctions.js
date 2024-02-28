const getSingleCharacter = text => {
  let letter = text?.charAt(0).toUpperCase();
  return letter;
};

const getIdsFromObj = (arry, key) => {
  return arry.map(res => res[key]);
};

export {getSingleCharacter, getIdsFromObj};
