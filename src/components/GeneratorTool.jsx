import React from "react";
import Header from "./Header";

function GeneratorTool() {
  return (
    <>
      <Header />
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid md:grid-cols-5 gap-10">
          <div class="md:col-span-2">Hello World</div>
          <div class="md:col-span-3">This is Another Section</div>
        </div>
      </div>
    </>
  );
}

export default GeneratorTool;
