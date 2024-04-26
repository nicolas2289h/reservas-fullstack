const { Router } = require('express')
const db = require('../db')

const router = Router()

router.get('/user/:username', (req, res) => {
    const { username } = req.params
    console.log(username)
    const query = `SELECT * FROM users WHERE username = ?`
    db.query(query, username, (err, result) => {
        if (err) {
            console.error(err); // Error en la consola del servidor para corregir errores
            return res.status(500).json({ message: 'Error al obtener datos del usuario.' })
        }

        return res.status(200).json(result[0])
    })
})

router.put('/user/:id', (req, res) => {
    const { id } = req.params
    const { nombre, apellido, email, username } = req.body

    const query = `UPDATE users SET nombre=?, apellido=?, email=?, username=? WHERE id=?`
    const values = [nombre, apellido, email, username, id]

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error al actualizar los datos del usuario.' })
        }
        return res.status(200).json(username)
    })
})

module.exports = router;