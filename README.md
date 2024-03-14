# Firebase Messaging API Server

This server application demonstrates how to authenticate with Google using a service account and retrieve access tokens for accessing Firebase Messaging API.

## Installation

2. Install dependencies:
   ```
   npm install
   ```

3. Place your service account JSON file (`service-account.json`) in the root directory of the project.

## Configuration

Before running the server, ensure that you have set up the necessary environment variables or configurations:

1. **Port**: By default, the server runs on port 3000. You can change this by modifying the `PORT` constant in the `index.js` file.

2. **Google Cloud API Credentials**: Make sure you have a service account JSON file (`service-account.json`) with appropriate permissions for accessing the Firebase Messaging API. Update the `SCOPES` constant in `index.js` if needed.

## Usage

To start the server, run the following command:

```
npm start
```

Once the server is running, you can access the authentication tokens by making a GET request to the root endpoint (`/`). The server will respond with the tokens in JSON format.

## Dependencies

- [googleapis](https://www.npmjs.com/package/googleapis): Node.js client library for accessing Google APIs.
- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [cors](https://www.npmjs.com/package/cors): Node.js CORS middleware.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to adjust or expand this README according to your specific needs and preferences.
