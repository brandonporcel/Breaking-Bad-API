const d = document;
const $nextBtn = d.getElementById('next-btn');
const $prevBtn = d.getElementById('next-btn');
const cuurentCharacter = 6;
const drawImage = (dataJsonn) => {
	const data = dataJsonn[0];
	d.getElementById('character-image').src = data.img;
};
const drawName = (dataJsonn) => {
	d.getElementById('character-name').innerHTML = dataJsonn[0].name;
};
const drawPlaceholderName = (dataJsonn) => {
	d.getElementById('placheholder-character-name').innerHTML = dataJsonn[0].name;
};

const fetchAPI = async (idCharacter) => {
	const URL = 'https://breakingbadapi.com/api/characters';
	const respuesta = await fetch(`${URL}/${idCharacter}`);
	const answerJson = await respuesta.json();
	drawImage(answerJson);
	drawName(answerJson);
	drawPlaceholderName(answerJson);
};
d.addEventListener('DOMContentLoaded', () => {
	fetchAPI(cuurentCharacter);
});
