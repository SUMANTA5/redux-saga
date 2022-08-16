export const addToCart = (data) => {

    console.log("action call",data)

    return {
        type: 'Add_To_Cart',
        data: data
    }
}