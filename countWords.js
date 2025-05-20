/**
 * Подсчитывает количество слов в строке
 * @param {string} sentence - Входная строка для анализа
 * @returns {number} Количество слов в строке
 */
function countWords(sentence) {
    if (typeof sentence !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Удаляем лишние пробелы по краям и заменяем множественные пробелы на одинарные
    const trimmed = sentence.trim().replace(/\s+/g, ' ');
    
    // Разбиваем на слова (учитываем случай пустой строки)
    const words = trimmed ? trimmed.split(' ') : [];
    
    return words.length;
}

module.exports = countWords;