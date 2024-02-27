module.exports = (say)=> {
    say.on('hellofunction', req=>`Hi ${req.data.input1} ! How are you .`)
}