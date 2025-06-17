import express from 'express'
import os from 'os'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

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
    console.log(os.platform())
    console.log(os.arch())
})

export default app
