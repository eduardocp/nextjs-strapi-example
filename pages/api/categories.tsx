import categories from '../../data/categories.json';

export default async (req, res) => {
  await sleep(2000);

  categories.forEach((item) => {
    delete item.products;
  });

  res.statusCode = 200;
  res.json(categories);
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
