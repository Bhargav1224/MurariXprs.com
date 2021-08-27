import React, { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [murari, setMurari] = useState([]);
	const [indData, setIndData] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const [isfav, setIsFav] = useState(false);

	const value = {
		murari,
		isfav,
		setIsFav,
		isLoading,
		setLoading,
		indData,
		setIndData,
		isError,
		setIsError,
		setMurari,
		isAuth,
		setIsAuth,
	};

	return (
		<div>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</div>
	);
};
