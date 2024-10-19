import { cva } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

export const buttonVariants = cva(
  'px-8 py-3 rounded-xl font-heading font-bold transition text-center w-64',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-600 hover:bg-indigo-700 text-neutral-100',
        secondary: 'bg-orange-500 hover:bg-orange-600 text-neutral-100',
        outline:
          'bg-none shadow-[inset_0_0_0_2px_#737fee] text-neutral-900 hover:shadow-[inset_0_0_0_2px_#737fee] ',
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
