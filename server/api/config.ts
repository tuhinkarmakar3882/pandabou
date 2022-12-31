import { defineEventHandler } from "h3";

export default defineEventHandler(() => ({
  featureFlagOne: true,
  featureFlagTwo: false,
}));
