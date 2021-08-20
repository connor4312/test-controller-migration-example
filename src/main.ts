import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
	const controller = vscode.tests.createTestController('example-test-adapter', 'Example Test Controller');
	context.subscriptions.push(controller);
}
