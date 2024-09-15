import { runCreateElement } from "./runCreateElement";
import { runFindFormInElement } from "./runFindFormInElement";

export function runCreateChatElement(
	onSubmit: (message: string) => void,
): Element {
	const textHeight = "60px";

	const chat = runCreateElement(`
		<div style="position: fixed; top: 0; right: 0; bottom: 0; left: 0;">
			<div style="margin: auto; display: flex; flex-direction: column; align-items: stretch; width: 600px; max-width: calc(100% - 2rem); height: 100%;">
				<div style="height: calc(100% - ${textHeight});">
					<div data-key="chat-message-list" style="height: 100%; overflow-y: scroll;"></div>
				</div>

				<div style="display: flex; align-items: center; height: ${textHeight};">
					<form>
						<div>
							<textarea name="message"></textarea>
						</div>

						<div>
							<button>Send</button>
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
