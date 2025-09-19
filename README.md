# Transformice-Launcher

Um launcher standalone feito com **Electron** (baseado no Chromium), desenvolvido para rodar o jogo **Transformice** de forma segura, leve e independente de navegadores externos.

## 🚀 Sobre

Este launcher foi criado para oferecer uma experiência dedicada ao jogador de Transformice, eliminando a necessidade de abrir navegadores convencionais e aumentando a segurança durante a execução do jogo.

## 🛡️ Proteções e Segurança

- ✅ **Baseado em Chromium (via Electron)**: o Chromium garante estabilidade e performance semelhante a um navegador moderno, porém com controle total do ambiente de execução.
- ✅ **Standalone**: executável independente, sem depender de navegadores ou instalações externas.
- ✅ **Memória protegida**: por ser uma aplicação Electron, o processo de execução do jogo fica isolado, dificultando alterações externas via ferramentas como Cheat Engine (AOB scan).
- ✅ **Sem menus nativos do Electron**: interface limpa, evitando acessos a ferramentas de desenvolvedor ou menus de debug.
- ✅ **Compatível com PPAPI Flash**: suporte interno ao Flash Player, sem depender de plugins instalados no sistema.

## 📦 Funcionalidades

- Executa diretamente o `.swf` do Transformice com carregamento personalizado.
- Integração com **Discord Rich Presence** (opcional).
- Ícone personalizado e suporte a atalhos.
- Ideal para servidores privados que desejam um client dedicado.

---

## 🛠️ Requisitos

- **Node.js** (v18 ou superior recomendado)
- **Electron** (npm install -g electron)
- Sistema operacional **Windows**
- Flash PPAPI (`pepflashplayer.dll` incluso no projeto)

---

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Imazinho/Transformice-Launcher.git
cd Transformice-Launcher
npm i
npm start
```


## 🛠️ Build
```bash
npm run build

Se quiser sem instalador coloque portable em "target": "nsis" no package.json.
```

📄 Licença

Este projeto é distribuído sem fins lucrativos e com propósito educacional/experimental. Transformice é uma marca registrada de seus respectivos donos. Este launcher não modifica os arquivos do jogo original.

Feito com ❤️ por Dit (Imazinho)
