import { Editor } from "./components/Editor";
import { NavItems } from "./components/NavItems";
import "./index.css";
import {
	RxCaretSort,
	RxMagnifyingGlass,
	RxNotionLogo,
	RxPlusCircled,
	RxTimer,
} from "react-icons/rx";

export function App() {
	return (
		<>
			<div className="min-h-screen p-8 text-zinc-900  bg-gradient-to-r from-gray-700 via-gray-900 to-black">
				<div className="bg-zinc-800 w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
					<aside className="bg-zinc-900 border-r border-r-zinc-100 p-4 ">
						<div className="flex gap-2 group">
							<button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400"></button>
							<button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400 hove"></button>
							<button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400"></button>
						</div>
						<div className="text-zinc-500 py-4 flex flex-col gap-1">
							<button className="flex items-center px-2 py-1 text-slate-100 font-light rounded-md gap-2  hover:bg-gray-700 active:bg-gray-800">
								<RxNotionLogo />
								<span className="flex items-center">
									Claudio's Notion
									<RxCaretSort />
								</span>
							</button>

							<NavItems text="Search">
								<RxMagnifyingGlass />
							</NavItems>
							<NavItems text="Updates">
								<RxTimer />
							</NavItems>
							<NavItems text="Settings & members">
								<RxMagnifyingGlass />
							</NavItems>
							<NavItems text="New">
								<RxPlusCircled />
							</NavItems>
						</div>
					</aside>
					<main className="p-4">
						<Editor />
					</main>
				</div>
				<h1>Hello</h1>
			</div>
		</>
	);
}
