export interface Field {
  type: string;
  name: string;
  value: string | null;
  unite?: string;
  label?: string;
}

export interface Route {
  name: string;
  path: string;
  component: any;
  title: string;
  fields: Field[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  formula: string;
  routes: Route[];
}
