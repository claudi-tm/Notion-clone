import { ComponentProps, ReactNode } from "react";

export interface BubbleButtonProps extends ComponentProps<"button"> {
	children: ReactNode;
}

export function BubbleButton(props: BubbleButtonProps) {
	return (
		<button
			className=" text-sm  flex items-center gap-1.5 font-medium  leading-none p-2 hover:text-zinc-50 hover:bg-zinc-600 data-[active=true]:text-blue-500"
			{...props}
		/>
	);
}
