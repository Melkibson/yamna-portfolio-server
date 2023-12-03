import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.sendStatus(401).json({ message: "Non autorisé" });

  const token = authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401).json({ message: "Non autorisé" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err)
      return res.sendStatus(403).json({ message: "Token invalide ou expiré" });

    req.user = user;
    next();
  });
};
