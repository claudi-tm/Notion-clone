import { ComponentProps, ReactNode } from "react";

export interface NavItemsProps extends ComponentProps<"button"> {
	children: ReactNode;
	url?: string;
	text: string;
}

export function NavItems(props: NavItemsProps) {
	return (
		<>
			<button className="flex items-center px-2 rounded-md w-full gap-2 text-sm hover:bg-gray-700 active:bg-gray-800">
				{props.children}
				{props.text}
			</button>
		</>
	);
}
