import type { NavigatorScreenParams } from '@react-navigation/native';

export type ProductsStackParamList = {
  ProductsScreen: undefined; // screen
  ProductDetailsScreen: {
    productId: number;
  };
};

export type RootStackParamList = {
  ProductsScreen: undefined;
  ProductDetailsScreen: { productId: number };
};

export type CartStackParamList = {
  CartScreen: undefined; // screen
  CartDetailsScreen: {
    OrderId: number;
  };
};

export type MainTabParamList = {
  HomeScreen: undefined; // screen
  ProductsStack: NavigatorScreenParams<ProductsStackParamList>; // stack
  CartStack: NavigatorScreenParams<CartStackParamList>; // stack
  ProfileScreen: undefined; // screen
};

export type RootDrawerParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>; // tabs
  ContactsScreen: undefined; // screen
  AboutUsScreen: undefined; // screen
};
