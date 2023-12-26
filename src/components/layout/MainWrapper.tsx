import React, { Children, ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const MainWrapper = ({ children }: Props) => {
  return (
    <main className="bg-[#ffd6eb] m-[10px]">
      <div className="flex justify-center mx-4 my-8 bg-white py-[60px]">
        {children}
      </div>
    </main>
  );
};

export default MainWrapper;
