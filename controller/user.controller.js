import { db } from "../database/index";

export default class UserController {
  static async index(req, res, next) {
    try {
      await db("users").then((users) => res.json(users));
    } catch (error) {
      next(error);
    }
  }
  static async create(req, res, next) {
    try {
      const { username } = req.body;
      await db("users")
        .insert({ username })
        .then((x) => res.status(201).send());
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    const { username } = req.body;
    const userId = req.params.id;
    try {
      await db("users")
        .update({ username })
        .where({ id: userId })
        .then((x) => res.status(202).send());
    } catch (error) {
      next(error);
    }
  }

  static async remove(req, res, next) {
    const userId = req.params.id;
    try {
      await db("users")
        .delete()
        .where({ id: userId })
        .then((x) => res.status(202).send());
    } catch (error) {
      next(error);
    }
  }
}
