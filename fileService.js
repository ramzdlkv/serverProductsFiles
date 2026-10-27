import { v4 as uuidv4 } from 'uuid';




class FileService {
    async saveFile(file) {

        try {

            if(!file){
                throw new Error("Файл не передан!")
            }

            const MAZ_SIZE = 5 * 1024 * 1024

            if(file.size  > MAZ_SIZE){
             throw new Error ("Файл слишком большой , максимум 5 МБ.")
            }
            const fileType = file.name.split(".").pop()
            const fileName = `${uuidv4()}.${fileType}`

            const filePath = `./files/${fileName}`

            await file.mv(filePath)

            return fileName;
        } catch (error) {
            
            console.log("Ошибка при добавлении файла" + error);


        }
    }
}

export default new FileService;