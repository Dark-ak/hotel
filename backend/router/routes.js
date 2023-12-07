const express = require('express')
const router = express.Router()
const pool = require("../db")
const jwt = require("jsonwebtoken")


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body

        const [rows, fields] = await pool.query('SELECT * from `user` WHERE `email` = ?', [email])

        if (rows == 0) {
            return res.status(401).json({ message: "Invalid Login credentials" })
        }
        if (password != rows[0].password) {
            return res.status(401).json({ message: "Invalid Login credentials" })
        }

        const token = jwt.sign({ emailId: email }, "darkak")


        return res.status(200).json({ token: token })
    } catch (err) {
        console.log(err)
    }
})

router.post("/addHotel", async (req, res) => {
    try {
        const { hotel, City_code, Country_code } = req.body


        const [rows] = await pool.query('SELECT COUNT(*) as total FROM `hotels`')

        const total = rows[0].total

        const id = total + 1

        const save = await pool.query('INSERT INTO `hotels` (id,h_name,country_code, city_code) VALUES (?, ?, ?,?)', ["EL" + id, hotel, Country_code, City_code])

        return res.status(200).json({ message: "Added SuccessFully" })
    } catch (err) {
        console.log(err)
    }
})

router.get("/getData", async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT h.id, h.h_name, ci.name as city, co.name as country,h.country_code,h.city_code FROM hotels h JOIN city ci ON h.city_code = ci.code JOIN country co ON h.country_code = co.code;')
        return res.status(200).json({ data: rows })
    }catch(err){
        console.log(err)
    }
})

module.exports = router