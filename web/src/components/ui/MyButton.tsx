import { PropsWithChildren } from "react";

interface MyButtonProps extends PropsWithChildren {
  handle?: () => void;
}

const MyButton = ({ children, handle }: MyButtonProps) => {
  return (
    <button 
      onClick={handle} 
      className='bg-red-500 text-white p-2'
    >
      {children}
    </button>
  );
};

export default MyButton;