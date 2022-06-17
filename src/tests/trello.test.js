const axios = require('axios');
const CONFIG = require('./../configs');
const getRandNumber = () => Math.floor(Math.random() * 1000) + 1;

const KEY_AND_TOKEN = `key=${CONFIG.API_KEY}&token=${CONFIG.TOKEN}`;

describe('Trello API Test Senaryosu', () => {
	let boardId;
	let listId;
	let firstCardId;
	let secondCardId;

	test('Yeni board oluşturulur', async () => {
		const randomNum = getRandNumber();
		const boardName = CONFIG.BOARD_NAME + randomNum;
		const API_URL = `${CONFIG.BASE_URL}/1/boards/?name=${boardName}&${KEY_AND_TOKEN}`;
		const response = await axios.post(API_URL);

		const { data } = response;
		boardId = data.id;

		expect(response.status).toBe(200);
	});

	test('Yeni liste oluşturulur', async () => {
		const API_URL = `${CONFIG.BASE_URL}/1/lists?name=${CONFIG.LIST_NAME}&idBoard=${boardId}&${KEY_AND_TOKEN}`;
		const response = await axios.post(API_URL, {});

		const { data } = response;
		listId = data.id;

		expect(response.status).toBe(200);
	});

	test('1. Kart oluşturulur', async () => {
		const cardName = 'RANDOM_CARD' + getRandNumber();
		const API_URL = `${CONFIG.BASE_URL}/1/cards/?name=${cardName}&idList=${listId}&${KEY_AND_TOKEN}`;
		const response = await axios.post(API_URL, {});

		const { data } = response;
		firstCardId = data.id;

		expect(response.status).toBe(200);
	});

	test('2. Kart oluşturulur', async () => {
		const cardName = 'RANDOM_CARD' + getRandNumber();
		const API_URL = `${CONFIG.BASE_URL}/1/cards/?name=${cardName}&idList=${listId}&${KEY_AND_TOKEN}`;
		const response = await axios.post(API_URL, {});

		const { data } = response;
		secondCardId = data.id;

		expect(response.status).toBe(200);
	});

	test('1. Kart güncellenir', async () => {
		const newCardName = 'UPDATED_CARD' + getRandNumber();
		const API_URL = `${CONFIG.BASE_URL}/1/cards/${firstCardId}?name=${newCardName}&${KEY_AND_TOKEN}`;
		const response = await axios.put(API_URL, {});

		expect(response.status).toBe(200);
	});

	test('1. Kart silinir', async () => {
		const API_URL = `${CONFIG.BASE_URL}/1/cards/${firstCardId}?${KEY_AND_TOKEN}`;
		const response = await axios.delete(API_URL, {});

		expect(response.status).toBe(200);
	});

	test('2. Kart silinir', async () => {
		const API_URL = `${CONFIG.BASE_URL}/1/cards/${secondCardId}?${KEY_AND_TOKEN}`;
		const response = await axios.delete(API_URL, {});

		expect(response.status).toBe(200);
	});

	test('Board silinir', async () => {
		const API_URL = `${CONFIG.BASE_URL}/1/boards/${boardId}?${KEY_AND_TOKEN}`;
		const response = await axios.delete(API_URL, {});

		expect(response.status).toBe(200);
	});
});
