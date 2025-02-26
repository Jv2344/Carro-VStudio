class Carro {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.velocidade = 0;
      this.ligado = false;
    }
  
    ligar() {
      if (!this.ligado) {
        this.ligado = true;
        this.atualizarStatus();
        console.log("Carro ligado!");
  
        // Tocar o som do carro ligando
        const somLigar = document.getElementById("som-ligar");
        somLigar.play();
  
      } else {
        console.log("O carro já está ligado!");
      }
    }
  
    desligar() {
      if (this.ligado) {
        this.ligado = false;
        this.velocidade = 0;
        this.atualizarStatus();
        this.atualizarVelocidadeNaTela();
        console.log("Carro desligado!");
      } else {
        console.log("O carro já está desligado!");
      }
    }
  
    acelerar() {
      if (this.ligado) {
        this.velocidade += 10;
        this.atualizarVelocidadeNaTela();
        console.log("Acelerando! Velocidade:", this.velocidade);
      } else {
        console.log("O carro precisa estar ligado para acelerar!");
      }
    }
  
    atualizarVelocidadeNaTela() {
      const velocidadeElement = document.getElementById("velocidade");
      velocidadeElement.textContent = `Velocidade: ${this.velocidade} km/h`;
    }
  
    atualizarStatus() {
      const statusElement = document.getElementById("status");
      statusElement.textContent = this.ligado ? "Ligado" : "Desligado";
    }
  }
  
  // Criando um objeto carro
  const meuCarro = new Carro("Pagani Zonda R", "Preto");
  
  // Obtendo os elementos HTML
  const ligarBotao = document.getElementById("ligar");
  const desligarBotao = document.getElementById("desligar");
  const acelerarBotao = document.getElementById("acelerar");
  
  // Adicionando os event listeners aos botões
  ligarBotao.addEventListener("click", () => meuCarro.ligar());
  desligarBotao.addEventListener("click", () => meuCarro.desligar());
  acelerarBotao.addEventListener("click", () => meuCarro.acelerar());