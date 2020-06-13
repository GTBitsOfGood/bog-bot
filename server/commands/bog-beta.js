import { Command } from "../models/command";
import { Role } from "../models/member";

export default new Command({
  desc: "Abcdef",
  permissionLevel: Role.MEMBER
}, (req, res) => {
  res.nextRes.status(200).send("Hello, World!");
});
