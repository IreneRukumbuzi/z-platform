import express from "express";
import userController from "../controllers/UserController";
import {
  signInSchema,
  signupSchema,
  verifyUserSchema,
  verifyResetPasswordSchema,
  additionalUserDetails,
} from "../middlewares/validations/schema/user";
import validator from "../middlewares/validator";
import { multerUploads } from "../middlewares/multer";
import { cloudinaryConfig } from "../middlewares/cloudinary";
import { allowIfHasToken } from "../middlewares/auth";

const router = express.Router();

router.use("*", cloudinaryConfig);

router.post(
  "/signup",
  multerUploads,
  validator(signupSchema),
  userController.registerUser
);
router.post("/signin", validator(signInSchema), userController.signIn);
router.post("/multi-factor", allowIfHasToken, userController.multiFactorAuth);
router.put(
  "/users",
  multerUploads,
  validator(additionalUserDetails),
  allowIfHasToken,
  userController.uploadIDimage
);

router.put("/verify", validator(verifyUserSchema), userController.verifyUser);
router.put(
  "/reset",
  validator(verifyResetPasswordSchema),
  userController.resetPassword
);
router.put("/forgot-password/:email", userController.forgotPassword);

export default router;
