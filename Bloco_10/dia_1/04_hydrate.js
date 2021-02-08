const hydrate = (string) => {
  let drinks = string.match(/[0-9]/g);

  const result = drinks.reduce((acc, curr) => {
    return Number(acc) + Number(curr)
  }, 0);

  return (result === 1) ? `${result} copo de água` : `${result} copos de água`;
}

module.exports = hydrate;
