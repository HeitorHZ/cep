document.getElementById('buscar').addEventListener('click', () => {
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove qualquer não número

    if (cep.length !== 8) {
        alert('CEP inválido! Digite 8 números.');
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('resultado').innerHTML = 'CEP não encontrado!';
            } else {
                document.getElementById('resultado').innerHTML = `
                    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade}</p>
                    <p><strong>Estado:</strong> ${data.uf}</p>
                    <p><strong>CEP:</strong> ${data.cep}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            document.getElementById('resultado').innerHTML = 'Erro ao buscar CEP.';
        });
});