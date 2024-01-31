const Sequelize = require('sequelize')
const { Model } = Sequelize

module.exports = ({ sequelize }, DataTypes) => {
  // Barbers
  class Barbers extends Model {
    static associate (models) {
      // A Barber can have many Reviews
      Barbers.hasMany(models.Reviews)
      // A Barber has an image
      Barbers.hasOne(models.Images)
    }
  }

  Barbers.modelName = 'Barbers'

  Barbers.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    gender: DataTypes.STRING
    // ... other barber attributes
  }, {
    sequelize,
    modelName: 'barbers'
  })

  // Reviews
  class Reviews extends Model {
    static associate (models) {
      // A Review belongs to a single Barber
      Reviews.belongsTo(models.Barbers)
      // A Review belongs to a single User
      Reviews.belongsTo(models.Users)
    }
  }

  Reviews.modelName = 'Reviews'

  Reviews.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    starRating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    }
    // ... other review attributes
  }, {
    sequelize,
    modelName: 'reviews'
  })

  // Users
  class Users extends Model {
    static associate (models) {
      // A User can have many Reviews
      Users.hasMany(models.Reviews)
    }
  }

  Users.modelName = 'Users'

  Users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
    // ... other user attributes
  }, {
    sequelize,
    modelName: 'users'
  })

  // Images
  class Images extends Model {
    static associate (models) {
      Images.belongsTo(models.Barbers)
    }
  }

  Images.modelName = 'Images'

  Images.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      index: DataTypes.INTEGER,
      uri: DataTypes.STRING
    },
    {
      timestamps: true,
      sequelize,
      modelName: 'images'
    }
  )

  return [
    Barbers,
    Reviews,
    Users,
    Images
  ]
}
