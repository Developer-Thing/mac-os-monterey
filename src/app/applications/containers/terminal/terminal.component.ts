import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TerminalService } from 'primeng/terminal';
import { TerminalCommand } from 'src/app/shared/config/terminal-command';

@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TerminalService],
    standalone: false
})
export class TerminalComponent {

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(command => {
      const response = this.getCommandResponse(command);
      this.terminalService.sendResponse(response);
    });
  }

  private getCommandResponse(command: string) {
    switch (command.toUpperCase()) {
      case TerminalCommand.Author: return 'Developer Thing';
      case TerminalCommand.Ui: return 'PrimeNg';
      case TerminalCommand.Framework: return 'Angular';
      default: return 'Unknown command';
    }
  }

}
