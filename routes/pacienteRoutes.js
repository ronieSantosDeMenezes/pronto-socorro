const router = require('express').Router()
const Paciente = require('../models/Paciente')

router.post('/paciente', async (req, res) => {
    const {nomePaciente, cidadePaciente, documentoPaciente, problemaSaude} = req.body

     const paciente = {
        nomePaciente,
        cidadePaciente,
        documentoPaciente,
        problemaSaude

     }
     try {
        const result = await Paciente.create(paciente)
        if(result?._id)
            res.status(201).json({message: 'PacienteInserido com Sucesso!!!'})
        res.status(500).send()
     } catch (error) {
        res.status(500).json({error: error})
     }
})

router.get('/paciente/:id?', async (req, res) => {
    const id = req.params.id
    let filter = {}
    if(id)
        filter = {_id: id}

    try {
        const paciente = await Paciente.find(filter)
        if(paciente)
            res.status(200).json(paciente)
        else
            res.status(404).json({message: 'Paciente  Não Encontrado!!'})

    } catch (error) {
        res.status(500).json({error: error})  
    }    
})

router.put('/paciente/:id', async (req, res) => {
    const id = req.params.id
    const {nomePaciente, cidadePaciente, documentoPaciente, problemaSaude} = req.body

    const paciente = {
        nomePaciente,
        cidadePaciente,
        documentoPaciente,
        problemaSaude
    }
    try {
        const updatePaciente = await Paciente.updateOne({_id: id}, paciente)
        if(updatePaciente.modifiedCount === 1)
             res.status(200).json (paciente)
        else
            res.status(404).json({message: 'Registro de Paciente Não encontrado!!'})

    } catch (error) {
        res.status(500).json({error: error})
        
    }
})


router.delete('/paciente', async (req, res) => {
    const id = req.body.id
    try {
        const result = await Paciente.deleteOne({_id: id})
        if(result.deletedCount === 1)
             res.status(204).send()
        else
            res.status(404).json({message: 'Registro de Paciente Não encontrado!!'})

    } catch (error) {
        res.status(500).json({error: error})
        
    }
})


module.exports = router