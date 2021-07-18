const { Schema } = require('mongoose');

const productSchema = Schema(
  {
    name: {
      type: String,
      minlength: [2, 'Name should contain minimum 2 letters'],
      required: [true, 'Name is required'],
    },
    price: {
      type: Number,
      min: 0.01,
      required: true,
    },
    article: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator(value) {
          return value.length === 8;
        },
        message: props => `${props.value} is not a valid article number. Should be 8 symbols`,
      },
    },
    active: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ['basic', 'stock', 'less'],
      default: 'basic',
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = productSchema;
