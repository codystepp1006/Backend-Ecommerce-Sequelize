const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      // REFERENCES THE PRODUCTS MODEL ID
    },
    tag_id: {
      type: DataTypes.INTEGER,
      //REFERENCES THE TAG MODELS ID
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
// Product.belongsToMany(Tag, { through: ProductTag });
module.exports = ProductTag;
