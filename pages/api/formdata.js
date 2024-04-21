import formidable from 'formidable'

export const config = {
    api: {
        bodyParser: false,
    },
}

export default async function handler(req, res){
    try {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) =>{
            if(err){
                throw new Error("Erro ao processar o formulário")
            }

            console.log(fields)
            console.log(files)

            res.status(200).json({message: 'upload concluido'})
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}