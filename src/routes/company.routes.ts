import { router } from "../constants/common";
import { getCompanies } from "../controllers/company.controller";

router.get("/", getCompanies);

export default router;