

setTimeout(()=>{
    console.log("setTimeOUT")
},0)

process.nextTick(()=>{
    console.log("nextTick")
})

setImmediate(()=>{
    console.log("immediate")
})

