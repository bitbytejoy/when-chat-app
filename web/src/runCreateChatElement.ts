import { runCreateElement } from "./runCreateElement";
import { runFindFormInElement } from "./runFindFormInElement";

export function runCreateChatElement(
	onSubmit: (message: string) => void,
): Element {
	const textHeight = "85px";
	const separatorHeight = "1px";
	const gap = "1rem";

	const chat = runCreateElement(`
		<div style="position: fixed; top: 0; right: 0; bottom: 0; left: 0;">
			<div style="margin: auto; display: flex; flex-direction: column; align-items: stretch; gap: ${gap}; width: 600px; max-width: calc(100% - 2rem); height: 100vh;">
				<div style="box-sizing: border-box; height: calc(100% - ${textHeight} - ${separatorHeight} - 3 * ${gap});">
					<div class="border-separation" data-key="chat-message-list" style="height: 100%; overflow-y: scroll;"></div>
				</div>

				<div style="border-bottom: 1px solid darkgray;"></div>

				<div style="box-sizing: border-box; display: flex; align-items: stretch; height: ${textHeight};">
					<form style="width: 100%;">
						<div style="display: flex; flex-direction: column; gap: 1rem;">
							<div>
								<textarea name="message" style="box-sizing: border-box; display: block; width: 100%;"></textarea>
							</div>

							<div style="display: flex; justify-content: right;">
								<button>Send</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	`);

	const messageTextarea = runFindMessageTextareaInChatElement(chat);
	const form = runFindFormInChatElement(chat);

	form.onsubmit = (e) => {
		e.preventDefault();

		const message = messageTextarea.value;

		onSubmit(message);
	};

	return chat;
}

function runFindMessageTextareaInChatElement(
	chat: Element,
): HTMLTextAreaElement {
	const message = chat.querySelector('[name="message"]');

	if (message instanceof HTMLTextAreaElement) {
		return message;
	}

	throw new Error("No message <textarea> in chat element");
}

function runFindFormInChatElement(chat: Element): HTMLFormElement {
	return runFindFormInElement(chat);
}
