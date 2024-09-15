import { runCreateElement } from "./runCreateElement";

export function runCreateChatElement(): Element {
	const textHeight = "60px";

	return runCreateElement(`
		<div style="position: fixed; top: 0; right: 0; bottom: 0; left: 0;">
			<div style="margin: auto; display: flex; flex-direction: column; align-items: stretch; width: 600px; max-width: calc(100% - 2rem); height: 100%;">
				<div style="height: calc(100% - ${textHeight});">
					<div style="height: 100%; overflow-y: scroll;">
						Chat list
					</div>
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
}
