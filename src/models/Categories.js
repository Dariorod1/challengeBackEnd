import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Posts from './Posts';

const S = Sequelize;

const Categories = sequelize.define('categories', {
    id: {
        type: S.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: S.TEXT,
        allowNull: false
    },
    date: {
        type: S.DATE,
        allowNull: false
    }

}, { timestamps: false });

Categories.hasMany(Posts);
Posts.belongsTo(Categories)
sequelize.sync({ force: false })

export default Categories;