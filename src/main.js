const { app, BrowserWindow, Menu, ipcMain, ipcRenderer, dialog } = require('electron');
const path = require('path');
const client = require('discord-rich-presence')('troque');  // Coloque o ID do seu Rich Presence

// Inicialização do app
let mainWindow;
const iniciouApp = Date.now();

// Função para configurar o Discord Rich Presence
function setupRichPresence() {
  client.updatePresence({
    state: 'Seu Mice nome',      // Estado atual
    details: 'nexthost.cloud',  // Detalhes do jogo ou serviço
    startTimestamp: iniciouApp, // Timestamp de início
    instance: true,             // Indica se é uma instância de jogo
    // largeImageKey: 'imgnome', // Descomente e troque se quiser usar uma imagem personalizada
  });
}

// Função para criar a janela principal
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      javascript: true,
      plugins: true,
      nodeIntegration: false,
    },
  });

  // Carregar o SWF diretamente ou usar o Chargeur
  mainWindow.loadURL("link/Transformice.swf");

  // Esconder o menu do Electron
  Menu.setApplicationMenu(null);

  // Evento de fechar a janela
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Configuração do Flash Player
function setupFlash() {
  app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, 'pepflashplayer.dll'));
  app.commandLine.appendSwitch('ppapi-flash-version', '20.0.0.306');
  app.commandLine.appendSwitch('ignore-gpu-blacklist'); // Correção para placas de vídeo
}

// Eventos do Electron
app.on('ready', () => {
  setupRichPresence(); // Configuração do Discord Rich Presence
  setupFlash();         // Configuração do Flash Player
  createWindow();       // Criação da janela principal
});

app.on('window-all-closed', () => {
  // No Mac, o app não é fechado quando todas as janelas são fechadas
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // No Mac, recria a janela caso não exista
  if (mainWindow === null) {
    createWindow();
  }
});