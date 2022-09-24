import React from "react";

function CategoriesHeader({ header }) {
  return (
    <div className="flex justify-between items-center flex-wrap mt-16 mb-4">
      <h3 className="text-[#00349A] text-2xl">{header}</h3>
      <a href="#" className="text-[#00349A]">
        View all
      </a>
    </div>
  );
}

export default CategoriesHeader;
