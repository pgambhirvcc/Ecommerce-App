export type Product = {
    id: string;
    category: string;
    title: string;
    price: number;
    image: string;
    description: string;
    rating: Rating;
}

type Rating = {
    count: number;
    rate: number;
}

export type ProductInfo = {
    productstList: Product[];
    categories: string[];
    selectedCategories: string[];
    searchedQuery: string;
}