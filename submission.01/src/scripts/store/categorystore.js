
class CategoryStore {
    private apiUrl = "https://api.themoviedb.org/3";
    private apiKey = "7832c13e5bb1f7898f616899243e26e6";

    static async getPopularMovie() {
        const response = await fetch(`${MovieStore.apiUrl}/movie/popular?api_key=${MovieStore.apiKey}`);
        const responseJson = await response.json();
        if (responseJson.results) {
            return Promise.resolve(responseJson.results);
        }
        else {
            return Promise.reject(`Popular movies is not found`);
        }
    }
}

export default CategoryStore;