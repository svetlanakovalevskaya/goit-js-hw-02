const findLongestWord = function(string) {
    //1. Переделываем строку в массив
    let arr = string.split(' ');

    //2. Делаем новый массив с кол-вом букв в каждом слове предыдущего массива
    let countLetters = [];
  
    for (let i=0; i < arr.length; i += 1) {
        countLetters.splice(arr.length - 1, 0, arr[i].length);
    }
  
    //3. Узнаём наибольшее число нового массива
    let maxCountLetters = Math.max(...countLetters);
  
    //4. Узнаём индекс наибольшего числа
    let maxCountLettersIndex = countLetters.indexOf(maxCountLetters);
  
    //5. Выводи слово с наибольшим кол-вом букв исходного массива
    return arr[maxCountLettersIndex];
};
  
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
console.log(findLongestWord('Google do a roll')); // 'Google'
  
console.log(findLongestWord('May the force be with you')); // 'force'