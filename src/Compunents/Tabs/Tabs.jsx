import React from "react";

const Tabs = () => {
  return (
    <div className="container mx-auto px-4 font-EBGaramond">
      <div role="tablist" className="tabs tabs-bordered justify-center">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 1"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          checked
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 3"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default Tabs;
