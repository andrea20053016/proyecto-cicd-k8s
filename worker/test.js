try {
  require('./index');
  console.log("Worker test: OK");
  process.exit(0);
} catch (e) {
  console.error("Worker test: FAIL", e);
  process.exit(1);
}
