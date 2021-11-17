const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "21859800-af94843fb327cc57780ddd667";

function fetchApi(imageName, page) {
  return fetch(
    `${BASE_URL}?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`There is no images with name ${imageName}`)
    );
  });
}

const Api = { fetchApi };

export default Api;
