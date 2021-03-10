import Categories from '../models/Categories';
import Posts from '../models/Posts';


export const getCategories = async(req, res) => {
    let categories = await Categories.findAll({
        include: {
            model: Posts,
            attributes: ['id', 'title', 'date']
        }
    })
    console.log("traje las categories")
    res.json(categories)
};
export const getOneCategory = async(req, res) => {
    const { id } = req.params;
    try {
        let category = await Categories.findOne({
            include: {
                model: Posts,
                attributes: ['id', 'title']
            },
            where: {
                id
            }
        })
        if (!category) {
            res.json({
                message: "Not found category"
            })
        }
        res.json(category)
    } catch (error) {
        res.send("Something goes wron")
    }
}

export const createCategories = async(req, res) => {
    const { name, date } = req.body;

    try {
        let newCategory = await Categories.create({
            name,
            date
        }, {
            fields: ['name', 'date']
        });
        if (newCategory) {
            res.json({
                message: 'Category created succesfully',
                data: newCategory
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
export const updateCategory = async(req, res) => {
    const { id } = req.params;

}