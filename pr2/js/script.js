function findMajorityElement(arr) {
    const countMap = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        countMap[num] = (countMap[num] || 0) + 1;
    }

    let majorityElement;
    let maxCount = 0;
    for (const num in countMap) {
        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            majorityElement = num;
        }
    }

    if (maxCount > arr.length / 2) {
        return majorityElement;
    } else {
        return "No majority element found";
    }
}

function reverseWords(str) {
    str = str.trim();

    const words = str.split(/ +/);

    const reversedWords = words.reverse();

    const reversedString = reversedWords.join(' ');

    return reversedString;
}

function findFirstOccurrence(str, str1) {
    return str.indexOf(str1);
}




const arr = [3, 3, 3, 3, 4, 2, 2];
console.log("Majority Element:", findMajorityElement(arr));


const inputString = "hello kity";
console.log("Reversed String:", reverseWords(inputString));

const str = "hello my name is doremon.";
const str1 = "doremon";
console.log("Index of first occurrence:", findFirstOccurrence(str, str1));