export interface ItemProp {
  label: string;
  value: string;
}

export interface Item {
  itemname: string;
  category: string;
  image: string;
  itemprops: ItemProp[];
}
