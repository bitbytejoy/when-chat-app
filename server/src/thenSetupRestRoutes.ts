import { Data } from "./Data";
import { runReturnHelloWorldHtmlOnHomeRoute } from "./runReturnHelloWorldHtmlOnHomeRoute";
import { runStartListeningOnPort3000 } from "./runStartListeningOnPort3000";

export function thenSetupRestRoutes(data: Data) {
	runReturnHelloWorldHtmlOnHomeRoute(data.app);
	runStartListeningOnPort3000(data.server);
}
