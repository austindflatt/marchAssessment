const User = require('../model/usersModel');

const createUser = async (req, res) => {
    try {
    	const { name, age, favoriteMovies } = req.body;
		const newUser = new User({
			name,
			age,
			favoriteMovies
		})
		const savedUser = await newUser.save();
		res.status(200).json({ message: 'User was created', payload: savedUser });
    } catch (error) {
		console.log(error)
        res.status(500).json({ message: 'There is an error', error: error })
    }
};

const getUser = async (req, res) => {
    try {
		const { id } = req.params;
        let user = await User.findById(id);
		if(!user){
			throw { message: 'No user with that ID was found' }
		}
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        let updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: 'User was updated', payload: updateUser });
    } catch (error) {
        res.status(500).json({ message: 'There is an error', error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        let deleteUser = await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'User was deleted', payload: deleteUser });
    } catch (error) {
        res.status(500).json({ message: 'There is an error', error: error.message });
    }
}


module.exports = {
    createUser,
	getUser,
	updateUser,
	deleteUser
}