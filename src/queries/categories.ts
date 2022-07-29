import { wait } from "@helpers/wait";

export interface Category {
  id: number;
  isParent: boolean;
  name: string;
  children: number[] | null;
  parent: number | null;
  icon: string | null;
}

interface CategoryById {
  [key: number]: Category;
}

const MOCK_CATEGORIES: Array<Category> = [
  {
    id: 1,
    isParent: true,
    name: "Tools",
    children: [11, 12, 13],
    parent: null,
    icon: null,
  },
  {
    id: 2,
    isParent: true,
    name: "Adhesives",
    children: [21],
    parent: null,
    icon: null,
  },
  {
    id: 11,
    isParent: false,
    name: "Nails",
    children: null,
    parent: 1,
    icon: "Nail",
  },
  {
    id: 12,
    isParent: false,
    name: "Nuts & Bolts",
    children: null,
    parent: 1,
    icon: "Nut",
  },
  {
    id: 13,
    isParent: false,
    name: "Drills",
    children: null,
    parent: 1,
    icon: "Drill",
  },
  {
    id: 21,
    isParent: false,
    name: "Glue",
    children: null,
    parent: 2,
    icon: "Glue",
  },
];

const MOCK_CATEGORIES_BY_ID: CategoryById = MOCK_CATEGORIES.reduce((out: CategoryById, category) => ((out[category.id] = category), out), {});

export async function getCategories() {
  await wait(3000);
  return MOCK_CATEGORIES;
}

export async function getCategory(id: number) {
  await wait(3000);
  return MOCK_CATEGORIES_BY_ID[id];
}

export const CATEGORIES_QUERY = ["categories", getCategories];

export const CATEGORY_QUERY = (id: number) => ["category", () => getCategory(id)];
