export interface CartItemProps {
  title: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onDelete?: () => void;
}
