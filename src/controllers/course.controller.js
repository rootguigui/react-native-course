const Course = require('../models/Course');

class CourseController {
  async courses(req, res) {
    const courses = await Course.find();
    return res.send({ error: false, data: { courses }, message: 'cursos listados com sucesso' });
  }

  async getById(req, res) {
    const course = await Course.findById(req.params.id);
    return res.send({ error: false, data: { course }, message: 'curso encontrado com sucesso' });
  }

  async create(req, res) {
    try {

      if (!req.file) return res.status(400).send({ error: true, data: null, message: 'Selecione um arquivo para upload!' });

      const { name, category, description, author } = req.body;

      const course = new Course({ name, category, description, author, image: req.fileName });
  
      const result = await course.save();
  
      return res.send({ error: false, data: { course: result }, message: 'Curso cadastrado com sucesso!' });
    }
    catch(ex) {
      return res.status(500).send({ error: true, data: null, message: ex.message })
    }
  }

  async delete(req, res) {

  }

  async update(req, res) {

  }
}

module.exports.CourseController = new CourseController();