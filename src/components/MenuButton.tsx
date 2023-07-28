import { ComponentProps} from "react";

export interface MenuButtonProps extends ComponentProps<"button"> {
    url: string;
    title: string;
    description: string;
}

export function MenuButton(props: MenuButtonProps) {
	return (
		<>
            <button className="flex items-center  gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600">
				<img
					src={props.url}
					alt="Text"
					className="w-[13%] rounded bg-white"
				/>
				<div className="flex flex-col text-left">
					<span className="text-sm">{props.title}</span>
					<span className="text-xs">{props.description}.</span>
				</div>
			</button>
		</>
	);
}
