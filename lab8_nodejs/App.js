console.log('\n----- Example 1: global object, console -----')
console.log('Welcome to NodeJS by - _______')
console.warn('WARNING! The file might be corrupted')
console.error('SYNTAX ERROR! Check spelling')
console.trace('Trace error in line ')

console.log('\n----- Example 2: global object, timer -----')
setTimeout(()=>{console.warn('Time is over')},3000)

let count = 3
const timer = setInterval(()=>{
    console.log(`Counting ${count}`)
    count -= 1
    if (count == 0){
        clearInterval(timer)
    }
},2000)

console.log('\n----- Example 3: check or print directory or file -----')
console.log(`Current directory ${__dirname}`)
console.log(`Current file ${__filename}`)

console.log('\n----- Example 4: working with different module -----')
//import the module
const name = require('./mod')

console.log(name.helper("Martha"))
console.log(name.id(123))
console.log(name.email('hwu@qcc.cuny.edu'))

console.log('\n----- Example 5: nodejs event module -----')
// import the nodejs' module events
const events = require('events')
// use constructor 'new' to create an object of events
const eventEmitter = new events.EventEmitter()

eventEmitter.on('test', function(e){
    console.log(e)
})

eventEmitter.emit('test', 'EVENT EMITTERS IN NODEJS ')

console.log('\n----- Example 6: read file in nodejs -----')
const fs = require('fs')
fs.readFile('readmore.txt', 'utf-8', function(error,data){
    console.log(data)
    console.log(`Error = ${error}`)
})

console.log('\n----- Example 7: write file in nodejs -----')
let info = "\nThis file has three names: \nPeter\nMartha\nJason"
fs.writeFile('readmore.txt', info, function(error){
    if(error){
        console.log(error)
    }
} )

console.log('\n----- Example 8: append data into an existing file in nodejs -----')
fs.appendFile("user_emails.txt", info, function(error){
    if(error){console.log(error)}
})

console.log('\n----- Example 9: remove files -----')
fs.unlink('user_emails.txt', (error)=>{
    if(error){console.log(error)}
})

console.log('\n----- Example 10: create files -----')
// .writeFile(), .appendFile(), .open()
fs.open('newfile.txt', 'w', function(err){
    if(err){console.log(err)}
    else{console.log('File saved!')}
})

console.log('\n----- Example 11: create directory-----')
fs.mkdirSync('newimages')

console.log('\n----- Example 12: remove directory-----')
fs.rmdirSync('new_directory')