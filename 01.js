
// 2. Censoring Words
const CHAR = 'X'
const BANNED = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'porident', 'laborum']
const sentence = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const censor = (sentence) =>
    sentence.split(' ')
   .map(word => BANNED.includes(word) ? CHAR.repeat(word.length) : word)
   .join(' ')

    const censored = censor(sentence)

    console.log(censored)

// 3. Count Words
function countWholeWords(text, keyword) {
    const times = text.match(new RegExp(`\\b${keyword}\\b`, 'gi'));

    if (times) {
        console.log(`${keyword} occurs ${times.length} times`);
    } else {
        console.log(keyword + " does not occurs")
    }
}

const text = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`

const wordsYouAreLookingFor = ["aku", "ingin", "dapat"]

wordsYouAreLookingFor.forEach((keyword) => countWholeWords(text, keyword));

    // 4. Play With Number
    var nomor = [1,2,3,4,5,6,7,8,9,10];

      var genap = [];
      var ganjil = [];
      var i = 0;
      
          for(i; i <nomor.length; i++){
              if (nomor[i] % 2 == 0) {
                  genap.push(nomor[i]);
              }else{
                  ganjil.push(nomor[i]);
              }
          }
              console.log(genap);
              console.log(ganjil);
              

// 7. Sorting Odd Numbers
const numbers = [9, 4, 2, 4, 1, 5, 3, 0];

    const sortOddNumbers = (numbers) => {
        const OddNumbers = numbers.filter(number => number % 2);
        const sortOdds =  OddNumbers.sort((a,b) => a - b);

        const result = numbers.map(number => number % 2 ? sortOdds.shift() : number);

        return result;

    };

    console.log('Before', numbers);
    console.log('After', sortOddNumbers(numbers));

    // 9. Array Sort
    const arrayList = [3, 12, 4, 5, 8, 9];

    const sortMethod = (items) => {
        items.sort(function(a, b) {
            a - b;
        });
    }
    console.log(arrayList);

    const list_letters_first = ["c","d","e","g","h"];
   
    const missingCharacter = list_letters_first  => {
   // to make the function more consistent
   const s = list_letters_first .toLowerCase();
   for(let i = 97; ; i++){
      if(s.includes(String.fromCharCode(i))){
         continue;
      };
      return String.fromCharCode(i);
   };
   return false;
};
console.log("list_letters_first = " + missingCharacter(list_letters_first ));


