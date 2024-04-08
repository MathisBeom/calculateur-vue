import Surface from "./pages/surface/surface.vue";
import { Product } from "./types";

const products: Product[] = [
  {
    id: 1,
    name: "SIKA Stop traitement toiture",
    price: 100,
    formula: "longueur * largeur * nbSurface + surface",
    routes: [
      // {
      //   name: "step1",
      //   path: "/surface/step1",
      //   component: Surface,
      //   title: "Ma surface à nettoyer est...",
      //   fields: [
      //     {
      //       type: "button",
      //       name: "lisse",
      //       value: "lisse",
      //     },
      //     {
      //       type: "button",
      //       name: "ondulée",
      //       value: "Tuiles",
      //     },
      //   ],
      // },
      {
        name: "step1",
        path: "/surface/step1",
        component: Surface,
        title: "Quelle est la taille de ma surface à nettoyer ?",
        fields: [
          {
            type: "number",
            name: "surface",
            value: "1",
            unite: "m²",
          },
        ],
      },
      {
        name: "step3",
        path: "/surface/step3",
        component: Surface,
        title: "Je saisis les mesures (même approximatives) :",
        fields: [
          {
            type: "number",
            label: "Longueur",
            name: "longueur",
            value: "10",
            unite: "m",
          },
          {
            type: "number",
            label: "Largeur",
            name: "largeur",
            value: "10",
            unite: "m",
          },
        ],
      },
      {
        name: "step4",
        path: "/surface/step4",
        component: Surface,
        title: "Combien de surface(s) de ce type dois-je nettoyer ?",
        fields: [
          {
            type: "number",
            name: "nbSurface",
            value: "1",
            unite: "m",
          },
        ],
      },
      {
        name: "result",
        path: "/surface/result",
        component: Surface,
        title: "Ma surface à nettoyer est environ de :",
        fields: [
          {
            type: "number",
            name: "result",
            value: null,
            unite: "m2",
          },
        ],
      },
    ],
  },
];

export { products };
