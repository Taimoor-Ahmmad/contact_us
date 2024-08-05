import React from 'react';

const Button = ({ content }) => {
  return (
    <div className="w-[110px] h-[45px] bg-amber-500 rounded-[252px] flex items-center justify-center text-white">
      {content}
    </div>
  );
};

export default Button;
