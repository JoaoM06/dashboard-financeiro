

export default function testApi(req, res){
    const data = { message: "funfa"}
    res.status(200).json(data)
}