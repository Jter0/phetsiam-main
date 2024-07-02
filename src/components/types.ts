import { ReactElement } from "react";

type ProductImageType = {
  src: string;
};

type ProjectCardType = {
  image: string;
  title: string;
  content: string;
  link: string;
};

type CategoryType = {
  id: string;
  productsGroupId: string;
  name: string;
  description: string[];
};

type ProductType = {
  permalink: string;
  id: string;
  name: string;
  slug?: string;
  description: string;
  subDescription: string;
  categoryId: string;
  images: [ProductImageType];
  properties: string[];
  standards: string[];
  standardsIcons: string[];
  questions: {
    question: string;
    answer: string;
  }[];
  whyUsTitle: string;
  whyUsDescription: string[];
  contactLink: string;
  catalogLink: string;
  sizeValues: string[];
  projectCards: ProjectCardType[];
  content: {
    title: string;
    descreption: string;
  };
};

type ProductsGroupType = {
  id: string;
  title: string;
  img: string;
  color: string;
};

type ReduxStateType = {
  products: ProductImageType[];
  categories: CategoryType[];
};

export {
  type ProductType,
  type CategoryType,
  type ReduxStateType,
  type ProductsGroupType,
  type ProjectCardType,
};
