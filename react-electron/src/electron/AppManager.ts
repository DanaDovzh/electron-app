import { AlarmWindow } from './AlarmWindow';
import { TrayMenu } from './TrayMenu';

export type ManagerTypes = AlarmWindow;

class AppManager {
  private trayMenu!: TrayMenu;
  private windowManager: Map<string, ManagerTypes> = new Map();

  setTray(tray: TrayMenu): void {
    this.trayMenu = tray;
  }

  getTray(): TrayMenu {
    return this.trayMenu;
  }

  setWindow(name: string, element: ManagerTypes): void {
    this.windowManager.set(name, element);
  }

  getWindow(name: string): ManagerTypes {
    const element = this.windowManager.get('AlarmWindow');
    if (element) {
      return element;
    }
    throw new Error(`[AppManager] - Element with name ${name} doesn't exist!`)
  }

  deleteWindow(name: string): void {
    this.windowManager.delete(name)
  }
}

export const appManager = new AppManager();