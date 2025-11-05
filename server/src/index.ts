import express from "express";
// import { getAllUsers, getUser, updateUser, creteUser, deleteUser } from "./controllers/userControllers.js";
import { userRouter } from "./router/userRouter.js";

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Hello from the server!");
  console.log(`Server is running on http://localhost:${PORT}/`);
});
app.use("/users", userRouter);
// app.get("/users", getAllUsers);
// app.post("/users", creteUser);
// app.get("/users/:id", getUser);
// app.put("/users/:id", updateUser);
// app.delete("/users/:id", deleteUser);

app.use(/.*/, (req, res) =>{
    res.status(404).json({message: "page not found"});
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
