import { useContext, useState } from "react";
import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { Product } from "../../types";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: Product[];
  addProduct: (product: Product) => Promise<void>;
  removeProduct: (productId: number, product: Product) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart =
      typeof window !== "undefined" &&
      window.localStorage.getItem("@FastFood:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (product: Product) => {
    try {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("@FastFood:cart", JSON.stringify(updatedCart));
      toast.success(product.name + " added to cart");
    } catch {
      toast.error("Error adding product");
    }
  };

  const removeProduct = (productId: number, product: Product) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId
      );

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        localStorage.setItem("@FastFood:cart", JSON.stringify(updatedCart));
        toast.info(product.name + " removed from cart");
      } else {
        throw Error();
      }
    } catch {
      toast.error("Error");
    }
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
