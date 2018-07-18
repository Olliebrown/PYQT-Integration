'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { PySide2Controller } from './controller';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    const controller = new PySide2Controller(context);

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    context.subscriptions.push(
        vscode.commands.registerCommand('pyside2-vsc.createNewForm', 
        (fileUri: vscode.Uri) => controller.createNewForm(fileUri))
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('pyside2-vsc.editInDesigner', 
        (fileUri: vscode.Uri) => controller.editInDesigner(fileUri))
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('pyside2-vsc.Preview', 
        (fileUri: vscode.Uri) => controller.preview(fileUri))
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('pyside2-vsc.compileForm', 
        (fileUri: vscode.Uri) => controller.compileForm(fileUri))
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('pyside2-vsc.compileQRC', 
        (fileUri: vscode.Uri) => controller.compileQRC(fileUri))
    );
}

// this method is called when your extension is deactivated
export function deactivate() {
}
