import React from "react";
import { createRoot } from "react-dom/client";
import MaterialApp from "./materialComponents/MaterialApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<MaterialApp />
	</Provider>
);
