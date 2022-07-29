import { wait } from "@helpers/wait";

export async function getProducts() {
  await wait(3000);
  return [
    {
      id: 1,
      name: "Hexagon Head Bolt",
      category: [12],
      code: "420ae69",
      price: 99.99,
      modifiers: [
        {
          name: "Quantity",
          type: {
            name: "Number Increment Decrement",
          },
        },
        {
          name: "Size",
          type: {
            name: "Selection",
            options: [
              { name: "UNSET", additionalCost: 0 },
              { name: "66.0 mm", additionalCost: 0 },
              { name: "70.0 mm", additionalCost: 0 },
              { name: "100.0 mm", additionalCost: 0 },
            ],
          },
        },
        {
          name: "Material",
          type: {
            name: "Selection Images",
            options: [
              { name: "Steel", additionalCost: 0 },
              { name: "Iron", additionalCost: 0 },
              { name: "bronze", additionalCost: 0 },
              { name: "Aluminum", additionalCost: 0 },
              { name: "Brass", additionalCost: 0 },
            ],
          },
        },
      ],
    },
  ];
}
