## Reflection Questions

### 1. What is the difference between `res.send()` and `res.sendFile()`? When would you use one over the other?

`res.send()` is a general-purpose method used to send a variety of data types, such as strings or HTML snippets.

`res.sendFile()`, on the other hand, is specifically designed to read a file from the file system and stream its contents to the client.

**Usage:**

- Use **`res.send()`** for API responses (JSON) or quick debugging messages.
- Use **`res.sendFile()`** when you need to serve complete files like HTML pages, images, or PDFs.

### 2. Why is the `path` module necessary when serving files? What could go wrong if you just used a relative path like `'public/index.html'`?

The `path` module is necessary to ensure cross-platform compatibility and reliability. Operating systems handle file paths differently (Windows uses backslashes `\`, while macOS and Linux use forward slashes `/`). The `path.join()` method constructs the path correctly regardless of the OS.

If you use a simple relative path like `'public/index.html'`, Node.js resolves it relative to the **_Current Working Directory_** (where you ran the `node` command), not necessarily where the `server.js` file is located. If you run the server from a different folder, the application will crash with a "File Not Found" error. Using `__dirname` combined with `path` ensures the path is always absolute and correct.

### 3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?

To add a menu page, I would follow add the Route In `server.js`, add a new `GET` route handler for the menu page (e.g. `/menu`). Inside that handler, use `res.sendFile()` with `path.join(__dirname, 'public', 'menu.html')`.
