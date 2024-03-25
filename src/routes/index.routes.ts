import { router } from "../constants/common";
import authCompanyRoutes from "./auth.company.routes";
import companyRoutes from "./company.routes";

router.use("/auth", authCompanyRoutes);
router.use("/company", companyRoutes);

export default router;