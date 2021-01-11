const reducer = (
	
	state = {
        info: "",
        nombreUser: ""
	},
	action
	
) => {
	
	switch (action.type) {

		//accion que añadiría info
		
		case "ADD_INFO":
		return {
			...state,
			info: action.payload
		};

        //accion que añadiria el nombre de usuario a nombreUser

		case "ADD_INFO_USER":
		return {
			...state,
			nombreUser: action.payload
		};

		default:
		return state;
		
	};
	
};


export default reducer;