import { app } from "./express";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`));