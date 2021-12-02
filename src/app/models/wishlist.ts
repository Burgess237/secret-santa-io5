export interface Wishlist {
    id: number;
    itemArray: ItemList[];
}

export interface ItemList {
    itemName: string;
    url: string;
    origin: string;
}
