const axios = require('axios');

const shopUrl = 'https://devtestrecruitte.myshopify.com';
const apiKey = 'd156c699edcc98186dae8e6f9562d838';
const password = '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';

const productsRquest = `${shopUrl}/admin/api/2021-10/products.json`;

axios.get(productsRquest, {
    auth: {
        username: apiKey,
        password: password
    }
})
    .then(res => {
        const products = res.data.products.map(product => {
            const createdAt = new Date(product.created_at);
            const formattedDate = `${createdAt.getFullYear()}-${(createdAt.getMonth() + 1).toString().padStart(2, '0')}-${createdAt.getDate().toString().padStart(2, '0')}`;

            return {
                id: product.id,
                price: product.price,
                status: product.stastatus,
                createdAt: formattedDate,
            };
        });

        console.log(JSON.stringify(products, null, 2));
    })
    .catch(err => {
        console.error('Error to get the information of products', err.message);
    });
