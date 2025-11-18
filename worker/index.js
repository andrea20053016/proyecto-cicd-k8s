console.log("Worker iniciado...");

setInterval(() => {
  console.log("Worker ejecutando tarea a las", new Date());
}, 5000);
