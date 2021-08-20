import * as vscode from 'vscode';
import { loadFakeTests } from './fakeTests';

export async function activate(context: vscode.ExtensionContext) {
	const controller = vscode.tests.createTestController('example-test-adapter', 'Example Test Controller');
	context.subscriptions.push(controller);

	// Custom handler for loading tests. The "test" argument here is undefined,
	// but if we supported lazy-loading child test then this could be called with
	// the test whose children VS Code wanted to load.
	controller.resolveHandler = test => {
		controller.items.replace(loadFakeTests(controller));
	};

}
