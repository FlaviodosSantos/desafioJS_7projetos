document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if (input !== '') {
        showWarning('Carregando ...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=f04fbc6da3aa9d738c8367e088e07652&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        if (json.cod === 200) {

        } else {
            showWarning('Cidade não encontrada.');
        }
    }
});


function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}