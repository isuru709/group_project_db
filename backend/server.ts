import app from "./app";
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌐 Backend running at http://0.0.0.0:${PORT}`);
    console.log(`🌐 Accessible at http://34.124.230.151:${PORT}`);
});
