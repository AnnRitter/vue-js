const ERROR_CODES = {
	EMAIL_NOT_FOUND: 'Пользователь не найден',
	INVALID_PASSWORD: 'Пароль неверный',
	auth: 'Необходима авторизация',
}

export function error(code) {
	return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}