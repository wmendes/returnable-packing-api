import app from './app';
import prisma from './models/packModel';

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    await prisma.$connect();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    await prisma.$disconnect();
  }
};

main();
