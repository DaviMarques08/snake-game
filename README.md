# 🐍 Jogo da Cobrinha (Snake Game)

Um clássico jogo da cobrinha desenvolvido com JavaScript Vanilla e a API de Canvas do HTML5. Este projeto foi criado com o objetivo de exercitar conceitos de lógica de programação, manipulação do DOM e renderização 2D.

---

## 🎮 Como Jogar
1. Acesse o menu inicial e clique no botão para iniciar a partida.
2. Utilize as **setas do teclado** para controlar a direção da cobrinha.
3. Coma as maçãs vermelhas para aumentar sua pontuação e o tamanho do corpo.
4. Evite colidir com as paredes ou com o próprio corpo para não dar Game Over.

---

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estrutura da tela, menu e elemento `<canvas>`.
* **CSS3:** Estilização das telas, botões e placar.
* **JavaScript (Vanilla):** Lógica do jogo, controle de estado, física e renderização via Canvas API.

---

## 📐 Estrutura da Lógica (Engine)
O jogo foi arquitetado em um loop de renderização dividido nas seguintes funções principais:

* `draw()`: Limpa o Canvas e desenha a cobrinha e a comida nas coordenadas atuais.
* `update()`: Calcula a movimentação, novas coordenadas e regras de colisão.
* `changeDirection()`: Captura os eventos de teclado para alterar a trajetória ($dx$ e $dy$).
* `gameLoop()`: Controla o intervalo de atualização contínua do jogo.

---

## 🚀 Próximas Melhorias Planejadas
- [ ] Adicionar suporte a controles de toque para dispositivos móveis (Touch).
- [ ] Criar um sistema de *High Score* (maior pontuação) usando `localStorage`.
- [ ] Adicionar efeitos sonoros para as ações de comer e dar Game Over.

---

> Projeto desenvolvido para fins de estudo e fortalecimento do portfólio Front-End.  
