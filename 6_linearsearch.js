function linearSearch(arr, val) {
    for(var i = 0; i< arr.length; i++) {
        if(arr[i] === val) {
            return i
        }
    }
    return -1
}

const a = linearSearch([34,51,23,5,32,56,23], 23)
console.log(a)

// O(1) - Best, O(N) - worst,average