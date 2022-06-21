import { TrayMenu } from '@/electron/TrayMenu';
import { app } from 'electron';
import { AlarmWindow } from './electron/AlarmWindow';
import { appManager } from './electron/AppManager';

app.on('ready', () => {
  appManager.setTray(new TrayMenu());
  appManager.setWindow('AlarmWindow', new AlarmWindow());
});