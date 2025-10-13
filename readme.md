# Chrome Extension (Manifest V3)

Extensão para Google Chrome desenvolvida com Manifest V3 para a disciplina de Bootcamp II. Inclui popup interativo, service worker e testes automatizados.

## Funcionalidades

* **Popup Interativo:** Interface de usuário com mudança de cores
* **Service Worker:** Script em segundo plano para eventos do navegador
* **Build Automatizado:** Sistema de build para empacotamento
* **Testes E2E:** Testes automatizados com Playwright
* **CI/CD:** Pipeline de integração contínua com GitHub Actions

## Tecnologias

* HTML5, CSS3, JavaScript
* Chrome Extensions API (Manifest V3)
* Playwright (testes)
* GitHub Actions (CI/CD)
* Docker (containerização)

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Build da extensão
npm run build

# Executar testes
npm test

# Apenas testes E2E
npm run test:e2e
```

## Instalação no Chrome

1. Execute `npm run build`
2. Abra Chrome → `chrome://extensions`
3. Ative "Modo de desenvolvedor"
4. Clique "Carregar sem compactação"
5. Selecione a pasta `dist/`

## 📂 Estrutura

```
├── src/
│   ├── background/     # Service worker
│   ├── popup/          # Interface do popup
│   └── content/        # Scripts de conteúdo
├── tests/              # Testes Playwright
├── scripts/            # Scripts de build
├── .github/workflows/  # CI/CD
└── dist/              # Build final
```