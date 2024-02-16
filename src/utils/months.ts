export const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

export const currentMonth = new Date().getMonth()

export const isCurrentMonth = MONTHS[currentMonth]

export const current = (monthIndex: number) => monthIndex === currentMonth // Função para verificar se o índice do mês é o mês atual

export const monthsUntilCurrent = MONTHS.slice(0, currentMonth + 1) // Extrai os meses até o mês atual
