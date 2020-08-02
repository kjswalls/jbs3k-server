const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { items, categories } = require("./data.js");

async function getCurrentNetWorth() {
  try {
    const response = await fetch(
      "https://app.zenscrape.com/api/v1/get?&url=https://www.forbes.com/profile/jeff-bezos/#529a2fef1b23&location=na",
      {
        headers: {
          apikey: process.env.ZENSCRAPE_API_KEY,
        },
      }
    );
    if (response.ok) {
      const html = await response.text();
      const dom = new JSDOM(html);
      const jsonLD = JSON.parse(
        dom.window.document.querySelector('script[type="application/ld+json"]')
          .innerHTML
      );
      const currentNetWorth = jsonLD.netWorth.value;
      return currentNetWorth;
    }
  } catch (error) {
    console.error(error);
    return 181_000_000_000;
  }
}

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
    netWorth: async () => await getCurrentNetWorth(),
  },
};
