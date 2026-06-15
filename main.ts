// Mantém a função do Botão A caso você ainda queira ver a temperatura manualmente
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
let temperaturaAtual = 0
// Configuração inicial (no iniciar)
let temperaturaReferencia = input.temperature()
// Loop que roda em segundo plano a cada 3 segundos (Timer)
loops.everyInterval(3000, function () {
    temperaturaAtual = input.temperature()
    // Mostra a temperatura atual na tela de LED
    basic.showNumber(temperaturaAtual)
    // Verifica se a variação (para mais ou para menos) é de 3°C ou mais
    // Atualiza a referência para a nova temperatura estável, se desejar
    // temperaturaReferencia = temperaturaAtual
    if (Math.abs(temperaturaAtual - temperaturaReferencia) >= 3) {
        // Toca um bipe de alerta (1760 Hz é a nota Lá fixa, tocando por 1/4 de tempo)
        music.playTone(1760, music.beat(BeatFraction.Quarter))
    }
})
