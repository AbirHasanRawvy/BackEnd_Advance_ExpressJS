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


//! Read product;
exports.readProduct = (req, res)=>{

    try {

        let data = {ProductName: "Mobile", Price: 5000};
        //let data = {Name:"Mobile", Price: 30000 };

        res.status(200).json({ status: "success", data: data});
    } catch (error) {
        res.status(500).json({status:"Error", error: error.toString() });
    }
};

//! Update product;
exports.updateProduct = (req, res)=>{

    try {

        let id = req.params.id
        let data = req.body;
        //let data = {Name:"Mobile", Price: 30000 };

        res.status(200).json({ status: "success", data: data, id: id});
    } catch (error) {
        res.status(500).json({status:"Error", error: error.toString() });
    }
};


