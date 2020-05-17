const { items, categories } = require("./data.js");

function populateCategory(item) {
  const categoryId = item.category;
  const category = categories.find((category) => category.id === categoryId);
  item.category = category;
  return { ...item };
}
const populatedItems = items.map(populateCategory);

module.exports = resolvers = {
  Query: {
    items: () => populatedItems,
    categories: () => categories,
  },
};
