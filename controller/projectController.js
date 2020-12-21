import { db } from "../database";

export default class ProjectController {
  static async index(req, res, next) {
    const page = req.query.page;

    try {
      await db("projects")
        .limit(5)
        .offset((page - 1) * 5)
        .then((users) => res.json(users));
    } catch (error) {
      next(error);
    }
  }
  static async create(req, res, next) {
    try {
      const { title, user_id } = req.body;
      await db("projects")
        .insert({ title, user_id })
        .then((x) => res.status(201).send());
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    const { title, user_id } = req.body;
    const projectId = req.params.id;
    try {
      await db("projects")
        .update({ title, user_id })
        .where({ id: projectId })
        .then((x) => res.status(202).send());
    } catch (error) {
      next(error);
    }
  }

  static async remove(req, res, next) {
    const projectId = req.params.id;
    try {
      await db("projects")
        .delete()
        .where({ id: projectId })
        .then((x) => res.status(202).send());
    } catch (error) {
      next(error);
    }
  }
}
