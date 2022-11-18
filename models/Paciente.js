const mongoose = require('mongoose')


const Paciente = mongoose.model('Paciente', {
    nomePaciente: String,
    cidadePaciente: String,
    documentoPaciente: String,
    problemaSaude: String


})

module.exports = Paciente
