const axios = require('axios');

const getbooks = async (id) => {
    try {
        const resp = await axios.get('http://localhost:3000/books/'+id);
        console.log(`Request status: ${resp.status} ${resp.statusText}`);
        console.log(resp.data);
    } catch (error) {
        if (error.response.status == 404){
            console.log(`Book number #${id} does not exit`)
        } else {
            console.log(`Something happened with book #${id}`)
        }

    }
}

const addBooks = async (id,bookInfo) => {
    try {
        const resp = await axios.post('http://localhost:3000/books/'+id, bookInfo);
        console.log(`Request status: ${resp.status} ${resp.statusText}`);
        console.log(resp.data)
    } catch (error) {
        console.log(error.message)
    }

}
const deleteBook = async (id) =>{
    try {
        const resp = await axios.delete('http://localhost:3000/books/'+id);
        console.log(`Request status: ${resp.status} ${resp.statusText}`);
        console.log(resp.data)
        console.log("Successfully deleted # " + id + " book")
    } catch (error) {
        if (error.response.status == 404){
            console.log(`Book number #${id} does not exit`)
        } else {
            console.log(`Something happened with book #${id}`)
        }
        // console.log(error.message)
    }
}

const updateBookSparse = async (id,bookInfo) =>{
    try {
        const resp = await axios.patch('http://localhost:3000/books/'+id, bookInfo);
        console.log(`Request status: ${resp.status} ${resp.statusText}`);
        console.log(resp.data)
        console.log("Successfully updated what you want # " + id + " book")
    } catch (error) {
        if (error.response.status == 404){
            console.log(`Book number #${id} does not exit`)
        } else {
            console.log(`Something happened with book #${id}`)
        }
        // console.log(error.message)
    }
}

const updateBookFull = async (id, bookInfo) =>{
    try {
        const resp = await axios.put('http://localhost:3000/books/'+id, bookInfo);
        console.log(`Request status: ${resp.status} ${resp.statusText}`);
        console.log(resp.data)
        console.log("Successfully updated full book# " + id + " book")
    } catch (error) {
        if (error.response.status == 404){
            console.log(`Book number #${id} does not exit`)
        } else {
            console.log(`Something happened with book #${id}`)
        }
        
    }
}

const main = async () => {
    // await deleteBook(1);

    await addBooks({ id:12, name:'Everything Is F*cked', author:'Mark Manson'});
    await getbooks();
    // await updateBookFull(2,{name:'Wise Men Fear', author: "I don't remember"})
    // await updateBookSparse(2,{author:"Patrick Rothfuss"});
}
main()

