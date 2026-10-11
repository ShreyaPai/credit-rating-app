import express from 'express'
import issuerRoutes from './routes/issuer.routes';
import feedbackRoutes from './routes/feedback.routes';
import cors from 'cors'

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET'],
}));

app.use("/api/issuers", issuerRoutes);
app.use("/api/feedback", feedbackRoutes);

// place error middleware here - common and end

app.listen(PORT, () => {
  console.log(`Server started on: ${PORT}`);
});