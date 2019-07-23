import { Component } from '@angular/core';

import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private electronService: ElectronService) { }

  buttonClicked() {
    if (this.electronService.isElectronApp) {
      this.electronService.remote.dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] });
    }
  }

}
