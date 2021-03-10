import Categories from '../models/Categories';
import Posts from '../models/Posts';

export const createPost = async(req, res) => {
    const { title, content, date, categoryId } = req.body;
    try {
        let newPost = await Posts.create({
            title,
            content,
            date,
            categoryId
        }, {
            fields: ['title', 'content', 'date', 'categoryId']
        })
        if (newPost) {
            res.json({
                message: 'Post created succesfully',
                data: newPost
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something goes wrong"
        })
    }
};
export const updatePost = async(req, res) => {
    const { id } = req.params;
    const { title, content, date, categoryId } = req.body;

    const posts = await Posts.findAll({
        attributes: ['id', 'title', 'content', 'date', 'categoryId'],
        where: {
            id
        }
    })
    if (posts.length > 0) {
        posts.map(async post => {
            await post.update({
                title,
                content,
                date,
                categoryId
            })
        })
    };
    res.json({
        message: "Post updated succesfully"
    })
};

export const getPosts = async(req, res) => {
    let posts = await Posts.findAll({
        include: {
            model: Categories,
            attributes: ['name']
        },
        attributes: ['id', 'title']
    });
    res.json(posts)

};
export const deletePosts = async(req, res) => {
    const { id } = req.params;
    try {
        Posts.destroy({
            where: {
                id
            }
        }).then(() => res.json({
            message: "Post deleted succesfully"
        }))
    } catch (error) {
        res.json({
            message: "Something goes wrong"
        })
    }
};
export const getOnePost = async(req, res) => {
    const { id } = req.params;
    try {
        const post = await Posts.findOne({
            include: {
                model: Categories,
                attributes: ['name']
            },
            where: {
                id
            },
            attributes: ['id', 'title']
        })
        if (!post) {
            res.json({
                message: "Post doesnt exist"
            })
        }
        res.json(post)

    } catch (error) {
        res.send("No existe el post para ese id")
    }
}