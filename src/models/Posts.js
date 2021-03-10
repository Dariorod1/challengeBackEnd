import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Categories from './Categories';
const S = Sequelize;

const Posts = sequelize.define('posts', {
    id: {
        type: S.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: S.TEXT,
        allowNull: false
    },
    content: {
        type: S.TEXT,
        allowNull: false
    },
    date: {
        type: S.DATE,
        allowNull: false
    }
}, { timestamps: false })






export default Posts;