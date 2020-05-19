const API = "https://us-central1-fir-app-ea41c.cloudfunctions.net/helloWorld"
export const getMessage = () => {
    return fetch(API ,{
        method:"GET"
    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}