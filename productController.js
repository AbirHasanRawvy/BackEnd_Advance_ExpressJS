//! Create a product;
exports.createProduct = (req, res)=>{

    try {

        let data = req.body;
        //let data = {Name:"Mobile", Price: 30000 };

        res.status(200).json({ status: "success", data: data});
    } catch (error) {
        res.status(500).json({status:"Error", error: error.toString() });
    }
};
