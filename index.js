let numbers = [4, 16, 19, 22, 11, 144, 967, 19124]

let odd =  []
let even = []


numbers.filter(elem => {
let matem = elem / 2    
    if( matem.toString().includes('.')) {
        odd.push(elem)
    } else{
        even.push(elem)
    }
}) 
console.log(odd,even);





let arr = ["alex", "john", "tony", "alexsandr", "michael"]

let name = " "

arr.filter(item => {
    if (name.length <= item.length) {
        name = item
    }
})