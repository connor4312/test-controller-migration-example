import * as vscode from 'vscode';
import { loadFakeTests, runFakeTests } from './fakeTests';

export async function activate(context: vscode.ExtensionContext) {
	const controller = vscode.tests.createTestController('example-test-adapter', 'Example Test Controller');
	context.subscriptions.push(controller);

	// Custom handler for loading tests. The "test" argument here is undefined,
	// but if we supported lazy-loading child test then this could be called with
	// the test whose children VS Code wanted to load.
	controller.resolveHandler = test => {
		controller.items.replace(loadFakeTests(controller));
	};

	// We'll create the "run" type profile here, and give it the function to call.
	// You can also create debug and coverage profile types. The last `true` argument
	// indicates that this should by the default "run" profile, in case there were
	// multiple run profiles.
	controller.createRunProfile('Run', vscode.TestRunProfileKind.Run, request => runFakeTests(controller, request), true);

}
