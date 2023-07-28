import {
	useEditor,
	EditorContent,
	BubbleMenu,
	FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
import { lowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import js from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/atom-one-dark.css";
import {
	RxFontBold,
	RxFontItalic,
	RxStrikethrough,
	RxCode,
	RxUnderline,
	RxChevronDown,
	RxChatBubble,
} from "react-icons/rx";
import { BubbleButton } from "./BubbleButton";
import { MenuButton } from "./MenuButton";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("js", js);

export function Editor() {
	const editor = useEditor({
		extensions: [
			StarterKit,
			CodeBlockLowlight.configure({
				lowlight,
			}),
		],
		content: initialContent,
		editorProps: {
			attributes: {
				class: "outline-none",
			},
		},
	});

	return (
		<>
			<EditorContent
				editor={editor}
				className="max-w-[700px] mx-auto pt-16 prose prose-invert"
			/>
			{editor && (
				<BubbleMenu
					editor={editor}
					className=" bg-zinc-700  border-zinc-600 text-slate-200 shadow-black/20 shadow-xl overflow-hidden rounded-lg flex  divide-x divide-x-zinc-600"
				>
					<BubbleButton>
						Text
						<RxChevronDown />
					</BubbleButton>
					<BubbleButton>
						Comment
						<RxChatBubble />
					</BubbleButton>
					<div className="flex items-center">
						<BubbleButton
							onClick={() =>
								editor.chain().focus().toggleBold().run()
							}
							data-active={editor.isActive("bold")}
						>
							<RxFontBold className="w-4 h-4" />
						</BubbleButton>
						<BubbleButton
							onClick={() =>
								editor.chain().focus().toggleItalic().run()
							}
							data-active={editor.isActive("italic")}
						>
							<RxFontItalic className="w-4 h-4" />
						</BubbleButton>
						<BubbleButton>
							<RxUnderline className="w-4 h-4" />
						</BubbleButton>
						<BubbleButton
							onClick={() =>
								editor.chain().focus().toggleCode().run()
							}
							data-active={editor.isActive("code")}
						>
							<RxCode className="w-4 h-4" />
						</BubbleButton>
						<BubbleButton
							onClick={() =>
								editor.chain().focus().toggleStrike().run()
							}
							data-active={editor.isActive("strike")}
						>
							<RxStrikethrough className="w-4 h-4" />
						</BubbleButton>
					</div>
				</BubbleMenu>
			)}

			{editor && (
				<FloatingMenu
					className=" py-2 px-1 bg-zinc-700  border-zinc-600 text-slate-200 shadow-black/20 shadow-xl overflow-hidden rounded-lg flex flex-col"
					editor={editor}
					shouldShow={({ state }) => {
						const { $from } = state.selection;

						const currentLineText = $from.nodeBefore?.textContent;

						return currentLineText === "/";
					}}
				>
					<MenuButton
						url="https://www.notion.so/images/blocks/text/en-US.png"
						title="Text"
						description="Just start wiriting plain text"
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 1 })
								.run()
						}
					/>

					<MenuButton
						url="https://www.notion.so/images/blocks/header.57a7576a.png"
						title="Heading 1"
						description="Big section Heading"
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 1 })
								.run()
						}
					/>
					<MenuButton
						url="https://www.notion.so/images/blocks/subheader.9aab4769.png"
						title="Heading 2"
						description="Medium section Heading"
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 2 })
								.run()
						}
					/>
					<MenuButton
						url="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
						title="Heading 3"
						description="Small section Heading"
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 3 })
								.run()
						}
					/>
					<MenuButton
						url="https://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
						title="Bulleted List"
						description="Create a simple bullet list"
						onClick={() =>
							editor.chain().focus().toggleBulletList().run()
						}
					/>
					<MenuButton
						url="https://www.notion.so/images/blocks/numbered-list.0406affe.png"
						title="Numbered List"
						description="Create a list with numbering"
						onClick={() =>
							editor.chain().focus().toggleOrderedList().run()
						}
					/>
				</FloatingMenu>
			)}
		</>
	);
}
