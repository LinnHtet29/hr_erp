import Joi from "joi";

const baseSchema = Joi.object({
    name: Joi.string().min(3),
    description: Joi.string().min(5),
    isDeleted: Joi.boolean()
});

export const companyCreateSchema = baseSchema.keys({
    name: Joi.string().min(3).required(),
});

export const companyUpdateSchema = baseSchema.keys({
    name: Joi.string().min(3),
})
