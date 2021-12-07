export interface Wishlist {
    id: string;
    itemArray: ItemList[];
}

export interface ItemList {
    itemName: string;
    url: string;
    origin: string;
}
