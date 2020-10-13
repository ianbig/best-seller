import BookList from './BookList'
import data from '../public/data.json'

export default function MainContent() {
    const baseUrl = "https://api.nytimes.com/svc/books/v3/lists/"
    const apiKey = "api-key=jLRi1SY410cMHHlZQrsUJkK0dvtgtqu9"
    const request = "names.json?";
    const requestList = baseUrl + request + apiKey;
    //const [data, loading, error] = UseFetch(requestList);

    return (
        <>
            {
            data["results"].map( (item) => 
                    <BookList key={item.list_name} item={item} baseUrl={baseUrl} apiKey={apiKey}/>
                )
            }
        </>
    )

}
