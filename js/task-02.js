const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const containertEl = document.querySelector('#ingredients');

const makeIngredientsMarkup = items => {
  return items.map(item => {
    const listEl = document.createElement('li');
    listEl.textContent = `${item}`;
    listEl.classList.add('item');

    return listEl;
  });
};

const elements = makeIngredientsMarkup(ingredients);
containertEl.append(...elements);
