const d = document;
const $nextBtn = d.getElementById('next-btn');
const $prevBtn = d.getElementById('prev-btn');
let currentCharacter = 115;
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
	).innerHTML = `Occupation: ${data.occupation}`;
	d.getElementById(
		'character-label-status'
	).innerHTML = `Status: ${data.status}`;
};
const fetchAPI = async (idCharacter) => {
	const URL = 'https://breakingbadapi.com/api/characters';
	const respuesta = await fetch(`${URL}/${idCharacter}`);
	const answerJson = await respuesta.json();
	drawChacterInfo(answerJson);
};
d.addEventListener('click', (e) => {
	if (e.target === $prevBtn) {
		currentCharacter -= 1;
		if (currentCharacter < 1) {
			currentCharacter = 117;
		}
		fetchAPI(currentCharacter);
	}
	if (e.target === $nextBtn) {
		currentCharacter += 1;
		if (currentCharacter > 117) {
			currentCharacter = 1;
		}
		fetchAPI(currentCharacter);
	}
});
d.addEventListener('DOMContentLoaded', () => {
	fetchAPI(currentCharacter);
});
