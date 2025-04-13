import express from 'express'

const PORT = 3000
const app = express()

app.get("/" , (request , response) => {
    
    const data = {
        name : "Midhun U",
        age : 18,
        place : "TVM"
    }

    response.json(data)

})

app.listen(PORT , () => {
    console.log("Server running")
})