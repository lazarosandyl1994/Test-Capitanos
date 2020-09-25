# Despliegue del proyecto

1. <pre><code>npm i</code></pre>
2. <pre><code>tsc index.ts</code></pre>
3. <pre><code>node index.js</code></pre>
4. Abrir el browser en localhost:3000

# Anotaciones

1. Los hunters pertenecientes a los amigos del usuario seleccionado no tienen el level entre +- 10 que el hunter select que aparece en la base de datos.
2. Al crear un index en una columna que solo puede tomar dos valores se incrementa el tiempo por eso no se crea un index para el campo locked.

# Creación de índices

-   <pre><code>db.hunters.createIndex({level: 1})</code></pre>
-   <pre><code>db.hunters.createIndex({user: 1})</code></pre>
