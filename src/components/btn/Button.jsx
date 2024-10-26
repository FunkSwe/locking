import { cva } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

export const buttonVariants = cva(
  'px-8 py-3 rounded-md font-heading font-bold transition text-center w-64',
  {
    variants: {
      variant: {
        primary:
          'bg-[#165e92] hover:bg-indigo-700 text-neutral-100 w-full md:max-w-1/2',
        secondary:
          'bg-[#ef6a17] hover:bg-orange-600 text-neutral-100 w-full md:max-w-1/2',
        outline:
          'bg-none shadow-[inset_0_0_0_2px_#ef6a17] text-neutral-900 hover:shadow-[inset_0_0_0_2px_#f1f0ef] hover:bg-[#ef6a17] text-[#f1f0ef] w-full md:max-w-1/2',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

const Button = ({ children, variant, className, ...props }) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
