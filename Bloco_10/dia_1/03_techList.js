const techList = (array, name) => {
  if (array.length === 0) return 'Vazio!';

  const orderedList = array
    .sort()
    .map((item) =>({
      'tech': item, 'name': name
    }));
  return orderedList;
};

module.exports = techList;