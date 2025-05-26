import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const provider = vscode.languages.registerCompletionItemProvider(
		['javascript', 'typescript', 'javascriptreact', 'typescriptreact', 'html', 'css'],
		{
			provideCompletionItems(document, position) {
				const line = document.lineAt(position.line).text;

				const regex = /rc(\d+(\.\d+)?)/g;
				let match;

				while ((match = regex.exec(line)) !== null) {
					const start = match.index;
					const end = start + match[0].length;

					const matchRange = new vscode.Range(
						position.line,
						start,
						position.line,
						end
					);

					if (matchRange.contains(position)) {
						const remValue = parseFloat(match[1]);
						const chakraBase = 4;
						const chakraUnits = ((remValue * 16) / chakraBase).toString();

						const completion = new vscode.CompletionItem(
							`${chakraUnits} (chakra tokensize)`,
							vscode.CompletionItemKind.Value
						);
						completion.detail = `${remValue}rem ≈ ${chakraUnits} chakra units`;
						completion.insertText = chakraUnits;
						completion.range = matchRange;

						return [completion];
					}
				}

				return undefined;
			},
		}
	);

	context.subscriptions.push(provider);
}

export function deactivate() { }
