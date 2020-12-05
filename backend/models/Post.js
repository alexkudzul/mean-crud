const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {type: String, required: true},
    excerpt: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, required:true}
});

// Crear el modelo con el nombre Post y pasamos la estructura y Para usar en otras partes el modelo
module.exports = mongoose.model('Post', PostSchema);