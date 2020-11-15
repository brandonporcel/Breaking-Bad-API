const d = document;
const $container = d.getElementById('main');
const $form = d.getElementById('form');
const $formInput = d.getElementById('form-input');
const drawCards = (dataFromJson) => {
	let elementos = '';
	dataFromJson.forEach((el) => {
		elementos += `
        <article class="card">
					<div class="card-img-container">
						<img class="card-img img-fluid" src="${el.img}" alt="" />
					</div>
					<div class="card-content">
						<h3 class="character-name">${el.name}</h3>
						<p>
							<b>Portrayed: </b>
							${el.portrayed}
						</p>
						<p>
							<b>Occupation: </b>
							${el.occupation}
						</p>
						<p>
							<b>Status: </b>
							${el.status}
						</p>
					</div>
				</article>
        `;
	});
	$container.innerHTML = elementos;
};
const userForm = (dataFromJson) => {
	$form.addEventListener('keyup', (e) => {
		e.preventDefault();
		const userText = $formInput.value.toLowerCase();
		const filteredCharacterArray = dataFromJson.filter((el) => {
			const APINames = el.name.toLowerCase();
			if (APINames.indexOf(userText) !== -1) {
				return el;
			}
		});
		drawCards(filteredCharacterArray);
	});
};
const filterByStatus = (dataFromJson) => {
	const $select = d.getElementById('filter-select');
	$select.addEventListener('change', () => {
		const optionValue = $select.value.toLowerCase();
		console.log(dataFromJson);
		if (optionValue === '') {
			drawCards(dataFromJson);
		} else {
			const filteredCharacterArray = dataFromJson.filter(
				(item) => item.status.toLowerCase() === optionValue
			);
			drawCards(filteredCharacterArray);
		}
	});
};
const fetchAPI = async () => {
	try {
		const URL = 'https://breakingbadapi.com/api/characters/';
		const answer = await fetch(URL);
		const answerJson = await answer.json();
		drawCards(answerJson);
		userForm(answerJson);
		filterByStatus(answerJson);
	} catch (err) {
		console.log(err);
	}
};
d.addEventListener('DOMContentLoaded', () => {
	fetchAPI();
});
