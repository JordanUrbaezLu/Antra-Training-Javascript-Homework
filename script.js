// Question 1
function reverse(num) {
   return parseFloat(num.toString().split('').reverse().join(''))
   //num.toString() -> turn number to string
   //num.split() -> split number one by one
   //num.reverse() -> reverse split numbers
   //num.join() -> join split numbers 
   //parseFloat(num) -> turn string to number
}

//Question 2
function palindrome(phrase) {
    split_phrase = phrase.split('');
    for(let x = 0; x < split_phrase.length; x++) {
        if(split_phrase[x] != split_phrase[split_phrase.length - x - 1])
        return false;
    }
    return true;
}

//Question 3 
function combinations(word) {
    my_array = [];
    for (let x = 0; x < word.length; x++) {
        for (let y = x + 1; y < word.length + 1; y++) {
            my_array.push(word.slice(x, y));
        }
    }
    return my_array;
}

//Question 4
function alphabetize(word) {
    return word.split('').sort().join('');
}

//Question 5 
function capitalize(sentence) {
    let words = sentence.split(" ");
    for (let x = 0; x < words.length; x++) {
        words[x] = words[x][0].toUpperCase() + words[x].substr(1);
    }
    words = words.join(" ");
    return words;
}

//Question 6
function longest_word(str) {
    const split_array = str.split(' ');
    let longest_word = "";
    for (let x = 0; x < split_array.length; x++) {
        if (split_array[x].length > longest_word.length) {
            longest_word = split_array[x];
        }
    }
    return longest_word;
}

//Question 7 
function vowel_counter(str) {
    let vowels = 'aeiouAEIOU';
    let counter = 0;
    for (let x = 0; x < str.length; x++) {
        if (vowels.indexOf(str[x]) !== -1) {
            counter += 1;
        }
    }
    return counter;
}

//Question 8 
function prime(num) {
    if (num === 1) {
        return false;
    }
    if (num === 2) {
        return true;
    } else {
        for (let x = 2; x < num; x++) {
            if (num % x === 0) {
                return false;
            }
        }
        return true;
    }
}

//Question 9
function type(arg) {
    return typeof arg;
}

//Question 10 
function ID_matrix(n) {
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (x === y) {
                console.log(1);
            } else {
                console.log(0);
            }
        }
        console.log("---");
    }
}

//Question 11
function second_low_great(arr) {
    arr.sort();
    return [arr[1], arr[arr.length - 2]];
}

//Question 12
function perfect(num)
{
    let temp = 0;
    for(let x = 1; x <= num/2; x++)
    {
         if(num % x === 0)
          {
            temp += x;
          }
    }
   
    if(temp === num && temp !== 0)
    {
       console.log("True");
    } else {
       console.log("False");
    }   
} 

//Question 13
function factors(num) {
    let factors = [];
    for (let x = 1; x <= Math.floor(Math.sqrt(num)); x++) {
        if (num % x === 0) {
            factors.push(x);
            if (num / x !== x) {
                factors.push(num / x);
            }
        }
        factors.sort(function(x, y) {
            return x - y;
        });
        return factors;
    }
}

//Question 14
function amountTocoins(amount, coins) {
    if (amount === 0) 
    {
        return [];
    } else {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat(amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
}

//Question 15 
function exponent(b, n) {
    let num = 1;
    for (let x = 1; x <= n; x++) {
        num = b * num;
    }
    return num;
}

//Question 16 
function unique_characters(str) {
    let my_str = str;
    let unique = "";
    for (let x = 0; x < my_str.length; x++) {
        if (unique.indexOf(my_str.charAt(x)) == -1) {
            unique += my_str[x];
        }
    }
    return unique;
}

//Question 17 
function occurrances(str) {
    let unique_characters = {};
    str.replace(/\S/g, function(l){unique_characters[l] = (isNaN(unique_characters[l]) ? 1 : unique_characters[l] + 1);});
    return unique_characters;
}

//Question 18 
function binary_search(items, value) {
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}

//Question 19 
function larger(num) {
    return function(x, index, array) {
        return (x >= num)
    }
}

//Question 20 
function id(n) {
    let str = "";
    let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let x = 0; x < n; x++) {
        str += list.charAt(Math.floor(Math.random() * list.length));
    }
    return str;
}

//Question 21
function subset(array, array_size) {
    let result_set = [], 
        result; 
    for(var x = 0; x < Math.pow(2, array.length); x++)
  {
    result = [];
    i = array.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(array[i]);
           }
        }  while(i--);
    if( result.length >= array_size)
       {
          result_set.push(result);
        }
    }
    return result_set; 
}

//Question 22
function specified_letter(str, letter) {
    let count = 0;
    for (let x = 0; x < str.length; x++) {
        if (str.charAt(x) == letter) {
            count++;
        }
    }
    return count;
}

//Question 23
function non_repeat(str) {
    var arr = str.split('');
    var result = '';
    var counter = 0;
    for (var x = 0; x < arr.length; x++) {
      counter = 0;
   
        for (var y = 0; y < arr.length; y++) {
            if (arr[x] === arr[y]) {
            counter+= 1;
            }
        }

        if (counter < 2) {
            result = arr[x];
            break;
        }
    }
    return result;
}

//Question 24
function bubble(z) {
    let swapp;
    let n = z.length-1;
    let x = z;
    do {
        swapp = false;
        for (let i = 0; i < n; i++) {
            if (x[i] < x[i+1]) {
               let temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

//Question 25
function longest_country(str) {
    return str.reduce(function(longest, country) {
        return longest.length > country.length ? longest : country;
    }, ""); 
}

//Question 26

//Question 27

//Question 28
function program(x, callback) {
    callback();
}

function mycallback() {
    console.log("this is mycallback function!");
}

//Question 29 
function my_name() {
    console.log(arguments.callee.name);
}

