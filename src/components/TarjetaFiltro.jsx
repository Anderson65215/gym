import React, { useState } from "react";
import Checkbox from "./CheckBox";

export function TarjetaFiltro() {
  const [selectedPriceCategory, setSelectedPriceCategory] = useState(null);
  const [selectedFlavorCategory, setSelectedFlavorCategory] = useState(null);

  const priceCategories = [
    { id: "Mayor a $100.000", category: "Precio100k" },
    { id: "$100.000 - $200.000", category: "Precio200k" },
    { id: "Mayor a $200.000", category: "Precio200k+" },
  ];

  const flavorCategories = [
    { id: "Vainilla", category: "Vainilla" },
    { id: "Coco", category: "Coco" },
    { id: "Chocolate", category: "Chocolate" },
    { id: "Fresa", category: "Fresa" },
  ];

  return (
    <div className="bg-purple-400 p-4 rounded-xl ">
    <h1 className="text-xl">FILTRO</h1>
    <h2 className="text-lg">Por precio</h2>
    <div className="p-2">
      {priceCategories.map((category) => (
        <p className="p-2" key={category.id}>
          <Checkbox
            id={category.id}
            category={category.category}
            selectedCategory={selectedPriceCategory}
            setSelectedCategory={setSelectedPriceCategory}
          />
        </p>
      ))}
    </div>
    <h2 className="text-lg">Por sabor</h2>
    <div className="p-2">
      {flavorCategories.map((category) => (
        <p className="p-2" key={category.id}>
          <Checkbox
            id={category.id}
            category={category.category}
            selectedCategory={selectedFlavorCategory}
            setSelectedCategory={setSelectedFlavorCategory}
          />
        </p>
      ))}
    </div>
  </div>
  
  );
}
