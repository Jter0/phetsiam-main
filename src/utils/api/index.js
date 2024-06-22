
const api = async (path, body, method = "POST") => {
    let options = {
        method,
        headers: {
            'content-type': 'application/json',
            Authorization:
                "Basic " + btoa(process.env.NEXT_PUBLIC_PRODUCT_CONSUMER_KEY + ":" + process.env.NEXT_PUBLIC_PRODUCT_CONSUMER_SECRET),
        },

    }

    if (body) {
        options.body = JSON.stringify(body)
    }

    try {
        const json = await fetch(path, options).then(res => res.json())

        // console.log('-->', path, "✅")
        return json
    } catch (err) {
        // console.log('-->', path, "❌")
        return { success: false, message: err.message }
    }



}

export default api;