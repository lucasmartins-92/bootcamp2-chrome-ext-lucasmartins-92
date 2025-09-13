# Color Changer (Manifest V3)

Um projeto simples de extensão para o Google Chrome, desenvolvido para demonstrar funcionalidades essenciais utilizando Manifest V3 para a disciplina de Bootcamp II. A extensão inclui um popup interativo e um service worker para tarefas em segundo plano.

## Funcionalidades

* **Popup Interativo:** Interface de usuário acessada ao clicar no ícone da extensão.
* **Mudança de Cor:** Um botão que altera a cor de fundo do popup, ciclando através de uma paleta de cores predefinida.
* **Abertura de Aba:** Um segundo botão que abre uma aba específica no navegador.
* **Service Worker em Background:** Um script que opera em segundo plano para monitorar eventos do navegador.
* **Notificações do Sistema:** O service worker exibe uma notificação nativa quando uma aba monitorada termina de carregar.

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* API de Extensões do Chrome (Manifest V3)

## Como Instalar e Testar

1.  Faça o download ou clone este repositório para a sua máquina.
2.  Abra o Google Chrome e navegue até `chrome://extensions`.
3.  Ative o **Modo de Desenvolvedor** (Developer Mode) no canto superior direito.
4.  Clique em **Carregar sem compactação** (Load unpacked).
5.  Selecione a pasta do projeto.
6.  A extensão aparecerá na sua barra de ferramentas, pronta para ser testada.

## 📂 Estrutura dos Arquivos

    ├── img/
    │   ├── icon.png
    ├── background.js
    ├── index.html
    ├── manifest.json
    ├── popup.html
    ├── popup.js
    ├── readme.md
    └── style.css