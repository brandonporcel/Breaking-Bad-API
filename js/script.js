const d = document;
const $nextBtn = d.getElementById('next-btn');
const $prevBtn = d.getElementById('next-btn');
const cuurentCharacter = 6;
const drawChacterInfo = (dataJsonn) => {
	const data = dataJsonn[0];
	d.getElementById('character-image').src = data.img;
	d.getElementById('character-name').innerHTML = data.name;
	d.getElementById('placheholder-character-name').innerHTML = data.name;
	d.getElementById(
		'character-label-portrayed'
	).innerHTML = `Portrayed: ${data.portrayed}`;
	d.getElementById(
		'character-label-occupation'
	).innerHTML = `Portrayed: ${data.occupation}`;
	d.getElementById(
		'character-label-status'
	).innerHTML = `Status: ${data.status}`;
	console.log(data);
};
const fetchAPI = async (idCharacter) => {
	const URL = 'https://breakingbadapi.com/api/characters';
	const respuesta = await fetch(`${URL}/${idCharacter}`);
	const answerJson = await respuesta.json();
	drawChacterInfo(answerJson);
};
d.addEventListener('DOMContentLoaded', () => {
	fetchAPI(cuurentCharacter);
});
