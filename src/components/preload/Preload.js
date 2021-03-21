import React from "react";

const Preload = ({ children, list }) => {
  const render =
    list.length > 0 ? (
      children
    ) : (
      <div className="preload">
        <div className="preload__headings">
          <h1 className="preload__title">You have no Notes yet</h1>
          <h2 className="preload__subtitle">Add the First one</h2>
        </div>
        <div className="preload-visuals">
          <div className="preload-visuals__items first"></div>
          <div className="preload-visuals__items second"></div>
          <div className="preload-visuals__items third"></div>
        </div>
      </div>
    );
  return render;
};
export default Preload;
