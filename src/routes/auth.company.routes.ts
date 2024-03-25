import { router } from "../constants/common";
import { createCompany, deleteCompany, updateCompany } from "../controllers/company.controller";
import schemaValidator from "../middleware/schema.validator";

router.post("/", schemaValidator("/create_company"), createCompany);
router.patch("/:id", schemaValidator("/update_company"), updateCompany);
router.delete("/:id", deleteCompany);

export default router;