const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          "private-key": "851431bf-7ccd-4db4-8c40-2b5896fb4433",
        },
      }
    );

    return res.json({ username: username, secret: "sha256..." });
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
