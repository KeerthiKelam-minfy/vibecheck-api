import express, { application } from "express"

const app = express()
app.use(express.json())

const sampleVibes = [
    {
        id: 1,
        title: "Tollywood pearls",
        description: "This is a playlist curated for telugu pearls."
    },
    {
        id: 2,
        title: "Top English songs of all time",
        description: "This a playlist having all the top english songs of all time."
    },
    {
        id: 3,
        title: "Koncham clarity koncham reality",
        description: "This is a telugu podcast playlist curated for podcasts with some clarity and some reality"
    }
]

// Root Endpoint
app.get("/", (req, res) => {
    res.json(
        "Welcome to VibeCheck!! Check your Vibe."
    )
})

// get all vibes endpoint
// get a single vibe by id
app.get("/api/v1/vibes/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const vibe = sampleVibes.find(v => v.id === id)

    if(!vibe) {
        return res.status(404).json({"success": false, "message": "That vibe is off the grid, not found."})
    }
    res.status(200).json(vibe)
})

const PORT = 5000

app.listen(PORT, () => {
    console.log("🚀 Server blasting off on port 5000.")
})