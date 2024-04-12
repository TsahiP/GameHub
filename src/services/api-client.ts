import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
params: {
    key:'fc8908c499bc4c749584cf7695423550'

}
})
