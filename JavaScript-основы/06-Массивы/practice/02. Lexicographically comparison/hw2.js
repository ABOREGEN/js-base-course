arr = ['hallo','hallo']

//if('ы' > 'a') {
//  console.log("Больше")
//}

if(arr[0].length > arr[1].length) {
  console.log(">");
} else if(arr[0].length < arr[1].length) {
  console.log("<");
} else {
// пробегам по каждым буквам слов
for(let i=0; i < arr[0].length; i++ ) {
   // сравниваем n букву первого слова с n буквой слоедующего слова
    if(arr[0][i] >= arr[1][i]) {
        // если равны идем дальше
        if(arr[0][i] == arr[1][i]) {
                if((i == arr[0].length - 1)) {
                    console.log("=")
                  
                }
        } else {
            console.log(">")
            break;
        }
        // если меньше то второе слово больше
    } else {
        console.log("<")
        break;
    }
}
}
