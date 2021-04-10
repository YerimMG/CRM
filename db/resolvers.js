const User = require("../Models/User");
const bcryptjs = require("bcryptjs");
var jwt = require('jsonwebtoken');


const createJWT = (user) => {
	const { nombre, apellido, id, email } = user
	const expiresIn = "100d"
	return jwt.sign({ id, email, nombre, apellido }, process.env.SECRETA, { expiresIn })
}

const resolvers = {
	Query: {
		obtenerCurso: () => "Hola"
	},

	Mutation: {
		nuevoUsuario: async (_, { input }) => {
			const { email, password } = await input;
			// Revisar que no exista
			const existe = await User.findOne({ email });
			if (existe) {
				throw new Error("Email ya registrado")
			}

			try {
				// bcryptjs
				const salt = await bcryptjs.genSalt(10);
				input.password = await bcryptjs.hash(password, salt);


				// Guardar en BDD
				const newUser = new User(input);
				newUser.save();
				return newUser;

			} catch (error) {
				console.log(error);
			}
		},
		autenticarUsuario: async (_, { input }) => {
			const { email, password } = input;

			// Existe el usuario
			const existeUser = await User.findOne({ email });
			if (!existeUser) {
				throw new Error("Email o contraseña son incorrectos")
			} else {
				const passwordCorretcto = await bcryptjs.compare(password, existeUser.password)

				if (!passwordCorretcto) {
					throw new Error("Email o contraseña son incorrectos")

				} else {
					return {
						token: createJWT(existeUser)
					}
				}
			}
		}



	}
};



module.exports = resolvers