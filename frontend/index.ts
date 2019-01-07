import { BackendInterop } from './interop/backend';
import { CommandParser } from './commands/command';

if (window) {
    window['CommandParser'] = CommandParser;
    window['BackendInterop'] = BackendInterop;
}