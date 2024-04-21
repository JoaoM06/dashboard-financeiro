
import styles from "../styles/InputFile.module.css"


export function InputFile(){
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        try {
          const response = await fetch('/api/formdata', {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            console.log('Upload concluído com sucesso!');
          } else {
            console.error('Erro ao fazer upload:', response.statusText);
          }
        } catch (error) {
          console.error('Erro ao fazer upload:', error.message);
        }
      };

    return <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <label for="xmlFile">Selecione um arquivo .xml</label>
            <input type="file" id="xmlFile" name="xmlFile" accept=".xml"></input>
            <button type="submit">Enviar</button>
        </form>
    </div>
}




