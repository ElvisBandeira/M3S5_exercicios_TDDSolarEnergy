function numeroTempo(valor) {
    let horas = valor >= 3600 ? Math.trunc(valor / 3600) : 0
    let segundos = valor < 60 ? valor : valor % 60

    let minutos = 0
    if (valor >= 60) {
        minutos = Math.trunc(valor / 60)
    }
    if (valor >= 3600) {
        minutos = Math.trunc((valor % 3600) / 60)
    }

    return `${horas}h ${minutos}m ${segundos}s`
}

test("converter o numero 30 em 0h 0m 30s", () => {
    const resultado = numeroTempo(30)
    expect(resultado).toBe('0h 0m 30s');
});

test("converter o numero 350 em 0h 5m 50s", () => {
    const resultado = numeroTempo(350)
    expect(resultado).toBe('0h 5m 50s');
});

test("converter o numero 3725 em 1h 2m 5s", () => {
    const resultado = numeroTempo(3725)
    expect(resultado).toBe('1h 2m 5s');
});

test("converter o numero 3720 em 1h 2m 0s", () => {
    const resultado = numeroTempo(3720)
    expect(resultado).toBe('1h 2m 0s');
});

test("converter o numero 3605 em 1h 0m 5s", () => {
    const resultado = numeroTempo(3605)
    expect(resultado).toBe('1h 0m 5s');
});

test("converter o numero 7250 em 2h 0m 50s", () => {
    const resultado = numeroTempo(7250)
    expect(resultado).toBe('2h 0m 50s');
});