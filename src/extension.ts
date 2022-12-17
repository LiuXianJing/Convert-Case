import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  	let toLowerCase = vscode.commands.registerCommand('convert-case.toLowerCase', () => {
		handleConvertCase('toLowerCase');
	});
  	let toUpperCase = vscode.commands.registerCommand('convert-case.toUpperCase', () => {
		handleConvertCase('toUpperCase');
	});
  	context.subscriptions.push(toLowerCase);
  	context.subscriptions.push(toUpperCase);
}
 
/**
 * 大小写转换
 * @param command 
 */
function handleConvertCase(command: string) {
	const activeTextEditor = vscode.window.activeTextEditor;
	if (activeTextEditor) {
		const document = activeTextEditor.document;
		const selection = activeTextEditor.selection;
		const selectedText = document.getText(selection);
		const newText = command === 'toLowerCase' ? selectedText.toLowerCase() : selectedText.toUpperCase();
		activeTextEditor.edit((editBuilder) => {
			editBuilder.replace(selection, newText);
		});
	}
}

export function deactivate() {}
