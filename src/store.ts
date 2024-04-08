import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import type { Product } from "./types";
import { useRouter } from "vue-router";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { products } from "./data";

export const useProductStore = defineStore("product", () => {
  const router = useRouter();
  const breakpoint = useBreakpoints(breakpointsTailwind); // Reactive viewport breakpoints (xs, sm, md, lg, xl)

  const currentProduct = ref<Product>(products[0]);
  const routerState = ref<number>(0);

  const productFields = computed(() => {
    return currentProduct.value.routes[routerState.value];
  });

  /**
   * Map the fields of the current product to a single route for desktop
   */
  const initProductFields = () => {
    if (breakpoint.isGreater("sm")) {
      for (const route of currentProduct.value.routes) {
        route.fields.forEach((field) => {
          currentProduct.value.routes[0].fields.push(field);
        });
      }
      // Remove all routes except the first one
      currentProduct.value.routes.splice(1);
    }
    initProductRoutes();
  };

  /**
   * Add routes to the router
   */
  const initProductRoutes = () => {
    for (const product of products) {
      for (const route of product.routes) {
        router.addRoute({
          name: route.name,
          path: route.path,
          component: route.component,
        });
      }
    }
  };

  const updateRouterState = (methode: "+" | "-") => {
    if (
      methode === "+" &&
      routerState.value < currentProduct.value.routes.length - 1
    ) {
      routerState.value += 1;
      router.push(currentProduct.value.routes[routerState.value].path);
    } else if (methode === "-" && routerState.value > 0) {
      routerState.value -= 1;
      router.push(currentProduct.value.routes[routerState.value].path);
    }
  };

  const calculateFormula = () => {
    // Préparation des variables pour l'évaluation
    let variables: Record<string, number> = {};
    currentProduct.value.routes.forEach((route) => {
      route.fields.forEach((field) => {
        // Assurez-vous de convertir la valeur en nombre, car elle est stockée en tant que chaîne
        variables[field.name] = Number(field.value);
      });
    });

    // Construction de la chaîne de variables pour l'éval
    let varsStr = Object.keys(variables)
      .map((key) => `var ${key} = ${variables[key]};`)
      .join("\n");

    // Évaluation de la formule
    try {
      let result = eval(`${varsStr} ${currentProduct.value.formula}`);
      // replace "result" field with the calculated value
      currentProduct.value.routes.forEach((route) => {
        route.fields.forEach((field) => {
          if (field.name === "result") {
            field.value = result.toString();
          }
        });
      });
    } catch (error) {
      console.error("Erreur lors de l'évaluation de la formule:", error);
    }
  };

  watch(routerState, (newRoute) => {
    if (newRoute === currentProduct.value.routes.length - 1) {
      calculateFormula();
    }
  });

  return {
    currentProduct,
    productFields,
    products,
    initProductFields,
    updateRouterState,
  };
});
