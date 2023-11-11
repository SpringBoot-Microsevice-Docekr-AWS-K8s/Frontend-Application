import {Restaurant} from "./Restaurant";
import {FoodItem} from "./FoodItem";

export interface OrderDTO{

  foodItemList?: FoodItem[];
  userId?: number;
  restaurant?: Restaurant;
}
