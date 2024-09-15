import * as core from "express-serve-static-core";

export function runReturnHelloWorldHtmlOnHomeRoute(app: core.Express): void {
	app.get("/", (req, res) => {
		res.send("<h1>Hello world</h1>");
	});
}
