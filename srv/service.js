module.exports = (say)=> {
    say.on('hellofunction', req=>`Hi ${req.data.input1} ! How are you.`)
    console.log(" << This is the new developer & their changes >> ")
}