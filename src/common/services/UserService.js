/**
 * Created by jack on 16-9-9.
 */

class UserService {
	isLogin(user = {}) {
		return user.isLogin;
	}

	signIn() {
		return Promise.resolve(true);
	}
}

export default new UserService();
