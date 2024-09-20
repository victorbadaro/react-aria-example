import { forwardRef } from 'react';
import {
	Button as ReactAriaButton,
	type ButtonProps as ReactAriaButtonProps
} from 'react-aria-components';
import { type VariantProps, tv } from 'tailwind-variants';

const button = tv({
	base: 'py-2 px-5 border border-white/10 rounded-lg outline-0 text-sm transition',
	variants: {
		variant: {
			primary: 'bg-blue-600 hover:bg-blue-700 text-white',
			secondary: 'bg-zinc-600 hover:bg-zinc-500 text-zinc-100',
			destructive: 'bg-red-700 hover:bg-red-800 text-white'
		}
	},
	defaultVariants: {
		variant: 'primary'
	}
});

type ButtonProps = ReactAriaButtonProps &
	VariantProps<typeof button> & {
		className?: string;
	};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, ...rest }, ref) => {
		return (
			<ReactAriaButton
				{...rest}
				ref={ref}
				className={button({
					variant,
					className
				})}
			/>
		);
	}
);

Button.displayName = 'Button';
