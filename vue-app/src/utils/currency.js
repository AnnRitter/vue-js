const formatter = new Intl.NumberFormat('ru-RU',{ currency: 'RUB', style: 'currency'})

export function currency(value) {formatter
	return formatter.format(value)
}