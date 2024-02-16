import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="h-[70px] bg-[#D0D1E5] flex justify-center text-center nova mb-0 p-6">
      <p>&copy; {currentYear} Sanmoku dojo. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
